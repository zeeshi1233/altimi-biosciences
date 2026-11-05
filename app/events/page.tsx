import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, MapPin, Building2, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Expos & Clinical Events | Altimi Biosciences",
  description:
    "Explore upcoming medical exhibitions, scientific symposiums, and diagnostic workshops hosted or attended by Altimi Biosciences across Pakistan.",
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "Upcoming");
  const pastEvents = events.filter((e) => e.status === "Completed");

  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Medical Conferences"
            title="Expos, Symposiums & Clinical Workshops"
            subtitle="Meet our biomedical specialists in person at medical conventions and hands-on clinical instrumentation seminars across Pakistan."
            align="center"
            className="mb-16"
          />
        </Reveal>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
              Upcoming Medical Conferences & Expos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="glass-card rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white uppercase tracking-wider">
                        {evt.category}
                      </span>
                    </div>
                    {evt.booth && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-ink text-white uppercase tracking-wider">
                          {evt.booth}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-secondary-dark">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-ink">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="p-3 rounded-xl bg-surface border border-slate-100 text-xs text-slate-600 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400">
                    Open to registered healthcare professionals
                  </span>
                  <Button
                    href={`/contact?event=${encodeURIComponent(evt.title)}`}
                    variant="primary"
                    size="sm"
                  >
                    Book Booth Meeting
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events & Workshops */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink mb-8">
            Completed Symposiums & Hands-On Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <span className="font-semibold text-secondary-dark">
                      {evt.date}
                    </span>
                    <span>•</span>
                    <span>{evt.location}</span>
                  </div>
                  <h4 className="text-base font-bold font-heading text-ink">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-muted line-clamp-2">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

