import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "High-Rise Safety & Invisible Grill Insights | Shrishti Enterprises",
  description:
    "Authoritative safety guides, cost breakdowns, and technical advice on balcony safety netting and SS316 invisible grills for Bangalore homeowners.",
  path: "/blog",
  keywords: [
    "balcony safety guide bangalore",
    "invisible grills vs iron grilles",
    "pigeon net installation guide",
    "safety net pricing bangalore",
  ],
});

const POSTS = [
  {
    slug: "best-safety-nets-bangalore",
    title: "The Ultimate Guide to Selecting Balcony Safety Nets in Bangalore",
    date: "2025-01-10",
    desc: "A thorough examination of polymer twines, mesh tensile ratings, and professional fitment benchmarks for high-rise apartments.",
    readTime: "7 min",
  },
  {
    slug: "invisible-grills-vs-traditional",
    title: "SS316 Invisible Grills vs. Traditional Iron Bars: Modern Safety Comparison",
    date: "2025-01-22",
    desc: "Compare aesthetics, structural load resistance, emergency exit safety, and lifecycle maintenance for Bangalore residences.",
    readTime: "6 min",
  },
  {
    slug: "balcony-safety-nets-price",
    title: "2025 Balcony Safety Net Cost & Estimation Guide in Bangalore",
    date: "2025-02-05",
    desc: "Detailed per-square-foot pricing analysis across standard nylon, UV-treated copolymer, and heavy-gauge HDPE meshes.",
    readTime: "5 min",
  },
  {
    slug: "benefits-of-invisible-grills",
    title: "Top 7 Reasons Bangalore High-Rise Owners Are Choosing Invisible Grills",
    date: "2025-02-14",
    desc: "How marine-grade stainless steel cables combine panoramic balcony vistas with certified 350+ kg fall protection.",
    readTime: "5 min",
  },
  {
    slug: "protect-children-safety-nets",
    title: "High-Rise Child Safety: Essential Balcony & Stairwell Precautions",
    date: "2025-02-28",
    desc: "Proven preventive strategies and installation guidelines to ensure childproof living spaces in multi-storey apartments.",
    readTime: "6 min",
  },
  {
    slug: "bird-net-installation-guide",
    title: "Humane Pigeon & Bird Control for Bangalore Apartment Balconies",
    date: "2025-03-02",
    desc: "Effective aperture sizing, weatherproofing techniques, and perimeter sealing tips to eliminate bird infestation.",
    readTime: "5 min",
  },
  {
    slug: "cloth-hangers-installation-guide",
    title: "Maximizing Compact Balcony Utility with Ceiling Drying Systems",
    date: "2025-03-05",
    desc: "A complete walkthrough of dual-pulley stainless steel drying racks, load distribution, and effortless operation.",
    readTime: "4 min",
  },
];

export default function BlogIndexPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />

      <section className="py-16 bg-[#1E2125] text-white text-center relative overflow-hidden border-b border-gray-800">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AC7B25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block bg-[#AC7B25]/20 text-[#C59740] border border-[#AC7B25]/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Knowledge Base &amp; Technical Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Safety Net &amp; Architectural Grill Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Practical insights and home safety engineering advice from Shrishti Enterprises technical team.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-[#AC7B25]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#FAFAFA] to-gray-100 flex items-center justify-center border-b border-gray-100 p-6 text-center">
                  <div>
                    <span className="inline-block bg-white text-[#AC7B25] border border-[#AC7B25]/20 text-xs font-bold px-3 py-1 rounded-full shadow-xs mb-2">
                      Technical Article
                    </span>
                    <p className="text-[#1E2125] font-semibold text-xs">{post.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-[#6C6C6E] font-medium">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="font-bold text-[#1E2125] text-base leading-snug mb-2 group-hover:text-[#AC7B25] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6C6C6E] text-sm leading-relaxed">{post.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Looking for Tailored Safety Recommendations?"
        subtitle="Speak directly with our technical consultants for free guidance on your apartment balcony layout."
      />
    </>
  );
}
