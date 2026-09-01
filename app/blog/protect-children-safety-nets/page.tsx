import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
export const metadata = buildMetadata({ title: "How to Protect Children with Safety Nets at Home", description: "Expert guide on protecting young children in Bangalore apartments using safety nets, invisible grills, and other measures. Tips from Shrishti Enterprises.", path: "/blog/protect-children-safety-nets", keywords: ["protect children safety nets", "child safety bangalore apartment", "safety nets for children"] });
export default function BlogPost5() {
  const breadcrumb = generateBreadcrumbSchema([{ name: "Home", url: BUSINESS.url }, { name: "Blog", url: `${BUSINESS.url}/blog` }, { name: "Protect Children with Safety Nets", url: `${BUSINESS.url}/blog/protect-children-safety-nets` }]);
  const blog = generateBlogSchema({ title: "How to Protect Children with Safety Nets at Home", description: "Guide on protecting children in Bangalore apartments with safety nets.", url: `${BUSINESS.url}/blog/protect-children-safety-nets`, datePublished: "2024-07-05", dateModified: "2024-07-05" });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blog) }} />
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: "Protect Children with Safety Nets", href: "/blog/protect-children-safety-nets" }]} />
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl bg-green-50 aspect-[16/7] flex items-center justify-center border-2 border-dashed border-green-200 mb-10">
            <div className="text-center"><svg className="w-12 h-12 text-green-400/50 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" /></svg><p className="text-green-700/60 text-sm">/images/blog/protect-children-safety-nets.jpg</p></div>
          </div>
          <div className="text-xs text-gray-400 mb-4">July 5, 2024 · 7 min read</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">How to Protect Children with Safety Nets at Home in Bangalore</h1>
          <div className="prose prose-gray prose-headings:font-bold max-w-none">
            <p>As a parent living in a Bangalore apartment, child safety is always at the top of your mind. With balconies, staircases, open windows, and other hazardous areas, it can feel overwhelming. This guide covers everything you need to know about using safety nets and invisible grills to create a safer home for your child.</p>
            <h2>The Most Dangerous Areas in a Bangalore Apartment for Young Children</h2>
            <ol>
              <li><strong>Balconies:</strong> The #1 risk area. Open railings that a child can climb or fall through.</li>
              <li><strong>Staircases:</strong> Open banister rails and stair edges. A fall from stairs can cause serious injury.</li>
              <li><strong>Windows:</strong> Low windows that a child can open and lean out of.</li>
              <li><strong>Duct areas:</strong> Open apartment duct spaces that a child could fall into.</li>
            </ol>
            <h2>Safety Nets for Balconies</h2>
            <p>A balcony safety net is the single most important safety investment for families with young children in Bangalore apartments. Our UV-stabilised nylon nets are tested to withstand 150–200 kg/m² and provide a complete barrier across all balcony openings.</p>
            <p>Key features to look for in a children's balcony net: 25–50mm mesh size (no body part entrapment), UV-stabilised material for outdoor durability, SS304 hooks and fittings (no sharp edges), and professional installation with tension testing.</p>
            <h2>Safety Nets for Staircases</h2>
            <p>Staircase safety nets are custom-fitted to the specific dimensions of your staircase. They are installed along the open side of the stairs — typically between the banister posts and the outer edge. For spiral staircases, we fabricate curved net sections. Installation typically takes 2–3 hours.</p>
            <h2>Invisible Grills for Windows</h2>
            <p>For windows, invisible grills (SS316 cable grills) are an excellent option. They provide strong protection while keeping the window airy and visually open. Cable spacing of 5–8 cm ensures no child can pass through.</p>
            <h2>At What Age Are Children Most at Risk?</h2>
            <p>Children aged 1–4 are at the highest risk from balcony and staircase falls. They can climb railings before parents realise it. Children aged 5–8 are also at risk, particularly from windows. We recommend installing safety nets before your child starts walking.</p>
            <h2>Our Recommendation for Bangalore Apartments</h2>
            <p>For a complete child-safe Bangalore apartment: install balcony safety nets on all balconies, install staircase nets if your apartment has internal stairs, fit invisible grills or window nets on all windows below 1.2m height, and cover any open duct areas with duct nets.</p>
            <p>Call Shrishti Enterprises on {BUSINESS.phoneDisplay} for a free home safety assessment and quote.</p>
          </div>
          <div className="mt-10 p-6 bg-green-50 rounded-2xl border border-green-100">
            <p className="font-bold text-gray-900 mb-2">Make your Bangalore home child-safe today</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors">Call: {BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </article>
      <CTABanner />
    </>
  );
}
