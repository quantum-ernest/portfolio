"use client"

import {Button} from "@/components/ui/button"
import {motion} from "framer-motion"
import {ArrowRight, Download, Linkedin} from "lucide-react"
import Link from "next/link"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-10 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div
                    className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div
                    className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="backdrop-blur-sm bg-background/30 p-8 rounded-2xl border border-white/10 shadow-xl"
                    >
                        <div
                            className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            Software Engineer
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                            Ernest Kwabena Asare
                        </h1>
                        <p className="text-lg mb-8 max-w-lg">
                            I specialize in building robust applications with expertise in backend, frontend, DevOps,
                            and automation.
                            Passionate about creating efficient and scalable solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                asChild
                                className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 transition-all duration-300 shadow-lg"
                            >
                                <Link href="/projects" className="flex items-center">
                                    View Projects
                                    <ArrowRight
                                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="border-primary/20 hover:border-primary/50 backdrop-blur-sm bg-white/5 transition-all duration-300"
                            >
                                <a href="/ernest-asare-cv.pdf" download="Ernest-Asare-CV.pdf"
                                   className="flex items-center">
                                    <Download className="mr-2 h-4 w-4"/> Download CV
                                </a>
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Find me on:</span>
                            <div className="flex gap-3">
                                <motion.div whileHover={{y: -3}} transition={{type: "spring", stiffness: 400}}>
                                    <Button variant="ghost" size="icon"
                                            className="rounded-full bg-white/10 hover:bg-white/20" asChild>
                                        <Link href="https://github.com/quantum-ernest" target="_blank">
                                            <FontAwesomeIcon icon={faGithub}/> <span className="sr-only">GitHub</span>
                                        </Link>
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{y: -3}} transition={{type: "spring", stiffness: 400}}>
                                    <Button variant="ghost" size="icon"
                                            className="rounded-full bg-white/10 hover:bg-white/20" asChild>
                                        <Link href="https://www.linkedin.com/in/ernest-asare-484011162" target="_blank">
                                            <Linkedin className="h-5 w-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{y: -3}} transition={{type: "spring", stiffness: 400}}>
                                    <Button variant="ghost" size="icon"
                                            className="rounded-full bg-white/10 hover:bg-white/20" asChild>
                                        <Link href="https://x.com/xcuba_22" target="_blank">
                                            <FontAwesomeIcon icon={faXTwitter}/>
                                            <span className="sr-only">X</span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div
                                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-gray-500 opacity-75 blur-2xl animate-pulse"></div>
                            <div
                                className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src="/profile_pic.png?height=500&width=500"
                                    alt="Ernest Kwabena Asare"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 p-3 rounded-full shadow-lg"
                                initial={{y: 0}}
                                animate={{y: [-5, 5, -5]}}
                                transition={{repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut"}}
                            >
                                <div className="text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-10 -left-8 bg-white dark:bg-gray-900 p-3 rounded-full shadow-lg"
                                initial={{y: 0}}
                                animate={{y: [5, -5, 5]}}
                                transition={{repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut"}}
                            >
                                <div className="text-cyan-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
