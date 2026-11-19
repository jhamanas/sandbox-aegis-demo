import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';
import { SPONSORS_DATA } from '../data/eventData';

export default function SponsorsWall() {
  return (
    <section id="sponsors" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag mb-3">
            WALL OF GRATITUDE
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            Our Partners & Sponsors
          </h2>
          <p className="font-doodle text-2xl text-black font-bold mt-2">
            "Thank you for making SandBox v2.0 an unforgettable reality!"
          </p>
        </div>

        {/* Highlighted Title Sponsor Card */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] relative overflow-hidden">
            <div className="bg-[#FFDE59] border-b-4 border-black px-6 py-2 flex items-center justify-between">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                OFFICIAL TITLE SPONSOR
              </span>
              <span className="font-mono text-xs font-bold text-black">
                Premier Partner
              </span>
            </div>

            <div className="p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 bg-[#FFFBEB] border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-4xl shrink-0">
                🛡️
              </div>
              <div className="space-y-2">
                <span className="font-doodle text-xl text-rose-600 font-bold block">
                  Powering Next-Gen Cyber Leaders
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-black text-black uppercase">
                  Hacker School
                </h3>
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  Premier cybersecurity training & research academy delivering hands-on offensive defense, industry certifications, and career mentoring for student developers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPONSORS_DATA.filter(s => s.name !== 'Hacker School').map((sponsor, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 bg-[#FFDE59] text-black border-2 border-black mb-3 inline-block">
                  {sponsor.tier}
                </span>

                <div className="w-12 h-12 bg-[#FFFBEB] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-2xl mb-4">
                  {sponsor.logo}
                </div>

                <h4 className="text-2xl font-heading font-black text-black uppercase mb-1">
                  {sponsor.name}
                </h4>

                <p className="text-xs font-medium text-gray-700">
                  {sponsor.role}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t-2 border-black flex items-center gap-2 text-xs font-mono font-bold text-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Partner Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mentors & Judges Shoutout Box */}
        <div className="mt-12 p-6 bg-[#FEF08A] border-4 border-black shadow-[6px_6px_0px_#000] text-center max-w-3xl mx-auto space-y-2">
          <h4 className="text-base font-heading font-black text-black uppercase tracking-wider">
            Special Gratitude to Our 16+ Industry Judges & Technical Mentors
          </h4>
          <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
            From conducting 1-on-1 code reviews at midnight to evaluating technical feasibility during the 3-minute final pitches, our jury panel helped elevate student projects to production-grade security standards.
          </p>
        </div>

      </div>
    </section>
  );
}
