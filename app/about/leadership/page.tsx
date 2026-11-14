import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  Globe2,
  GraduationCap,
  Activity,
  ShieldCheck,
  Award,
  CheckCircle2,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";

export const metadata: Metadata = {
  title: "Executive Leadership & Governance | Altimi Biosciences",
  description:
    "Meet Dr. Fazlullah Pechuho (CEO & Managing Director), Dr. Khalil Memon, and Sir Najam-ul-Saqib Siddique (General Manager), steering Altimi Biosciences in clinical diagnostic excellence and healthcare technology.",
};

export default function LeadershipPage() {
  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-muted">About Us</span>
          <span>/</span>
          <span className="text-primary font-bold">Leadership</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            Governance &amp; Executive Board
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight leading-[1.12]">
            Visionary Healthcare Leadership
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-4">
            Backed by decades of public health governance, medical doctorates from top-tier institutions, and federal civil administration expertise to deliver authenticated diagnostic solutions across Pakistan.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* LEADER 1: DR. FAZLULLAH PECHUHO */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-fazlullah-pechuho.jpeg"
                    alt="Dr. Fazlullah Pechuho - CEO & Managing Director"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio Details Column (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
                    Altimi Biosciences (Private) Limited
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Fazlullah Pechuho
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-primary mt-1">
                    CEO &amp; Managing Director | Former Secretary Health, Government of Sindh
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Dr. Fazlullah Pechuho</strong> envisaged reimagining the concepts of Health Services, Medicines, and Medical Devices delivery at their best; hence the incorporation of <strong className="text-primary font-bold">ALTIMI Biosciences (Private) Limited</strong> took place to achieve these goals.
                </p>

                <p className="text-sm text-muted leading-relaxed">
                  Dr. Fazlullah Pechuho brings to ALTIMI more than <strong className="text-ink">30 years of experience</strong> in Health Services, Education, and Administration disciplines acquired while being at Senior Management levels during his outstanding career.
                </p>

                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold text-ink flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Distinguished Public Service &amp; Executive Portfolio</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before ALTIMI, Dr. Fazlullah Pechuho has served as:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Secretary Health (Government of Sindh)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Secretary Education (Government of Sindh)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Secretary Finance (Government of Sindh)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Secretary Communication &amp; Works (GoS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Director Finance (Trade Development Authority)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Chief Financial Officer (Civil Aviation Authority)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* LEADER 2: DR. KHALIL MEMON */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-br-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Bio Details Column (8 cols) */}
              <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary-dark border border-secondary/20 mb-2">
                    Global Health &amp; Public Policy
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Khalil Memon
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-secondary-dark mt-1">
                    Medical Doctor &amp; Public Health Strategist | CEO, EIK Healthcare Services, Boston, USA
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Dr. Khalil Memon</strong> is a Medical Doctor with an advanced degree in <strong className="text-primary font-semibold">Public Health from Harvard/SPH, Boston, USA</strong>.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Holds the portfolio of <strong>CEO of EIK Healthcare Services, Boston, USA</strong>, steering international healthcare quality standards.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Provides healthcare services to the <strong>United States Government programs under Medicare and Medicaid</strong>.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Actively involved in international business development and commercial healthcare strategy at EIK Healthcare Services.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Engaged in extensive philanthropic programs, clinical training initiatives, and healthcare access services across Pakistan.
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center order-1 lg:order-2">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-khalil-memon.jpeg"
                    alt="Dr. Khalil Memon"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* LEADER 3: SIR NAJAM-UL-SAQIB SIDDIQUE (GENERAL MANAGER) */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.25}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/najam.jpg"
                    alt="Sir Najam-ul-Saqib Siddique - General Manager"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio Details Column (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
                    Executive Administration &amp; Operations
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Sir Najam-ul-Saqib Siddique
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-primary mt-1">
                    General Manager, Altimi Biosciences
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Sir Najam-ul-Saqib Siddique</strong> holds an <strong className="text-primary font-semibold">MSc in Geology</strong> and an <strong className="text-primary font-semibold">MA in International Relations</strong> from the University of Karachi.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  He has an extensive professional background in the <strong className="text-ink">Federal Government Civil Services</strong>. Following his retirement, he continued contributing to the social welfare and education sectors through his association with organizations including <strong className="text-ink">Akhuwat</strong>, non-governmental organizations (NGOs), and <strong className="text-ink">NJV School</strong>.
                </p>

                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold text-ink flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-primary" />
                    <span>Key Qualifications &amp; Institutional Engagements</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>MSc in Geology (University of Karachi)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>MA in International Relations (UoK)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Federal Government Civil Services Veteran</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Social Welfare Leadership &amp; Akhuwat Association</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* ========================================================================= */}
      {/* VISION & MISSION (FULL-BLEED OFFICIAL STATEMENTS) */}
      {/* ========================================================================= */}
      <VisionMissionSection />

      <Container>
        {/* Bottom Contact / Inquiries Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden mt-12">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/10 mb-2">
              Executive Office Inquiries
            </span>
            <h3 className="text-2xl font-bold font-heading">
              Partner With Altimi Biosciences
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              For institutional public-private partnerships, hospital instrumentation procurement, and healthcare programs in Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
            >
              Contact Leadership Office
            </Button>
            <Button
              href="/about/distribution"
              variant="glass"
              size="md"
              className="focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              Distribution Network
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
