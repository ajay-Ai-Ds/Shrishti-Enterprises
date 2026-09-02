import Image from "next/image";
import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from "@/lib/schema";

interface LocationPageTemplateProps {
  area: string;
  slug: string;
  content: React.ReactNode;
  faqs: { question: string; answer: string }[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function LocationPageTemplate({ area, slug, content, faqs, imageSrc, imageAlt }: LocationPageTemplateProps) {
  const url = `${BUSINESS.url}/${slug}`;
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: `Safety Nets in ${area}`, url },
  ]);
  const serviceSchema = generateServiceSchema(
    `Safety Nets in ${area}`,
    url,
    `Certified safety net and invisible grill installation in ${area}, Bangalore. High-rise balcony nets, bird nets, and child fall protection.`
  );
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ name: `Safety Nets in ${area}`, href: `/${slug}` }]} />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#1E2125] text-white relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Local Bangalore Specialists
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight">
                Safety Nets in {area}, Bangalore
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-normal">
                Engineered balcony safety nets, SS316 invisible grills, bird deterrent nets, and child protection mesh across {area}. Complimentary site assessment &amp; same-day fitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold text-base md:text-lg rounded-xl shadow-[0_8px_25px_rgba(172,123,37,0.35)] hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                  }}
                  aria-label={`Call ${BUSINESS.phoneDisplay}`}
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Call: {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-bold text-base md:text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  Request Free Quote
                </Link>
              </div>
            </div>
            {imageSrc ? (
              <div className="rounded-3xl overflow-hidden bg-white/5 aspect-[4/3] border border-gray-700 shadow-xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? `${area} safety nets`}
                  width={900}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden bg-white/5 border-2 border-dashed border-white/20 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-14 h-14 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-white/60 font-semibold text-sm">Serving {area} &amp; Surrounding Localities</p>
                  <p className="text-white/30 text-xs mt-1">Bangalore, Karnataka</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services grid for this area */}
      <section className="py-12 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1E2125] mb-6 text-center tracking-tight">Our Safety Solutions in {area}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="flex flex-col items-center gap-2 p-3.5 bg-white rounded-xl border border-gray-200 hover:border-[#AC7B25]/40 hover:bg-[#FAFAFA] transition-all text-center text-xs font-semibold text-[#1E2125] hover:text-[#AC7B25] shadow-xs">
                <svg className="w-5 h-5 text-[#AC7B25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray prose-headings:font-extrabold prose-headings:text-[#1E2125] prose-h2:text-2xl prose-h3:text-xl max-w-none text-[#6C6C6E]">
          {content}
        </div>
      </section>

      <CTABanner title={`Get a Free Safety Net Quote in ${area}`} subtitle={`Call or WhatsApp our team now. We serve ${area} and all neighboring sectors in Bangalore.`} />
      <FAQ items={faqs} title={`Safety Nets in ${area} — FAQs`} />
    </>
  );
}
