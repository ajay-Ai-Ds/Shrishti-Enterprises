import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/schema";

interface ServicePageProps {
  title: string;
  slug: string;
  heroHeadline: string;
  heroSub: string;
  mainContent: React.ReactNode;
  faqs: { question: string; answer: string }[];
  relatedServices?: { title: string; slug: string }[];
  imagePath?: string;
  imageAlt?: string;
}

export default function ServicePageTemplate({
  title,
  slug,
  heroHeadline,
  heroSub,
  mainContent,
  faqs,
  relatedServices = [],
  imagePath,
  imageAlt,
}: ServicePageProps) {
  const url = `${BUSINESS.url}/${slug}`;
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: title, url },
  ]);
  const serviceSchema = generateServiceSchema(title, url, heroSub);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ name: title, href: `/${slug}` }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#1E2125] text-white relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                Certified Safety Solution
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight">{heroHeadline}</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-normal">{heroSub}</p>
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold text-base md:text-lg rounded-xl shadow-[0_8px_25px_rgba(172,123,37,0.35)] hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                  }}
                  aria-label={`Call ${BUSINESS.phoneDisplay}`}
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Call: {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-bold text-base md:text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  Get Free Quote
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {["Free Inspection", "Same Day Service", "Authentic Warranty", "Direct Rates"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
                    <svg className="w-4 h-4 text-[#C59740] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            {imagePath ? (
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl border border-gray-700">
                <Image
                  src={imagePath}
                  alt={imageAlt || `${title} installation in Bangalore`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden bg-white/5 border-2 border-dashed border-white/20 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                  </svg>
                  <p className="text-white/60 font-semibold text-sm">Add your {title} photo here</p>
                  <p className="text-white/30 text-xs mt-1">/images/{slug}-hero.jpg</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2 prose prose-gray prose-headings:font-extrabold prose-headings:text-[#1E2125] prose-h2:text-2xl prose-h3:text-xl max-w-none text-[#6C6C6E]">
              {mainContent}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick quote card */}
              <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-200/80 sticky top-24 shadow-xs">
                <span className="text-xs font-bold text-[#AC7B25] uppercase tracking-wider block mb-1">Instant Assistance</span>
                <h3 className="font-bold text-[#1E2125] text-lg mb-4">Request Free Inspection</h3>
                <div className="space-y-3">
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-center gap-3 w-full px-4 py-3 text-white font-bold rounded-xl transition-all justify-center shadow-md hover:scale-[1.02]"
                    style={{
                      background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                    }}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    {BUSINESS.phoneDisplay}
                  </a>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full px-4 py-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-bold rounded-xl transition-colors justify-center shadow-xs">
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
                <ul className="mt-4 space-y-2 border-t border-gray-200/60 pt-4">
                  {["Zero-cost site measurement", "Express same-day installation", "Authentic warranty card", "Factory-direct square foot pricing"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#6C6C6E]">
                      <svg className="w-4 h-4 text-[#AC7B25] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar image */}
              {imagePath ? (
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md border border-gray-100">
                  <Image
                    src={imagePath}
                    alt={imageAlt || `${title} in Bangalore`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="rounded-2xl bg-[#FAFAFA] border-2 border-dashed border-gray-200 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-10 h-10 text-[#AC7B25]/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                    </svg>
                    <p className="text-[#1E2125] text-xs font-semibold">{title} photo</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">/images/{slug}-sidebar.jpg</p>
                  </div>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="bg-[#FAFAFA] rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1E2125] mb-3 text-sm uppercase tracking-wider">Related Safety Solutions</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/${s.slug}`} className="flex items-center gap-2 text-sm text-[#6C6C6E] hover:text-[#AC7B25] transition-colors">
                          <svg className="w-3.5 h-3.5 text-[#AC7B25] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQ items={faqs} title={`${title} — Frequently Asked Questions`} />
    </>
  );
}
