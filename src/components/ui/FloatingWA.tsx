'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
// import { getWhatsAppLink } from "@/utils/whatsapp";

export default function FloatingWA() {
  const [show, setShow] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true)
        // Tampilkan tooltip 1.5 detik setelah tombol muncul
        const timer = setTimeout(() => setShowTooltip(true), 1500)
        return () => clearTimeout(timer)
      } else {
        setShow(false)
        setShowTooltip(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="relative bg-white p-3 px-5 rounded-2xl shadow-2xl border border-gray-100 hidden md:block"
          >
            {/* Arrow Tooltip */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />

            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                  Muji — Founder
                </p>
                <p className="text-sm text-slate-800 font-medium">Ada yang bisa saya bantu?</p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-300 hover:text-gray-500 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 40 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="" // getWhatsAppLink("Halo VibeStudio...")
            target="_blank"
            className="relative group"
          >
            {/* Pulse Ring Animation */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />

            {/* Main Button */}
            <div className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] flex items-center justify-center overflow-hidden transition-all duration-300">
              <MessageCircle size={28} fill="currentColor" strokeWidth={1} />

              {/* Overlay Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Online Indicator Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
