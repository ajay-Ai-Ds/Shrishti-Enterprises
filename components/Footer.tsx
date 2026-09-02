import Image from "next/image";
import Link from "next/link";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1E2125] text-gray-300">
      {/* CTA Strip */}
      <div className="bg-black/30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-xl tracking-tight">Ready to secure your balcony &amp; windows?</p>
            <p className="text-gray-400 text-sm mt-0.5">Complimentary site measurement · Express same-day fitment · Written warranty</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-bold rounded-xl transition-all shadow-md text-sm"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
              className="flex items-center gap-2 px-5 py-3 text-white font-bold rounded-xl transition-all shadow-md text-sm hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
              }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo/shrishti-logo.jpg"
              alt="Shrishti Enterprises Logo"
              width={44}
              height={44}
              className="w-11 h-11 rounded-xl object-cover shadow-sm border border-gray-700"
            />
            <h3 className="text-white font-bold text-lg">{BUSINESS.name}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{BUSINESS.description}</p>
          <div className="space-y-2 text-sm">
            <a href={BUSINESS.phoneHref} aria-label={`Call ${BUSINESS.phoneDisplay}`} className="flex items-center gap-2 text-[#C59740] hover:text-white transition-colors">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.emailHref} aria-label={`Email: ${BUSINESS.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors break-all">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              {BUSINESS.email}
            </a>
            <p className="flex items-center gap-2 text-gray-400" aria-label="Location: Bangalore, Karnataka, India">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Our Safety Solutions</h4>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-gray-400 hover:text-[#C59740] text-sm transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Areas We Serve</h4>
          <ul className="space-y-2">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="text-gray-400 hover:text-[#C59740] text-sm transition-colors">{l.area}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Navigation</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/gallery", label: "Project Gallery" },
              { href: "/contact", label: "Contact Us" },
              { href: "/blog", label: "Safety Blog" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-and-conditions", label: "Terms & Conditions" },
              { href: "/disclaimer", label: "Disclaimer" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 hover:text-[#C59740] text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-3.5 bg-black/40 border border-gray-800 rounded-xl text-center">
            <p className="text-yellow-400 font-bold text-lg">⭐ {BUSINESS.rating}/5.0</p>
            <p className="text-gray-400 text-xs mt-0.5">{BUSINESS.reviewCount}+ Verified Google Reviews</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors underline-offset-4 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors underline-offset-4 hover:underline">
              Disclaimer
            </Link>
            <span className="text-gray-700">•</span>
            <p>Serving all localities of Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
