"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Activity, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    activeDropdown,
    setActiveDropdown,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

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
    { label: "Media", href: "/media" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-slate-200/80 py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image
              src="/logo.png"
              alt="Altimi Biosciences (Pvt) Ltd."
              fill
              priority
              sizes="(max-width: 768px) 44px, 52px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-tight text-ink group-hover:text-primary transition-colors leading-none">
              ALTIMI
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-accent tracking-widest uppercase mt-0.5 leading-none">
              BIOSCIENCES
            </span>
            <span className="text-[8px] font-semibold text-muted tracking-wider uppercase leading-tight mt-0.5">
              (PVT) LTD. • PAKISTAN
            </span>
          </div>
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
                      "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors focus:outline-none",
                      isActive ? "text-primary" : "text-ink hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === "about" && "rotate-180 text-primary"
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
                              className="block p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                            >
                              <div className="font-heading font-bold text-sm text-ink group-hover:text-primary flex items-center justify-between">
                                <span>{sub.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
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
                      "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors focus:outline-none",
                      isActive ? "text-primary" : "text-ink hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === "products" && "rotate-180 text-primary"
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
                        className="fixed left-1/2 -translate-x-1/2 top-[68px] w-[92vw] max-w-5xl z-50"
                      >
                        <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1: Clinical Chemistry */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm uppercase tracking-wider pb-2 border-b border-slate-100">
                                <Activity className="w-4 h-4 text-primary" />
                                <span>Clinical Chemistry</span>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/products/clinical-chemistry-analyzer/rx-modena"
                                  className="block p-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary">
                                    Randox RX Modena
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Up to 1,200 tests/hr & direct HbA1c testing
                                  </div>
                                </Link>
                                <Link
                                  href="/products/clinical-chemistry-analyzer/rx-imola"
                                  className="block p-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary">
                                    Randox RX Imola
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    400 photometric & 560 tests/hr with ISE
                                  </div>
                                </Link>
                                <Link
                                  href="/products/clinical-chemistry-analyzer/point-of-care-testing"
                                  className="block p-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-primary">
                                    Point of Care Testing
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    Rapid bedside critical diagnostics suite
                                  </div>
                                </Link>
                              </div>
                            </div>

                            {/* Column 2: Medical Consumables */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-secondary-dark font-heading font-bold text-sm uppercase tracking-wider pb-2 border-b border-slate-100">
                                <ShieldCheck className="w-4 h-4 text-secondary" />
                                <span>Disposables & Consumables</span>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/products/medical-consumables/ultimate-prep-pads"
                                  className="block p-2.5 rounded-xl hover:bg-secondary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-secondary-dark">
                                    Ultimate Prep Pads
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    70% IPA antiseptic sterile skin wipes
                                  </div>
                                </Link>
                                <Link
                                  href="/products/medical-consumables/disposable-underpads"
                                  className="block p-2.5 rounded-xl hover:bg-secondary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-secondary-dark">
                                    Disposable Underpads
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    High-absorbency dignity sheets (60x90cm)
                                  </div>
                                </Link>
                                <Link
                                  href="/products/medical-consumables/latex-gloves"
                                  className="block p-2.5 rounded-xl hover:bg-secondary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-secondary-dark">
                                    Medical Latex Gloves
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    AQL 1.5 micro-textured examination gloves
                                  </div>
                                </Link>
                                <Link
                                  href="/products/medical-consumables/nitrile-gloves"
                                  className="block p-2.5 rounded-xl hover:bg-secondary/5 transition-colors group"
                                >
                                  <div className="font-semibold text-sm text-ink group-hover:text-secondary-dark">
                                    Medical Nitrile Gloves
                                  </div>
                                  <div className="text-xs text-muted line-clamp-1">
                                    100% Latex-free chemical resistant gloves
                                  </div>
                                </Link>
                              </div>
                            </div>

                            {/* Column 3: Featured highlight banner */}
                            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-surface rounded-2xl p-5 border border-primary/15 flex flex-col justify-between">
                              <div>
                                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-white mb-2.5">
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
                                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
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
                  "relative px-3 py-2 text-sm font-semibold rounded-xl transition-colors",
                  isActive ? "text-primary" : "text-ink hover:text-primary"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
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
            className="lg:hidden p-2.5 rounded-xl text-ink hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 top-[60px] bg-white z-50 lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-8"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs font-semibold text-secondary-dark uppercase tracking-wider">
                  Menu
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/"
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
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Executive Leadership
                    </Link>
                    <Link
                      href="/about/distribution"
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Nationwide Distribution
                    </Link>
                  </div>
                </div>

                {/* Products Accordion */}
                <div className="py-2 border-b border-slate-50">
                  <div className="font-heading font-bold text-lg text-ink mb-2">
                    Products
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/products"
                      className="block text-sm font-semibold text-primary py-1"
                    >
                      • View All Products
                    </Link>
                    <Link
                      href="/products/clinical-chemistry-analyzer/rx-modena"
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Randox RX Modena
                    </Link>
                    <Link
                      href="/products/clinical-chemistry-analyzer/rx-imola"
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Randox RX Imola
                    </Link>
                    <Link
                      href="/products/clinical-chemistry-analyzer/point-of-care-testing"
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Point of Care Testing
                    </Link>
                    <Link
                      href="/products/medical-consumables/latex-gloves"
                      className="block text-sm text-muted hover:text-primary py-1"
                    >
                      • Medical Consumables
                    </Link>
                  </div>
                </div>

                <Link
                  href="/brochures"
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Brochures
                </Link>
                <Link
                  href="/media"
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Media
                </Link>
                <Link
                  href="/events"
                  className="py-2.5 text-lg font-heading font-bold text-ink hover:text-primary border-b border-slate-50"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
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

