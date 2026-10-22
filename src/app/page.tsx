"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Shield,
  Home,
  Hammer,
  Zap,
  CheckCircle,
  Building2,
  Sparkles,
  ArrowDown,
  HardHat,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/servicesData";
import HeroBuildingCanvas from "@/components/HeroBuildingCanvas";
import ServiceCard from "@/components/ServiceCard";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import EnquiryModal from "@/components/EnquiryModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Building Construction");

  const openEnquiry = (serviceTitle?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const targetAudiences = [
    {
      title: "Building Your Own Home",
      desc: "You want a dependable builder who uses genuine materials and gives you honest updates, so your family home stands strong for generations.",
      icon: Home,
      tag: "Homeowners",
    },
    {
      title: "Renovating & Finishing",
      desc: "Need POP ceilings, smooth screeding, Italian tiling, roofing, or modern electrical rewiring to transform your existing property.",
      icon: Hammer,
      tag: "Upgrades",
    },
    {
      title: "Business & Landlords",
      desc: "Build or renovate shops, offices, warehouses, or rental apartments that attract high-paying tenants and minimize maintenance costs.",
      icon: Building2,
      tag: "Commercial",
    },
    {
      title: "Solar & Security Solutions",
      desc: "Eliminate generator fuel stress with 24/7 solar inverter systems and protect your family with smart CCTV cameras you view on your phone.",
      icon: Zap,
      tag: "Solar & Security",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================
          1. HERO SECTION — What Bularcrest Does
         ========================================= */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 subtle-grid overflow-hidden border-b border-[#1b2230]">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-80 bg-[#d4af37]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161c28] border border-[#293448] text-xs font-semibold text-[#d4af37] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>CONSTRUCTION · DESIGN · HOME SOLUTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Let's Build <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#d4af37]">
                  Something Good.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From building your home to making it beautiful, safe, and comfortable, Bularcrest is here to help.
              </p>

              {/* CTAs from PRD */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={() => openEnquiry()}
                  className="py-4 px-7 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-[#d4af37]/20 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Talk to Us About Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services-section"
                  className="py-4 px-6 rounded-xl bg-[#141822] hover:bg-[#1c2232] border border-[#2a3449] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>See What We Do</span>
                  <ArrowDown className="w-4 h-4 text-[#d4af37]" />
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Genuine Materials</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Diaspora Project Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Building Showcase */}
            <div className="lg:col-span-6 w-full">
              <HeroBuildingCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHO WE BUILD FOR (Target Audience)
         ========================================= */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0b0e14] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Built for Real Life in Nigeria
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Who We Are Here to Help
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {targetAudiences.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121622] border border-[#202838] hover:border-[#d4af37]/40 rounded-2xl p-5 sm:p-6 transition-all hover:bg-[#161c2a] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1a2230] flex items-center justify-center text-[#d4af37]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-[#0d1017] px-2.5 py-1 rounded-md border border-[#232b3c]">
                        {aud.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {aud.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          2. OUR SERVICES — Everything Your Building Needs
         ========================================= */}
      <section id="services-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1017] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#141822] px-3.5 py-1.5 rounded-full border border-[#232b3c] mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Everything Your Building Needs.
            </h2>
            <p className="text-base text-slate-400 mt-3 leading-relaxed">
              Whether you want to build a house, improve your property, install solar, or make your space more secure, we can help you explore the right solution.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEnquire={(title) => openEnquiry(title)}
              />
            ))}
          </div>

          {/* Bottom Service Explorer Callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#141822] border border-[#232b3c] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Need a combination of services?</h3>
              <p className="text-sm text-slate-400 mt-0.5">
                From full building construction with solar inverter and CCTV included, we deliver complete turnkey solutions.
              </p>
            </div>
            <Link
              href="/services"
              className="py-3 px-6 rounded-xl bg-[#1e2535] hover:bg-[#283247] text-white font-semibold text-xs tracking-wide flex items-center gap-2 border border-[#2f394e] shrink-0 transition-colors"
            >
              <span>Explore All Service Details</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          3. WHY CHOOSE US — Your Project Matters to Us
         ========================================= */}
      <TrustSection />

      {/* =========================================
          4. HOW IT WORKS — Getting Started Is Easy
         ========================================= */}
      <HowItWorksSection onStartEnquiry={() => openEnquiry()} />

      {/* =========================================
          5. FAQ SECTION
         ========================================= */}
      <FaqSection />

      {/* =========================================
          6. CONTACT SECTION — Have a Project in Mind?
         ========================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d1017] via-[#121622] to-[#0a0d13] border-t border-[#1b2230]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#161c28] px-3.5 py-1.5 rounded-full border border-[#293448] mb-3">
            Let's Talk
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mt-4 leading-relaxed">
            Tell us what you want to build or improve. Let's talk about how we can help.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#171d2b] hover:bg-[#1f2638] border border-[#2e3748] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Us: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request a Price Quote</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <span>• Direct consultation with our engineers</span>
            <span>• No obligations</span>
            <span>• Fast response time</span>
          </div>
        </div>
      </section>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
