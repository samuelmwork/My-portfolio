"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    num: "01",
    title: "Event Hall Booking",
    tag: "Booking System",
    desc: "Real-time availability & online reservations for event venues.",
    url: "https://event-hall-management.vercel.app/",
    color: "#E8472A",
  },
  {
    num: "02",
    title: "BookFlow — Appointments",
    tag: "SaaS Product",
    desc: "Automated scheduling with reminders for service businesses.",
    url: "https://bookflow1.vercel.app/",
    color: "#00C9B1",
  },
  {
    num: "03",
    title: "Fluent UI Business Site",
    tag: "Business Website",
    desc: "Modern Fluent UI design that elevates brand credibility.",
    url: "https://fluent-ui.onrender.com/",
    color: "#E8472A",
  },
  {
    num: "04",
    title: "Plant Awareness Campaign",
    tag: "Campaign Site",
    desc: "Visual storytelling site driving environmental awareness.",
    url: "https://plant-awareness.onrender.com/",
    color: "#00C9B1",
  },
];

export default function WorkOverlay({ progress }: { progress: number }) {
  return (
    <motion.div
      id="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease }}
      className="absolute inset-0 flex items-center px-6 md:px-16 pt-24 md:pt-24 pb-12 overflow-y-auto custom-scrollbar"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent uppercase" style={{ fontFamily: "DM Mono" }}>
              Selected Work
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Real projects,
            <em className="text-accent not-italic"> real results.</em>
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="divide-y divide-white/5">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease }}
              className="group flex items-center justify-between py-5 hover:pl-3 transition-all duration-400 cursor-none"
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-white/15 text-sm w-6 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "DM Mono" }}
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/35 mt-0.5" style={{ fontFamily: "DM Sans" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="hidden md:block text-xs px-3 py-1 rounded-full border border-white/10 text-white/40 group-hover:border-accent/40 group-hover:text-accent/70 transition-all"
                  style={{ fontFamily: "DM Mono" }}
                >
                  {p.tag}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300"
                >
                  <ArrowUpRight size={13} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
