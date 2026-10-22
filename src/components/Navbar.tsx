"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/servicesData";
import EnquiryModal from "./EnquiryModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top micro banner for trust & direct contact */}
      <div className="bg-[#080a0f] border-b border-[#1b2230] text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted Nigerian Construction & Engineering
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Serving Lagos, Abuja, Port Harcourt & Nationwide</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <header className="sticky top-0 z-40 bg-[#0d1017]/95 backdrop-blur-md border-b border-[#232b3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl sm:text-2xl font-black tracking-wider text-white flex items-center gap-1">
              BULAR<span className="text-[#fbbf24]">CREST</span>
            </span>
            <span className="text-[9px] tracking-[0.2em] font-medium text-slate-400 group-hover:text-amber-200 uppercase transition-colors">
              Construction · Design · Home Solutions
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-1 relative ${
                  isActive(link.href)
                    ? "text-[#fbbf24]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fbbf24] rounded-full shadow-[0_0_8px_#fbbf24]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 px-3.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all flex items-center gap-2 text-xs font-bold shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-[#f59e0b] hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs tracking-wide transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 active:scale-95"
            >
              <span>Ask for a Price</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="py-2 px-3 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs"
            >
              Get Price
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#141822] border border-[#2a3347]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#11151f] border-b border-[#232b3c] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive(link.href)
                      ? "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20"
                      : "text-slate-200 hover:bg-[#1a2130]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#232b3c] space-y-2.5">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-[#1c2333] border border-[#2e3748] text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Enquiry Modal */}
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
