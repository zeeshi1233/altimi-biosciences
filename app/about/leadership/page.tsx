import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  HeartPulse,
  Building2,
  Globe2,
  GraduationCap,
  Activity,
  ShieldCheck,
  Eye,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Executive Leadership & Governance | Altimi Biosciences",
  description:
    "Meet Dr. Fazlullah Pechuho and Dr. Khalil Memon, the visionary leadership steering Altimi Biosciences in diagnostic excellence, public health partnerships, and hospital systems in Pakistan.",
};

const accomplishments = [
  {
    title: "Pediatric Emergency Centers",
    agency: "Public-Private Partnership (PPP)",
    desc: "Establishment of children and pediatric emergency centers under the Public-Private Partnership model under the direct supervision of Child Life Foundation (CLF), fully on par with Canadian Children Emergency Centers.",
    icon: Stethoscope,
    badge: "Child Healthcare",
  },
  {
    title: "Satellite Units For Cardiovascular Diseases",
    agency: "NICVD Sindh",
    desc: "Establishment of satellite units of NICVD all over Sindh to cater the services of Angioplasty including Angiography and comprehensive cardiovascular disease services free of cost to the people living in Sindh, Pakistan.",
    icon: HeartPulse,
    badge: "Cardiology Network",
  },
  {
    title: "USAID Partnership",
    agency: "USAID Pakistan",
    desc: "Supervised and managed to establish 100 Schools under the direct guidelines of USAID, being the biggest investment done by USAID in Sindh, with schools operationalized under Public-Private Partnership mode.",
    icon: Globe2,
    badge: "Global Aid",
  },
  {
    title: "World Bank Healthcare Reform",
    agency: "World Bank / SERP",
    desc: "Managed World Bank-sponsored Sindh Education Reform Program (SERP) including Nutrition Support Program, National Immunization Support, and Lady Health Workers Program.",
    icon: Building2,
    badge: "Health Reform",
  },
  {
    title: "Asian Development Bank (ADB)",
    agency: "Asian Development Bank",
    desc: "With the help of the Asian Development Bank, the Public-Private Partnership (PPP) tool was made robust and strengthened to bring substantial institutional investment in Sindh under PPP mode.",
    icon: Briefcase,
    badge: "Strategic PPP",
  },
  {
    title: "Cardiac Chest Pain Units",
    agency: "Provincial Emergency Network",
    desc: "Establishment of rapid-response Cardiac Chest Pain Units across Sindh province, drastically cutting mortality from acute myocardial infarction.",
    icon: Activity,
    badge: "Emergency Care",
  },
  {
    title: "JICA Educational Infrastructure",
    agency: "Japan International Cooperation Agency",
    desc: "Projects Liaison for the establishment of 30 state-of-the-art educational institutions and technical schools across Sindh.",
    icon: GraduationCap,
    badge: "International Liaison",
  },
  {
    title: "World Health Organization (WHO)",
    agency: "United Nations / WHO",
    desc: "Close institutional liaison with the World Health Organization (WHO) for the eradication of life-threatening communicable diseases and maternal-child health campaigns.",
    icon: ShieldCheck,
    badge: "Disease Eradication",
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

        {/* Page Heading */}
        <Reveal direction="up">
          <SectionHeading
            badge="Executive Leadership"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Leadership Behind Altimi Biosciences"
            subtitle="Guided by visionary healthcare administrators, medical doctors, and public health strategists with over three decades of institutional leadership."
            align="center"
            className="mb-16"
          />
        </Reveal>

        {/* ========================================================================= */}
        {/* LEADER 1: DR. FAZLULLAH PECHUHO */}
        {/* ========================================================================= */}
        <Reveal direction="up" delay={0.1}>
          <div className="glass-card p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-fazlullah-pechuho.jpg"
                    alt="Dr. Fazlullah Pechuho"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bio Details Column (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-dark">
                    Altimi Biosciences (Private) Limited
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Fazlullah Pechuho
                  </h2>
                  <p className="text-sm font-semibold text-primary mt-1">
                    Managing Director & Former Secretary Health, Government of Sindh
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-ink font-bold">Dr. Fazlullah Pechuho</strong> envisaged reimagining the concepts of Health Services, Medicines, and Medical Devices delivery at their best; hence the incorporation of <strong className="text-primary font-bold">ALTIMI Biosciences (Private) Limited</strong> took place to achieve these goals.
                </p>

                <p className="text-sm text-muted leading-relaxed">
                  Dr. Fazlullah Pechuho brings to ALTIMI more than <strong className="text-ink">30 years of experience</strong> in Health Services, Education, and Administration disciplines acquired while being at Senior Management levels during his outstanding career.
                </p>

                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Distinguished Public Service & Executive Portfolio</span>
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
                      <span>Secretary Communication & Works (GoS)</span>
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
                  <p className="text-[11px] text-muted pt-1">
                    Mainly responsible for Strategic Planning, Budgetary Control, Monitoring, and Workforce Management across national public institutions.
                  </p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary-dark">
                    Global Health & Public Policy
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-ink mt-1">
                    Dr. Khalil Memon
                  </h2>
                  <p className="text-sm font-semibold text-secondary-dark mt-1">
                    Medical Doctor & Public Health Strategist | CEO, EIK Healthcare Services, Boston, USA
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
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/leadership/dr-khalil-memon.jpg"
                    alt="Dr. Khalil Memon"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* KEY ACCOMPLISHMENTS & PUBLIC HEALTH MILESTONES (8 CARDS) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <Reveal direction="up">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-dark">
                Public Health Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                Institutional Milestones & Healthcare PPP Projects
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-2">
                Transformational healthcare programs, pediatric emergency centers, and cardiac care networks established under our leadership.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accomplishments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.05}>
                  <div className="glass-card p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-dark bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold font-heading text-ink group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {item.agency}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VISION & MISSION (OFFICIAL STATEMENTS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/25">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Our Guiding Light
                    </span>
                    <h3 className="text-2xl font-black font-heading text-ink">
                      Vision
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  ALTIMI also envisage that the <strong className="text-ink">pulmonary diseases</strong> have acquired significance in Pakistan and are accelerating due to lack of world-class inhalation and respiratory therapies causing aggravation and more complications.
                </p>

                <p className="text-sm sm:text-base text-muted leading-relaxed mt-4">
                  To condense the increasing tendency of these diseases essentially, we need to have <strong className="text-primary font-semibold">trusted brand inhalation equipment and therapies with proven track record</strong>.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-primary">
                <span>Advancing Pulmonary & Diagnostic Care</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Mission Card */}
          <Reveal direction="right" delay={0.2}>
            <div className="glass-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md shadow-secondary/25">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-dark">
                      Our Core Purpose
                    </span>
                    <h3 className="text-2xl font-black font-heading text-ink">
                      Mission
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The mission of <strong className="text-ink">ABL</strong> is to become an eventual choice for all about <strong className="text-secondary-dark font-bold">HEALTH CARE Company</strong> by providing the <strong className="text-ink">ULTIMATE Products, Services and Devices</strong> to customers throughout the country.
                </p>

                <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Emphasizing consistent innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Operational excellence across distribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>Highest quality in every healthcare segment offered</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-secondary-dark">
                <span>The Ultimate Choice in Healthcare Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Contact / Inquiries Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
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
            <Button href="/contact" variant="primary" size="md">
              Contact Leadership Office
            </Button>
            <Button href="/about/distribution" variant="glass" size="md">
              Distribution Network
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
