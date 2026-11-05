import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions | Altimi Biosciences",
  description:
    "Commercial terms, equipment warranties, and supply conditions of Altimi Biosciences Pakistan.",
};

export default function TermsConditionsPage() {
  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container size="sm">
        <SectionHeading
          badge="Commercial Governance"
          title="Terms & Conditions"
          subtitle="Last updated: January 2026. Standard commercial conditions governing healthcare instrumentation, consumables distribution, and services."
          align="left"
          className="mb-12"
        />

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-md space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of Altimi Biosciences or submitting formal purchase orders, institutional clients, hospitals, diagnostic centers, and individual practitioners agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              2. Commercial Quotations & Proformas
            </h2>
            <p>
              Formal quotations issued by Altimi Biosciences remain valid for the period specified therein (typically 30 calendar days). Prices for imported instrumentation (such as Randox RX analyzers and Bittium monitors) are subject to foreign exchange rate stabilization, applicable customs tariffs, and sales tax regulations enforced in Pakistan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              3. Regulatory Compliance & DRAP Approvals
            </h2>
            <p>
              All diagnostic instrumentation, IVD reagents, and medical consumables supplied by Altimi Biosciences comply with registrations issued by the Drug Regulatory Authority of Pakistan (DRAP). The client agrees to use products strictly in accordance with manufacturer instructions and approved clinical indications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              4. Installation, Warranty & Technical Support
            </h2>
            <p>
              Instrumentation warranty coverage is contingent upon installation by authorized Altimi Biosciences biomedical engineers. Standard warranties cover manufacturing defects. Operating warranties do not cover damage arising from unconditioned electrical surges, unauthorized third-party servicing, or substandard water supply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              5. Delivery & Cold-Chain Acceptance
            </h2>
            <p>
              Temperature-sensitive reagents must be received and inspected immediately upon delivery. In the rare event of thermal breach or compromised cold-chain seals, the receiving party must document the included datalogger status and notify Altimi Biosciences within 24 hours of arrival.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-ink">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, with exclusive jurisdiction resting in the competent courts of Karachi.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

