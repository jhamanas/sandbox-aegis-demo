import React, { useState } from 'react';
import { MapPin, Users, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PAST_EVENTS_ARCHIVE } from '../data/eventData';

export default function PastEventsArchive({ onOpenV3Modal }) {
  const [selectedEventId, setSelectedEventId] = useState(PAST_EVENTS_ARCHIVE[0].id);

  const selectedEvent = PAST_EVENTS_ARCHIVE.find(e => e.id === selectedEventId) || PAST_EVENTS_ARCHIVE[0];

  return (
    <section id="archives" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag mb-3">
            AEGIS CLUB CHRONICLES
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            Past Events & Legacy Showcase
          </h2>
          <p className="font-doodle text-2xl text-black font-bold mt-2">
            "A history of student-led cybersecurity innovation at DSCE."
          </p>
        </div>

        {/* Master-Detail / Interactive Archive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of Editions */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase font-black tracking-wider text-black mb-2 px-1 flex items-center justify-between">
              <span>Event Chronicles</span>
              <span className="bg-[#FFDE59] px-2 py-0.5 border border-black">5 Editions</span>
            </div>

            {PAST_EVENTS_ARCHIVE.map((event) => {
              const isSelected = event.id === selectedEventId;

              return (
                <div
                  key={event.id}
                  onClick={() => setSelectedEventId(event.id)}
                  className={`p-5 border-4 border-black transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FFDE59] shadow-[6px_6px_0px_#000] -translate-y-1'
                      : 'bg-white shadow-[4px_4px_0px_#000] hover:bg-gray-50 hover:shadow-[6px_6px_0px_#000]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black px-2 py-0.5 bg-black text-white">
                        {event.edition}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-800">
                        {event.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-heading font-black uppercase text-black">
                      {event.title}
                    </h4>

                    <p className="text-xs font-medium text-gray-700">
                      {event.type}
                    </p>
                  </div>

                  <ChevronRight className={`w-6 h-6 transition-transform ${
                    isSelected ? 'text-black translate-x-1' : 'text-gray-400'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Event Spotlight Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 bg-white border-4 border-black shadow-[10px_10px_0px_#000] relative space-y-6">
              
              {/* Retro Design Handles */}
              <div className="w-3.5 h-3.5 bg-[#5CE1E6] border-2 border-black absolute -top-2 -left-2" />
              <div className="w-3.5 h-3.5 bg-[#FF66C4] border-2 border-black absolute -top-2 -right-2" />
              <div className="w-3.5 h-3.5 bg-[#FFDE59] border-2 border-black absolute -bottom-2 -left-2" />
              <div className="w-3.5 h-3.5 bg-[#5CE1E6] border-2 border-black absolute -bottom-2 -right-2" />

              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black px-2.5 py-1 bg-black text-white">
                    {selectedEvent.edition}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 border border-black bg-[#DCFCE7]">
                    Status: {selectedEvent.status}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-black">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>{selectedEvent.venue}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-black uppercase mb-1">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm font-mono font-bold text-gray-800 bg-[#FFFBEB] p-2 border-2 border-black inline-block mt-1">
                  {selectedEvent.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-black leading-relaxed">
                {selectedEvent.description}
              </p>

              {/* Stats Highlight Banner */}
              <div className="p-4 bg-[#E0F2FE] border-3 border-black font-mono text-xs font-black text-black flex items-center gap-2 shadow-[3px_3px_0px_#000]">
                <Users className="w-5 h-5 text-black shrink-0" />
                <span>{selectedEvent.stats}</span>
              </div>

              {/* Key Highlights Checklist */}
              <div>
                <h5 className="text-xs font-mono uppercase font-black text-black mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-black" />
                  <span>Key Pillars & Highlights</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-black bg-[#FFFBEB] p-2 border-2 border-black">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t-2 border-black flex flex-wrap items-center justify-between gap-4">
                {selectedEvent.id === 'sandbox-v3' ? (
                  <button
                    onClick={onOpenV3Modal}
                    className="neo-button bg-[#FFDE59] text-black px-5 py-2.5 text-xs flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Join SandBox v3.0 Early Access</span>
                  </button>
                ) : (
                  <div className="font-mono text-xs font-bold text-gray-800">
                    Archived Record • Aegis Database
                  </div>
                )}

                <span className="text-xs font-mono font-bold bg-gray-100 px-2 py-1 border border-black">
                  Event ID: #{selectedEvent.id}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
