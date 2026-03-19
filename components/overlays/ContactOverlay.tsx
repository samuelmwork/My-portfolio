"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle, MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const inputClass =
  "w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-300 backdrop-blur-sm";

const selectClass = inputClass + " appearance-none cursor-pointer";

export default function ContactOverlay({ progress }: { progress: number }) {
const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [business_type, setBusinessType] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      name,
      phone,
      email,
      business_type,
      service,
      budget,
      timeline,
      description
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const result = await res.json();

      setLoading(false);
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(`Submission failed: ${result.error || "Something went wrong"}`);
      }
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease }}
        className="absolute inset-0 flex items-center px-6 md:px-16 pt-24 md:pt-24 pb-12 overflow-y-auto custom-scrollbar"
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-accent uppercase" style={{ fontFamily: "DM Mono" }}>
                Contact
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Let&apos;s build
              <br />
              <em className="not-italic text-accent">your website.</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed mb-8" style={{ fontFamily: "DM Sans" }}>
              Fill out the form and I&apos;ll get back to you within{" "}
              <span className="text-white/70">12 hours.</span> No spam, ever.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                { label: "Email", val: "samuelm99729@gmail.com", href: "mailto:samuelm99729@gmail.com" },
                { label: "Phone", val: "+91 63826 36384", href: "tel:+916382636384" },
                { label: "WhatsApp", val: "wa.me/916382636384", href: "https://wa.me/916382636384" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-[10px] text-white/25 w-16" style={{ fontFamily: "DM Mono" }}>{c.label}</span>
                  <span className="text-sm text-white/50 group-hover:text-accent transition-colors" style={{ fontFamily: "DM Sans" }}>{c.val}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <a
                href="https://wa.me/916382636384?text=Hi%20Sam!%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366]/20 transition-all"
                style={{ fontFamily: "DM Sans" }}
              >
                <MessageCircle size={14} />
                Message me on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>NAME *</label>
                <input required className={inputClass} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>WHATSAPP *</label>
                <input required className={inputClass} placeholder="+91 98765..." value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>EMAIL *</label>
              <input required type="email" className={inputClass} placeholder="you@business.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>BUSINESS TYPE</label>
                <select className={selectClass} value={business_type} onChange={(e) => setBusinessType(e.target.value)}>
                  <option value="">Select...</option>
                  <option>Salon / Spa</option>
                  <option>Gym / Fitness</option>
                  <option>Clinic / Healthcare</option>
                  <option>Restaurant / Cafe</option>
                  <option>Retail Shop</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>SERVICE</label>
                <select className={selectClass} value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Select...</option>
                  <option>Business Website</option>
                  <option>Booking System</option>
                  <option>Landing Page</option>
                  <option>Custom Solution</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>BUDGET</label>
                <select className={selectClass} value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option value="">Select...</option>
                  <option>₹1k – ₹3k</option>
                  <option>₹3k – ₹7k</option>
                  <option>₹7k – ₹15k</option>
                  <option>₹15k+</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>TIMELINE</label>
                <select className={selectClass} value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                  <option value="">Select...</option>
                  <option>ASAP (1–2 weeks)</option>
                  <option>1 month</option>
                  <option>2–3 months</option>
                  <option>No rush</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-white/30 mb-1.5" style={{ fontFamily: "DM Mono" }}>DETAILS</label>
              <textarea
                className={inputClass + " resize-none h-24"}
                placeholder="Tell me about your business and what you need..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-white font-semibold rounded-full text-sm hover:bg-[#ff5a3d] transition-all hover:shadow-[0_0_30px_rgba(232,71,42,0.4)] disabled:opacity-60"
              style={{ fontFamily: "DM Sans" }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><Send size={14} /> Send Request</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-lg px-6"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f0f] border border-accent/30 rounded-3xl p-10 max-w-sm w-full text-center shadow-[0_0_80px_rgba(232,71,42,0.2)] relative"
            >
              <button onClick={() => setSubmitted(false)} className="absolute top-4 right-4 text-white/20 hover:text-white">
                <X size={16} />
              </button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 12 }}
                className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5"
              >
                <CheckCircle size={24} className="text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Request received! 🎉
              </h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                I&apos;ll contact you within{" "}
                <span className="text-accent font-semibold">12 hours</span> to discuss your project.
              </p>
              <a
                href="https://wa.me/916382636384?text=Hi%20Sam!%20I%20just%20submitted%20a%20request."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366]/20 transition-all"
              >
                <MessageCircle size={13} />
                Ping me on WhatsApp to speed things up
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
