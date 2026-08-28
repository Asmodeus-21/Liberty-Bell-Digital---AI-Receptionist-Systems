import React from 'react';
import { PhoneCall } from 'lucide-react';
import { trackCTAClick } from '../utils/tracking';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const handleNavCta = () => {
    trackCTAClick('Nav', 'Book My Free Strategy Call');
    onOpenBooking();
  };

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-[#16213E] flex items-center justify-center text-white shadow-sm border border-slate-700/50">
            {/* Minimalist Liberty Bell & Soundwave Icon */}
            <svg
              className="w-5 h-5 text-[#D4A017]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              <path d="M12 2v2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl text-[#16213E] tracking-tight leading-tight">
              Liberty Bell <span className="text-[#D4A017]">Digital</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
              AI Receptionist Systems
            </span>
          </div>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            id="nav-how-it-works-link"
            href="#how-it-works"
            className="hidden md:inline-flex text-sm font-semibold text-slate-600 hover:text-[#16213E] transition-colors"
          >
            How It Works
          </a>

          <button
            id="nav-cta-btn"
            type="button"
            onClick={handleNavCta}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] rounded-xl bg-[#16213E] hover:bg-[#1B2A4A] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all active:scale-[0.98] border border-slate-800"
          >
            <PhoneCall className="w-4 h-4 text-[#D4A017]" />
            <span>Book My Free Strategy Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};
