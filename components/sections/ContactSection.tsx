"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, MessageCircle, Send, CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { useUIStore } from "@/stores/uiStore";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const contactFormStore = useUIStore((state) => state.contactForm);
  const submitRequested = useUIStore((state) => state.submitRequested);
  const lastSubmitRef = useRef(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactFormStore,
  });

  // Synchronize when store fields are updated by voice agent
  useEffect(() => {
    if (contactFormStore.fullName) setValue("fullName", contactFormStore.fullName);
    if (contactFormStore.email) setValue("email", contactFormStore.email);
    if (contactFormStore.phone) setValue("phone", contactFormStore.phone);
    if (contactFormStore.subject) setValue("subject", contactFormStore.subject);
    if (contactFormStore.message) setValue("message", contactFormStore.message);
  }, [contactFormStore, setValue]);

  // Trigger submission when voice agent confirms
  useEffect(() => {
    if (submitRequested > 0 && submitRequested !== lastSubmitRef.current) {
      lastSubmitRef.current = submitRequested;
      handleSubmit(onSubmit)();
    }
  }, [submitRequested, handleSubmit]);

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white" id="contact-section">
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Get In Touch"
            title="Always On Your Side When You Need Help"
            subtitle="Connect with our healthcare sales, biomedical engineering, or logistics teams in Karachi."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Cards Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Direct Hotline */}
            <Reveal direction="left" delay={0.1}>
              <div className="p-8 rounded-3xl bg-surface border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary-dark uppercase tracking-wider">
                      Direct Support
                    </span>
                    <h3 className="text-xl font-bold font-heading text-ink mt-0.5 mb-1">
                      Have Any Doubts? You can call us
                    </h3>
                    <p className="text-xs text-muted mb-4">
                      Our institutional sales specialists and biomedical coordinators are ready to assist.
                    </p>
                    <a
                      href="tel:+922135344476"
                      className="text-lg sm:text-xl font-black font-heading text-primary hover:text-primary-dark transition-colors inline-block"
                    >
                      +92 21 35344476
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: WhatsApp Chat */}
            <Reveal direction="left" delay={0.2}>
              <div className="p-8 rounded-3xl bg-surface border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary-dark flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary-dark uppercase tracking-wider">
                      Instant WhatsApp
                    </span>
                    <h3 className="text-xl font-bold font-heading text-ink mt-0.5 mb-1">
                      Online Chat – Live Chat Now
                    </h3>
                    <p className="text-xs text-muted mb-4">
                      Make an effective chat with us. Contact us on the given number for rapid quotes and urgent consumable dispatches.
                    </p>
                    <a
                      href="https://wa.me/922135344476?text=Hello%20Altimi%20Biosciences,%20I%20would%20like%20to%20inquire%20about%20your%20medical%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold shadow-md hover:bg-secondary-dark transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Start WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Office Operating Hours */}
            <Reveal direction="left" delay={0.3}>
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-xs text-slate-600 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-ink">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Business Working Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday to Saturday:</span>
                  <span className="font-semibold text-ink">10:00 – 17:00</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Sunday:</span>
                  <span className="font-semibold text-rose-500">Closed (On-Call ER Available)</span>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-muted">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@altimibiosciences.com</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.2}>
              <div className="glass-card p-8 sm:p-10 rounded-3xl bg-white shadow-xl border border-slate-200/90 relative">
                <h3 className="text-2xl font-bold font-heading text-ink mb-2">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-muted mb-8">
                  Fill in your details below and our hospital account director will respond with pricing, specs, or tender requirements.
                </p>

                <AnimatePresence>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h4 className="text-xl font-bold font-heading text-ink">
                        Inquiry Received Successfully!
                      </h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you for reaching out to Altimi Biosciences. One of our biomedical product specialists in Karachi will get back to you within 2 business hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-ink text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Dr. Tariq Mahmood"
                            {...register("fullName")}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                          {errors.fullName && (
                            <p className="text-xs text-rose-500 mt-1">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            placeholder="tariq@hospital.com.pk"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                          {errors.email && (
                            <p className="text-xs text-rose-500 mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder="+92 300 1234567"
                            {...register("phone")}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                          {errors.phone && (
                            <p className="text-xs text-rose-500 mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                            Subject / Product of Interest *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Randox RX Modena Quotation"
                            {...register("subject")}
                            className="w-full px-4 py-3 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          />
                          {errors.subject && (
                            <p className="text-xs text-rose-500 mt-1">
                              {errors.subject.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                          Inquiry Details / Tender Specs *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Please provide details about your institution, estimated test volume, and any specific requirements..."
                          {...register("message")}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                        />
                        {errors.message && (
                          <p className="text-xs text-rose-500 mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        rightIcon={<Send className="w-4 h-4" />}
                        className="w-full justify-center shadow-md shadow-primary/25"
                      >
                        {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

