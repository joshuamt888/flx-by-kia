"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="relative h-10 w-20">
          <Image
            src="/images/logo-white.jpg"
            alt="FLX by Kia"
            fill
            className="object-contain object-left"
            sizes="128px"
          />
        </div>
        <a
          href="#apply"
          className="text-xs font-black tracking-widest uppercase text-black bg-white px-5 py-2 hover:bg-white/90 transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Apply
        </a>
      </div>
    </header>
  );
}
