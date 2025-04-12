"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects, projectCategories } from "@/data/projects"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {projectCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory}>
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="wait">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      layout
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <Card className="h-full flex flex-col overflow-hidden group">
                        <div className="aspect-video overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{project.title}</CardTitle>
                            {project.featured && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="mt-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="bg-background">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubLink || "#"}>
                              <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                          </Button>
                          <Button size="sm" asChild className="relative overflow-hidden">
                            <Link href={project.demoLink || "#"}>
                              <span>Live Demo</span>
                              <motion.div
                                className="absolute right-2"
                                animate={
                                  hoveredProject === project.id
                                    ? {
                                        x: [0, 5, 0],
                                        opacity: [0, 1, 1],
                                      }
                                    : { opacity: 0 }
                                }
                                transition={{ duration: 0.5 }}
                              >
                                <ArrowRight className="h-4 w-4" />
                              </motion.div>
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
