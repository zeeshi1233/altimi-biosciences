export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Distribution & Logistics" | "Technical Support" | "Products & Warranty";
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "How is Altimi Biosciences different from House of Altimi?",
    answer: "Altimi Biosciences is a specialized division of House of Altimi, focused on the distribution of medical supplies, medical devices, and diagnostic analyzers. It aims to provide healthcare professionals and institutions with reliable medical technologies and solutions."
  },
  {
    category: "General",
    question: "Is Altimi Diagnostic Lab the same as Altimi Biosciences?",
    answer: "No. Both are separate divisions of House of Altimi with distinct areas of operation. Altimi Diagnostic Lab focuses on providing quality laboratory diagnostic testing services, while Altimi Biosciences specializes in the distribution of medical devices, supplies, and diagnostic analyzers."
  },
  {
    category: "General",
    question: "What medical sectors does Altimi Biosciences serve in Pakistan?",
    answer: "Altimi Biosciences is a premier nationwide distributor serving public and private tertiary care hospitals, diagnostic reference laboratories, military medical facilities, research institutes, and cardiology centers across Pakistan with diagnostic instrumentation, POCT systems, medical devices, and hospital supplies."
  },
  {
    category: "General",
    question: "Where is the Altimi Biosciences headquarters located?",
    answer: "Our head office and central warehousing logistics complex are strictly located in Karachi, Pakistan, from where we manage centralized healthcare dispatches, imports, and biomedical technical support nationwide."
  },
  {
    category: "Distribution & Logistics",
    question: "How do you ensure cold-chain integrity for temperature-sensitive reagents?",
    answer: "Our temperature-sensitive clinical chemistry reagents and diagnostic kits are preserved in validated 2°C–8°C cold rooms with 24/7 continuous IoT dataloggers and dual-redundancy power generation. Logistics dispatches utilize calibrated dry-ice and gel-pack thermal containers with real-time temperature tracking during transit across Pakistan."
  },
  {
    category: "Distribution & Logistics",
    question: "What is your standard delivery timeframe for hospital consumables in Karachi and upcountry?",
    answer: "For major tertiary facilities in Karachi, we offer same-day or next-morning dispatch for standing consumable orders. Upcountry dispatches across Pakistan typically take 24 to 48 hours via dedicated pharmaceutical cold-chain couriers."
  },
  {
    category: "Technical Support",
    question: "Do you provide biomedical engineering installation and on-site training?",
    answer: "Yes. Every instrument installation (such as the Randox RX Modena or RX Imola) is conducted by factory-trained, certified Altimi biomedical engineers. We conduct comprehensive multi-day operational and Quality Control (QC) workshops for lab technicians, pathologists, and biomedical staff."
  },
  {
    category: "Technical Support",
    question: "What is the warranty and Preventive Maintenance (PM) coverage?",
    answer: "All major diagnostic systems and medical devices come with standard manufacturer warranties along with tailored Annual Maintenance Contracts (AMC). Our SLA provides urgent breakdown response within 4 hours in Karachi and within 12 hours upcountry, supported by our local inventory of genuine OEM spare parts."
  },
  {
    category: "Products & Warranty",
    question: "Are all products registered with the Drug Regulatory Authority of Pakistan (DRAP)?",
    answer: "Yes, 100% of the diagnostic platforms, reagents, medical devices, and pharmaceuticals imported and distributed by Altimi Biosciences conform to DRAP registration guidelines, CE IVD compliance, and ISO 13485:2016 international standards."
  },
  {
    category: "Products & Warranty",
    question: "How can my healthcare facility request a formal quotation or tender documentation?",
    answer: "You can submit an inquiry directly through our online quote builder, contact our sales department at +92 21 35344476, or email tender specifications to info@altimibiosciences.com. Our institutional sales team typically provides formal commercial proposals within 24 hours."
  }
];

