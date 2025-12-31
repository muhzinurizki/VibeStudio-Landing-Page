'use client'

import { motion } from 'framer-motion'
import { Check, Zap, ArrowRight } from 'lucide-react'
import { PRICING_PLANS } from '@/constants/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Decor - Subtle Purple Hue */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-violet text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            <Zap size={12} fill="currentColor" />
            Pricing Strategy
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Investasi Untuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-fuchsia-400">
              Digital Brandmu.
            </span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Sistem harga transparan untuk hasil yang presisi. Kami tidak menjual jasa, kami
            membangun aset masa depan bisnis Anda.
          </p>
        </div>

        {/* Horizontal Tier Layout */}
        <div className="flex flex-col gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden group flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 ${
                plan.isPopular
                  ? 'bg-white/[0.04] border-brand-violet/50 shadow-[0_40px_80px_rgba(139,92,246,0.1)] z-20'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              {/* Popular Glow Effect */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/10 blur-[80px] -z-10" />
              )}

              {/* Kolom 1: Brand & Price */}
              <div className="lg:w-[28%] mb-10 lg:mb-0 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs opacity-60 italic">
                    {plan.name}
                  </h4>
                  {plan.isPopular && (
                    <span className="bg-brand-violet text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-brand-violet/40">
                      Best Value
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-center lg:justify-start gap-1.5">
                  <span className="text-brand-violet text-lg font-bold">Rp</span>
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.price !== 'Ask' && (
                    <div className="flex flex-col ml-2">
                      <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">
                        Ribuan
                      </span>
                      <span className="text-brand-violet/50 text-[10px]">Start From</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-6 leading-relaxed max-w-[220px] mx-auto lg:mx-0 font-light italic">
                  "{plan.description}"
                </p>
              </div>

              {/* Kolom 2: Features Grid */}
              <div className="lg:w-[45%] mb-10 lg:mb-0 py-8 lg:py-0 border-y lg:border-y-0 lg:border-x border-white/5 px-0 lg:px-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          plan.isPopular
                            ? 'bg-brand-violet text-white'
                            : 'bg-white/10 text-gray-500'
                        }`}
                      >
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kolom 3: Action Button */}
              <div className="lg:w-[20%] w-full flex flex-col items-center gap-4">
                <button
                  className={`w-full group/btn relative overflow-hidden py-5 rounded-[1.5rem] font-black text-sm transition-all duration-500 flex items-center justify-center gap-3 ${
                    plan.isPopular
                      ? 'bg-brand-violet text-white shadow-[0_20px_40px_rgba(139,92,246,0.3)] hover:scale-105'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 uppercase tracking-widest">{plan.cta}</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
                <p className="text-[10px] text-gray-600 font-medium uppercase tracking-tighter">
                  Termasuk Support 30 Hari
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
