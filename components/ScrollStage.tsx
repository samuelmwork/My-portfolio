"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";  // fallback SVG if needed
import HeroOverlay from "./overlays/HeroOverlay";
import WorkOverlay from "./overlays/WorkOverlay";
import ProcessOverlay from "./overlays/ProcessOverlay";
import ServicesOverlay from "./overlays/ServicesOverlay";
import PricingOverlay from "./overlays/PricingOverlay";
import ContactOverlay from "./overlays/ContactOverlay";

// Each "chapter" is a scroll segment
const CHAPTERS = ["hero", "work", "process", "services", "pricing", "contact"] as const;
type Chapter = typeof CHAPTERS[number];

const CHAPTER_LABELS: Record<Chapter, string> = {
  hero: "Hello",
  work: "Work",
  process: "Process",
  services: "Services",
  pricing: "Pricing",
  contact: "Contact",
};

export default function ScrollStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter>("hero");
  const [progress, setProgress] = useState(0); // 0-1 within current chapter

  // Each chapter gets 0.6vh of scroll space — snappy transitions
  const SCROLL_PER_CHAPTER = 0.6;
  const TOTAL = CHAPTERS.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const scrollPerChapter = vh * SCROLL_PER_CHAPTER;
      // totalScroll now includes a full extra chapter worth so the last chapter is reachable
      const totalScroll = scrollPerChapter * (TOTAL - 0.2);
      const clamped = Math.max(0, Math.min(scrollTop, totalScroll));
      const chapterFloat = clamped / scrollPerChapter;
      const chapterIndex = Math.min(Math.floor(chapterFloat), TOTAL - 1);
      const chapterProgress = chapterFloat - chapterIndex;

      setActiveChapter(CHAPTERS[chapterIndex]);
      setProgress(Math.min(chapterProgress, 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Image pan: subtle horizontal shift per chapter
  const imgShifts: Record<Chapter, string> = {
    hero: "0%",
    work: "-3%",
    process: "2%",
    services: "-2%",
    pricing: "3%",
    contact: "0%",
  };

  // Image tint overlays per chapter
  const imgTints: Record<Chapter, string> = {
    hero: "rgba(8,8,8,0.45)",
    work: "rgba(8,8,8,0.72)",
    process: "rgba(8,8,8,0.68)",
    services: "rgba(8,8,8,0.70)",
    pricing: "rgba(8,8,8,0.75)",
    contact: "rgba(8,8,8,0.80)",
  };

  const chapterIndex = CHAPTERS.indexOf(activeChapter);

  return (
    <>
      {/* Scroll container: (TOTAL + 1) chapters worth so last chapter is fully reachable */}
      <div
        ref={containerRef}
        style={{ height: `${(TOTAL * SCROLL_PER_CHAPTER * 100) + 120}vh` }}
        className="relative"
      >
        {/* ── STICKY FRAME ── */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">

          {/* === BACKGROUND PHOTO — full portrait, no crop === */}
          <motion.div
            className="absolute inset-0"
            animate={{ x: imgShifts[activeChapter] }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Dark base so contain doesn't show white gaps */}
            <div className="absolute inset-0 bg-[#080808]" />
            <Image
              src="/profile.jpeg"
              alt="Sam"
              fill
              className="object-contain"
              style={{
                objectPosition: "center center",
                filter: "contrast(1.05) brightness(0.95)",
              }}
              priority
            />
          </motion.div>

          {/* === DYNAMIC TINT LAYER === */}
          <motion.div
            className="absolute inset-0"
            animate={{ background: imgTints[activeChapter] }}
            transition={{ duration: 0.8 }}
          />

          {/* === GRADIENT OVERLAYS === */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-[#080808]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />

          {/* === CHAPTER OVERLAYS === */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              {activeChapter === "hero" && <HeroOverlay key="hero" progress={progress} />}
              {activeChapter === "work" && <WorkOverlay key="work" progress={progress} />}
              {activeChapter === "process" && <ProcessOverlay key="process" progress={progress} />}
              {activeChapter === "services" && <ServicesOverlay key="services" progress={progress} />}
              {activeChapter === "pricing" && <PricingOverlay key="pricing" progress={progress} />}
              {activeChapter === "contact" && <ContactOverlay key="contact" progress={progress} />}
            </AnimatePresence>
          </div>

          {/* === CHAPTER INDICATOR (right side) === */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
            {CHAPTERS.map((ch, i) => (
              <button
                key={ch}
                onClick={() => window.scrollTo({ top: i * window.innerHeight * SCROLL_PER_CHAPTER, behavior: "smooth" })}
                className="group flex items-center gap-2 justify-end"
                title={CHAPTER_LABELS[ch]}
              >
                <span
                  className="text-[10px] text-white/30 group-hover:text-white/70 transition-colors opacity-0 group-hover:opacity-100"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {CHAPTER_LABELS[ch]}
                </span>
                <div
                  className={`rounded-full transition-all duration-500 ${
                    activeChapter === ch
                      ? "w-6 h-1.5 bg-accent"
                      : "w-1.5 h-1.5 bg-white/25 hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* === SCROLL PROGRESS BAR === */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent origin-left"
            animate={{ scaleX: chapterIndex / (TOTAL - 1) }}
            transition={{ duration: 0.1 }}
            style={{ width: "100%" }}
          />

          {/* === SCROLL HINT (hero only) === */}
          <AnimatePresence>
            {activeChapter === "hero" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase" style={{ fontFamily: "DM Mono" }}>
                  scroll
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Footer after scroll */}
      <footer className="bg-[#050505] border-t border-white/5 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="SamGrowth Studio"
            width={28}
            height={28}
            className="flex-shrink-0 rounded-sm"
          />
          <div>
            <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem" }}>SamGrowth Studio</span>
            <span className="text-white/30 text-xs ml-1">Web Developer</span>
          </div>
        </div>
        <span className="text-white/20 text-xs" style={{ fontFamily: "DM Mono" }}>
          — India
        </span>
        <div className="flex gap-5 text-xs text-white/30" style={{ fontFamily: "DM Mono" }}>
          <a href="mailto:samuelm99729@gmail.com" className="hover:text-accent transition-colors">Email</a>
          <a href="https://wa.me/916382636384" className="hover:text-accent transition-colors">WhatsApp</a>
          <a href="tel:+916382636384" className="hover:text-accent transition-colors">Call</a>
          <a href="https://www.instagram.com/samgrowth_studio?igsh=MWlkcW9rcTNmZDh0Mg==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1 group" title="Instagram">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-110 transition-transform drop-shadow-sm">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
            </svg>
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
