import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Construction Safety Nets in Bangalore | HDPE Debris Nets",
  description: "HDPE construction safety nets in Bangalore. Fall arrest nets, debris nets, scaffold nets for building sites. Meets safety standards. Call +91 80880 47056.",
  path: "/construction-safety-nets",
  keywords: ["construction safety nets bangalore", "debris net", "fall arrest net bangalore", "scaffold net bangalore"],
});

const faqs = [
  { question: "What types of construction safety nets do you provide?", answer: "We provide debris nets, fall arrest nets, scaffold safety nets, scaffold sheeting, and perimeter safety nets for construction sites. All nets comply with IS:11057 safety standards." },
  { question: "What is the price of construction safety nets in Bangalore?", answer: "Construction safety net prices range from ₹15 to ₹35 per sq ft depending on net type, grade, and coverage area. We offer competitive rates for large construction projects." },
  { question: "Do your construction nets meet safety standards?", answer: "Yes. Our construction safety nets comply with IS:11057 and international EN-1263 fall protection standards. We can provide certificates of conformity on request." },
  { question: "Do you offer long-term rental for construction nets?", answer: "Yes. For large construction projects, we offer monthly rental options for construction safety nets. Call us on +91 80880 47056 to discuss your project requirements." },
  { question: "How fast can you install construction safety nets?", answer: "For standard residential construction sites, we can install nets within 24–48 hours. Large commercial projects may require 3–7 days planning and installation." },
];

export default function ConstructionSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Construction Safety Nets"
      slug="construction-safety-nets"
      heroHeadline="Construction Safety Nets in Bangalore — Protect Workers and Property"
      heroSub="HDPE fall arrest nets, debris nets, and scaffold nets for construction sites. Meets IS:11057 safety standards. Serving Bangalore builders and contractors."
      relatedServices={[
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Monkey Safety Nets", slug: "monkey-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Construction Safety Nets in Bangalore</h2>
            <p>Construction sites in Bangalore face strict safety regulations, and fall-related accidents remain one of the leading causes of construction fatalities. Shrishti Enterprises provides certified HDPE construction safety nets that protect both workers and pedestrians from falling debris, tools, and materials.</p>
            <p>We serve residential builders, commercial developers, and infrastructure contractors across Bangalore. Our nets are available for purchase or monthly rental for long-term projects.</p>
          </div>
          <div>
            <h2>Types of Construction Safety Nets</h2>
            <ul>
              <li><strong>Debris nets:</strong> Fine-mesh nets that catch falling debris, bricks, cement, and tools.</li>
              <li><strong>Fall arrest nets:</strong> Larger-mesh, high-tensile nets designed to catch a falling worker. Tested to EN-1263 standards.</li>
              <li><strong>Scaffold safety nets:</strong> Wrap around scaffolding to contain debris and provide wind protection.</li>
              <li><strong>Perimeter nets:</strong> Surround the entire building perimeter to prevent falls from edges.</li>
              <li><strong>Shed/shade nets:</strong> UV-blocking net sheeting for construction site sun protection.</li>
            </ul>
          </div>
          <div>
            <h2>Construction Safety Net Standards</h2>
            <p>Our construction nets comply with:</p>
            <ul>
              <li>IS:11057 — Indian Standard for industrial safety nets</li>
              <li>EN-1263 — European standard for fall protection nets</li>
              <li>OSHA equivalent construction fall protection guidelines</li>
            </ul>
          </div>
          <div>
            <h2>Construction Safety Net Price in Bangalore</h2>
            <ul>
              <li>Debris nets: ₹15–₹22/sq ft</li>
              <li>Fall arrest nets: ₹22–₹35/sq ft</li>
              <li>Scaffold nets (rental): ₹3–₹6/sq ft/month</li>
            </ul>
            <p>Volume discounts available for large projects. Contact us for a project quote.</p>
          </div>
        </div>
      }
    />
  );
}
