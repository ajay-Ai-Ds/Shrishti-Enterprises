const fs = require('fs');
const path = require('path');

// 1. Balcony Safety Nets
fs.writeFileSync('app/balcony-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
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
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 not-prose shadow-xs">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-green-900 font-bold border-b border-green-200">
                    <th className="pb-2">Mesh Grade</th>
                    <th className="pb-2">Estimated Rate (per sq ft)</th>
                    <th className="pb-2">Primary Application</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-2.5 font-medium">Standard High-Tensile Nylon</td><td>₹12 – ₹15</td><td>Standard apartment balconies &amp; windows</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5 font-medium">UV-Fortified Premium Nylon</td><td>₹15 – ₹18</td><td>High-rise balconies (10th floor &amp; above)</td></tr>
                  <tr><td className="py-2.5 font-medium">Heavy-Gauge Knotted HDPE</td><td>₹17 – ₹24</td><td>Expansive terraces, galleries &amp; villas</td></tr>
                </tbody>
              </table>
              <p className="mt-3 text-xs text-gray-500">*All rates include heavy-duty SS304 mounting hardware, perimeter rope binding, and certified technician installation.</p>
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
`);

// 2. Invisible Grills
fs.writeFileSync('app/invisible-grills/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "SS316 Invisible Grills Bangalore | Transparent Balcony & Window Security",
  description: "Modern marine-grade SS316 invisible grills for balconies and windows in Bangalore. Unobstructed panoramic views with 350+ kg tensile security. Free site inspection.",
  path: "/invisible-grills",
  keywords: ["invisible grills bangalore", "ss316 stainless steel grills", "transparent window safety grill", "invisible balcony grill price"],
});

const faqs = [
  { question: "What materials make up Shrishti Enterprises invisible grills?", answer: "Our invisible grills are constructed from high-tensile SS316 marine-grade stainless steel cables (2.5mm to 3.5mm diameter) coated with a transparent DuPont nylon membrane to eliminate oxidation and protect bare hands." },
  { question: "What is the typical price range for invisible grill installation in Bangalore?", answer: "Invisible grill fitment in Bangalore ranges from ₹150 to ₹250 per square foot depending on cable thickness, horizontal vs. vertical orientation, and masonry track structural setup. Contact us for an exact free on-site quote." },
  { question: "How does emergency evacuation work with invisible grills?", answer: "In case of fire or building emergency, invisible grills can be severed within seconds using standard heavy-duty wire cutters, providing far superior emergency egress compared to immovable iron bars." },
  { question: "Are invisible grills permitted by Bangalore apartment associations (RWAs)?", answer: "Yes! Because invisible grills are frameless and do not alter the uniform exterior facade of modern high-rise towers, almost all major Bangalore builder societies and RWAs approve their installation." },
];

export default function InvisibleGrillsPage() {
  return (
    <ServicePageTemplate
      title="Invisible Grills"
      slug="invisible-grills"
      heroHeadline="Sleek Marine-Grade SS316 Invisible Grills in Bangalore"
      heroSub="Preserve your unobstructed skyline view while securing your balcony and windows with 350+ kg tensile stainless steel cable systems."
      imagePath="/images/invisiblegrill.webp"
      imageAlt="Architectural SS316 invisible grill installation on Bangalore apartment window"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Children Safety Nets", slug: "children-safety-nets" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Architectural High-Tensile Invisible Grills for Bangalore Homes</h2>
            <p>Modern residential architecture in Bangalore features floor-to-ceiling windows and sweeping balcony vistas. Conventional wrought iron and mild steel grilles feel restrictive, obstruct natural light, and rust over time. Shrishti Enterprises invisible grills deliver an ultra-sleek, minimalist security solution that preserves 100% of your view.</p>
            <p>Constructed from marine-grade 316 stainless steel tensile cables anchored into rigid aluminum structural tracks, our invisible grills provide certified child safety and pet protection without the claustrophobic feeling of traditional cage bars.</p>
          </div>

          <div>
            <h2>Key Advantages of Invisible Grills</h2>
            <ul>
              <li><strong>Unmatched Optical Clarity:</strong> From 5 feet away, the ultra-slim 2.5mm cables become nearly imperceptible against the sky.</li>
              <li><strong>Heavy Load Resistance:</strong> Each strand is rated to withstand over 350 kg tensile force, exceeding child safety standards.</li>
              <li><strong>Zero Rust &amp; Zero Maintenance:</strong> SS316 stainless steel is impervious to Bangalore's monsoons and requires no periodic repainting.</li>
              <li><strong>RWA &amp; Society Compliant:</strong> Accepted by leading gated communities (Prestige, Sobha, Brigade, Godrej, Mantri) across Bangalore.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
`);

