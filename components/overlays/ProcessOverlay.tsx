"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const steps = [
  { n: "01", title: "Discovery", desc: "Tell me about your business, customers, and goals. WhatsApp or a quick call — totally relaxed.", icon: "💬" },
  { n: "02", title: "Demo in 48h", desc: "I deliver a working demo of your website. You can click around and feel it before committing.", icon: "⚡" },
  { n: "03", title: "Refine", desc: "Give feedback freely. I iterate until every detail feels exactly right. Unlimited revisions.", icon: "🔄" },
  { n: "04", title: "Go Live", desc: "Your site launches fully tested, blazing fast, and ready to bring in customers from day one.", icon: "🚀" },
];

export default function ProcessOverlay({ progress }: { progress: number }) {
  return (
    <motion.div
      id="process"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease }}
      className="absolute inset-0 flex items-center px-6 md:px-16 pt-24 md:pt-24 pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent uppercase" style={{ fontFamily: "DM Mono" }}>
              How It Works
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Simple process,
            <br />
            <em className="not-italic text-white/40">zero stress.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
              className="bg-[#080808]/60 backdrop-blur-sm p-7 group hover:bg-accent/5 transition-colors duration-500"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs text-accent/60 font-mono"
                  style={{ fontFamily: "DM Mono" }}
                >
                  {s.n}
                </span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-accent/20 transition-colors" />
              </div>
              <h3
                className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {s.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline connector */}
        <motion.div
          className="hidden lg:flex items-center justify-between px-8 mt-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-accent/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
