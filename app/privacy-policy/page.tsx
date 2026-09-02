import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Privacy Policy | Transparent Customer Data Protection",
  description:
    "Learn how Shrishti Enterprises collects, secures, and handles customer contact details and inspection request information in Bangalore. 100% privacy respected.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "shrishti enterprises privacy",
    "customer data security bangalore",
    "safety net service privacy policy",
  ],
});

export default function PrivacyPolicyPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Privacy Policy", url: `${BUSINESS.url}/privacy-policy` },
  ]);

  const lastUpdated = "January 2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-[#1E2125] text-white relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Data Protection &amp; Confidentiality
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            We are dedicated to safeguarding your personal data and ensuring transparent communication for every Bangalore customer.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-xs border border-gray-100 prose md:prose-lg max-w-none text-[#6C6C6E]">
            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFA] text-[#AC7B25] border border-[#AC7B25]/20 text-xs sm:text-sm font-semibold mb-8">
              <svg className="w-4 h-4 text-[#AC7B25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Effective &amp; Last Updated: {lastUpdated}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-2 mb-4 border-b border-gray-100 pb-3">
              1. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              When you visit our website (<strong>{BUSINESS.url}</strong>), request an inspection, or contact our customer support team, we may collect the following details:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Full name, mobile phone number, WhatsApp contact number, and email address.
              </li>
              <li>
                <strong>Property &amp; Location Details:</strong> Apartment complex name, residential locality, flat number, and city in Bangalore for site measurement purposes.
              </li>
              <li>
                <strong>Service Requirements:</strong> Types of netting solutions required (e.g. balcony safety nets, invisible grills, bird spikes, cricket nets).
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To schedule and execute free on-site dimension audits and inspections.</li>
              <li>To provide transparent, written price quotes and warranty certificates.</li>
              <li>To communicate appointment confirmations and technician dispatch timings.</li>
              <li>To answer warranty claims, maintenance inquiries, and customer service requests.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              3. Information Sharing &amp; Non-Disclosure
            </h2>
            <div className="bg-[#FAFAFA] border-l-4 border-[#AC7B25] p-4 rounded-r-xl mb-6">
              <p className="font-semibold text-[#1E2125] mb-1">Our Protection Guarantee:</p>
              <p className="text-[#6C6C6E] text-sm sm:text-base leading-relaxed">
                <strong>We never sell, rent, or trade your personal information.</strong> Your phone number and residential details are used exclusively by our certified technicians to coordinate your safety net installation in Bangalore.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2125] mt-10 mb-4 border-b border-gray-100 pb-3">
              4. Contact Us
            </h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions or concerns regarding our privacy practices, please reach out to our customer support team:
            </p>

            <div className="bg-[#1E2125] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-800 not-prose">
              <h3 className="text-xl font-bold text-white mb-2">{BUSINESS.name}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Serving All Localities Across Bangalore, Karnataka, India
              </p>
              <div className="space-y-2.5 text-sm">
                <p>
                  <span className="text-gray-400">Helpline: </span>
                  <a href={BUSINESS.phoneHref} className="text-[#C59740] font-semibold hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Email: </span>
                  <a href={BUSINESS.emailHref} className="text-gray-200 hover:text-white hover:underline">
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to secure your balcony with Bangalore's certified team?" />
    </>
  );
}
