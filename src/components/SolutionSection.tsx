import React from 'react';
import {
  Clock,
  HelpCircle,
  ClipboardList,
  CalendarCheck,
  PhoneForwarded,
  Send,
  CheckCircle,
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const benefits = [
    {
      id: 'solution-benefit-1',
      icon: Clock,
      title: 'Answers Every Call (24/7)',
      description: 'Picks up on the first ring, day or night, weekends and holidays. Never puts a paying customer on hold.',
    },
    {
      id: 'solution-benefit-2',
      icon: HelpCircle,
      title: 'Handles Common Questions',
      description: 'Answers pricing ranges, location details, hours, services offered, and business policies with natural accuracy.',
    },
    {
      id: 'solution-benefit-3',
      icon: ClipboardList,
      title: 'Captures Contact & Interest Info',
      description: 'Collects the caller’s full name, callback number, email, and specific service request without missing details.',
    },
    {
      id: 'solution-benefit-4',
      icon: CalendarCheck,
      title: 'Books Appointments Or Consultations',
      description: 'Syncs directly with your existing calendar to lock in bookings and consultations according to your live availability.',
    },
    {
      id: 'solution-benefit-5',
      icon: PhoneForwarded,
      title: 'Routes Urgent Calls To You',
      description: 'Recognizes priority emergencies or VIP clients and immediately forwards them to your designated cell or team line.',
    },
    {
      id: 'solution-benefit-6',
      icon: Send,
      title: 'Sends Instant Follow-Up',
      description: 'Dispatches automated SMS confirmation to the caller and notifies your staff instantly with a clean summary.',
    },
  ];

  return (
    <section
      id="solution-section"
      className="py-12 sm:py-16 bg-[#FAFAFB] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            The Liberty Bell Solution
          </div>
          <h2
            id="solution-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            One Receptionist That Works For Any Business.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A dedicated, reliable AI voice assistant tailored precisely to your operational workflow, terminology, and booking calendar.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                id={b.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:border-[#D4A017]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#16213E] text-[#D4A017] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#16213E] leading-snug">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fully automated &amp; reliable</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
