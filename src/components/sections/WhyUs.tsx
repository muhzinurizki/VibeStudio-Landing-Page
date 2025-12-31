"use client";

import { motion } from "framer-motion";
import { PAIN_POINTS } from "@/constants/features";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-violet/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section dengan Animasi Terarah */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-[1px] bg-brand-violet" />
            <span className="text-brand-violet font-bold tracking-[0.2em] uppercase text-xs">
              Masalah Anda, Solusi Kami
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            Gak perlu pusing mikirin <br />
            <span className="text-gray-500">aspek teknis website.</span>
          </motion.h2>
        </div>

        {/* Grid Cards dengan Bento-Inspired Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-violet/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-2xl flex items-center justify-center text-brand-violet mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl">
                <item.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-violet transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">
                  {item.description}
                </p>
              </div>

              {/* Decorative Corner Light */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-brand-violet/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}