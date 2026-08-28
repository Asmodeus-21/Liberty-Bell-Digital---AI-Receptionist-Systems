import React from 'react';
import { Headphones, Sliders, Target } from 'lucide-react';

export const WhyLibertyBell: React.FC = () => {
  const cards = [
    {
      id: 'why-card-1',
      icon: Headphones,
      title: 'We Listen First',
      description:
        'Before setting up anything, we take the time to understand your specific workflow, common caller questions, and where leads currently drop off in your day-to-day operations.',
    },
    {
      id: 'why-card-2',
      icon: Sliders,
      title: 'We Build Around You',
      description:
        'No generic scripts or robotic auto-responders. Your AI receptionist and automated follow-ups speak in your business’s unique voice, respect your schedule, and follow your exact rules.',
    },
    {
      id: 'why-card-3',
      icon: Target,
      title: 'We Stay Focused On Results',
      description:
        'We measure success by tangible business outcomes: answered calls, captured leads, booked appointments, and saved front-desk hours for you and your staff.',
    },
  ];

  return (
    <section
      id="why-liberty-bell"
      className="py-12 sm:py-16 bg-[#FAFAFB] border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            The Liberty Bell Standard
          </div>
          <h2
            id="why-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            Why Local Businesses Trust Liberty Bell
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A practical partner dedicated to solving your phone and lead flow challenges with zero fluff.
          </p>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16213E]/5 text-[#16213E] flex items-center justify-center mb-4 border border-slate-200/60">
                  <Icon className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#16213E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
