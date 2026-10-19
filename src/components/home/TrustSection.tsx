import React from 'react';
import { ShieldCheck, MessageSquare, Wrench, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES } from '../../data/companyData';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Our Roofing Expertise',
      description:
        'With years of experience in the roofing industry, Lawrence and Sons Roofing Inc specializes in residential and commercial roofing solutions. Our skilled team is trained in the latest techniques and materials to deliver durable and reliable roofs.',
      icon: Wrench
    },
    {
      title: 'Customer Commitment',
      description:
        'At Lawrence and Sons Roofing Inc, we believe in building lasting relationships with our customers. We prioritize open communication and transparency to ensure that each client feels valued and informed throughout the roofing process.',
      icon: MessageSquare
    },
    {
      title: 'Our Mission & Safety',
      description:
        'Our mission is to provide top-quality roofing services that ensure the safety and security of your home or business. We are committed to customer satisfaction, using only the highest quality parts and equipment.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
            Built on Integrity &amp; Proven Craftsmanship
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#17283F] tracking-tight">
            We’ve Got You Covered.
          </h2>
          <p className="text-sm sm:text-base text-[#68717B] mt-2 leading-relaxed">
            Every roof we build or service is held to uncompromising standards. We will not leave the job until it is finished and you are completely satisfied with the results.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F6F2] p-6 sm:p-8 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-[#17283F] text-[#B97745] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#17283F] font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#68717B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#17283F]">
                  <CheckCircle2 className="w-4 h-4 text-[#B97745]" />
                  <span>Verified Business Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
