"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, ShieldCheck, Sparkles, Cpu } from "lucide-react";

const AI_FEATURES = [
  {
    icon: Zap,
    title: "Sat-Set Delivery",
    desc: "AI membantu kami mempercepat penulisan kode dasar, sehingga website Anda selesai dalam hitungan hari, bukan minggu.",
    accent: "from-amber-400/20"
  },
  {
    icon: BrainCircuit,
    title: "Smart Customization",
    desc: "Kami menggabungkan kecerdasan buatan dengan kreativitas manusia untuk desain yang unik dan fungsional.",
    accent: "from-cyan-400/20"
  },
  {
    icon: ShieldCheck,
    title: "Clean & Secure Code",
    desc: "Audit kode berbasis AI memastikan setiap baris program yang kami kirimkan aman, ringan, dan standar industri.",
    accent: "from-brand-violet/20"
  }
];

export default function AiTech() {
  return (
    <section className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Futuristic Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl backdrop-blur-md"
        >
          <Cpu size={14} className="animate-pulse" />
          <span>Next-Gen Development Workflow</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
          Kreativitas Manusia. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-cyan-400 to-fuchsia-400 bg-[length:200%_auto] animate-gradient-x">
            Kecerdasan Buatan.
          </span>
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-24 leading-relaxed font-light text-lg">
          Di <span className="text-white font-medium">VibeStudio</span>, kami menggabungkan insting desain manusia dengan efisiensi AI untuk menghasilkan produk digital yang <span className="text-cyan-400 italic underline underline-offset-4 decoration-cyan-400/30 font-semibold">10x lebih cepat</span> tanpa kompromi kualitas.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AI_FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden text-left"
            >
              {/* Subtle Corner Accent */}
              <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${item.accent} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Icon Container with Tech Look */}
              <div className="relative z-10 w-16 h-16 bg-[#0F172A] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500">
                <item.icon size={32} className="text-white group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line Decor */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action (Small) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles size={14} className="text-brand-violet" />
          <span>Powered by Claude, GPT-4o & Modern Tech Stack</span>
        </motion.div>

      </div>
    </section>
  );
}