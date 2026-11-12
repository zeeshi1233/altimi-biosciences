"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Activity, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    activeDropdown,
    setActiveDropdown,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useUIStore();

  const isHome = pathname === "/";
  const isDarkGlass = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname, setMobileMenuOpen, setActiveDropdown]);

  // Lock body scroll and pause Lenis when mobile menu is open to enable mobile drawer scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      (window as any).__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      (window as any).__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      (window as any).__lenis?.start();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about/leadership",
      hasDropdown: true,
      dropdownType: "simple",
      sublinks: [
        {
          label: "Executive Leadership",
          href: "/about/leadership",
          description: "Meet the visionary leadership steering diagnostic excellence.",
        },
        {
          label: "Nationwide Distribution",
          href: "/about/distribution",
          description: "Cold-chain infrastructure & logistics hubs across Pakistan.",
        },
      ],
    },
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownType: "mega",
    },
    { label: "Brochures", href: "/brochures" },
    // { label: "Media", href: "/media" },
    // { label: "Events", href: "/events" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "z-50 w-full px-3 sm:px-6",
        isHome
          ? cn("fixed left-0 right-0", isScrolled ? "top-2.5" : "top-2.5 md:top-11")
          : "sticky top-2.5 py-2"
      )}
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between rounded-2xl"
      >
        {/* Frosted glassmorphism layer kept separate so fixed mega-menu keeps viewport positioning */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 -z-10 rounded-2xl backdrop-blur-lg border transition-[background-color,border-color,box-shadow] duration-300",
            isDarkGlass
              ? "bg-white/85 border-white/30 shadow-lg shadow-primary-900/20"
              : "bg-white/90 border-slate-200/80 shadow-lg shadow-primary/10"
          )}
        />
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
          <div className="relative w-[130px] h-[52px] sm:w-[145px] sm:h-[78px] transition-transform duration-300 motion-safe:group-hover:scale-105 shrink-0">
            <img
              src={"/logo.png"}
              alt="Altimi Biosciences (Pvt) Ltd."
              className="object-contain w-full h-full transition-opacity duration-200"
            />
          </div>
          {/* <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-tight text-ink group-hover:text-primary transition-colors leading-none">
              ALTIMI
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-accent mt-0.5 leading-none">
              Biosciences
            </span>
            <span className="text-[9px] font-medium text-muted leading-tight mt-0.5">
              (Pvt) Ltd. • Pakistan
            </span>
          </div> */}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.hasDropdown && link.dropdownType === "simple") {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "nav-link flex items-center gap-1 px-3 py-2 text-sm rounded-md",
                      isActive && "is-active"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === "about" && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "about" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="glass-panel p-2 rounded-2xl shadow-xl border border-slate-200/90 bg-white/95">
                          {link.sublinks?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="nav-dropdown-link block p-3 rounded-xl group"
                            >
                              <div className="font-heading font-bold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary flex items-center justify-between">
                                <span>{sub.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150 text-primary" />
                              </div>
                              <p className="text-xs text-muted mt-1 leading-snug">
                                {sub.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.hasDropdown && link.dropdownType === "mega") {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link flex items-center gap-1 px-3 py-2 text-sm rounded-md",
                      isActive && "is-active"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === "products" && "rotate-180"
                      )}
                    />
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === "products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "fixed !left-[150px] -translate-x-1/2 pt-2 w-[92vw] max-w-5xl z-50",
                          isDarkGlass ? "top-[114px]" : "top-[82px]"
                        )}
                      >
                        <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1: Clinical Chemistry */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm pb-2 border-b border-slate-100">
                                <Activity className="w-4 h-4 text-primary" />
                                <span>Clinical Chemistry</span>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/products/randox-rx-series"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    Randox RX Series (4900 / 9000)
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Automated Chemistry Analyzers (400–1,200 tests/hr)
                                  </div>
                                </Link>
                                <Link
                                  href="/products/bosch-vivalytic"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    Bosch Vivalytic Molecular Analyzer
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    All-in-One Closed Cartridge PCR Molecular Solution
                                  </div>
                                </Link>
                                <Link
                                  href="/products/point-of-care-testing"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    QuikRead go® (Point Of Care Testing)
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Aidian POCT Analyzer, easy CRP &amp; HbA1c Rapid Kits
                                  </div>
                                </Link>
                              </div>
                            </div>

                            {/* Column 2: Medical Devices & Hospital Supplies */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-secondary-dark font-heading font-bold text-sm pb-2 border-b border-slate-100">
                                <ShieldCheck className="w-4 h-4 text-secondary" />
                                <span>Devices &amp; Supplies</span>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/products/faros-360-ecg"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    Bittium Faros™ (360 &amp; 180)
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Medical-grade waterproof ECG monitors
                                  </div>
                                </Link>
                                <Link
                                  href="/products/and-abpm-monitor"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    A&amp;D Ambulatory BP (TM-2440 / 2441)
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Japanese 24-hour automatic blood pressure monitors
                                  </div>
                                </Link>
                                <Link
                                  href="/products/ultimate-prep-pads"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    Hongde Alcohol Pads &amp; Underpads
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    70% IPA sterile pads &amp; dignity underpads
                                  </div>
                                </Link>
                                <Link
                                  href="/products/sterile-surgical-gloves"
                                  className="nav-dropdown-link block p-2.5 rounded-xl group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary group-focus-visible:text-primary">
                                    Sterile Latex Surgical Gloves
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Powder-free gamma-sterilized surgical gloves
                                  </div>
                                </Link>
                              </div>
                            </div>

                            {/* Column 3: Featured highlight banner */}
                            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-surface rounded-2xl p-5 border border-primary/15 flex flex-col justify-between">
                              <div>
                                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary text-white mb-2.5">
                                  Catalog 2026
                                </span>
                                <h4 className="font-heading font-extrabold text-base text-ink">
                                  Full Diagnostics Portfolio
                                </h4>
                                <p className="text-xs text-muted mt-2 leading-relaxed">
                                  Explore our complete range of DRAP-registered clinical chemistry instruments, POCT, and surgical consumables.
                                </p>
                              </div>
                              <Link
                                href="/products"
                                className="nav-dropdown-link mt-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-bold text-primary"
                              >
                                <span>Browse All Categories</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "nav-link px-3 py-2 text-sm rounded-md",
                  isActive && "is-active"
                )}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            href="/contact?type=quote"
            variant="primary"
            size="md"
            magnetic
            className="hidden sm:inline-flex shadow-md hover:shadow-glow-primary"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden nav-dropdown-link p-2.5 rounded-xl text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed inset-0 top-[84px] bg-white/95 backdrop-blur-lg z-50 lg:hidden flex flex-col justify-between overflow-y-auto overscroll-contain touch-pan-y px-6 py-8"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs font-semibold text-secondary-dark">
                  Navigation
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Home
                </Link>

                {/* About Accordion */}
                <div className="py-2 border-b border-slate-50">
                  <div className="font-heading font-bold text-lg text-ink mb-2">
                    About Us
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/about/leadership"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Executive Leadership
                    </Link>
                    <Link
                      href="/about/distribution"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Nationwide Distribution
                    </Link>
                  </div>
                </div>

                {/* Products - Direct Clickable Navigation Link on Mobile */}
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50 flex items-center justify-between group"
                >
                  <span>Products</span>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary motion-safe:group-hover:translate-x-1 transition-[color,transform] duration-150" />
                </Link>

                <Link
                  href="/brochures"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Brochures
                </Link>
                <Link
                  href="/media"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Media
                </Link>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <Button
                href="/contact?type=quote"
                variant="primary"
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Get a Quote
              </Button>
              <div className="text-center text-xs text-muted">
                Need urgent assistance? Call{" "}
                <a
                  href="tel:+922135344476"
                  className="font-bold text-ink hover:text-primary"
                >
                  +92 21 35344476
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

