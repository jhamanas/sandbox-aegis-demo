export const EVENT_STATS = [
  { label: "Consecutive Hours", value: "24", icon: "Clock", suffix: "h" },
  { label: "Builders & Hackers", value: "320", icon: "Users", suffix: "+" },
  { label: "Projects Deployed", value: "64", icon: "Code2", suffix: "" },
  { label: "Defense Tracks", value: "8", icon: "Shield", suffix: "" },
  { label: "Prize Pool Awarded", value: "50,000", icon: "Trophy", prefix: "₹", suffix: "+" },
  { label: "Colleges Represented", value: "45", icon: "GraduationCap", suffix: "+" }
];

export const PODIUM_WINNERS = [
  {
    rank: 1,
    title: "1st Place Grand Champion",
    teamName: "CipherMesh",
    projectName: "SentinelZero",
    tagline: "Autonomous Agentic Threat Neutralization Mesh for Distributed Infrastructure",
    track: "AI Security Copilot",
    prize: "₹25,000 + Title Trophy",
    members: ["Aarav Sharma", "Pooja Hegde", "Rahul Nair", "Sneha K"],
    description: "SentinelZero uses multi-agent reinforcement learning to detect zero-day API exploit payloads in real-time, automatically isolating compromised microservices without service downtime.",
    tags: ["Python", "eBPF", "Gemini 1.5 Pro", "Docker", "Wasm"],
    github: "https://github.com/aegis-sandbox/sentinel-zero",
    demo: "https://sandbox.aegisclub.site/projects/sentinel-zero",
    color: "from-amber-400 to-yellow-500",
    badge: "GRAND CHAMPION"
  },
  {
    rank: 2,
    title: "2nd Place Runner-Up",
    teamName: "ZkDefenders",
    projectName: "ChainGuard",
    tagline: "Zero-Knowledge Cross-Chain Smart Contract Vulnerability Prober",
    track: "Web3 Security (WEB3SEC)",
    prize: "₹15,000 + Silver Plaque",
    members: ["Karthik Rao", "Devansh Mehta", "Ananya Sen"],
    description: "Formal verification suite with ZK-proof generation that mathematically verifies DeFi re-entrancy, oracle front-running, and flash loan attack vectors prior to mainnet execution.",
    tags: ["Rust", "Solidity", "Circom", "Foundry", "Next.js"],
    github: "https://github.com/aegis-sandbox/chainguard-zk",
    demo: "https://sandbox.aegisclub.site/projects/chainguard",
    color: "from-slate-300 to-slate-400",
    badge: "1ST RUNNER-UP"
  },
  {
    rank: 3,
    title: "3rd Place Second Runner-Up",
    teamName: "GhostProtocol",
    projectName: "DarkPulse",
    tagline: "Real-Time Dark Web Credential Exfiltration & Threat Telemetry Feed",
    track: "Dark Web Monitoring",
    prize: "₹10,000 + Bronze Plaque",
    members: ["Vikramaditya S", "Neha Joshi", "Tariq Mansoor"],
    description: "Automated Tor and I2P crawler that decodes hidden forum leaks, identifies corporate credentials, and delivers early warning telemetry before compromised keys are auctioned.",
    tags: ["Go", "Tor Onion APIs", "ElasticSearch", "Kafka", "FastAPI"],
    github: "https://github.com/aegis-sandbox/darkpulse-monitor",
    demo: "https://sandbox.aegisclub.site/projects/darkpulse",
    color: "from-amber-600 to-amber-700",
    badge: "2ND RUNNER-UP"
  }
];

