import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function V3Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFDE59', '#5CE1E6', '#FF66C4', '#000000']
    });

    setSubmitted(true);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="max-w-md w-full bg-white border-4 border-black shadow-[12px_12px_0px_#000] p-6 sm:p-8 relative space-y-5"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-[#FFDE59] border-2 border-black shadow-[2px_2px_0px_#000] text-black hover:bg-yellow-400"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="w-12 h-12 bg-[#FFDE59] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-black" />
            </div>

            <div>
              <div className="inline-block px-2.5 py-0.5 text-xs font-mono font-black uppercase bg-[#5CE1E6] text-black border-2 border-black mb-2">
                COMING SPRING 2027
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-black uppercase">
                Early Access: SandBox v3.0
              </h3>
              <p className="text-xs font-medium text-gray-700 mt-1 leading-relaxed">
                Be the first to receive track briefs, priority team slots, and hardware CTF challenge announcements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FFFBEB] border-3 border-black text-sm text-black focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-black mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="hacker@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FFFBEB] border-3 border-black text-sm text-black focus:outline-none font-mono"
                />
              </div>

              <button
                type="submit"
                className="neo-button w-full py-3 bg-[#FFDE59] text-black text-sm flex items-center justify-center gap-2"
              >
                <span>Notify Me When Registrations Open</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#DCFCE7] border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-heading font-black text-black uppercase">
              You're on the Priority List!
            </h3>
            <p className="text-xs font-medium text-gray-700 max-w-xs mx-auto leading-relaxed">
              We've logged your credentials. You'll receive direct updates and pre-registration access for SandBox v3.0 in Spring 2027.
            </p>
            <button
              onClick={onClose}
              className="neo-button px-6 py-2 bg-black text-white text-xs font-mono"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
