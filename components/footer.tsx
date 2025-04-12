"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import {Linkedin, Mail} from "lucide-react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-t from-background to-transparent py-12 relative">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.1),transparent_70%)]"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                        <Link href="/" className="text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                              Ernest
                            </span>
                            <span> 👨‍💻</span>
                        </Link>
                        <p className="mt-2 text-muted-foreground">Software Engineer specializing in full-stack
                            development</p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="flex space-x-4 mt-6 md:mt-0"
                    >
                        <Link
                            href="https://github.com/quantum-ernest"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/ernest-asare-484011162"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://x.com/xcuba_22"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <FontAwesomeIcon icon={faXTwitter}/>
                            <span className="sr-only">X</span>
                        </Link>
                        <Link
                            href="mailto:ernestasare2411@gmail.com"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Mail className="h-5 w-5"/>
                            <span className="sr-only">Email</span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground"
                >
                    <p>© {currentYear} Ernest Kwabena Asare. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    )
}
