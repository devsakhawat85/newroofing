import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Award, Home, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreProjects
}) => {
  return (
    <section className="relative bg-[#17283F] text-white overflow-hidden">
      {/* Decorative architectural grid background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-12 sm:pb-16 relative">
        {/* 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Headline & Value (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B97745] uppercase">
              <span className="w-6 h-0.5 bg-[#B97745]" />
              <span>Phoenix, Arizona Roofing Contractor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display tracking-tight leading-[1.1] text-white">
              Protect Your Property.{' '}
              <span className="text-[#F7F6F2] font-editorial italic font-normal">
                Trust the Craftsmanship.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              With years of experience in the roofing industry, <strong className="text-white">Lawrence and Sons Roofing Inc</strong> specializes in residential and commercial roofing solutions across the greater Phoenix valley. We combine roofing knowledge, quality materials, and transparent communication from initial consultation to final completion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer active:scale-[0.98] whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 rounded-md border border-slate-700 transition-all duration-200 hover:border-slate-500 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#B97745]" />
                <span>Call (480) 330-1646</span>
              </a>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center text-xs sm:text-sm font-medium text-slate-300 hover:text-white px-3 py-2 cursor-pointer transition-colors"
              >
                <span>View Real Work &rarr;</span>
              </button>
            </div>

            {/* Core Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B97745]" />
                <span>Written Leak Repair Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B97745]" />
                <span>President &amp; VP Direct Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-[#B97745]" />
                <span>Residential &amp; Commercial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-lg overflow-hidden border border-slate-700/60 shadow-2xl group bg-slate-900">
              <img
                src="/images/project-2.jpg"
                alt="Standing seam metal roof installed by Lawrence & Sons Roofing on a modern Phoenix desert home"
                className="w-full h-[360px] sm:h-[420px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17283F] via-[#17283F]/30 to-transparent" />

              {/* Verified Project Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#17283F]/90 backdrop-blur-md p-3.5 rounded border border-slate-700 text-xs space-y-1">
                <div className="flex items-center justify-between text-[#B97745] font-semibold">
                  <span className="uppercase tracking-wider">Authentic Completed Project</span>
                  <span>Phoenix, AZ</span>
                </div>
                <div className="text-white font-medium text-sm">
                  Standing-Seam Metal Roof &amp; Custom Metal Fascia
                </div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Engineered for extreme Arizona sun and high-heat thermal durability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Strip Below Hero Split */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              Workmanship
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-display">
              Satisfaction Guaranteed
            </div>
            <p className="text-xs text-slate-400">
              We do not leave the job until it is finished and you are satisfied.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              Warranty Coverage
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-display">
              Full Leak Protection
            </div>
            <p className="text-xs text-slate-400">
              We cover repair cost to the roof and any damage caused if a new roof leaks.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              Inspections
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-display">
              $75 Detailed Evaluation
            </div>
            <p className="text-xs text-slate-400">
              With optional insurance paperwork filing assistance.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-display">
              (480) 330-1646
            </div>
            <p className="text-xs text-slate-400">
              Constant communication with Ken &amp; Frank Lawrence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
