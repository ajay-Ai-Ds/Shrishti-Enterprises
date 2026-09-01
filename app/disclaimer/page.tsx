import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Disclaimer & Safety Standards | Shrishti Enterprises",
  description:
    "Safety load tolerances, installation disclaimers, and professional advisory notices for Shrishti Enterprises services in Bangalore.",
  path: "/disclaimer",
  keywords: [
    "safety net disclaimer",
    "shrishti enterprises safety standards",
    "invisible grills safety disclaimer",
  ],
});

export default function DisclaimerPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Disclaimer", url: `${BUSINESS.url}/disclaimer` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb items={[{ name: "Disclaimer", href: "/disclaimer" }]} />

      <section className="py-14 md:py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-xs">
            Safety Standards &amp; Advisory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Service &amp; Safety Disclaimer
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Essential information regarding installation load thresholds, structural guidelines, and proper usage of safety barriers.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-200 prose prose-green md:prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 border-b border-gray-100 pb-3">
              1. Protective Barrier Function
            </h2>
            <p className="mb-4 leading-relaxed">
              Balcony safety nets and invisible grills installed by <strong>{BUSINESS.name}</strong> are engineered as auxiliary fall-arrest physical barriers to prevent accidental falls of children, pets, seniors, and dropped items.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              2. Structural Integrity &amp; Supervision
            </h2>
            <p className="mb-4 leading-relaxed">
              While our installations are certified to withstand rigorous impact loads (250+ kg/m² for nets and 350+ kg per SS316 cable), protective barriers should complement, but not replace, standard parental and adult supervision of young children and pets on elevated balconies.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              3. Maintenance &amp; Periodic Inspection
            </h2>
            <p className="mb-4 leading-relaxed">
              We recommend periodic visual checks of anchor hooks and net tension. If you notice any accidental tears caused by sharp construction tools or external vandalism, contact our helpline immediately for warranty servicing.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mt-8 not-prose">
              <h3 className="text-lg font-bold text-green-900 mb-2">Need a free safety re-inspection?</h3>
              <p className="text-sm text-green-800 mb-4">
                Our technicians are available for quick inspections across all Bangalore localities.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-700 text-white font-bold text-sm shadow-sm hover:bg-green-800 transition-colors"
              >
                Call: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Get in touch with our certified safety team" />
    </>
  );
}
