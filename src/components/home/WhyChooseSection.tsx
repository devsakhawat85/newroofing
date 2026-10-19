import React from 'react';
import { CORE_VALUES, LEADERSHIP_TEAM, COMPANY_INFO } from '../../data/companyData';
import { Award, UserCheck, ShieldCheck, PhoneCall } from 'lucide-react';

interface WhyChooseSectionProps {
  onOpenQuote: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#17283F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
            The Lawrence &amp; Sons Difference
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
            Why Property Owners Trust Us With Their Next Project
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            We strive to save you both time and money by combining roofing knowledge, the highest quality parts and equipment, and dedication to delivering exceptional service.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#122033] p-6 rounded-lg border border-slate-700/70 flex flex-col justify-between space-y-4 hover:border-slate-500 transition-colors"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold text-[#B97745] block">
                  0{idx + 1}.
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-display">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/50 text-[11px] text-slate-400">
                Direct client commitment
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#122033] to-[#17283F] p-8 rounded-lg border border-slate-700 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>Direct Family Leadership &amp; Personal Accountability</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              Talk Directly with Frank Lawrence &amp; Ken Lawrence
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              You are never handed off to anonymous salespeople or subcontracted call centers. You work directly with company President Frank Lawrence and Vice President Ken Lawrence from consultation to final inspection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-600 transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#B97745]" />
              <span>(480) 330-1646</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
