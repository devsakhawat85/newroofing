import React from 'react';
import { PROCESS_STEPS } from '../../data/companyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F2] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
            Simple, Transparent Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#17283F] tracking-tight">
            How We Work With You
          </h2>
          <p className="text-sm sm:text-base text-[#68717B] mt-2 leading-relaxed">
            We provide a full consultation to explain your available options so that you can choose the roofing plan that’s right for your home or business. We will work with you, adhere to your personal needs, and then we'll be in contact through the whole project.
          </p>
        </div>

        {/* 5-Step Linear/Numbered Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4 relative shadow-sm"
            >
              <div className="space-y-3">
                <div className="text-2xl font-bold font-mono text-[#B97745]">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#17283F] font-display">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68717B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-semibold text-[#17283F] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B97745]" />
                <span>Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-all shadow-sm cursor-pointer"
          >
            <span>Start Step 1: Request Your Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#B97745]" />
          </button>
        </div>
      </div>
    </section>
  );
};
