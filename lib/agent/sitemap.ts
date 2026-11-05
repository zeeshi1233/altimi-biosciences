export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  sectionIds?: string[];
}

export interface NavigationMenu {
  id: string;
  label: string;
  items: Array<{
    label: string;
    path: string;
    description: string;
  }>;
}

export const SITE_METADATA = {
  company: "Altimi Biosciences Private Limited",
  location: "Karachi Central Healthcare Complex, Sindh, Pakistan",
  phone: "+92 21 35344476",
  email: "info@altimibiosciences.com",
  workingHours: "Monday to Saturday: 10:00 AM – 5:00 PM PST",
  tagline: "Leading Distributor of Clinical Chemistry Analyzers, Medical Devices & Hospital Supplies in Pakistan",
};

export const SITE_ROUTES: RouteInfo[] = [
  {
    path: "/",
    title: "Home",
    description: "Main homepage featuring hero slider, company overview, core diagnostic expertise, featured products, global manufacturer partners, testimonials, and contact section.",
    sectionIds: ["hero", "about", "expertise", "products-showcase", "partners", "contact-section"],
  },
  {
    path: "/about/leadership",
    title: "Executive Leadership",
    description: "Detailed profiles of Altimi Biosciences executive management, healthcare directors, advisory board, and corporate governance.",
  },
  {
    path: "/about/distribution",
    title: "Nationwide Distribution",
    description: "Cold-chain infrastructure, Karachi Central Logistics, regional hubs across Punjab, Sindh, KPK, and Balochistan, tender bidding, and DRAP compliance.",
  },
  {
    path: "/products",
    title: "All Products Catalog",
    description: "Complete catalog of automated clinical chemistry analyzers, point-of-care diagnostics, and medical surgical consumables.",
  },
  {
    path: "/products/clinical-chemistry-analyzer/rx-modena",
    title: "Randox RX Modena",
    description: "High-throughput fully automated clinical chemistry analyzer capable of up to 1,200 tests/hour with direct HbA1c testing for large tertiary hospitals.",
  },
  {
    path: "/products/clinical-chemistry-analyzer/rx-imola",
    title: "Randox RX Imola",
    description: "Benchtop clinical chemistry analyzer running 400 photometric tests/hour and up to 560 tests/hour with ISE for medium-to-large medical laboratories.",
  },
  {
    path: "/products/clinical-chemistry-analyzer/point-of-care-testing",
    title: "Point of Care Testing (POCT)",
    description: "Rapid bedside diagnostics suite including QuikRead go, eKuore smart stethoscopes, and A&D ambulatory blood pressure monitors.",
  },
  {
    path: "/products/medical-consumables/ultimate-prep-pads",
    title: "Ultimate Prep Pads",
    description: "70% Isopropyl Alcohol antiseptic skin cleansing pads for hospital venipuncture and sterile preparation.",
  },
  {
    path: "/products/medical-consumables/disposable-underpads",
    title: "Disposable Underpads",
    description: "High-absorbency Blue Leaves Dignity Sheets (60x90cm) with non-woven topsheet and waterproof backing for hospitals and surgical ICU beds.",
  },
  {
    path: "/products/medical-consumables/latex-gloves",
    title: "Medical Latex Examination Gloves",
    description: "Powder-free micro-textured clinical latex gloves with AQL 1.5 standard compliance.",
  },
  {
    path: "/products/medical-consumables/nitrile-gloves",
    title: "Medical Nitrile Gloves",
    description: "Latex-free, puncture-resistant medical examination nitrile gloves for chemotherapy, pharmacy, and surgical labs.",
  },
  {
    path: "/brochures",
    title: "Brochures & Catalogs",
    description: "Downloadable product brochures, technical specification sheets, and interactive PDF flipbook previews.",
  },
  {
    path: "/media",
    title: "Media & Press",
    description: "Product videos, diagnostic machinery walkthroughs, press releases, and multimedia assets.",
  },
  {
    path: "/events",
    title: "Conferences & Events",
    description: "Healthcare exhibitions, medical conferences, and upcoming industry trade expos where Altimi Biosciences is participating.",
  },
  {
    path: "/contact",
    title: "Contact Us & Karachi Office Map",
    description: "Get in touch with sales, support, or logistics in Karachi. Features interactive Google Map and inquiry form.",
    sectionIds: ["contact-section"],
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions",
    description: "Answers about DRAP registration, cold-chain transport, maintenance warranties, and delivery across Pakistan.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "Information regarding data protection, customer inquiries, and regulatory compliance.",
  },
  {
    path: "/terms-conditions",
    title: "Terms & Conditions",
    description: "Contractual terms for medical device distribution, tender warranties, and quotations.",
  },
];

export const NAVIGATION_MENUS: NavigationMenu[] = [
  {
    id: "about",
    label: "About Us",
    items: [
      {
        label: "Executive Leadership",
        path: "/about/leadership",
        description: "Meet the executive team steering diagnostic excellence.",
      },
      {
        label: "Nationwide Distribution",
        path: "/about/distribution",
        description: "Cold-chain infrastructure & logistics hubs across Pakistan.",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    items: [
      {
        label: "Randox RX Modena",
        path: "/products/clinical-chemistry-analyzer/rx-modena",
        description: "Up to 1,200 tests/hr & direct HbA1c testing",
      },
      {
        label: "Randox RX Imola",
        path: "/products/clinical-chemistry-analyzer/rx-imola",
        description: "400 photometric & 560 tests/hr with ISE",
      },
      {
        label: "Point of Care Testing",
        path: "/products/clinical-chemistry-analyzer/point-of-care-testing",
        description: "Rapid bedside critical diagnostics suite",
      },
      {
        label: "Ultimate Prep Pads",
        path: "/products/medical-consumables/ultimate-prep-pads",
        description: "70% IPA antiseptic sterile skin wipes",
      },
      {
        label: "Disposable Underpads",
        path: "/products/medical-consumables/disposable-underpads",
        description: "High-absorbency dignity sheets (60x90cm)",
      },
      {
        label: "Medical Latex Gloves",
        path: "/products/medical-consumables/latex-gloves",
        description: "AQL 1.5 micro-textured examination gloves",
      },
      {
        label: "Medical Nitrile Gloves",
        path: "/products/medical-consumables/nitrile-gloves",
        description: "100% Latex-free chemical resistant gloves",
      },
      {
        label: "View All Products",
        path: "/products",
        description: "Browse entire diagnostic and consumables catalog",
      },
    ],
  },
];

