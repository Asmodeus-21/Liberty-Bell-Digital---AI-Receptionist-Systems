import React, { useState } from 'react';
import { Bot, User, CheckCircle2, Bell, Sparkles, MessageSquare, Volume2 } from 'lucide-react';

export const DemoSection: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleDemoAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section
      id="demo-section"
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            Live Demonstration
          </div>
          <h2
            id="demo-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            Hear How Natural It Sounds In Action.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A frictionless, human-like voice conversation that gathers caller details and books appointments instantly.
          </p>
        </div>

        {/* Interactive Demo Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left / Top: Chat-style mock exchange */}
          <div
            id="demo-chat-container"
            className="md:col-span-7 bg-[#FAFAFB] rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#16213E] flex items-center justify-center text-[#D4A017]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#16213E] block">Liberty Bell AI Receptionist</span>
                  <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Call Transcription
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={toggleDemoAudio}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#D4A017] hover:text-[#16213E] transition-colors shadow-2xs"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'text-[#D4A017] animate-bounce' : 'text-slate-500'}`} />
                <span>{isPlayingAudio ? 'Voice Playing...' : 'Simulate Audio'}</span>
              </button>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-3.5">
              {/* Customer Message */}
              <div className="flex items-start gap-2.5 max-w-[90%]">
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 block mb-0.5">Caller</span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    &quot;Hi, do you have any availability this week?&quot;
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-2.5 max-w-[92%] ml-auto flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-[#16213E] text-[#D4A017] flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#16213E] text-white rounded-2xl rounded-tr-sm p-3.5 shadow-sm border border-slate-800 text-left">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[10px] font-bold text-[#D4A017]">Liberty Bell AI</span>
                    <span className="text-[10px] text-slate-400 font-mono">0.3s response</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    &quot;Yes! Let me check what we have open and get a few details from you.&quot;
                  </p>
                  {/* Subtle waveform animation */}
                  <div className="flex items-center gap-1 mt-2.5 pt-2 border-t border-slate-800">
                    <span className="w-1 h-3 bg-[#D4A017] rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-[#D4A017] rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-[#D4A017] rounded-full animate-pulse delay-150" />
                    <span className="w-1 h-5 bg-[#D4A017] rounded-full animate-pulse delay-100" />
                    <span className="w-1 h-3 bg-[#D4A017] rounded-full animate-pulse" />
                    <span className="text-[10px] text-slate-400 ml-2">Natural cadence &amp; tone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Captured Info & Status Card */}
          <div className="md:col-span-5 space-y-4">
            {/* Captured info box */}
            <div
              id="demo-captured-info"
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-[#16213E] uppercase tracking-wider">
                  Captured In Real-Time
                </span>
                <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                  Data Extracted
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">Name</span>
                  <span className="text-sm font-bold text-slate-900">Sarah Miller</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">Contact Info</span>
                  <span className="text-xs font-semibold text-slate-800 block">(555) 392-8841</span>
                  <span className="text-xs text-slate-600">sarah.m@example.com</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-500 font-semibold block uppercase">What They&apos;re Interested In</span>
                  <span className="text-xs font-semibold text-slate-800">
                    Consultation &amp; Availability this week
                  </span>
                </div>
              </div>
            </div>

            {/* Booked Status Card */}
            <div
              id="demo-status-card"
              className="bg-emerald-50 rounded-xl border border-emerald-200/90 p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-950">
                  New Inquiry Captured
                </span>
              </div>
              <p className="text-xs text-emerald-800 pl-7 font-medium">
                Team Notified — Confirmation Sent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
