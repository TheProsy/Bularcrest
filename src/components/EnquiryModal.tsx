"use client";

import React, { useState } from "react";
import { X, CheckCircle, MessageCircle, Phone, ArrowRight, Send } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/servicesData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultService = "Building Construction",
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync default service when passed
  React.useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Bularcrest,\n\nI would like to make an enquiry:\n- Name: ${name || "Client"}\n- Phone: ${phone || "Not provided"}\n- Service Needed: ${service}\n- Location: ${location || "Nigeria"}\n- Description: ${description || "I want to discuss a new project."}\n\nPlease let me know the next steps.`;
    return `https://wa.me/2348140002852?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setLocation("");
    setDescription("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#141822] border border-[#2a3347] rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e2535] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-1">
                Quick Enquiry & Price Estimate
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Talk to Us About Your Project
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Tell us what you want to build or improve. We will contact you quickly to discuss the plan and cost.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  1. Your Name <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Adebayo Okonjo or Mrs. Grace"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  2. Phone Number or WhatsApp Number <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0803 123 4567"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  3. Service Needed <span className="text-[#d4af37]">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Consultation">General Consultation / Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  4. Location of the Project <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lekki Phase 1, Lagos or Guzape, Abuja"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  5. Brief Description of the Project <span className="text-[#d4af37]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us a little bit about what you have in mind (e.g. building a 4-bedroom duplex, installing a 5kVA solar system, rewiring a bungalow)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                No spam. We will only call or WhatsApp you regarding this enquiry.
              </p>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-white">Thank You, {name}!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We have received your enquiry for <strong className="text-[#d4af37]">{service}</strong> in <strong className="text-white">{location}</strong>.
            </p>

            <div className="bg-[#0d1017] border border-[#2a3347] rounded-xl p-4 text-left text-xs text-slate-300 space-y-2 mt-4">
              <p className="font-semibold text-white">What happens next?</p>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="w-4 h-4 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-[10px] mt-0.5">1</span>
                <span>Our project manager reviews your specifications within 2 hours.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="w-4 h-4 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-[10px] mt-0.5">2</span>
                <span>We contact you on <strong>{phone}</strong> to discuss realistic options.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="w-4 h-4 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-[10px] mt-0.5">3</span>
                <span>We provide a transparent, itemized quotation with zero hidden fees.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Continue on WhatsApp
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-5 rounded-xl bg-[#1e2535] hover:bg-[#2a3347] text-white font-semibold text-sm transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
