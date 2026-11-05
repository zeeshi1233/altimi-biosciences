"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/animations/Reveal";

export const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Client Endorsements"
            badgeIcon={<MessageSquareQuote className="w-3.5 h-3.5" />}
            title="Trusted by Chief Pathologists & Hospital Directors"
            subtitle="Read what leading medical professors and clinical diagnostic heads in Pakistan say about our instrumentation and service."
            align="center"
            className="mb-14"
          />
        </Reveal>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 sm:p-12 rounded-3xl bg-white shadow-xl border border-slate-200/90 relative"
            >
              <Quote className="w-16 h-16 text-primary/10 absolute top-8 right-8 pointer-events-none" />

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg sm:text-2xl font-heading font-medium text-ink leading-relaxed mb-8">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-md shrink-0">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-ink">
                      {active.name}
                    </h4>
                    <p className="text-xs text-primary font-semibold">
                      {active.role}
                    </p>
                    <p className="text-xs text-muted">
                      {active.institution} • {active.city}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-primary hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-primary hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  current === i ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

