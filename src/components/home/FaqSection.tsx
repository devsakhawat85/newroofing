import React, { useState } from 'react';
import { AUTHENTIC_FAQS, COMPANY_INFO } from '../../data/companyData';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
            Got Questions? We Have Honest Answers.
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#17283F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#68717B]">
            Please contact us directly if you cannot find an answer to your question. We are always ready to assist.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {AUTHENTIC_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50/80 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#17283F] font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F7F6F2] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#17283F] text-white' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#68717B] bg-[#F7F6F2]/50 border-t border-slate-100 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-2 text-[11px] text-slate-400">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 bg-[#F7F6F2] p-6 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#B97745] shrink-0" />
            <div className="text-xs sm:text-sm text-[#20262D]">
              <span className="font-semibold block">Need personalized answers about your roof?</span>
              <span className="text-[#68717B]">Call Ken Lawrence directly at (480) 330-1646</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-4 py-2 text-xs font-semibold text-[#17283F] bg-white border border-slate-300 hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Call Direct
            </a>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded transition-colors whitespace-nowrap"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
