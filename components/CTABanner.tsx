import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Protect Your Home with Bangalore's Certified Specialists",
  subtitle = "Schedule your complimentary on-site measurement today. Same-day installation available across Bangalore.",
}: CTABannerProps) {
  return (
    <section className="py-14 bg-[#1E2125] relative overflow-hidden border-y border-gray-800">
      {/* Subtle gold glow in background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C59740]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#AC7B25]/30">
          Zero Obligation Inspection
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-300 mb-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BUSINESS.phoneHref}
            id="cta-call-btn"
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base md:text-lg rounded-xl shadow-[0_8px_25px_rgba(172,123,37,0.35)] hover:shadow-[0_12px_30px_rgba(172,123,37,0.45)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
            }}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call: {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            aria-label="Chat with us on WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba58] text-white font-bold text-base md:text-lg rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            id="cta-quote-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base md:text-lg rounded-xl border border-white/20 transition-all duration-200"
          >
            Get Free Quote
          </Link>
        </div>
        <p className="mt-6 text-gray-400 text-xs md:text-sm">
          ✓ Free Site Audit &nbsp;·&nbsp; ✓ Same-Day Installation &nbsp;·&nbsp; ✓ Written Warranty &nbsp;·&nbsp; ✓ Direct Rates
        </p>
      </div>
    </section>
  );
}
