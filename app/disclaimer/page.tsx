import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Disclaimer & Safety Guidelines | Shrishti Enterprises",
  description:
    "Review important safety disclosures, structural load limits, and maintenance guidelines for balcony safety nets and invisible grills installed by Shrishti Enterprises in Bangalore.",
  path: "/disclaimer",
  keywords: [
    "disclaimer",
    "shrishti enterprises safety guidelines",
    "safety nets load limits bangalore",
    "invisible grills maintenance disclaimer",
  ],
});

export default function DisclaimerPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Disclaimer", url: `${BUSINESS.url}/disclaimer` },
  ]);

  const lastUpdated = "January 2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb items={[{ name: "Disclaimer", href: "/disclaimer" }]} />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[#1E2125] text-white relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Safety Disclosures &amp; Advisory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Disclaimer &amp; Safety Guidelines
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Essential guidelines on product usage, load tolerances, ongoing inspection, and proper maintenance for your balcony installations.
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Effective &amp; Last Updated: {lastUpdated}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-2 mb-4 border-b border-gray-100 pb-3">
              1. General Safety Purpose &amp; Supervision
            </h2>
            <p className="mb-4 leading-relaxed">
              Balcony safety nets and invisible grills installed by <strong>{BUSINESS.name}</strong> are engineered as secondary physical barrier systems designed to prevent accidental falls. They are not a substitute for active adult supervision of young children, vulnerable individuals, or household pets.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              2. Load Capacities &amp; Structural Limitations
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Tension Tolerances:</strong> While our HDPE/Nylon netting and SS316 cables support significant impact loads (250–350+ kg/m²), they should never be subjected to intentional climbing, hanging, or anchoring heavy gym equipment.
              </li>
              <li>
                <strong>Fire &amp; Heat Proximity:</strong> Keep grills, open flames, deep-frying setups, and hot lighting fixtures away from polymer safety netting.
              </li>
              <li>
                <strong>Sharp Objects:</strong> Avoid dragging sharp metallic ladders, glass panes, or blades across tensioned cables or nylon filaments.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              3. Maintenance &amp; Periodic Inspection
            </h2>
            <p className="mb-4 leading-relaxed">
              We recommend inspecting your balcony netting and invisible grill anchor points every 6 to 12 months. If you observe any sagging, accidental cuts, or loose wall anchors, contact our team immediately for prompt servicing.
            </p>

            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-gray-200 mt-8 not-prose">
              <h3 className="text-lg font-bold text-[#1E2125] mb-2">Need a free safety re-inspection?</h3>
              <p className="text-sm text-[#6C6C6E] mb-4">
                Our technicians can inspect your existing safety nets or invisible grills anywhere in Bangalore to verify tension and anchor security.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm shadow-xs transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
                }}
              >
                Call: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ensure safety for your balcony with Bangalore's certified team" />
    </>
  );
}
