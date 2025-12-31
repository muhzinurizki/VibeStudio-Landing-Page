"use client";

import { motion } from "framer-motion";
import { Sparkles, Instagram, Twitter, Linkedin, ArrowUp, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Identity - 5 Columns */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/10 flex items-center justify-center group-hover:bg-brand-violet transition-colors duration-500">
                <Sparkles className="text-brand-violet group-hover:text-white w-5 h-5 transition-colors" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                VIBE<span className="text-brand-violet">STUDIO</span>
              </span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm font-light mb-8">
              Membangun standar baru dalam kehadiran digital. Kami menggabungkan estetika premium dengan teknologi AI untuk performa bisnis yang tak tertandingi.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-400 hover:border-brand-violet/50 hover:text-white hover:bg-brand-violet/10 transition-all duration-300"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation - 3 Columns */}
          <div className="md:col-span-3 md:pl-10">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-gray-500 hover:text-brand-violet transition-all text-sm font-medium"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office/Contact - 4 Columns */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Ready to Evolve?</h4>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem]">
              <p className="text-gray-400 text-sm mb-6 font-light italic">
                "Punya ide gila? Mari kita eksekusi menjadi kenyataan digital."
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-white font-bold text-sm border-b-2 border-brand-violet pb-1 hover:gap-4 transition-all duration-300"
              >
                Mulai Proyek Sekarang <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[11px] font-bold uppercase tracking-[0.1em]">
            <p className="text-gray-600">
              © {new Date().getFullYear()} VibeStudio. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-brand-violet transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-brand-violet transition-colors">Terms</a>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-full text-gray-400 hover:text-white hover:border-brand-violet transition-all duration-300"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-violet group-hover:text-white transition-colors">
              <ArrowUp size={14} strokeWidth={3} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}