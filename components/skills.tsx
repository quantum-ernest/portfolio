"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {Server, Layout, Database, Cloud, Code, Terminal, Activity, Send, Globe} from "lucide-react"

const skillCategories = [
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["FastAPI", "Django", "Flask", "Express", "Odoo", "REST", "SOAP", "gRPC", "GraphQL"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "Vue.js"],
    color: "from-cyan-500 to-teal-400",
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    color: "from-teal-500 to-green-400",
  },
  {
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "TypeScript", "Go"],
    color: "from-primary to-blue-400",
  },
  {
    name: "DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS", "LDAP", "Ansible"],
    color: "from-purple-500 to-indigo-400",
  },
  {
    name: "Infrastructure",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Linux", "Nginx", "Caddy"],
    color: "from-gray-500 to-zinc-400",
  },
  {
    name: "Monitoring & Analytics",
    icon: <Activity className="h-6 w-6" />,
    skills: ["Grafana", "Prometheus", "Looker Studio"],
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Messaging & Streaming",
    icon: <Send className="h-6 w-6" />,
    skills: ["Kafka"],
    color: "from-yellow-500 to-amber-400",
  },
  {
    name: "CMS & Platforms",
    icon: <Globe className="h-6 w-6" />,
    skills: ["WordPress"],
    color: "from-lime-500 to-green-400",
  },
]


export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I have experience with a wide range of technologies across different domains of software development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-md bg-gradient-to-br ${category.color} mr-3 text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm transition-all duration-300 hover:bg-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
