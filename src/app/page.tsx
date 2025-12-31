import Navbar from '@/components/sections/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-slate">
      <Navbar />

      {/* Section lain akan dimasukkan di sini secara berurutan */}
      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hero Section Coming Soon...</h1>
      </section>
    </main>
  )
}
