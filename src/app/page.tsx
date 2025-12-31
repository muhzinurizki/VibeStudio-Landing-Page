import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import About from '@/components/sections/About'
import AiTech from '@/components/sections/AiTech'
import Testimonials from '@/components/sections/Testimonials'
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/ui/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-slate">
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Pricing />
      <About />
      <AiTech />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  )
}
