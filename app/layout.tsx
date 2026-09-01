import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: `${BUSINESS.name} | Premium Safety Nets & Invisible Grills in Bangalore`,
  description: "Shrishti Enterprises — Bangalore's #1 safety net company. Balcony nets, invisible grills, bird nets, children safety nets. Free inspection. Same day installation. Call +91 80880 47056.",
  keywords: ["safety nets bangalore", "invisible grills bangalore", "balcony safety nets", "bird nets bangalore", "shrishti enterprises"],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Shrishti Enterprises Bangalore" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "" }, // Add your Google Search Console verification code here
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lbSchema = generateLocalBusinessSchema();
  const wsSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18278629354"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18278629354');

            window.gtag_report_conversion = function() {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-18278629354/9YlQCI6ep8gcEOr_9otE'
                });
              }
            };

            document.addEventListener('click', function(event) {
              const target = event.target instanceof Element
                ? event.target.closest("a[href^='tel:']")
                : null;

              if (target) {
                window.gtag_report_conversion();
              }
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wsSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {/* Skip to content — keyboard accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        {/* Floating Action Buttons — Call + WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

          {/* Floating Call Button */}
          <a
            href={BUSINESS.phoneHref}
            aria-label="Call Shrishti Enterprises"
            className="group relative w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-2xl shadow-green-900/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
            <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {/* Tooltip */}
            <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Call Now
            </span>
          </a>

          {/* Floating WhatsApp Button */}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba58] text-white rounded-full shadow-2xl shadow-green-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {/* Tooltip */}
            <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              WhatsApp Us
            </span>
          </a>

        </div>
      </body>
    </html>
  );
}
