import React from 'react';
import { Phone, Shield } from 'lucide-react';
import { TEAM_COORDINATORS } from '../data/eventData';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag mb-3">
            ORGANIZING CREW
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
            The Minds Behind SandBox
          </h2>
          <p className="font-doodle text-2xl text-rose-600 font-bold mt-2">
            "Department of CSE (Cyber Security) • DSCE Bengaluru"
          </p>
        </div>

        {/* Department & Club Anchor Card */}
        <div className="mb-12 p-8 bg-white border-4 border-black shadow-[8px_8px_0px_#000] max-w-4xl mx-auto text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-[#FFDE59] border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center">
            <Shield className="w-8 h-8 text-black" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-black">
              Aegis Club & Dept. of CSE (Cyber Security)
            </h3>
            <p className="text-sm font-mono font-bold text-gray-800 mt-1">
              Dayananda Sagar College of Engineering, Shavige Malleshwara Hills, Bengaluru 560078
            </p>
          </div>
          <p className="text-sm font-medium text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Aegis Club is dedicated to fostering hands-on cybersecurity expertise through student-driven hackathons, capture-the-flag competitions, reverse engineering boot camps, and vulnerability research.
          </p>
        </div>

        {/* Lead Student Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {TEAM_COORDINATORS.filter(c => c.name).map((coordinator, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase px-2 py-0.5 bg-[#FFDE59] text-black border-2 border-black">
                  Lead Coordinator
                </span>
                <span className="text-xs font-mono font-bold text-gray-700">
                  {coordinator.focus}
                </span>
              </div>

              <h4 className="text-2xl font-heading font-black uppercase text-black">
                {coordinator.name}
              </h4>

              <p className="text-xs font-bold text-gray-700">
                {coordinator.role}
              </p>

              <div className="pt-3 border-t-2 border-black flex items-center gap-2 text-xs font-mono font-bold text-black">
                <Phone className="w-4 h-4 text-black" />
                <span>{coordinator.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-committee Shoutout */}
        <div className="mt-12 text-center text-xs font-mono font-black uppercase text-gray-700">
          <p>
            Kudos to the Technical Platform Team • Logistics & Hospitality Crew • PR & Design Leads • Student Volunteers
          </p>
        </div>

      </div>
    </section>
  );
}
