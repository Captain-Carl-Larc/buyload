"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/core/config/site"; // Import the config

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 z-50 fixed bg-white/80 backdrop-blur-md border-zinc-100 border-b w-full">
      <nav className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        
        {/* LEFT: BRAND LOGO (Synced with Config) */}
        <Link href="/" className="group">
          <span className="font-black text-zinc-900 group-hover:text-orange-500 text-2xl uppercase tracking-tighter transition-colors">
            {siteConfig.name}<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* MIDDLE: LINKS (Desktop Only - Synced with Config) */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="font-medium text-zinc-500 hover:text-zinc-900 text-sm transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA BUTTON (Synced with Config) */}
        <div className="hidden md:block">
          <a 
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-200 px-5 py-2.5 rounded-full font-bold text-white text-sm transition-all hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Let's Talk
          </a>
        </div>

        {/* MOBILE TOGGLE (Hamburger) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-zinc-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY (Synced with Config) */}
      {isOpen && (
        <div className="md:hidden top-20 left-0 absolute flex flex-col gap-6 bg-white slide-in-from-top-5 p-6 border-zinc-100 border-b w-full animate-in">
          {siteConfig.navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="font-bold text-zinc-900 text-lg"
            >
              {link.title}
            </Link>
          ))}
          <a 
            href={siteConfig.links.whatsapp}
            className="flex justify-center items-center gap-2 bg-orange-500 py-4 rounded-xl w-full font-bold text-white"
          >
            Connect on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}