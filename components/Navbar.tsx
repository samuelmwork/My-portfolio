"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", chapter: 1 },
  { label: "Services", chapter: 3 },
  { label: "Process", chapter: 2 },
  { label: "Pricing", chapter: 4 },
  { label: "Contact", chapter: 5 },
];

const scrollToChapter = (index: number) => {
  const vh = window.innerHeight;
  const scrollPerChapter = vh * 0.6;
  // Add 10px extra to ensure we hit the chapter trigger in ScrollStage
  const top = (index * scrollPerChapter) + 10;
  
  window.scrollTo({ top, behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "bg-[#080808]/80 backdrop-blur-xl border-b border-white/5" : ""
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/Logo.png"
            alt="SamGrowth Studio"
            width={48}
            height={48}
            className="group-hover:scale-110 transition-transform flex-shrink-0 rounded-sm object-contain"
          />
          <span
            className="text-accent"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            SamGrowth Studio
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="mailto:samuelm99729@gmail.com"
            className="text-xs text-white/40 hover:text-white transition-colors"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            samuelm99729@gmail.com
          </a>
          <a
            href="https://www.instagram.com/samgrowth_studio?igsh=MWlkcW9rcTNmZDh0Mg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-accent p-1.5 rounded transition-all hover:scale-110"
            title="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="drop-shadow-sm">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="text-white/70 hover:text-white transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center gap-2"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                onClick={() => { scrollToChapter(l.chapter); setOpen(false); }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-bold text-white/80 hover:text-accent transition-colors py-2 cursor-none bg-transparent border-none"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => { scrollToChapter(5); setOpen(false); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-8 py-3.5 bg-accent text-white font-semibold rounded-full text-sm hover:bg-opacity-90 transition-all cursor-none"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Get Website →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
