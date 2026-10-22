"use client";

import React from "react";
import Link from "next/link";
import {
  Hammer,
  Compass,
  Sun,
  ShieldCheck,
  Zap,
  Paintbrush,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";
import { ServiceItem, COMPANY_INFO } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  onEnquire: (serviceTitle: string) => void;
}

export default function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className="w-6 h-6 text-[#d4af37]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-[#d4af37]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#d4af37]" />;
      case "Paintbrush":
        return <Paintbrush className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Hammer className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div className="group relative bg-[#131722] hover:bg-[#181d2a] border border-[#232b3c] hover:border-[#d4af37]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
      <div>
        {/* Top Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#1b2230] border border-[#2e3748] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-all">
            {getIcon(service.icon)}
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-slate-400 bg-[#0d1017] px-3 py-1 rounded-full border border-[#232b3c]">
            Verified Service
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-[#d4af37]/90 mb-3">
          {service.shortDescription}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {service.tagline}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6 border-t border-[#1e2535] pt-4">
          {service.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#1e2535] flex items-center justify-between gap-3">
        <Link
          href={`/services#${service.slug}`}
          className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
        </Link>

        <button
          type="button"
          onClick={() => onEnquire(service.title)}
          className="py-2 px-3.5 rounded-xl bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#d4af37] hover:text-slate-950 font-bold text-xs border border-[#d4af37]/30 hover:border-[#d4af37] transition-all"
        >
          Ask About This
        </button>
      </div>
    </div>
  );
}
