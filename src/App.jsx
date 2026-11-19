import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import WinnersShowcase from './components/WinnersShowcase';
import EventExperience from './components/EventExperience';
import PastEventsArchive from './components/PastEventsArchive';
import PhotoGallery from './components/PhotoGallery';
import SponsorsWall from './components/SponsorsWall';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import V3Modal from './components/V3Modal';

export default function App() {
  const [isV3ModalOpen, setIsV3ModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navigation */}
      <Navbar onOpenV3Modal={() => setIsV3ModalOpen(true)} />

      {/* Main Single Scroll Container */}
      <main className="flex-grow">
        
        {/* 1. Hero Section (Victory & Wrap-up) */}
        <Hero 
          onExploreWinners={() => {
            const el = document.getElementById('winners');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenV3Modal={() => setIsV3ModalOpen(true)}
        />

        {/* 2. Impact & Scale Numbers */}
        <ImpactMetrics />

        {/* 3. Hall of Fame & Track Champions */}
        <WinnersShowcase />

        {/* 4. 24-Hour Timeline Journey */}
        <EventExperience />

        {/* 5. Past Events & Aegis Legacy Archive */}
        <PastEventsArchive onOpenV3Modal={() => setIsV3ModalOpen(true)} />

        {/* 6. Media & Highlights Gallery */}
        <PhotoGallery />

        {/* 7. Wall of Gratitude & Sponsors */}
        <SponsorsWall />

        {/* 8. Organizing Crew & Department */}
        <TeamSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* SandBox v3.0 Waitlist Modal */}
      <V3Modal 
        isOpen={isV3ModalOpen} 
        onClose={() => setIsV3ModalOpen(false)} 
      />

    </div>
  );
}
