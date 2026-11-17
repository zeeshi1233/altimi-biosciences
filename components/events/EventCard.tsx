import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EventItem } from "@/data/eventsData";

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <article className="group bg-white rounded-[12px] overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Cover Image (16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata: Date & Location */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-medium text-slate-500 mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              {event.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              {event.location}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold font-heading text-ink group-hover:text-primary transition-colors leading-snug mb-2">
            {event.title}
          </h2>

          {/* Short Description (2 Lines) */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-5 mt-4 border-t border-slate-100">
          <Link
            href={event.link || "#"}
            className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-dark active:scale-[0.98] transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
