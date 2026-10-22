"use client";

import React from "react";
import { MessageSquare, CalendarCheck, FileSpreadsheet, PlayCircle, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/servicesData";

interface HowItWorksProps {
  onStartEnquiry: () => void;
}

export default function HowItWorksSection({ onStartEnquiry }: HowItWorksProps) {
  const stepIcons = [
    MessageSquare,
    CalendarCheck,
    FileSpreadsheet,
    PlayCircle,
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1017] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#141822] px-3.5 py-1.5 rounded-full border border-[#232b3c] mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Getting Started Is Easy.
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            You do not need to deal with confusing procedures or complicated technical forms. Here is our straightforward four-step flow.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || MessageSquare;
            return (
              <div
                key={idx}
                className="relative bg-[#141822] border border-[#232b3c] hover:border-[#d4af37]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group hover:-translate-y-1"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#1d2433] border border-[#2c364a] flex items-center justify-center text-[#d4af37]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#1e2535] text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-emerald-400">Clear & Transparent</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onStartEnquiry}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <span>Start Step 1: Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
