import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Cricket Safety Nets in Bangalore | Practice Net Installation",
  description: "Professional cricket practice net installation in Bangalore for homes, apartments, terraces, and academies. Durable, weather-resistant nets. Call +91 80880 47056.",
  path: "/cricket-safety-nets",
  keywords: ["cricket nets bangalore", "cricket practice net", "cricket net installation bangalore", "cricket net home"],
});

const faqs = [
  { question: "What type of net is used for cricket practice?", answer: "We use HDPE knotless netting or nylon twisted nets for cricket practice. HDPE is preferred for outdoor use as it is UV-stabilised and weatherproof. Mesh size is typically 30–40mm and thickness 2–3mm for durability against hard cricket balls." },
  { question: "Can cricket nets be installed on apartment terraces?", answer: "Yes. We regularly install cricket practice nets on apartment terraces and open terraces across Bangalore. We use powder-coated MS or GI pipe frames anchored securely to the terrace floor with proper waterproofing to prevent seepage." },
  { question: "What is the price of cricket nets in Bangalore?", answer: "Cricket net installation in Bangalore costs ₹25–₹60 per sq ft depending on net grade, frame type (pipe or PVC), and area size. A standard 10x10 metre practice net costs approximately ₹12,000–₹25,000 all inclusive. Call +91 80880 47056 for a free quote." },
  { question: "How long do cricket nets last?", answer: "High-quality HDPE cricket nets last 5–8 years outdoors with UV protection. Nylon nets last 3–5 years. The pipe frame structure lasts 10+ years with basic maintenance. We provide a 1-year installation warranty on all cricket net setups." },
  { question: "Can you install cricket nets indoors?", answer: "Yes. We install cricket practice nets in indoor spaces like garages, basements, large halls, and indoor sports academies across Bangalore. Indoor nets use lighter nylon mesh as UV protection is not required." },
];

export default function CricketSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Cricket Safety Nets"
      slug="cricket-safety-nets"
      heroHeadline="Cricket Safety Nets in Bangalore — Practice at Home, Every Day"
      heroSub="Professional cricket practice net installation for homes, terraces, apartments, and academies. Durable, weatherproof, and custom-sized. Serving all Bangalore areas."
      imagePath="/images/cricket.jpeg"
      imageAlt="Cricket practice net installation in Bangalore"
      relatedServices={[
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Cricket Safety Nets in Bangalore</h2>
            <p>Cricket is India's most beloved sport — and Bangalore's apartments and villas no longer need to be a barrier to daily practice. Shrishti Enterprises designs and installs professional-grade cricket practice nets for homes, terraces, apartments, and sports academies across Bangalore.</p>
            <p>Whether you are a serious club player, a coaching academy, or a parent who wants their child to practice at home, we design and install the perfect cricket net setup for your space and budget.</p>
          </div>

          <div>
            <h2>Types of Cricket Nets We Install</h2>
            <ul>
              <li><strong>Home practice nets:</strong> Compact setups for gardens, terraces, and driveways. Custom-sized to your available space.</li>
              <li><strong>Terrace cricket nets:</strong> Full or half-length practice nets for apartment terraces with secure MS pipe frame anchoring.</li>
              <li><strong>Academy nets:</strong> Multiple parallel lanes for coaching academies and clubs — full-length (22 yards) or half-pitch.</li>
              <li><strong>Indoor nets:</strong> Lightweight nylon nets for garages, basements, and indoor halls — no UV protection needed.</li>
              <li><strong>Boundary safety nets:</strong> Perimeter nets to prevent balls from going into neighbour properties or traffic.</li>
            </ul>
          </div>

          <div>
            <h2>Cricket Net Specifications</h2>
            <div className="not-prose bg-gray-50 rounded-2xl p-6 border border-gray-100 overflow-x-auto">
              <table className="w-full text-sm text-gray-700 min-w-[480px]">
                <thead>
                  <tr className="text-left font-semibold text-gray-900 border-b border-gray-200">
                    <th className="pb-2 pr-4">Specification</th>
                    <th className="pb-2 pr-4 text-green-700">HDPE (Outdoor)</th>
                    <th className="pb-2">Nylon (Indoor)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Material", "UV-stabilised HDPE", "Twisted nylon"],
                    ["Mesh size", "30–40mm", "25–35mm"],
                    ["Twine thickness", "2.0–3.0mm", "1.5–2.0mm"],
                    ["UV resistance", "8–10 years", "3–5 years"],
                    ["Best for", "Terrace/outdoor", "Indoor/garage"],
                    ["Price range", "₹35–₹60/sq ft", "₹25–₹45/sq ft"],
                  ].map(([spec, hdpe, nylon]) => (
                    <tr key={spec} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 pr-4 font-medium">{spec}</td>
                      <td className="py-2 pr-4 text-green-700">{hdpe}</td>
                      <td className="py-2 text-gray-500">{nylon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2>Cricket Net Price in Bangalore</h2>
            <p>Our cricket net pricing is fully transparent and all-inclusive (frame + net + installation + cleanup):</p>
            <ul>
              <li><strong>Basic home practice net (5×5m):</strong> ₹8,000–₹12,000</li>
              <li><strong>Standard terrace net (10×10m):</strong> ₹15,000–₹25,000</li>
              <li><strong>Academy full-length lane (22×3m):</strong> ₹20,000–₹35,000 per lane</li>
              <li><strong>Boundary safety nets (per metre):</strong> ₹200–₹350</li>
            </ul>
            <p>All prices include free site inspection, custom measurement, MS/GI pipe frame, net supply, installation, and clean-up.</p>
          </div>

          <div>
            <h2>Why Choose Shrishti Enterprises for Cricket Nets?</h2>
            <ul>
              <li>Custom-designed for your exact space — no standard sizes, every net is made-to-measure</li>
              <li>Heavy-duty MS pipe frame — won't bend or collapse under wind pressure</li>
              <li>UV-stabilised HDPE nets — won't fade or weaken in Bangalore's harsh summer sun</li>
              <li>Professional installation — no DIY assembly, our team handles everything</li>
              <li>1-year full warranty on installation</li>
              <li>Serving all Bangalore areas — Whitefield, Koramangala, HSR Layout, Indiranagar, and more</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
