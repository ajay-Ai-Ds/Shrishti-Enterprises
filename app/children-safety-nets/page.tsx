import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Children Safety Nets in Bangalore | Kids Fall Protection",
  description: "Extra-strong children safety nets for staircases, balconies, windows, and play areas in Bangalore. Protect your child from falls. Call +91 80880 47056.",
  path: "/children-safety-nets",
  keywords: ["children safety nets bangalore", "kids safety net", "child fall protection bangalore", "staircase safety net"],
});

const faqs = [
  { question: "What mesh size is safe for children?", answer: "For children under 5 years, we recommend nets with 25–50mm mesh that is too small for a child to get their head or limbs stuck. Our children's nets are specifically designed with child safety standards." },
  { question: "Can children safety nets be installed on staircases?", answer: "Yes. Staircase safety nets are one of our most popular products for homes with young children. We install nets along the open side of staircases, across banisters, and at stair landings to prevent falls." },
  { question: "Are children safety nets strong enough to stop a fall?", answer: "Our children's safety nets are tested to withstand a dynamic load of 150–200 kg per sq metre — far exceeding the force of a child's fall. They are used in apartments, villas, and playgrounds across Bangalore." },
  { question: "What is the price of children safety nets?", answer: "Children's safety nets in Bangalore cost ₹12–₹20 per sq ft depending on net grade and installation area. Contact us for a free quote after site inspection." },
  { question: "Do children safety nets look ugly?", answer: "No. Our nets are available in transparent, white, and green variants that blend with your home's interior. Invisible grills are also an option for a more premium, invisible look." },
];

export default function ChildrenSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Children Safety Nets"
      slug="children-safety-nets"
      heroHeadline="Children Safety Nets in Bangalore — Give Your Child the Safest Home"
      heroSub="Extra-strong safety nets for staircases, balconies, windows, and play areas. Designed specifically for child safety. Free inspection across Bangalore."
      imagePath="/images/child.webp"
      imageAlt="Children safety net installed on balcony in Bangalore apartment"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Sports Nets", slug: "sports-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Children Safety Nets in Bangalore</h2>
            <p>Every parent's worst nightmare is their child falling from a balcony, staircase, or open window. Children are naturally curious, adventurous, and unaware of the risks of heights. A properly installed children's safety net is the single most effective way to prevent these accidents in your Bangalore home.</p>
            <p>Shrishti Enterprises specialises in children's safety nets for apartments, villas, and independent homes across Bangalore. Our nets are extra-strong, child-specific, and meet international safety standards.</p>
          </div>
          <div>
            <h2>Where Do We Install Children Safety Nets?</h2>
            <ul>
              <li><strong>Balconies:</strong> The most common installation. Nets cover all open areas of the balcony railing.</li>
              <li><strong>Staircases:</strong> Net along the open side of stairs and across banisters.</li>
              <li><strong>Windows:</strong> Secondary net inside window frames as a backup to windows.</li>
              <li><strong>Play areas:</strong> Nets around home play areas, swings, and slides.</li>
              <li><strong>Duct areas:</strong> Covering open duct spaces in apartments.</li>
            </ul>
          </div>
          <div>
            <h2>Our Children Safety Net Standards</h2>
            <p>All our children's nets comply with:</p>
            <ul>
              <li>Load capacity: 150–200 kg/m² dynamic load</li>
              <li>Mesh size: 25–50mm (no body part entrapment risk)</li>
              <li>UV-stabilised HDPE/nylon — no sharp edges or toxic coatings</li>
              <li>Non-slip fitting system — hooks and tensioners are child-resistant</li>
            </ul>
          </div>
          <div>
            <h2>Children Safety Net Price in Bangalore</h2>
            <ul>
              <li>Balcony children's net: ₹12–₹18/sq ft</li>
              <li>Staircase children's net: ₹15–₹22/sq ft (includes custom fitting)</li>
              <li>Window children's net: ₹12–₹16/sq ft</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
