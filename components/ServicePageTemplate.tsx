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
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">{heroHeadline}</h1>
              <p className="text-xl text-green-50 mb-8">{heroSub}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-green-700 font-bold text-lg rounded-2xl hover:bg-green-50 transition-all hover:scale-105 shadow-xl" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Call: {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
                  Get Free Quote
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {["Free Inspection", "Same Day Service", "1 Year Warranty", "Best Price"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-green-200 text-sm">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Hero image — real if provided, placeholder otherwise */}
            {imagePath ? (
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl">
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
              <div className="rounded-3xl overflow-hidden bg-white/10 border-2 border-dashed border-white/30 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                  </svg>
                  <p className="text-white/60 font-semibold text-sm">Add your {title} photo here</p>
                  <p className="text-white/30 text-xs mt-1">/images/{slug}-hero.jpg</p>
                  <p className="text-white/25 text-xs">Recommended: 800×600px WebP</p>
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
            <div className="lg:col-span-2 prose prose-gray prose-headings:font-extrabold prose-h2:text-2xl prose-h3:text-xl max-w-none">
              {mainContent}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick quote card */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 sticky top-24">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Get Free Quote</h3>
                <div className="space-y-3">
                  <a href={BUSINESS.phoneHref} className="flex items-center gap-3 w-full px-4 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors justify-center shadow">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    {BUSINESS.phoneDisplay}
                  </a>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full px-4 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors justify-center border border-green-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
                <ul className="mt-4 space-y-2">
                  {["Free site inspection", "Same day installation", "1-year warranty", "Best price guarantee"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar image — real if imagePath provided, placeholder otherwise */}
              {imagePath ? (
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
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
                <div className="rounded-2xl bg-green-50 border-2 border-dashed border-green-200 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-10 h-10 text-green-400/50 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                    </svg>
                    <p className="text-green-700/60 text-xs font-semibold">{title} photo</p>
                    <p className="text-green-600/40 text-[10px] mt-0.5">/images/{slug}-sidebar.jpg</p>
                  </div>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors">
                          <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
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
