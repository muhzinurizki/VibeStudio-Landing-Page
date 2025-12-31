'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/constants/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/[0.05] py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - VibeStudio Style */}
          <Link href="/" className="flex items-center gap-2 group relative z-[110]">
            <div className="bg-brand-violet/20 p-2 rounded-xl group-hover:rotate-12 group-hover:bg-brand-violet group-hover:text-white transition-all duration-500 text-brand-violet">
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase italic leading-none">
              VIBE<span className="text-brand-violet not-italic">STUDIO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[13px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-violet transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Premium CTA Button */}
            <Link
              href="#contact"
              className="group relative overflow-hidden bg-brand-violet text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Konsultasi</span>
              <ArrowRight
                size={14}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] p-2 text-white bg-white/5 rounded-xl border border-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-[100]"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] bg-[#0D0D0F] border-l border-white/5 p-8 pt-24 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black text-white hover:text-brand-violet transition-colors uppercase tracking-tighter flex items-center justify-between group"
                    >
                      {link.label}
                      <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-violet" />
                    </Link>
                  </motion.div>
                ))}

                <div className="h-[1px] bg-white/5 my-4" />

                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-violet text-white py-5 rounded-2xl font-black uppercase tracking-widest text-center shadow-2xl shadow-brand-violet/20"
                >
                  Mulai Proyek
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
