import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = buildMetadata({
  title: "Get a Free Site Assessment & Quotation | Shrishti Enterprises",
  description:
    "Connect directly with Shrishti Enterprises technical experts for balcony safety net and invisible grill estimates in Bangalore. Express call & WhatsApp response.",
  path: "/contact",
  keywords: [
    "contact shrishti enterprises",
    "safety net estimate bangalore",
    "free balcony inspection bangalore",
    "invisible grill price quote",
  ],
});

export default function ContactPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Contact", url: `${BUSINESS.url}/contact` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "Contact Us", href: "/contact" }]} />

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-xs">
            Direct Line & Consultations
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Request an Expert On-Site Measurement
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect with our Bangalore field coordinators for complimentary site inspections, material samples, and exact itemized estimates.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Channels */}
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Reach Out Directly
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Immediate Support Channels</h2>
              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-4 p-5 bg-green-50/70 rounded-2xl border border-green-200/80 hover:border-green-400 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Direct Hotline</p>
                    <p className="text-green-800 font-extrabold text-xl group-hover:text-green-600">{BUSINESS.phoneDisplay}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Available 7 Days a Week: 8:00 AM – 8:00 PM</p>
                  </div>
                </a>

                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 hover:border-emerald-400 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp Instant Chat</p>
                    <p className="text-emerald-800 font-extrabold text-xl group-hover:text-emerald-600">{BUSINESS.phoneDisplay}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Send balcony photos for instant approximate quotes</p>
                  </div>
                </a>

                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Official Email</p>
                    <p className="text-gray-900 font-bold text-base group-hover:text-green-700 break-all">{BUSINESS.email}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Commercial proposals &amp; society tender inquiries</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Bangalore Operations</p>
                    <p className="text-gray-900 font-bold">Bangalore, Karnataka, India</p>
                    <p className="text-gray-500 text-xs mt-0.5">Mobile inspection units deployed across Greater Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Online Inquiry
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Schedule An Inspection</h2>
              <form action={`https://formsubmit.co/${BUSINESS.email}`} method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Safety Net Inquiry — Shrishti Enterprises" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${BUSINESS.url}/contact?sent=1`} />

                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Apartment / Locality in Bangalore
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    placeholder="e.g. Sobha Dream Acres, Whitefield"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Safety Solution Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition-all text-sm"
                  >
                    <option value="">Select a solution</option>
                    <option>Balcony Safety Nets</option>
                    <option>Invisible Grills (SS316)</option>
                    <option>Anti-Bird &amp; Pigeon Nets</option>
                    <option>Children Protection Mesh</option>
                    <option>Monkey Deterrent Nets</option>
                    <option>Ceiling Cloth Hangers</option>
                    <option>Cricket &amp; Sports Nets</option>
                    <option>Duct Area Safety Nets</option>
                    <option>Construction Debris Nets</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Requirement Notes / Approximate Measurements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Share balcony dimensions, floor height, or specific safety concerns..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-green-500 transition-all resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-green-600 hover:bg-green-700 text-white font-extrabold text-base rounded-xl transition-colors shadow-md hover:shadow-lg cursor-pointer"
                >
                  Submit Inquiry &amp; Request Free Quote
                </button>
                <p className="text-center text-xs text-gray-500">
                  Our technical supervisor will contact you within 30 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-gray-50 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={BUSINESS.mapEmbed}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shrishti Enterprises Service Coverage Bangalore"
            />
          </div>
        </div>
      </section>
    </>
  );
}
