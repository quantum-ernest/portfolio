"use client"

import {motion} from "framer-motion"
import {useInView} from "framer-motion"
import {useRef} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Briefcase, Calendar} from "lucide-react"
import {experiences} from "@/data/experience"

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    }

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I've had the privilege to work with.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card>
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl">{exp.position}</CardTitle>
                                            <CardDescription
                                                className="text-lg font-medium mt-1">{exp.company}</CardDescription>
                                        </div>
                                        <Badge variant="outline" className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3"/>
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <CardDescription className="flex items-center gap-1 mt-1">
                                        <Briefcase className="h-3 w-3"/>
                                        {exp.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 list-disc pl-5">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
