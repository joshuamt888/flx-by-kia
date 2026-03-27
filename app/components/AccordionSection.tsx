"use client";

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

function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
        <span
          className={`text-3xl text-white/40 ml-4 flex-shrink-0 leading-none select-none transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`text-white/60 leading-relaxed pb-6 pr-8 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {body}
          </p>
        </div>
      </div>
      <div className="h-px bg-white/10" />
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
