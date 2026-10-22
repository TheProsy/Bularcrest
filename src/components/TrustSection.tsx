import React from "react";
import { ShieldCheck, MessageSquare, CheckCircle2, Users, HardHat, FileCheck, PhoneCall, Award } from "lucide-react";

export default function TrustSection() {
  const points = [
    {
      title: "We take quality seriously.",
      description:
        "We do not cut corners or compromise on standards. From genuine cement and proper steel bars to certified electrical cables, we build with materials that stand the test of time.",
      icon: ShieldCheck,
      badge: "Quality Guaranteed",
    },
    {
      title: "We communicate clearly.",
      description:
        "You never have to guess what is happening with your project or your money. We provide honest milestone reports, video updates, and transparent receipts at every phase.",
      icon: MessageSquare,
      badge: "Honest Updates",
    },
    {
      title: "We pay attention to the details.",
      description:
        "Straight walls, level floors, clean electrical conduit joints, and immaculate finishing. We take pride in craftsmanship that makes your building look elegant and durable.",
      icon: CheckCircle2,
      badge: "Clean Craftsmanship",
    },
    {
      title: "We work with you to understand your needs.",
      description:
        "Every client's budget, location, and family requirements are unique. We take the time to listen, provide realistic advice, and deliver a solution that works for you.",
      icon: Users,
      badge: "Client-First",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0d13] border-y border-[#1b2230] relative overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#141924] px-3.5 py-1.5 rounded-full border border-[#2a3347] mb-3">
            Why Choose Bularcrest
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Your Project Matters to Us.
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            Building in Nigeria should not be stressful. Here is what you can always count on when you partner with Bularcrest.
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121622] border border-[#222a3a] hover:border-[#d4af37]/40 rounded-2xl p-7 sm:p-8 transition-all hover:bg-[#161c2a] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#1a2130] border border-[#2e3748] flex items-center justify-center text-[#d4af37]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Nigerian Assurance Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141824] via-[#161d2d] to-[#141824] border border-[#2e3748] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Live in the Diaspora or Busy with Work?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Over 40% of our clients reside abroad or in other states. We provide weekly video walkthroughs and verifiable site milestones.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-slate-300 font-medium">Have questions?</span>
            <a
              href="https://wa.me/2348140002852?text=Hello%20Bularcrest%2C%20I%20would%20like%20to%20discuss%20supervision%20and%20quality%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Ask Our Engineers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
