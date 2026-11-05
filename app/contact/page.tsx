import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactMapCommandCenter } from "@/components/sections/ContactMapCommandCenter";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Altimi Biosciences | Karachi Headquarters Pakistan",
  description:
    "Get in touch with Altimi Biosciences in Karachi, Pakistan. Contact details, institutional sales inquiries, biomedical support, and tender submissions.",
};

const departments = [
  {
    name: "Institutional Sales & Diagnostics",
    email: "sales@altimibiosciences.com",
    phone: "+92 21 35344476 (Ext. 101)",
    desc: "Inquiries regarding Randox RX Modena, RX Imola, and hospital chemistry instrumentation.",
  },
  {
    name: "Biomedical Engineering & Support",
    email: "support@altimibiosciences.com",
    phone: "+92 21 35344476 (Ext. 104)",
    desc: "Preventive maintenance, 24/7 emergency repair SLA, and certified OEM spare parts.",
  },
  {
    name: "Tenders & Public Health Procurement",
    email: "tenders@altimibiosciences.com",
    phone: "+92 21 35344476 (Ext. 108)",
    desc: "Government tenders, military medical procurement, and NGO health program supplies.",
  },
  {
    name: "Cold-Chain Logistics & Dispatch",
    email: "logistics@altimibiosciences.com",
    phone: "+92 21 35344476 (Ext. 102)",
    desc: "Delivery tracking, temperature sensor records, and urgent dispatch coordination.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Top Banner */}
      <div className="bg-ink text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10 text-center">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">
            Altimi Biosciences Pakistan
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading mt-2 mb-4">
            Connect With Our Diagnostic Specialists
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Headquartered in Karachi with regional representation across Lahore, Islamabad, and nationwide medical hubs.
          </p>
        </Container>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Departments Directory & Physical Location */}
      <div className="py-16 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-secondary-dark uppercase tracking-wider">
              Departmental Routing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
              Direct Department Contacts
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Reach the exact team responsible for your clinical, logistical, or procurement requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-slate-200/80 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 font-bold text-base font-heading text-ink">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>{dept.name}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {dept.desc}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                  <a
                    href={`mailto:${dept.email}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {dept.email}
                  </a>
                  <span className="text-slate-600 font-medium">{dept.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Command Center */}
          <ContactMapCommandCenter />
        </Container>
      </div>
    </div>
  );
}

