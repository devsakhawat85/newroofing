import React from 'react';
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { AUTHENTIC_SERVICES } from '../../data/companyData';
import { RoofingService } from '../../types';

interface ServicesSectionProps {
  onSelectService: (service: RoofingService) => void;
  onOpenQuote: (serviceTitle?: string) => void;
  onViewAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote,
  onViewAllServices
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
              Verified Roofing Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#17283F] tracking-tight">
              Craftsmanship Engineered for Arizona Climates
            </h2>
            <p className="text-sm sm:text-base text-[#68717B] mt-2 leading-relaxed">
              From intense desert ultraviolet radiation to seasonal monsoon rain and wind, our roofing systems are installed to protect your property year after year.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#17283F] hover:text-[#B97745] transition-colors cursor-pointer group whitespace-nowrap self-start md:self-end"
          >
            <span>Explore All Roofing Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bento Grid: 2 Marquee Cards (col-span-2) + 2 Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AUTHENTIC_SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
              >
                {/* Image Banner */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Clean unboxed category badge (Anti-pill: subtle text overlay) */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded">
                    {service.badge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#B97745] font-semibold block">
                      Service 0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm text-[#68717B] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs font-semibold text-[#17283F] uppercase tracking-wider">
                        Core Specifications:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#68717B]">
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B97745] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs sm:text-sm font-semibold text-[#17283F] hover:text-[#B97745] transition-colors cursor-pointer"
                    >
                      Learn More Details &rarr;
                    </button>

                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded transition-all cursor-pointer shadow-sm"
                    >
                      Get Quote for This
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
