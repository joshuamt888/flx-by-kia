import Image from "next/image";
import Header from "./components/Header";
import AccordionSection from "./components/AccordionSection";
import ApplyForm from "./components/ApplyForm";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Header />

      {/* ═══════════════════════════════════════════════════════
          HERO — server rendered, CSS animations only
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Adam Kia — FLX by Kia"
            fill
            priority
            className="object-cover object-top grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/95" />
        </div>

        {/* @flexbykia badge */}
        <div className="absolute top-6 left-6 z-20">
          <p
            className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            @flexbykia
          </p>
        </div>

        {/* Hero text — CSS animated, SSR rendered (always visible) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <p
            className="hero-label text-xs font-semibold tracking-[0.3em] text-white/60 mb-6 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            1:1 Online Fitness Coaching
          </p>

          <div className="hero-line-1">
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Build Muscle.
            </span>
          </div>
          <div className="hero-line-2">
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lose Fat.
            </span>
          </div>
          <div className="hero-line-3">
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight text-white/30"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gain Confidence.
            </span>
          </div>

          <p
            className="hero-sub text-base sm:text-xl text-white/60 mt-8 mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Stop guessing. Stop starting over. Get a program built for your body,
            your schedule, and your actual life — with a coach who answers back.
          </p>

          <div className="hero-cta">
            <a
              href="#apply"
              className="inline-block bg-white text-black font-black text-base sm:text-lg tracking-widest px-10 py-5 hover:bg-white/90 active:scale-[0.98] transition-all uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Apply for Coaching
            </a>
            <p
              className="mt-4 text-xs text-white/25 tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Limited spots · Application is free
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="scroll-line w-px h-10 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-y border-white/5 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/10 text-center">
          {[
            { stat: "1:1",  label: "Personalized" },
            { stat: "48h", label: "Response Time" },
            { stat: "100%", label: "Custom Built"  },
          ].map((item) => (
            <div key={item.stat} className="reveal px-4 py-2">
              <p
                className="text-3xl sm:text-4xl font-black mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.stat}
              </p>
              <p
                className="text-xs text-white/40 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT ADAM
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0">
            <Image
              src="/images/about.jpg"
              alt="Adam Kia — Certified Personal Trainer"
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/15 -z-10" />
          </div>

          <div className="reveal">
            <p
              className="text-xs tracking-[0.3em] text-white/30 mb-4 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your Coach
            </p>
            <h2
              className="text-5xl sm:text-6xl font-black mb-6 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Adam Kia
            </h2>
            <p
              className="text-white/65 text-lg leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Adam didn&apos;t start with good genetics or easy results. He started exactly
              where most people are — confused, inconsistent, and spinning his wheels.
              Years of trial and error turned into a system that actually works.
            </p>
            <p
              className="text-white/65 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              As a certified personal trainer and nutritionist, he takes the same
              no-bullshit approach with every client: cut the noise, build a real plan,
              and execute until the results speak for themselves.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Certified Personal Trainer",
                "Certified Nutritionist",
                "1:1 Online Coach",
                "Minnesota State Mankato",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white/40 rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROGRAM — Accordion (client component)
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal mb-12">
            <p
              className="text-xs tracking-[0.3em] text-white/30 mb-4 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What You Get
            </p>
            <h2
              className="text-5xl sm:text-6xl font-black mb-3 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Everything You Need.
            </h2>
            <h2
              className="text-5xl sm:text-6xl font-black text-white/25 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nothing You Don&apos;t.
            </h2>
            <p
              className="text-white/45 text-base mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tap each item to expand.
            </p>
          </div>
          <AccordionSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero2.jpg"
            alt="FLX by Kia training"
            fill
            className="object-cover grayscale opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] text-white/30 mb-4 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              How It Works
            </p>
            <h2
              className="text-5xl sm:text-6xl font-black uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Simple Process.{" "}
              <span className="text-white/25">Real Results.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-white/10">
            {[
              { step: "01", title: "Apply",     body: "Fill out the application. Tell Adam your goal, your history, and what's been holding you back." },
              { step: "02", title: "Connect",   body: "Adam reviews your application and reaches out within 48 hours to see if you're a good fit." },
              { step: "03", title: "Transform", body: "Your custom program drops. You train. You check in. Adam adjusts. You get results." },
            ].map((item) => (
              <div key={item.step} className="reveal bg-black/60 p-8">
                <p
                  className="text-5xl font-black text-white/10 mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.step}
                </p>
                <h3
                  className="text-2xl font-black mb-3 uppercase"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          APPLICATION FORM (client component)
      ═══════════════════════════════════════════════════════ */}
      <section id="apply" className="bg-black border-t border-white/10 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="reveal text-center mb-12">
            <p
              className="text-xs tracking-[0.3em] text-white/30 mb-4 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Limited Spots Available
            </p>
            <h2
              className="text-5xl sm:text-7xl font-black mb-4 leading-none uppercase tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to{" "}
              <span className="text-white/25">Transform?</span>
            </h2>
            <p className="text-white/50 text-lg" style={{ fontFamily: "var(--font-body)" }}>
              Adam reviews every application personally. If you&apos;re serious, apply now.
            </p>
          </div>
          <div className="reveal">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-8 px-6 text-center">
        <p
          className="text-white/20 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © {new Date().getFullYear()} FLX by Kia · All rights reserved
        </p>
      </footer>

    </main>
  );
}
