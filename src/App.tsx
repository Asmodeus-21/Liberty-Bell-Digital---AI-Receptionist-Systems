import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DemoSection } from './components/DemoSection';
import { CustomerJourney } from './components/CustomerJourney';
import { AdditionalServices } from './components/AdditionalServices';
import { WhyLibertyBell } from './components/WhyLibertyBell';
import { InPersonReview } from './components/InPersonReview';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { StickyCTA } from './components/StickyCTA';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { CTALocation } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingLocation, setBookingLocation] = useState<CTALocation>('Hero');
  const [bookingHeadline, setBookingHeadline] = useState<string | undefined>(undefined);

  const handleOpenBooking = (
    location: CTALocation = 'Hero',
    headline?: string
  ) => {
    setBookingLocation(location);
    setBookingHeadline(headline);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div id="landing-page-root" className="min-h-screen flex flex-col bg-[#FAFAFB] text-[#1E293B]">
      {/* 1. Minimal Nav */}
      <Navbar onOpenBooking={() => handleOpenBooking('Nav')} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('Hero')} />

        {/* 3. Industry-specific Problem Section */}
        <ProblemSection />

        {/* 4. Liberty Bell / AI Receptionist Solution */}
        <SolutionSection />

        {/* 5. AI Receptionist Conversation Demo */}
        <DemoSection />

        {/* 6. Customer Journey Flow */}
        <CustomerJourney />

        {/* 7. Relevant Additional Services */}
        <AdditionalServices />

        {/* 8. Why Liberty Bell Trust Section */}
        <WhyLibertyBell />

        {/* 9. In-Person Review Section */}
        <InPersonReview
          onOpenBooking={() =>
            handleOpenBooking('In-Person Review', 'Book Your Free In-Person Business Review')
          }
        />

        {/* 10. FAQ Section */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking('Final CTA')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 12. Sticky CTA (Mobile bottom + Desktop floating) */}
      <StickyCTA onOpenBooking={() => handleOpenBooking('Sticky')} />

      {/* 13. Booking Popup Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        ctaLocation={bookingLocation}
        customHeadline={bookingHeadline}
      />
    </div>
  );
}
