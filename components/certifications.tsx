"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import Autoplay from "embla-carousel-autoplay"
import {certifications} from "@/data/certifications";

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useMobile()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications I've earned throughout my career.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2 md:basis-1/3 lg:basis-1/4"}>
                  <motion.div
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <motion.div
                            animate={
                              hoveredIndex === index
                                ? {
                                    rotate: [0, 15, -15, 0],
                                    transition: { duration: 0.5 },
                                  }
                                : {}
                            }
                          >
                            <Award className="h-8 w-8 text-primary" />
                          </motion.div>
                          <Badge variant="outline">{cert.date}</Badge>
                        </div>
                        <CardTitle className="mt-4">{cert.title}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <Link
                          href={cert.link}
                          className="text-sm text-primary flex items-center hover:underline"
                          target="_blank"
                        >
                          View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 bg-background" />
              <CarouselNext className="-right-6 bg-background" />
            </div>
          </Carousel>
          {isMobile && (
            <div className="flex justify-center mt-4 gap-1">
              {certifications.map((_, index) => (
                <div key={index} className="h-2 w-2 rounded-full bg-primary/30" />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
