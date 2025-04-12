import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-primary/10 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10 blur-3xl"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