// 3. Bird Nets
fs.writeFileSync('app/bird-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Anti-Bird Netting Solutions Bangalore | Humane Bird Barrier Systems",
  description: "Keep balconies, AC ledges, and building shafts completely free of nesting birds with durable anti-bird nets by Shrishti Enterprises Bangalore. Free quote.",
  path: "/bird-nets",
  keywords: ["bird nets bangalore", "anti bird netting", "balcony bird protection net", "pigeon deterrence bangalore"],
});

const faqs = [
  { question: "How does bird netting keep pigeons and small birds away?", answer: "Our bird nets create an unobtrusive physical barrier that eliminates perching and nesting opportunities on balconies and window sills without trapping or injuring birds." },
  { question: "What mesh aperture is recommended for Bangalore apartments?", answer: "We recommend 19mm to 25mm aperture mesh to deter smaller birds like sparrows and mynas, and 40mm to 50mm mesh for pigeon exclusion." },
  { question: "What is the cost of anti-bird net installation in Bangalore?", answer: "Anti-bird netting generally ranges between ₹8 and ₹15 per square foot depending on area size and installation accessibility." },
];

export default function BirdNetsPage() {
  return (
    <ServicePageTemplate
      title="Bird Nets"
      slug="bird-nets"
      heroHeadline="Effective Anti-Bird &amp; Pigeon Exclusion Netting in Bangalore"
      heroSub="Humane, durable polymer mesh barriers that keep your balcony, AC ledges, and open utility areas spotless and bird-free."
      imagePath="/images/antibirdnet.jpg"
      imageAlt="Anti-bird mesh installation on residential balcony in Bangalore"
      relatedServices={[
        { title: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Humane Bird Control Netting for Bangalore Apartments &amp; Offices</h2>
            <p>Urban bird nesting, particularly pigeons, poses severe health hazards, foul odors, and property staining across Bangalore's apartment balconies and office shafts. Shrishti Enterprises provides tailor-fitted anti-bird netting solutions that protect your living spaces humanely and permanently.</p>
          </div>
          <div>
            <h2>Why Choose Shrishti Anti-Bird Nets</h2>
            <ul>
              <li><strong>UV-Resistant Polyethylene:</strong> Will not rot, become brittle, or fade under direct sunlight.</li>
              <li><strong>Humane Exclusion:</strong> Safely redirects birds without causing entanglement.</li>
              <li><strong>Clean Installation:</strong> Fitted tightly with corrosion-proof SS hooks along the entire perimeter.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
`);

// 4. Pigeon Safety Nets
fs.writeFileSync('app/pigeon-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Pigeon Safety Nets Bangalore | Heavy-Duty Balcony Pigeon Protection",
  description: "Eradicate pigeon mess and nesting on balconies and AC ledges with heavy-duty pigeon safety nets by Shrishti Enterprises Bangalore. Same-day installation.",
  path: "/pigeon-safety-nets",
  keywords: ["pigeon safety nets bangalore", "balcony pigeon mesh", "pigeon proofing bangalore", "anti pigeon net price"],
});

const faqs = [
  { question: "What makes pigeon nets different from standard bird nets?", answer: "Pigeon safety nets feature heavy-gauge knotted polymers with 40mm to 50mm square aperture specifically designed to resist aggressive pigeon roosting while maximizing air circulation." },
  { question: "How much does pigeon net installation cost in Bangalore?", answer: "Pigeon netting ranges from ₹10 to ₹18 per square foot, inclusive of all anchoring hardware and professional fitment." },
];

export default function PigeonSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Pigeon Safety Nets"
      slug="pigeon-safety-nets"
      heroHeadline="Heavy-Duty Balcony Pigeon Nets in Bangalore"
      heroSub="Permanently block pigeon roosting, droppings, and nesting on balconies, windows, and utility ducts."
      imagePath="/images/pigeon-safety-nets.webp"
      imageAlt="Pigeon safety net installation on residential building in Bangalore"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Permanent Pigeon Exclusion for Bangalore Residences</h2>
            <p>Pigeon droppings carry harmful bacteria and respiratory allergens like histoplasmosis. Shrishti Enterprises installs reinforced pigeon safety nets that seal off potential roosting ledges, leaving your balconies sanitary, clean, and pleasant to use.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 5. Children Safety Nets
fs.writeFileSync('app/children-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Children Safety Nets Bangalore | Child-Safe Staircase & Balcony Mesh",
  description: "Reinforced child fall-arrest safety nets for staircases, balconies, and window galleries in Bangalore. Certified load testing by Shrishti Enterprises.",
  path: "/children-safety-nets",
  keywords: ["children safety nets bangalore", "child proof balcony netting", "kids staircase safety net", "child fall protection"],
});

const faqs = [
  { question: "How safe are child protection nets on open staircases?", answer: "Our children safety nets are anchored with heavy-duty tension bolts and support 250+ kg force, completely eliminating the danger of toddlers slipping through open balusters." },
  { question: "What is the cost of child safety netting in Bangalore?", answer: "Child safety netting typically costs ₹12 to ₹18 per square foot based on installation layout and railing design." },
];

export default function ChildrenSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Children Safety Nets"
      slug="children-safety-nets"
      heroHeadline="Reinforced Children Safety Netting for Bangalore Homes"
      heroSub="Dedicated child fall-prevention mesh for balconies, stairwells, and mezzanine galleries. Certified 250+ kg load rating."
      imagePath="/images/child.webp"
      imageAlt="Child safety net installation on staircase and balcony in Bangalore"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Monkey Safety Nets", slug: "monkey-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Uncompromising Child Fall Protection for Bangalore Families</h2>
            <p>Young children are naturally energetic and curious. Shrishti Enterprises child safety nets provide peace of mind by securing balcony railings, open staircases, and window galleries with high-tensile, splinter-free polymer netting.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 6. Monkey Safety Nets
fs.writeFileSync('app/monkey-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Monkey Safety Nets Bangalore | Heavy-Gauge Barrier Netting",
  description: "Protect your terrace, open garden, and balcony from monkey troop intrusions with thick-gauge monkey nets by Shrishti Enterprises Bangalore.",
  path: "/monkey-safety-nets",
  keywords: ["monkey safety nets bangalore", "monkey deterrent netting", "terrace monkey proofing", "monkey net cost bangalore"],
});

const faqs = [
  { question: "Can monkeys chew or tear through your monkey safety nets?", answer: "No. Our monkey barrier nets utilize ultra-thick braided HDPE copolymer with high bite resistance and reinforced stainless steel tension cables." },
  { question: "What is the price of monkey netting in Bangalore?", answer: "Heavy-gauge monkey barrier nets cost between ₹18 and ₹30 per sq ft depending on framing and height." },
];

export default function MonkeySafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Monkey Safety Nets"
      slug="monkey-safety-nets"
      heroHeadline="Heavy-Gauge Monkey Deterrent Netting in Bangalore"
      heroSub="Robust, tear-resistant barrier netting designed to safeguard balconies, open terraces, and rooftop areas from aggressive monkeys."
      imagePath="/images/monkey.webp"
      imageAlt="Heavy-gauge monkey deterrent safety netting on Bangalore terrace"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Heavy-Duty Monkey Barrier Systems in Bangalore</h2>
            <p>Several Bangalore localities near lakes and wooded areas face regular monkey intrusions. Shrishti Enterprises monkey safety nets offer heavy-duty, chew-resistant barriers that protect property and prevent dangerous encounters.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 7. Cricket Safety Nets
fs.writeFileSync('app/cricket-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Cricket Practice Nets Bangalore | Terrace & Ground Net Enclosures",
  description: "Custom cricket batting net enclosures for terraces, residential societies, and sports academies in Bangalore by Shrishti Enterprises.",
  path: "/cricket-safety-nets",
  keywords: ["cricket safety nets bangalore", "terrace cricket practice net", "box cricket cage installation", "cricket net price bangalore"],
});

const faqs = [
  { question: "How much does cricket net installation cost in Bangalore?", answer: "Cricket practice net setups cost between ₹22 and ₹45 per sq ft depending on frame material (GI pipe or MS frame) and netting grade." },
];

export default function CricketSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Cricket Safety Nets"
      slug="cricket-safety-nets"
      heroHeadline="Professional Cricket Practice Nets in Bangalore"
      heroSub="Custom-fabricated batting enclosures and ball-stop nets for rooftops, backyards, residential societies, and sports clubs."
      imagePath="/images/cricket.jpeg"
      imageAlt="Cricket practice net enclosure installation on Bangalore terrace"
      relatedServices={[
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Custom Cricket Practice Enclosures in Bangalore</h2>
            <p>Whether you need a terrace practice net for aspiring young cricketers or a full-scale society box cricket cage, Shrishti Enterprises provides impact-absorbing, weather-resistant cricket netting systems.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 8. Duct Area Safety Nets
fs.writeFileSync('app/duct-area-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Duct Area Safety Nets Bangalore | Apartment Shaft & Utility Netting",
  description: "Specialized building shaft and duct safety nets in Bangalore. Prevent debris build-up, bird nesting, and accidental falls with Shrishti Enterprises.",
  path: "/duct-area-safety-nets",
  keywords: ["duct area safety nets bangalore", "building shaft net", "plumbing duct safety mesh", "apartment duct net price"],
});

const faqs = [
  { question: "Why are duct area safety nets vital for apartment buildings?", answer: "Building duct shafts easily accumulate waste, debris, and roosting pigeons. Installing heavy-duty duct nets maintains clean shafts and prevents maintenance hazards." },
];

export default function DuctAreaSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Duct Area Safety Nets"
      slug="duct-area-safety-nets"
      heroHeadline="Building Duct &amp; Shaft Safety Nets in Bangalore"
      heroSub="Specialized high-tensile safety netting covering building ventilation shafts, plumbing voids, and utility ducts."
      imagePath="/images/ductareanets.webp"
      imageAlt="Building duct area safety net installation in Bangalore apartment"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Protect Building Shafts &amp; Plumbing Ducts in Bangalore</h2>
            <p>Shrishti Enterprises installs reinforced duct area nets that withstand heavy outdoor exposure while maintaining ventilation and accessibility for building maintenance staff.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 9. Sports Nets
fs.writeFileSync('app/sports-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Sports Netting Solutions Bangalore | Turf, Football & Badminton Nets",
  description: "Heavy-duty perimeter and goal sports nets for schools, sports complexes, and residential turfs across Bangalore by Shrishti Enterprises.",
  path: "/sports-nets",
  keywords: ["sports nets bangalore", "football turf netting", "badminton court net", "box cricket boundary net"],
});

const faqs = [
  { question: "What sports netting systems does Shrishti Enterprises install?", answer: "We install boundary and ceiling nets for football turfs, cricket practice cages, badminton courts, tennis courts, and school sports grounds." },
];

export default function SportsNetsPage() {
  return (
    <ServicePageTemplate
      title="Sports Nets"
      slug="sports-nets"
      heroHeadline="Commercial &amp; Residential Sports Netting in Bangalore"
      heroSub="Durable boundary netting, turf surrounds, and court dividers engineered for impact absorption and weather endurance."
      imagePath="/images/sports.jpg"
      imageAlt="Sports boundary net installation on Bangalore turf"
      relatedServices={[
        { title: "Cricket Safety Nets", slug: "cricket-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Monkey Safety Nets", slug: "monkey-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Professional Sports Netting Enclosures in Bangalore</h2>
            <p>From rooftop sports turfs to school playgrounds, Shrishti Enterprises delivers durable, UV-treated sports netting that withstands powerful ball impacts season after season.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 10. Cloth Hangers
fs.writeFileSync('app/cloth-hangers/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Ceiling Cloth Drying Hangers Bangalore | Space-Saving Pulley Systems",
  description: "Heavy-gauge stainless steel ceiling cloth drying hangers with smooth pulley mechanisms in Bangalore. Free installation & warranty by Shrishti Enterprises.",
  path: "/cloth-hangers",
  keywords: ["cloth hangers bangalore", "ceiling cloth drying hanger", "pulley cloth hanger bangalore", "balcony clothes dryer"],
});

const faqs = [
  { question: "How much weight can ceiling cloth hangers support?", answer: "Each stainless steel pipe supports up to 8–10 kg of wet laundry, handling heavy bedsheets, towels, and daily clothes effortlessly." },
  { question: "What is the price of ceiling cloth hanger installation in Bangalore?", answer: "Ceiling cloth hanger systems start from ₹850 to ₹2,500 depending on pipe count (4, 6, or 8 pipes) and stainless steel grade." },
];

export default function ClothHangersPage() {
  return (
    <ServicePageTemplate
      title="Cloth Hangers"
      slug="cloth-hangers"
      heroHeadline="Ceiling-Mounted Cloth Drying Hanger Systems in Bangalore"
      heroSub="Maximize your balcony floor space with smooth dual-pulley stainless steel drying racks. Fast 1-hour installation."
      imagePath="/images/clothhanger.jpg"
      imageAlt="Ceiling cloth drying hanger system installed in Bangalore balcony"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Space-Saving Ceiling Cloth Dryers for Bangalore Apartments</h2>
            <p>Shrishti Enterprises ceiling cloth hangers provide an intelligent solution to drying laundry without cluttering small apartment balconies or utility spaces.</p>
          </div>
        </div>
      }
    />
  );
}
`);

// 11. Construction Safety Nets
fs.writeFileSync('app/construction-safety-nets/page.tsx', `import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Construction Safety Nets Bangalore | IS-Standard Fall Arrest & Debris Nets",
  description: "Certified construction safety netting, scaffold debris containment, and personnel fall-arrest nets for builders and contractors across Bangalore.",
  path: "/construction-safety-nets",
  keywords: ["construction safety nets bangalore", "scaffolding debris net", "building site fall net", "safety netting contractors bangalore"],
});

const faqs = [
  { question: "Do Shrishti Enterprises construction nets meet Indian safety standards?", answer: "Yes, our construction safety nets comply with IS 5175 and international fall-arrest safety regulations for construction sites." },
];

export default function ConstructionSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Construction Safety Nets"
      slug="construction-safety-nets"
      heroHeadline="Industrial Construction &amp; Debris Catchment Nets in Bangalore"
      heroSub="High-strength personnel fall-arrest netting and scaffold containment mesh for multi-storey building projects."
      imagePath="/images/team1.webp"
      imageAlt="Construction safety net installation on building site in Bangalore"
      relatedServices={[
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Site Safety &amp; Fall Prevention Netting in Bangalore</h2>
            <p>Ensure regulatory compliance and protect on-site workers and pedestrians with heavy-duty construction safety nets from Shrishti Enterprises.</p>
          </div>
        </div>
      }
    />
  );
}
`);

console.log('All 11 service pages rewritten with 100% unique copy.');
