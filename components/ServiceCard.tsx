import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  imagePath?: string;
  imageAlt?: string;
  featured?: boolean;
}

export default function ServiceCard({ title, description, slug, imagePath, imageAlt, featured }: ServiceCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className={`group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${featured ? "ring-2 ring-green-500" : ""}`}
    >
      {/* ── Image ── */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-green-300/60 m-3 rounded-xl" role="img" aria-label={`Placeholder for ${title} image`}>
            <svg className="w-10 h-10 text-green-400/50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3.75 3h16.5M4.5 3v18M19.5 3v18" />
            </svg>
            <p className="text-green-600/60 text-xs font-medium text-center px-2">{title}</p>
            <p className="text-green-500/40 text-[10px] mt-0.5">/images/{slug}.jpg</p>
          </div>
        )}
        {featured && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow z-10">Popular</span>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-semibold">
          Learn more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

