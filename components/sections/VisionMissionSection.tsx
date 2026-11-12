"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eye, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export const VisionMissionSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden bg-ink my-12 lg:my-16">
      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-[100px] pointer-events-none"
      />

      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/25">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary">
                      Our Guiding Light
                    </span>
                    <h3 className="text-2xl font-black font-heading text-ink">
                      Vision
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  ALTIMI also envisage that the <strong className="text-ink">pulmonary diseases</strong> have acquired significance in Pakistan and are accelerating due to lack of advanced inhalation and respiratory therapies causing aggravation and more complications.
                </p>

                <p className="text-sm sm:text-base text-muted leading-relaxed mt-4">
                  To condense the increasing tendency of these diseases essentially, we need to have <strong className="text-primary font-semibold">trusted brand inhalation equipment and therapies with proven track record</strong>.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-primary">
                <span>Advancing Pulmonary &amp; Diagnostic Care</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Reveal>

          {/* Mission Card */}
          <Reveal direction="right" delay={0.2}>
            <div className="glass-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl h-full flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md shadow-secondary/25">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary-dark">
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
      </Container>
    </section>
  );
};

