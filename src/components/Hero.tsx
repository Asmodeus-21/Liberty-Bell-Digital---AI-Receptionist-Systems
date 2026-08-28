import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, User, PhoneCall, Sparkles, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { trackCTAClick } from '../utils/tracking';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [callState, setCallState] = useState<'missed' | 'answered'>('answered');

  useEffect(() => {
    const timer = setInterval(() => {
      setCallState((prev) => (prev === 'missed' ? 'answered' : 'answered'));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroCta = () => {
    trackCTAClick('Hero', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section
      id="hero-section"
      className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 bg-gradient-to-b from-white via-[#FAFAFB] to-[#F1F5F9]/50 overflow-hidden border-b border-slate-200/60"
    >
      {/* Subtle architectural background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#16213E]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Primary Conversion Hook */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16213E]/5 border border-[#16213E]/10 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#16213E]">
                AI RECEPTIONIST FOR ANY BUSINESS
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#16213E] tracking-tight leading-[1.15] mb-4 sm:mb-5"
            >
              Every Missed Call Is A Customer Who Called Someone Else.
            </h1>

            {/* 2-3 sentence Subhead */}
            <p
              id="hero-subhead"
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
            >
              It doesn&apos;t matter what you do — if the phone doesn&apos;t get answered, the customer moves on.
              Liberty Bell helps businesses of any kind answer every call, capture every lead, and follow up
              automatically, built around the way your business actually works.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <button
                id="hero-cta-btn"
                type="button"
                onClick={handleHeroCta}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl bg-[#D4A017] hover:bg-[#C79A2B] text-[#16213E] font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] border border-amber-600/30 group"
              >
                <span>Book My Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 text-[#16213E] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Microtext */}
            <div
              id="hero-microtext"
              className="flex items-center flex-wrap gap-y-1.5 gap-x-2 text-xs sm:text-sm font-medium text-slate-500"
            >
              <span className="inline-flex items-center gap-1 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                Free consultation
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
                Works for any business
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-slate-700">
                <Zap className="w-4 h-4 text-[#D4A017]" />
                Built around you
              </span>
            </div>
          </div>

          {/* Right Column: Visual Call UI Overlay */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="hero-call-visual-container"
              className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl p-4 sm:p-5 relative"
            >
              {/* Top Bar of Phone Mockup */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  <span className="text-xs font-semibold text-slate-700">Live Inbound Call System</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#16213E]/5 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-[#16213E]" />
                  <span className="text-[11px] font-bold text-[#16213E]">24/7 Active</span>
                </div>
              </div>

              {/* State 1 vs State 2 Comparison UI */}
              <div className="space-y-3">
                {/* Traditional Missed Call Notice */}
                <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200/70 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-rose-900">Missed Call (Line Busy)</p>
                      <span className="text-[10px] text-rose-600 font-medium">Without Liberty Bell</span>
                    </div>
                    <p className="text-xs text-rose-700 mt-0.5 line-clamp-1">
                      Caller hung up & dialed the next competitor on Google.
                    </p>
                  </div>
                </div>

                {/* Transition Arrow / Live Conversion */}
                <div className="flex items-center justify-center gap-2 py-0.5">
                  <div className="h-px bg-slate-200 flex-1" />
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#16213E] text-white">
                    With Liberty Bell AI
                  </span>
                  <div className="h-px bg-slate-200 flex-1" />
                </div>

                {/* Answered by AI Card */}
                <div className="p-3.5 rounded-xl bg-[#16213E] text-white shadow-md border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#D4A017] flex items-center justify-center text-[#16213E]">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Answered on 1st Ring</span>
                        <span className="text-[10px] text-[#D4A017] font-medium">Liberty Bell AI Receptionist</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Zero Wait Time
                    </span>
                  </div>

                  <div className="bg-slate-900/60 rounded-lg p-2.5 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                    <p className="font-mono text-[#D4A017] text-[10px] tracking-wide">
                      &quot;Thanks for calling! I can get you scheduled right now and answer any questions.&quot;
                    </p>
                  </div>
                </div>

                {/* Captured Lead Summary */}
                <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-950">Lead Captured &amp; Booked</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Instant Sync
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 bg-white/80 p-2 rounded-lg border border-emerald-100">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Caller Name</span>
                      <span className="font-semibold text-slate-800">Michael Vance</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Phone</span>
                      <span className="font-semibold text-slate-800">(555) 849-2104</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">Service: Consultation / Booking</span>
                      <span className="text-[10px] font-bold text-emerald-700">Team Notified via SMS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
