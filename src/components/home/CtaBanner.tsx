import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-[#17283F] text-white py-16 sm:py-20 overflow-hidden">
      {/* Background with real roof texture subtly blended */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/images/project-3.jpg"
          alt="Roof texture background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#17283F] via-[#17283F]/95 to-[#17283F]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B97745]">
          <ShieldCheck className="w-4 h-4" />
          <span>Lawrence &amp; Sons Roofing Inc · Phoenix, Arizona</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white max-w-3xl mx-auto">
          Ready to Protect Your Home or Business With Lasting Craftsmanship?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a new standing-seam metal roof, architectural shingle replacement, tile underlayment overhaul, or a $75 insurance inspection, we are here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98] whitespace-nowrap"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-600 transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#B97745]" />
            <span>Call (480) 330-1646</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          Direct communication with Ken Lawrence · Mon–Fri 7:00 AM – 5:00 PM
        </div>
      </div>
    </section>
  );
};
