"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BUSINESS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection — add shadow and compact height
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-[0_4px_20px_rgba(30,33,37,0.06)] border-b border-gray-100"
          : "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
            scrolled ? "h-16 md:h-18" : "h-18 sm:h-20 md:h-22"
          }`}
        >
          {/* ── Brand Logo & Name on Left ── */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 pr-1 group focus:outline-hidden"
            aria-label="Shrishti Enterprises Homepage"
          >
            <div className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 overflow-hidden rounded-xl shadow-xs border border-gray-100">
              <Image
                src="/images/logo/shrishti-logo.jpg"
                alt="Shrishti Enterprises Logo"
                width={48}
                height={48}
                priority
                className={`object-cover transition-all duration-300 ${
                  scrolled ? "w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10" : "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
                }`}
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[#1E2125] font-bold text-[15px] sm:text-lg md:text-xl tracking-tight leading-tight group-hover:text-[#AC7B25] transition-colors duration-200 truncate">
                Shrishti Enterprises
              </span>
              <span className="text-[#6C6C6E] text-[10px] sm:text-xs font-normal tracking-wide uppercase truncate hidden sm:block">
                Safety Nets &amp; Invisible Grills
              </span>
            </div>
          </Link>

          {/* ── Center Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#6C6C6E]">
            <Link
              href="/"
              className={`relative py-1.5 transition-colors duration-200 hover:text-[#AC7B25] ${
                pathname === "/" ? "text-[#AC7B25] font-semibold" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#AC7B25] after:transition-all after:duration-200 ${
                pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`relative py-1.5 transition-colors duration-200 hover:text-[#AC7B25] ${
                pathname === "/about-us" ? "text-[#AC7B25] font-semibold" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#AC7B25] after:transition-all after:duration-200 ${
                pathname === "/about-us" ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="relative flex items-center gap-1.5 py-1.5 text-[#6C6C6E] hover:text-[#AC7B25] transition-colors duration-200 cursor-pointer focus:outline-hidden"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Services dropdown"
              >
                Services
                <svg
                  className="w-4 h-4 text-[#6C6C6E] group-hover:text-[#AC7B25] group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 w-72">
                <div className="bg-white rounded-2xl shadow-[0_12px_30px_rgba(30,33,37,0.12)] border border-gray-100 p-2.5 grid grid-cols-1 gap-0.5">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-[#AC7B25] uppercase tracking-wider border-b border-gray-100 mb-1">
                    Certified Solutions
                  </div>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="px-3 py-2 rounded-xl hover:bg-[#FAFAFA] text-[#1E2125] hover:text-[#AC7B25] transition-colors text-[13.5px] flex items-center justify-between group/item"
                    >
                      <span className="font-medium">{s.title}</span>
                      <svg
                        className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-[#AC7B25] transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className={`relative py-1.5 transition-colors duration-200 hover:text-[#AC7B25] ${
                pathname === "/gallery" ? "text-[#AC7B25] font-semibold" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#AC7B25] after:transition-all after:duration-200 ${
                pathname === "/gallery" ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/blog"
              className={`relative py-1.5 transition-colors duration-200 hover:text-[#AC7B25] ${
                pathname === "/blog" || pathname.startsWith("/blog/") ? "text-[#AC7B25] font-semibold" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#AC7B25] after:transition-all after:duration-200 ${
                pathname === "/blog" || pathname.startsWith("/blog/") ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`relative py-1.5 transition-colors duration-200 hover:text-[#AC7B25] ${
                pathname === "/contact" ? "text-[#AC7B25] font-semibold" : ""
              } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#AC7B25] after:transition-all after:duration-200 ${
                pathname === "/contact" ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* ── Right Desktop CTA & Direct Phone ── */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone link on desktop */}
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-[#1E2125] hover:text-[#AC7B25] transition-colors py-1.5 group"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-gray-200 flex items-center justify-center text-[#AC7B25] group-hover:border-[#AC7B25] transition-colors shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-tight">{BUSINESS.phoneDisplay}</span>
            </a>

            {/* Gold Gradient CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[9px] text-white font-semibold text-sm tracking-wide shadow-[0_4px_14px_rgba(172,123,37,0.28)] hover:shadow-[0_6px_20px_rgba(172,123,37,0.38)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
              }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* ── Mobile Actions: Quick Call + Hamburger Button ── */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-white font-semibold text-xs sm:text-sm shadow-xs transition-transform active:scale-95 shrink-0"
              style={{
                background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
              }}
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>Call</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-[#1E2125] hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-hidden cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.2 relative pointer-events-none">
                <span
                  className={`block h-0.5 bg-[#1E2125] rounded-full transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#1E2125] rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#1E2125] rounded-full transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Slide-Down ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[calc(100vh-4.5rem)] overflow-y-auto opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 bg-white">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#AC7B25] bg-[#FAFAFA] border-l-3 border-[#AC7B25]"
                    : "text-[#1E2125] hover:text-[#AC7B25] hover:bg-[#FAFAFA]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-[#1E2125] hover:text-[#AC7B25] hover:bg-[#FAFAFA] transition-colors focus:outline-hidden"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 text-[#6C6C6E] transition-transform duration-300 ${
                    servicesOpen ? "rotate-180 text-[#AC7B25]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pr-2 py-1 space-y-0.5 bg-[#FAFAFA] rounded-xl my-1 border border-gray-100">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="min-h-[38px] flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#6C6C6E] hover:text-[#AC7B25] hover:bg-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AC7B25] shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#AC7B25] bg-[#FAFAFA] border-l-3 border-[#AC7B25]"
                    : "text-[#1E2125] hover:text-[#AC7B25] hover:bg-[#FAFAFA]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Actions Container */}
            <div className="pt-3 px-4 space-y-2">
              <Link
                href="/contact"
                className="w-full min-h-[46px] flex items-center justify-center px-5 py-3 rounded-[9px] text-white font-semibold text-base shadow-sm active:scale-[0.99] transition-transform"
                style={{
                  background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                }}
              >
                Get Free Quote
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 font-semibold text-sm border border-[#25D366]/30 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS.phoneHref}
                  className="min-h-[42px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white font-semibold text-sm hover:bg-black transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
