"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BUSINESS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection — shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-green-900/10 py-0"
          : "bg-white/95 backdrop-blur-sm shadow-md py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-4 shrink-0 group"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo-icon.webp"
                alt="Shrishti Enterprises Logo"
                width={scrolled ? 40 : 56}
                height={scrolled ? 40 : 56}
                priority
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-contain transition-all duration-300"
              />
            </div>
            <div className="transition-all duration-300">
              <span
                className={`text-green-700 font-extrabold leading-tight block transition-all duration-300 ${
                  scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                }`}
              >
                Shrishti
              </span>
              <span className={`text-gray-600 leading-tight block ${scrolled ? "text-sm" : "text-base md:text-lg"}`}>
                Enterprises
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Nav link with animated underline */}
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about-us", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item, i) =>
              i === 0 ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ) : null
            )}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="relative flex items-center gap-1 py-1 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Services menu"
              >
                Services
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown — slide + fade */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-64 grid grid-cols-1 gap-0.5">
                  {SERVICES.map((s, i) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      style={{ transitionDelay: `${i * 20}ms` }}
                      className="px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors text-sm text-gray-700 flex items-center gap-2 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 group-hover/item:bg-green-600 transition-colors shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {["Gallery", "About", "Contact"].map((label) => (
              <Link
                key={label}
                href={
                  label === "Gallery"
                    ? "/gallery"
                    : label === "About"
                    ? "/about-us"
                    : "/contact"
                }
                className="relative py-1 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100 transition-all duration-200 border border-green-200 hover:scale-105 hover:shadow-md"
              aria-label="Chat with us on WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            {/* Call Now — glow pulse animation */}
            <a
              href={BUSINESS.phoneHref}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-200 hover:scale-105 hover:shadow-green-300 overflow-hidden group"
            >
              {/* Ripple glow */}
              <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="relative z-10">Call Now</span>
            </a>
          </div>

          {/* ── Mobile: Call + Hamburger ── */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all hover:scale-105 shadow"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger → X */}
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5 relative">
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu — slide down animation ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
            >
              Home
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Services submenu slide */}
            <div
              id="mobile-services-menu"
              role="region"
              aria-label="Services list"
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 space-y-0.5 pb-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Gallery</Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">Contact</Link>

            <div className="pt-2 flex gap-2 px-4">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2.5 rounded-xl bg-green-50 text-green-700 font-semibold text-sm border border-green-200 hover:bg-green-100 transition-colors">WhatsApp</a>
              <a href={BUSINESS.phoneHref} className="flex-1 text-center px-3 py-2.5 rounded-xl bg-green-600 text-white font-bold text-sm shadow hover:bg-green-700 transition-colors">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
