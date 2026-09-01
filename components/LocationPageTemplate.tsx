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
    `Premium safety net installation in ${area}, Bangalore. Balcony nets, invisible grills, bird nets and more.`
  );
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ name: `Safety Nets in ${area}`, href: `/${slug}` }]} />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                Safety Nets in {area}, Bangalore
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Premium safety net installation in {area}. Balcony nets, invisible grills, bird nets, pigeon nets, and more. Free inspection. Same-day installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-green-700 font-bold text-lg rounded-2xl hover:bg-green-50 transition-all hover:scale-105 shadow-xl">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Call: {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/30 hover:bg-white/20 transition-all">
                  Free Quote
                </Link>
              </div>
            </div>
            {imageSrc ? (
              <div className="rounded-3xl overflow-hidden bg-white/10 aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? `${area} safety nets`}
                  width={900}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden bg-white/10 border-2 border-dashed border-white/30 aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-14 h-14 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-white/60 font-semibold text-sm">Add {area} area photo</p>
                  <p className="text-white/30 text-xs mt-1">/images/{slug}.jpg</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services grid for this area */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Services in {area}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all text-center text-xs font-medium text-gray-700 hover:text-green-700">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-gray prose-headings:font-extrabold prose-h2:text-2xl prose-h3:text-xl max-w-none">
          {content}
        </div>
      </section>

      <CTABanner title={`Get Free Safety Net Quote in ${area}`} subtitle={`Call or WhatsApp us. We serve ${area} and all surrounding areas of Bangalore.`} />
      <FAQ items={faqs} title={`Safety Nets in ${area} — FAQs`} />
    </>
  );
}
