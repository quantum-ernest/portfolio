import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Experience from "@/components/experience"
import Education from "@/components/education"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Experience />
        <Education />
      </div>
      <Footer />
    </main>
  )
}
