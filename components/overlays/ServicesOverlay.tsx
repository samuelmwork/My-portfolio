"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    benefit: "Build trust the moment someone finds you online",
    tags: ["Salons", "Clinics", "Gyms", "Restaurants"],
  },
  {
    icon: "📅",
    title: "Booking Systems",
    benefit: "Let customers book 24/7 without calling you",
    tags: ["Calendar sync", "Reminders", "Admin panel"],
  },
  {
    icon: "⚡",
    title: "Landing Pages",
    benefit: "High-converting pages that turn clicks into leads",
    tags: ["CRO-optimised", "Fast", "A/B ready"],
  },
  {
    icon: "🔧",
    title: "Custom Solutions",
    benefit: "Have a unique idea? I can build it exactly",
    tags: ["APIs", "Dashboards", "Payments"],
  },
];

export default function ServicesOverlay({ progress }: { progress: number }) {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease }}
      className="absolute inset-0 flex items-center px-6 md:px-16 py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent uppercase" style={{ fontFamily: "DM Mono" }}>
              What I Offer
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Built for{" "}
            <em className="not-italic text-accent">your growth.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              className="group relative bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/30 hover:bg-accent/5 transition-all duration-500 overflow-hidden cursor-none"
            >
              {/* BG accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-white/50 mb-4" style={{ fontFamily: "DM Sans" }}>
                  {s.benefit}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 rounded-full border border-white/8 text-white/30 group-hover:border-accent/30 group-hover:text-accent/60 transition-all"
                      style={{ fontFamily: "DM Mono" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
