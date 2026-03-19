"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle, MessageCircle, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

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
        className="absolute inset-0 overflow-y-auto custom-scrollbar"
      >
        <div className="min-h-full flex items-start md:items-center justify-center px-6 md:px-16 pt-24 pb-12">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-accent" />
                <span 
                  className="text-xs tracking-[0.3em] text-accent uppercase"
                  style={{ fontFamily: "DM Mono" }}
                >
                  Get In Touch
                </span>
              </div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Let&apos;s build something <br />
                <em className="text-accent not-italic">extraordinary</em> together.
              </h2>
              <p className="text-white/40 text-sm mb-10 max-w-md leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m currently accepting new projects and collaborations.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-none">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Mail size={18} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mb-0.5" style={{ fontFamily: "DM Mono" }}>Email</p>
                    <a href="mailto:samuelm99729@gmail.com" className="text-sm text-white/80 hover:text-accent transition-colors block">samuelm99729@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-none">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Phone size={18} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mb-0.5" style={{ fontFamily: "DM Mono" }}>Phone / WhatsApp</p>
                    <a href="tel:+916382636384" className="text-sm text-white/80 hover:text-accent transition-colors block">+91 63826 36384</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-none">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <MapPin size={18} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mb-0.5" style={{ fontFamily: "DM Mono" }}>Location</p>
                    <p className="text-sm text-white/80">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Submission Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="bg-white/3 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Sam"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      style={{ fontFamily: "DM Sans" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      style={{ fontFamily: "DM Sans" }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    style={{ fontFamily: "DM Sans" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>Project Type</label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={selectClass}
                        style={{ fontFamily: "DM Sans" }}
                      >
                        <option value="">Select...</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Booking System">Booking System</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Custom Solution">Custom Solution</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={14} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>Budget</label>
                    <div className="relative">
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className={selectClass}
                        style={{ fontFamily: "DM Sans" }}
                      >
                        <option value="">Select...</option>
                        <option value="₹1k-3k">₹1k-3k</option>
                        <option value="₹3k-7k">₹3k-7k</option>
                        <option value="₹7k+">₹7k+</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={14} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-white/30 uppercase tracking-wider ml-1" style={{ fontFamily: "DM Mono" }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={inputClass + " resize-none h-24"}
                    style={{ fontFamily: "DM Sans" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#ff5a3d] hover:shadow-[0_0_25px_rgba(232,71,42,0.4)] disabled:opacity-60 transition-all duration-300"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0f0f0f] border border-accent/30 p-8 rounded-3xl max-w-sm w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSubmitted(false)} 
                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Message Sent!</h3>
              <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "DM Sans" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all border-none"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
