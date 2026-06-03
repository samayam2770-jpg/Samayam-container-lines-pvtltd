import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Samayam Container Lines Pvt Ltd | Ocean Freight Forwarder in Chennai",
    template: "%s | Samayam Container Lines Pvt Ltd",
  },

  description:
    "Samayam Container Lines Pvt Ltd is a Chennai-based global logistics and ocean freight forwarding company specializing in imports, exports, customs clearance, warehousing, transportation, marine insurance, and supply chain solutions.",

  keywords: [
    "Ocean Freight Forwarder Chennai",
    "Logistics Company Chennai",
    "Customs Clearance Chennai",
    "Warehousing Services",
    "Import Export Logistics",
    "Freight Forwarding India",
    "Container Shipping Chennai",
    "Marine Insurance",
    "Road Transportation Logistics",
    "Global Logistics Solutions",
  ],

  authors: [
    {
      name: "Samayam Container Lines Pvt Ltd",
    },
  ],

  creator: "Samayam Container Lines Pvt Ltd",

  publisher: "Samayam Container Lines Pvt Ltd",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Samayam Container Lines Pvt Ltd | Ocean Freight Forwarder in Chennai",

    description:
      "Global logistics and freight forwarding company providing ocean freight, customs clearance, warehousing, marine insurance, transportation.",

    url: siteUrl,

    siteName: "Samayam Container Lines Pvt Ltd",

    images: [
      {
        url: `${siteUrl}/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Samayam Container Lines Pvt Ltd",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Samayam Container Lines Pvt Ltd | Ocean Freight Forwarder in Chennai",

    description:
      "Chennai-based logistics and freight forwarding company specializing in global ocean freight solutions.",

    images: [`${siteUrl}/logo.jpeg`],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Samayam Container Lines Pvt Ltd",
              url: siteUrl,
              logo: `${siteUrl}/logo.jpeg`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9840059829",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Old No:269/2, New No:126, 2nd Floor, Thambu Chetty Street",
                addressLocality: "Chennai",
                postalCode: "600001",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}