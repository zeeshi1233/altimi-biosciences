import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { eventsData } from "@/data/eventsData";
import { EventCard } from "@/components/events/EventCard";
import { EventsHeroSlider } from "@/components/events/EventsHeroSlider";

export const metadata: Metadata = {
  title: "Events | Altimi Biosciences",
  description: "Our latest events and moments",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-surface pb-20">
      {/* Simple Hero Section with loop slider */}
      <EventsHeroSlider />

      {/* Events Grid Section */}
      <section className="py-12 sm:py-16">
        <Container>
          {/* Responsive Card Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {eventsData.map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
