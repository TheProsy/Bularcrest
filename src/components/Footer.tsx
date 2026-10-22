"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ArrowRight, Heart } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-[#080a0f] border-t border-[#1b2230] text-slate-400">
      {/* Top Value Banner */}
      <div className="border-b border-[#1b2230] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                Building with Confidence in Nigeria
              </h4>
              <p className="text-sm text-slate-400">
                Transparent quotes, genuine tested materials, and hands-on site supervision.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: {COMPANY_INFO.phone}
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="py-2.5 px-5 rounded-xl bg-[#141822] hover:bg-[#1e2535] border border-[#2a3347] text-white font-semibold text-xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              Call Directly
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black text-white tracking-wider">
                BULAR<span className="text-[#d4af37]">CREST</span>
              </span>
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Building Excellence. Designing Legacies.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              A modern, dependable Nigerian construction and home solutions company. We help families, landlords, and businesses build safely, design comfortably, and install reliable power and security systems.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Registered Construction Entity in Nigeria</span>
            </div>
          </div>

          {/* Six Main Services */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Our Services
            </h5>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Pages */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  All Services & Details
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Bularcrest
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact & Request a Quote
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#1b2230]">
              <h6 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Coverage Areas
              </h6>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lagos (Island & Mainland), Abuja FCT, Port Harcourt, Ogun, Ibadan, and nationwide consultation.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Reach Out to Us
            </h5>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span className="text-slate-300">{COMPANY_INFO.officeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Chat (Quick Reply)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-[#111622] border border-[#232b3c] text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">Working Hours:</span>
              Mon - Sat: 8:00 AM - 6:00 PM<br />
              <span className="text-emerald-400">WhatsApp enquiries open 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#161c28] py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Bularcrest Construction & Home Solutions. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with pride for Nigerian homeowners and businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
