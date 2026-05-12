# Perfect RMC — Premium Landing Page

## Original Problem Statement
Build a premium landing page for Perfect RMC, a ready-mix concrete company in India. Concept: "Concrete in Motion" — Nike-style cinematic, premium, industrial, trustworthy. Dark charcoal + cement grey + warm beige (#D1C39A). Animated hero background. Sections: Hero, Services, Process timeline, Stats, Why Choose Us, WhatsApp CTA.

## User-Provided Real Data
- Established: 2012
- WhatsApp: +91 8255009999
- Phones: +91 82550 09999, +91 75748 48571, +91 93286 66666
- Emails: businesshead@perfectrmc.in, perfect_rmc@yahoo.com
- Hours: Mon–Sat 9AM–7PM; Sun on prior scheduling
- Address: Survey No 176/1/2, Jarod–Rasulabad Road, Jarod, Taluka Waghodia, Dist. Vadodara
- Plant: 30 Cum/hr Simem batching plant, 3 pumps (60 Cum/hr), 9 transit mixers (7 Cum), 300 MT cement silos, 125 KVA generator, in-house QA/QC lab
- Certification: IS:4926
- Real assets: logo, plant photos, truck photo (hosted on customer-assets CDN)
- Clients: Schneider Electric, GE Vernova, L&T, Voltas, Polycab, MG Motors, Diamond Power, Cadila/Liva, Banco, Farmson Pharma, Mepro Pharma, Bharat Parenteral, ITM Universe, BCA Stadium, Krishnashray Auto, etc.

## Architecture
- Frontend only (React + Tailwind + Framer Motion). No backend.
- Single-page composition in /app/frontend/src/App.js
- Sections in /app/frontend/src/components/sections/
- Brand data centralized in /app/frontend/src/lib/company.js
- Fonts: Oswald (display), Manrope (body) — loaded in public/index.html

## What's Implemented (Dec 2025)
- Navbar (sticky, real logo, 4 nav links, mobile menu)
- Hero with cinematic Concrete-in-Motion animated background (drifting beige/grey blobs, dust particles, diagonal speed lines, radial spotlight, grain texture, vignette, marquee strip)
- Services (6 cards: Ready-Mix Concrete, On-Time Site Delivery, Custom Mix Design, Quality Testing, Residential, Commercial & Industrial)
- Process (5-step timeline desktop horizontal / mobile vertical with dotted connector)
- Stats (4 animated counters with easing)
- Why Us (plant image + 4 reliability points + floating spec card)
- Clients (real-name marquee + 10-cell grid)
- Fleet (truck image + 5 plant/equipment specs)
- WhatsApp CTA (large conversion block with corner marks + contact column)
- Footer (logo, full contact, address, hours, IS:4926 badge)
- FloatingWhatsApp (appears after 500px scroll)

## Verified
- Testing agent iteration_1: 100% frontend pass, all 17 review requirements verified
- WhatsApp deep links use single helper `whatsappLink()` → wa.me/918255009999
- data-testid coverage on every interactive element
- Lint clean

## Backlog / P1
- Real client SVG logos (currently text marks)
- Image gallery of completed projects
- Quote form with lead capture to MongoDB (currently WhatsApp-only)
- Multi-language (Gujarati/Hindi) toggle
- SEO meta tags, OpenGraph, structured data (LocalBusiness schema)
- Sitemap, robots.txt
