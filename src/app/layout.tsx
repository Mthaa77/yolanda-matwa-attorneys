import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yolandamatwa.co.za"),
  title: {
    default: "Yolanda Matwa Attorneys | Conveyancing, Notary & Family Law — Menlyn Maine",
    template: "%s | Yolanda Matwa Attorneys",
  },
  description:
    "Boutique conveyancing, notarial and family-law practice in the heart of Menlyn Maine, Pretoria East. Property transfers, wills, antenuptial contracts, deceased estates and commercial contracts — with rare Competition Tribunal experience behind every matter.",
  keywords: [
    "conveyancing attorneys Menlyn Maine",
    "property transfer attorney Pretoria East",
    "notary public Pretoria",
    "antenuptial contract attorney",
    "deceased estate administration Pretoria",
    "wills and estate planning",
    "commercial contract drafting",
    "competition law attorney Pretoria",
    "Yolanda Matwa Attorneys",
    "Matwa Nongogo Incorporated",
  ],
  authors: [{ name: "Yolanda Matwa Attorneys" }],
  creator: "Yolanda Matwa Attorneys",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Yolanda Matwa Attorneys | Committed to Helping Our Clients Succeed",
    description:
      "Boutique legal counsel for property transfers, family contracts, and estates — based in Menlyn Maine, Pretoria East. Transparent pricing. Real credentials.",
    url: "https://yolandamatwa.co.za",
    siteName: "Yolanda Matwa Attorneys",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/og-share.png",
        width: 1152,
        height: 864,
        alt: "Yolanda Matwa Attorneys — Attorneys, Notaries & Conveyancers, Menlyn Maine Pretoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yolanda Matwa Attorneys | Conveyancing & Notary — Menlyn Maine",
    description:
      "Boutique conveyancing, notarial and family-law practice in Menlyn Maine, Pretoria East.",
    images: ["/images/og-share.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Yolanda Matwa Attorneys",
  alternateName: "Matwa Nongogo Incorporated",
  description:
    "Boutique conveyancing, notarial and family-law practice in Menlyn Maine, Pretoria East.",
  url: "https://yolandamatwa.co.za",
  telephone: "+27 12 992 5308",
  email: "info@yminc.co.za",
  image: "https://yolandamatwa.co.za/images/office-exterior.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pegasus Building 1, 210 Amarand Avenue, Menlyn Maine",
    addressLocality: "Pretoria",
    addressRegion: "Gauteng",
    postalCode: "0181",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -25.7844,
    longitude: 28.2786,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Pretoria",
  },
  founder: {
    "@type": "Person",
    name: "Yolanda Okharedia",
    jobTitle: "Attorney, Notary & Conveyancer",
    knowsAbout: [
      "Conveyancing",
      "Notarial Services",
      "Competition Law",
      "Estate Planning",
      "Commercial Contracts",
    ],
  },
  sameAs: ["https://www.facebook.com/p/Yolanda-Matwa-Attorneys-61560226510063/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}
