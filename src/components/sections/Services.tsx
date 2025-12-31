"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[150px] rounded-full -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title Area - Refined Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-brand-violet"></span>
              <span className="text-brand-violet font-bold tracking-[0.3em] uppercase text-xs">
                Our Expertises
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Layanan Spesialis <br /> 
              <span className="text-gray-500">Masa Depan Digitalmu.</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-[280px] text-sm md:text-base leading-relaxed font-light border-l border-white/10 pl-6 mb-2">
            Pilih strategi yang paling presisi untuk mengakselerasi pertumbuhan bisnismu.
          </p>
        </div>

        {/* Services Grid - Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-violet/20 transition-all duration-700 overflow-hidden flex flex-col h-full"
            >
              {/* Animated Background Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700 rounded-full`} />
              
              {/* Icon & Label */}
              <div className="relative z-10 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-brand-violet group-hover:border-brand-violet/50 transition-all duration-500 shadow-2xl">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <p className="text-brand-violet font-bold text-[10px] uppercase tracking-[0.25em] mb-3 opacity-80">
                  {service.subtitle}
                </p>
                <h4 className="text-3xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h4>

                <ul className="space-y-5 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors">
                      <CheckCircle2 size={18} className="text-brand-violet mt-0.5 shrink-0" />
                      <span className="text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - High Value Look */}
              <button className="relative z-10 w-full group/btn overflow-hidden mt-auto">
                <div className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold transition-all duration-500 group-hover/btn:bg-brand-violet group-hover/btn:shadow-[0_10px_30px_rgba(139,92,246,0.3)]">
                  <span className="text-sm">Mulai Proyek</span>
                  <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}