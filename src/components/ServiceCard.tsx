"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Hammer,
  Compass,
  Sun,
  ShieldCheck,
  Zap,
  Paintbrush,
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  onEnquire: (serviceTitle: string) => void;
}

export default function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  const [imgSrc, setImgSrc] = useState(service.images.primary);
  const [imgFailed, setImgFailed] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className={`w-5 h-5 ${service.accentColor.text}`} />;
      case "Compass":
        return <Compass className={`w-5 h-5 ${service.accentColor.text}`} />;
      case "Sun":
        return <Sun className={`w-5 h-5 ${service.accentColor.text}`} />;
      case "ShieldCheck":
        return <ShieldCheck className={`w-5 h-5 ${service.accentColor.text}`} />;
      case "Zap":
        return <Zap className={`w-5 h-5 ${service.accentColor.text}`} />;
      case "Paintbrush":
        return <Paintbrush className={`w-5 h-5 ${service.accentColor.text}`} />;
      default:
        return <Hammer className={`w-5 h-5 ${service.accentColor.text}`} />;
    }
  };

  return (
    <div
      className={`group relative bg-[#121622] hover:bg-[#161c2b] border border-[#232b3c] ${service.accentColor.glow} rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5`}
    >
      {/* Top Image Showcase */}
      <div className="relative w-full h-48 sm:h-52 bg-[#0a0d14] overflow-hidden">
        {!imgFailed ? (
          <img
            src={imgSrc}
            alt={service.images.altPrimary}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Sleek fallback with subtle grid & icon */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#161d2b] to-[#0d1017]">
            <div className={`w-12 h-12 rounded-2xl ${service.accentColor.bg} border ${service.accentColor.border} flex items-center justify-center mb-2`}>
              {getIcon(service.icon)}
            </div>
            <p className="text-xs font-semibold text-slate-300">{service.title}</p>
          </div>
        )}

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-[#121622]/40 to-transparent" />

        {/* Floating Bright Category Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-md uppercase tracking-wider ${service.accentColor.lightPill}`}>
            {service.badge}
          </span>
        </div>

        {/* Service Icon Pill */}
        <div className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-xl bg-[#0b0e14]/90 backdrop-blur-md border border-[#232b3c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          {getIcon(service.icon)}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-white transition-colors flex items-center justify-between">
            <span>{service.title}</span>
          </h3>

          <p className={`text-xs font-semibold mb-3 ${service.accentColor.text}`}>
            {service.shortDescription}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {service.tagline}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6 border-t border-[#1e2535] pt-4">
            {service.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${service.accentColor.text} bg-current`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-[#1e2535] flex items-center justify-between gap-3">
          <Link
            href={`/services#${service.slug}`}
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group-hover:translate-x-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#fbbf24]" />
          </Link>

          <button
            type="button"
            onClick={() => onEnquire(service.title)}
            className={`py-2 px-3.5 rounded-xl ${service.accentColor.bg} border ${service.accentColor.border} ${service.accentColor.text} hover:bg-white hover:text-slate-950 hover:border-white font-bold text-xs transition-all shadow-sm active:scale-95`}
          >
            Ask About This
          </button>
        </div>
      </div>
    </div>
  );
}
