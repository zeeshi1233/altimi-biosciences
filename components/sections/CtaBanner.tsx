"use client";

import React from "react";
import { ArrowRight, Phone, Headphones, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-ink">
      {/* Dynamic Animated Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-[100px] pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/15">
              <Headphones className="w-4 h-4 text-secondary" />
              Dedicated Clinical Support
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Extend the capabilities of your Medical System with Altimi Biosciences
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are expanding a high-volume pathology lab or upgrading ICU patient monitors, our clinical application specialists and certified biomedical engineers are ready to assist.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                magnetic
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-glow-primary"
              >
                Contact Us Now
              </Button>
              <Button
                href="tel:+922135344476"
                variant="glass"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-secondary" />}
              >
                +92 21 35344476
              </Button>
            </div>
          </Reveal>

          {/* Quick SLA features */}
          <Reveal direction="up" delay={0.4}>
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>DRAP Registered Supplies</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-secondary" />
                <span>On-Site Engineer Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-secondary" />
                <span>24/7 Breakdown Hotline</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

