import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "randox-rx-series",
    slug: "randox-rx-series",
    name: "Randox RX Series – RX modena & RX imola",
    category: "clinical-chemistry-analyzers",
    categoryName: "Clinical Chemistry Analyzers",
    brand: "Randox Laboratories",
    country: "United Kingdom",
    modelCode: "RX 4900 / RX 9000",
    badge: "2 Models Available",
    subtitle: "High-throughput automated clinical chemistry analyzers (RX modena & RX imola)",
    shortDescription:
      "Automated clinical chemistry analyzers from Randox Laboratories featuring 800 photometric tests per hour & 1,200 tests per hour, including ISE (RX modena) and 400 photometric tests per hour & 240 ISE tests per hour (RX imola).",
    fullDescription:
      "The Randox RX Series combines mid-to-high throughput precision for hospital and reference laboratories in Pakistan. Registered under Altimi Biosciences Pvt Ltd., the series features two flagship configurations — the RX imola (RX 4900) and the RX modena (RX 9000) — delivering routine chemistries, specific proteins, lipids, therapeutic drug monitoring, and direct HbA1c testing on unified automated platforms.",
    image: "/images/products/rx-9000.png",
    features: [
      "RX modena: 800 photometric tests per hour",
      "RX modena: 1,200 tests per hour, including ISE",
      "RX imola: 400 photometric tests per hour",
      "RX imola: 240 ISE tests per hour",
      "Direct HbA1c whole blood testing without manual pre-treatment",
      "Consolidated routine chemistry, specific protein, lipid, and STAT workflows",
      "Cooled reagent carousel maintaining 2°C to 8°C onboard stability",
      "Permanent Pyrex cuvettes with automated multi-stage wash station"
    ],
    specifications: [
      { label: "RX modena Throughput", value: "800 photometric tests per hour | 1,200 tests per hour, including ISE." },
      { label: "RX imola Throughput", value: "400 photometric tests per hour | 240 ISE tests per hour." },
      { label: "Test Principles", value: "Photometry, Turbidimetry, Direct Potentiometry (ISE)" },
      { label: "Sample Types", value: "Serum, Plasma, Urine, CSF, Whole Blood (HbA1c)" },
      { label: "Reagent Cooling", value: "2°C to 8°C Onboard Stability" },
      { label: "Origin", value: "Randox Laboratories — United Kingdom" }
    ],
    certifications: ["ISO 13485:2016", "CE IVD Mark", "DRAP Registered"],
    brochureUrl: "/brochurs/Brochure-Randox-RX-Modena-March 2023.pdf",
    featured: true,
    models: [
      {
        id: "rx-9000",
        slug: "rx-modena",
        name: "Randox RX modena (RX 9000)",
        modelCode: "RX 9000 / RX modena",
        image: "/images/products/rx-9000.png",
        badge: "1,200 Tests / Hr",
        shortDescription:
          "High-throughput flagship floor-standing analyzer delivering 800 photometric tests per hour and 1,200 tests per hour, including ISE with direct HbA1c testing.",
        features: [
          "800 photometric tests per hour",
          "1,200 tests per hour, including ISE",
          "Dedicated direct HbA1c testing without manual pre-treatment",
          "Up to 100 cooled reagent positions at 8°C to 15°C",
          "94 sample positions + 10 calibrator/control positions with STAT interrupt",
          "153 semi-permanent reaction cuvettes with automated 7-stage wash station",
          "Low water consumption of less than 20 litres per hour at peak usage",
          "Halogen tungsten lamp with 13 wavelengths (340 nm – 800 nm)"
        ],
        specifications: [
          { label: "Total Throughput", value: "1,200 tests per hour, including ISE" },
          { label: "Photometric Rate", value: "800 photometric tests per hour" },
          { label: "Physical Dimensions", value: "1300 mm (W) × 850 mm (D) × 1150 mm (H)" },
          { label: "Weight", value: "< 300 kg" },
          { label: "Sample Positions", value: "94 sample positions + 10 calibrators & controls" },
          { label: "STAT Sampling", value: "Immediate STAT sampling interruption via removable panel" },
          { label: "Sample Volume", value: "0.5 – 25 µL (0.1 µL increments) • ISE: < 22 µL" },
          { label: "Reagent Positions", value: "100 cooled positions (50 × 70 ml & 50 × 20 ml bottles)" },
          { label: "Reagent Temperature", value: "8°C to 15°C for extended onboard stability" },
          { label: "Reaction Cuvettes", value: "153 semi-permanent cuvettes (5 mm optical path, 3–6 month lifespan)" },
          { label: "Wash Station", value: "7-stage washing with acid, alkali, and pure water steps" },
          { label: "Water Consumption", value: "< 20 Litres per hour at peak usage" },
          { label: "Optical Wavelengths", value: "13 wavelengths: 340, 380, 415, 450, 478, 510, 546, 570, 600, 660, 700, 750, 800 nm" },
          { label: "Absorbance Range", value: "0 to 3 Abs (accuracy ±2 nm)" },
          { label: "Power & Connectivity", value: "100–240 V AC • Windows® Touchscreen • LIMS ASTM compliant" }
        ]
      },
      {
        id: "rx-4900",
        slug: "rx-imola",
        name: "Randox RX imola (RX 4900)",
        modelCode: "RX 4900 / RX imola",
        image: "/images/products/rx-4900.png",
        badge: "400 + 240 ISE / Hr",
        shortDescription:
          "Compact high-efficiency benchtop chemistry analyzer performing 400 photometric tests per hour and 240 ISE tests per hour for medium-to-high throughput labs.",
        features: [
          "400 photometric tests per hour",
          "240 ISE tests per hour",
          "60 cooled reagent positions and STAT emergency sample capability",
          "Reusable permanent Pyrex glass cuvettes reducing consumable cost",
          "Low water consumption (~18 L/hour)",
          "12 wavelengths (340–800 nm) via concave diffraction grating",
          "Sensitive liquid level, clot, crash, and bubble detection"
        ],
        specifications: [
          { label: "Photometric Rate", value: "400 photometric tests per hour" },
          { label: "ISE Throughput", value: "240 ISE tests per hour (560 tests/hr combined)" },
          { label: "Dimensions", value: "970 mm (W) × 690 mm (D) × 590 mm (H)" },
          { label: "Weight", value: "~150 kg" },
          { label: "Sample Carousel", value: "72 sample positions (including calibrators, controls & STAT)" },
          { label: "Reagent Positions", value: "60 cooled reagent positions" },
          { label: "Reaction Cuvettes", value: "72 reusable permanent Pyrex glass cuvettes" },
          { label: "Wash Station", value: "8-stage cuvette wash system with warm water & detergent" },
          { label: "Water Consumption", value: "~18 Litres per hour" },
          { label: "Optical Wavelengths", value: "12 wavelengths: 340, 380, 415, 450, 510, 546, 570, 600, 660, 700, 750, 800 nm" },
          { label: "Software Interface", value: "Windows®-based user interface with LIMS bidirectional connectivity" }
        ]
      }
    ]
  },
  {
    id: "bosch-vivalytic",
    slug: "bosch-vivalytic",
    name: "Bosch Vivalytic – All-in-One Molecular Analyzer",
    category: "clinical-chemistry-analyzers",
    categoryName: "Clinical Chemistry Analyzers",
    brand: "Randox Laboratories / Bosch GmbH",
    country: "Germany (Bosch GmbH)",
    modelCode: "VIVALYTIC-ONE",
    badge: "All-in-One PCR",
    subtitle: "The universal all-in-one closed cartridge PCR molecular diagnostics platform",
    shortDescription:
      "Fully automated, closed-cartridge point-of-care PCR molecular analyzer by Bosch GmbH & Randox Laboratories for rapid infectious disease & panel testing.",
    fullDescription:
      "Bosch Vivalytic is a universal, all-in-one molecular diagnostic platform uniting sample preparation, PCR amplification, and microfluidic microarray detection inside a sealed single-use test cartridge. Built by Bosch GmbH (Germany) in partnership with Randox Laboratories and registered under Altimi Biosciences Pvt Ltd., it requires minimal lab infrastructure while delivering laboratory-accurate molecular results.",
    image: "/images/products/bosch-vivalytic.jpeg",
    features: [
      "All-in-one closed PCR cartridge workflow: sample-in to result-out",
      "Eliminates manual nucleic acid extraction and pipetting steps",
      "Multiplex (High-Plex) & singleplex/low-plex assay support (respiratory, STI, MRSA, bacterial panels)",
      "High-Plex testing powered by Randox patented 9x9mm Biochip Array Technology (44 DTRs + 5 QC regions)",
      "Low-Plex real-time qualitative PCR & melting curve analysis",
      "Intuitive 7-inch touchscreen operation with automated barcode tracking",
      "Room temperature cartridge storage (+15°C to +30°C) with all reagents pre-loaded onboard",
      "Vivasuite IoT cloud device management for automatic updates and remote monitoring",
      "Award-winning compact benchtop design minimizing contamination risk"
    ],
    specifications: [
      { label: "Technology", value: "High-Plex Biochip Array (Chemiluminescence) & Low-Plex Real-Time PCR" },
      { label: "Sample Types", value: "Swabs (Nasopharyngeal, Oropharyngeal, Vaginal, Urethral), Sputum, Urine, Whole Blood" },
      { label: "Sample Volume", value: "300 µL standard (150 µL – 600 µL assay dependent)" },
      { label: "Dimensions (Instrument)", value: "400 mm (L) × 204 mm (W) × 388 mm (H)" },
      { label: "Weight", value: "15 kg" },
      { label: "Display", value: "7 inch 16:10, 1024 × 600 pixel interactive touchscreen" },
      { label: "Cartridge Dimensions", value: "185 mm (L) × 75 mm (W) × 17 mm (D)" },
      { label: "Cartridge Storage", value: "Room temperature storage (+15°C to +30°C), all reagents on-board" },
      { label: "Biochip Array", value: "9 × 9 mm Biochip, 44 Discrete Testing Regions (DTRs) + 5 QC regions" },
      { label: "Detection Optics", value: "Charge-Coupled Device (CCD) camera for chemiluminescent detection" },
      { label: "Time to Result", value: "39 min (SARS-CoV-2 Rapid) to ~2 hrs (STI / Respiratory 10-plex)" },
      { label: "Operating Temperature", value: "15°C to 30°C (Storage: -20°C to +60°C)" },
      { label: "Operating Humidity", value: "30% to 80% (non-condensing)" },
      { label: "Operating Air Pressure", value: "850 – 1,100 hPa (0 – 1,400 m above sea level)" },
      { label: "Data Connectivity", value: "Ethernet 10/100 MB, WLAN 2.4 GHz (802.11b/g/n), Bluetooth v4.1 LE, USB 2.0" },
      { label: "Internal Memory", value: "16 GB" },
      { label: "Mean Loudness", value: "≤ 55 dB(A) in operating mode" },
      { label: "Electrical Data", value: "100–240 V AC, 50/60 Hz, 160 VA" },
      { label: "Device Management", value: "Vivasuite digital ecosystem on Bosch IoT Cloud" },
      { label: "Safety & Standards", value: "IEC/EN 61010-1, IEC/EN 61010-2-010, IEC/EN 61010-2-101, Regulation 2017/746" },
      { label: "Manufacturer", value: "Bosch Healthcare Solutions GmbH (Germany) / Randox Laboratories (UK)" },
      { label: "Regulatory Status", value: "CE IVD Marked • DRAP Registered (Pakistan)" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "IEC/EN 61010", "DRAP Registered"],
    brochureUrl: "/brochurs/Brochure-Randox-RX-Vivalytic-Sept. 2022.pdf",
    featured: true
  },
  {
    id: "quikread-go-instrument",
    slug: "point-of-care-testing",
    name: "Aidian QuikRead go Instrument",
    category: "point-of-care-testing",
    categoryName: "Point-of-Care Testing (POCT)",
    brand: "Aidian Oy",
    country: "Finland",
    modelCode: "QRG-ANALYZER",
    badge: "POCT Instrument",
    subtitle: "Compact, portable point-of-care analyzer with photometric and turbidimetric measurement",
    shortDescription:
      "Compact, portable point-of-care analyzer combining photometric and turbidimetric measurement technologies, touchscreen UI, and automated test processing.",
    fullDescription:
      "Manufactured by Aidian Oy (Finland) and registered under Altimi Biosciences Pvt Ltd., the QuikRead go Instrument combines photometric and turbidimetric dual optics inside an intuitive touchscreen POCT analyzer. Engineered for fast, reproducible diagnostic results directly in outpatient clinics, healthcare centers, and clinical laboratories.",
    image: "/images/products/quikread-go.webp",
    features: [
      "Photometric & turbidimetric dual measurement optics",
      "Intuitive touchscreen workflow with automatic calibration",
      "Automated sample processing in pre-filled cuvette system",
      "Full bidirectional LIS / HIS hospital connectivity",
      "Broad assay menu including easy CRP and IFCC-standardized HbA1c",
      "Small sample volumes (1 µL to 10 µL)",
      "Automated result countdown and motorized cuvette lift"
    ],
    specifications: [
      { label: "Measurement Principle", value: "Photometric & Turbidimetric dual optics" },
      { label: "Display", value: "Large interactive color touchscreen with animated step-by-step guidance" },
      { label: "Calibration", value: "Fully automated calibration via 2D cuvette barcode recognition" },
      { label: "Assay Menu", value: "QuikRead go easy CRP, QuikRead go HbA1c, Strep A, iFOBT" },
      { label: "Test Duration", value: "2 minutes (easy CRP) • ~5 minutes (HbA1c)" },
      { label: "Sample Types", value: "Capillary whole blood, venous whole blood, serum, plasma" },
      { label: "Data Storage", value: "Up to 100 patient results with operator ID, lot number & QC audit log" },
      { label: "Interface Connections", value: "3 × USB ports, 1 × RJ-45 Ethernet port, 1 × RS-232 serial port" },
      { label: "Hospital Connectivity", value: "Bidirectional LIS / HIS communication via ASTM / HL7 protocols" },
      { label: "Catalogue Number", value: "Cat. no. 133893 (QuikRead go Instrument)" },
      { label: "Power Supply", value: "100–240 V AC, 50/60 Hz (optional internal rechargeable battery)" },
      { label: "Manufacturer", value: "Aidian Oy — Finland" },
      { label: "Regulatory Status", value: "CE IVD Marked • ISO 13485 • DRAP Registered (Pakistan)" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochurs/1.QuikRread-go-easy-CRP-1.pdf",
    featured: true
  },
  {
    id: "quikread-easy-crp",
    slug: "quikread-go-easy-crp",
    name: "Aidian QuikRead go easy CRP Assay",
    category: "point-of-care-testing",
    categoryName: "Point-of-Care Testing (POCT)",
    brand: "Aidian Oy",
    country: "Finland",
    modelCode: "QRG-EASY-CRP",
    badge: "Rapid CRP POCT Kit",
    subtitle: "Rapid quantitative determination of C-Reactive Protein (CRP) in 2 minutes",
    shortDescription:
      "One-step rapid quantitative CRP test kit for whole blood, serum, or plasma providing lab-accurate infection and inflammation results within 2 minutes.",
    fullDescription:
      "The QuikRead go easy CRP test kit delivers quantitative C-reactive protein results from a small 10 µL sample within 2 minutes. Manufactured by Aidian Oy (Finland) and distributed by Altimi Biosciences Pvt Ltd., it guides appropriate antibiotic treatment in respiratory infections and acute inflammation at point of care.",
    image: "/images/products/quikread-easy-crp.png",
    features: [
      "Quantitative CRP results in 2 minutes directly at the point of care",
      "Small 10 µL sample (capillary or venous whole blood, serum, plasma)",
      "Ready-to-use sample collector with pre-filled reagent cuvette",
      "Assists antibiotic stewardship and infection assessment",
      "Room temperature storage stability (up to +25°C)",
      "No manual dilution or sample pre-treatment needed"
    ],
    specifications: [
      { label: "Analyte", value: "C-Reactive Protein (CRP)" },
      { label: "Reaction Principle", value: "Quantitative Immunoturbidimetric Assay" },
      { label: "Measuring Range", value: "0.5 – 200 mg/L (whole blood, serum, plasma)" },
      { label: "Sample Volume", value: "10 µL whole blood, serum, or plasma" },
      { label: "Sample Collector", value: "QuikRead go Sample Collector 10 µl (Cat. no. 153211)" },
      { label: "Test Duration", value: "2 minutes" },
      { label: "Kit Storage (Unopened)", value: "2°C to 25°C until kit expiry date" },
      { label: "Cuvette Foil Pouch", value: "Opened pouch: 6 months at 2–8°C / 3 months at 18–25°C" },
      { label: "Opened Cuvette Stability", value: "Sample is stable in opened buffer cuvette for 2 hours" },
      { label: "Reagent Cap Tube", value: "Stable for 6 months after first opening at 2–25°C" },
      { label: "Quality Control", value: "CRP Control Low (153765), Normal (153764), High (153763)" },
      { label: "Kit Catalogue Number", value: "Cat. no. 153287 (Kit with Sample Collector 10µl)" },
      { label: "System Compatibility", value: "QuikRead go Instrument" },
      { label: "Regulatory Status", value: "CE IVD Marked • ISO 13485 • DRAP Registered" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochurs/1.QuikRread-go-easy-CRP-1.pdf",
    featured: true
  },
  {
    id: "quikread-hba1c",
    slug: "quikread-go-hba1c",
    name: "Aidian QuikRead go HbA1c Test Kit",
    category: "point-of-care-testing",
    categoryName: "Point-of-Care Testing (POCT)",
    brand: "Aidian Oy",
    country: "Finland",
    modelCode: "QRG-HBA1C",
    badge: "Direct HbA1c POCT Kit",
    subtitle: "IFCC and NGSP standardized quantitative HbA1c test for diabetes management",
    shortDescription:
      "Standardized point-of-care glycated hemoglobin (HbA1c) diagnostic test for monitoring and managing diabetes mellitus using a single fingerprick whole-blood sample.",
    fullDescription:
      "The QuikRead go HbA1c test kit is an IFCC and NGSP certified diagnostic kit for immediate glycemic monitoring in diabetic patients during clinical consultations. Manufactured by Aidian Oy (Finland) and registered under Altimi Biosciences Pvt Ltd., it requires only 1 µL fingerprick capillary whole blood with automatic onboard calculation.",
    image: "/images/products/quikread-hba1c.png",
    features: [
      "Reliable quantitative HbA1c results within minutes during consultation",
      "IFCC and NGSP dual-certified clinical standardization",
      "Requires only 1 µL fingerprick capillary or venous whole blood",
      "Dual-reporting in IFCC (mmol/mol) and NGSP (%) units",
      "Closed-cuvette hygienic testing with no manual pipetting",
      "Room temperature kit stability up to 2 months (18–25°C)"
    ],
    specifications: [
      { label: "Analyte", value: "Glycated Hemoglobin A1c (HbA1c)" },
      { label: "Reaction Principle", value: "Quantitative Turbidimetric Immunoassay" },
      { label: "Standardization", value: "Dual Certified: IFCC (mmol/mol) & NGSP (%) standards" },
      { label: "Measuring Range", value: "20 – 140 mmol/mol (4.0 – 15.0% HbA1c)" },
      { label: "Sample Volume", value: "1 µL capillary or venous whole blood" },
      { label: "Sample Collector", value: "QuikRead go Sample Collector 1 µl (Cat. no. 154457)" },
      { label: "Test Duration", value: "~5 minutes" },
      { label: "Kit Storage", value: "Unopened at 2–8°C until expiry (or up to 2 months at 18–25°C)" },
      { label: "Cuvette Foil Pouch", value: "Opened pouch: 6 months at 2–8°C / 2 months at 18–25°C" },
      { label: "Opened Cuvette Stability", value: "Sample is stable in cuvette for 5 minutes with closed cap" },
      { label: "Reagent Cap Tube", value: "Stable for 6 months at 2–8°C / 2 months at 18–25°C" },
      { label: "Quality Control", value: "QuikRead go HbA1c Control Set (Cat. no. 154520)" },
      { label: "Kit Catalogue Number", value: "Cat. no. 151058 (Kit 25 tests with Sample Collector 1µl)" },
      { label: "System Compatibility", value: "QuikRead go Instrument" },
      { label: "Regulatory Status", value: "CE IVD Marked • IFCC & NGSP Certified • DRAP Registered" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochurs/3.QuikRead-go-HbA1c-1.pdf",
    featured: true
  },
  {
    id: "faros-360-ecg",
    slug: "faros-360-ecg",
    name: "Bittium Faros™ & Cardiac Navigator – Holter Monitoring Systems",
    category: "holter-monitoring-systems",
    categoryName: "Holter Monitoring Systems",
    brand: "Bittium Corporation",
    country: "Finland",
    modelCode: "FAROS 360 / 180 • HOLTERPLUS • NAVIGATOR",
    badge: "Holter Monitoring Systems",
    subtitle: "Wearable Bittium FAROS ECG sensors paired with Cardiac Navigator analysis software for continuous ECG recording and arrhythmia monitoring.",
    shortDescription:
      "Wearable Bittium FAROS ECG sensors paired with Cardiac Navigator analysis software for continuous ECG recording and arrhythmia monitoring.",
    fullDescription:
      "Engineered in Finland by Bittium Corporation and registered under Altimi Biosciences Pvt Ltd., the Bittium Faros cardiac monitoring ecosystem combines ultra-lightweight 18g waterproof ECG recorders (Faros 360 & Faros 180) with seamless Bittium HolterPlus cloud remote monitoring and Bittium Cardiac Navigator clinical Holter ECG analysis software.",
    image: "/images/products/bittium-360-180.png",
    features: [
      "Wearable Bittium FAROS ECG sensors paired with Cardiac Navigator analysis software for continuous ECG recording and arrhythmia monitoring.",
      "Bittium Faros 360 (1 to 3 ECG channels) and Faros 180 (1 ECG channel) wearable sensors",
      "Bittium Cardiac Navigator™ arrhythmia-focused clinical Holter ECG analysis suite",
      "Bittium HolterPlus™ web-based remote cardiac monitoring platform",
      "IP67 waterproof protection and selectable sampling up to 1000 Hz (24-bit resolution)"
    ],
    specifications: [
      { label: "Manufacturer", value: "Bittium Corporation — Finland" },
      { label: "Category", value: "Holter Monitoring Systems" },
      { label: "Hardware Sensors", value: "Bittium Faros 360 (3-channel) & Bittium Faros 180 (1-channel)" },
      { label: "Weight & Dimensions", value: "18 grams • 48 mm × 29 mm × 13 mm" },
      { label: "Waterproof Protection", value: "IP67 (waterproof submersible)" },
      { label: "ECG Sampling Rate", value: "Up to 1000 Hz (adjustable, 24-bit ADC)" },
      { label: "3D Acceleration Sampling", value: "Up to 100 Hz (adjustable)" },
      { label: "Environmental Temperature", value: "Integrated sensor on Faros 360" },
      { label: "Memory Storage", value: "Up to 180 days continuous logging" },
      { label: "Battery Life", value: "Up to 8 days continuous operation (recharge ~1.5 hrs)" },
      { label: "Data Transfer", value: "Micro-USB download & wireless Bluetooth (range up to 100 m)" },
      { label: "Data Format", value: "EDF (European Data Format), EDF+, HL7" },
      { label: "Analysis Workstation", value: "Bittium Cardiac Navigator™ clinical Holter software" },
      { label: "Cloud Platform", value: "Bittium HolterPlus™ secure telecardiology portal" },
      { label: "Regulatory Status", value: "CE 0537 Medical Device Class IIa • FDA Cleared • DRAP Registered" }
    ],
    certifications: ["CE 0537 Medical Device", "FDA Cleared", "DRAP Registered"],
    brochureUrl: "/brochurs/Bittium_Cardiac_Navigator_2020-01.pdf",
    featured: true,
    models: [
      {
        id: "faros-360",
        slug: "faros-360",
        name: "Bittium Faros 360 (ECG Monitor)",
        modelCode: "FAROS 360",
        image: "/images/products/faros-360-excel.png",
        badge: "3-Channel ECG • 18g",
        shortDescription:
          "Advanced 3-channel wearable ECG, HRV, stress and recovery monitor for clinical Holter diagnostics and real-time online telemetry.",
        features: [
          "1, 2, or 3 ECG channels with up to 190 hours continuous logging",
          "Built-in 3D accelerometer and HRV tracking",
          "Offline logging + live Bluetooth transmission",
          "IP67 waterproof rating for uninterrupted showering & daily wear",
          "Sampling rates up to 1000 Hz with high-resolution 24-bit ADC"
        ],
        specifications: [
          { label: "ECG Channels", value: "Three or One channel ECG" },
          { label: "Dimensions & Weight", value: "48 mm × 29 mm × 13 mm • 18 grams" },
          { label: "IP Rating", value: "IP67 (waterproof)" },
          { label: "ECG Sampling Rate", value: "Up to 1000 Hz (adjustable)" },
          { label: "3D Acceleration Sampling", value: "Up to 100 Hz (adjustable)" },
          { label: "Environmental Temperature", value: "Yes (integrated sensor)" },
          { label: "Memory Capacity", value: "Up to 180 days (dependent on sampling rate & channels)" },
          { label: "Battery Life", value: "Up to 8 days continuous recording (recharge ~1.5 hours)" },
          { label: "Data Transfer & Format", value: "Micro-USB download & Bluetooth (range up to 100 m) • EDF" },
          { label: "Mounting Flexibility", value: "Disposable snap-on electrodes, FastFix™ patch, or 5-electrode cable set" }
        ]
      },
      {
        id: "faros-180",
        slug: "faros-180",
        name: "Bittium Faros 180 (ECG Monitor)",
        modelCode: "FAROS 180",
        image: "/images/products/faros-180-excel.png",
        badge: "1-Channel ECG • 18g",
        shortDescription:
          "Compact single-channel wearable Holter ECG monitor designed for effortless continuous arrhythmia & cardiac rhythm screening.",
        features: [
          "1-channel medical-grade ECG acquisition",
          "Continuous ambulatory cardiac rhythm recording",
          "Snap-on patch or lead-wire flexibility",
          "IP67 waterproof protection and lightweight 18g form factor",
          "Fast charging in ~1.5 hours via Micro-USB"
        ],
        specifications: [
          { label: "ECG Channels", value: "One channel ECG" },
          { label: "Dimensions & Weight", value: "48 mm × 29 mm × 13 mm • 18 grams" },
          { label: "IP Rating", value: "IP67 (waterproof)" },
          { label: "ECG Sampling Rate", value: "Up to 1000 Hz (adjustable)" },
          { label: "3D Acceleration Sampling", value: "Up to 100 Hz (adjustable)" },
          { label: "Memory Capacity", value: "Up to 180 days continuous logging" },
          { label: "Battery Life", value: "Up to 8 days continuous operation (recharge ~1.5 hours)" },
          { label: "Data Transfer & Format", value: "Micro-USB download & Bluetooth • EDF format" },
          { label: "Electrodes Package", value: "Snap-on electrode cable set or Heart Rate belt + Stingray adapter" }
        ]
      },
      {
        id: "bittium-cardiac-navigator",
        slug: "bittium-cardiac-navigator",
        name: "Bittium Cardiac Navigator™",
        modelCode: "CARDIAC-NAVIGATOR",
        image: "/images/products/cardiac-navigator-dashboard.jpg",
        gallery: [
          "/images/products/cardiac-navigator-dashboard.jpg",
          "/images/products/cardiac-navigator-strips.jpg"
        ],
        badge: "Clinical Holter Software",
        shortDescription:
          "Arrhythmia-focused clinical Holter ECG analysis workstation featuring advanced P-wave, AV block, QRS, QT/ST, HRV, pacemaker analytics, and automated reporting.",
        features: [
          "Arrhythmia-Focused Analysis: Rhythm-based analysis for faster and more efficient diagnostics.",
          "Advanced ECG Analytics: Comprehensive P-wave, AV block, QRS, QT/ST, HRV, and pacemaker analysis.",
          "Intelligent Data Editing: Automated noise detection, smart templates, and intuitive review tools.",
          "Efficient Reporting: Customizable templates, visual data presentation, and automated report summaries."
        ],
        specifications: [
          { label: "Analysis Focus", value: "Arrhythmia & Rhythm-Based Diagnostics" },
          { label: "ECG Analytics", value: "P-wave, AV block, QRS, QT/ST, HRV, Pacemaker" },
          { label: "Workflow", value: "Noise Detection, Smart Templates & Review" },
          { label: "Reporting", value: "Customizable Visual Templates & Summaries" }
        ]
      },
      {
        id: "bittium-holterplus",
        slug: "bittium-holterplus",
        name: "Bittium HolterPlus™ – Remote Cardiac Monitoring",
        modelCode: "HOLTERPLUS-RCM",
        image: "/images/products/holterplus-excel.png",
        badge: "Cloud Telecardiology",
        shortDescription:
          "Web-based remote cardiac monitoring platform enabling wireless transfer of Faros ECG measurements directly to clinicians for rapid reporting.",
        features: [
          "Web-based remote cardiac monitoring management dashboard",
          "Automated wireless transfer of ECG recordings via secure mobile gateway",
          "Real-time monitoring status & patient diary symptom logging",
          "Multi-clinic enterprise access with end-to-end encrypted telemetry"
        ],
        specifications: [
          { label: "Architecture", value: "Cloud-Based Web Portal + Android Gateway" },
          { label: "Sensor Support", value: "Bittium Faros 180 & Faros 360" },
          { label: "Data Formats", value: "EDF+, HL7 & Secure Cloud Reports" }
        ]
      }
    ]
  },
  {
    id: "and-abpm-monitor",
    slug: "and-abpm-monitor",
    name: "A&D Ambulatory Blood Pressure Monitor (TM-2440 / TM-2441)",
    category: "ambulatory-blood-pressure-monitoring",
    categoryName: "Ambulatory Blood Pressure Monitoring",
    brand: "A & D Company Limited",
    country: "Japan",
    modelCode: "TM-2440 / TM-2441",
    badge: "2 Models Available",
    subtitle: "Compact clinical 24-hour ambulatory blood pressure monitors manufactured in Japan",
    shortDescription:
      "Lightweight oscillometric 24-hour ambulatory blood pressure monitors by A&D Company Limited (Japan), offered in TM-2440 and TM-2441 models.",
    fullDescription:
      "Developed by A&D Company Limited (Japan) and registered under Altimi Biosciences Pvt Ltd., the TM-2440 and TM-2441 ambulatory blood pressure monitors (ABPM) deliver clinically validated 24-hour blood pressure profiling for hypertension diagnosis, nocturnal dipping assessment, and cardiovascular risk evaluation.",
    image: "/images/products/tm-2441.png",
    features: [
      "Clinically validated oscillometric blood pressure measurement (Japan)",
      "Available in TM-2440 (ultra-compact recorder) and TM-2441 (OLED + ECG/activity)",
      "Quiet cuff inflation for minimal disturbance during sleep monitoring",
      "High-capacity memory storing hundreds of timed blood pressure readings",
      "Dedicated PC clinical analysis & circadian blood pressure reporting"
    ],
    specifications: [
      { label: "Measurement Method", value: "Oscillometric measurement with semiconductor pressure sensor" },
      { label: "Pressure Range", value: "0 to 299 mmHg (Accuracy: ±3 mmHg)" },
      { label: "Pulse Range", value: "30 to 200 bpm (Accuracy: ±5%)" },
      { label: "Dimensions", value: "95 mm (L) × 66 mm (W) × 24.5 mm (H)" },
      { label: "Weight", value: "TM-2441: 135 g • TM-2440: 120 g (excluding batteries)" },
      { label: "Memory Storage", value: "Up to 600 datasets max" },
      { label: "Programmable Intervals", value: "24-hr cycle divided into up to 6 sections (intervals: 5, 10, 15, 20, 30, 60, 120 min)" },
      { label: "Power Supply", value: "2 × 1.5V AA (LR6 or Ni-MH 1900 mAh+) + ML2016 backup coin cell" },
      { label: "Data Interface", value: "Micro-USB (USB 1.1) & Bluetooth v4.1 BLE (SDK available)" },
      { label: "Ingress Protection", value: "IP22" },
      { label: "Clinical Protocol", value: "ISO 81060-2:2013 validated • ESH & BHS compliant" },
      { label: "Origin", value: "A&D Company, Ltd. — Tokyo, Japan" },
      { label: "Regulatory Status", value: "CE 0123 Medical Device • DRAP Registered" }
    ],
    certifications: ["CE Medical Mark", "ESH / BHS Validated", "DRAP Registered"],
    brochureUrl: "/brochurs/TM-2440-TM-2441-Ambulatory-Blood-Pressure-Monitor.pdf",
    featured: true,
    models: [
      {
        id: "tm-2440",
        slug: "tm-2440",
        name: "TM-2440 Ambulatory Blood Pressure Monitor",
        modelCode: "TM-2440",
        image: "/images/products/tm-2440.png",
        badge: "Compact ABPM",
        shortDescription:
          "Lightweight, streamlined 24-hour ambulatory blood pressure monitor engineered for maximum patient comfort during routine monitoring.",
        features: [
          "Ultra-compact, patient-friendly lightweight housing (120 g)",
          "OLED top status readout (96 × 39 pixels white characters)",
          "Irregular Heartbeat (IHB) detection algorithm",
          "Programmable measurement intervals with automatic micropump",
          "Micro-USB interface for rapid PC clinic software upload"
        ],
        specifications: [
          { label: "Dimensions & Weight", value: "95 (L) × 66 (W) × 24.5 (H) mm • 120 g (excl. batteries)" },
          { label: "Measurement Method", value: "Oscillometric method with semiconductor pressure sensor" },
          { label: "Display", value: "A-BPM: OLED, 96 × 39 pixels, white characters" },
          { label: "Pressure / Pulse Range", value: "Pressure: 0–299 mmHg (±3 mmHg) • Pulse: 30–200 bpm (±5%)" },
          { label: "Memory Capacity", value: "600 measurement datasets" },
          { label: "Power Source", value: "2 × AA batteries (Alkaline or Ni-MH) • Rated DC 2.4V – 3.0V" },
          { label: "Interface", value: "Micro-USB terminal (USB 1.1 compliant)" },
          { label: "Ingress Protection", value: "IP22" },
          { label: "Clinical Validation", value: "ISO 81060-2:2013 • ESH / BHS Validated" }
        ]
      },
      {
        id: "tm-2441",
        slug: "tm-2441",
        name: "TM-2441 Ambulatory Blood Pressure Monitor",
        modelCode: "TM-2441",
        image: "/images/products/tm-2441.png",
        badge: "Multi-Parameter ABPM",
        shortDescription:
          "Advanced ambulatory blood pressure monitor featuring dual front LCD display, temperature, atmospheric pressure & physical activity tracking.",
        features: [
          "Front-panel numeric LCD display showing SYS, DIA & Pulse for self-measurements",
          "Top OLED display (96 × 39 pixels) for ABPM status",
          "Built-in multi-sensor: Activity (accelerometer), Temperature & Atmospheric pressure",
          "5 self-measurement modes: OBP, AOBP, HBP, ANBP, ASBP with slide switch",
          "Bluetooth Ver 4.1 (BLE) wireless transmission & USB connectivity",
          "Oscillometric pulse waveform recording for irregular wave verification"
        ],
        specifications: [
          { label: "Dimensions & Weight", value: "95 (L) × 66 (W) × 24.5 (H) mm • 135 g (excl. batteries)" },
          { label: "Measurement Method", value: "Oscillometric method with semiconductor pressure sensor" },
          { label: "Display System", value: "Dual: Front LCD (40 × 50 mm) + Top OLED (96 × 39 pixels)" },
          { label: "Multi-Sensor Tracking", value: "Physical activity, Ambient temperature, Atmospheric pressure" },
          { label: "Self-Measurement Modes", value: "Office (OBP), Automated Office (AOBP), Home (HBP), Night (ANBP), Self (ASBP)" },
          { label: "Pressure / Pulse Range", value: "Pressure: 0–299 mmHg (±3 mmHg) • Pulse: 30–200 bpm (±5%)" },
          { label: "Memory Capacity", value: "600 measurement datasets" },
          { label: "Connectivity", value: "Micro-USB (USB 1.1) + Bluetooth v4.1 BLE (Wireless)" },
          { label: "Power Source", value: "2 × AA batteries (Alkaline or Ni-MH) • Rated DC 2.4V – 3.0V" },
          { label: "Clinical Validation", value: "ISO 81060-2:2013 • Hypertension Canada • CE 0123" }
        ]
      }
    ]
  },
  {
    id: "hetero-biosimilar-drugs",
    slug: "hetero-biosimilar-drugs",
    name: "Hetero Biosimilar Drugs (Pamera & Bevaas)",
    category: "medicines",
    categoryName: "Medicines",
    brand: "Hetero Biopharma Limited",
    country: "India",
    modelCode: "PAMERA 40 / BEVAAS",
    badge: "3 Formulations",
    subtitle: "Hospital biopharmaceutical monoclonal antibodies — Adalimumab & Bevacizumab",
    shortDescription:
      "Quality-assured biosimilar biologics by Hetero Biopharma Limited including Pamera 40 (Adalimumab), Bevaas 100, and Bevaas 400/16 (Bevacizumab).",
    fullDescription:
      "Altimi Biosciences Pvt Ltd. serves as the authorized registrant for Hetero Biopharma Limited's advanced biosimilar formulations in Pakistan. Maintained under strict 2°C to 8°C cold-chain warehousing and distribution, our biosimilar lineup supports tertiary hospital oncology, ophthalmology, and rheumatology departments.",
    image: "/images/products/pamera-40.png",
    features: [
      "Pamera 40 (Adalimumab) 40mg/0.8ml single-dose prefilled syringe",
      "Bevaas 100 (Bevacizumab) 100mg/4ml intravenous infusion concentrate",
      "Bevaas 400/16 (Bevacizumab) 400mg/16ml single-use vial",
      "Delivered under strictly validated 2°C to 8°C cold-chain logistics"
    ],
    specifications: [
      { label: "Manufacturer", value: "Hetero Biopharma Limited — India" },
      { label: "Category", value: "Medicines" },
      { label: "Active Molecules", value: "Adalimumab & Bevacizumab" },
      { label: "Storage Condition", value: "2°C to 8°C Refrigerated Cold Chain" },
      { label: "Presentation", value: "Prefilled Syringe & Sterile Infusion Vials" }
    ],
    certifications: ["DRAP Registered", "WHO-GMP Compliant", "2°C to 8°C Cold-Chain"],
    featured: false,
    models: [
      {
        id: "pamera-40",
        slug: "pamera-40",
        name: "Pamera 40 (Adalimumab)",
        modelCode: "PAMERA 40",
        image: "/images/products/pamera-40.png",
        badge: "40 mg / 0.8 ml",
        shortDescription:
          "Adalimumab 40mg/0.8ml solution for injection in a single-dose prefilled syringe for subcutaneous administration.",
        features: [
          "Single-dose prefilled syringe (40 mg / 0.8 ml)",
          "Recombinant human monoclonal antibody targeting TNF-alpha",
          "Cold-chain stabilized sterile solution"
        ],
        specifications: [
          { label: "Generic", value: "Adalimumab" },
          { label: "Strength", value: "40 mg / 0.8 ml" },
          { label: "Route", value: "Subcutaneous Injection" }
        ]
      },
      {
        id: "bevaas-100",
        slug: "bevaas-100",
        name: "Bevaas 100 (Bevacizumab)",
        modelCode: "BEVAAS 100",
        image: "/images/products/bevaas-100.png",
        badge: "100 mg / 4 ml",
        shortDescription:
          "Bevacizumab 100mg/4ml single-use vial concentrate for intravenous infusion after dilution.",
        features: [
          "100 mg / 4 ml concentrate vial for IV infusion",
          "Anti-VEGF recombinant humanized monoclonal antibody",
          "Validated cold-chain hospital supply"
        ],
        specifications: [
          { label: "Generic", value: "Bevacizumab" },
          { label: "Strength", value: "100 mg / 4 ml Vial" },
          { label: "Route", value: "Intravenous Infusion" }
        ]
      },
      {
        id: "bevaas-400",
        slug: "bevaas-400",
        name: "Bevaas 400/16 (Bevacizumab)",
        modelCode: "BEVAAS 400/16",
        image: "/images/products/bevaas-400.png",
        badge: "400 mg / 16 ml",
        shortDescription:
          "Bevacizumab 400mg/16ml single-use vial concentrate for high-volume oncology intravenous infusion protocols.",
        features: [
          "400 mg / 16 ml high-dose single-use sterile vial",
          "Anti-VEGF monoclonal antibody biosimilar",
          "Strict 2°C to 8°C cold-chain integrity"
        ],
        specifications: [
          { label: "Generic", value: "Bevacizumab" },
          { label: "Strength", value: "400 mg / 16 ml Vial" },
          { label: "Route", value: "Intravenous Infusion" }
        ]
      }
    ]
  },
  {
    id: "ultimate-prep-pads",
    slug: "ultimate-prep-pads",
    name: "Hongde Alcohol Pads",
    category: "hospital-consumables",
    categoryName: "Hospital Consumables",
    brand: "Anji Hongde Medical Products Co. Ltd.",
    country: "China",
    modelCode: "HONGDE-ALC-70",
    badge: "70% Isopropyl Alcohol",
    subtitle: "Sterile individually foil-wrapped 70% isopropyl alcohol antiseptic prep pads",
    shortDescription:
      "Clinical skin preparation swabs saturated with 70% Isopropyl Alcohol by Anji Hongde Medical Products Co. Ltd. for hygienic site disinfection.",
    fullDescription:
      "Manufactured by Anji Hongde Medical Products Co. Ltd. (China) and registered under Altimi Biosciences Pvt Ltd., these sterile alcohol pads feature soft lint-free non-woven fabric saturated with 70% v/v Isopropyl Alcohol USP. Individually sealed in airtight foil pouches for venipuncture, injections, and glucose testing.",
    image: "/images/products/alcohol-pads.png",
    features: [
      "Saturated with 70% v/v Isopropyl Alcohol for rapid skin antisepsis",
      "Soft, lint-free 2-ply non-woven medical pad",
      "Individually foil-sealed to prevent evaporation and drying",
      "Single-use sterile hygiene for injections & phlebotomy"
    ],
    specifications: [
      { label: "Manufacturer", value: "Anji Hongde Medical Products Co. Ltd. — China" },
      { label: "Category", value: "Hospital Consumables" },
      { label: "Active Solution", value: "70% v/v Isopropyl Alcohol" },
      { label: "Material", value: "Lint-Free Non-Woven Swab" },
      { label: "Packaging", value: "Individually Sealed Foil Pouches" }
    ],
    certifications: ["CE Marked", "ISO 13485", "DRAP Registered"],
    featured: false
  },
  {
    id: "disposable-underpads",
    slug: "disposable-underpads",
    name: "Dignity Underpads",
    category: "hospital-consumables",
    categoryName: "Hospital Consumables",
    brand: "Anji Hongde Medical Products Co. Ltd.",
    country: "China",
    modelCode: "HONGDE-UNDERPAD",
    badge: "Super Absorbent Core",
    subtitle: "Multi-layer disposable dignity underpads for ICU, maternity, and patient ward protection",
    shortDescription:
      "Heavy-duty waterproof disposable dignity underpads by Anji Hongde Medical Products Co. Ltd. offering rapid moisture locking and skin protection.",
    fullDescription:
      "Registered under Altimi Biosciences Pvt Ltd. and sourced from Anji Hongde Medical Products Co. Ltd. (China), our Dignity Underpads feature a soft hypoallergenic non-woven top sheet, super-absorbent fluff pulp + SAP polymer core, and waterproof PE backing film to safeguard mattresses and surgical beds.",
    image: "/images/products/underpads.png",
    features: [
      "Diamond-quilted surface rapidly channels liquid away from patient skin",
      "Fluff pulp + Super Absorbent Polymer (SAP) locks moisture as gel",
      "Leak-proof polyethylene backsheet protects bedding and examination tables",
      "Breathable, hypoallergenic & latex-free construction"
    ],
    specifications: [
      { label: "Manufacturer", value: "Anji Hongde Medical Products Co. Ltd. — China" },
      { label: "Category", value: "Hospital Consumables" },
      { label: "Dimensions", value: "60 x 90 cm (Standard Hospital Size)" },
      { label: "Absorption Core", value: "Virgin Fluff Pulp + Japanese SAP" },
      { label: "Backsheet", value: "Waterproof Non-Slip PE Film" }
    ],
    certifications: ["CE Certified", "ISO 13485", "DRAP Registered"],
    featured: false
  },
  {
    id: "sterile-surgical-gloves",
    slug: "sterile-surgical-gloves",
    name: "Sterile Latex Surgical Gloves Powder Free",
    category: "surgical-supplies",
    categoryName: "Surgical Supplies",
    brand: "Yangzhong Jinxiang Emulsion Products",
    country: "China",
    modelCode: "YJ-SURG-PF",
    badge: "Gamma Sterilized",
    subtitle: "Anatomical powder-free sterile latex surgical gloves for operating theaters",
    shortDescription:
      "Gamma-sterilized, powder-free natural latex surgical gloves by Yangzhong Jinxiang Emulsion Products engineered for tactile sensitivity and barrier safety.",
    fullDescription:
      "Registered under Altimi Biosciences Pvt Ltd. and manufactured by Yangzhong Jinxiang Emulsion Products, these sterile powder-free surgical gloves feature an anatomically curved hand-specific mold (Left & Right), micro-textured fingertips for firm wet/dry instrument handling, and beaded cuffs for secure sterile gowning.",
    image: "/images/products/surgical-gloves.png",
    features: [
      "100% Powder-free sterile latex eliminates post-operative starch granuloma risk",
      "Anatomically shaped curved fingers reduce hand fatigue during long surgeries",
      "Micro-textured palm and fingertips enhance precision surgical grip",
      "Individually packed in sterile peel-open left/right inner wallets"
    ],
    specifications: [
      { label: "Manufacturer", value: "Yangzhong Jinxiang Emulsion Products" },
      { label: "Category", value: "Surgical Supplies" },
      { label: "Material", value: "Natural Rubber Latex (Powder Free)" },
      { label: "Sterilization", value: "Gamma Irradiation" },
      { label: "Packaging", value: "1 Pair Sterile Peel-Pouch (Left & Right)" }
    ],
    certifications: ["ISO 13485", "EN 455 Compliant", "DRAP Registered"],
    featured: false
  }
];

export const productCategories = [
  { id: "all", name: "All Products", count: products.length },
  {
    id: "clinical-chemistry-analyzers",
    name: "Clinical Chemistry Analyzers",
    count: products.filter((p) => p.category === "clinical-chemistry-analyzers").length,
  },
  {
    id: "point-of-care-testing",
    name: "Point-of-Care Testing (POCT)",
    count: products.filter((p) => p.category === "point-of-care-testing").length,
  },
  {
    id: "holter-monitoring-systems",
    name: "Holter Monitoring Systems",
    count: products.filter((p) => p.category === "holter-monitoring-systems").length,
  },
  {
    id: "ambulatory-blood-pressure-monitoring",
    name: "Ambulatory Blood Pressure Monitoring",
    count: products.filter((p) => p.category === "ambulatory-blood-pressure-monitoring").length,
  },
  {
    id: "medicines",
    name: "Medicines",
    count: products.filter((p) => p.category === "medicines").length,
  },
  {
    id: "hospital-consumables",
    name: "Hospital Consumables",
    count: products.filter((p) => p.category === "hospital-consumables").length,
  },
  {
    id: "surgical-supplies",
    name: "Surgical Supplies",
    count: products.filter((p) => p.category === "surgical-supplies").length,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  const direct = products.find((p) => p.slug === slug || p.id === slug);
  if (direct) return direct;

  // Backward-compatible lookup if a direct model slug (e.g. rx-modena, bittium-holterplus, bittium-cardiac-navigator) is visited
  for (const parent of products) {
    const matchedModel = parent.models?.find(
      (m) => m.slug === slug || m.id === slug
    );
    if (matchedModel) {
      return parent;
    }
  }
  return undefined;
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
