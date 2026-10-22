import React from "react";
import { ShieldCheck, MessageSquare, CheckCircle2, Users, HardHat, FileCheck, PhoneCall, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/servicesData";

export default function TrustSection() {
  const points = [
    {
      title: "We take quality seriously.",
      description:
        "We do not cut corners or compromise on standards. From genuine cement and proper steel bars to certified electrical cables, we build with materials that stand the test of time.",
      icon: ShieldCheck,
      badge: "Quality Guaranteed",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "We communicate clearly.",
      description:
        "You never have to guess what is happening with your project or your money. We provide honest milestone reports, video updates, and transparent receipts at every phase.",
      icon: MessageSquare,
      badge: "Honest Updates",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "We pay attention to the details.",
      description:
        "Straight walls, level floors, clean electrical conduit joints, and immaculate finishing. We take pride in craftsmanship that makes your building look elegant and durable.",
      icon: CheckCircle2,
      badge: "Clean Craftsmanship",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "We work with you to understand your needs.",
      description:
        "Every client's budget, location, and family requirements are unique. We take the time to listen, provide realistic advice, and deliver a solution that works for you.",
      icon: Users,
      badge: "Client-First",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0e14] border-y border-[#1b2230] relative overflow-hidden">
      {/* Background image backdrop with dark overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src={COMPANY_INFO.backdrops.trust}
          alt="Engineering backdrop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14] via-[#0b0e14]/80 to-[#0b0e14]" />
      </div>

      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#fbbf24] uppercase bg-[#141a26] px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Choose Bularcrest</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your Project Matters to Us.
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Building in Nigeria should not be stressful. Here is what you can always count on when you partner with Bularcrest.
          </p>
        </div>

        {/* 4 Core Value Cards with bright color accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121622]/90 backdrop-blur-sm border border-[#222a3a] hover:border-amber-400/50 rounded-3xl p-7 sm:p-8 transition-all hover:bg-[#161c2b] flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Nigerian Assurance Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141824] via-[#172030] to-[#141824] border border-[#2e3b52] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-lg shadow-amber-500/20">
              <HardHat className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Verified Engineering Standards
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Live in the Diaspora or Busy with Work?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Over 40% of our clients reside abroad or in other states. We provide weekly video walkthroughs and verifiable site milestones.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348140002852?text=Hello%20Bularcrest%2C%20I%20would%20like%20to%20discuss%20supervision%20and%20quality%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-[#f59e0b] hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
            >
              Ask Our Engineers on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
