import React, { useState } from 'react';
import { Trophy, Medal, ExternalLink, ShieldCheck, Sparkles, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PODIUM_WINNERS, TRACK_WINNERS } from '../data/eventData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function WinnersShowcase() {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const triggerPodiumConfetti = (rank) => {
    if (rank === 1) {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FFDE59', '#5CE1E6', '#FF66C4', '#000000', '#FFFFFF']
      });
    }
  };

  const tracksList = [
    { id: 'all', label: 'All Tracks' },
    { id: 'threat-detection', label: 'Threat Detection' },
    { id: 'ai-copilot', label: 'AI Copilot' },
    { id: 'appsec', label: 'AppSec' },
    { id: 'web3sec', label: 'Web3 Security' },
    { id: 'privacy', label: 'Data Privacy' },
    { id: 'gamification', label: 'Gamification' },
    { id: 'darkweb', label: 'Dark Web' },
    { id: 'open-innovation', label: 'Open Innovation' },
  ];

  const filteredTrackWinners = selectedTrack === 'all'
    ? TRACK_WINNERS
    : TRACK_WINNERS.filter(w => w.id === selectedTrack);

  return (
    <section id="winners" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag mb-3">
            HALL OF FAME & CHAMPIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            The SandBox Champions
          </h2>
          <p className="font-doodle text-2xl text-black font-bold mt-2">
            "64 submissions, 24 hours of sweat, 3 ultimate winners."
          </p>
        </div>

        {/* 🏆 THE PODIUM (Grand Champions) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-black">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-black flex items-center gap-2">
              <Medal className="w-6 h-6 text-black" />
              <span>Overall Grand Podium</span>
            </h3>
            <span className="font-mono text-xs font-bold bg-[#DCFCE7] px-2 py-0.5 border-2 border-black">
              Evaluated Across All 8 Tracks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PODIUM_WINNERS.map((winner) => {
              const isFirst = winner.rank === 1;

              return (
                <div
                  key={winner.rank}
                  onClick={() => triggerPodiumConfetti(winner.rank)}
                  className={`flex flex-col justify-between p-6 sm:p-7 border-4 border-black transition-all cursor-pointer ${
                    isFirst 
                      ? 'bg-[#FFDE59] shadow-[10px_10px_0px_#000] md:-translate-y-4 hover:-translate-y-6 hover:shadow-[14px_14px_0px_#000]' 
                      : winner.rank === 2
                      ? 'bg-white shadow-[6px_6px_0px_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0px_#000]'
                      : 'bg-[#FED7AA] shadow-[6px_6px_0px_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0px_#000]'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 text-xs font-mono font-black tracking-wider uppercase bg-black text-white border-2 border-black">
                      {winner.badge}
                    </span>
                    <span className="text-xs font-mono font-black bg-white px-2 py-1 border-2 border-black text-black">
                      {winner.prize}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black text-white border-2 border-black flex items-center justify-center font-heading font-black text-lg">
                        #{winner.rank}
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-black text-black tracking-tight uppercase">
                          {winner.projectName}
                        </h4>
                        <span className="text-xs text-black font-mono font-bold">Team: {winner.teamName}</span>
                      </div>
                    </div>

                    <div className="inline-block px-2 py-0.5 bg-black text-white text-[11px] font-mono font-bold uppercase">
                      Track: {winner.track}
                    </div>

                    <p className="text-sm font-medium text-black leading-relaxed">
                      {winner.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {winner.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[11px] font-mono font-bold bg-white text-black border-2 border-black">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Members & Links */}
                  <div className="pt-6 mt-6 border-t-2 border-black space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-black font-mono font-bold">
                      <Users className="w-4 h-4" />
                      <span>{winner.members.join(', ')}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={winner.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-button bg-white text-black px-3 py-1.5 text-xs flex items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      <a
                        href={winner.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-button bg-black text-white px-3 py-1.5 text-xs flex items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Demo Pitch</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 🛡️ TRACK-BY-TRACK CHAMPIONS */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-3 border-b-2 border-black">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-black flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-black" />
                <span>Track Category Winners</span>
              </h3>
              <p className="text-xs font-mono font-bold text-gray-700 mt-0.5">Top hacks chosen within each security domain</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {tracksList.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id)}
                  className={`px-3.5 py-1.5 text-xs font-heading font-black uppercase border-2 border-black transition-all cursor-pointer ${
                    selectedTrack === t.id
                      ? 'bg-[#FFDE59] text-black shadow-[3px_3px_0px_#000] translate-x-0.5 translate-y-0.5 ring-2 ring-black'
                      : 'bg-white text-black hover:bg-[#FFFBEB] hover:text-black shadow-[3px_3px_0px_#000]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Track Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTrackWinners.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 bg-[#5CE1E6] text-black border-2 border-black inline-block">
                    {item.award}
                  </span>

                  <h4 className="text-xl font-heading font-black text-black uppercase tracking-tight">
                    {item.projectName}
                  </h4>

                  <span className="text-xs text-black font-mono font-bold block bg-[#FFFBEB] p-1 border-2 border-black">
                    Team: {item.team}
                  </span>

                  <p className="text-xs font-medium text-gray-800 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tech.map(t => (
                      <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-gray-100 text-black border border-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono font-bold text-black">
                  <span>{item.members.join(', ')}</span>
                  <span className="bg-[#DCFCE7] px-1.5 py-0.5 border border-black">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
