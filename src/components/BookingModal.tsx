import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { CTALocation } from '../types';
import { trackEvent } from '../utils/tracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaLocation: CTALocation;
  customHeadline?: string;
}

// GoHighLevel form embed details (Liberty Bell Digital - Hub (General) - Free Strategy Call)
const GHL_FORM_ID = 'QKYqamwEA6tSAjibDtyu';
const GHL_FORM_HEIGHT = 1258;
const GHL_EMBED_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

// Load GHL's form embed script once per page load (it auto-resizes the iframe
// and relays submit events) rather than once per modal open.
function useGhlEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  ctaLocation,
  customHeadline,
}) => {
  useGhlEmbedScript();

  // Reset modal when reopened
  useEffect(() => {
    if (isOpen) {
      trackEvent('ViewContent', { modal: 'booking_popup', source_location: ctaLocation });
      // Prevent background scrolling while modal is active
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, ctaLocation]);

  if (!isOpen) return null;

  const modalHeadline =
    customHeadline ||
    (ctaLocation === 'In-Person Review'
      ? 'Book Your Free In-Person Business Review'
      : 'Book Your Free Strategy Call');

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl overflow-hidden my-auto relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#16213E] text-white p-5 sm:p-6 relative">
          <button
            id="booking-modal-close-btn"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug pr-8">
            {modalHeadline}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            Tell us a little about your business and we'll take a look at where you may be
            losing calls, leads, bookings, or customers.
          </p>
        </div>

        {/* Modal Body: live GoHighLevel form */}
        <div className="max-h-[75vh] overflow-y-auto">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
            style={{ width: '100%', height: `${GHL_FORM_HEIGHT}px`, border: 'none' }}
            id={`inline-${GHL_FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={modalHeadline}
            data-height={GHL_FORM_HEIGHT}
            data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
            data-form-id={GHL_FORM_ID}
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title={modalHeadline}
          />
        </div>
      </div>
    </div>
  );
};
