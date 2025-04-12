"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
    try {
        const validatedFields = formSchema.parse(formData)

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT as string, 10),
            secure: process.env.SMTP_SECURE_SSL === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const info = await new Promise<any>((resolve, reject) => {
            transporter.sendMail({
                from: `"Ernest Portfolio Site" <${process.env.MAIL_SENDER}>`,
                to: process.env.MAIL_RECEIVER,
                subject: `New Message from ${validatedFields.name}: ${validatedFields.subject}`,
                html: `
                <p><strong>Name:</strong> ${validatedFields.name}</p>
                <p><strong>Email:</strong> ${validatedFields.email}</p>
                <p><strong>Subject:</strong> ${validatedFields.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${validatedFields.message}</p>
            `,
            }, (error, info) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(info)
                }
            })
        })
        return { success: true, message: "Email sent successfully!", info }

    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: `Validation failed. Please check your inputs. ${error.errors[0].message}`,
                errors: error.errors,
            }
        }
        if (error instanceof Error) {
            return { success: false, message: `Failed to send email: ${error.message}` }
        }
        return { success: false, message: "Failed to send email. Please try again later." }
    }
}
