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
  HeartPulse,
  Heart,
  Landmark,
  School,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";

export const metadata: Metadata = {
  title: "Executive Leadership & Governance | Altimi Biosciences",
  description:
    "Meet Dr. Fazlullah Pechuho (CEO & Managing Director), Dr. Khalil Memon (Director), and Najam-ul-Saqib Siddiqi (General Manager), steering Altimi Biosciences in clinical diagnostic excellence and healthcare technology.",
  openGraph: {
    title: "Executive Leadership & Governance | Altimi Biosciences",
    description:
      "Meet Dr. Fazlullah Pechuho (CEO & Managing Director), Dr. Khalil Memon (Director), and Najam-ul-Saqib Siddiqi (General Manager), steering Altimi Biosciences in clinical diagnostic excellence and healthcare technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Leadership & Governance | Altimi Biosciences",
    description:
      "Meet Dr. Fazlullah Pechuho (CEO & Managing Director), Dr. Khalil Memon (Director), and Najam-ul-Saqib Siddiqi (General Manager), steering Altimi Biosciences in clinical diagnostic excellence and healthcare technology.",
  },
};

const healthAchievements = [
  {
    organization: "World Health Organization",
    tag: "Disease Eradication",
    icon: Globe2,
    color: "from-sky-500/15 to-blue-500/5",
    iconColor: "text-sky-600 bg-sky-100",
    description: "Liaison with WHO for eradication of life-threatening diseases.",
  },
  {
    organization: "Cardiac Chest Pain Units",
    tag: "Emergency Care",
    icon: HeartPulse,
    color: "from-rose-500/15 to-red-500/5",
    iconColor: "text-rose-600 bg-rose-100",
    description: "Establishment of Cardiac Chest Pain Units all over Sindh Province.",
  },
  {
    organization: "Pediatric Emergency Centers",
    tag: "Child Healthcare",
    icon: Activity,
    color: "from-emerald-500/15 to-teal-500/5",
    iconColor: "text-emerald-600 bg-emerald-100",
    description:
      "Establishment of children/pediatric emergency centers under Public Private Partnership mode with the help and under the direct supervision of Child Life Foundation (CLF).",
  },
  {
    organization: "Cardiovascular Diseases Satellite Units",
    tag: "Cardiology Network",
    icon: Heart,
    color: "from-indigo-500/15 to-blue-500/5",
    iconColor: "text-indigo-600 bg-indigo-100",
    description:
      "Establishment of satellite units of NICVD all over Sindh to provide Angiography, including Angioplasty, and other cardiovascular services free of cost to the people of Sindh, Pakistan.",
  },
  {
    organization: "World Bank",
    tag: "Health Reform",
    icon: Landmark,
    color: "from-blue-500/15 to-cyan-500/5",
    iconColor: "text-blue-600 bg-blue-100",
    description:
      "Managed the World Bank sponsored Sindh Education Reform Program (SERP), including Nutrition Support Program, National Immunization Support and Lady Health Worker Program.",
  },
  {
    organization: "Asian Development Bank",
    tag: "Strategic PPP",
    icon: Building2,
    color: "from-amber-500/15 to-orange-500/5",
    iconColor: "text-amber-600 bg-amber-100",
    description:
      "With ADB's help, the Public Private Partnership (PPP) tool was strengthened to bring more investment in Sindh, particularly in the Education sector.",
  },
  {
    organization: "USAID",
    tag: "Global Aid",
    icon: School,
    color: "from-cyan-500/15 to-teal-500/5",
    iconColor: "text-cyan-600 bg-cyan-100",
    description:
      "Supervised and managed the establishment of 106 schools under USAID guidelines, the biggest USAID investment in Sindh Province; some of these schools were made functional under PPP mode.",
  },
  {
    organization: "JICA",
    tag: "Educational Infrastructure",
    icon: GraduationCap,
    color: "from-purple-500/15 to-indigo-500/5",
    iconColor: "text-purple-600 bg-purple-100",
    description:
      "Projects liaison for the establishment of 60 state-of-the-art schools in Sindh Province.",
  },
];

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
            Backed by decades of public health governance, medical doctorates, international healthcare operations, and federal civil administration expertise to deliver authenticated diagnostic solutions across Pakistan.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* LEADER 1: DR. FAZLULLAH PECHUHO (CEO) */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-fazlullah-pechuho.jpeg"
                    alt="Dr. Fazlullah Pechuho - Chief Executive Officer"
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
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      Chief Executive Officer
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      M.B.B.S., M.B.A. (AUD)
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Fazlullah Pechuho
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-secondary-dark mt-1">
                    CEO, ALTIMI BIO SCIENCES
                  </p>              
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Dr. Fazlullah Pechuho</strong> envisaged reimagining the concepts of Health Services, Medicines, and Medical Devices delivery at their best; hence the incorporation of <strong className="text-primary font-bold">ALTIMI Biosciences (Private) Limited</strong> took place to achieve these goals.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Dr. Fazlullah Pechuho brings to ALTIMI more than <strong className="text-ink">30 years of experience</strong> in Health Services, Education, and Administration disciplines acquired while being at Senior Management levels during his outstanding career.
                </p>

                {/* Distinguished Public Service Badges */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-slate-200/80 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-ink flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>Distinguished Public Service &amp; Executive Portfolios</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Prior to ALTIMI
                    </span>
                  </div>

                  {/* Portfolio Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Secretary Health, Education, Finance, Communication &amp; Works (Government of Sindh)</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Director Finance, Trade Development Authority of Pakistan</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs hover:border-primary/40 hover:shadow-sm transition-all">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Chief Financial Officer, Civil Aviation Authority (Government of Pakistan)</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1 border-t border-slate-200/50">
                    Mainly responsible for Strategic Planning, Budgetary Control, Monitoring, and workforce Management besides Import and Supply Chain management, which are essential tools for any business to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* NEW SECTION: HEALTH & EDUCATION ACHIEVEMENTS */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.15}>
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Executive Track Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink">
                  Health &amp; Education Achievements
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted max-w-md">
                Landmark institutional health initiatives, multilateral donor partnerships, and public-private healthcare infrastructure spearheaded across Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {healthAchievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.iconColor} shadow-xs group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-base font-bold font-heading text-ink mb-2 group-hover:text-primary transition-colors">
                        {item.organization}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Institutional Public Milestone</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* LEADER 2: DR. KHALIL MEMON (DIRECTOR) */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-br-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Bio Details Column (8 cols) */}
              <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary-dark border border-secondary/20">
                      Director
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      M.B.B.S., P.H.S.
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Khalil Memon, M.B.B.S., P.H.S.
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-secondary-dark mt-1">
                    CEO, DK Healthcare Services, Illinois, U.S.A.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Medical Doctor with an advanced degree in <strong className="text-primary font-semibold">Public Health from SPH, Boston, USA</strong>.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      He also holds the portfolio of <strong>CEO of DK Healthcare Services, Illinois, U.S.A.</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Providing services to United States Government programs under Medicare and Medicaid.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Has actively served as CEO of KAPAI Pharmaceutical and ILUKA Holistic Wellness Center.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Development and Business Strategy at DK Healthcare Services.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      Has also been engaged in many philanthropic programs and services in Pakistan.
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center order-1 lg:order-2">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-khalil-memon.jpeg"
                    alt="Dr. Khalil Memon, M.B.B.S., P.H.S. - Director"
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
        {/* LEADER 3: NAJAM-UL-SAQIB SIDDIQI (GENERAL MANAGER) */}
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
                    alt="Najam-ul-Saqib Siddiqi - General Manager"
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
                    MR. Najam-ul-Saqib Siddiqi
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-primary mt-1">
                    General Manager, Altimi Biosciences
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Najam-ul-Saqib Siddiqi</strong> holds an <strong className="text-primary font-semibold">MSc in Geology</strong> and an <strong className="text-primary font-semibold">MA in International Relations</strong> from the University of Karachi.
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
                      <span>Federal Government Civil Services</span>
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
