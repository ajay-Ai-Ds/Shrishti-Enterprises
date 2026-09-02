import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Service & Warranty Agreement",
  description:
    "Read the terms and conditions, warranty coverage, installation standards, and cancellation policies for Shrishti Enterprises safety net and invisible grill services in Bangalore.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "shrishti enterprises terms",
    "safety nets warranty bangalore",
    "invisible grills terms of service",
  ],
});

export default function TermsAndConditionsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Terms & Conditions", url: `${BUSINESS.url}/terms-and-conditions` },
  ]);

  const lastUpdated = "January 2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb items={[{ name: "Terms & Conditions", href: "/terms-and-conditions" }]} />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[#1E2125] text-white relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Legal &amp; Service Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Clear guidelines on service quotes, free on-site inspections, material warranty coverage, and payment terms for our Bangalore customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-xs border border-gray-200 prose md:prose-lg max-w-none text-[#6C6C6E]">
            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFA] text-[#AC7B25] border border-[#AC7B25]/20 text-xs sm:text-sm font-semibold mb-8">
              <svg className="w-4 h-4 text-[#AC7B25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Effective &amp; Last Updated: {lastUpdated}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-2 mb-4 border-b border-gray-100 pb-3">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4 leading-relaxed">
              By accessing our website (<strong>{BUSINESS.url}</strong>), booking an on-site inspection, or contracting <strong>{BUSINESS.name}</strong> for safety net installation, invisible grill fitment, bird control, or cloth hanger services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              2. On-Site Inspection &amp; Quotations
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Complimentary Site Measurements:</strong> We provide zero-cost on-site dimension assessments across Bangalore residential and commercial localities.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> All price quotes provided are calculated based on physical square footage, selected material specification (nylon/HDPE/SS316), and structural mounting requirements.
              </li>
              <li>
                <strong>Quote Validity:</strong> Written quotations remain valid for 30 calendar days from the date of issuance.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              3. Installation &amp; Property Safety Protocols
            </h2>
            <p className="mb-4 leading-relaxed">
              Our certified technicians adhere to strict high-rise safety standards:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Dust-Free Drilling:</strong> We deploy industrial vacuum attachments during masonry anchoring to prevent tile and wall damage.
              </li>
              <li>
                <strong>Structural Verification:</strong> Installations are anchored solely to solid concrete, masonry, or approved structural steel framing.
              </li>
              <li>
                <strong>Customer Sign-Off:</strong> Upon completion, our technicians conduct a multi-point tension test in your presence before handing over the project.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              4. Authentic Warranty Coverage
            </h2>
            <div className="bg-[#FAFAFA] border-l-4 border-[#AC7B25] p-4 rounded-r-xl mb-6">
              <p className="font-semibold text-[#1E2125] mb-1">Written Warranty Guarantee:</p>
              <p className="text-[#6C6C6E] text-sm sm:text-base leading-relaxed">
                All premium safety nets and SS316 invisible grills installed by Shrishti Enterprises include authentic replacement warranty coverage covering UV degradation, premature cable oxidation, and anchor loosening.
              </p>
            </div>
            <p className="mb-4 leading-relaxed">
              <strong>Exclusions:</strong> Warranty does not cover intentional knife cutting, fire damage, chemical exposure, or unauthorized dismantling of anchors.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              5. Payment &amp; Cancellation Terms
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Payment Methods:</strong> We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, Cheque, and Cash upon successful installation.
              </li>
              <li>
                <strong>No Advance Requirement:</strong> Standard residential jobs in Bangalore require zero advance payment; full payment is due upon your 100% satisfaction after inspection.
              </li>
              <li>
                <strong>Cancellation:</strong> You may reschedule or cancel your free site inspection at any time without penalty by calling our helpline.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              6. Contact for Service Support
            </h2>
            <p className="mb-6 leading-relaxed">
              For any questions regarding our terms, warranty claims, or billing inquiries, please contact our Bangalore office:
            </p>

            <div className="bg-[#1E2125] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-800 not-prose">
              <h3 className="text-xl font-bold text-white mb-2">{BUSINESS.name}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Serving Greater Bangalore Metropolitan Area, Karnataka, India
              </p>
              <div className="space-y-2.5 text-sm">
                <p>
                  <span className="text-gray-400">Direct Helpline: </span>
                  <a href={BUSINESS.phoneHref} className="text-[#C59740] font-bold hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Official Email: </span>
                  <a href={BUSINESS.emailHref} className="text-gray-200 hover:text-white hover:underline">
                    {BUSINESS.email}
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Website: </span>
                  <a href={BUSINESS.url} className="text-gray-300 hover:text-white hover:underline">
                    {BUSINESS.url}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready for certified balcony safety at your home?" />
    </>
  );
}
