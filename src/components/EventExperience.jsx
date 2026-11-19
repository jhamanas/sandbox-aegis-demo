import React from 'react';
import { Play, Users, Presentation, Terminal, Zap, Coffee, Trophy, Clock } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/eventData';

export default function EventExperience() {
  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <Users className="w-5 h-5 text-black" />;
      case 1: return <Presentation className="w-5 h-5 text-black" />;
      case 2: return <Terminal className="w-5 h-5 text-black" />;
      case 3: return <Zap className="w-5 h-5 text-black" />;
      case 5: return <Coffee className="w-5 h-5 text-black" />;
      case 9: return <Trophy className="w-5 h-5 text-black" />;
      default: return <Clock className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="timeline" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag mb-3">
            24-HOUR BATTLEGROUND RECAP
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            The Journey of SandBox v2.0
          </h2>
          <p className="font-doodle text-2xl text-rose-600 font-bold mt-2">
            "From morning tea to midnight bugs and the final stage demo!"
          </p>
        </div>

        {/* Video / Aftermovie Teaser Card */}
        <div className="mb-16 p-8 sm:p-12 bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-block px-3 py-1 bg-[#FF66C4] text-black font-heading font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
              OFFICIAL AFTERMOVIE TEASER
            </div>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-black uppercase">
              Relive the Chaos & Energy
            </h3>
            <p className="text-sm font-medium text-gray-800 leading-relaxed">
              Experience the 24 hours of non-stop collaboration, live offensive/defensive cyber operations, mentor check-ins, and the final moments before code freeze.
            </p>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-black pt-2">
              <span className="bg-[#E0F2FE] px-2 py-0.5 border border-black">Duration: 3m 45s</span>
              <span className="bg-[#DCFCE7] px-2 py-0.5 border border-black">4K Ultra HD</span>
              <span className="bg-[#FEF08A] px-2 py-0.5 border border-black">DSCE Bengaluru</span>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="w-56 h-36 sm:w-64 sm:h-44 bg-[#FFDE59] border-4 border-black shadow-[6px_6px_0px_#000] group-hover:shadow-[10px_10px_0px_#000] group-hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 bg-white border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-black ml-1 text-black" />
              </div>
              <span className="font-heading font-black text-xs uppercase text-black tracking-wider">
                Watch Aftermovie ↗
              </span>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="space-y-6 relative">
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-black -translate-x-1/2 hidden sm:block" />

          {TIMELINE_EVENTS.map((event, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-8 sm:text-right">
                  <div className={`p-6 bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all ${
                    isEven ? 'sm:text-left sm:mr-auto' : 'sm:text-right sm:ml-auto'
                  }`}>
                    <span className="inline-block px-2.5 py-1 text-xs font-mono font-black uppercase bg-[#FFDE59] text-black border-2 border-black mb-2 shadow-[2px_2px_0px_#000]">
                      {event.time}
                    </span>
                    <h4 className="text-xl font-heading font-black text-black uppercase mb-2">
                      {event.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Central Icon Bubble */}
                <div className="absolute sm:left-1/2 left-0 -translate-x-0 sm:-translate-x-1/2 w-10 h-10 bg-[#5CE1E6] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center z-10">
                  {getStepIcon(idx)}
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
