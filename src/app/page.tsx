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
  Sun,
  ShieldCheck,
  Paintbrush,
  Compass,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/servicesData";
import dynamic from "next/dynamic";

const HeroBuildingCanvas = dynamic(
  () => import("@/components/HeroBuildingCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-[#141822] via-[#0f1219] to-[#0d1017] border border-[#232b3c] shadow-2xl">
        <div className="flex flex-col items-center justify-center p-8 text-center text-slate-300">
          <div className="w-10 h-10 rounded-full border-2 border-amber-400 border-t-transparent animate-spin mb-3" />
          <p className="text-xs font-semibold text-slate-400">Loading 3D Architecture View...</p>
        </div>
      </div>
    ),
  }
);

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
      badgeColor: "bg-amber-400 text-slate-950",
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      glow: "hover:border-amber-400/50 hover:shadow-amber-500/10",
    },
    {
      title: "Renovating & Finishing",
      desc: "Need POP ceilings, smooth screeding, Italian tiling, roofing, or modern electrical rewiring to transform your existing property.",
      icon: Hammer,
      tag: "Upgrades",
      badgeColor: "bg-orange-400 text-slate-950",
      iconColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
      glow: "hover:border-orange-400/50 hover:shadow-orange-500/10",
    },
    {
      title: "Business & Landlords",
      desc: "Build or renovate shops, offices, warehouses, or rental apartments that attract high-paying tenants and minimize maintenance costs.",
      icon: Building2,
      tag: "Commercial",
      badgeColor: "bg-cyan-400 text-slate-950",
      iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      glow: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
    },
    {
      title: "Solar & Security Solutions",
      desc: "Eliminate generator fuel stress with 24/7 solar inverter systems and protect your family with smart CCTV cameras you view on your phone.",
      icon: Zap,
      tag: "Solar & Security",
      badgeColor: "bg-emerald-400 text-slate-950",
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      glow: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================
          1. HERO SECTION — What Bularcrest Does
         ========================================= */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#1b2230] overflow-hidden">
        {/* Photographic backdrop with dark luxury overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity">
          <img
            src={COMPANY_INFO.backdrops.hero}
            alt="Modern Nigerian architecture backdrop"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14] via-[#0b0e14]/85 to-[#0b0e14]" />
        </div>

        {/* Ambient Top Glows in brand colors */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161c28]/90 backdrop-blur-md border border-amber-500/30 text-xs font-bold text-[#fbbf24] shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>CONSTRUCTION · DESIGN · HOME SOLUTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Let's Build <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#fbbf24]">
                  Something Good.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From building your home to making it beautiful, safe, and comfortable, Bularcrest is here to help.
              </p>

              {/* CTAs from PRD */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={() => openEnquiry()}
                  className="py-4 px-7 rounded-xl bg-gradient-to-r from-amber-400 to-[#f59e0b] hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Talk to Us About Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services-section"
                  className="py-4 px-6 rounded-xl bg-[#141822]/90 hover:bg-[#1c2232] border border-[#2a3449] hover:border-amber-400/40 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>See What We Do</span>
                  <ArrowDown className="w-4 h-4 text-[#fbbf24]" />
                </a>
              </div>

              {/* Micro Trust Indicators with bright green checkmarks */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-300">
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
          WHO WE BUILD FOR (Target Audience with Bright Accents)
         ========================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#090c12] border-b border-[#1b2230]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-bold bg-[#141a26] px-3.5 py-1 rounded-full border border-amber-500/20">
              Built for Real Life in Nigeria
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Who We Are Here to Help
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#121622] border border-[#202838] ${aud.glow} rounded-3xl p-6 sm:p-7 transition-all hover:bg-[#161c2a] flex flex-col justify-between shadow-lg hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${aud.iconColor} border flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${aud.badgeColor}`}>
                        {aud.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {aud.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
      <section id="services-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0e14] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-widest text-[#fbbf24] uppercase bg-[#141822] px-4 py-1.5 rounded-full border border-amber-500/30 mb-3 shadow-md">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Everything Your Building Needs.
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Whether you want to build a house, improve your property, install solar, or make your space more secure, we can help you explore the right solution.
            </p>
          </div>

          {/* 6 Services Grid with Images & Bright Accents */}
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
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141822] via-[#161d2d] to-[#141822] border border-[#232b3c] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Full Project Coordination
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Need a combination of services?</h3>
              <p className="text-sm text-slate-300 mt-0.5">
                From full building construction with solar inverter and CCTV included, we deliver complete turnkey solutions.
              </p>
            </div>
            <Link
              href="/services"
              className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-[#f59e0b] text-slate-950 font-bold text-xs tracking-wide flex items-center gap-2 shrink-0 transition-transform active:scale-95 shadow-md"
            >
              <span>Explore All 6 Service Details</span>
              <ArrowRight className="w-4 h-4" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b0e14] via-[#121622] to-[#07090e] border-t border-[#1b2230] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#fbbf24] uppercase bg-[#161c28] px-4 py-1.5 rounded-full border border-amber-500/30 mb-3 shadow-md">
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
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#171d2b] hover:bg-[#1f2638] border border-[#2e3748] hover:border-amber-400/40 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#fbbf24]" />
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
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 to-[#f59e0b] hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request a Price Quote</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Direct consultation with our engineers
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              No hidden fees or obligations
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Fast 2-hour response time
            </span>
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
