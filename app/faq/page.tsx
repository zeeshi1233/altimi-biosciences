"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faq";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "General", "Distribution & Logistics", "Technical Support", "Products & Warranty"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        <SectionHeading
          badge="Knowledge Base"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5" />}
          title="Frequently Asked Questions"
          subtitle="Find fast answers to inquiries regarding cold-chain protocols, biomedical installation SLAs, DRAP compliance, and tender orders."
          align="center"
          className="mb-12"
        />

        {/* Search & Categories */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-[border-color,box-shadow] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-150 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-[box-shadow,border-color] duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-ink">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 motion-safe:transition-transform ${
                      isOpen ? "motion-safe:rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-muted leading-relaxed border-t border-slate-100">
                        <span className="inline-block text-xs font-semibold text-secondary-dark mb-2">
                          Category: {faq.category}
                        </span>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md text-center max-w-xl mx-auto space-y-3">
          <h4 className="text-lg font-bold font-heading text-ink">
            Didn&apos;t find what you are looking for?
          </h4>
          <p className="text-xs text-muted">
            Our clinical application and logistics specialists are on call to assist with your specific healthcare questions.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              Ask Our Clinical Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

