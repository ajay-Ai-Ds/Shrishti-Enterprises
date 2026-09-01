"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { BUSINESS } from "@/lib/constants";

const SLIDES = [
  { id: 1, label: "Balcony Fall Protection", imagePath: "/images/balcony.webp", alt: "Balcony safety net installation on high-rise apartment in Bangalore" },
  { id: 2, label: "SS316 Invisible Grills", imagePath: "/images/invisiblegrill.webp", alt: "Marine-grade SS316 invisible grill system on Bangalore apartment window" },
  { id: 3, label: "Anti-Bird Deterrence", imagePath: "/images/ductarea1.webp", alt: "Bird exclusion mesh installation in Bangalore residential building" },
  { id: 4, label: "Child Safety Barriers", imagePath: "/images/child.webp", alt: "Reinforced child protection netting on staircase and balcony gallery" },
  { id: 5, label: "Cricket Practice Nets", imagePath: "/images/cricket.jpeg", alt: "High-impact terrace cricket practice net enclosure in Bangalore" },
  { id: 6, label: "Monkey Exclusion Mesh", imagePath: "/images/monkey.webp", alt: "Heavy-duty monkey barrier net installation on Bangalore rooftop" },
  { id: 7, label: "Master Installation Crew", imagePath: "/images/team.webp", alt: "Certified technical installation team of Shrishti Enterprises Bangalore" },
];

const DURATION = 3500; // ms per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, DURATION);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-950 min-h-[520px] md:min-h-[640px]">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.imagePath}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-20 pointer-events-none" />

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-green-600 border border-white/20 hover:border-green-500 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-green-600 border border-white/20 hover:border-green-500 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
      >
        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col items-start justify-center min-h-[520px] md:min-h-[640px]">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5" role="img" aria-label={`Rating: ${BUSINESS.rating} out of 5 stars`}>
            <span className="text-yellow-300 font-bold">⭐ {BUSINESS.rating} / 5.0</span>
            <span className="text-white/60">·</span>
            <span>4,800+ Bangalore Homes Protected</span>
            <span className="text-white/60">·</span>
            <span className="text-green-300 font-bold">12+ Years Trust</span>
          </div>

          {/* Slide label badge */}
          <div className="mb-3" aria-live="polite" aria-atomic="true">
            <span className="inline-block bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-all duration-500 shadow-sm" role="status">
              {SLIDES[current].label}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
            Certified Safety Nets &amp; Invisible Grills in{" "}
            <span className="text-green-400">Bangalore</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-normal">
            Industrial-grade fall protection, pigeon deterrence, and architectural invisible grills for apartments and villas. Free on-site laser inspection with same-day fitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS.phoneHref}
              id="hero-call-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-extrabold text-lg rounded-2xl shadow-2xl shadow-green-950/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call: {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              id="hero-quote-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-lg rounded-2xl border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Request Free Inspection
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Quick trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["Zero-Cost Site Survey", "Same-Day Fitment Option", "Authentic Replacement Warranty", "Direct Factory Rates"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm font-medium">
                <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-6 bg-green-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
