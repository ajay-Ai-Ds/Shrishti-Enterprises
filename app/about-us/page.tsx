import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about Shrishti Enterprises — Bangalore's trusted safety net experts with 15+ years of experience, 5000+ installations, and 4.9★ Google rating.",
  path: "/about-us",
  keywords: ["about shrishti enterprises", "safety net company bangalore", "best safety net company"],
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">About Shrishti Enterprises</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Bangalore&apos;s most trusted safety net company — protecting families since 2010.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden bg-green-50 aspect-[4/3] border border-green-100 shadow-sm">
              <Image
                src="/images/team1.webp"
                alt="Shrishti Enterprises team at work"
                width={1200}
                height={900}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2010, Shrishti Enterprises started with a simple mission: to make every Bangalore home safer, especially for children and the elderly. What began as a small team of two has grown into one of the most trusted safety net companies in the city, with over 5,000 installations across Bangalore.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take pride in using only the highest quality materials — UV-stabilised HDPE nets, SS316 stainless steel cables, and premium nylon — sourced from certified manufacturers. Our installation team undergoes regular training to ensure clean, professional, and safe installations every time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, Shrishti Enterprises serves all areas of Bangalore, from Whitefield and Marathahalli in the east to Jayanagar and JP Nagar in the south. Our 4.9-star Google rating from 320+ verified reviews is a testament to our commitment to quality and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "2010", label: "Year Founded" },
                  { val: "15+", label: "Years Experience" },
                  { val: "5000+", label: "Installations" },
                  { val: "4.9★", label: "Google Rating" },
                ].map((s) => (
                  <div key={s.label} className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                    <p className="text-2xl font-extrabold text-green-700">{s.val}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Work photos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team at Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Team photo 1", path: "/images/team-1.jpg" },
              { label: "Team photo 2", path: "/images/team-2.jpg" },
              { label: "Team photo 3", path: "/images/team-3.jpg" },
            ].map((img) => (
              <div key={img.path} className="rounded-2xl bg-green-100 aspect-[4/3] flex items-center justify-center border-2 border-dashed border-green-300">
                <div className="text-center p-4">
                  <svg className="w-10 h-10 text-green-400/50 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
                  </svg>
                  <p className="text-green-700/60 text-xs font-medium">{img.label}</p>
                  <p className="text-green-600/40 text-[10px] mt-0.5">{img.path}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Safety First", desc: "Every decision we make is guided by one question: does this keep our customer safer? From material selection to installation technique, safety is our north star." },
              { title: "Quality Always", desc: "We never compromise on material quality. We use certified, tested nets and cables that meet or exceed industry standards — because your family deserves nothing less." },
              { title: "Honest Pricing", desc: "No hidden charges, no price gouging. We charge fair, transparent prices and will match any genuine like-for-like quote from a competitor in Bangalore." },
            ].map((v) => (
              <div key={v.title} className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-green-800 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Make Your Home Safer?" />
    </>
  );
}
