"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Warehouse,
  ShieldCheck,
  Mail,
} from "lucide-react";

export const ContactMapCommandCenter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const companyAddress =
    "Altimi Biosciences Private Limited, R39+HR6, Khalid Commercial Area Phase 7 Ext, Karachi, Pakistan";

  const handleCopyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(companyAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
      {/* Top Command Bar */}
      <div className="bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div>
            <span className="text-xs font-bold text-white tracking-wide uppercase">
              Headquarters & Central Logistics
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-400 ml-2">
              • Karachi, Pakistan
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyAddress}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-all focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>
          <a
            href="https://maps.google.com/?q=Altimi+Biosciences+Private+Limited+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-dark text-xs font-bold text-white flex items-center gap-1.5 shadow-md shadow-primary/25 transition-all"
          >
            <span>Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Grid: Info Details on Left + Google Maps on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: HQ Details */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
              Official Headquarters
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading !text-white text-white leading-tight">
              Karachi Central Healthcare Complex
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
              Our central administrative headquarters, biomedical demo laboratory, and temperature-validated 450 m² central storage facility are situated in Karachi, serving hospitals and diagnostic institutions nationwide.
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-semibold">Address:</strong>
                R39+HR6, Khalid Commercial Area Phase 7 Ext, Karachi, Pakistan
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-semibold">Phone:</strong>
                <a href="tel:+922135344476" className="text-slate-300 hover:text-white transition-colors">
                  +92 21 35344476
                </a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-semibold">Email:</strong>
                <a href="mailto:info@altimibiosciences.com" className="text-slate-300 hover:text-white transition-colors">
                  info@altimibiosciences.com
                </a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-semibold">Business Hours:</strong>
                Monday to Saturday: 10:00 to 17:00 | Sunday Closed
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Warehouse className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-white">450 m² DRAP Certified</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-bold uppercase">
              ★ 5.0 Rating
            </span>
          </div>
        </div>

        {/* Right Column: Google Maps Iframe */}
        <div className="lg:col-span-7 relative min-h-[460px] bg-slate-950">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3148408592156!2d67.07951270000001!3d24.8189045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d001fb5dcb9%3A0x913ac73e16776265!2sAltimi%20Biosciences%20Private%20Limited!5e0!3m2!1sen!2s!4v1793900814112!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full grayscale-[10%] contrast-105"
            title="Altimi Biosciences Karachi Map"
          />

          {/* Floating Glass Badge over map */}
          <div className="absolute top-4 left-4 z-10 hidden sm:block max-w-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-xl">
              <div className="flex items-center justify-between text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <span>Altimi Biosciences</span>
                <span>★ 5.0 (3 Reviews)</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">
                Khalid Commercial Area Phase 7 Ext, Karachi
              </div>
            </div>
          </div>

          {/* Bottom GPS Coordinates */}
          <div className="absolute bottom-3 right-3 z-10 hidden sm:block">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 text-[10px] text-slate-300 font-mono">
              LAT: 24.8189° N | LNG: 67.0795° E
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

