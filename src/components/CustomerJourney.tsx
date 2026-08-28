import React from 'react';
import { PhoneIncoming, Bot, FileText, BellRing, MailCheck, ArrowRight } from 'lucide-react';

export const CustomerJourney: React.FC = () => {
  const steps = [
    {
      stepNumber: '1',
      title: 'Customer Calls',
      icon: PhoneIncoming,
      desc: 'Inbound call arrives at any hour of the day or night.',
    },
    {
      stepNumber: '2',
      title: 'AI Answers Instantly',
      icon: Bot,
      desc: 'Picks up on the 1st ring with a friendly, professional voice.',
    },
    {
      stepNumber: '3',
      title: 'Info Captured',
      icon: FileText,
      desc: 'Collects name, phone, needs, and urgency cleanly.',
    },
    {
      stepNumber: '4',
      title: 'Team Notified / Booked',
      icon: BellRing,
      desc: 'Appointment is locked into your calendar or team is alerted.',
    },
    {
      stepNumber: '5',
      title: 'Follow-Up Sent',
      icon: MailCheck,
      desc: 'Automated SMS & email sent to customer and your staff.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 bg-[#FAFAFB] border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            The Flow
          </div>
          <h2
            id="journey-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            What Happens After A Lead Comes In
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A seamless, automated sequence from the first ring to the confirmed booking.
          </p>
        </div>

        {/* 5-Step Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                id={`journey-step-${step.stepNumber}`}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow transition-all relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#16213E] text-[#D4A017] text-xs font-bold flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAFAFB] text-[#16213E] group-hover:bg-[#16213E]/5 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 text-[#D4A017]" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-[#16213E] mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector indicator for larger screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 shadow-2xs">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
