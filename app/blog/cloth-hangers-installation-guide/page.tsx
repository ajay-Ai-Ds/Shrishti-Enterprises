import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Ceiling Cloth Hangers Installation Guide | Shrishti Enterprises",
  description: "Learn how stainless steel ceiling cloth drying systems maximize utility balcony space in Bangalore apartments. Easy pulley operation and load distribution.",
  path: "/blog/cloth-hangers-installation-guide",
  keywords: ["ceiling cloth hanger bangalore", "pulley cloth drying system", "balcony clothes dryer installation"],
});

export default function BlogPost7() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Cloth Hangers Guide", url: `${BUSINESS.url}/blog/cloth-hangers-installation-guide` },
  ]);
  const blog = generateBlogSchema({
    title: "Maximizing Compact Balcony Utility with Ceiling Drying Systems",
    description: "A complete walkthrough of dual-pulley stainless steel drying racks, load distribution, and effortless operation.",
    url: `${BUSINESS.url}/blog/cloth-hangers-installation-guide`,
    datePublished: "2025-03-05",
    dateModified: "2025-03-05",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: "Cloth Hanger Guide", href: "/blog/cloth-hangers-installation-guide" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl bg-[#FAFAFA] aspect-[16/7] flex items-center justify-center border-2 border-dashed border-gray-200 mb-10">
            <div className="text-center">
              <svg className="w-12 h-12 text-[#AC7B25]/40 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
              </svg>
              <p className="text-[#1E2125] text-sm font-semibold">Ceiling Laundry Systems Guide</p>
              <p className="text-[#6C6C6E] text-xs">Shrishti Enterprises Bangalore</p>
            </div>
          </div>
          <div className="text-xs text-[#6C6C6E] mb-4">March 5, 2025 · 4 min read</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E2125] mb-6 tracking-tight">Maximizing Compact Balcony Utility with Ceiling Drying Systems</h1>
          <div className="prose prose-gray prose-headings:font-bold prose-headings:text-[#1E2125] max-w-none text-[#6C6C6E]">
            <p>Apartment balconies in Bangalore often serve dual purposes as relaxing outdoor retreats and laundry utility spaces. Traditional floor drying stands clutter valuable walking space. Ceiling-mounted cloth drying pulley systems provide the ideal ergonomic solution.</p>
            <h2>How Ceiling Pulley Systems Operate</h2>
            <p>Each stainless steel pipe lowers independently using dual nylon pulleys to comfortable chest level. After loading damp laundry, pulling the cord effortlessly hoists the rod up toward the ceiling where warm air accelerates drying.</p>
            <h2>Key Advantages of Stainless Steel Pulley Dryers</h2>
            <ul>
              <li><strong>100% Floor Space Recovery:</strong> Keeps your balcony floor clear for plants, seating, and outdoor relaxation.</li>
              <li><strong>Rust-Proof Stainless Steel:</strong> High-grade SS202 and SS304 rods resist moisture and never stain clothes.</li>
              <li><strong>Heavy Load Capacity:</strong> Each rod holds up to 10–12 kg of heavy bedsheets, towels, and denim.</li>
            </ul>
            <h2>Fast Installation by Shrishti Enterprises</h2>
            <p>Our technicians install 4-rod, 6-rod, and 8-rod configurations in under 60 minutes with rock-solid concrete ceiling fasteners.</p>
          </div>
          <div className="mt-10 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-200 shadow-xs">
            <p className="font-bold text-[#1E2125] mb-2">Book ceiling cloth dryer installation in Bangalore</p>
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
