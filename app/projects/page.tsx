import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
