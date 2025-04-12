import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Articles from "@/components/articles"
import Certifications from "@/components/certifications"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Articles />
        <Certifications />
      </div>
      <Footer />
    </main>
  )
}
