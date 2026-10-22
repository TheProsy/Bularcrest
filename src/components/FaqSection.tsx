"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/servicesData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can Bularcrest work on an existing house or only brand new buildings?",
      a: "We work on both! Whether you are building from virgin land, adding an extension, renovating an old property, or just need solar installation, CCTV security, or electrical rewiring for a house you already live in, we are ready to assist.",
    },
    {
      q: "How do you charge for your services? Can I get a fixed price estimate?",
      a: "Because building sizes, site topography, and material specifications differ across Nigeria, we don't guess prices. We conduct a brief discussion or site review, and then provide a transparent, itemized quotation showing material costs and labor with zero hidden fees.",
    },
    {
      q: "I live abroad (UK, US, Canada, etc.). How will I know what is happening on my site?",
      a: "Over 40% of our clients are Nigerians in the diaspora. We send weekly video walkthroughs, high-resolution progress photos, and milestone reports. Payments are made in stages only when agreed work is verified.",
    },
    {
      q: "Do you take projects outside Lagos?",
      a: "Yes! While our primary office is in Lagos, we actively execute projects across Abuja, Port Harcourt, Ogun, Oyo (Ibadan), and provide nationwide engineering consultations and solar installations across Nigeria.",
    },
    {
      q: "How fast do you respond when I reach out?",
      a: "Our team typically responds to WhatsApp and phone inquiries within 15 to 30 minutes during business hours. Online website forms are attended to within 2 hours.",
    },
    {
      q: "What warranty or guarantee do you offer on solar, CCTV, and electrical work?",
      a: "We only use Tier-1 solar panels, genuine pure sine wave inverters, and Grade-A lithium batteries that carry manufacturer warranties up to 5 to 10 years. Our electrical conduit wiring and security systems are installed to fire-safety standards with post-installation support.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0d13] border-t border-[#1b2230]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#141822] px-3.5 py-1.5 rounded-full border border-[#232b3c] mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Common Questions Answered Simply.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Clear, honest answers to what people usually ask before working with us.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121622] border border-[#222a3a] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1c2333] flex items-center justify-center text-slate-300 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#d4af37]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-[#1b2230]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-[#141822] border border-[#232b3c] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-400">Ask us directly on WhatsApp and get a reply within minutes.</p>
          </div>
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with an Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
