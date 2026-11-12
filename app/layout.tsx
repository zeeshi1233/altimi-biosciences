import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Preloader } from "@/components/ui/Preloader";
import { VoiceAssistant } from "@/components/assistant/VoiceAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://altimibiosciences.com"),
  title: {
    default: "Altimi Biosciences | Medical Diagnostics & Hospital Supplies Distributor Pakistan",
    template: "%s | Altimi Biosciences",
  },
  description:
    "Altimi Biosciences is a premier Karachi-based distributor of advanced clinical chemistry analyzers (Randox RX Modena & Imola), remote ECG monitoring (Bittium), vaccines, medical devices, and hospital supplies across Pakistan.",
  keywords: [
    "Altimi Biosciences",
    "Medical Diagnostics Pakistan",
    "Clinical Chemistry Analyzer",
    "Randox RX Modena",
    "Randox RX Imola",
    "Bittium Faros 360",
    "Hospital Supplies Karachi",
    "Medical Devices Distributor Pakistan",
    "Greiner Safety Catheters",
    "Latex Gloves Karachi",
    "Nitrile Gloves Pakistan",
    "DRAP Registered Medical Supplies",
  ],
  authors: [{ name: "Altimi Biosciences" }],
  creator: "Altimi Biosciences",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://altimibiosciences.com",
    siteName: "Altimi Biosciences",
    title: "Altimi Biosciences | Medical Diagnostics & Healthcare Distribution Pakistan",
    description:
      "Premier distributor of automated clinical chemistry analyzers, wearable biosensors, and hospital consumables in Karachi, Pakistan.",
    images: [
      {
        url: "/images/about/lab-machines.jpg",
        width: 1200,
        height: 630,
        alt: "Altimi Biosciences Diagnostic Instrumentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@altimibio",
    creator: "@altimibio",
    title: "Altimi Biosciences | Medical Diagnostics & Healthcare Solutions",
    description:
      "High-throughput laboratory automation and hospital consumables distributor in Karachi, Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Altimi Biosciences",
  "url": "https://altimibiosciences.com",
  "logo": "https://altimibiosciences.com/logo.png",
  "image": "https://altimibiosciences.com/images/about/lab-machines.jpg",
  "description": "Authorized distributor of clinical chemistry analyzers, medical devices, vaccines, and hospital supplies in Pakistan.",
  "telephone": "+92 21 35344476",
  "email": "info@altimibiosciences.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/altimibio",
    "https://www.instagram.com/altimibiosciences/",
    "https://pk.linkedin.com/in/fazlullah-pechuho-83458798",
    "https://twitter.com/altimibio"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-ink selection:bg-primary/20 selection:text-primary">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <TopBar />
          <Navbar />
          <main className="min-h-[calc(100vh-80px)]">{children}</main>
          <Footer />
          {/* <VoiceAssistant /> */}
        </SmoothScroll>
      </body>
    </html>
  );
}

