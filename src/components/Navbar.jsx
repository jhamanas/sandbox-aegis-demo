import React, { useState } from 'react';
import { Shield, Sparkles, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenV3Modal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'METRICS', href: '#metrics' },
    { name: 'WINNERS', href: '#winners' },
    { name: '24H RECAP', href: '#timeline' },
    { name: 'ARCHIVES', href: '#archives' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'TEAM', href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBEB] border-b-4 border-black py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FFDE59] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-xl group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xl tracking-tight text-black">
                SANDBOX <span className="bg-[#FFDE59] px-1 border-2 border-black shadow-[2px_2px_0px_#000]">v2.0</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-black uppercase bg-[#DCFCE7] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                WRAP-UP
              </span>
            </div>
            <span className="text-[11px] text-black font-mono font-bold tracking-tight block">
              AEGIS CLUB • DSCE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-heading font-black text-black hover:bg-[#FFDE59] border-2 border-transparent hover:border-black hover:shadow-[3px_3px_0px_#000] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenV3Modal}
            className="neo-button bg-[#93C5FD] text-black px-3.5 py-1.5 text-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SandBox v3.0</span>
          </button>
          
          <a
            href="https://discord.gg/NkdPRp8RGm"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button bg-[#000000] text-white px-4 py-1.5 text-xs flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discord</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 bg-[#FFDE59] border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFBEB] border-t-4 border-black mt-3 pt-4 pb-4 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-heading font-black text-black hover:bg-[#FFDE59] border-2 border-transparent hover:border-black"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t-2 border-black flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenV3Modal();
              }}
              className="neo-button w-full bg-[#93C5FD] text-black py-2.5 text-xs flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Alert for SandBox v3.0</span>
            </button>
            <a
              href="https://discord.gg/NkdPRp8RGm"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-button w-full bg-black text-white py-2.5 text-xs flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Discord.gg</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
