import React from 'react';
import { MapPin, SearchCheck, Workflow, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../utils/tracking';

interface InPersonReviewProps {
  onOpenBooking: () => void;
}

export const InPersonReview: React.FC<InPersonReviewProps> = ({ onOpenBooking }) => {
  const items = [
    {
      id: 'review-item-1',
      icon: SearchCheck,
      title: '1. On-Site Process Walkthrough',
      desc: 'We see firsthand how phone calls, front-desk interactions, and inquiries currently move through your day.',
    },
    {
      id: 'review-item-2',
      icon: Workflow,
      title: '2. Identify Leakage & Bottlenecks',
      desc: 'We pinpoint exact moments when calls get missed, staff get overwhelmed, or prospects drop off.',
    },
    {
      id: 'review-item-3',
      icon: FileSpreadsheet,
      title: '3. Custom Recommendations',
      desc: 'You receive a clear, actionable blueprint tailored to your specific setup before committing to anything.',
    },
  ];

  const handleInPersonCta = () => {
    trackCTAClick('In-Person Review', 'Book My Free In-Person Business Review');
    onOpenBooking();
  };

  return (
    <section
      id="in-person-review"
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#16213E] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle gold accent ring in corner */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Local Business Consultation
            </div>

            <h2
              id="in-person-headline"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight"
            >
              We&apos;ll Come Learn Your Business First.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We visit your location to see how calls, walk-ins, and online inquiries currently move
              through your day-to-day operations before recommending any setup. We believe in understanding
              your real-world workflow before prescribing a solution.
            </p>

            {/* 3 Short Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-[#D4A017] mb-2" />
                    <h3 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* In-Person Review CTA */}
            <div>
              <button
                id="in-person-cta-btn"
                type="button"
                onClick={handleInPersonCta}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-xl bg-[#D4A017] hover:bg-[#C79A2B] text-[#16213E] font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.98] border border-amber-600/30 group"
              >
                <span>Book My Free In-Person Business Review</span>
                <ArrowRight className="w-4 h-4 text-[#16213E] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
