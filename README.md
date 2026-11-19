# ⚡ SandBox v2.0 '26 — Post-Event Showcase & Aegis Chronicles

[![Live Demo](https://img.shields.io/badge/Live_Demo-sandbox--aegis--demo.vercel.app-FFDE59?style=for-the-badge&logo=vercel&logoColor=black)](https://sandbox-aegis-demo.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jhamanas/sandbox-aegis-demo)

Official single-scroll post-event website redesign for **SandBox v2.0**, organized by **Aegis Club**, Department of Computer Science & Engineering (Cyber Security), Dayananda Sagar College of Engineering (DSCE), Bengaluru.

This project transitions the pre-event registration portal into an always-on, single-scroll legacy showcase, winners hall of fame, multi-edition club chronicle, and SandBox v3.0 lead-capture portal—**preserving 100% of Aegis Club's signature Neo-Brutalist visual identity**.

---

## 🌐 Live Deployments & Key Links

* **🚀 Live Production Website:** [https://sandbox-aegis-demo.vercel.app/](https://sandbox-aegis-demo.vercel.app/)
* **📄 Formal Proposal Document (`.docx`):** [`SandBox_PostEvent_Redesign_Proposal.docx`](./SandBox_PostEvent_Redesign_Proposal.docx)
* **🔗 Original Pre-Event Site:** [https://sandbox.aegisclub.site/#](https://sandbox.aegisclub.site/#)

---

## 📊 SandBox v2.0 Event Impact (Hard Numbers)

| Metric | Stat | Context |
| :--- | :--- | :--- |
| **Duration** | **24 Consecutive Hours** | Non-stop hacking sprint from 11:00 AM Day 1 to 11:00 AM Day 2 |
| **Hacker Attendance** | **320+ Builders** | Pan-India developers, security researchers, and designers |
| **Projects Deployed** | **64 Submissions** | Working functional prototypes submitted across 8 tracks |
| **Cyber Defense Tracks** | **8 Tracks** | Threat Detection, AI Copilot, AppSec, Web3, Privacy, Gamification, Dark Web, Open Innovation |
| **Prize Pool Awarded** | **₹50,000+** | Awarded to Overall Grand Champions and individual Track Category Winners |
| **Colleges Represented** | **45+ Institutions** | Universities and technical colleges nationwide |

---

## 🎨 Visual Identity & Theme Preservation

The redesign strictly adheres to the original website's **Neo-Brutalist Cyber-Retro** design system, ensuring zero loss of brand continuity:

* **Canvas:** Warm cream / ivory (`#FFFBEB`) with a 32px technical blueprint graph-paper grid overlay.
* **Palette:**
  * **Neo-Yellow (`#FFDE59`):** Primary brand accent, section tags, marquee ticker tape, Grand Champion card.
  * **Cyber-Cyan (`#5CE1E6`):** Secondary action pills, track badges, technical handles.
  * **Neo-Pink (`#FF66C4`):** Accent stickers and Aftermovie teaser pill.
  * **Pastel Blocks:** Mint (`#DCFCE7`), Sky Blue (`#E0F2FE`), Soft Orange (`#FED7AA`), and Bright Yellow (`#FEF08A`).
* **Borders & Shadows:** Solid black borders (`border-4 border-black` / `border-2 border-black`) paired with **hard unblurred offset drop shadows** (`shadow-[4px_4px_0px_#000]`, `shadow-[6px_6px_0px_#000]`, `shadow-[8px_8px_0px_#000]`).
* **Geometry:** Sharp rectangular corners (`rounded-none`) across all cards, buttons, tabs, and modals.
* **Typography:** Bold uppercase `Space Grotesk` (weights 800/900) paired with rotated handwritten `Caveat` doodle stickers and `JetBrains Mono` code counters.
* **Animated Ticker:** Continuous `#FFDE59` yellow marquee ticker (`"BUILD • BREAK • CREATE • SANDBOX • HACKATHON..."`) with 4px black borders.

---

## 🏛️ Single-Scroll Information Architecture (9 Sections)

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

### Detailed Section Breakdown:
1. **Sticky Cyber-Navbar (`#overview`):** Fixed header with the SandBox v2.0 badge, WRAP-UP tag, scrollspy anchor links, SandBox v3.0 Early Access button, Discord CTA, and responsive mobile menu.
2. **Hero & Marquee Ticker:** Official wrap-up announcement, "Ctrl+F Your Team, Legend" doodle linking to the Selected Teams directory, Title Sponsor (Hacker School) callout, and an interactive **"Celebrate Hackers 🎉"** confetti burst.
3. **Impact Metrics Strip (`#metrics`):** 6 high-contrast pastel brutalist stat cards providing instant social proof for sponsors and prospective attendees.
4. **Hall of Fame & Track Champions (`#winners`):**
   * **Overall Grand Podium:** 
     * 🥇 **1st Place Grand Champion:** *SentinelZero* by Team CipherMesh (₹25,000 + Title Trophy) — Autonomous AI defense mesh with eBPF telemetry.
     * 🥈 **2nd Place 1st Runner-Up:** *ChainGuard* by Team ZkDefenders (₹15,000 + Silver Plaque) — Zero-knowledge smart contract formal verification.
     * 🥉 **3rd Place 2nd Runner-Up:** *DarkPulse* by Team GhostProtocol (₹10,000 + Bronze Plaque) — Real-time Tor/I2P credential leak monitoring.
   * **Track Category Filter:** Interactive tabs across all 8 security tracks displaying project summaries, tech tags, and source/pitch links.
5. **24-Hour Experience Journey (`#timeline`):** 4K cinematic Aftermovie spotlight card paired with an alternating 10-milestone chronological timeline (Registration $\rightarrow$ Mentoring $\rightarrow$ Midnight Pizza & Gaming $\rightarrow$ 3 AM Bug-Hunting $\rightarrow$ Code Freeze $\rightarrow$ Valedictory).
6. **The Aegis Chronicles Archive (`#archives`):** Master-Detail interactive timeline documenting all major club milestones:
   * **SandBox v2.0 '26 (March 2026):** 320+ Hackers • 64 Projects • 8 Tracks • ₹50,000+ Prizes.
   * **GlitchCraft '26 (March 2026):** Tech-Cultural Fest • 24H Jeopardy CTF • LAN Esports • Escape Room.
   * **SandBox v1.0 '25 (March 2025):** Inaugural Edition • 180+ Hackers • 38 Submissions.
   * **ByteCon '24 (October 2024):** Hands-on Ghidra Reverse Engineering & CTF Symposium.
   * **SandBox v3.0 '27 (Spring 2027):** Upcoming Edition with direct Early Access lead-capture.
7. **Visual Media Gallery (`#gallery`):** Category-filtered photography grid (*Hacking Floor*, *Mentors & Jury*, *Midnight Chaos*, *Awards & Podium*) with a full-screen Neo-Brutalist lightbox viewer.
8. **Wall of Gratitude (`#sponsors`):** 
   * **Title Sponsor:** Hacker School (Premier Cybersecurity Training & Research).
   * **Main Sponsors:** DERBI Foundation (Technology Business Incubator) & Sagar Hospitals (Healthcare Partner).
   * **Platinum Sponsor:** Nopal (Cloud Security & Threat Intelligence).
   * **Gold Sponsor:** SecPod (Endpoint Detection & Vulnerability Management).
   * **Mentor Appreciation:** Recognition banner for the 16+ industry jury members and mentors.
9. **Organizing Crew & Footer (`#team`):** Dept. of CSE (Cyber Security) at DSCE, lead coordinators **Samarth BC** (Operations) and **Kanishk Singh** (Technical), campus address, Devfolio portal link, social channels (Discord, Instagram, LinkedIn, Email), and smooth Back-to-Top button.
10. **SandBox v3.0 Early Access Modal:** Interactive lead-capture modal with Name and Email inputs, confetti confirmation, and submission state.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
* **CSS & Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Icons:** [Lucide React](https://lucide.dev/) (plus inline high-contrast SVGs)
* **Celebration Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
* **Single-File Content Architecture:** `src/data/eventData.js` isolates all event stats, winners, past editions, timeline stops, and sponsor data for zero-code future handovers.
* **Document Engine:** Python `python-docx` (generated the comprehensive proposal document).

---

## 📂 Project Structure

```
sandbox-post-event/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment for GitHub Pages
├── public/
│   ├── favicon.svg               # Neo-Brutalist yellow shield favicon
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── EventExperience.jsx   # 24H Timeline & Aftermovie teaser
│   │   ├── Footer.jsx            # Socials, venue location, back-to-top
│   │   ├── Hero.jsx              # Hero headline, marquee ticker, confetti trigger
│   │   ├── ImpactMetrics.jsx     # 6 pastel KPI cards (24h, 320+, 64, 8, 50k)
│   │   ├── Navbar.jsx            # Sticky scrollspy navigation & v3.0 trigger
│   │   ├── PastEventsArchive.jsx # Interactive multi-edition Aegis Chronicles
│   │   ├── PhotoGallery.jsx      # Filterable photo grid & lightbox modal
│   │   ├── SponsorsWall.jsx      # Title, Platinum, Gold & Institutional partners
│   │   ├── TeamSection.jsx       # Aegis Club DSCE & Student Coordinators
│   │   ├── V3Modal.jsx           # SandBox v3.0 Early Access waitlist popup
│   │   └── WinnersShowcase.jsx   # Grand Podium (#1, #2, #3) & 8 Track Filters
│   ├── data/
│   │   └── eventData.js          # Central single-file content repository
│   ├── App.jsx                   # Single-scroll layout assembler
│   ├── index.css                 # Neo-Brutalist primitives & marquee keyframes
│   └── main.jsx
├── index.html                    # Fonts: Space Grotesk, Inter, Caveat, JetBrains Mono
├── package.json
├── README.md                     # Comprehensive project documentation
├── SandBox_PostEvent_Redesign_Proposal.docx # Full 8-section formal proposal document
└── vite.config.js                # Vite 8 + Tailwind v4 + relative base config
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
* [Node.js](https://nodejs.org/) v18+ (tested on Node v24)
* npm v9+

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/jhamanas/sandbox-aegis-demo.git
cd sandbox-aegis-demo

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, zero-dependency static production bundle is generated in the `dist/` directory.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Current Production)
1. Import the repository `https://github.com/jhamanas/sandbox-aegis-demo` into [Vercel](https://vercel.com/).
2. Framework Preset: **Vite** (auto-detected).
3. Root Directory: `./`.
4. Output Directory: `dist`.
5. Environment Variables: None needed.
6. Click **Deploy**.

### Deploy to GitHub Pages
The project includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Go to repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions** (or select **Deploy from a branch** and choose `gh-pages` / `root`).
3. Your site will be published at `https://<username>.github.io/sandbox-aegis-demo/`.

---

## 📑 Formal Proposal Document

A complete, professionally formatted proposal document is committed directly to the repository:
👉 **[`SandBox_PostEvent_Redesign_Proposal.docx`](./SandBox_PostEvent_Redesign_Proposal.docx)**

The proposal includes:
1. Executive Summary & Problem Statement ("The Post-Event Dead Zone")
2. Stakeholder Value Matrix (Sponsors, Winners, Hackers, Faculty)
3. 100% Neo-Brutalist Theme Preservation Blueprint
4. 9-Section Single-Scroll Information Architecture
5. Single-File Content Maintenance Guide
6. 48-Hour Production Rollout Plan & Required Asset Checklist
7. Club & Faculty Sign-Off Table

---

## 👥 Organizing Crew & Contact Information

* **Host Department:** Department of Computer Science & Engineering (Cyber Security), Dayananda Sagar College of Engineering (DSCE), Bengaluru
* **Lead Student Coordinators:**
  * **Samarth BC** (Operations & Logistics) — Phone: `+91 91138 31425`
  * **Kanishk Singh** (Technical & Evaluation) — Phone: `+91 83181 69685`
* **Department Email:** `aegis-cscyber@dayanandasagar.edu`
* **Instagram:** [@dsce_cscy](https://www.instagram.com/dsce_cscy/)
* **LinkedIn:** [Aegis CS Cyber DSCE](https://www.linkedin.com/company/aegis-cs-cyber-dsce/)

---

## 📄 License
© 2026 **Aegis Club**, DSCE Bengaluru. Built with ❤️ for the student cybersecurity community.
