import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Balcony Safety Nets Installation Bangalore | Certified Anti-Fall Mesh",
  description: "Protect your family and pets from high-rise balcony hazards with industrial-grade UV-fortified safety netting by Shrishti Enterprises. Complimentary site inspection.",
  path: "/balcony-safety-nets",
  keywords: ["balcony safety nets bangalore", "apartment balcony net fitment", "child balcony fall protection", "balcony netting cost bangalore"],
});

const faqs = [
  { question: "How do Shrishti Enterprises balcony safety nets protect high-rise residents?", answer: "Our balcony nets are fabricated from high-tensile, UV-treated copolymer twines that create a resilient, flexible perimeter barrier across balcony railings and open facade spans, preventing accidental falls of children, pets, and dropped objects without suffocating your view or airflow." },
  { question: "What is the cost per square foot for balcony netting in Bangalore?", answer: "Balcony net installation by Shrishti Enterprises averages ₹12 to ₹18 per square foot depending on filament gauge, mesh aperture, and mounting height. We provide complimentary on-site measurement with transparent written estimates." },
  { question: "What is the expected durability and warranty period?", answer: "Engineered to withstand intense ultraviolet radiation, heavy monsoon rains, and urban weathering, our nets offer an active lifespan of 6 to 10+ years, supported by an authentic replacement warranty." },
  { question: "Will installing balcony nets spoil the architectural appearance of my building?", answer: "Not at all. When properly tensioned with our stainless steel anchor system, our transparent and neutral-tone meshes blend seamlessly into the building architecture and are barely discernible from ground level." },
  { question: "What dynamic load capacity do your balcony safety nets support?", answer: "Our heavy-gauge installations are tested to withstand tensile impact loads exceeding 250 kg per square meter, easily arresting the momentum of an adult or active toddler." },
];

export default function BalconySafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Balcony Safety Nets"
      slug="balcony-safety-nets"
      heroHeadline="Engineered Balcony Fall-Protection Netting for Bangalore Apartments"
      heroSub="Industrial-grade UV-stabilized copolymer nets custom-fitted across high-rise balconies. Maximum protection for kids, seniors, and domestic pets."
      imagePath="/images/balcony.webp"
      imageAlt="High-tensile balcony safety net installation on residential Bangalore apartment"
      relatedServices={[
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Certified Balcony Safety Net Solutions in Bangalore</h2>
            <p>As Bangalore's skyline expands with multi-storey apartment townships in Whitefield, Electronic City, Sarjapur Road, and HSR Layout, securing elevated balconies has become an essential home safety priority. Open railings, wide balustrade gaps, and high elevations present serious accidental fall risks for young children, active pets, and elderly residents.</p>
            <p>Shrishti Enterprises delivers precision-measured, tension-anchored balcony safety nets engineered specifically for Bangalore's climate. Our UV-stabilized copolymer meshes provide absolute perimeter security while retaining complete daylight and panoramic city views.</p>
          </div>

          <div>
            <h2>Why Bangalore Families Trust Shrishti Balcony Nets</h2>
            <p>Preventable balcony mishaps can be permanently averted with professional fall-arrest barriers. Key advantages include:</p>
            <ul>
              <li><strong>Toddler &amp; Child Security:</strong> Prevents curious toddlers from squeezing between balusters or scaling balcony furniture.</li>
              <li><strong>Pet Freedom:</strong> Enables cats and dogs to enjoy fresh balcony air without the hazard of chasing birds over the edge.</li>
              <li><strong>Senior Peace of Mind:</strong> Adds a reassuring physical barrier for senior citizens enjoying balcony gardens.</li>
              <li><strong>Drop Prevention:</strong> Stops potted plants, toys, and laundry from blowing off upper floors onto pedestrians below.</li>
            </ul>
          </div>

          <div>
            <h2>Material Specifications &amp; Engineering Grades</h2>
            <p>We deploy two distinct commercial netting polymers based on property requirements:</p>
            <h3>1. Bonded Monofilament Nylon Mesh</h3>
            <p>Features 25mm to 40mm aperture with high elasticity and tensile strength exceeding 180 kg/m². Ideal for residential apartment balconies with children and pets. Virtually transparent from a short distance.</p>
            <h3>2. High-Density Polyethylene (HDPE) Netting</h3>
            <p>Triple-twisted, UV-treated knotted polymer boasting 250+ kg/m² load resistance. Impervious to water absorption, rot, and intense sun exposure, making it the preferred option for wide terrace spans.</p>
          </div>

          <div>
            <h2>Transparent Pricing Guide for Bangalore Installations</h2>
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-200/80 not-prose shadow-xs">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#1E2125] font-bold border-b border-[#AC7B25]/20">
                    <th className="pb-2">Mesh Grade</th>
                    <th className="pb-2">Estimated Rate (per sq ft)</th>
                    <th className="pb-2">Primary Application</th>
                  </tr>
                </thead>
                <tbody className="text-[#6C6C6E]">
                  <tr className="border-b border-gray-200/60"><td className="py-2.5 font-medium text-[#1E2125]">Standard High-Tensile Nylon</td><td>₹12 – ₹15</td><td>Standard apartment balconies &amp; windows</td></tr>
                  <tr className="border-b border-gray-200/60"><td className="py-2.5 font-medium text-[#1E2125]">UV-Fortified Premium Nylon</td><td>₹15 – ₹18</td><td>High-rise balconies (10th floor &amp; above)</td></tr>
                  <tr><td className="py-2.5 font-medium text-[#1E2125]">Heavy-Gauge Knotted HDPE</td><td>₹17 – ₹24</td><td>Expansive terraces, galleries &amp; villas</td></tr>
                </tbody>
              </table>
              <p className="mt-3 text-xs text-[#6C6C6E]">*All rates include heavy-duty SS304 mounting hardware, perimeter rope binding, and certified technician installation.</p>
            </div>
          </div>

          <div>
            <h2>Our Dust-Free 5-Step Fitment Process</h2>
            <ol>
              <li><strong>Free Dimension Audit:</strong> Our site supervisor measures your balcony perimeter using laser tools and inspects masonry anchoring surfaces.</li>
              <li><strong>Custom Net Fabrication:</strong> The netting is tailored to exact dimensions with reinforced perimeter bordering.</li>
              <li><strong>Precision Anchor Drilling:</strong> Heavy-gauge SS304 hooks are anchored into concrete or structural frames with dust-extraction drills.</li>
              <li><strong>Tension Lacing:</strong> The mesh is laced under uniform tension, eliminating sagging and unsightly wrinkles.</li>
              <li><strong>Load-Bearing Verification:</strong> We perform manual tug testing on all perimeter anchors before issuing your warranty certificate.</li>
            </ol>
          </div>
        </div>
      }
    />
  );
}