export const TRACK_WINNERS = [
  {
    id: "threat-detection",
    track: "Threat Detection & Incident Response",
    projectName: "TraceBack IR",
    team: "KernelPanik",
    members: ["Aditya P", "Shreya V", "Nikhil G"],
    desc: "Kernel-level eBPF behavioral telemetry detector that generates instant MITRE ATT&CK kill-chain visualizations upon breach.",
    tech: ["C", "eBPF", "React", "Rust"],
    award: "Best in Threat Detection"
  },
  {
    id: "ai-copilot",
    track: "AI Security Copilot",
    projectName: "SentinelZero",
    team: "CipherMesh",
    members: ["Aarav S", "Pooja H", "Rahul N", "Sneha K"],
    desc: "Autonomous multi-agent SOC assistant that triages security alerts, synthesizes memory forensics, and deploys mitigation rules.",
    tech: ["Python", "LangChain", "Suricata", "Gemini"],
    award: "Best in AI Copilot"
  },
  {
    id: "appsec",
    track: "Application Security",
    projectName: "ShieldAPI",
    team: "NullPointer",
    members: ["Rohan Roy", "Tanvi Bhat", "Mehul Das"],
    desc: "Zero-latency reverse proxy WAF with automated BOLA (Broken Object Level Authorization) discovery for GraphQL and REST endpoints.",
    tech: ["Envoy", "TypeScript", "Node.js", "Redis"],
    award: "Best in AppSec"
  },
  {
    id: "web3sec",
    track: "Web3 Security (WEB3SEC)",
    projectName: "ChainGuard",
    team: "ZkDefenders",
    members: ["Karthik R", "Devansh M", "Ananya S"],
    desc: "Mathematical formal verification framework for automated audit of cross-chain bridge logic and liquidity vault contracts.",
    tech: ["Solidity", "Rust", "Circom", "Foundry"],
    award: "Best in Web3 Security"
  },
  {
    id: "privacy",
    track: "Data Privacy & Protection",
    projectName: "VaultCrypt Zero",
    team: "EnigmaKnights",
    members: ["Manish T", "Simran Kaur", "Harsh Patel"],
    desc: "Homomorphic encryption middleware for SQL queries allowing healthcare analytics without ever decrypting patient PII in memory.",
    tech: ["C++", "Microsoft SEAL", "PostgreSQL", "Python"],
    award: "Best in Privacy"
  },
  {
    id: "gamification",
    track: "Gamification in Cybersecurity",
    projectName: "CyberRogue: Terminal Odyssey",
    team: "8BitHacks",
    members: ["Siddharth K", "Arjun V", "Deepika M"],
    desc: "Roguelike browser game simulating offensive cyber ops where players learn binary exploitation, buffer overflows, and SQLi through interactive dungeons.",
    tech: ["Phaser.js", "WebAssembly", "Docker Sandboxes", "React"],
    award: "Best in Gamification"
  },
  {
    id: "darkweb",
    track: "Dark Web Monitoring",
    projectName: "DarkPulse",
    team: "GhostProtocol",
    members: ["Vikramaditya S", "Neha J", "Tariq M"],
    desc: "Graph-based correlation engine tracking ransom gang communications and credential dump dumps across 200+ hidden service nodes.",
    tech: ["Go", "Tor", "Neo4j", "Python"],
    award: "Best in Dark Web"
  },
  {
    id: "open-innovation",
    track: "Open Innovation",
    projectName: "SatArmor",
    team: "AeroSec",
    members: ["Chaitanya B", "Ritu Sengupta", "Varun M"],
    desc: "Hardware-in-the-loop RF signal spoofer detection and cryptographic telemetry validator for CubeSat downlink protocols.",
    tech: ["GNU Radio", "SDR (HackRF)", "Python", "C++"],
    award: "Best in Open Innovation"
  }
];

