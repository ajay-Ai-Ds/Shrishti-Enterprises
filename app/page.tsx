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
  title: "Shrishti Enterprises | Certified Safety Nets & Invisible Grills in Bangalore",
  description:
    "Expert installation of high-tensile balcony safety nets, SS316 invisible grills, bird nets & child protection netting in Bangalore. Free on-site inspection. Call +91 80880 47056.",
  alternates: { canonical: BUSINESS.url },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema([
    {
      question: "How do balcony safety nets safeguard high-rise apartments in Bangalore?",
      answer:
        "Engineered with virgin copolymer and UV inhibitors, our safety nets create an impenetrable, flexible barrier preventing accidental falls of children and pets while allowing unrestricted breeze and panoramic views.",
    },
    {
      question: "What is the typical pricing for safety netting across Bangalore homes?",
      answer:
        "Installation rates start from ₹12/sq ft for heavy-duty balcony nets and ₹150/sq ft for marine-grade invisible grills. Contact Shrishti Enterprises for complimentary site evaluation and itemized quotation.",
    },
    {
      question: "Can Shrishti Enterprises perform same-day installations?",
      answer:
        "Yes! Our dedicated installation teams cover every major Bangalore locality daily, executing express same-day fitments for requests placed before 1:00 PM.",
    },
    {
      question: "Which zones and apartment sectors in Bangalore are covered?",
      answer:
        "We serve all Bangalore tech hubs and residential sectors including Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, Marathahalli, Bellandur, Sarjapur Road, and beyond.",
    },
  ]);
  const reviewSchema = generateReviewSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero */}
      <HeroSlider />

      {/* Stats bar */}
      <div className="bg-green-700 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { val: "12+ Years", label: "Industry Expertise" },
            { val: "4,800+", label: "Homes & Balconies Protected" },
            { val: "4.9 / 5.0", label: "Customer Approval Rating" },
            { val: "Same Day", label: "Express Fitment Available" },
          ].map((s) => (
            <div key={s.label} className="p-2">
              <p className="text-2xl md:text-3xl font-extrabold tracking-tight">{s.val}</p>
              <p className="text-green-100 text-xs md:text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Comprehensive Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Engineered Safety Nets & Invisible Grills for Bangalore Homes
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Custom-crafted architectural solutions designed to protect your loved ones from high-rise hazards without sacrificing aesthetic elegance or outdoor views.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => {
              const imageMap: Record<string, { path: string; alt: string }> = {
                "invisible-grills": {
                  path: "/images/invisiblegrill.webp",
                  alt: "Sleek stainless steel invisible grills fitted on Bangalore apartment window",
                },
                "children-safety-nets": {
                  path: "/images/child.webp",
                  alt: "Child-safe protective safety mesh on modern residential balcony",
                },
                "monkey-safety-nets": {
                  path: "/images/monkey.webp",
                  alt: "Heavy-duty monkey exclusion barrier net for Bangalore terrace",
                },
                "bird-nets": {
                  path: "/images/antibirdnet.jpg",
                  alt: "Anti-bird mesh installation preventing bird entry in balcony area",
                },
                "cloth-hangers": {
                  path: "/images/clothhanger.jpg",
                  alt: "Ceiling-mounted stainless steel laundry pulley dryer in Bangalore",
                },
                "duct-area-safety-nets": {
                  path: "/images/ductareanets.webp",
                  alt: "Building utility shaft and duct safety netting installation",
                },
                "balcony-safety-nets": {
                  path: "/images/balcony.webp",
                  alt: "High-tensile balcony safety net installation in high-rise building",
                },
                "pigeon-safety-nets": {
                  path: "/images/pigeon-safety-nets.webp",
                  alt: "Durable pigeon exclusion netting on residential apartment balcony",
                },
                "sports-nets": {
                  path: "/images/sports.jpg",
                  alt: "Sports boundary and multi-sport court netting installation",
                },
                "cricket-safety-nets": {
                  path: "/images/cricket.jpeg",
                  alt: "Terrace and academy cricket practice net enclosure in Bangalore",
                },
                "construction-safety-nets": {
                  path: "/images/team1.webp",
                  alt: "Industrial building safety and debris catchment net fitment",
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

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* About Shrishti Snapshot */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-gray-200">
              <Image
                src="/images/team.webp"
                alt="Shrishti Enterprises certified installation crew at work in Bangalore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                The Shrishti Standard
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Bangalore&apos;s Benchmark in High-Rise & Balcony Safety
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Shrishti Enterprises, we combine industrial polymer science with artisan craftsmanship. We understand that apartment living in Bangalore demands uncompromising safety without compromising expansive balcony views or building aesthetics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From precision tensioning of SS316 marine cables to UV-shielded copolymer balcony nets, our certified technicians treat every home with utmost care — delivering dust-free drilling, durable anchor points, and authentic replacement warranties.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "2012", label: "Year Established" },
                  { val: "4,800+", label: "Completed Projects" },
                  { val: "100%", label: "Rust-Proof Hardware" },
                  { val: "30 Min", label: "Average Response Time" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                    <p className="text-2xl font-extrabold text-green-700">{s.val}</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md"
              >
                Discover Our Story & Standards
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <WorkProcess />

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Project Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Recent Installations Across Bangalore Communities
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto leading-relaxed">
              Explore our real-world portfolio across premier Bangalore apartments, villas, and commercial complexes.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="col-span-2 md:col-span-1 relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/team.webp" alt="Shrishti Enterprises technical specialists executing precision fitment" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-green-600 px-3 py-1 rounded-full">Trained Technicians</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/monkey.webp" alt="Heavy-gauge monkey barrier netting on Bangalore villa terrace" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Monkey Nets</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/invisiblegrill.webp" alt="Architectural SS316 invisible grills on high-rise balcony" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Invisible Grills</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/pigeon-safety-nets.webp" alt="Discreet pigeon netting installed on residential balcony" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Pigeon Nets</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/cricket.jpeg" alt="Impact-absorbing cricket practice netting enclosure" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Cricket Nets</span>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              <Image src="/images/balcony.webp" alt="High-strength copolymer balcony safety net installation" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs bg-green-600 px-2.5 py-1 rounded-full">Balcony Nets</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-600 text-green-700 font-bold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Explore Full Gallery Portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Areas We Serve */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Citywide Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Serving Every Major Residential Hub in Bangalore
            </h2>
            <p className="mt-2 text-gray-600 max-w-lg mx-auto text-sm">
              Same-day inspection teams deployed daily across all Bangalore pin codes and tech townships.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="flex items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:bg-green-50 hover:border-green-300 hover:text-green-800 transition-all text-gray-700 text-sm font-medium shadow-xs"
              >
                <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Safety Nets in {loc.area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <GoogleMap />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTABanner
        title="Schedule Your Free On-Site Safety Inspection"
        subtitle="Prompt same-day installation across Bangalore with zero call-out charges. Talk to our technical team now."
      />

      {/* Common Queries / People Also Ask */}
      <section className="py-12 bg-green-50/70 border-t border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Explored Safety Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "What safety net thickness is optimal for high-rise apartment balconies?",
              "Do invisible grills obstruct panoramic balcony views or breeze?",
              "How to calculate square footage and costing for balcony safety nets?",
              "Which mesh aperture prevents small pigeons and doves from nesting?",
              "What warranty coverage applies to safety net installations?",
              "Can safety netting be installed securely in rented flats without tile damage?",
            ].map((q) => (
              <Link
                key={q}
                href="/contact"
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-xs transition-all text-sm text-gray-700 hover:text-green-700"
              >
                <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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
