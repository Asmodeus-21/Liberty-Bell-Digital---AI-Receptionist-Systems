import React, { useState, useEffect } from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../utils/tracking';

interface StickyCTAProps {
  onOpenBooking: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenBooking }) => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky after scrolling past 350px (after hero starts)
      if (window.scrollY > 350) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStickyCta = () => {
    trackCTAClick('Sticky', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <>
      {/* Desktop Sticky Bar (Top / Header banner under nav or bottom corner floating) */}
      <div
        id="desktop-sticky-cta"
        className={`hidden md:block fixed bottom-6 right-6 z-30 transition-all duration-300 transform ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#16213E] text-white p-2.5 pl-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              Never Miss Another Caller
            </span>
            <span className="text-[11px] text-slate-300">Free 15-minute business strategy review</span>
          </div>
          <button
            type="button"
            onClick={handleStickyCta}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4A017] hover:bg-[#C79A2B] text-[#16213E] font-bold text-xs shadow transition-all active:scale-[0.98] border border-amber-600/30"
          >
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Persistent Bottom Bar */}
      <div
        id="mobile-sticky-cta"
        className="block md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-lg"
      >
        <button
          type="button"
          onClick={handleStickyCta}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[48px] rounded-xl bg-[#D4A017] active:bg-[#C79A2B] text-[#16213E] font-bold text-sm shadow-sm border border-amber-600/30 active:scale-[0.99]"
        >
          <PhoneCall className="w-4 h-4 text-[#16213E]" />
          <span>Book My Free Strategy Call</span>
        </button>
      </div>
    </>
  );
};
