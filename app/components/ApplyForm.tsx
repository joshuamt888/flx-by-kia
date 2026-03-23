"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="text-5xl mb-6">✓</div>
        <h3
          className="text-3xl font-black mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Application Received
        </h3>
        <p className="text-white/50" style={{ fontFamily: "var(--font-body)" }}>
          Adam will reach out within 48 hours.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-4 focus:outline-none focus:border-white/40 transition-colors text-base";
  const label = "block text-xs tracking-[0.2em] text-white/40 uppercase mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} style={{ fontFamily: "var(--font-body)" }}>Name *</label>
          <input
            type="text" name="name" required
            value={form.name} onChange={handleChange}
            placeholder="Your name"
            className={input} style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
        <div>
          <label className={label} style={{ fontFamily: "var(--font-body)" }}>Email *</label>
          <input
            type="email" name="email" required
            value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className={input} style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>

      <div>
        <label className={label} style={{ fontFamily: "var(--font-body)" }}>Phone</label>
        <input
          type="tel" name="phone"
          value={form.phone} onChange={handleChange}
          placeholder="(612) 000-0000"
          className={input} style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} style={{ fontFamily: "var(--font-body)" }}>Primary Goal *</label>
          <select
            name="goal" required
            value={form.goal} onChange={handleChange}
            className={`${input} appearance-none`} style={{ fontFamily: "var(--font-body)" }}
          >
            <option value="" disabled>Select a goal</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Lose Fat">Lose Fat</option>
            <option value="Body Recomposition">Body Recomposition</option>
            <option value="Athletic Performance">Athletic Performance</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </div>
        <div>
          <label className={label} style={{ fontFamily: "var(--font-body)" }}>Experience Level</label>
          <select
            name="experience"
            value={form.experience} onChange={handleChange}
            className={`${input} appearance-none`} style={{ fontFamily: "var(--font-body)" }}
          >
            <option value="" disabled>Select level</option>
            <option value="Beginner (0-1 years)">Beginner (0–1 years)</option>
            <option value="Intermediate (1-3 years)">Intermediate (1–3 years)</option>
            <option value="Advanced (3+ years)">Advanced (3+ years)</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} style={{ fontFamily: "var(--font-body)" }}>Anything else?</label>
        <textarea
          name="message" rows={3}
          value={form.message} onChange={handleChange}
          placeholder="Schedule, injuries, specific goals..."
          className={`${input} resize-none`} style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-white text-black font-black text-sm tracking-widest py-5 hover:bg-white/90 active:scale-[0.99] transition-all uppercase disabled:opacity-50"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {status === "loading" ? "Submitting..." : "Apply for Coaching"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center" style={{ fontFamily: "var(--font-body)" }}>
          Something went wrong. Try again.
        </p>
      )}

      <p className="text-white/25 text-xs text-center" style={{ fontFamily: "var(--font-body)" }}>
        No commitment. Application is free. Adam reviews every submission personally.
      </p>
    </form>
  );
}
