"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/servicesData";
import EnquiryModal from "./EnquiryModal";

export default function FloatingWhatsApp() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (Specially designed for Nigerian mobile browsing) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a0d13]/95 backdrop-blur-lg border-t border-[#232b3c] p-2.5 px-4 shadow-2xl flex items-center gap-2.5">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-[#171d2b] border border-[#2e394e] text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#d4af37]" />
          <span>Call Us</span>
        </a>

        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="py-3 px-3.5 rounded-xl bg-[#d4af37] text-slate-950 font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl border border-emerald-400/30 transition-all transform hover:-translate-y-1 hover:shadow-emerald-900/50"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <div className="text-left">
            <p className="text-[11px] text-emerald-100 font-medium leading-none">Need quick help?</p>
            <p className="text-xs font-bold leading-tight">Chat on WhatsApp</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
