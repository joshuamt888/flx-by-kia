"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PROGRAM_ITEMS = [
  {
    title: "Custom Training Program",
    body: "Built around your schedule, equipment, and weak points. Not a template — a program engineered specifically for your body and goals. Updated every week based on how you're actually performing.",
  },
  {
    title: "Nutrition Strategy That Actually Sticks",
    body: "No crash diets. No 1,200-calorie nonsense. Real sustainable eating that burns fat while protecting muscle — designed around food you already eat and a life you can actually live.",
  },
  {
    title: "Weekly Check-Ins & Real Adjustments",
    body: "Every week you report back. Progress photos, weight, energy, sleep. Adam reviews everything and adjusts your program in real time — so you're never spinning your wheels.",
  },
  {
    title: "Direct Access to Adam",
    body: "Questions don't wait until next week. You have direct line access to ask anything — form, nutrition, mindset. You're paying for a coach, not a PDF.",
  },
  {
    title: "Accountability That Actually Works",
    body: "Most people fail because nobody's watching. When you know you have to report your week to someone who gives a damn, you show up differently. That's the system.",
  },
];

function AccordionItem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span
          className="text-xl font-black tracking-tight group-hover:text-white/80 transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-3xl text-white/40 ml-4 flex-shrink-0 leading-none select-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-white/60 leading-relaxed pb-6 pr-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AccordionSection() {
  return (
    <div>
      {PROGRAM_ITEMS.map((item) => (
        <AccordionItem key={item.title} {...item} />
      ))}
    </div>
  );
}
