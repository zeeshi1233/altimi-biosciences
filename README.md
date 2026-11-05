# Altimi Biosciences – Modern Healthcare & Diagnostics Platform

A production-ready, multi-page web application for **Altimi Biosciences**, a premier medical diagnostics, clinical chemistry instruments, medical devices, and hospital supplies distributor based in Karachi, Pakistan.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & Glassmorphism design tokens
- **Animations**:
  - GSAP (+ ScrollTrigger, ScrollToPlugin) for scroll-driven animations & split text
  - Framer Motion for component/page transitions, layout animations, and magnetic buttons
  - Lenis for smooth momentum scrolling synced with GSAP ScrollTrigger
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod schema validation
- **Typography**: Plus Jakarta Sans (Headings) & Inter (Body)

---

## Brand Palette

- **Primary**: `#0B5ED7` (Medical Blue)
- **Secondary**: `#0E9F9A` (Teal)
- **Accent**: `#E63946` (Vibrant Crimson)
- **Dark / Ink**: `#0A1B33` (Deep Medical Navy)
- **Surface**: `#F5F9FF` (Clinical Light)
- **Muted**: `#64748B`

---

## Sitemap / Routes

- `/` – Home (Hero Slider with 8 products, About Us, 5 Core Expertise cards, Products Showcase, Performance Metrics, Infinite Partners Marquee, Testimonials, CTA, Interactive Contact)
- `/about/leadership` – Executive Leadership Team & Governance
- `/about/distribution` – Validated 2°C–8°C Cold-Chain & Nationwide Warehousing Network
- `/products` – Complete Product Catalog with Live Search & Category Filtering
- `/products/clinical-chemistry-analyzer/rx-modena` – Randox RX Modena (1,200 Tests/Hr, direct HbA1c)
- `/products/clinical-chemistry-analyzer/rx-imola` – Randox RX Imola (560 Tests/Hr with ISE)
- `/products/clinical-chemistry-analyzer/point-of-care-testing` – Rapid POCT & Critical Diagnostics
- `/products/medical-consumables/[slug]` – Dynamic routes for:
  - `ultimate-prep-pads`
  - `disposable-underpads`
  - `latex-gloves`
  - `nitrile-gloves`
- `/brochures` – Downloadable Technical PDF Manuals & Brochures
- `/media` – Press Releases & Clinical Breakthrough Announcements
- `/events` – Medical Expos, Symposiums & Operational Workshops
- `/contact` – Direct Contact, Karachi Headquarters, Department Routing & WhatsApp Chat
- `/faq` – Searchable Categorized Accordion FAQ
- `/privacy-policy` – Data Governance & Regulatory Compliance
- `/terms-conditions` – Commercial Supply & Warranty Terms

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

