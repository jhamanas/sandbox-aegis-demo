import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';

export default function PhotoGallery() {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = [
    {
      id: 1,
      category: 'awards',
      title: 'Grand Champions Award Ceremony',
      desc: 'Team CipherMesh lifting the SandBox v2.0 Title Trophy on the main auditorium stage.',
      tag: 'Awards & Podium',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'floor',
      title: '300+ Hackers in the Sandbox',
      desc: 'Pan-India builders collaborating across the DSCE cybersecurity labs.',
      tag: 'Hacking Floor',
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'mentorship',
      title: 'Architecture Review with Mentors',
      desc: 'Security engineers from Hacker School and SecPod battle-testing API threat models.',
      tag: 'Mentorship',
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'midnight',
      title: '02:00 AM Midnight Debugging Sprint',
      desc: 'Energy drinks, mechanical keyboards, and 3 AM terminal crunch.',
      tag: 'Midnight Chaos',
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'floor',
      title: 'Hardware & RF Security Workstation',
      desc: 'Testing SDR radios, satellite downlink intercepts, and embedded firmware attacks.',
      tag: 'Hacking Floor',
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'awards',
      title: 'Track Winners Celebration',
      desc: 'Awarding cash prizes, official certificates, and partner swag packs.',
      tag: 'Valedictory',
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FFFBEB] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag mb-3">
              VISUAL ARCHIVES
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-black tracking-tight uppercase">
              Event Highlights & Gallery
            </h2>
            <p className="font-doodle text-2xl text-rose-600 font-bold mt-1">
              "Capturing the real energy of the hacking floor."
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'floor', label: 'Hacking Floor' },
              { id: 'mentorship', label: 'Mentors & Jury' },
              { id: 'midnight', label: 'Midnight Chaos' },
              { id: 'awards', label: 'Awards & Podium' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-heading font-black uppercase border-2 border-black transition-all ${
                  filter === f.id
                    ? 'bg-[#FFDE59] shadow-[3px_3px_0px_#000] translate-x-0.5 translate-y-0.5'
                    : 'bg-white hover:bg-gray-100 shadow-[3px_3px_0px_#000]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all cursor-pointer overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative border-b-3 border-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#FFDE59] text-xs font-mono font-black uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                  {photo.tag}
                </span>

                <div className="absolute top-3 right-3 p-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-heading font-black text-black uppercase">
                  {photo.title}
                </h4>
                <p className="text-xs font-medium text-gray-700 mt-1 line-clamp-2">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white border-4 border-black shadow-[12px_12px_0px_#000] relative"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#FFDE59] border-2 border-black shadow-[2px_2px_0px_#000] text-black hover:bg-yellow-400"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="w-full max-h-[65vh] object-cover border-b-4 border-black"
            />

            <div className="p-6 bg-[#FFFBEB]">
              <span className="inline-block px-2 py-0.5 bg-[#5CE1E6] text-xs font-mono font-black uppercase border-2 border-black mb-2">
                {activePhoto.tag}
              </span>
              <h3 className="text-2xl font-heading font-black text-black uppercase">
                {activePhoto.title}
              </h3>
              <p className="text-sm font-medium text-gray-800 mt-1">
                {activePhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
