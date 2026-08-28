import React from 'react';
import { UserCheck, Users, Moon, PhoneOff } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: 'problem-card-1',
      icon: UserCheck,
      title: "You're With Another Customer",
      description:
        "When you're giving your full attention to the client or customer right in front of you, you can't step away to grab the ringing phone.",
    },
    {
      id: 'problem-card-2',
      icon: Users,
      title: "Your Team Is Stretched Thin",
      description:
        "Front desk staff and technicians are juggling check-ins, daily tasks, and administrative paperwork all at the same time.",
    },
    {
      id: 'problem-card-3',
      icon: Moon,
      title: "Calls Come In After Hours",
      description:
        "Ready-to-buy customers look for help during evenings, weekends, and lunch rushes when your office is closed.",
    },
    {
      id: 'problem-card-4',
      icon: PhoneOff,
      title: "Customers Don't Leave Voicemails",
      description:
        "Over 80% of callers hang up on voicemail. They don't wait for a callback — they just tap the next listing on Google.",
    },
  ];

  return (
    <section
      id="problem-section"
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            The Universal Business Dilemma
          </div>
          <h2
            id="problem-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3 sm:mb-4"
          >
            It Doesn&apos;t Matter What You Do — A Missed Call Still Costs You.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Whether you run an appointment book, a service route, or a front desk, an unanswered call doesn&apos;t wait around.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#FAFAFB] hover:bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#16213E]/5 text-[#16213E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#D4A017]" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#16213E] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="text-center">
          <p
            id="problem-caption"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-100 text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200"
          >
            Whatever you run, this problem looks the same.
          </p>
        </div>
      </div>
    </section>
  );
};
