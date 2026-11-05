const fs = require('fs');
const path = require('path');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDir(path.join(__dirname, '../public/images/products'));
ensureDir(path.join(__dirname, '../public/images/about'));
ensureDir(path.join(__dirname, '../public/images/partners'));

// Partner logos
const partners = [
  { name: 'Randox', sub: 'LABORATORIES', file: 'randox.svg', color: '#0B5ED7' },
  { name: 'Bittium', sub: 'HEALTHCARE', file: 'bittium.svg', color: '#0E9F9A' },
  { name: 'Greiner', sub: 'BIO-ONE', file: 'greiner.svg', color: '#E63946' },
  { name: 'B. Braun', sub: 'SHARING EXPERTISE', file: 'bbraun.svg', color: '#0A1B33' },
  { name: 'Mindray', sub: 'HEALTHCARE BEYOND', file: 'mindray.svg', color: '#0B5ED7' },
  { name: 'Roche', sub: 'DIAGNOSTICS', file: 'roche.svg', color: '#0E9F9A' },
  { name: 'Abbott', sub: 'A PROMISE FOR LIFE', file: 'abbott.svg', color: '#084298' },
  { name: 'Sysmex', sub: 'LIGHTING THE WAY', file: 'sysmex.svg', color: '#0A7B77' },
];

partners.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
    <rect width="200" height="60" rx="8" fill="#FFFFFF" fill-opacity="0.8" />
    <g transform="translate(15, 20)">
      <circle cx="10" cy="10" r="10" fill="${p.color}" fill-opacity="0.2" />
      <circle cx="10" cy="10" r="5" fill="${p.color}" />
      <text x="30" y="14" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0A1B33">${p.name}</text>
      <text x="30" y="24" font-family="'Inter', sans-serif" font-weight="600" font-size="7.5" fill="#64748B" letter-spacing="1.5">${p.sub}</text>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, `../public/images/partners/${p.file}`), svg);
});

