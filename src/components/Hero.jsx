import React from 'react';
import { Trophy, Film, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onExploreWinners, onOpenV3Modal }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFDE59', '#5CE1E6', '#FF66C4', '#000000', '#FFFFFF']
    });
  };

  return (
    <header id="overview" className="pt-28 pb-0 bg-[#FFFBEB] blueprint-grid relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Top Stickers & Badges */}
        <div className="flex items-center justify-center mb-8">
          
          <div className="neo-box bg-[#FFDE59] px-4 py-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black animate-ping" />
            <span className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-black">
              MAR 7–8, 2026 • MISSION ACCOMPLISHED
            </span>
          </div>

        </div>

        {/* Hero Title Container */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-block p-1 bg-white border-2 border-black shadow-[4px_4px_0px_#000] -rotate-1">
            <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-widest px-3 py-0.5 bg-[#FFDE59] text-black">
              Official Post-Event Showcase
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter text-black uppercase leading-[1.05]">
            24 Hours of Creation, <br />
            <span className="bg-[#FFDE59] px-2 sm:px-4 border-4 border-black shadow-[6px_6px_0px_#000] inline-block my-1 -rotate-1">
              Collaboration & Chaos.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-gray-900 max-w-2xl mx-auto leading-relaxed">
            SandBox v2.0 has concluded! Over 320+ builders hacked through the night at Dayananda Sagar College of Engineering, producing 64 high-impact cybersecurity defense systems.
          </p>

          {/* Title Sponsor Callout */}
          <div className="p-4 bg-white border-4 border-black shadow-[6px_6px_0px_#000] max-w-xl mx-auto text-center space-y-1">
            <span className="font-doodle text-lg text-rose-600 font-bold block">
              We Proudly Present The Title Sponsor Of This Hackathon:
            </span>
            <span className="font-heading font-black text-2xl tracking-tight text-black uppercase flex items-center justify-center gap-2">
              🛡️ HackerSchool
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            
            <a
              href="#winners"
              className="neo-button bg-[#FFDE59] text-black px-7 py-3.5 text-sm sm:text-base flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 text-black" />
              <span>Explore Winning Hacks</span>
            </a>

            <button
              onClick={triggerConfetti}
              className="neo-button bg-[#5CE1E6] text-black px-7 py-3.5 text-sm sm:text-base flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Celebrate Hackers 🎉</span>
            </button>

            <a
              href="#timeline"
              className="neo-button bg-white text-black px-6 py-3.5 text-sm sm:text-base flex items-center gap-2"
            >
              <Film className="w-5 h-5" />
              <span>24H Journey</span>
            </a>

          </div>

        </div>

        {/* Sponsor Badges Bar */}
        <div className="mt-14 pt-6 border-t-2 border-black flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <span className="font-mono text-xs uppercase font-bold text-gray-700">Supported by:</span>
          
          <div className="neo-box px-3 py-1 bg-white text-xs font-heading font-black text-black">
            HackerSchool (Title)
          </div>
          <div className="neo-box px-3 py-1 bg-[#E0F2FE] text-xs font-heading font-black text-black">
            DERBI Foundation
          </div>
          <div className="neo-box px-3 py-1 bg-[#FCE7F3] text-xs font-heading font-black text-black">
            Sagar Hospitals
          </div>
          <div className="neo-box px-3 py-1 bg-[#FEF08A] text-xs font-heading font-black text-black">
            Nopal (Platinum)
          </div>
          <div className="neo-box px-3 py-1 bg-[#DCFCE7] text-xs font-heading font-black text-black">
            SecPod (Gold)
          </div>
        </div>

      </div>

      {/* The Iconic Marquee Ticker */}
      <div className="w-full overflow-hidden border-y-4 border-black bg-[#FFDE59] py-3.5">
        <div className="animate-marquee font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-black select-none flex items-center gap-8">
          <span>BUILD • BREAK • CREATE • SANDBOX • HACKATHON • 24 HOURS OF CHAOS CONQUERED • 320+ HACKERS • 64 PROJECTS • 8 TRACKS • ₹50,000+ PRIZES •</span>
          <span>BUILD • BREAK • CREATE • SANDBOX • HACKATHON • 24 HOURS OF CHAOS CONQUERED • 320+ HACKERS • 64 PROJECTS • 8 TRACKS • ₹50,000+ PRIZES •</span>
        </div>
      </div>

    </header>
  );
}
