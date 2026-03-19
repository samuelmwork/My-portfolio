"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const plans = [
  {
    name: "Starter",
    price: "₹1k–3k",
    desc: "Get online fast",
    features: ["5-page responsive site", "Mobile-first", "Contact form", "Basic SEO", "1-week delivery"],
    hot: false,
  },
  {
    name: "Booking",
    price: "₹3k–7k",
    desc: "For appointment businesses",
    features: ["Everything in Starter", "Online booking calendar", "Email & WhatsApp alerts", "Admin dashboard", "2-week delivery"],
    hot: true,
  },
  {
    name: "Custom",
    price: "₹7k+",
    desc: "Fully tailored to you",
    features: ["Everything in Booking", "Custom integrations", "Payment gateway", "Analytics", "Priority support"],
    hot: false,
  },
];

export default function PricingOverlay({ progress }: { progress: number }) {
  return (
    <motion.div
      id="pricing"
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
              Pricing
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Simple,{" "}
            <em className="not-italic text-accent">honest</em> pricing.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${
                p.hot
                  ? "bg-accent/10 border border-accent/40 shadow-[0_0_40px_rgba(232,71,42,0.15)]"
                  : "bg-white/3 border border-white/5 hover:border-white/15"
              }`}
            >
              {p.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full" style={{ fontFamily: "DM Mono" }}>
                  POPULAR
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-base font-bold text-white mb-0.5" style={{ fontFamily: "Playfair Display, serif" }}>
                  {p.name}
                </h3>
                <p className="text-xs text-white/35" style={{ fontFamily: "DM Sans" }}>{p.desc}</p>
              </div>
              <div className="mb-5">
                <span
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Playfair Display, serif", color: p.hot ? "#E8472A" : "white" }}
                >
                  {p.price}
                </span>
                <span className="text-xs text-white/25 ml-2">one-time</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/55" style={{ fontFamily: "DM Sans" }}>
                    <Check size={12} className="text-accent mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => window.scrollTo({ top: 5 * window.innerHeight * 0.6, behavior: "smooth" })}
                className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  p.hot
                    ? "bg-accent text-white hover:bg-[#ff5a3d] hover:shadow-[0_0_20px_rgba(232,71,42,0.4)]"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
                style={{ fontFamily: "DM Sans" }}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/20 text-xs mt-5"
          style={{ fontFamily: "DM Mono" }}
        >
          All prices in INR · Pay once · Own it forever · No hidden fees
        </motion.p>
      </div>
    </motion.div>
  );
}
