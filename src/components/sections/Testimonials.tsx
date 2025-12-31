"use client";

import { motion } from "framer-motion";
import { CheckCheck, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#0A0A0B] overflow-hidden relative">
      {/* Background Decor - Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-violet/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header - Refined Typography */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <MessageSquare size={12} fill="currentColor" className="opacity-70" />
            Social Proof
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-fuchsia-400">Mereka?</span>
          </h3>
          <p className="text-gray-500 max-w-lg mx-auto font-light leading-relaxed">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah obrolan jujur dari mereka yang telah bertumbuh bersama kami.
          </p>
        </div>

        {/* Chat Grid - Masonry-like stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {TESTIMONIALS.map((chat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.21, 0.45, 0.32, 0.9] 
              }}
              className={`flex flex-col ${index === 1 ? 'md:translate-y-12' : ''}`}
            >
              <div className="group relative bg-[#0D0D0F] border border-white/5 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-brand-violet/30 transition-all duration-500">
                
                {/* User Header */}
                <div className="flex items-center gap-4 mb-5 pb-3 border-b border-white/[0.03]">
                  <div className="relative">
                    <img 
                      src={chat.avatar} 
                      alt={chat.name} 
                      className="w-11 h-11 rounded-full object-cover border border-white/10 grayscale-[0.5] group-hover:grayscale-0 transition-all" 
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0D0D0F] rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{chat.name}</h4>
                    <p className="text-brand-violet text-[10px] font-black uppercase tracking-widest">{chat.role}</p>
                  </div>
                </div>

                {/* Message Bubble - Modified to match premium dark theme */}
                <div className="bg-[#1A1B1E] p-4 rounded-2xl rounded-tl-none relative border border-white/5 shadow-inner">
                  {/* Bubble Tail */}
                  <div className="absolute -left-2 top-0 w-0 h-0 border-t-[12px] border-t-[#1A1B1E] border-l-[12px] border-l-transparent" />
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 font-light">
                    "{chat.message}"
                  </p>
                  
                  <div className="flex items-center justify-end gap-1.5 opacity-60">
                    <span className="text-[10px] text-gray-500 font-medium uppercase">{chat.time}</span>
                    <CheckCheck size={14} className="text-blue-400" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </div>
              
              {/* Status Indicator */}
              <div className="mt-4 flex items-center gap-2 px-4 opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="flex gap-1">
                   <span className="w-1 h-1 rounded-full bg-brand-violet animate-bounce [animation-delay:-0.3s]"></span>
                   <span className="w-1 h-1 rounded-full bg-brand-violet animate-bounce [animation-delay:-0.15s]"></span>
                   <span className="w-1 h-1 rounded-full bg-brand-violet animate-bounce"></span>
                 </div>
                 <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none">Verified Review</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}