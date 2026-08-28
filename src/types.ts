export type BusinessGoal =
  | 'Missing Calls'
  | 'Getting More Leads'
  | 'Booking More Appointments'
  | 'Website'
  | 'Google Visibility'
  | 'Advertising'
  | 'Automated Follow-Up'
  | 'AI Receptionist'
  | 'Not Sure Yet';

export interface LeadFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  requestedService: BusinessGoal | string;
  website: string;
  notes: string;
  
  // Hidden / CRM & Ad Tracking Fields
  landingPageIndustry: string; // 'general_business'
  landingPageUrl: string;
  adCampaign?: string;
  adSet?: string;
  adCreative?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  fbclid?: string;
  dateCreated: string;
  appointmentStatus: 'pending_time' | 'confirmed';
  selectedDate?: string;
  selectedTime?: string;
  sourceCtaLocation?: string;
}

export type CTALocation =
  | 'Hero'
  | 'Sticky'
  | 'Mid-page'
  | 'AI Receptionist'
  | 'In-Person Review'
  | 'Final CTA'
  | 'Nav';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaLocation: CTALocation;
  customHeadline?: string;
}
