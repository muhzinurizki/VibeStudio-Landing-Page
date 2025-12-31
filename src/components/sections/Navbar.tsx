"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek scroll untuk memberikan kedalaman (depth) saat user menjelajah
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-brand-slate/70 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo Area dengan High-End Feel */}
          <Link href="/" className="flex items-center gap-2.5 group transition-transform active:scale-95">
            <div className="bg-brand-violet/20 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-500">
              <Sparkles className="text-brand-violet w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white uppercase italic">
              VIBE<span className="text-brand-violet not-italic">STUDIO</span>
            </span>
          </Link>

          {/* Desktop Navigation - Minimalist & Balanced */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-violet transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <button className="relative overflow-hidden bg-brand-violet text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95">
              <span className="relative z-10">Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay dengan Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-slate/95 backdrop-blur-2xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-300 hover:text-brand-violet flex justify-between items-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <button className="w-full mt-4 bg-brand-violet text-white py-4 rounded-2xl font-bold shadow-lg shadow-brand-violet/20">
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}