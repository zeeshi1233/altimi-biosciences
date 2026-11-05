import React from "react";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. About Us Section */}
      <AboutSection />

      {/* 3. Our Expertise (5 cards with 3D tilt & GSAP) */}
      <ExpertiseSection />

      {/* 4. Our Products Showcase + Quick View */}
      <ProductsShowcase />

      {/* 5. Why Choose Us / Performance Stats */}
      <WhyChooseUs />

      {/* 6. Global Partners Marquee */}
      <PartnersMarquee />

      {/* 7. Client Testimonials */}
      <TestimonialsSection />

      {/* 8. World Class Customer Support CTA Banner */}
      <CtaBanner />

      {/* 9. Contact & Inquiries Section */}
      <ContactSection />
    </>
  );
}

