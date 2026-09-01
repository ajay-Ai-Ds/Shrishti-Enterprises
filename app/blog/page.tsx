import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Blog — Safety Net Tips & Guides for Bangalore Homes",
  description: "Expert guides on safety nets, invisible grills, bird nets, and home safety for Bangalore apartments. Read tips from Shrishti Enterprises experts.",
  path: "/blog",
  keywords: ["safety net blog bangalore", "invisible grills guide", "safety net tips"],
});

const POSTS = [
  { slug: "best-safety-nets-bangalore", title: "Best Safety Nets in Bangalore 2024 — Complete Guide", date: "2024-11-01", desc: "A comprehensive guide to the best safety net types, brands, and installation options available in Bangalore for apartments and villas.", readTime: "8 min" },
  { slug: "invisible-grills-vs-traditional", title: "Invisible Grills vs Traditional Iron Grills — Which Is Better?", date: "2024-10-15", desc: "An honest comparison of invisible grills and traditional iron grills for Bangalore homes — covering cost, safety, aesthetics, and maintenance.", readTime: "6 min" },
  { slug: "balcony-safety-nets-price", title: "Balcony Safety Nets Price in Bangalore 2024", date: "2024-09-20", desc: "Everything you need to know about balcony safety net prices in Bangalore — material types, price ranges, and what to watch out for.", readTime: "5 min" },
  { slug: "benefits-of-invisible-grills", title: "7 Key Benefits of Invisible Grills for Bangalore Apartments", date: "2024-08-10", desc: "Discover why thousands of Bangalore homeowners are switching from traditional grills to invisible stainless steel cable grills.", readTime: "5 min" },
  { slug: "protect-children-safety-nets", title: "How to Protect Children with Safety Nets at Home", date: "2024-07-05", desc: "Expert tips on using safety nets, invisible grills, and other measures to protect young children in Bangalore apartments.", readTime: "7 min" },
  { slug: "bird-net-installation-guide", title: "Bird Net Installation Guide — What You Need to Know", date: "2024-06-18", desc: "A step-by-step guide to bird net installation in Bangalore — types, mesh sizes, costs, and maintenance.", readTime: "6 min" },
  { slug: "cloth-hangers-installation-guide", title: "Ceiling Cloth Hanger Installation Guide for Bangalore Balconies", date: "2024-05-22", desc: "Everything about ceiling cloth hangers — types, installation process, costs, and maintenance for Bangalore apartments.", readTime: "4 min" },
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
      <section className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Safety Net Tips &amp; Guides</h1>
          <p className="text-xl text-green-100">Expert advice from Bangalore's most trusted safety net company.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Blog image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border-b border-dashed border-green-200">
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 text-green-400/50 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" /></svg>
                    <p className="text-green-600/50 text-[10px]">/images/blog/{post.slug}.jpg</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-green-700 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Have a Safety Net Question?" subtitle="Call us — our experts are happy to advise you for free." />
    </>
  );
}
