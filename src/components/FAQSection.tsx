import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 'faq-item-1',
      question: 'Does this work for my type of business even if it’s not listed here?',
      answer:
        'Yes. Liberty Bell is designed as a universal receptionist system for any local business that receives inbound phone calls, schedules client appointments, or answers service inquiries.',
    },
    {
      id: 'faq-item-2',
      question: 'Can it handle questions specific to my industry?',
      answer:
        'Yes. We configure the system with your exact service offerings, pricing guidelines, business hours, policies, and unique FAQs so callers receive accurate answers every time.',
    },
    {
      id: 'faq-item-3',
      question: 'Does it work after hours and on weekends?',
      answer:
        'Yes, 24 hours a day, 7 days a week, 365 days a year. It never takes breaks, misses shifts, or lets an evening caller bounce to a competitor.',
    },
    {
      id: 'faq-item-4',
      question: 'Can a real person still pick up if needed?',
      answer:
        'Yes. You have full control. You can set the AI to answer only overflow or missed rings, or program it to transfer urgent and VIP calls straight to your cell or staff.',
    },
    {
      id: 'faq-item-5',
      question: 'How fast can this be set up?',
      answer:
        'Most businesses are completely configured, tested, and live within just a few business days following our initial strategy session or in-person review.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="py-12 sm:py-16 bg-[#FAFAFB] border-b border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-2">
            Frequently Asked Questions
          </div>
          <h2
            id="faq-headline"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#16213E] tracking-tight leading-tight mb-3"
          >
            Clear Answers For Business Owners
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Quick facts on how Liberty Bell integrates with your phone line and daily workflow.
          </p>
        </div>

        {/* 5 FAQs Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-sm sm:text-base text-[#16213E] hover:text-[#D4A017] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D4A017]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
