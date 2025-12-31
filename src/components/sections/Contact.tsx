'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Package, MessageSquare, Sparkles } from 'lucide-react'
// Pastikan utility ini sudah sesuai dengan logic Anda
// const getWhatsAppLink = (msg) => `https://wa.me/62812345678?text=${encodeURIComponent(msg)}`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', package: 'Starter', note: '' })
  const [isFocused, setIsFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo VibeStudio! Nama saya ${formData.name}. Saya tertarik dengan paket ${formData.package}. \n\nCatatan: ${formData.note}`
    // window.open(getWhatsAppLink(message), "_blank");
    console.log('Redirecting to WA...', message)
  }

  return (
    <section id="contact" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Outer Glow Decoration */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-violet/20 to-fuchsia-500/20 rounded-[3.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />

          <div className="relative bg-[#0D0D0F] border border-white/5 p-8 md:p-16 rounded-[3.5rem] shadow-2xl overflow-hidden">
            {/* Animated Light Beam */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-violet/50 to-transparent" />

            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-[10px] font-black uppercase tracking-[0.3em] mb-6"
              >
                <Sparkles size={12} fill="currentColor" />
                Get Started
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Siap buat website{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-fuchsia-400">
                  Sat-Set?
                </span>
              </h3>
              <p className="text-gray-500 font-light max-w-md mx-auto">
                Konsultasikan ide Anda sekarang. Kami akan langsung mengarahkan Anda ke WhatsApp
                personal kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nama */}
                <div className="relative group/input">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                      isFocused === 'name' ? 'text-brand-violet' : 'text-gray-500'
                    }`}
                  >
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap"
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-brand-violet/50 focus:bg-white/[0.05] focus:ring-4 focus:ring-brand-violet/5 transition-all placeholder:text-gray-600 font-light"
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Select Package */}
                <div className="relative group/input">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                      isFocused === 'package' ? 'text-brand-violet' : 'text-gray-500'
                    }`}
                  >
                    <Package size={18} />
                  </div>
                  <select
                    onFocus={() => setIsFocused('package')}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-brand-violet/50 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer font-light"
                    onChange={e => setFormData({ ...formData, package: e.target.value })}
                  >
                    <option value="Starter" className="bg-[#0D0D0F]">
                      Paket Starter
                    </option>
                    <option value="Business" className="bg-[#0D0D0F]">
                      Paket Business
                    </option>
                    <option value="Custom" className="bg-[#0D0D0F]">
                      Paket Custom
                    </option>
                  </select>
                </div>
              </div>

              {/* Textarea Note */}
              <div className="relative group/input">
                <div
                  className={`absolute left-4 top-5 transition-colors ${
                    isFocused === 'note' ? 'text-brand-violet' : 'text-gray-500'
                  }`}
                >
                  <MessageSquare size={18} />
                </div>
                <textarea
                  placeholder="Ceritakan singkat kebutuhanmu (Opsional)"
                  onFocus={() => setIsFocused('note')}
                  onBlur={() => setIsFocused(null)}
                  className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-brand-violet/50 focus:bg-white/[0.05] transition-all h-32 placeholder:text-gray-600 font-light resize-none"
                  onChange={e => setFormData({ ...formData, note: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full relative group/btn bg-brand-violet text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(139,92,246,0.2)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                <Send
                  size={18}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
                <span className="uppercase tracking-[0.1em] text-sm">Konsultasi via WhatsApp</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
