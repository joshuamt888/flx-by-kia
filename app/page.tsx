import Image from "next/image";
import Link from "next/link";

const APPLY_URL = "#apply";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          HERO — Full bleed, B&W intense photo
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Adam Kia — FLX by Kia"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />
          {/* Heavy gradient: dark top for logo, dark bottom for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        </div>

        {/* Logo — top center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/images/logo-white.jpg"
            alt="FLX by Kia"
            width={120}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Hero text — bottom */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/60 mb-4 uppercase"
            style={{ fontFamily: "var(--font-body)" }}>
            @flexbykia · Online Fitness Coaching
          </p>
          <h1
            className="text-6xl sm:text-8xl md:text-[9rem] font-black leading-none mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Build Muscle.<br />
            Lose Fat.<br />
            <span className="text-white/40">Gain Confidence.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            1:1 online coaching built around you — your schedule, your goals, your transformation.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-white text-black font-black text-lg tracking-widest px-10 py-5 hover:bg-white/90 transition-colors uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Apply for Coaching
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALUE PROPS — 3 pillars
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-black border-t border-white/10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              {
                number: "01",
                title: "Build Muscle",
                body: "Structured programming designed to progressively overload your body and build real, lasting size.",
              },
              {
                number: "02",
                title: "Lose Fat",
                body: "No crash diets. Sustainable nutrition strategies that burn fat while protecting your muscle.",
              },
              {
                number: "03",
                title: "Gain Confidence",
                body: "The physique is just the start. You'll walk different when you know you put in the work.",
              },
            ].map((pillar) => (
              <div key={pillar.number} className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <p className="text-4xl font-black text-white/10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {pillar.number}
                </p>
                <h3 className="text-3xl font-black mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT ADAM — Split layout
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0">
            <Image
              src="/images/about.jpg"
              alt="Adam Kia — Certified Personal Trainer"
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            {/* Subtle white border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/20 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/40 mb-4 uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Your Coach
            </p>
            <h2 className="text-5xl sm:text-6xl font-black mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Adam Kia
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Adam started from scratch — no genetics, no shortcuts. Just years of learning, grinding, and figuring out
              what actually works. Now as a certified personal trainer and nutritionist, he takes that same approach with
              every client: cut the noise, focus on what moves the needle, and build a version of you that lasts.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Certified Personal Trainer",
                "Certified Nutritionist",
                "Online Coach",
                "Minnesota State Mankato",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/60" style={{ fontFamily: "var(--font-body)" }}>
                    {cred}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/adam.kia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white transition-colors tracking-widest"
                style={{ fontFamily: "var(--font-body)" }}
              >
                @adam.kia
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://instagram.com/flexbykia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 hover:text-white transition-colors tracking-widest"
                style={{ fontFamily: "var(--font-body)" }}
              >
                @flexbykia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COACHING OFFER — Full bleed B&W with text overlay
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero2.jpg"
            alt="FLX by Kia coaching"
            fill
            className="object-cover object-center grayscale opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-4 uppercase" style={{ fontFamily: "var(--font-body)" }}>
            What You Get
          </p>
          <h2 className="text-5xl sm:text-7xl font-black mb-16" style={{ fontFamily: "var(--font-heading)" }}>
            1:1 Coaching.<br />Zero Guesswork.
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10">
            {[
              {
                title: "Custom Training Program",
                body: "Built for your schedule, equipment, and goals. Updated as you progress.",
              },
              {
                title: "Nutrition Strategy",
                body: "No cookie-cutter macros. Real guidance that fits your life and gets results.",
              },
              {
                title: "Weekly Check-Ins",
                body: "Accountability every week. Adjustments made in real time based on your feedback.",
              },
              {
                title: "Direct Access to Adam",
                body: "Ask questions, get answers. You're not alone in this.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-black/60 backdrop-blur-sm p-8 text-left">
                <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SOCIAL PROOF — Stats / Instagram callout
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-black/40 mb-4 uppercase" style={{ fontFamily: "var(--font-body)" }}>
            Follow the Journey
          </p>
          <h2 className="text-5xl sm:text-6xl font-black mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Real Work. Real Results.
          </h2>
          <p className="text-black/60 text-lg max-w-xl mx-auto mb-10" style={{ fontFamily: "var(--font-body)" }}>
            See the training, the process, and the transformations on Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/flexbykia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-black text-sm tracking-widest px-8 py-4 hover:bg-black/80 transition-colors uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Follow @flexbykia
            </a>
            <a
              href="https://instagram.com/adam.kia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black text-black font-black text-sm tracking-widest px-8 py-4 hover:bg-black hover:text-white transition-colors uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Follow @adam.kia
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA / APPLY — Final section
      ═══════════════════════════════════════════════════════ */}
      <section id="apply" className="bg-black border-t border-white/10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/logo-white.jpg"
            alt="FLX by Kia"
            width={80}
            height={40}
            className="mx-auto mb-10 object-contain"
          />
          <h2 className="text-6xl sm:text-8xl font-black mb-6 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to<br />Transform?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Spots are limited. Fill out the application and Adam will reach out within 48 hours to see if you're a fit.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-white text-black font-black text-xl tracking-widest px-14 py-6 hover:bg-white/90 transition-colors uppercase mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Apply Now
          </a>
          <p className="text-white/30 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            No commitment until we talk. Application is free.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/20 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          © {new Date().getFullYear()} FLX by Kia · All rights reserved
        </p>
      </footer>

    </main>
  );
}
