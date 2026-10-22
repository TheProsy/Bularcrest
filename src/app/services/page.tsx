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
} from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/servicesData";
import EnquiryModal from "@/components/EnquiryModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Building Construction");

  const openEnquiry = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className="w-8 h-8 text-[#d4af37]" />;
      case "Compass":
        return <Compass className="w-8 h-8 text-[#d4af37]" />;
      case "Sun":
        return <Sun className="w-8 h-8 text-[#d4af37]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-[#d4af37]" />;
      case "Zap":
        return <Zap className="w-8 h-8 text-[#d4af37]" />;
      case "Paintbrush":
        return <Paintbrush className="w-8 h-8 text-[#d4af37]" />;
      default:
        return <Hammer className="w-8 h-8 text-[#d4af37]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121722] via-[#0f131c] to-[#0d1017] border-b border-[#1b2230] text-center relative subtle-grid">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#161c28] px-3.5 py-1.5 rounded-full border border-[#2a3449]">
            Comprehensive Building & Home Services
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
      <div className="sticky top-20 z-30 bg-[#0d1017]/95 backdrop-blur-md border-b border-[#232b3c] py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 min-w-max">
          {SERVICES_DATA.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-[#141822] hover:bg-[#1f2638] border border-[#232b3c] transition-colors whitespace-nowrap"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services List Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {SERVICES_DATA.map((service, index) => (
          <section
            key={service.id}
            id={service.slug}
            className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#121622] border border-[#232b3c] shadow-xl relative overflow-hidden"
          >
            {/* Top numbering badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1f2638]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#1a2230] border border-[#2e3748] flex items-center justify-center shrink-0">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase block">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-300 mt-0.5">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openEnquiry(service.title)}
                  className="py-3 px-5 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Ask Us About This Service
                </button>
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
              <div className="lg:col-span-5 bg-[#0d1017] border border-[#232b3c] rounded-2xl p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-3">
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
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-xs transition-all text-center"
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

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-[#0a0d13] border-t border-[#1b2230] text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Have a Custom Project in Mind?
          </h3>
          <p className="text-sm text-slate-400">
            Tell us about your property and requirements. We will give you a clear, honest breakdown.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openEnquiry("General Consultation")}
              className="py-3.5 px-6 rounded-xl bg-[#d4af37] text-slate-950 font-bold text-xs"
            >
              Talk to Our Team
            </button>
            <Link
              href="/contact"
              className="py-3.5 px-6 rounded-xl bg-[#141822] border border-[#2a3347] text-white font-semibold text-xs"
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
