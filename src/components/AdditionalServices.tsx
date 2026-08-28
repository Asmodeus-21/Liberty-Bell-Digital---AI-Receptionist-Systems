import React from 'react';
import { Bot, Globe, Search, RefreshCw, CheckCircle2 } from 'lucide-react';

export const AdditionalServices: React.FC = () => {
  const services = [
    {
      id: 'service-card-1',
      icon: Bot,
      title: 'AI Receptionist',
      tagline: '24/7 Call Answering & Booking',
      description:
        'Never miss another inbound phone inquiry. The AI answers immediately, handles FAQs, qualifies callers, and schedules appointments directly onto your calendar.',
      features: ['24/7/365 coverage', 'Custom trained voice & tone', 'Instant calendar sync'],
    },
    {
      id: 'service-card-2',
      icon: Globe,
      title: 'Website & Booking Page',
      tagline: 'High-Converting Digital Front Door',
      description:
        'Fast, mobile-optimized pages designed with one goal: turning website visitors into confirmed phone calls, form leads, and booked appointments.',
      features: ['Mobile-first speed', 'Frictionless booking widgets', 'Clear conversion paths'],
    },
    {
      id: 'service-card-3',
      icon: Search,
      title: 'Google Visibility',
      tagline: 'Local Search & Map Placement',
      description:
        'Optimize your Google Business Profile and local search presence so nearby customers looking for your exact services find and call you first.',
      features: ['Google Business Profile setup', 'Review generation workflows', 'Local search readiness'],
    },
    {
      id: 'service-card-4',
      icon: RefreshCw,
      title: 'Automated Follow-Up',
      tagline: 'Instant Lead Engagement & Re-activation',
      description:
        'Automated 2-way SMS and email sequences that re-engage unanswered leads within 60 seconds and keep past customers returning regularly.',
      features: ['Sub-60s lead response', 'No-show reminder sequences', 'Customer re-engagement'],
    },
  ];

  return (
    <section
      id="services-section"
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            Integrated Growth Tools
          </div>
          <h2
            id="services-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            Everything Built To Capture And Retain Customers
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Focused, industry-proven tools designed to work together smoothly for local businesses.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-[#FAFAFB] hover:bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#16213E] text-[#D4A017] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#16213E] mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4A017] mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 space-y-1.5">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
