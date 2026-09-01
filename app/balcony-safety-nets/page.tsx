import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Balcony Safety Nets in Bangalore | Best Quality & Price",
  description: "Premium balcony safety nets in Bangalore. High-strength nylon nets to protect children, elderly & pets from balcony falls. Free inspection. Call +91 80880 47056.",
  path: "/balcony-safety-nets",
  keywords: ["balcony safety nets bangalore", "balcony net price", "balcony net installation bangalore"],
});

const faqs = [
  { question: "What are balcony safety nets and how do they work?", answer: "Balcony safety nets are high-tensile nylon or HDPE nets fitted across balcony openings and railings. They create a protective barrier that prevents children, pets, and adults from falling through. They are UV-resistant, weatherproof, and designed to withstand significant impact force." },
  { question: "What is the price of balcony safety nets in Bangalore?", answer: "Balcony safety net prices in Bangalore range from ₹12 to ₹18 per square foot for standard nylon nets. The exact price depends on mesh size, net thickness, balcony dimensions, and floor height. Call Shrishti Enterprises on +91 80880 47056 for a free quote after site inspection." },
  { question: "How long do balcony safety nets last?", answer: "Our UV-stabilised balcony safety nets last 5–10 years under normal Bangalore conditions. We provide a 1-year installation warranty. Regular cleaning (once every 3–6 months with water) extends the life further." },
  { question: "Are balcony safety nets visible from outside?", answer: "Quality nylon safety nets are nearly invisible from a distance. From inside your apartment, the view is barely affected. Invisible grills are an alternative if you want a completely clear view." },
  { question: "Can balcony safety nets hold a person's weight?", answer: "Yes. Our balcony safety nets are tested to withstand a force of 200–300+ kg per square metre, well above the weight of a child or adult. They comply with safety standards and include certified load ratings." },
];

export default function BalconySafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Balcony Safety Nets"
      slug="balcony-safety-nets"
      heroHeadline="Balcony Safety Nets in Bangalore — Protect Your Family"
      heroSub="High-strength UV-stabilised nylon nets for balconies, terraces, and galleries. Safe for children, pets, and elderly. Free inspection across Bangalore."
      imagePath="/images/balcony.webp"
      imageAlt="Balcony safety net installed in Bangalore apartment"
      relatedServices={[
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Balcony Safety Nets in Bangalore</h2>
            <p>Balcony safety nets are one of the most essential safety products for apartment dwellers in Bangalore. With thousands of high-rise apartments in areas like Whitefield, HSR Layout, and Electronic City, the risk of accidental falls from balconies is real — especially for young children, elderly family members, and pets.</p>
            <p>Shrishti Enterprises provides premium quality balcony safety nets across all areas of Bangalore. Our nets are made from UV-stabilised HDPE and nylon — materials that resist Bangalore's monsoon rains, summer heat, and strong winds without degrading for 5–10 years.</p>
          </div>

          <div>
            <h2>Why Balcony Safety Nets Are Essential</h2>
            <p>Every year, dozens of tragic accidents involving children falling from balconies are reported in Bangalore. Many of these are preventable with a proper safety net. Here is why balcony safety nets are a must for every Bangalore apartment:</p>
            <ul>
              <li><strong>Child protection:</strong> Children aged 1–6 are the most vulnerable. A properly installed net prevents them from climbing through or over balcony railings.</li>
              <li><strong>Pet safety:</strong> Cats and small dogs can fall from upper floor balconies while chasing birds or insects. Safety nets prevent these accidents.</li>
              <li><strong>Elderly protection:</strong> Senior family members with balance issues can lean against a net without fear.</li>
              <li><strong>Peace of mind:</strong> Many parents report sleeping better after installing balcony safety nets.</li>
            </ul>
          </div>

          <div>
            <h2>Our Balcony Safety Net Materials</h2>
            <p>We use two primary materials for balcony safety nets:</p>
            <h3>1. Nylon Safety Nets</h3>
            <p>High-tensile nylon with 25mm–50mm mesh size. Best for children and pet protection. Load capacity: 150–200 kg/m². UV-stabilised for long life. Available in green, white, and transparent variants.</p>
            <h3>2. HDPE Safety Nets</h3>
            <p>High-density polyethylene nets are stronger and more durable than nylon. They are knotted or knotless and ideal for larger balconies and terraces. Load capacity: 200–300 kg/m².</p>
          </div>

          <div>
            <h2>Balcony Safety Net Price in Bangalore</h2>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-green-800 font-semibold border-b border-green-200">
                    <th className="pb-2">Net Type</th>
                    <th className="pb-2">Price (per sq ft)</th>
                    <th className="pb-2">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 space-y-2">
                  <tr className="border-b border-gray-100"><td className="py-2">Standard Nylon Net</td><td>₹12–₹15</td><td>Apartments, children</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Premium Nylon Net</td><td>₹15–₹18</td><td>High-rise, pets</td></tr>
                  <tr><td className="py-2">HDPE Net</td><td>₹16–₹22</td><td>Terraces, heavy use</td></tr>
                </tbody>
              </table>
              <p className="mt-3 text-xs text-gray-500">Prices include materials + installation. Exact price after free site inspection.</p>
            </div>
          </div>

          <div>
            <h2>Balcony Safety Net Installation Process</h2>
            <p>Our installation process is clean, quick, and leaves no damage to your walls or tiles:</p>
            <ol>
              <li><strong>Free site visit:</strong> Our technician visits your home, measures the balcony, and recommends the best net type.</li>
              <li><strong>Material preparation:</strong> Nets and fittings are cut and prepared to exact measurements.</li>
              <li><strong>Hook installation:</strong> SS304 cup hooks are drilled into the top and sides of the balcony at 12–18 inch intervals. We fill drill holes cleanly.</li>
              <li><strong>Net fitting:</strong> The net is threaded through the hooks and tensioned for a taut, uniform appearance.</li>
              <li><strong>Quality check:</strong> We tug-test the net and check all attachment points before leaving.</li>
            </ol>
          </div>

          <div>
            <h2>Areas We Serve for Balcony Safety Nets</h2>
            <p>We install balcony safety nets across all Bangalore areas including Whitefield, Marathahalli, Electronic City, HSR Layout, Koramangala, Indiranagar, Sarjapur Road, Bellandur, Jayanagar, JP Nagar, Bannerghatta Road, Hennur, Yelahanka, and all surrounding localities.</p>
          </div>
        </div>
      }
    />
  );
}
