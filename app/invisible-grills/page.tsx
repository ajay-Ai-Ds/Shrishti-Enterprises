import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Invisible Grills in Bangalore | SS316 Cable Grills",
  description: "Premium invisible grills in Bangalore. SS316 stainless steel cable grills for windows and balconies — strong, transparent, child-safe. Free inspection. Call +91 80880 47056.",
  path: "/invisible-grills",
  keywords: ["invisible grills bangalore", "SS316 invisible grills", "transparent grills bangalore", "frameless grills bangalore"],
});

const faqs = [
  { question: "What are invisible grills?", answer: "Invisible grills are a modern safety solution using high-tensile stainless steel (SS316) cables stretched vertically between top and bottom clamps on windows and balconies. They are nearly transparent, extremely strong (each cable holds 300+ kg), and require zero maintenance." },
  { question: "What is the price of invisible grills in Bangalore?", answer: "Invisible grills cost ₹150–₹250 per square foot in Bangalore depending on cable grade, thickness, and installation complexity. Call Shrishti Enterprises on +91 80880 47056 for a free site inspection and exact quote." },
  { question: "Are invisible grills safe for children?", answer: "Yes. Each cable in our invisible grills is tested to hold 300+ kg of force. The typical cable spacing of 5–8 cm prevents children from slipping through. They are widely used in Bangalore apartments with young children and are considered safer than traditional iron grills." },
  { question: "Do invisible grills block the view?", answer: "No. Invisible grills are called 'invisible' because the SS316 cables are very thin (typically 2–3mm diameter) and nearly disappear from 2–3 metres away. Your view of Bangalore's skyline or garden remains completely unobstructed." },
  { question: "How long do invisible grills last?", answer: "SS316 stainless steel is highly resistant to corrosion and rust, making invisible grills extremely durable. With zero maintenance, they can last 20+ years. We provide a 1-year installation warranty." },
];

export default function InvisibleGrillsPage() {
  return (
    <ServicePageTemplate
      title="Invisible Grills"
      slug="invisible-grills"
      heroHeadline="Invisible Grills in Bangalore — Maximum Safety, Zero Compromise on Views"
      heroSub="Premium SS316 stainless steel cable grills for windows and balconies. Transparent, strong, child-safe, and maintenance-free. Serving all Bangalore areas."
      imagePath="/images/invisiblegrill.webp"
      imageAlt="Invisible grills installed on apartment window in Bangalore"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Invisible Grills in Bangalore</h2>
            <p>Invisible grills are the premium choice for Bangalore homeowners who want maximum safety without compromising on the aesthetics of their home. Unlike traditional iron or aluminium grills that block your view and corrode over time, invisible grills use high-tensile SS316 stainless steel cables that are nearly transparent and last for decades.</p>
            <p>Shrishti Enterprises is one of Bangalore's most trusted invisible grill installers, with hundreds of installations across Whitefield, Koramangala, Indiranagar, HSR Layout, and other premium residential areas.</p>
          </div>

          <div>
            <h2>What Are Invisible Grills Made Of?</h2>
            <p>Our invisible grills use:</p>
            <ul>
              <li><strong>SS316 stainless steel cables:</strong> Grade 316 (marine-grade) stainless steel resists corrosion, rust, and discolouration even in Bangalore's monsoon conditions.</li>
              <li><strong>Aluminium alloy channels:</strong> The top and bottom clamp channels are made from powder-coated aluminium alloy for a clean finish.</li>
              <li><strong>Stainless steel fittings:</strong> All end caps, screws, and tensioners are also SS316 for long-lasting durability.</li>
            </ul>
          </div>

          <div>
            <h2>Invisible Grills vs Traditional Iron Grills</h2>
            <div className="not-prose bg-gray-50 rounded-2xl p-6 border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm text-gray-700 min-w-[480px]">
                <thead>
                  <tr className="text-left font-semibold text-gray-900 border-b border-gray-200">
                    <th className="pb-2 pr-4">Feature</th>
                    <th className="pb-2 pr-4 text-green-700">Invisible Grills</th>
                    <th className="pb-2">Traditional Iron Grills</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["View", "Completely clear", "Heavily obstructed"],
                    ["Corrosion", "Zero (SS316)", "Rusts in 2–5 years"],
                    ["Maintenance", "Zero", "Annual painting needed"],
                    ["Child safety", "Excellent", "Good"],
                    ["Aesthetics", "Premium, modern", "Old-fashioned"],
                    ["Lifespan", "20+ years", "5–10 years"],
                    ["Price", "₹150–₹250/sqft", "₹80–₹150/sqft"],
                  ].map(([f, ig, tg]) => (
                    <tr key={f} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 pr-4 font-medium">{f}</td>
                      <td className="py-2 pr-4 text-green-700">{ig}</td>
                      <td className="py-2 text-gray-500">{tg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2>Invisible Grill Price in Bangalore</h2>
            <p>Invisible grill prices in Bangalore depend on the cable grade, number of cables per metre, and installation complexity (floor height, wall type). Our standard pricing:</p>
            <ul>
              <li><strong>Standard SS304 invisible grills:</strong> ₹130–₹170 per sq ft</li>
              <li><strong>Premium SS316 invisible grills:</strong> ₹170–₹250 per sq ft</li>
              <li><strong>Minimum order:</strong> Usually 20 sq ft</li>
            </ul>
            <p>All prices include site inspection, materials, installation, and clean-up. We provide a detailed invoice before starting work.</p>
          </div>

          <div>
            <h2>Where Do We Install Invisible Grills in Bangalore?</h2>
            <p>We install invisible grills across all Bangalore areas. Our most popular installation zones include luxury apartments and villas in Whitefield, Marathahalli, Electronic City, HSR Layout, Bellandur, Koramangala, Indiranagar, and Sarjapur Road.</p>
          </div>
        </div>
      }
    />
  );
}
