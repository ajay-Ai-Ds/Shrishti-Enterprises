import type { Metadata } from "next";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import GoogleMap from "@/components/GoogleMap";
import CTABanner from "@/components/CTABanner";
import { SERVICES, BUSINESS, LOCATIONS } from "@/lib/constants";
import { generateFAQSchema, generateReviewSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Nets & Invisible Grills in Bangalore | Shrishti Enterprises",
  description:
    "Shrishti Enterprises — Bangalore's #1 safety net company. Balcony nets, invisible grills, bird nets, children safety nets. Free inspection. Same day installation. Call +91 80880 47056.",
  alternates: { canonical: BUSINESS.url },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema([
    { question: "What are balcony safety nets?", answer: "Balcony safety nets are high-tensile nylon or HDPE nets installed on balcony railings to prevent children, elderly, and pets from accidentally falling." },
    { question: "How much do safety nets cost in Bangalore?", answer: "Safety net prices in Bangalore range from ₹12 to ₹25 per square foot depending on net type and material. Call us for a free quote." },
    { question: "Do you provide same-day installation?", answer: "Yes! Shrishti Enterprises offers same-day installation across Bangalore. Call before noon for same-day service." },
    { question: "What areas in Bangalore do you serve?", answer: "We serve all of Bangalore including Whitefield, Marathahalli, Electronic City, HSR Layout, Koramangala, Indiranagar, Sarjapur Road, Bellandur and more." },
  ]);
  const reviewSchema = generateReviewSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero */}
      <HeroSlider />

      {/* Stats bar */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { val: "15+", label: "Years Experience" },
            { val: "5000+", label: "Installations Done" },
            { val: "4.9★", label: "Google Rating" },
            { val: "24/7", label: "Customer Support" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-extrabold">{s.val}</p>
              <p className="text-green-200 text-xs md:text-sm mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Premium Safety Net Solutions in Bangalore</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">From balcony safety nets to invisible grills, we offer complete safety solutions for homes, apartments, and commercial spaces across Bangalore.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              // Map uploaded images to matching service slugs
              const imageMap: Record<string, { path: string; alt: string }> = {
                "invisible-grills": {
                  path: "/images/invisiblegrill.webp",
                  alt: "Invisible grills installed on apartment balcony in Bangalore",
                },
                "children-safety-nets": {
                  path: "/images/child.webp",
                  alt: "Children safety net protecting kids on balcony in Bangalore",
                },
                "monkey-safety-nets": {
                  path: "/images/monkey.webp",
                  alt: "Monkey safety net installed on building in Bangalore",
                },
                "bird-nets": {
                  path: "/images/antibirdnet.jpg",
                  alt: "Anti bird net installed on balcony in Bangalore",
                },
                "cloth-hangers": {
                  path: "/images/clothhanger.jpg",
                  alt: "Ceiling cloth hanger system installed in Bangalore balcony",
                },
                "duct-area-safety-nets": {
                  path: "/images/ductareanets.webp",
                  alt: "Duct area safety net installed in apartment Bangalore",
                },
                "balcony-safety-nets": {
                  path: "/images/balcony.webp",
                  alt: "Balcony safety net installed in Bangalore apartment",
                },
                "pigeon-safety-nets": {
                  path: "/images/pigeon-safety-nets.webp",
                  alt: "Pigeon safety net installed on building in Bangalore",
                },
                "sports-nets": {
                  path: "/images/sports.jpg",
                  alt: "Sports net installation in Bangalore",
                },
                "cricket-safety-nets": {
                  path: "/images/cricket.jpeg",
                  alt: "Cricket practice net installation in Bangalore",
                },
              };
              const img = imageMap[s.slug];
              return (
                <ServiceCard
                  key={s.slug}
                  title={s.title}
                  description={s.shortDesc}
                  slug={s.slug}
                  featured={i === 0 || i === 1}
                  imagePath={img?.path}
                  imageAlt={img?.alt}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About snippet with image placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/team.webp"
                alt="Shrishti Enterprises team at work in Bangalore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">About Shrishti Enterprises</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Bangalore&apos;s Most Trusted Safety Net Experts Since 2010
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shrishti Enterprises has been protecting families across Bangalore for over 15 years. We specialise in balcony safety nets, invisible grills, bird nets, pigeon nets, children safety nets, and cloth hangers — providing premium quality at affordable prices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our trained technicians serve all areas of Bangalore including Whitefield, Marathahalli, Electronic City, HSR Layout, Koramangala, Indiranagar, Sarjapur Road, and beyond. Every installation comes with a 1-year warranty and our best-price guarantee.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "15+", label: "Years in Business" },
                  { val: "5000+", label: "Happy Customers" },
                  { val: "4.9★", label: "Google Rating" },
                  { val: "10+", label: "Services Offered" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                    <p className="text-2xl font-extrabold text-green-700">{s.val}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/about-us" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <WorkProcess />

      {/* ── Our Work Gallery ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Real Installations Across Bangalore</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Trusted by 5000+ families. Every installation done with care, precision and premium materials.</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">

            {/* Team — wide on mobile */}
            <div className="col-span-2 md:col-span-1 relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/team.webp" alt="Shrishti Enterprises professional team Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-green-600 px-3 py-1 rounded-full">Our Team</span>
            </div>

            {/* Monkey Nets */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/monkey.webp" alt="Monkey safety net installation Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Monkey Nets</span>
            </div>

            {/* Invisible Grills */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/invisiblegrill.webp" alt="Invisible grills installation Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Invisible Grills</span>
            </div>

            {/* Pigeon Nets */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/pigeon-safety-nets.webp" alt="Pigeon safety net installation Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Pigeon Nets</span>
            </div>

            {/* Cricket Nets */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/cricket.jpeg" alt="Cricket practice net installation Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Cricket Nets</span>
            </div>

            {/* Balcony Nets */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/balcony.webp" alt="Balcony safety net installation Bangalore" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Balcony Nets</span>
            </div>

          </div>

          {/* View Full Gallery */}
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-600 text-green-700 font-bold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner title="Get Your Free Safety Net Quote Today" subtitle="Same day installation available. Free site inspection. Best price guaranteed." />

      <Reviews />

      {/* Areas We Serve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Safety Nets Across All of Bangalore</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all text-gray-700 text-sm font-medium"
              >
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Safety Nets in {loc.area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoogleMap />
      <FAQ />

      {/* People Also Ask */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">People Also Ask</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Which safety net is best for a high-rise apartment balcony?",
              "Are invisible grills better than traditional grills?",
              "How much does balcony net installation cost in Bangalore?",
              "What is the difference between bird nets and pigeon nets?",
              "Do safety nets require maintenance?",
              "Can I install safety nets on a rental apartment?",
            ].map((q) => (
              <Link key={q} href="/contact" className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-sm transition-all text-sm text-gray-700 hover:text-green-700">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                {q}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
