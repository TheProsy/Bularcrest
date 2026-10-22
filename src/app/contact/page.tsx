"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/servicesData";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Building Construction");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `Hello Bularcrest,\n\nI want to make an enquiry:\n- Name: ${name || "Client"}\n- Phone: ${phone || "Not specified"}\n- Service Needed: ${service}\n- Project Location: ${location || "Nigeria"}\n- Details: ${description || "I'd like to discuss a project."}\n\nPlease let me know how we can proceed.`;
    return `https://wa.me/2348140002852?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121722] via-[#0f131c] to-[#0d1017] border-b border-[#1b2230] text-center relative overflow-hidden">
        {/* Photographic backdrop with dark overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
          <img
            src={COMPANY_INFO.backdrops.trust}
            alt="Contact Bularcrest backdrop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121722]/90 via-[#0f131c]/90 to-[#0d1017]" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest text-[#fbbf24] uppercase bg-[#161c28] px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md">
            We Are Ready to Assist You
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Bularcrest
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a building, renovation, solar, or security project in mind? Reach out to us directly on WhatsApp, give us a call, or fill our short enquiry form below.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1017]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121622] border border-[#232b3c] rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">
                Direct Contact Channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                You can reach us anytime. We respond quickly during working hours.
              </p>

              {/* Fast Action Buttons */}
              <div className="space-y-3">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp (Fastest)</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1a2130] hover:bg-[#222a3d] border border-[#2e3748] text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Detailed Contact List */}
              <div className="pt-4 border-t border-[#1e2535] space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Main Office:</span>
                    <span className="text-slate-300">{COMPANY_INFO.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-300 hover:text-white"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hours:</span>
                    <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas Card */}
            <div className="bg-[#121622] border border-[#232b3c] rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                <span>Primary Operating Locations</span>
              </h3>
              <p className="text-xs text-slate-400">
                We handle site inspections, civil construction, and installations in:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Short Enquiry Form & What Happens Next */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#121622] border border-[#232b3c] rounded-3xl p-6 sm:p-10 shadow-xl">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase block mb-1">
                      Quick Enquiry Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Tell Us What You Want to Build or Improve
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill these 5 simple details. No complicated accounts or lengthy questionnaires required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        1. Your Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Chukwuemeka Eze or Mrs. Fatima Danjuma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
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
                        placeholder="e.g. 0802 345 6789"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        3. Service Needed <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm focus:outline-none focus:border-[#d4af37]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} — {s.shortDescription}
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
                        placeholder="e.g. Sangotedo Lekki, Lagos or Wuye, Abuja"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        5. Brief Description of the Project <span className="text-[#d4af37]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Briefly describe what you need (e.g. want to build a 4-bedroom duplex on a 500sqm plot, or want to install a 10kVA solar inverter system with lithium batteries)..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1017] border border-[#2a3347] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37] resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 px-6 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </button>

                      <a
                        href={getDirectWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                /* Success message */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{name}</strong>. We have received your request regarding{" "}
                    <strong className="text-[#d4af37]">{service}</strong> in{" "}
                    <strong className="text-white">{location}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat with Us on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setPhone("");
                        setLocation("");
                        setDescription("");
                      }}
                      className="py-3 px-6 rounded-xl bg-[#1e2535] text-slate-200 font-semibold text-sm"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* What Happens After Someone Contacts Bularcrest (PRD Section 7 requirement) */}
            <div className="bg-[#121622] border border-[#232b3c] rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">
                What Happens After You Contact Us?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Here is our simple, transparent response process:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1017] border border-[#1e2535]">
                  <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Quick Review</h4>
                    <p className="text-xs text-slate-400">
                      Our project engineer reviews your location and requirements within 2 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1017] border border-[#1e2535]">
                  <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Discussion & Advice</h4>
                    <p className="text-xs text-slate-400">
                      We call or WhatsApp you to clarify your exact expectations, budget preference, and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0d1017] border border-[#1e2535]">
                  <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Clear Itemized Quote</h4>
                    <p className="text-xs text-slate-400">
                      We present a transparent estimate showing materials and labor without hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
