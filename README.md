# ⚡ SandBox Website Redesign: Pre-Event to Post-Event Showcase

[![Live Demo](https://img.shields.io/badge/Live_Demo-sandbox--aegis--demo.vercel.app-FFDE59?style=for-the-badge&logo=vercel&logoColor=black)](https://sandbox-aegis-demo.vercel.app/)

A proposal and implementation to transform the official **SandBox** hackathon portal (`sandbox.aegisclub.site`) from an expired **pre-event registration site** into an **always-on, single-scroll post-event showcase and multi-edition archive**—strictly preserving 100% of the club's signature **Neo-Brutalist Cyber-Retro** brand identity.

---

## 💡 The Core Redesign Idea

### The Problem: The "Post-Event Dead Zone"
After a hackathon ends, the live URL typically remains frozen with closed submission notices, expired registration deadlines, and outdated logistics. Prospective sponsors, incoming students, and recruiters visiting the domain see an inactive event rather than the achievements built during the hackathon.

### The Solution: An Always-On Legacy Showcase
This redesign converts the site into a high-energy, single-scroll proof-of-work portal that:
1. **Celebrates Outcomes:** Spotlights the Grand Champions and track category winners with interactive filtering and code repository links.
2. **Builds Institutional Memory ("The Aegis Chronicles"):** Gathers all club milestones (*SandBox v1.0, GlitchCraft, SandBox v2.0, ByteCon, and SandBox v3.0*) into an interactive multi-edition archive.
3. **Maximizes Sponsor ROI:** Replaces temporary logo strips with a dedicated Wall of Gratitude backed by hard event scale numbers.
4. **Captures Future Leads:** Replaces dead registration buttons with an interactive SandBox v3.0 Early Access waitlist modal.

```
┌─────────────────────────────────┐        ┌───────────────────────────────────┐
│        PRE-EVENT PORTAL         │   ──►  │      POST-EVENT SHOWCASE          │
│ • Countdown to hacking          │        │ • Event Impact & Scale Metrics    │
│ • Registration CTA (Devfolio)   │        │ • Hall of Fame / Track Winners    │
│ • FAQs: "Will food be provided?"│        │ • 24-Hour Experience & Aftermovie │
│ • Logistics & travel guide      │        │ • Multi-Edition History Archive   │
│ • Static single-edition view    │        │ • v3.0 Early Access Waitlist      │
└─────────────────────────────────┘        └───────────────────────────────────┘
```

---

## 🎨 Design Philosophy: 100% Theme Preservation

The redesign adheres to a strict **zero brand loss** rule, extracting and applying every visual token from the original site:

* **Canvas:** Warm cream/ivory (`#FFFBEB`) with a technical blueprint graph-paper grid overlay.
* **Palette:**
  * **Neo-Yellow (`#FFDE59`):** Primary brand accent, section tags, marquee ticker tape, and Grand Champion podium.
  * **Cyber-Cyan (`#5CE1E6`):** Secondary action pills, track badges, and corner design handles.
  * **Pastel Data Blocks:** Sky Blue (`#E0F2FE`), Mint (`#DCFCE7`), Soft Orange (`#FED7AA`), and Bright Yellow (`#FEF08A`).
* **Borders & Shadows:** Solid black borders (`border-4 border-black` / `border-2 border-black`) paired with **hard, unblurred offset drop shadows** (`shadow-[4px_4px_0px_#000]`, `shadow-[6px_6px_0px_#000]`, `shadow-[8px_8px_0px_#000]`).
* **Geometry:** Sharp rectangular corners (`rounded-none`) across all cards, buttons, tabs, and modals.
* **Typography:** Bold uppercase `Space Grotesk` (weights 800/900) paired with rotated handwritten `Caveat` doodle stickers and `JetBrains Mono` counters.
* **Animated Ticker:** Continuous `#FFDE59` yellow marquee ticker tape (`"BUILD • BREAK • CREATE • SANDBOX • HACKATHON..."`) with 4px black borders.

---

## 📐 Information Architecture (Single-Scroll Blueprint)

The page flows as a continuous narrative without page reloads, assisted by a sticky scrollspy navigation bar:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Sticky Cyber-Navbar: Brand, Anchor Links, v3.0 Alert, Discord       │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Hero & Marquee Ticker: Wrap-up Headline, Confetti Button, Sponsors  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Impact Metrics Strip: 6 Brutalist KPI Cards (24h, 320+, 64, 8, 50k) │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Hall of Fame & Tracks: Overall Podium + 8 Filterable Track Cards    │
├────────────────────────────────────────────────────────────────────────┤
│ 5. 24-Hour Experience: 4K Aftermovie Teaser + 10 Milestone Timeline    │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Aegis Chronicles: Multi-Edition Archive (v2.0, Glitch, v1.0, Byte)   │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Visual Media Gallery: Lightbox Photo Grid with Category Filters     │
├────────────────────────────────────────────────────────────────────────┤
│ 8. Wall of Gratitude: Title Sponsor (Hacker School) & Tier Partners    │
├────────────────────────────────────────────────────────────────────────┤
│ 9. Organizing Crew & Footer: DSCE Dept., Coordinators, Social Links    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Technical Architecture

```
                                  ┌────────────────────────┐
                                  │   index.html (Fonts)   │
                                  └───────────┬────────────┘
                                              │
                                  ┌───────────▼────────────┐
                                  │   src/App.jsx (Root)   │
                                  └───────────┬────────────┘
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      │                                               │
           ┌──────────▼──────────┐                         ┌──────────▼──────────┐
           │ Presentation Layer  │                         │   Data Repository   │
           │  (UI Components)    │                         │  eventData.js (SSOT)│
           └──────────┬──────────┘                         └─────────────────────┘
                      │
   ┌──────────────────┼──────────────────┬──────────────────┐
   │                  │                  │                  │
┌──▼────────────┐ ┌───▼────────────┐ ┌───▼────────────┐ ┌───▼────────────┐
│ WinnersShowcase│ │PastEventsArchive│ │  PhotoGallery  │ │    V3Modal     │
│ (Track Filter)│ │(Edition Engine)│ │(Lightbox Modal)│ │(Waitlist Popup)│
└───────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
```

### Architectural Decisions:
1. **Component-Driven Single Page (SPA):** Built with **React 19** and **Vite 8** for client-side filtering (Track categories, Gallery tabs, Multi-edition archives) with zero network latency.
2. **Single Source of Truth (SSOT):** All event text, metrics, track winners, past editions, timeline stops, and sponsor details are isolated inside `src/data/eventData.js`. Future club leads can update the entire site by editing plain JavaScript arrays without touching component logic.
3. **Tailwind CSS v4 + Custom Neo-Brutalist Primitives:** Modern `@tailwindcss/vite` integration using reusable utility classes (`.neo-box`, `.neo-button`, `.section-tag`, `.blueprint-grid`) ensuring strict style consistency.
4. **Zero-Cost Edge Deployment:** Compiles to a lightweight static bundle (`dist/`) that deploys natively to Vercel, Cloudflare Pages, or GitHub Pages with global CDN caching.

---

## 📂 Project Structure

```
sandbox-post-event/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions workflow for GitHub Pages
├── public/
│   ├── favicon.svg               # Neo-Brutalist yellow shield favicon
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EventExperience.jsx   # 24H Timeline & Aftermovie spotlight card
│   │   ├── Footer.jsx            # Socials, campus location, back-to-top button
│   │   ├── Hero.jsx              # Hero headline, marquee ticker, confetti trigger
│   │   ├── ImpactMetrics.jsx     # 6 pastel KPI cards (24h, 320+, 64, 8, 50k, 45+)
│   │   ├── Navbar.jsx            # Sticky scrollspy navigation & v3.0 trigger
│   │   ├── PastEventsArchive.jsx # Interactive multi-edition Aegis Chronicles
│   │   ├── PhotoGallery.jsx      # Filterable photo grid & lightbox modal
│   │   ├── SponsorsWall.jsx      # Title, Platinum, Gold & Institutional partners
│   │   ├── TeamSection.jsx       # Host Dept. CSE (Cyber Security) & Coordinators
│   │   ├── V3Modal.jsx           # SandBox v3.0 Early Access waitlist popup modal
│   │   └── WinnersShowcase.jsx   # Grand Podium (#1, #2, #3) & 8 Track Filters
│   ├── data/
│   │   └── eventData.js          # Central single-file content repository (SSOT)
│   ├── App.jsx                   # Single-scroll layout assembler
│   ├── index.css                 # Neo-Brutalist primitives & marquee keyframes
│   └── main.jsx
├── index.html                    # Typography: Space Grotesk, Inter, Caveat, Mono
├── package.json
├── README.md                     # Technical architecture & redesign proposal
├── SandBox_PostEvent_Redesign_Proposal.docx # Comprehensive 8-section formal proposal
└── vite.config.js                # Vite 8 + Tailwind v4 + relative base config
```

---

## 💻 Local Setup & Development

```bash
# 1. Clone repository
git clone https://github.com/jhamanas/sandbox-aegis-demo.git
cd sandbox-aegis-demo

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# -> http://localhost:5173/

# 4. Build optimized production bundle
npm run build
# -> Output in dist/
```

---

## 🚀 Deployment Strategy

* **Vercel (Active Production):** Connected directly to branch `main`. Auto-deploys on every push.
* **GitHub Pages (Alternative):** Built via `.github/workflows/deploy.yml` and pre-published on the `gh-pages` branch.
* **Hosting Cost:** ₹0 (Static edge-cached architecture).

---

## 📄 Formal Proposal Document

The repository includes a ready-to-present formal proposal in Microsoft Word format:
👉 **[`SandBox_PostEvent_Redesign_Proposal.docx`](./SandBox_PostEvent_Redesign_Proposal.docx)**

Contains:
1. Executive Summary & Problem Analysis
2. Stakeholder Value Proposition (Sponsors, Winners, Hackers, Faculty)
3. 100% Theme Preservation Specification
4. 9-Section Single-Scroll Information Architecture
5. Single-File Content Maintenance Guide
6. 48-Hour Production Rollout Plan & Required Asset Checklist
7. Club & Faculty Sign-Off Table