export const PAST_EVENTS_ARCHIVE = [
  {
    id: "sandbox-v2",
    title: "SandBox v2.0 '26",
    edition: "v2.0",
    date: "March 7–8, 2026",
    type: "National 24H Hackathon",
    status: "Concluded",
    tagline: "The Flagship 24-Hour Cybersecurity Battleground",
    venue: "DSCE Campus, Bengaluru",
    stats: "320+ Hackers • 64 Submissions • ₹50,000+ Prize Pool",
    description: "The biggest edition yet! 8 specialized cybersecurity tracks, mentorship from tier-1 cybersecurity companies, and 24 hours of non-stop innovation.",
    highlights: ["8 Security Tracks", "Title Sponsor: Hacker School", "₹50k+ Cash Prizes", "Live Mentorship & 3-stage jury evaluations"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "glitchcraft-26",
    title: "GlitchCraft '26",
    edition: "Fest '26",
    date: "March 5–6, 2026",
    type: "Tech-Cultural Flagship Fest",
    status: "Concluded",
    tagline: "Where Code Meets Culture & Creativity",
    venue: "Dept. of CSE (Cyber Security), DSCE",
    stats: "600+ Attendees • 12 Competitions • ₹30,000 in Prizes",
    description: "The two-day pre-hackathon festival featuring high-stakes Jeopardy-style CTF competitions, LAN gaming, cybersecurity escape rooms, and technical keynotes.",
    highlights: ["24-Hour Jeopardy CTF", "LAN Cyber Esports", "Panel Discussion on AI in Defense", "Cyber Escape Room Challenge"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  },
  {
    id: "sandbox-v1",
    title: "SandBox v1.0 '25",
    edition: "v1.0",
    date: "March 2025",
    type: "Inaugural Hackathon",
    status: "Concluded",
    tagline: "The Genesis of the SandBox Legacy",
    venue: "DSCE Bangalore",
    stats: "180+ Hackers • 38 Submissions • ₹25,000 Prize Pool",
    description: "The foundational edition that started it all. Proved the viability of an offline, student-driven cybersecurity hackathon with participants across South India.",
    highlights: ["Inaugural Edition", "Web & Cloud Security focus", "Keynote by SecPod researchers", "Founding batch project demos"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "bytecon-24",
    title: "ByteCon: CTF & Defense Workshop",
    edition: "Symposium '24",
    date: "October 18–19, 2024",
    type: "Hands-on Bootcamp & CTF",
    status: "Concluded",
    tagline: "Practical Binary Exploitation & Reverse Engineering",
    venue: "Aegis Cyber Lab, DSCE",
    stats: "150+ Trainees • 25 Teams in CTF Sprint",
    description: "Intensive 2-day hands-on boot camp covering Ghidra reverse engineering, memory corruption forensics, and web penetration testing methodologies.",
    highlights: ["Ghidra Deep-Dive", "Hardware Hacking 101", "Speed CTF Tournament", "Industry Guest Speaker from Nopal"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "sandbox-v3",
    title: "SandBox v3.0 '27",
    edition: "v3.0",
    date: "Spring 2027",
    type: "National Hackathon & Defense Summit",
    status: "Upcoming",
    tagline: "Expanding to Global Security Paradigms",
    venue: "DSCE Main Auditorium, Bengaluru",
    stats: "Target: 500+ Hackers • ₹1,00,000+ Prize Pool",
    description: "The next evolution of SandBox. Scaling up to include hardware cyber-physical systems, autonomous red-teaming cages, and international university brackets.",
    highlights: ["Hardware Red-Team Track", "Expanded ₹1L+ Prize Pool", "Global Hybrid Bracket", "Pre-registration Alerts Open"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  }
];

export const TIMELINE_EVENTS = [
  { time: "Day 1 - 09:00 AM", title: "Registration & Hacker Kit Distribution", desc: "Teams checked into DSCE campus, collected hacker credentials, badge lanyards, and set up workstations." },
  { time: "Day 1 - 10:00 AM", title: "Opening Ceremony & Track Briefing", desc: "Welcome address by department heads, introduction to mentors from Hacker School and SecPod, and release of surprise sponsor bounties." },
  { time: "Day 1 - 11:00 AM", title: "Hacking Begins (Timer Starts)", desc: "24-hour clock officially initiated. Keyboards clacking, repository repos spun up, and whiteboards covered in threat models." },
  { time: "Day 1 - 05:00 PM", title: "Mentorship Round 1: Architecture Check", desc: "Senior security architects reviewed technical designs, API schemas, and attack vectors for all 64 teams." },
  { time: "Day 1 - 07:00 PM", title: "Initial Evaluation & Checkpoint", desc: "Jury conducted first progress audit to verify genuine in-hackathon code commits and feasibility." },
  { time: "Day 1 - 12:00 AM", title: "Midnight Gaming & Energy Refuel", desc: "Midnight coffee, energy drinks, gaming trivia showdown, and mini CTF breaks to keep the hacking energy burning." },
  { time: "Day 2 - 08:00 AM", title: "Mentorship Round 2: Pitch Polish", desc: "Final sprint to polish presentation decks, fix deployment bugs, and rehearse 3-minute live demos." },
  { time: "Day 2 - 11:00 AM", title: "Code Freeze & Devfolio Submission", desc: "24 hours concluded! Repos locked, PRs merged, and Devfolio submission portals officially closed." },
  { time: "Day 2 - 02:00 PM", title: "Final Stage Judging & Live Demos", desc: "Top finalist teams presented live functional demos in front of executive jury and industry evaluators." },
  { time: "Day 2 - 03:00 PM", title: "Valedictory & Awards Distribution", desc: "Trophies, certificates, and ₹50,000+ cash prizes awarded to champions, closing SandBox v2.0 in style." }
];

export const SPONSORS_DATA = [
  { tier: "Title Sponsor", name: "Hacker School", role: "Premier Cybersecurity Training & Research", logo: "🛡️" },
  { tier: "Main Sponsor", name: "DERBI Foundation", role: "Technology Business Incubator", logo: "🚀" },
  { tier: "Main Sponsor", name: "Sagar Hospitals", role: "Official Healthcare & Wellness Partner", logo: "🏥" },
  { tier: "Platinum Sponsor", name: "Nopal", role: "Cloud Security & Threat Intelligence", logo: "⚡" },
  { tier: "Gold Sponsor", name: "SecPod", role: "Endpoint Detection & Vulnerability Management", logo: "🔒" }
];

export const TEAM_COORDINATORS = [
  { name: "Samarth BC", role: "Lead Student Coordinator", phone: "+91 91138 31425", focus: "Operations & Logistics" },
  { name: "Kanishk Singh", role: "Lead Student Coordinator", phone: "+91 83181 69685", focus: "Technical & Evaluation" },
  { name: "Dept. of CSE (Cyber Security)", role: "Host Department", org: "Dayananda Sagar College of Engineering", focus: "Bengaluru, Karnataka" }
];
