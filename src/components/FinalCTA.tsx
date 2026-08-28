import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck } from 'lucide-react';
import { trackCTAClick } from '../utils/tracking';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const handleFinalCta = () => {
    trackCTAClick('Final CTA', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <section
      id="final-cta-section"
      className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#FAFAFB] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16213E]/5 border border-[#16213E]/10 text-xs font-bold uppercase tracking-wider text-[#16213E] mb-4">
          <PhoneCall className="w-3.5 h-3.5 text-[#D4A017]" />
          Zero Obligation Consultation
        </div>

        {/* Headline */}
        <h2
          id="final-cta-headline"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16213E] tracking-tight leading-tight mb-4"
        >
          Stop Losing Customers To A Ringing Phone.
        </h2>

        {/* Copy */}
        <p
          id="final-cta-copy"
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Whatever your business is, we&apos;ll help make sure every call gets answered.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            id="final-cta-btn"
            type="button"
            onClick={handleFinalCta}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl bg-[#D4A017] hover:bg-[#C79A2B] text-[#16213E] font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] border border-amber-600/30 group"
          >
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 text-[#16213E] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Reassurance pills */}
        <div className="flex items-center justify-center flex-wrap gap-4 text-xs sm:text-sm text-slate-500 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            100% Free Strategy Session
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16213E]" />
            No Long-Term Contracts
          </span>
        </div>
      </div>
    </section>
  );
};
