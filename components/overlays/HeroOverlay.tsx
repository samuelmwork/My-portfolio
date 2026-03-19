"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function HeroOverlay({ progress }: { progress: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7, ease }}
      className="absolute inset-0 flex flex-col px-6 md:px-12 pt-28 pb-10"
    >
      {/* ── LEFT SIDE ── */}
      <div className="flex flex-col justify-center h-full max-w-lg">

        {/* Hi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease }}
        >
          <span
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Hi,
          </span>
        </motion.div>

        {/* I'm Sam */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          className="flex items-baseline gap-3 flex-wrap"
        >
          <span
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            I&apos;m{" "}
          </span>
          <span
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ fontFamily: "Playfair Display, serif", color: "#E8472A" }}
          >
            Sam
          </span>
        </motion.div>

        {/* Subtitle — "Web Developer" only */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease }}
          className="text-lg md:text-xl text-white/60 mt-2 mb-8 font-light"
          style={{ fontFamily: "DM Sans" }}
        >
          Web Developer
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="flex items-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 5 * window.innerHeight * 0.6, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 bg-accent text-white font-semibold rounded-full px-6 py-3.5 text-sm hover:bg-[#ff5a3d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,71,42,0.5)] hover:-translate-y-0.5"
            style={{ fontFamily: "DM Sans" }}
          >
            Hire Me
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: window.innerHeight * 0.6, behavior: "smooth" });
            }}
            className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-accent"
            style={{ fontFamily: "DM Sans" }}
          >
            See Projects
          </a>
        </motion.div>
      </div>

      {/* ── BOTTOM email tag ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-2 self-start"
      >
        <div className="w-4 h-4 rounded-full bg-[#E8472A] flex items-center justify-center">
          <div className="w-1.5 h-px bg-white rounded" />
        </div>
        <span className="text-xs text-white/30" style={{ fontFamily: "DM Mono" }}>
          samuelm99729@gmail.com
        </span>
      </motion.div>

      {/* ── RIGHT — "Performance over promises" tagline ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease }}
        className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-5 pointer-events-none"
      >
        {/* Decorative top dash */}
        <div className="w-10 h-0.5 bg-accent/60 self-end" />

        {/* Main tagline — vertical stacked */}
        <div className="flex flex-col items-end gap-1">
          {["Performance", "over", "promises."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease }}
              className={`leading-tight font-bold tracking-tight ${
                word === "promises." ? "text-accent" : "text-white"
              }`}
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-xs text-white/30 text-right max-w-[140px] leading-relaxed"
          style={{ fontFamily: "DM Mono, monospace" }}
        >
          Fast delivery.
          <br />No fluff.
        </motion.p>

        {/* Dot grid */}
        <div className="flex flex-col gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full self-end"
              style={{ background: i < 2 ? "rgba(232,71,42,0.5)" : "rgba(255,255,255,0.15)" }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
