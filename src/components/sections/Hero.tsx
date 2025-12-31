'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, MousePointer2 } from 'lucide-react'
import { TECH_STACK } from '@/constants/tech'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]"
    >
      {/* Enhanced Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Kolom Kiri: Copywriting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-violet text-xs md:text-sm font-bold mb-8 tracking-widest uppercase shadow-inner">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Premium Web Experience</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[1] mb-8 tracking-tighter">
            Website Keren, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-fuchsia-400 to-brand-violet bg-[length:200%_auto] animate-gradient-x">
              Bisnis Paten.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light">
            Kami tidak hanya membuat website. Kami membangun{' '}
            <span className="text-white font-medium">identitas digital</span> yang eksklusif, cepat,
            dan dikonversi untuk pertumbuhan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group relative flex items-center justify-center gap-3 bg-brand-violet text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(139,92,246,0.3)] overflow-hidden">
              <span className="relative z-10">Konsultasi Gratis</span>
              <ArrowRight
                size={22}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>

            <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/[0.03] text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
              Lihat Paket
            </button>
          </div>
        </motion.div>

        {/* Kolom Kanan: Interactive Floating Constellation */}
        <div className="relative h-[500px] md:h-[650px] flex items-center justify-center">
          {/* Decorative Rings */}
          <div className="absolute w-[300px] h-[300px] border border-white/[0.03] rounded-[60px] rotate-12 animate-[spin_25s_linear_infinite]" />
          <div className="absolute w-[500px] h-[500px] border border-white/[0.02] rounded-full animate-[spin_45s_linear_infinite_reverse]" />

          {TECH_STACK.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: item.x,
                y: item.y,
                transition: {
                  opacity: { duration: 1, delay: item.delay },
                  y: {
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: item.delay,
                  },
                  x: {
                    duration: 4 + (index % 2),
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: item.delay,
                  },
                },
              }}
              whileHover={{ scale: 1.1, zIndex: 50, transition: { duration: 0.2 } }}
              className="absolute cursor-pointer group"
            >
              <div className="relative flex items-center gap-0 group-hover:gap-3 p-3 md:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-brand-violet/50 shadow-2xl">
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: `#${item.color}` }}
                />

                <img
                  src={`https://cdn.simpleicons.org/${item.name}/${item.color}`}
                  alt={item.label}
                  className="w-6 h-6 md:w-8 md:h-8 relative z-10"
                />

                <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-in-out text-white font-bold text-sm md:text-base whitespace-nowrap relative z-10">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Central Core Element */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(139,92,246,0.2)',
                '0 0 80px rgba(139,92,246,0.4)',
                '0 0 40px rgba(139,92,246,0.2)',
              ],
              y: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-gradient-to-br from-brand-violet to-fuchsia-600 p-10 rounded-[3rem] z-20 shadow-2xl relative"
          >
            <Sparkles size={64} className="text-white animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
