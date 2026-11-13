import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Altimi Biosciences",
  description:
    "Privacy Policy and data governance standards of Altimi Biosciences Pakistan.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container size="sm">
        <SectionHeading
          badge="Legal Compliance"
          title="Privacy Policy"
          subtitle="Last updated: January 2026. How Altimi Biosciences collects, safeguards, and utilizes institutional and clinical data."
          align="left"
          className="mb-12"
        />

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-md space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              1. Overview & Commitment
            </h2>
            <p>
              Altimi Biosciences (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered in Karachi, Pakistan, is committed to safeguarding the privacy and confidentiality of our healthcare clients, hospital procurement officers, medical practitioners, and visitors to our digital platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our website, request quotations, or register for biomedical workshops, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contact details: Name, professional designation, institutional affiliation, hospital address, official email, and contact telephone number.</li>
              <li>Inquiry parameters: Specific analyzer models (e.g., RX Modena, RX Imola), reagent test volumes, and tender requirements.</li>
              <li>Technical diagnostics: Anonymized browser information, IP address, and site usage metrics to ensure digital security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              3. Use of Information
            </h2>
            <p>
              Collected information is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Process formal commercial quotations, tenders, and product documentation requests.</li>
              <li>Facilitate biomedical on-site preventive maintenance and engineer dispatch.</li>
              <li>Communicate critical DRAP regulatory notices, lot recalls, or manufacturer safety bulletins.</li>
              <li>Comply with federal and provincial healthcare laws of Pakistan.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              4. Data Protection & Confidentiality
            </h2>
            <p>
              We implement industry-standard AES-256 encryption and secure server environments. We do not sell, rent, or trade your institutional or personal data to any unauthorized commercial third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              5. Contact Our Data Officer
            </h2>
            <p>
              For any questions regarding our data practices or to request data rectification, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-surface border border-slate-100 text-xs">
              <p className="font-bold text-ink">Altimi Biosciences Corporate Affairs</p>
              <p>Email: info@altimibiosciences.com</p>
              <p>Phone: +92 21 35344476</p>
              <p>Karachi, Sindh, Pakistan</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

