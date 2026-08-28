import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Phone, User, Building, Mail, Globe, MessageSquare } from 'lucide-react';
import { BusinessGoal, CTALocation, LeadFormData } from '../types';
import { getUrlTrackingParams, syncToCRM, trackEvent } from '../utils/tracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaLocation: CTALocation;
  customHeadline?: string;
}

const BUSINESS_HELP_OPTIONS: BusinessGoal[] = [
  'Missing Calls',
  'Getting More Leads',
  'Booking More Appointments',
  'Website',
  'Google Visibility',
  'Advertising',
  'Automated Follow-Up',
  'AI Receptionist',
  'Not Sure Yet',
];

// Available calendar time slots
const AVAILABLE_DAYS = [
  { label: 'Tomorrow', date: 'Friday, Aug 28' },
  { label: 'Monday', date: 'Monday, Aug 31' },
  { label: 'Tuesday', date: 'Tuesday, Sep 1' },
  { label: 'Wednesday', date: 'Wednesday, Sep 2' },
];

const TIME_SLOTS = [
  '9:00 AM EST',
  '10:30 AM EST',
  '1:00 PM EST',
  '2:30 PM EST',
  '4:00 PM EST',
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  ctaLocation,
  customHeadline,
}) => {
  const [step, setStep] = useState<'info' | 'calendar' | 'confirmed'>('info');

  // Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [requestedService, setRequestedService] = useState<BusinessGoal>('Missing Calls');
  const [website, setWebsite] = useState('');
  const [notes, setNotes] = useState('');

  // Calendar Selection
  const [selectedDay, setSelectedDay] = useState(AVAILABLE_DAYS[0].date);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email is required';
    if (!businessType.trim()) newErrors.businessType = 'Business type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const trackingParams = getUrlTrackingParams();
    const leadPayload: LeadFormData = {
      firstName,
      lastName,
      businessName,
      phone,
      email,
      businessType,
      requestedService,
      website,
      notes,
      landingPageIndustry: 'general_business', // Hidden field required
      landingPageUrl: typeof window !== 'undefined' ? window.location.href : '',
      dateCreated: new Date().toISOString(),
      appointmentStatus: 'pending_time',
      sourceCtaLocation: ctaLocation,
      ...trackingParams,
    };

    // Console-log GoHighLevel CRM structure
    syncToCRM(leadPayload);

    // Track lead capture event
    trackEvent('Contact', {
      email,
      business_name: businessName,
      service: requestedService,
    });

    // Move to step 2: Choose a Time
    setStep('calendar');
  };

  const handleTimeConfirm = () => {
    if (!selectedTime) return;

    const trackingParams = getUrlTrackingParams();
    const fullLeadPayload: LeadFormData = {
      firstName,
      lastName,
      businessName,
      phone,
      email,
      businessType,
      requestedService,
      website,
      notes,
      landingPageIndustry: 'general_business',
      landingPageUrl: typeof window !== 'undefined' ? window.location.href : '',
      dateCreated: new Date().toISOString(),
      appointmentStatus: 'confirmed',
      selectedDate: selectedDay,
      selectedTime: selectedTime,
      sourceCtaLocation: ctaLocation,
      ...trackingParams,
    };

    // Console-log confirmed booking to GoHighLevel CRM
    syncToCRM(fullLeadPayload);
    setStep('confirmed');
  };

  const modalHeadline =
    customHeadline ||
    (ctaLocation === 'In-Person Review'
      ? 'Book Your Free In-Person Business Review'
      : 'Book Your Free Strategy Call');

  const submitButtonText =
    ctaLocation === 'In-Person Review'
      ? 'Book My Free In-Person Business Review'
      : 'Book My Free Strategy Call';

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

          {/* Progress Indicators for 2-Step flow */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                step === 'info'
                  ? 'bg-[#D4A017] text-[#16213E]'
                  : 'bg-white/20 text-slate-300'
              }`}
            >
              Step 1: Business Information
            </span>
            <span className="text-slate-500">•</span>
            <span
              className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                step === 'calendar' || step === 'confirmed'
                  ? 'bg-[#D4A017] text-[#16213E]'
                  : 'bg-white/20 text-slate-400'
              }`}
            >
              Step 2: Choose a Time
            </span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
            {step === 'confirmed' ? "You're Booked." : modalHeadline}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {step === 'info' &&
              "Tell us a little about your business and we'll take a look at where you may be losing calls, leads, bookings, or customers."}
            {step === 'calendar' &&
              "You're All Set. We've received your information. Choose a time that works for you and we'll talk through your business, what's currently happening, and where Liberty Bell may be able to help."}
            {step === 'confirmed' &&
              "We'll see you then. Check your phone and email for confirmation."}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: BUSINESS INFORMATION FORM */}
          {step === 'info' && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                        errors.firstName ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                      }`}
                    />
                  </div>
                  {errors.firstName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                      errors.lastName ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                    }`}
                  />
                  {errors.lastName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.lastName}</p>}
                </div>
              </div>

              {/* Business Name & Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Wellness & Care"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                      errors.businessName ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                    }`}
                  />
                  {errors.businessName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.businessName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Type <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Medical / Law / Retail / Service"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                      errors.businessType ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                    }`}
                  />
                  {errors.businessType && <p className="text-[11px] text-rose-500 mt-0.5">{errors.businessType}</p>}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                      errors.phone ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] ${
                      errors.email ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-[#FAFAFB]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              {/* Recommended Field: What would you like help with? */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What would you like help with? <span className="text-slate-400 font-normal">(Recommended)</span>
                </label>
                <select
                  value={requestedService}
                  onChange={(e) => setRequestedService(e.target.value as BusinessGoal)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-[#FAFAFB] text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                >
                  {BUSINESS_HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Field: Website or Google Business Profile */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Website or Google Business Profile <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://yourbusiness.com or Google Maps link"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-[#FAFAFB] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                />
              </div>

              {/* Optional Field: Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Anything we should know about your business? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Current call volume, specific hours when you miss calls, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-[#FAFAFB] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                />
              </div>

              {/* Hidden Landing Page Industry Field */}
              <input type="hidden" name="landing_page_industry" value="general_business" />

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="modal-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 min-h-[48px] rounded-xl bg-[#D4A017] hover:bg-[#C79A2B] text-[#16213E] font-bold text-base shadow-md transition-all active:scale-[0.99] border border-amber-600/30"
                >
                  <span>{submitButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          )}

          {/* STEP 2: CHOOSE A TIME (CALENDAR STEP) */}
          {step === 'calendar' && (
            <div className="space-y-5">
              {/* Day selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select A Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AVAILABLE_DAYS.map((day) => {
                    const isSelected = selectedDay === day.date;
                    return (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => setSelectedDay(day.date)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-[#16213E] text-white border-[#16213E] shadow-sm ring-2 ring-[#D4A017]'
                            : 'bg-[#FAFAFB] text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-xs font-bold">{day.label}</span>
                        <span className="text-[11px] opacity-80">{day.date.split(', ')[1]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Available Call Times ({selectedDay})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-[#D4A017] text-[#16213E] border-amber-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-[#D4A017]'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confirmation Action */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  disabled={!selectedTime}
                  onClick={handleTimeConfirm}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 min-h-[48px] rounded-xl font-bold text-base shadow-md transition-all ${
                    selectedTime
                      ? 'bg-[#16213E] hover:bg-[#1B2A4A] text-white cursor-pointer active:scale-[0.99]'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-[#D4A017]" />
                  <span>
                    {selectedTime ? `Confirm Strategy Call for ${selectedTime}` : 'Choose A Time Above'}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* SUCCESS STATE */}
          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-[#16213E] mb-1">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  We look forward to speaking with you on <strong>{selectedDay}</strong> at{' '}
                  <strong>{selectedTime}</strong>. A calendar invite and reminder have been sent to{' '}
                  <strong>{email}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Business:</span>
                  <span className="font-semibold text-slate-800">{businessName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Goal:</span>
                  <span className="font-semibold text-slate-800">{requestedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-800">{phone}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#16213E] text-white text-xs font-semibold hover:bg-[#1B2A4A] transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
