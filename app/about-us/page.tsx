import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "About Us | Bangalore's Leading Safety Net & Invisible Grill Specialists",
  description:
    "Discover the engineering philosophy, certified safety standards, and dedicated installation craft behind Shrishti Enterprises — Bangalore's trusted balcony safety partner.",
  path: "/about-us",
  keywords: [
    "about shrishti enterprises",
    "safety net specialists bangalore",
    "certified balcony protection company",
    "invisible grill experts",
  ],
});

export default function AboutPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "About Us", url: `${BUSINESS.url}/about-us` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "About Us", href: "/about-us" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#1E2125] text-white text-center relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Mission &amp; Standards
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            Engineering Safer Living Spaces Across Bangalore
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Delivering high-tensile safety barriers and modern invisible grills with uncompromising build quality and customer trust since 2012.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden bg-[#FAFAFA] aspect-[4/3] border border-gray-200 shadow-lg relative">
              <Image
                src="/images/team1.webp"
                alt="Shrishti Enterprises certified technical fitment team on site"
                width={1200}
                height={900}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="inline-block bg-[#FAFAFA] text-[#AC7B25] border border-[#AC7B25]/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
                Our Genesis
              </span>
              <h2 className="text-3xl font-extrabold text-[#1E2125] mb-5 leading-tight tracking-tight">
                Built On Precision, Safety Science &amp; Integrity
              </h2>
              <p className="text-[#6C6C6E] leading-relaxed mb-4">
                Shrishti Enterprises was founded in 2012 with a singular objective: resolving the growing high-rise safety concerns in Bangalore’s vertical residential developments without compromising on ventilation, natural light, or architectural beauty.
              </p>
              <p className="text-[#6C6C6E] leading-relaxed mb-4">
                Over the past 12+ years, we have systematically refined our supply chain and technician training. We exclusively source ISO-certified high-density polyethylene (HDPE) filaments, UV-stabilized copolymer twines, and authentic SS316 marine-grade tensile cables. Every fastener and anchor bolt deployed is laboratory-grade and resistant to corrosive atmospheric weathering.
              </p>
              <p className="text-[#6C6C6E] leading-relaxed mb-6">
                From luxury penthouses in Whitefield and Indiranagar to sprawling gated communities along Sarjapur Road and Electronic City, our commitment remains steady: flawless craftsmanship, zero damage to property, and comprehensive warranty coverage.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { val: "2012", label: "Founded in Bangalore" },
                  { val: "4,800+", label: "Verified Installations" },
                  { val: "4.9★", label: "Average Rating" },
                  { val: "100%", label: "Tension Tested" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#FAFAFA] rounded-2xl p-3.5 text-center border border-gray-200/80 shadow-xs">
                    <p className="text-xl md:text-2xl font-extrabold text-[#AC7B25]">{s.val}</p>
                    <p className="text-[#6C6C6E] text-xs mt-1 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-[#FAFAFA] border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-[#AC7B25] border border-[#AC7B25]/20 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#1E2125] tracking-tight">The Core Pillars That Drive Shrishti</h2>
            <p className="mt-2 text-[#6C6C6E] max-w-lg mx-auto text-sm leading-relaxed">
              How our strict quality management protocols benefit your home and family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Uncompromising Tensile Integrity",
                desc: "We rigorously test every safety mesh roll and SS316 cable batch for minimum rupture thresholds exceeding 300+ kg force per anchor line, guaranteeing dependable fall arrest.",
              },
              {
                title: "Clean & Considerate Craftsmanship",
                desc: "Our installation specialists deploy industrial vacuum attachments during masonry drilling, ensuring zero dust accumulation on balcony railings, glass surfaces, or floor tiling.",
              },
              {
                title: "Crystal-Clear Accountability",
                desc: "We provide upfront itemized quotations calculated transparently by square footage, paired with an authentic written warranty card provided immediately upon project sign-off.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#AC7B25]/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#AC7B25]/30 text-[#AC7B25] flex items-center justify-center font-bold text-lg mb-4">
                  ✓
                </div>
                <h3 className="font-bold text-[#1E2125] text-lg mb-2">{v.title}</h3>
                <p className="text-[#6C6C6E] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Protect Your Loved Ones with Bangalore's Certified Specialists"
        subtitle="Book a zero-cost on-site evaluation today. Our technical consultants are available 7 days a week."
      />
    </>
  );
}
