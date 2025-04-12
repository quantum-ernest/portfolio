"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import Autoplay from "embla-carousel-autoplay"
import {articles} from "@/data/articles";


export default function Articles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useMobile()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

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
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Articles</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles and tutorials I've written to share knowledge and insights.
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
              {articles.map((article, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-full md:basis-1/2 lg:basis-1/3"}>
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
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date} • {article.readTime}
                        </div>
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" asChild className={hoveredIndex === index ? "bg-primary/10" : ""}>
                          <Link href={article.link} target="_blank">
                            <motion.div
                              animate={
                                hoveredIndex === index
                                  ? {
                                      x: [0, 5, 0],
                                      transition: { repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, duration: 0.8 },
                                    }
                                  : {}
                              }
                              className="flex items-center"
                            >
                              <FileText className="mr-2 h-4 w-4" /> Read Article
                            </motion.div>
                          </Link>
                        </Button>
                      </CardFooter>
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
              {articles.map((_, index) => (
                <div key={index} className="h-2 w-2 rounded-full bg-primary/30" />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
