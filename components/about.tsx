"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ernest Kwabena Asare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <p className="text-lg">
                I am a passionate Software Engineer with extensive experience in building robust and scalable
                applications. My expertise spans across backend, frontend, DevOps, and automation technologies.
              </p>

              <p>
                With a strong foundation in computer science and years of practical experience, I approach each project
                with a focus on creating efficient, maintainable, and user-friendly solutions. I enjoy tackling complex
                problems and continuously learning new technologies to stay at the forefront of the industry.
              </p>

              <p>
                My technical versatility allows me to contribute to all aspects of the software development lifecycle,
                from designing system architecture to implementing features and ensuring smooth deployment and
                operation.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="font-semibold">Name:</h3>
                  <p>Ernest Kwabena Asare</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>ernest@example.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Location:</h3>
                  <p>Ghana</p>
                </div>
                <div>
                  <h3 className="font-semibold">Availability:</h3>
                  <p>Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
