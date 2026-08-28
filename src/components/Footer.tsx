import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#16213E] text-slate-400 py-10 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[#D4A017] border border-slate-700">
            <svg
              className="w-4 h-4"
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
          <div>
            <span className="font-display font-bold text-white text-base">
              Liberty Bell <span className="text-[#D4A017]">Digital</span>
            </span>
            <p className="text-[11px] text-slate-400">AI Receptionist &amp; Call Capture Systems</p>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="text-xs text-slate-400 space-y-1">
          <p>© {new Date().getFullYear()} Liberty Bell Digital. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Built for local businesses that value every customer call.
          </p>
        </div>
      </div>
    </footer>
  );
};
