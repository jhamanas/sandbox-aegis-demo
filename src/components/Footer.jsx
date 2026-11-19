import React from 'react';
import { Mail, ArrowUp, ExternalLink, Heart } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DiscordIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6h0a14.5 14.5 0 0 0-4-1.2 10.5 10.5 0 0 0-.5 1 13.5 13.5 0 0 0-3 0 10.5 10.5 0 0 0-.5-1A14.5 14.5 0 0 0 6 6a16 16 0 0 0-2.5 11 14.5 14.5 0 0 0 4.5 2.3c.4-.5.7-1.1 1-1.7-.5-.2-1-.4-1.5-.7.1-.1.2-.2.3-.3a10.5 10.5 0 0 0 8.4 0c.1.1.2.2.3.3-.5.3-1 .5-1.5.7.3.6.6 1.2 1 1.7a14.5 14.5 0 0 0 4.5-2.3A16 16 0 0 0 18 6Z" />
    <path d="M9 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Z" />
    <path d="M15 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFBEB] text-black border-t-4 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b-4 border-black">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFDE59] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-xl">
                ⚡
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-black">
                SANDBOX <span className="bg-[#FFDE59] px-1 border-2 border-black shadow-[2px_2px_0px_#000]">v2.0</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed max-w-sm">
              The premier national 24-hour cybersecurity hackathon hosted by Aegis Club, Dept. of Computer Science & Engineering (Cyber Security), Dayananda Sagar College of Engineering.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.gg/NkdPRp8RGm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#FFDE59] flex items-center justify-center text-black transition-all"
                aria-label="Discord"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dsce_cscy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#FF66C4] flex items-center justify-center text-black transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/aegis-cs-cyber-dsce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#5CE1E6] flex items-center justify-center text-black transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aegis-cscyber@dayanandasagar.edu"
                className="w-10 h-10 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#DCFCE7] flex items-center justify-center text-black transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-black bg-[#FFDE59] px-2 py-1 border-2 border-black inline-block">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold text-gray-800">
              <li><a href="#metrics" className="hover:underline">Impact Metrics</a></li>
              <li><a href="#winners" className="hover:underline">Hall of Fame & Podium</a></li>
              <li><a href="#timeline" className="hover:underline">24-Hour Timeline</a></li>
              <li><a href="#archives" className="hover:underline">Aegis Archives</a></li>
              <li><a href="#gallery" className="hover:underline">Media Gallery</a></li>
              <li><a href="#sponsors" className="hover:underline">Sponsors & Partners</a></li>
            </ul>
          </div>

          {/* Past Editions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-black bg-[#5CE1E6] px-2 py-1 border-2 border-black inline-block">
              Club Editions
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold text-gray-800">
              <li>SandBox v2.0 '26 (Flagship)</li>
              <li>GlitchCraft '26 (Cultural Fest)</li>
              <li>SandBox v1.0 '25 (Inaugural)</li>
              <li>ByteCon '24 (Symposium)</li>
              <li className="text-rose-600 font-black">SandBox v3.0 '27 (Upcoming)</li>
            </ul>
          </div>

          {/* Venue & Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-black bg-[#DCFCE7] px-2 py-1 border-2 border-black inline-block">
              Venue Location
            </h4>
            <p className="text-xs font-medium text-gray-800 leading-relaxed">
              Dayananda Sagar College of Engineering (DSCE)<br />
              Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru 560078
            </p>
            <div className="pt-2">
              <a
                href="https://aegis-sandbox-v.devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button bg-black text-white px-3 py-1.5 text-xs inline-flex items-center gap-1.5"
              >
                <span>Devfolio Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-black">
          <p className="flex items-center gap-1">
            © 2026 SandBox Hackathon • Made with <Heart className="w-4 h-4 text-rose-600 fill-rose-600 inline" /> by Aegis Club
          </p>

          <button
            onClick={scrollToTop}
            className="neo-button bg-[#FFDE59] text-black px-4 py-2 text-xs flex items-center gap-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
