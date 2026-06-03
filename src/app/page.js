import ContactSection from "@/components/ContactSection";
import Faqs from "@/components/Faqs";
import GallerySection from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Cta from "@/components/Cta";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata = {
  title: "Ocean Freight Forwarding & Logistics Services in Chennai",

  description:
    "Samayam Container Lines Pvt Ltd provides ocean freight forwarding, customs clearance, warehousing, transportation, marine insurance, and global logistics solutions from Chennai, India.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ocean Freight Forwarding & Logistics Services in Chennai",

    description:
      "Samayam Container Lines Pvt Ltd provides ocean freight forwarding, customs clearance, warehousing, transportation, marine insurance, and global logistics solutions from Chennai, India.",

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

    title: "Ocean Freight Forwarding & Logistics Services in Chennai",

    description:
      "Samayam Container Lines Pvt Ltd provides ocean freight forwarding, customs clearance, warehousing, transportation, marine insurance, and global logistics solutions from Chennai, India.",

    images: [`${siteUrl}/logo.jpeg`],
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Samayam Container Lines Pvt Ltd",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpeg`,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9840059829",
      contactType: "customer support",
      areaServed: "IN",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Old No.269/2, New No.126, 2nd Floor, Thambu Chetty Street, Mannady",
      addressLocality: "Chennai",
      postalCode: "600001",
      addressCountry: "India",
    },

    description:
      "Ocean freight forwarding and logistics company specializing in imports, exports, customs clearance, warehousing, transportation, and marine insurance services.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <GallerySection />
        <WhyChooseUs />
        <ContactSection />
        <Faqs />
        <Cta />
      </main>
    </>
  );
}