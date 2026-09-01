import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Shrishti Enterprises to understand how customer information is collected, used and protected.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "Shrishti Enterprises privacy policy",
    "safety net installation privacy policy",
  ],
});

export default function PrivacyPolicyPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Privacy Policy", url: `${BUSINESS.url}/privacy-policy` },
  ]);

  const lastUpdatedDate = "August 15, 2026";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-medium leading-relaxed">
            How Shrishti Enterprises collects, uses, and safeguards your information when you request our safety net and invisible grill services in Bangalore.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-green md:prose-lg max-w-none text-gray-700">
            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 text-green-800 border border-green-200 text-xs sm:text-sm font-semibold mb-8">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Last Updated: {lastUpdatedDate}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 border-b border-gray-100 pb-3">
              1. Overview & Commitment
            </h2>
            <p className="mb-4 leading-relaxed">
              At <strong>{BUSINESS.name}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), accessible via <strong>{BUSINESS.url}</strong>, protecting the privacy and personal data of our customers across Bangalore, Karnataka, India is a top priority.
            </p>
            <p className="mb-6 leading-relaxed">
              This Privacy Policy outlines how we collect, handle, use, and protect your information when you browse our website, submit an enquiry, request a quotation, schedule an on-site measurement, or hire us for balcony safety net, invisible grill, bird net, or related installation services.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              2. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">
              To provide accurate site assessments, custom price estimates, and professional installation services, we may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Contact Information:</strong> Your name, phone number, WhatsApp number, and email address.
              </li>
              <li>
                <strong>Location & Service Details:</strong> Installation address, landmark, apartment or flat details, city (Bangalore), balcony/window dimensions, and specific safety net requirements.
              </li>
              <li>
                <strong>Enquiry Details:</strong> Information provided in website forms, WhatsApp messages, direct phone conversations, or email correspondence regarding your requested service.
              </li>
              <li>
                <strong>Technical & Website Usage Data:</strong> Basic technical information automatically recorded when visiting our website, such as IP address, browser type, device category, and pages visited.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              3. How We Collect Information
            </h2>
            <p className="mb-4 leading-relaxed">
              We collect information directly from you through the following channels:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>Form submissions on our website (such as quote or callback request forms).</li>
              <li>Direct WhatsApp messages sent via our WhatsApp click-to-chat integration.</li>
              <li>Incoming phone calls to our customer service line.</li>
              <li>Email enquiries sent to our business email address.</li>
              <li>In-person interactions during free site inspection and measurement visits conducted by our team in Bangalore.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              4. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed">
              We use the collected information strictly for legitimate operational purposes related to safety net services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>Responding to your inquiries and clarifying service specifications.</li>
              <li>Providing transparent, custom price quotes and cost estimates.</li>
              <li>Arranging on-site measurement visits and site inspections.</li>
              <li>Scheduling and completing safety net or invisible grill installations at your premises.</li>
              <li>Providing customer support, answering follow-up queries, and managing service warranty requests.</li>
              <li>Communicating important updates regarding your scheduled appointment or service order.</li>
              <li>Improving our website performance, layout, and user experience.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              5. Data Sharing & Protection — No Sale of Personal Data
            </h2>
            <div className="bg-green-50/70 border-l-4 border-green-600 p-4 rounded-r-xl mb-6">
              <p className="font-semibold text-green-900 mb-1">Our Protection Guarantee:</p>
              <p className="text-green-800 text-sm sm:text-base leading-relaxed">
                <strong>{BUSINESS.name} does not sell, rent, lease, trade, or commercialize</strong> your personal information to third parties, brokers, or external marketing agencies under any circumstances.
              </p>
            </div>
            <p className="mb-4 leading-relaxed">
              Your information is accessible only to authorized internal staff and installation technicians who require it to perform site visits and carry out requested installations. Information may be shared only under the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Necessary Service Delivery:</strong> Sharing essential installation details (address and contact number) with assigned installation technicians carrying out your service in Bangalore.
              </li>
              <li>
                <strong>Legal Obligations:</strong> When disclosure is strictly required by applicable Indian law, court order, or government regulation.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              6. Data Security Measures
            </h2>
            <p className="mb-6 leading-relaxed">
              We employ reasonable technical and organizational security measures to keep your personal data safe from unauthorized access, accidental loss, alteration, or misuse. Our website utilizes secure HTTPS encryption to protect data transmitted between your browser and our servers. Access to customer contact records is restricted to personnel on a need-to-know basis.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              7. Cookies & Website Analytics
            </h2>
            <p className="mb-4 leading-relaxed">
              Our website uses basic cookies to support smooth navigation, remember user preferences, and collect aggregated, non-personally identifiable website usage data.
            </p>
            <p className="mb-6 leading-relaxed">
              You can control or disable cookies through your browser settings at any time. Please note that disabling essential cookies may impact certain interactive features on our website.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              8. Third-Party Services Installed on Our Website
            </h2>
            <p className="mb-4 leading-relaxed">
              We only integrate third-party tools essential for customer communication, ad performance measurement, and service map rendering. Currently, the third-party services installed on our website include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2.5">
              <li>
                <strong>Google Ads & Conversion Tracking:</strong> Used to measure advertising effectiveness and record phone call/enquiry conversions generated from Google Search ads.
              </li>
              <li>
                <strong>WhatsApp Click-to-Chat:</strong> Enables customers to initiate direct WhatsApp chat conversations with our team for quick service queries.
              </li>
              <li>
                <strong>Google Maps Embed:</strong> Displays interactive map views showing our service coverage across Bangalore.
              </li>
            </ul>
            <p className="mb-6 leading-relaxed text-sm text-gray-600 italic">
              Note: We do not integrate uninstalled third-party tracking pixels, cross-site advertising networks, or unauthorized user data aggregators.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              9. Your Rights & Data Correction / Deletion Requests
            </h2>
            <p className="mb-4 leading-relaxed">
              You have full control over your personal data. You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2.5">
              <li>Request details of the personal information we hold about you.</li>
              <li>Request correction or updating of any inaccurate or incomplete personal details.</li>
              <li>Request the deletion or removal of your contact details from our active operational records, subject to legal or record-keeping requirements.</li>
            </ul>
            <p className="mb-6 leading-relaxed">
              To submit a request for access, correction, or deletion of your information, please contact us using the contact methods listed below. We respond to all valid privacy requests in a timely manner.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              10. Changes to This Privacy Policy
            </h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right to modify or update this Privacy Policy from time to time to reflect changes in our service operations, technical standards, or legal requirements. Any updates will be published directly on this page with a revised &quot;Last Updated&quot; date at the top of the policy. We encourage periodic review of this page.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3">
              11. Contact Us for Privacy Inquiries
            </h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please feel free to reach out to us:
            </p>

            {/* Business Contact Card */}
            <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-800 not-prose">
              <h3 className="text-xl font-bold text-white mb-2">{BUSINESS.name}</h3>
              <p className="text-gray-400 text-sm mb-5">
                Balcony Safety Nets & Invisible Grills Service Provider
              </p>

              <div className="space-y-3.5 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-700/40 text-green-400 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block">Phone / WhatsApp</span>
                    <a href={BUSINESS.phoneHref} className="text-green-400 font-semibold hover:underline">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-700/40 text-green-400 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block">Email Address</span>
                    <a href={BUSINESS.emailHref} className="text-gray-200 font-medium hover:text-white hover:underline break-all">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-700/40 text-green-400 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block">Location</span>
                    <span className="text-gray-200">{BUSINESS.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-700/40 text-green-400 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block">Website</span>
                    <a href={BUSINESS.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:underline">
                      {BUSINESS.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need professional safety nets for your home?" />
    </>
  );
}

