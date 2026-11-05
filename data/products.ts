import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "rx-modena",
    slug: "rx-modena",
    name: "Randox RX Modena",
    category: "clinical-chemistry-analyzer",
    categoryName: "Clinical Chemistry Analyzer",
    brand: "Randox Laboratories",
    modelCode: "RX-MDN-1200",
    badge: "High Throughput Flagship",
    subtitle: "High-capacity automated clinical chemistry analyzer capable of up to 1,200 tests per hour",
    shortDescription: "Capable of performing up to 1,200 tests per hour with direct HbA1c testing and comprehensive consolidated menu.",
    fullDescription: "The Randox RX Modena is a high-throughput, fully automated clinical chemistry analyzer designed for large-volume hospital and reference laboratories. Consolidating routine chemistries, specific proteins, lipids, therapeutics, and direct HbA1c testing onto a single intuitive workstation, the RX Modena maximizes laboratory workflow efficiency while minimizing operational turnaround time.",
    image: "/images/products/rx-modena.png",
    features: [
      "Capable of performing up to 1,200 tests per hour (800 photometric, 400 ISE)",
      "Dedicated direct HbA1c testing eliminates manual pre-treatment",
      "Consolidates all assay requirements onto one intuitive platform",
      "Features icon-based, interactive touch-screen technology",
      "Adds a modern, user-friendly touch to your laboratory workflow",
      "Universal sample carousel with continuous loading and priority STAT capability",
      "Cooled reagent carousel maintaining 2°C–8°C temperature stability",
      "Low water consumption of only 20 liters per hour at maximum throughput"
    ],
    specifications: [
      { label: "Throughput", value: "Up to 1,200 tests/hour with ISE" },
      { label: "Test Principles", value: "Photometry, Turbidimetry, Direct Potentiometry (ISE)" },
      { label: "Sample Types", value: "Serum, Plasma, Urine, CSF, Whole Blood (HbA1c)" },
      { label: "Sample Loading", value: "150 samples continuous loading with STAT capability" },
      { label: "Reagent Positions", value: "Up to 100 cooled positions" },
      { label: "Reaction Volume", value: "Minimum 90 µL" },
      { label: "Photometer", value: "Grating system, 12 wavelengths (340 - 800 nm)" },
      { label: "Water Consumption", value: "Approx. 20 L/hour" },
      { label: "Dimensions", value: "1920 (W) x 850 (D) x 1280 (H) mm" },
      { label: "Weight", value: "Approx. 450 kg" }
    ],
    certifications: ["ISO 13485:2016", "CE IVD Mark", "FDA 510(k) Cleared", "DRAP Pakistan Approved"],
    brochureUrl: "/brochures/randox-rx-modena-brochure.pdf",
    featured: true
  },
  {
    id: "rx-imola",
    slug: "rx-imola",
    name: "Randox RX Imola",
    category: "clinical-chemistry-analyzer",
    categoryName: "Clinical Chemistry Analyzer",
    brand: "Randox Laboratories",
    modelCode: "RX-IML-560",
    badge: "Laboratory Workhorse",
    subtitle: "Rapid, versatile benchtop clinical chemistry analyzer with 560 tests per hour capacity",
    shortDescription: "Performs 400 photometric tests and 560 tests per hour including ISE. Covers routine chemistries and specific proteins.",
    fullDescription: "The Randox RX Imola is a compact yet exceptionally robust benchtop clinical chemistry analyzer, ideal for medium to high throughput laboratories. Delivering 400 photometric tests per hour and 560 tests per hour including ISE, the RX Imola provides unrivaled reliability, rapid turnaround times, and an extensive test menu spanning routine chemistries, specific proteins, therapeutic drugs, drugs of abuse, and veterinary assays.",
    image: "/images/products/rx-imola.png",
    features: [
      "Performs 400 photometric tests and 560 tests per hour including ISE",
      "Ideal for medium to high throughput laboratories",
      "Excels in performance and functionality for rapid, comprehensive testing",
      "Covers routine chemistries, specific proteins, lipids, and diabetes",
      "Supports testing for therapeutic drugs and drugs of abuse",
      "Includes capabilities for antioxidants and veterinary testing",
      "Liquid-level sensing, clot detection, and crash protection",
      "Comprehensive onboard QC software with multi-rule Levey-Jennings plots"
    ],
    specifications: [
      { label: "Throughput", value: "400 photometric tests/hour (560 with ISE)" },
      { label: "Sample Positions", value: "72 positions including 20 cooled positions for calibrators/controls" },
      { label: "Reagent Carousel", value: "60 refrigerated positions (2°C - 8°C)" },
      { label: "Optical System", value: "12 wavelengths (340 - 800 nm)" },
      { label: "Cuvettes", value: "Reusable semi-permanent Pyrex cuvettes with onboard wash" },
      { label: "Minimum Reaction Volume", value: "100 µL" },
      { label: "Water Consumption", value: "Maximum 18 L/hour" },
      { label: "Dimensions", value: "970 (W) x 690 (D) x 580 (H) mm" },
      { label: "Weight", value: "150 kg" }
    ],
    certifications: ["ISO 13485:2016", "CE IVD Certified", "DRAP Pakistan Approved"],
    brochureUrl: "/brochures/randox-rx-imola-brochure.pdf",
    featured: true
  },
  {
    id: "point-of-care-testing",
    slug: "point-of-care-testing",
    name: "Point of Care Testing (POCT) Suite",
    category: "clinical-chemistry-analyzer",
    categoryName: "Clinical Chemistry Analyzer",
    brand: "Bittium & Randox Diagnostics",
    modelCode: "ALTIMI-POCT-SYS",
    badge: "Critical Care",
    subtitle: "Rapid bedside diagnostics and emergency clinical analysis systems",
    shortDescription: "Instantaneous critical care results for blood gas, cardiac markers, electrolytes, and metabolic panels.",
    fullDescription: "Altimi Biosciences brings world-class Point of Care Testing (POCT) solutions to emergency rooms, ICUs, cardiology clinics, and remote healthcare facilities across Pakistan. Our POCT portfolio combines compact footprint with laboratory-grade accuracy, enabling clinical teams to make immediate diagnostic and treatment decisions within minutes of patient arrival.",
    image: "/images/products/poct-suite.png",
    features: [
      "Laboratory-grade results delivered in 2 to 5 minutes at patient bedside",
      "Comprehensive panels: Cardiac Troponin I/T, NT-proBNP, D-Dimer, HbA1c, Blood Gas & Electrolytes",
      "Zero maintenance cartridge-based systems with built-in calibration",
      "Full wireless and LIS/HIS hospital integration",
      "Touchscreen operation with barcode patient ID scanner",
      "Internal battery backup for emergency field use and patient transport"
    ],
    specifications: [
      { label: "Sample Types", value: "Capillary Whole Blood, Venous Whole Blood, Plasma, Serum" },
      { label: "Sample Volume", value: "10 - 50 µL depending on panel" },
      { label: "Analysis Time", value: "60 seconds - 5 minutes" },
      { label: "Display", value: "7-inch Color Capacitive Touch Screen" },
      { label: "Connectivity", value: "Wi-Fi, Ethernet, Bluetooth, USB, HL7 / ASTM" },
      { label: "Battery Life", value: "Up to 8 hours continuous operation" },
      { label: "Operating Temp", value: "15°C to 35°C" }
    ],
    certifications: ["CE Mark", "ISO 13485", "DRAP Approved"],
    brochureUrl: "/brochures/altimi-poct-systems.pdf",
    featured: true
  },
  {
    id: "faros-360-ecg",
    slug: "faros-360-ecg",
    name: "Bittium Faros 360 – ECG Monitor",
    category: "medical-devices",
    categoryName: "Medical Devices",
    brand: "Bittium",
    modelCode: "FAROS-360-PRO",
    badge: "Innovative Wearable",
    subtitle: "Precision lightweight 3-channel ECG, HRV, stress and recovery monitor weighing only 18g",
    shortDescription: "Innovative tool for offline and online monitoring. Tracks ECG, HRV, stress, recovery and well-being. Weighs only 18g.",
    fullDescription: "The Bittium Faros 360 is an ultra-lightweight, waterproof, multi-channel ECG sensor engineered for professional cardiology, occupational healthcare, and sports medicine. Weighing just 18 grams, it delivers continuous 3-channel ECG recording, Heart Rate Variability (HRV), autonomic nervous system assessment, and physical activity monitoring with extraordinary clinical signal fidelity.",
    image: "/images/products/faros-360.png",
    features: [
      "Innovative tool for both offline (memory card) and online (Bluetooth) monitoring",
      "Tracks 3-channel ECG, HRV, stress, physical activity and recovery",
      "Smoothly designed for ultimate user comfort and daily wearability",
      "Lightweight design, weighing only 18 grams",
      "Easy to use and highly efficient for extended clinical assessments",
      "Waterproof (IP67) construction allows normal showering and sweating",
      "Rechargeable battery providing up to 8 days of continuous logging"
    ],
    specifications: [
      { label: "ECG Channels", value: "Up to 3 channels (4-lead cable or patch)" },
      { label: "Sampling Rate", value: "125 Hz, 250 Hz, 500 Hz, 1000 Hz selectable" },
      { label: "Resolution", value: "24-bit ADC" },
      { label: "Weight", value: "18 grams" },
      { label: "Dimensions", value: "48 x 29 x 12 mm" },
      { label: "Water Resistance", value: "IP67 (waterproof up to 1 meter)" },
      { label: "Battery Life", value: "Up to 190 hours continuous recording" },
      { label: "Memory", value: "Up to 32 GB internal flash storage" }
    ],
    certifications: ["Medical Device Directive 93/42/EEC", "CE 0537", "FDA Cleared", "DRAP Approved"],
    brochureUrl: "/brochures/bittium-faros-360.pdf",
    featured: true
  },
  {
    id: "bittium-holterplus",
    slug: "bittium-holterplus",
    name: "Bittium HolterPlus – Remote Cardiac Monitoring",
    category: "medical-devices",
    categoryName: "Medical Devices",
    brand: "Bittium",
    modelCode: "HOLTERPLUS-RCM",
    badge: "Telecardiology Cloud",
    subtitle: "Web-based extended remote cardiac monitoring platform for hospitals and clinics",
    shortDescription: "The perfect option for extended cardiac monitoring. Web-based solution enabling remote monitoring with ease.",
    fullDescription: "Bittium HolterPlus is a cutting-edge web-based telecardiology solution designed for extended ambulatory ECG and remote cardiac monitoring. It bridges the gap between patients in recovery at home and cardiology specialists at tertiary hospitals, enabling rapid detection of transient arrhythmias, atrial fibrillation, and syncope with seamless cloud analytics.",
    image: "/images/products/bittium-holterplus.png",
    features: [
      "The perfect option for extended cardiac monitoring from 24 hours up to 30 days",
      "A web-based cardiac monitoring solution accessible from any secure browser",
      "Enables remote cardiac monitoring with ease and zero physical visits required for data offload",
      "Ideal for private cardiologists, cardiac service providers, hospitals and clinics",
      "Automated arrhythmia classification and atrial fibrillation burdent tracking",
      "Secure encrypted cloud infrastructure compliant with HIPAA and GDPR standards"
    ],
    specifications: [
      { label: "Monitoring Duration", value: "24 hours to 30 consecutive days" },
      { label: "Architecture", value: "Cloud-based SaaS + Encrypted Gateway Mobile App" },
      { label: "Compatibility", value: "Bittium Faros 180 and Faros 360 ECG sensors" },
      { label: "Security", value: "End-to-end AES-256 encryption, TLS 1.3" },
      { label: "Export Formats", value: "PDF reports, XML, EDF+, HL7, DICOM ECG" },
      { label: "Server Deployment", value: "ISO 27001 Certified Cloud or On-premise" }
    ],
    certifications: ["CE Class IIa Medical Device", "ISO 27001 Security", "DRAP Approved"],
    brochureUrl: "/brochures/bittium-holterplus-brochure.pdf",
    featured: true
  },
  {
    id: "greiner-clip-neo",
    slug: "greiner-clip-neo",
    name: "Greiner Stick to Safety: CLiP Neo",
    category: "hospital-supplies",
    categoryName: "Hospital Supplies",
    brand: "Greiner Bio-One",
    modelCode: "CLIP-NEO-SAFE",
    badge: "Needlestick Safety",
    subtitle: "Automatic safety IV catheter with winged and ported configurations",
    shortDescription: "Automatic safety. Excellent insertion properties. Comprehensive range of gauge sizes, lengths and materials.",
    fullDescription: "The Greiner CLiP Neo Automatic Safety IV Catheter provides frontline healthcare workers with foolproof protection against accidental needlestick injuries and bloodborne pathogen transmission. Engineered with precision bevel geometry and an instantaneous passive safety mechanism, it ensures painless vascular access and absolute post-insertion safety.",
    image: "/images/products/clip-neo.png",
    features: [
      "Automatic passive safety mechanism activates instantaneously upon needle withdrawal",
      "Excellent insertion properties with precision bevel technology for minimal patient trauma",
      "Comprehensive range: winged, ported, and straight configurations",
      "Vast variety of gauge sizes (14G to 26G), lengths, and biomaterial options (FEP & PUR polyurethane)",
      "High-flow rates with clear flashback chamber for instant venous confirmation",
      "DEHP-free and latex-free medical grade polymer construction"
    ],
    specifications: [
      { label: "Gauges Available", value: "14G, 16G, 18G, 20G, 22G, 24G, 26G" },
      { label: "Material", value: "Polyurethane (PUR) or Teflon (FEP)" },
      { label: "Configurations", value: "Winged, Ported with Injection Valve, Non-Winged" },
      { label: "Sterilization", value: "Ethylene Oxide (EtO) Sterile Barrier" },
      { label: "Packaging", value: "50 units/box, 500 units/master carton" },
      { label: "Safety Mechanism", value: "Fully passive encapsulated needle shield" }
    ],
    certifications: ["ISO 10555-1", "ISO 10555-5", "CE Mark", "DRAP Registered"],
    brochureUrl: "/brochures/greiner-clip-neo-safety.pdf",
    featured: true
  },
  {
    id: "histoacryl-tissue-adhesive",
    slug: "histoacryl-tissue-adhesive",
    name: "Histoacryl Tissue Adhesive",
    category: "medicine-drugs",
    categoryName: "Medicine / Drugs",
    brand: "B. Braun Medical",
    modelCode: "HISTOACRYL-BLUE",
    badge: "Wound Closure in a Minute",
    subtitle: "N-butyl-2-cyanoacrylate topical skin adhesive for rapid closure of surgical incisions and lacerations",
    shortDescription: "Anti-bacterial barrier protects the wound. No need of refrigeration. Water resistant: showering is possible.",
    fullDescription: "Histoacryl is a world-renowned topical skin adhesive formulated from high-purity n-butyl-2-cyanoacrylate. Providing rapid tensile closure for smooth and fresh skin wounds, Histoacryl polymerizes in seconds upon contact with tissue moisture, forming a pliable microbial barrier that replaces painful traditional sutures and eliminates traumatic suture removal visits.",
    image: "/images/products/histoacryl.png",
    features: [
      "Wound closure in approximately 30 to 60 seconds",
      "Anti-bacterial barrier actively protects the healing wound against microbial entry",
      "No need for refrigeration; stable at standard room temperature storage (≤ 22°C)",
      "Significantly less pain than traditional suture material or surgical staples",
      "Excellent cosmetic results with minimal scarring",
      "Water-resistant layer allows patients to shower immediately post-closure"
    ],
    specifications: [
      { label: "Active Ingredient", value: "N-butyl-2-cyanoacrylate" },
      { label: "Color", value: "Cyan tinted (blue) for visual precision or Clear" },
      { label: "Polymerization Time", value: "30 - 60 seconds" },
      { label: "Storage", value: "Store below 22°C, no refrigeration needed" },
      { label: "Application Volume", value: "0.5 mL ampoule with precision tip" },
      { label: "Tensile Strength", value: "Equivalent to 5-0 monofilament suture" }
    ],
    certifications: ["CE 0123", "ISO 13485", "DRAP Form 7 Registered"],
    brochureUrl: "/brochures/bbraun-histoacryl.pdf",
    featured: true
  },
  {
    id: "ultimate-prep-pads",
    slug: "ultimate-prep-pads",
    name: "Ultimate Prep Pads",
    category: "medical-consumables",
    categoryName: "Medical Consumables",
    brand: "Altimi Care",
    modelCode: "ALT-PREP-70",
    badge: "Hospital Standard",
    subtitle: "70% Isopropyl Alcohol antiseptic skin cleansing pads",
    shortDescription: "Hospital grade antiseptic skin cleansing pads saturated with 70% v/v Isopropyl Alcohol in airtight foil packs.",
    fullDescription: "Altimi Ultimate Prep Pads deliver maximum antibacterial efficacy for skin antisepsis prior to intravenous injections, blood sampling, blood glucose lancets, and minor dermatological procedures. Formulated with 70% USP grade Isopropyl Alcohol on a soft 2-ply spunlace non-woven pad.",
    image: "/images/products/prep-pads.png",
    features: [
      "Saturated with 70% v/v Isopropyl Alcohol USP for high bactericidal action",
      "Thick, lint-free 2-ply non-woven fabric prevents tearing during vigorous scrubbing",
      "Airtight individual hermetic foil packaging prevents dry-out and contamination",
      "Ideal for pre-injection disinfection, IV cannulation, and lancet sites",
      "Strict quality control with zero volatile leakage guaranteed"
    ],
    specifications: [
      { label: "Active Solution", value: "70% Isopropyl Alcohol (IPA) USP" },
      { label: "Material", value: "2-ply Spunlace Non-Woven Cellulose & Polyester" },
      { label: "Pad Dimensions", value: "30 mm x 60 mm (unfolded)" },
      { label: "Packaging", value: "100 or 200 pads per dispenser box, 20 boxes/carton" },
      { label: "Sterility", value: "Sterile grade antisepsis" },
      { label: "Shelf Life", value: "5 Years" }
    ],
    certifications: ["ISO 13485", "CE Compliant", "DRAP Approved"],
    brochureUrl: "/brochures/altimi-prep-pads.pdf",
    featured: false
  },
  {
    id: "disposable-underpads",
    slug: "disposable-underpads",
    name: "Disposable Underpads / Dignity Sheets",
    category: "medical-consumables",
    categoryName: "Medical Consumables",
    brand: "Altimi Care",
    modelCode: "ALT-UNDERP-6090",
    badge: "Clinical Hygiene",
    subtitle: "Ultra-absorbent protective hospital bed sheets with leak-proof backing",
    shortDescription: "High-absorption dignity sheets featuring super absorbent polymer (SAP) core and diamond-embossed surface.",
    fullDescription: "Altimi Disposable Underpads (Dignity Sheets) ensure absolute cleanliness, hygiene, and bed protection for hospitals, operating theaters, intensive care units, maternity wards, and home patient care. Engineered with a five-layer construction including fluff pulp and SAP (Super Absorbent Polymer).",
    image: "/images/products/underpads.png",
    features: [
      "Five-layer leakproof barrier structure with non-slip polyethylene bottom",
      "Super Absorbent Polymer (SAP) core locks liquids and neutralizes odors rapidly",
      "Diamond-embossed surface channels fluid evenly across pad preventing pooling",
      "Hypoallergenic soft non-woven spunbond top sheet protects delicate patient skin",
      "Available in standard clinical sizes: 60x60 cm and 60x90 cm"
    ],
    specifications: [
      { label: "Dimensions", value: "60 cm x 90 cm (Standard Large) & 60 cm x 60 cm" },
      { label: "Absorption Capacity", value: "> 1,200 mL liquid capacity" },
      { label: "Core Composition", value: "Virgin Fluff Pulp + High-Concentration SAP" },
      { label: "Top Layer", value: "Hydrophilic Spunbond Non-Woven" },
      { label: "Back Sheet", value: "Waterproof Blue PE Film with sealed perimeter edges" },
      { label: "Packaging", value: "10 sheets per pack, 10 packs per carton" }
    ],
    certifications: ["ISO 9001", "ISO 13485", "DRAP Hospital Consumables"],
    brochureUrl: "/brochures/altimi-underpads.pdf",
    featured: false
  },
  {
    id: "latex-gloves",
    slug: "latex-gloves",
    name: "Premium Medical Latex Examination Gloves",
    category: "medical-consumables",
    categoryName: "Medical Consumables",
    brand: "Altimi GloveShield",
    modelCode: "ALT-GLV-LTX",
    badge: "Maximum Elasticity",
    subtitle: "Micro-textured powder-free medical latex gloves with AQL 1.5 barrier protection",
    shortDescription: "Unparalleled comfort and protection. Toughness, elasticity and non-slip grip with AQL 1.5 quality standard.",
    fullDescription: "Altimi Medical Latex Examination Gloves offer doctors, surgeons, and laboratory technicians an unmatched combination of tactile sensitivity, elasticity, and barrier toughness. Made from natural high-grade rubber latex with extensive leaching to minimize extractable protein allergenicity.",
    image: "/images/products/latex-gloves.png",
    features: [
      "Unparalleled comfort and anatomical protection for long medical procedures",
      "Perfect combination of toughness, elasticity and natural tear resistance",
      "Textured fingers and palm for improved grip in wet and dry conditions",
      "AQL 1.5 medical examination standard assurance",
      "Low level of extractable proteins and chemical residues to prevent skin irritation",
      "Beaded cuff design for easy donning and anti-roll-down stability"
    ],
    specifications: [
      { label: "Material", value: "Natural High-Grade Rubber Latex" },
      { label: "Type", value: "Powder-Free, Non-Sterile, Ambidextrous" },
      { label: "Quality Level", value: "AQL 1.5 Medical Grade" },
      { label: "Tensile Strength", value: "≥ 18 MPa before aging" },
      { label: "Elongation at Break", value: "≥ 650%" },
      { label: "Sizes Available", value: "XS, S, M, L, XL" },
      { label: "Packaging", value: "100 gloves per box by weight, 10 boxes per carton" }
    ],
    certifications: ["EN 455 Parts 1-4", "ASTM D3578", "ISO 13485", "CE Mark", "DRAP Registered"],
    brochureUrl: "/brochures/altimi-latex-gloves.pdf",
    featured: true
  },
  {
    id: "nitrile-gloves",
    slug: "nitrile-gloves",
    name: "Medical Nitrile Examination Gloves",
    category: "medical-consumables",
    categoryName: "Medical Consumables",
    brand: "Altimi GloveShield",
    modelCode: "ALT-GLV-NIT",
    badge: "100% Latex-Free",
    subtitle: "High-protection powder-free nitrile gloves resistant to chemicals and punctures",
    shortDescription: "Latex free, powder free and odor free. Superior barrier protection against chemicals and dangerous substances.",
    fullDescription: "Altimi Nitrile Examination Gloves provide the ultimate shield for healthcare personnel, diagnostic laboratories, and pharmaceutical cleanrooms. 100% synthetic acrylonitrile-butadiene rubber eliminates Type I latex allergies while providing superior puncture resistance and chemical barrier strength.",
    image: "/images/products/nitrile-gloves.png",
    features: [
      "100% Latex-free, powder-free and odor-free formulation",
      "Custom ergonomic design enhances comfort and fit during extended shifts",
      "An ideal alternative for medical staff and patients allergic to natural rubber latex",
      "Excellent barrier protection against chemotherapy drugs, harsh chemicals and biohazards",
      "Micro-roughened fingertip texture ensures precision instrument handling",
      "High puncture and abrasion resistance compared to conventional vinyl or latex"
    ],
    specifications: [
      { label: "Material", value: "100% Synthetic Nitrile Polymer" },
      { label: "Color", value: "Cobalt Medical Blue" },
      { label: "Quality Standard", value: "AQL 1.5 Medical Examination Grade" },
      { label: "Chemo Tested", value: "ASTM D6978 resistance tested" },
      { label: "Thickness", value: "Cuff: 0.06 mm | Palm: 0.08 mm | Finger: 0.11 mm" },
      { label: "Sizes Available", value: "Small, Medium, Large, Extra Large" },
      { label: "Packaging", value: "100 gloves per dispenser box, 1000 gloves per master carton" }
    ],
    certifications: ["EN 455 Parts 1-4", "EN 374 Type B", "ASTM D6319", "FDA 510(k)", "DRAP Registered"],
    brochureUrl: "/brochures/altimi-nitrile-gloves.pdf",
    featured: true
  }
];

export const productCategories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "clinical-chemistry-analyzer", name: "Clinical Chemistry Analyzer", count: 3 },
  { id: "medical-consumables", name: "Medical Consumables", count: 4 },
  { id: "medical-devices", name: "Medical Devices", count: 2 },
  { id: "medicine-drugs", name: "Medicine / Drugs", count: 1 },
  { id: "hospital-supplies", name: "Hospital Supplies", count: 1 },
  { id: "diagnostic-kits", name: "Diagnostic Kits", count: 2 }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

