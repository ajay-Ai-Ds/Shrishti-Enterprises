import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "High-Rise Child Safety: Balcony & Stairwell Netting in Bangalore",
  description: "Essential childproofing strategies and safety net guidelines for high-rise apartment living in Bangalore. Protect toddlers from accidental falls.",
  path: "/blog/protect-children-safety-nets",
  keywords: ["child safety nets bangalore", "childproofing apartment balcony", "kids fall protection nets"],
});

export default function BlogPost5() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Child Safety Nets Guide", url: `${BUSINESS.url}/blog/protect-children-safety-nets` },
  ]);
  const blog = generateBlogSchema({
    title: "High-Rise Child Safety: Essential Balcony & Stairwell Precautions",
    description: "Proven preventive strategies and installation guidelines to ensure childproof living spaces in multi-storey apartments.",
    url: `${BUSINESS.url}/blog/protect-children-safety-nets`,
    datePublished: "2025-02-28",
    dateModified: "2025-02-28",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: "Child Safety Guide", href: "/blog/protect-children-safety-nets" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl bg-[#FAFAFA] aspect-[16/7] flex items-center justify-center border-2 border-dashed border-gray-200 mb-10">
            <div className="text-center">
              <svg className="w-12 h-12 text-[#AC7B25]/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
              </svg>
              <p className="text-[#1E2125] text-sm font-semibold">Child Safety Netting Precautions</p>
              <p className="text-[#6C6C6E] text-xs">Shrishti Enterprises Bangalore</p>
            </div>
          </div>
          <div className="text-xs text-[#6C6C6E] mb-4">February 28, 2025 · 6 min read</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E2125] mb-6 tracking-tight">High-Rise Child Safety: Essential Balcony &amp; Stairwell Precautions</h1>
          <div className="prose prose-gray prose-headings:font-bold prose-headings:text-[#1E2125] max-w-none text-[#6C6C6E]">
            <p>Living on elevated floors in Bangalore multi-storey communities requires proactive precautions to safeguard active toddlers and children. Here are the most effective childproofing strategies for balconies, open windows, and staircase voids.</p>
            <h2>Common Fall Hazards in Modern Apartments</h2>
            <ul>
              <li><strong>Balustrade Gaps:</strong> Railing spacing exceeding 4 inches allows toddlers to squeeze through.</li>
              <li><strong>Climbing Hazards:</strong> Balcony furniture, plant stands, and storage boxes placed near railings can act as makeshift steps.</li>
              <li><strong>Open Stairwell Voids:</strong> Multi-floor internal staircases in duplexes present high-fall risks.</li>
            </ul>
            <h2>How Child Protection Nets Eliminate Hazards</h2>
            <p>Reinforced child safety nets deployed by Shrishti Enterprises feature 25mm to 30mm mesh apertures with over 200 kg/m² load capacity. They form an impenetrable, resilient barrier that prevents falls while maintaining natural ventilation.</p>
            <h2>Installation Best Practices</h2>
            <p>Ensure your safety net is anchored with industrial SS304 expansion fasteners drilled directly into solid concrete or steel framework, avoiding weak drywall or loose plastering.</p>
          </div>
          <div className="mt-10 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-200 shadow-xs">
            <p className="font-bold text-[#1E2125] mb-2">Childproof your balcony and staircase today</p>
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
