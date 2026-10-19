import React from 'react';
import { AUTHENTIC_SERVICES, AUTHENTIC_FAQS, COMPANY_INFO } from '../data/companyData';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, FileText, Check, HelpCircle } from 'lucide-react';
import { FaqSection } from '../components/home/FaqSection';

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#17283F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
              Lawrence &amp; Sons Roofing Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Reliable Roofing Services in Phoenix, AZ
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide a full consultation to explain your available options so that you can choose the roofing plan that’s right for your home or business. We will work with you, adhere to your personal needs, and then we'll be in contact through the whole project.
            </p>
          </div>
        </div>
      </section>

      {/* Services List with Deep Dive Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {AUTHENTIC_SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-slate-200 last:border-0"
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 sm:h-84 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded">
                      {service.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs text-[#B97745] font-semibold uppercase tracking-wider">
                        Phoenix Installation
                      </div>
                      <div className="text-base font-bold text-white">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Content */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#B97745]">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17283F]">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-[#B97745]">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#68717B] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-[#17283F] uppercase tracking-wider">
                      Workmanship Standards &amp; Inclusions:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#68717B]">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      Request Quote for {service.title}
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#17283F] bg-[#F7F6F2] hover:bg-slate-200 rounded-md border border-slate-300 transition-colors whitespace-nowrap flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B97745]" />
                      <span>(480) 330-1646</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Insurance Inspection Highlight Box */}
      <section className="py-14 sm:py-16 bg-[#F7F6F2] border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B97745]">
                <FileText className="w-4 h-4" />
                <span>Homeowners Insurance Inspections</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#17283F]">
                Detailed Roof Inspection for Only {COMPANY_INFO.inspectionFee}
              </h3>
              <p className="text-xs sm:text-sm text-[#68717B] leading-relaxed">
                Concerned about storm wear or preparing for an insurance claim? We provide a thorough photographic inspection for $75, with an additional option to file the paperwork directly with your insurance company.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenQuote('$75 Detailed Roof Inspection')}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap text-center"
              >
                Book $75 Inspection
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-[#17283F] bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-300 transition-colors whitespace-nowrap text-center"
              >
                Call to Inquire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion embedded */}
      <FaqSection onOpenQuote={() => onOpenQuote()} />
    </div>
  );
};