// Product illustrations as SVG
const products = [
  { file: 'rx-modena.jpg', title: 'Randox RX Modena', sub: '1,200 Tests/Hr Analyzer', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { file: 'rx-imola.jpg', title: 'Randox RX Imola', sub: '560 Tests/Hr Benchtop', icon: 'M3 3h18v18H3z' },
  { file: 'poct-suite.jpg', title: 'POCT Critical Suite', sub: 'Rapid Blood Gas & Cardiac', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { file: 'faros-360.jpg', title: 'Bittium Faros 360', sub: '3-Channel 18g ECG Sensor', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z' },
  { file: 'bittium-holterplus.jpg', title: 'Bittium HolterPlus', sub: 'Extended Remote Telecardiology', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
  { file: 'clip-neo.jpg', title: 'Greiner CLiP Neo', sub: 'Safety IV Catheter System', icon: 'm18 15-6-6-6 6' },
  { file: 'histoacryl.jpg', title: 'B. Braun Histoacryl', sub: 'Topical Tissue Adhesive', icon: 'M12 2v10l4.5 4.5' },
  { file: 'prep-pads.jpg', title: 'Ultimate Prep Pads', sub: '70% IPA Antiseptic Sachet', icon: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' },
  { file: 'underpads.jpg', title: 'Disposable Underpads', sub: 'Ultra Absorbent Dignity Sheets', icon: 'M3 6h18M3 12h18M3 18h18' },
  { file: 'latex-gloves.jpg', title: 'Latex Gloves', sub: 'AQL 1.5 Medical Exam Gloves', icon: 'M7 11V7a5 5 0 0 1 10 0v4' },
  { file: 'nitrile-gloves.jpg', title: 'Nitrile Gloves', sub: '100% Latex-Free Shield', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
];

products.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EFF6FF" />
        <stop offset="50%" stop-color="#E0F2FE" />
        <stop offset="100%" stop-color="#CCFBF1" />
      </linearGradient>
      <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B5ED7" />
        <stop offset="100%" stop-color="#0E9F9A" />
      </linearGradient>
      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(11,94,215,0.06)" stroke-width="1"/>
      </pattern>
    </defs>

    <rect width="800" height="600" fill="url(#bgGrad)"/>
    <rect width="800" height="600" fill="url(#grid)"/>

    <circle cx="400" cy="270" r="160" fill="#FFFFFF" fill-opacity="0.8" />
    <circle cx="400" cy="270" r="130" fill="url(#primaryGrad)" fill-opacity="0.08" stroke="url(#primaryGrad)" stroke-width="2" stroke-dasharray="8 6"/>

    <!-- Central Device Representation -->
    <rect x="280" y="170" width="240" height="190" rx="24" fill="#FFFFFF" stroke="#0B5ED7" stroke-width="3" filter="drop-shadow(0 15px 30px rgba(11,94,215,0.15))" />
    <rect x="300" y="190" width="200" height="90" rx="12" fill="#0A1B33" />
    <rect x="315" y="205" width="170" height="60" rx="6" fill="#0E9F9A" fill-opacity="0.2" />

    <!-- Pulse Line on Screen -->
    <path d="M 325 235 L 360 235 L 375 215 L 390 255 L 405 225 L 420 235 L 475 235" fill="none" stroke="#0E9F9A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Control Dials & Buttons -->
    <circle cx="330" cy="320" r="14" fill="#0B5ED7" />
    <circle cx="370" cy="320" r="10" fill="#E2E8F0" />
    <circle cx="400" cy="320" r="10" fill="#E2E8F0" />
    <rect x="430" y="310" width="60" height="20" rx="10" fill="#0E9F9A" />

    <!-- Clinical Badge & Title -->
    <g transform="translate(400, 480)" text-anchor="middle">
      <rect x="-180" y="-45" width="360" height="75" rx="16" fill="#FFFFFF" fill-opacity="0.95" stroke="#CBD5E1" stroke-width="1" />
      <text y="-18" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="800" font-size="24" fill="#0A1B33">${p.title}</text>
      <text y="14" font-family="'Inter', system-ui, sans-serif" font-weight="600" font-size="14" fill="#0E9F9A" letter-spacing="1">${p.sub}</text>
    </g>
  </svg>`;
  // write both .jpg and .svg versions so imports resolve seamlessly
  fs.writeFileSync(path.join(__dirname, `../public/images/products/${p.file}`), svg);
  fs.writeFileSync(path.join(__dirname, `../public/images/products/${p.file.replace('.jpg', '.svg')}`), svg);
});

// About lab machine and research center images
const aboutImages = [
  { file: 'lab-machines.png', title: 'Advanced Laboratory Equipment', sub: 'High-Precision Diagnostic Workstations' },
  { file: 'research-center.png', title: 'Precision Research Center', sub: 'ISO 13485 Certified Testing & Calibration' }
];

aboutImages.forEach((img) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A1B33" />
        <stop offset="100%" stop-color="#0B5ED7" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#aboutGrad)" />
    <!-- Architectural grid lines -->
    <path d="M 0 150 L 800 150 M 0 300 L 800 300 M 0 450 L 800 450 M 200 0 L 200 600 M 400 0 L 400 600 M 600 0 L 600 600" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
    <circle cx="400" cy="250" r="120" fill="none" stroke="#0E9F9A" stroke-width="2" stroke-dasharray="10 6" />
    <circle cx="400" cy="250" r="80" fill="rgba(14,159,154,0.15)" />
    <text x="400" y="240" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="28" fill="#FFFFFF">ALTIMI LABS</text>
    <text x="400" y="270" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="14" fill="#38BDF8" letter-spacing="2">PRECISION • EXCELLENCE</text>
    <g transform="translate(400, 480)" text-anchor="middle">
      <rect x="-240" y="-35" width="480" height="70" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
      <text y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">${img.title}</text>
      <text y="22" font-family="'Inter', sans-serif" font-weight="500" font-size="13" fill="#93C5FD">${img.sub}</text>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, `../public/images/about/${img.file}`), svg);
  fs.writeFileSync(path.join(__dirname, `../public/images/about/${img.file.replace('.jpg', '.svg')}`), svg);
});

console.log('Successfully generated public SVG and image assets.');

