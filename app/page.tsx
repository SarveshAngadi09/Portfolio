import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Teaching } from "@/components/teaching"
import { BlogPreview } from "@/components/blog-preview"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Teaching />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
