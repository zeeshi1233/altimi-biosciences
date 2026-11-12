export interface PartnerCollaborator {
  id: string;
  slug: string;
  name: string;
  country: "United Kingdom" | "Finland" | "Japan" | "China";
  flag: string;
  logo: string;
  description: string;
  products: string[];
}

export const partnerCollaborators: PartnerCollaborator[] = [
  {
    id: "randox",
    slug: "randox",
    name: "Randox Laboratories",
    country: "United Kingdom",
    flag: "🇬🇧",
    logo: "/images/partners/randox-removebg-preview.png",
    description:
      "A global leader in diagnostic solutions, providing reliable laboratory testing reagents, automated chemistry analyzers, and quality control products.",
    products: [
      "Automated clinical chemistry analyzers (RX series)",
      "Diagnostic & routine biochemistry reagents",
      "Specific proteins & direct HbA1c tests",
      "Third-party clinical quality control materials",
    ],
  },
  {
    id: "aidian",
    slug: "aidian",
    name: "Aidian",
    country: "Finland",
    flag: "🇫🇮",
    logo: "/images/partners/images-removebg-preview.png",
    description:
      "Specialist in rapid point-of-care diagnostics, delivering fast and accurate test results at the clinic, hospital or reference laboratory.",
    products: [
      "QuikRead go® point-of-care analyzer",
      "QuikRead go® easy CRP rapid quantitative test",
      "QuikRead go® HbA1c monitoring test kits",
      "Strep A & wide-range CRP diagnostic assays",
    ],
  },
  {
    id: "bittium",
    slug: "bittium",
    name: "Bittium Corporation",
    country: "Finland",
    flag: "🇫🇮",
    logo: "/images/partners/bittium.png",
    description:
      "Finnish medical technology company providing advanced biosignal monitoring, waterproof ECG telemetry, and clinical analysis software.",
    products: [
      "Bittium Faros™ 360 & Faros™ 180 ECG monitors",
      "Bittium HolterPlus™ remote cloud telemetry",
      "Bittium Cardiac Navigator™ analysis software",
      "Continuous outpatient arrhythmia monitoring",
    ],
  },
  {
    id: "a-and-d",
    slug: "a-and-d",
    name: "A&D Medical",
    country: "Japan",
    flag: "🇯🇵",
    logo: "/images/partners/and.png",
    description:
      "Trusted Japanese manufacturer of precision clinical measurement and ambulatory blood pressure monitoring devices used worldwide.",
    products: [
      "TM-2440 24-hour ambulatory blood pressure monitor",
      "TM-2441 advanced multi-sensor ABPM monitor",
      "Clinical oscillometric & auscultatory devices",
      "Precision healthcare diagnostic measuring equipment",
    ],
  },
  {
    id: "anji-hongde",
    slug: "anji-hongde",
    name: "Anji Hongde Medical Products",
    country: "China",
    flag: "🇨🇳",
    logo: "/images/partners/Anji Hongde.png",
    description:
      "Manufacturer of sterile clinical consumables and patient hygiene disposables supplied to hospital wards, ICUs, and laboratories.",
    products: [
      "70% Isopropyl alcohol antiseptic prep pads",
      "Multi-layer hospital dignity underpads",
      "Clinical skin preparation & hygiene materials",
      "Hospital-grade absorbent protective disposables",
    ],
  },
  {
    id: "yangzhong-jinxiang",
    slug: "yangzhong-jinxiang",
    name: "Yangzhong Jinxiang Emulsion Products",
    country: "China",
    flag: "🇨🇳",
    logo: "/images/partners/yangzhong.png",
    description:
      "Manufacturer of premium medical barrier protection, surgical latex gloves, and emulsion-based hospital healthcare supplies.",
    products: [
      "Powder-free sterile latex surgical gloves",
      "Gamma-sterilized anatomical surgeon gloves",
      "High-tensile tactile operating theatre barriers",
      "International medical standard compliant consumables",
    ],
  },
];

export const partnerStats = [
  { value: 6, suffix: "+", label: "International Partners", subtext: "World-class manufacturers" },
  { value: 4, suffix: "", label: "Countries Represented", subtext: "UK, Finland, Japan, China" },
  { value: 100, suffix: "%", label: "Authentic Products", subtext: "Direct manufacturer supply" },
  { value: 24, suffix: "/7", label: "After-Sales Support", subtext: "Factory-certified engineers" },
];

export const partnerValueProps = [
  {
    title: "Authentic Products",
    description:
      "Direct authorized partnerships with original manufacturers guarantee 100% genuine products with manufacturer batch validation.",
    icon: "ShieldCheck",
  },
  {
    title: "Quality Assurance",
    description:
      "All imported instruments and assays comply with ISO 13485, CE-IVD standards, and official DRAP regulatory registrations.",
    icon: "Award",
  },
  {
    title: "Reliable Supply",
    description:
      "Consistent supply chain availability backed by temperature-validated cold-chain warehousing for hospitals and reference labs.",
    icon: "Truck",
  },
  {
    title: "After-Sales Support",
    description:
      "Dedicated biomedical technical team providing warranty backup, preventative maintenance, user training, and 24/7 technical hotline.",
    icon: "Headphones",
  },
];

