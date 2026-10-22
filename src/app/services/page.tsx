"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Hammer,
  Compass,
  Sun,
  ShieldCheck,
  Zap,
  Paintbrush,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Eye,
} from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO, ServiceItem } from "@/data/servicesData";
import EnquiryModal from "@/components/EnquiryModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Building Construction");

  const openEnquiry = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  const getServiceIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className={`w-8 h-8 ${colorClass}`} />;
      case "Compass":
        return <Compass className={`w-8 h-8 ${colorClass}`} />;
      case "Sun":
        return <Sun className={`w-8 h-8 ${colorClass}`} />;
      case "ShieldCheck":
        return <ShieldCheck className={`w-8 h-8 ${colorClass}`} />;
      case "Zap":
        return <Zap className={`w-8 h-8 ${colorClass}`} />;
      case "Paintbrush":
        return <Paintbrush className={`w-8 h-8 ${colorClass}`} />;
      default:
        return <Hammer className={`w-8 h-8 ${colorClass}`} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner with vibrant accents */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121722] via-[#0f131c] to-[#0b0e14] border-b border-[#1b2230] text-center relative subtle-grid overflow-hidden">
        {/* Colorful ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#fbbf24] uppercase bg-[#18202e] px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md">
            Comprehensive Nigerian Building & Home Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Everything Your Building Needs.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From foundation casting to 24/7 solar power, high-definition CCTV security, and luxury finishing, we deliver reliable solutions across Nigeria.
          </p>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <div className="sticky top-20 z-30 bg-[#0b0e14]/95 backdrop-blur-md border-b border-[#232b3c] py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 min-w-max">
          {SERVICES_DATA.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-[#141822] hover:bg-[#1f2638] border border-[#232b3c] transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span className={`w-2 h-2 rounded-full ${s.accentColor.text} bg-current`} />
              <span>{s.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Services List Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {SERVICES_DATA.map((service, index) => (
          <section
            key={service.id}
            id={service.slug}
            className={`scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#121622] border border-[#232b3c] ${service.accentColor.glow} shadow-2xl relative overflow-hidden transition-all`}
          >
            {/* Top decorative gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accentColor.gradient}`} />

            {/* Top header row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1f2638]">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${service.accentColor.bg} border ${service.accentColor.border} flex items-center justify-center shrink-0 shadow-lg`}>
                  {getServiceIcon(service.icon, service.accentColor.text)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                      Service 0{index + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${service.accentColor.lightPill}`}>
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {service.title}
                  </h2>
                  <p className={`text-sm font-semibold mt-0.5 ${service.accentColor.text}`}>
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openEnquiry(service.title)}
                  className="py-3 px-5 rounded-xl bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Ask Us About This Service
                </button>
              </div>
            </div>

            {/* 2-Image Photographic Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0a0d14] border border-[#232b3c] group">
                <img
                  src={service.images.primary}
                  alt={service.images.altPrimary}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // graceful fallback to placeholder design
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase font-bold text-[#fbbf24] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    In the Field
                  </span>
                  <p className="text-xs text-white font-medium mt-1 truncate">
                    {service.images.altPrimary}
                  </p>
                </div>
              </div>

              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0a0d14] border border-[#232b3c] group">
                <img
                  src={service.images.secondary}
                  alt={service.images.altSecondary}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    Finished Result & Equipment
                  </span>
                  <p className="text-xs text-white font-medium mt-1 truncate">
                    {service.images.altSecondary}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Everyday explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    How Bularcrest Helps You
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                {/* Practical Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What You Get With Bularcrest
                  </h4>
                  <div className="space-y-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Typical Deliverables & Fast WhatsApp Action */}
              <div className="lg:col-span-5 bg-[#0b0e14] border border-[#232b3c] rounded-2xl p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#fbbf24] mb-3">
                    Typical Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.sampleDeliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="p-2.5 rounded-lg bg-[#141822] border border-[#1f2638] text-xs text-slate-300 font-medium flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Standard
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1f2638] space-y-3">
                  <p className="text-xs text-slate-400">
                    Ready to discuss your {service.title.toLowerCase()} requirements with an engineer?
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => openEnquiry(service.title)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 font-bold text-xs transition-all text-center"
                    >
                      Request a Price Quote
                    </button>

                    <a
                      href={`https://wa.me/2348140002852?text=Hello%20Bularcrest%2C%20I%20would%20like%20to%20ask%20about%20your%20${encodeURIComponent(
                        service.title
                      )}%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA with backdrop */}
      <section className="py-20 px-4 bg-[#080a0f] border-t border-[#1b2230] text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold text-[#fbbf24] bg-[#141822] px-3.5 py-1 rounded-full border border-amber-500/20 uppercase tracking-wider">
            Clear Guidance
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Have a Custom Project in Mind?
          </h3>
          <p className="text-sm text-slate-400">
            Tell us about your property and requirements. We will give you a clear, honest breakdown.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openEnquiry("General Consultation")}
              className="py-3.5 px-7 rounded-xl bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 font-bold text-xs shadow-lg active:scale-95 transition-all"
            >
              Talk to Our Team
            </button>
            <Link
              href="/contact"
              className="py-3.5 px-7 rounded-xl bg-[#141822] border border-[#2a3347] text-white hover:text-[#fbbf24] font-semibold text-xs transition-colors"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
