import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Installation Gallery & Project Portfolio | Shrishti Enterprises",
  description:
    "Explore high-resolution photographs of certified balcony safety nets, SS316 invisible grills, bird nets, and cloth hangers installed across Bangalore residences.",
  path: "/gallery",
  keywords: [
    "safety net installation gallery bangalore",
    "invisible grills photo portfolio",
    "balcony netting project showcase",
    "shrishti enterprises installations",
  ],
});

const GALLERY_SLOTS = [
  { id: 1, label: "Balcony Fall Arrest Netting", path: "/images/balcony.webp", alt: "Balcony fall arrest safety net installation by Shrishti Enterprises" },
  { id: 2, label: "High-Rise Balcony Mesh Fitment", path: "/images/balcony1.webp", alt: "High-rise apartment balcony netting fitment in Bangalore" },
  { id: 3, label: "Tensioned Balcony Screen", path: "/images/balcony2.webp", alt: "Tensioned copolymer balcony protection screen on apartment facade" },
  { id: 4, label: "Apartment Balcony Barrier", path: "/images/balcony3.webp", alt: "Apartment balcony child safety barrier installation" },
  { id: 5, label: "Terrace Balcony Netting", path: "/images/balcony4.webp", alt: "Terrace balcony safety netting for multi-storey residential complex" },
  { id: 6, label: "Architectural Balcony Grills", path: "/images/balconygrill.webp", alt: "Architectural stainless steel balcony safety grill system" },
  { id: 7, label: "SS316 Balcony Cable Setup", path: "/images/balconygrill1.webp", alt: "SS316 marine cable installation on residential balcony" },
  { id: 8, label: "Anti-Bird Balcony Mesh", path: "/images/birdsafety.webp", alt: "Anti-bird mesh installation preventing bird intrusion on balcony" },
  { id: 9, label: "Child Protection Netting", path: "/images/child.webp", alt: "Child protection safety net on staircase and balcony railing" },
  { id: 10, label: "Child-Safe Window Barrier", path: "/images/childrensafetynet.webp", alt: "Child-safe window and gallery protective safety netting" },
  { id: 11, label: "Ceiling Cloth Dryer Rack", path: "/images/clothhanger.jpg", alt: "Ceiling-mounted stainless steel pulley cloth hanger system" },
  { id: 12, label: "Building Duct Shaft Netting", path: "/images/ductarea1.webp", alt: "Building utility duct and shaft safety net installation" },
  { id: 13, label: "Plumbing Duct Cover Mesh", path: "/images/ductarea2.webp", alt: "Plumbing duct area safety mesh covering open shaft" },
  { id: 14, label: "SS316 Invisible Grills", path: "/images/invisiblegrill.webp", alt: "Sleek SS316 invisible grill system on panoramic apartment window" },
  { id: 15, label: "Heavy-Gauge Monkey Barrier", path: "/images/monkey.webp", alt: "Heavy-gauge monkey deterrent barrier netting on terrace" },
  { id: 16, label: "Pigeon Exclusion Screen", path: "/images/pigeonnet.webp", alt: "Durable pigeon exclusion netting on apartment balcony" },
];

export default function GalleryPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Gallery", url: `${BUSINESS.url}/gallery` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "Project Gallery", href: "/gallery" }]} />

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-xs">
            Installation Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our Workmanship &amp; Completed Projects
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Browse real installations completed by our master technicians across premier Bangalore communities and high-rises.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {GALLERY_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square w-full bg-gray-100">
                  <Image
                    src={slot.path}
                    alt={slot.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-gray-100 px-4 py-3 bg-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-0.5">Verified Installation</p>
                  <p className="text-sm font-semibold text-gray-800">{slot.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Impressed by Our Work Quality?"
        subtitle="Schedule a free on-site assessment and get an instant, itemized estimate for your home."
      />
    </>
  );
}
