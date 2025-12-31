"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Code2, Coffee, Zap, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Decor - Orbital Light */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[3.5rem] p-8 md:p-20 overflow-hidden"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

            {/* Kolom Kiri: Avatar & Identity */}
            <div className="flex flex-col items-center gap-8 shrink-0">
              <div className="relative group">
                {/* Animated Ring Decor */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-violet via-fuchsia-500 to-transparent rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse" />

                {/* Avatar Frame */}
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent shadow-2xl">
                  <div className="w-full h-full rounded-full bg-[#0F172A] overflow-hidden border-4 border-[#0A0A0B]">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=0f172a&flip=false"
                      alt="Founder VibeStudio"
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-2 right-4 bg-[#0A0A0B] border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  <span className="text-[10px] text-white font-black uppercase tracking-widest">Available</span>
                </div>
              </div>

              {/* Social Connect - Premium Style */}
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", label: "IG" },
                  { icon: Linkedin, href: "#", label: "IN" },
                  { icon: Github, href: "#", label: "GH" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-violet/50 transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity text-brand-violet uppercase tracking-widest">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Kolom Kanan: Storytelling */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  <Sparkles size={14} className="animate-spin-slow" />
                  <span>The Visionary Behind VibeStudio</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                  Membangun Digital Identity <br />
                  <span className="text-gray-500">Bukan Sekadar Baris Kode.</span>
                </h3>

                <div className="space-y-6 mb-12">
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    Melihat banyaknya potensi lokal yang terhambat oleh <span className="text-white font-medium italic">"Bad Digital Presence"</span>, saya membangun <span className="text-white font-bold border-b-2 border-brand-violet/30">VibeStudio</span> sebagai solusi.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    Filosofi saya simpel: <span className="text-brand-violet font-bold">High Aesthetic, High Performance, Low Friction.</span> Saya ingin setiap bisnis memiliki kesempatan untuk terlihat seperti brand bernilai jutaan dollar.
                  </p>
                </div>

                {/* Value Tags - Animated */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {[
                    { icon: Coffee, text: "Caffeine Driven", color: "text-orange-400" },
                    { icon: Zap, text: "Problem Solver", color: "text-yellow-400" },
                    { icon: Code2, text: "Pixel Perfect", color: "text-blue-400" }
                  ].map((tag, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-300 text-xs font-bold tracking-wide shadow-inner"
                    >
                      <tag.icon size={16} className={tag.color} />
                      <span>{tag.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}