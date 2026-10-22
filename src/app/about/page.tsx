"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Award,
  Users,
  HardHat,
  MessageCircle,
  Phone,
  CheckCircle,
  Building,
  HeartHandshake,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/servicesData";
import EnquiryModal from "@/components/EnquiryModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = [
    {
      title: "Integrity in Every Block",
      desc: "We don't buy substandard materials to inflate profit margins. We buy from verified manufacturers like Dangote, BUA, and certified steel suppliers so your building remains safe and crack-free.",
      icon: ShieldCheck,
    },
    {
      title: "No Ghost Costs",
      desc: "We agree on the budget before we start. You won't hear stories midway like 'oga, price has jumped so we need extra money for cement' when a milestone has been approved.",
      icon: Target,
    },
    {
      title: "Empowering Nigerian Homeowners",
      desc: "Whether you are a civil servant building your family bungalow, a tech professional setting up a smart duplex, or a diaspora Nigerian investing back home, you deserve respect and honesty.",
      icon: HeartHandshake,
    },
    {
      title: "Skilled Nigerian Engineers & Artisans",
      desc: "We hire and train meticulous Nigerian site engineers, masons, electricians, and carpenters who take personal pride in clean, straight, beautiful work.",
      icon: HardHat,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121722] via-[#0f131c] to-[#0d1017] border-b border-[#1b2230] text-center subtle-grid">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#161c28] px-3.5 py-1.5 rounded-full border border-[#2a3449]">
            About Bularcrest
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Building Excellence. Designing Legacies.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A Nigerian construction and home solutions company founded on the principle that building or improving your home should be a peaceful, trustworthy experience.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1017]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                Our Story & Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                We Build for Real Nigerians Who Value Quality and Peace of Mind.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Too many people in Nigeria have horror stories about building houses: contractors who run away with money, buildings that develop deep wall cracks within six months, substandard electrical wiring that triggers fire hazards, or generators that gulp thousands of Naira in fuel daily.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Bularcrest was founded to change that reality.</strong> We believe you shouldn't need an engineering degree just to build a solid home for your family.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We bring together licensed civil engineers, practical architects, certified solar technicians, and skilled craftsmen under one roof. We give you realistic advice, transparent itemized quotes, and hands-on site supervision.
              </p>
            </div>

            <div className="bg-[#141822] border border-[#232b3c] rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-[#232b3c] pb-3">
                The Bularcrest Guarantee
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Genuine Materials Only:</strong> No fake cables, no under-gauge reinforcement iron, no substandard sand.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Milestone-Based Payments:</strong> You pay in phases as construction milestones are completed and approved.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clear Weekly Reporting:</strong> Photo and video updates sent straight to your WhatsApp or email.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Post-Handover Support:</strong> We stand behind our work with continuous warranty on installations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our 4 Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#090c12] border-y border-[#1b2230]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              What Stands Behind Our Name
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121622] border border-[#202838] rounded-2xl p-6 sm:p-7 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1b2230] border border-[#2e3748] flex items-center justify-center text-[#d4af37]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1017]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Where We Work Across Nigeria
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Headquartered in Lagos with project footprint in major growing commercial and residential hubs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#141822] border border-[#232b3c] text-left">
              <h4 className="text-sm font-bold text-white mb-1">Lagos State</h4>
              <p className="text-xs text-slate-400">Lekki, Ikoyi, Victoria Island, Ikeja, Ajah, Epe & mainland suburbs.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#141822] border border-[#232b3c] text-left">
              <h4 className="text-sm font-bold text-white mb-1">Abuja FCT</h4>
              <p className="text-xs text-slate-400">Guzape, Maitama, Jabi, Katampe, Gwarinpa, Lugbe and satellite districts.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#141822] border border-[#232b3c] text-left">
              <h4 className="text-sm font-bold text-white mb-1">Regional & Nationwide</h4>
              <p className="text-xs text-slate-400">Port Harcourt, Ogun, Ibadan, and nationwide consultation & solar deployments.</p>
            </div>
          </div>

          <div className="pt-8">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="py-3.5 px-8 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-95"
            >
              Talk to Our Team Today
            </button>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
