import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Humane Pigeon & Bird Control for Bangalore Apartments",
  description: "Learn how to humanely prevent pigeon nesting and bird droppings on Bangalore balconies and utility shafts with specialized anti-bird netting.",
  path: "/blog/bird-net-installation-guide",
  keywords: ["bird net installation bangalore", "pigeon control balcony bangalore", "anti bird netting guide"],
});

export default function BlogPost6() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Bird Net Installation Guide", url: `${BUSINESS.url}/blog/bird-net-installation-guide` },
  ]);
  const blog = generateBlogSchema({
    title: "Humane Pigeon & Bird Control for Bangalore Apartment Balconies",
    description: "Effective aperture sizing, weatherproofing techniques, and perimeter sealing tips to eliminate bird infestation.",
    url: `${BUSINESS.url}/blog/bird-net-installation-guide`,
    datePublished: "2025-03-02",
    dateModified: "2025-03-02",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: "Bird Net Guide", href: "/blog/bird-net-installation-guide" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl bg-[#FAFAFA] aspect-[16/7] flex items-center justify-center border-2 border-dashed border-gray-200 mb-10">
            <div className="text-center">
              <svg className="w-12 h-12 text-[#AC7B25]/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
              </svg>
              <p className="text-[#1E2125] text-sm font-semibold">Humane Bird Control Guide</p>
              <p className="text-[#6C6C6E] text-xs">Shrishti Enterprises Bangalore</p>
            </div>
          </div>
          <div className="text-xs text-[#6C6C6E] mb-4">March 2, 2025 · 5 min read</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E2125] mb-6 tracking-tight">Humane Pigeon &amp; Bird Control for Bangalore Apartment Balconies</h1>
          <div className="prose prose-gray prose-headings:font-bold prose-headings:text-[#1E2125] max-w-none text-[#6C6C6E]">
            <p>Pigeon infestation on apartment balconies, AC outdoor units, and utility plumbing shafts is a major health and hygiene concern across Bangalore. Here is how professional anti-bird netting delivers permanent, humane protection.</p>
            <h2>Health Hazards Associated with Pigeon Infestation</h2>
            <p>Pigeon droppings contain acidic uric compounds that corrode masonry, paintwork, and metal railings. More importantly, dried droppings release fungal spores linked to respiratory conditions such as Psittacosis and Histoplasmosis.</p>
            <h2>Why Anti-Bird Netting Is the Superior Solution</h2>
            <ul>
              <li><strong>Humane Barrier:</strong> Prevents birds from landing and nesting without trapping or harming them.</li>
              <li><strong>Discreet Appearance:</strong> Transparent mono-twine netting is barely visible from outside.</li>
              <li><strong>Weatherproof Durability:</strong> UV-stabilized HDPE filaments resist direct solar radiation and torrential rains for over 8 years.</li>
            </ul>
            <h2>Professional Installation Standards</h2>
            <p>Shrishti Enterprises uses SS304 expansion hooks and border tension wire ropes to ensure airtight perimeter sealing with zero sagging.</p>
          </div>
          <div className="mt-10 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-200 shadow-xs">
            <p className="font-bold text-[#1E2125] mb-2">Eliminate pigeon problems permanently</p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-xl shadow-xs transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)" }}
            >
              Call: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </article>
      <CTABanner />
    </>
  );
}
