import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "randox-rx-series",
    slug: "randox-rx-series",
    name: "Randox RX Series – Chemistry Analyzer",
    category: "chemistry-analyzer",
    categoryName: "Chemistry Analyzer",
    brand: "Randox Laboratories",
    country: "United Kingdom",
    modelCode: "RX 4900 / RX 9000",
    badge: "2 Models Available",
    subtitle: "High-throughput automated clinical chemistry analyzers (RX 4900 & RX 9000)",
    shortDescription:
      "Automated clinical chemistry analyzers from Randox Laboratories ranging from 400 photometric tests/hr (RX 4900) up to 1,200 tests/hr with ISE (RX 9000).",
    fullDescription:
      "The Randox RX Series combines mid-to-high throughput precision for hospital and reference laboratories in Pakistan. Registered under Altimi Biosciences Pvt Ltd., the series features two flagship configurations — the RX 4900 (RX Imola) and the RX 9000 (RX Modena) — delivering routine chemistries, specific proteins, lipids, therapeutic drug monitoring, and direct HbA1c testing on unified automated platforms.",
    image: "/images/products/rx-9000.png",
    features: [
      "Available in RX 4900 (400 photometric + 240 ISE tests/hr) and RX 9000 (800 photometric, 1,200 incl. ISE tests/hr)",
      "Direct HbA1c whole blood testing without manual pre-treatment",
      "Consolidated routine chemistry, specific protein, lipid, and STAT workflows",
      "Cooled reagent carousel maintaining 2°C to 8°C onboard stability",
      "Permanent Pyrex cuvettes with automated multi-stage wash station",
      "Bidirectional LIS/HIS hospital integration"
    ],
    specifications: [
      { label: "RX 4900 Throughput", value: "400 photometric + 240 ISE tests/hour" },
      { label: "RX 9000 Throughput", value: "800 photometric, 1,200 tests/hour incl. ISE" },
      { label: "Test Principles", value: "Photometry, Turbidimetry, Direct Potentiometry (ISE)" },
      { label: "Sample Types", value: "Serum, Plasma, Urine, CSF, Whole Blood (HbA1c)" },
      { label: "Reagent Cooling", value: "2°C to 8°C Onboard Stability" },
      { label: "Origin", value: "Randox Laboratories — United Kingdom" }
    ],
    certifications: ["ISO 13485:2016", "CE IVD Mark", "DRAP Registered"],
    brochureUrl: "/brochures/randox-rx-modena-brochure.pdf",
    featured: true,
    models: [
      {
        id: "rx-9000",
        slug: "rx-modena",
        name: "Randox RX 9000 (RX Modena)",
        modelCode: "RX 9000 / RX Modena",
        image: "/images/products/rx-9000.png",
        badge: "1,200 Tests / Hr",
        shortDescription:
          "High-throughput flagship floor-standing analyzer delivering 1,200 tests/hour including ISE (800 photometric tests/hour) with direct HbA1c testing.",
        features: [
          "1,200 tests per hour including ISE (800 photometric tests per hour)",
          "Dedicated direct HbA1c testing without manual pre-treatment",
          "Up to 100 cooled reagent positions at 2°C to 8°C",
          "150 continuous sample loading positions with priority STAT interrupt"
        ],
        specifications: [
          { label: "Total Throughput", value: "1,200 tests/hour incl. ISE" },
          { label: "Photometric Rate", value: "800 photometric tests/hour" },
          { label: "Sample Positions", value: "150 continuous with STAT" },
          { label: "Reagent Positions", value: "100 cooled positions" }
        ]
      },
      {
        id: "rx-4900",
        slug: "rx-imola",
        name: "Randox RX 4900 (RX Imola)",
        modelCode: "RX 4900 / RX Imola",
        image: "/images/products/rx-4900.png",
        badge: "400 + 240 ISE / Hr",
        shortDescription:
          "Compact high-efficiency benchtop chemistry analyzer performing 400 photometric tests/hour and 240 ISE tests/hour for medium-to-high throughput labs.",
        features: [
          "400 photometric tests per hour + 240 ISE tests per hour",
          "60 cooled reagent positions and STAT emergency sample capability",
          "Reusable permanent Pyrex glass cuvettes reducing consumable cost",
          "Low water consumption (~18 L/hour)"
        ],
        specifications: [
          { label: "Photometric Rate", value: "400 photometric tests/hour" },
          { label: "ISE Throughput", value: "240 ISE tests/hour" },
          { label: "Cuvettes", value: "72 Reusable Pyrex Glass" },
          { label: "Reagent Positions", value: "60 cooled positions" }
        ]
      }
    ]
  },
  {
    id: "bosch-vivalytic",
    slug: "bosch-vivalytic",
    name: "Bosch Vivalytic – All-in-One Molecular Analyzer",
    category: "molecular-analyzer",
    categoryName: "Molecular Analyzer",
    brand: "Randox Laboratories / Bosch GmbH",
    country: "Germany (Bosch GmbH)",
    modelCode: "VIVALYTIC-POC",
    badge: "Molecular Solution",
    subtitle: "The all-in-one closed cartridge PCR molecular diagnostics platform",
    shortDescription:
      "Fully automated, closed-cartridge point-of-care PCR molecular analyzer by Bosch GmbH & Randox Laboratories for rapid infectious disease & panel testing.",
    fullDescription:
      "Bosch Vivalytic is a universal, all-in-one molecular diagnostic platform uniting sample preparation, PCR amplification, and microfluidic microarray detection inside a sealed single-use test cartridge. Built by Bosch GmbH (Germany) in partnership with Randox Laboratories and registered under Altimi Biosciences Pvt Ltd., it requires minimal lab infrastructure while delivering laboratory-accurate molecular results.",
    image: "/images/products/bosch-vivalytic.jpeg",
    features: [
      "All-in-one closed PCR cartridge workflow: sample-in to result-out",
      "Eliminates manual nucleic acid extraction and pipetting steps",
      "Multiplex & singleplex assay support (respiratory, STI, bacterial panels)",
      "Intuitive touchscreen operation with automated barcode tracking",
      "Compact benchtop footprint with minimal contamination risk"
    ],
    specifications: [
      { label: "Technology", value: "Automated Real-Time PCR & Microarray" },
      { label: "Sample Type", value: "Swabs, Sputum, Whole Blood (Assay Dependent)" },
      { label: "Workflow", value: "Fully Automated Closed Cartridge" },
      { label: "Manufacturer", value: "Bosch GmbH (Germany) / Randox" },
      { label: "Connectivity", value: "HL7 / LIS / Wi-Fi / Ethernet" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "DRAP Registered"],
    featured: true
  },
  {
    id: "point-of-care-testing",
    slug: "point-of-care-testing",
    name: "QuikRead go® – Diagnostic Kits & Instrument",
    category: "diagnostic-kits",
    categoryName: "Diagnostic Kits - Human Diagnostics (Rapid Test)",
    brand: "Aidian Oy",
    country: "Finland",
    modelCode: "QUIKREAD-GO-SERIES",
    badge: "3 Models / Assays",
    subtitle: "Compact portable POCT analyzer with QuikRead go easy CRP & HbA1c rapid diagnostic kits",
    shortDescription:
      "The Aidian QuikRead go System unites a compact photometric/turbidimetric POCT analyzer with QuikRead go easy CRP and QuikRead go HbA1c rapid test kits.",
    fullDescription:
      "Manufactured by Aidian Oy (Finland) and registered under Altimi Biosciences Pvt Ltd., the QuikRead go platform combines photometric and turbidimetric measurement technologies inside an intuitive touchscreen POCT analyzer. Together with QuikRead go easy CRP and QuikRead go HbA1c ready-to-use reagent kits, clinicians obtain rapid quantitative diagnostic answers within minutes in clinics, primary healthcare, and clinical labs.",
    image: "/images/products/quikread-go.webp",
    features: [
      "QuikRead go Instrument combining photometric & turbidimetric measurement",
      "QuikRead go easy CRP for quantitative C-Reactive Protein in whole blood, serum, or plasma",
      "QuikRead go HbA1c for standardized whole-blood glycated hemoglobin monitoring",
      "Intuitive touchscreen interface with automated step-by-step test processing",
      "Minimal hands-on preparation using pre-filled reagent cuvettes"
    ],
    specifications: [
      { label: "Origin", value: "Aidian Oy — Finland" },
      { label: "Measurement Principle", value: "Photometric & Turbidimetric" },
      { label: "Assay Kits", value: "QuikRead go easy CRP, QuikRead go HbA1c" },
      { label: "Sample Material", value: "Capillary/Venous Whole Blood, Serum, Plasma" },
      { label: "Connectivity", value: "LIS / HIS / USB / Ethernet" }
    ],
    certifications: ["CE IVD Mark", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochures/altimi-poct-systems.pdf",
    featured: true,
    models: [
      {
        id: "quikread-instrument",
        slug: "quikread-go-instrument",
        name: "QuikRead go® Instrument",
        modelCode: "QRG-ANALYZER",
        image: "/images/products/quikread-go.webp",
        badge: "POCT Analyzer",
        shortDescription:
          "Compact, portable point-of-care analyzer with photometric and turbidimetric measurement technologies, touchscreen UI, and automated test processing.",
        features: [
          "Photometric & turbidimetric dual measurement optics",
          "Intuitive touchscreen workflow with automatic calibration",
          "LIS/HIS connectivity and compact portable footprint"
        ],
        specifications: [
          { label: "Device Type", value: "Portable POCT Analyzer" },
          { label: "Optics", value: "Photometric & Turbidimetric" },
          { label: "Display", value: "Interactive Color Touchscreen" }
        ]
      },
      {
        id: "quikread-easy-crp",
        slug: "quikread-go-easy-crp",
        name: "QuikRead go® easy CRP",
        modelCode: "QRG-EASY-CRP",
        image: "/images/products/quikread-easy-crp.png",
        badge: "Rapid CRP Kit",
        shortDescription:
          "Rapid quantitative determination of C-Reactive Protein (CRP) in whole blood, serum, or plasma for infection & inflammation assessment.",
        features: [
          "Quantitative CRP result in minutes directly at point of care",
          "10 µL fingertip capillary or venous whole blood, serum, or plasma",
          "Ready-to-use one-step sample collector cuvettes"
        ],
        specifications: [
          { label: "Analyte", value: "C-Reactive Protein (CRP)" },
          { label: "Sample Size", value: "10 µL Whole Blood / Serum / Plasma" },
          { label: "Kit Compatibility", value: "QuikRead go® Instrument" }
        ]
      },
      {
        id: "quikread-hba1c",
        slug: "quikread-go-hba1c",
        name: "QuikRead go® HbA1c",
        modelCode: "QRG-HBA1C",
        image: "/images/products/quikread-hba1c.png",
        badge: "Diabetes Assay Kit",
        shortDescription:
          "IFCC-standardized quantitative HbA1c test kit for diabetes screening and long-term glycemic monitoring using fingerprick whole blood.",
        features: [
          "Reliable quantitative HbA1c results within minutes during patient consultation",
          "IFCC and NGSP standardized performance",
          "Simple fingerprick capillary whole-blood sampling"
        ],
        specifications: [
          { label: "Analyte", value: "Hemoglobin A1c (HbA1c)" },
          { label: "Standardization", value: "IFCC / NGSP Certified" },
          { label: "Sample", value: "Whole Blood (Capillary / Venous)" }
        ]
      }
    ]
  },
  {
    id: "faros-360-ecg",
    slug: "faros-360-ecg",
    name: "Bittium Faros™ – Cardiac Monitoring Ecosystem",
    category: "cardiac-monitors",
    categoryName: "Cardiac Monitors",
    brand: "Bittium Corporation",
    country: "Finland",
    modelCode: "FAROS 360 / 180 • HOLTERPLUS • NAVIGATOR",
    badge: "4 Models & Solutions",
    subtitle: "Wearable ECG sensors, remote HolterPlus cloud telemetry, and Cardiac Navigator analysis software",
    shortDescription:
      "Complete cardiac diagnostics suite by Bittium Corporation (Finland) featuring Faros 360, Faros 180, HolterPlus remote monitoring, and Cardiac Navigator software.",
    fullDescription:
      "Engineered in Finland by Bittium Corporation and registered under Altimi Biosciences Pvt Ltd., the Bittium Faros cardiac monitoring ecosystem combines ultra-lightweight 18g waterproof ECG recorders (Faros 360 & Faros 180) with seamless Bittium HolterPlus cloud remote monitoring and Bittium Cardiac Navigator clinical Holter ECG analysis software.",
    image: "/images/products/bittium-360-180.png",
    features: [
      "Bittium Faros 360 (1 to 3 ECG channels) and Faros 180 (1 ECG channel) wearable sensors",
      "Bittium HolterPlus™ web-based remote cardiac monitoring platform",
      "Bittium Cardiac Navigator™ arrhythmia-focused clinical Holter ECG analysis suite",
      "IP67 waterproof protection and selectable sampling up to 1000 Hz (24-bit resolution)",
      "Supports offline microSD logging, Bluetooth telemetry, and automated clinical PDF reporting"
    ],
    specifications: [
      { label: "Manufacturer", value: "Bittium Corporation — Finland" },
      { label: "Hardware Models", value: "Bittium Faros 360 & Bittium Faros 180 (18g)" },
      { label: "Remote Platform", value: "Bittium HolterPlus™ Cloud Telemetry" },
      { label: "Analysis Software", value: "Bittium Cardiac Navigator™ Clinical Suite" },
      { label: "Protection & Rate", value: "IP67 Waterproof • Up to 1000 Hz (24-bit ADC)" }
    ],
    certifications: ["CE 0537 Medical Device", "FDA Cleared", "DRAP Registered"],
    brochureUrl: "/brochures/bittium-faros-360.pdf",
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
          "Offline logging + live Bluetooth transmission"
        ],
        specifications: [
          { label: "Channels", value: "Up to 3 ECG Channels" },
          { label: "Battery Life", value: "Up to 190 hours (~8 days)" },
          { label: "Weight", value: "18g" }
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
          "Snap-on patch or lead-wire flexibility"
        ],
        specifications: [
          { label: "Channels", value: "1 ECG Channel" },
          { label: "Design", value: "Waterproof IP67 Wearable" },
          { label: "Weight", value: "18g" }
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
      }
    ]
  },
  {
    id: "and-abpm-monitor",
    slug: "and-abpm-monitor",
    name: "A&D Ambulatory Blood Pressure Monitor (TM-2440 / TM-2441)",
    category: "automatic-blood-pressure-monitor",
    categoryName: "Automatic Blood Pressure Monitor",
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
      { label: "Manufacturer", value: "A & D Company Limited — Japan" },
      { label: "Measurement Range", value: "Pressure 0–299 mmHg | Pulse 30–200 bpm" },
      { label: "Models", value: "TM-2440 & TM-2441" },
      { label: "Power Source", value: "2 x AA Alkaline / Ni-MH Batteries" }
    ],
    certifications: ["CE Medical Mark", "ESH / BHS Validated", "DRAP Registered"],
    brochureUrl: "/brochures/and-tm-244x.pdf",
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
          "Ultra-compact, patient-friendly lightweight housing",
          "OLED top status readout & programmable intervals",
          "USB interface for rapid clinic PC upload"
        ],
        specifications: [
          { label: "Model", value: "TM-2440" },
          { label: "Origin", value: "Japan" },
          { label: "Type", value: "24-Hour Ambulatory BP Monitor" }
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
          "Front-panel numeric LCD display showing SYS, DIA & Pulse",
          "Built-in accelerometer & ambient sensor logging",
          "Selectable automatic measurement schedules for day and night"
        ],
        specifications: [
          { label: "Model", value: "TM-2441" },
          { label: "Origin", value: "Japan" },
          { label: "Display", value: "Front Numeric LCD + Activity Sensors" }
        ]
      }
    ]
  },
  {
    id: "hetero-biosimilar-drugs",
    slug: "hetero-biosimilar-drugs",
    name: "Hetero Biosimilar Drugs (Pamera & Bevaas)",
    category: "biosimilar-drugs",
    categoryName: "Biosimilar Drugs",
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
    category: "alcohol-pads",
    categoryName: "Alcohol Pads",
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
      { label: "Active Solution", value: "70% v/v Isopropyl Alcohol" },
      { label: "Material", value: "Lint-Free Non-Woven Swab" },
      { label: "Packaging", value: "Individually Sealed Foil Pouches" }
    ],
    certifications: ["CE Marked", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochures/hongde-prep-pads.pdf",
    featured: false
  },
  {
    id: "disposable-underpads",
    slug: "disposable-underpads",
    name: "Dignity Underpads",
    category: "dignity-underpads",
    categoryName: "Dignity Underpads",
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
      { label: "Dimensions", value: "60 x 90 cm (Standard Hospital Size)" },
      { label: "Absorption Core", value: "Virgin Fluff Pulp + Japanese SAP" },
      { label: "Backsheet", value: "Waterproof Non-Slip PE Film" }
    ],
    certifications: ["CE Certified", "ISO 13485", "DRAP Registered"],
    brochureUrl: "/brochures/hongde-dignity-underpads.pdf",
    featured: false
  },
  {
    id: "sterile-surgical-gloves",
    slug: "sterile-surgical-gloves",
    name: "Sterile Latex Surgical Gloves Powder Free",
    category: "surgical-gloves",
    categoryName: "Surgical Gloves",
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
    id: "chemistry-analyzer",
    name: "Chemistry Analyzer",
    count: products.filter((p) => p.category === "chemistry-analyzer").length,
  },
  {
    id: "molecular-analyzer",
    name: "Molecular Analyzer",
    count: products.filter((p) => p.category === "molecular-analyzer").length,
  },
  {
    id: "diagnostic-kits",
    name: "Diagnostic Kits - Human Diagnostics (Rapid Test)",
    count: products.filter((p) => p.category === "diagnostic-kits").length,
  },
  {
    id: "cardiac-monitors",
    name: "Cardiac Monitors",
    count: products.filter((p) => p.category === "cardiac-monitors").length,
  },
  {
    id: "automatic-blood-pressure-monitor",
    name: "Automatic Blood Pressure Monitor",
    count: products.filter((p) => p.category === "automatic-blood-pressure-monitor").length,
  },
  {
    id: "biosimilar-drugs",
    name: "Biosimilar Drugs",
    count: products.filter((p) => p.category === "biosimilar-drugs").length,
  },
  {
    id: "alcohol-pads",
    name: "Alcohol Pads",
    count: products.filter((p) => p.category === "alcohol-pads").length,
  },
  {
    id: "dignity-underpads",
    name: "Dignity Underpads",
    count: products.filter((p) => p.category === "dignity-underpads").length,
  },
  {
    id: "surgical-gloves",
    name: "Surgical Gloves",
    count: products.filter((p) => p.category === "surgical-gloves").length,
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
