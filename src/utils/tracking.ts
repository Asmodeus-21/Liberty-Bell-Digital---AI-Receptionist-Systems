import { CTALocation, LeadFormData } from '../types';

/**
 * Tracking utility for Meta Pixel (fbq), Google Analytics 4 (gtag),
 * Google Tag Manager (dataLayer), and GoHighLevel CRM synchronization.
 */

// Helper to extract UTMs and Ad tracking params from current URL
export function getUrlTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || 'meta_ads',
    utmMedium: params.get('utm_medium') || 'paid_social',
    utmCampaign: params.get('utm_campaign') || 'universal_catchall_v1',
    utmContent: params.get('utm_content') || 'video_missed_call_hook',
    utmTerm: params.get('utm_term') || 'local_business_owners',
    fbclid: params.get('fbclid') || '',
    adCampaign: params.get('ad_campaign') || 'LB_Universal_2026',
    adSet: params.get('ad_set') || 'Local_Business_Any_25_65',
    adCreative: params.get('ad_creative') || 'missed_call_solution_ad1',
  };
}

// Track standard Meta/GA events
export function trackEvent(
  eventName: 'PageView' | 'ViewContent' | 'Lead' | 'Contact' | 'Schedule' | 'BookedAppointment' | 'CTAClick',
  customData?: Record<string, any>
) {
  const timestamp = new Date().toISOString();
  console.log(`[Tracking Event: ${eventName}]`, { timestamp, ...customData });

  // 1. Meta Pixel Placeholder
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, customData);
  }

  // 2. Google Analytics (gtag.js) Placeholder
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, customData);
  }

  // 3. Google Tag Manager (dataLayer) Placeholder
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...customData,
      timestamp,
    });
  }
}

// Track distinct CTA clicks by location
export function trackCTAClick(location: CTALocation, buttonText: string) {
  trackEvent('CTAClick', {
    cta_location: location,
    button_text: buttonText,
    landing_page_industry: 'general_business',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  });
}

// Mock sync to GoHighLevel CRM
export function syncToCRM(lead: LeadFormData) {
  console.log('====================================');
  console.log('🚀 [GOHIGHLEVEL CRM LEAD SYNC]');
  console.log('Object ready for GHL Webhook / API Pipeline:');
  console.table(lead);
  console.log('JSON Payload:', JSON.stringify(lead, null, 2));
  console.log('====================================');

  // Trigger conversion events
  if (lead.appointmentStatus === 'confirmed') {
    trackEvent('BookedAppointment', {
      email: lead.email,
      business_name: lead.businessName,
      service: lead.requestedService,
      date: lead.selectedDate,
      time: lead.selectedTime,
    });
  } else {
    trackEvent('Lead', {
      email: lead.email,
      business_name: lead.businessName,
      service: lead.requestedService,
      industry: lead.landingPageIndustry,
    });
  }
}
