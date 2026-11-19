import React from 'react';
import { Clock, Users, Code2, Shield, Trophy, GraduationCap } from 'lucide-react';
import { EVENT_STATS } from '../data/eventData';

export default function ImpactMetrics() {
  const getCardBg = (idx) => {
    switch (idx) {
      case 0: return 'bg-[#E0F2FE]';
      case 1: return 'bg-[#FFDE59]';
      case 2: return 'bg-[#DCFCE7]';
      case 3: return 'bg-[#FCE7F3]';
      case 4: return 'bg-[#FEF08A]';
      case 5: return 'bg-[#FED7AA]';
      default: return 'bg-white';
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-black" />;
      case 'Users': return <Users className="w-6 h-6 text-black" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-black" />;
      case 'Shield': return <Shield className="w-6 h-6 text-black" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-black" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-black" />;
      default: return <Shield className="w-6 h-6 text-black" />;
    }
  };

  return (
    <section id="metrics" className="py-20 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag mb-3">
            THE 24 HOURS IN NUMBERS
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            Impact & Scale of SandBox
          </h2>
          <p className="font-doodle text-2xl text-rose-600 font-bold mt-2">
            "A whole weekend of zero sleep and relentless building!"
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {EVENT_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className={`p-5 border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] transition-all flex flex-col justify-between ${getCardBg(idx)}`}
            >
              <div className="w-10 h-10 bg-white border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center mb-4">
                {getIcon(stat.icon)}
              </div>

              <div>
                <div className="flex items-baseline gap-0.5">
                  {stat.prefix && <span className="font-heading font-black text-2xl text-black">{stat.prefix}</span>}
                  <span className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tighter">
                    {stat.value}
                  </span>
                  {stat.suffix && <span className="font-heading font-black text-2xl text-black">{stat.suffix}</span>}
                </div>

                <p className="font-mono text-xs font-black uppercase text-black mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
