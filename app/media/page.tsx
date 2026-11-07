import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Newspaper, Calendar, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Media & Press Room | Altimi Biosciences",
  description:
    "Latest news, clinical announcements, press releases, and diagnostic technology breakthroughs from Altimi Biosciences Pakistan.",
};

const articles = [
  {
    id: "news-1",
    title: "Altimi Biosciences Expands High-Throughput Clinical Chemistry Footprint in Karachi Hospitals",
    category: "Corporate Announcement",
    date: "October 18, 2026",
    summary:
      "Altimi Biosciences announces successful commissioning of the Randox RX Modena platform across three major tertiary hospitals in Sindh, introducing automated direct HbA1c testing for rapid diabetes screening.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "news-2",
    title: "Revolutionizing Outpatient Cardiology in Pakistan with 18g Bittium Faros 360 ECG Wearables",
    category: "Clinical Innovation",
    date: "September 05, 2026",
    summary:
      "Pakistani cardiologists adopt the ultra-lightweight Bittium Faros 360 and cloud-based HolterPlus platform, eliminating bulky traditional Holter recorders and accelerating arrhythmia detection.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "news-3",
    title: "Enhancing Operating Room Safety with Greiner Bio-One CLiP Neo Passive IV Catheters",
    category: "Healthcare Safety",
    date: "July 22, 2026",
    summary:
      "Leading nursing federations in Karachi endorse the automatic passive safety needle mechanism of the Greiner CLiP Neo, drastically cutting occupational needlestick incident rates.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "news-4",
    title: "Altimi Biosciences Achieves Recertification for Nationwide 2°C–8°C Cold Chain Protocol",
    category: "Regulatory & Quality",
    date: "June 10, 2026",
    summary:
      "Independent cold-chain verification confirms 99.98% thermal integrity across all reagent routes dispatched from our Karachi Central Warehousing Complex to hospitals across Pakistan.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min read",
  },
];

export default function MediaPage() {
  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="News & Press"
            badgeIcon={<Newspaper className="w-3.5 h-3.5" />}
            title="Media Room & Clinical Announcements"
            subtitle="Stay informed with corporate updates, clinical breakthrough deployments, and health sector partnerships across Pakistan."
            align="center"
            className="mb-16"
          />
        </Reveal>

        {/* Featured Top News */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-primary/10 text-primary">
                  {articles[0].category}
                </span>
                <span className="text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {articles[0].date}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink leading-tight">
                {articles[0].title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {articles[0].summary}
              </p>
              <div className="pt-2">
                <Button href="/contact?type=media" variant="primary" size="md">
                  Media Contact & Press Kit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(1).map((article, idx) => (
            <div
              key={article.id}
              className="glass-card rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="font-semibold text-primary">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-ink group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 mt-4">
                <span>{article.date}</span>
                <span className="font-bold text-primary group-hover:text-primary-dark transition-colors inline-flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Press Kit Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading">
              Media Inquiries & Journalist Resources
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              For official press kits, executive commentary, high-res logos, or interviews regarding diagnostic trends in Pakistan, reach out to our communications team.
            </p>
          </div>
          <Button href="mailto:media@altimibiosciences.com" variant="primary" size="md">
            media@altimibiosciences.com
          </Button>
        </div>
      </Container>
    </div>
  );
}

