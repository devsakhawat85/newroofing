import React from 'react';
import { LEADERSHIP_TEAM, COMPANY_INFO, CORE_VALUES } from '../data/companyData';
import { ShieldCheck, UserCheck, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#17283F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
              About Lawrence and Sons Roofing Inc.
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Built on Craftsmanship, Integrity &amp; Family Leadership
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Serving residential and commercial property owners throughout Phoenix, Arizona with reliable installations, premium materials, and direct communication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
                Our Mission &amp; Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17283F]">
                Our Mission at Lawrence and Sons Roofing Inc
              </h2>
              <p className="text-sm sm:text-base text-[#68717B] leading-relaxed">
                At Lawrence and Sons Roofing Inc, our mission is to provide top-quality roofing services that ensure the safety and security of your home or commercial structure. We are committed to customer satisfaction, using only the highest quality parts and equipment.
              </p>
              <p className="text-sm sm:text-base text-[#68717B] leading-relaxed">
                With years of experience in the roofing industry, we specialize in residential and commercial roofing solutions. Our skilled team is trained in the latest techniques and materials to deliver durable and reliable roofs designed specifically for the extreme thermal challenges of the Phoenix desert.
              </p>

              <div className="bg-[#F7F6F2] p-6 rounded-lg border border-slate-200 space-y-2">
                <div className="text-xs font-semibold text-[#17283F] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B97745]" />
                  <span>The Lawrence &amp; Sons Workmanship Promise</span>
                </div>
                <p className="text-sm text-[#20262D] italic">
                  "We strive to save you both time and money by combining roofing knowledge, the highest quality parts and equipment, and dedication to delivering exceptional service. We will not leave the job until it is finished and you are satisfied with the results."
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-lg relative bg-slate-900 group">
                <img
                  src="/images/project-1.jpg"
                  alt="Architectural shingle roof installation in Phoenix by Lawrence & Sons Roofing"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="text-xs text-[#B97745] font-semibold uppercase tracking-wider">
                    Phoenix, Arizona
                  </div>
                  <div className="text-lg font-bold font-display text-white">
                    Authentic Phoenix Workmanship
                  </div>
                  <p className="text-xs text-slate-300">
                    Inspecting every eave, ridge, and valley before signing off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 sm:py-20 bg-[#F7F6F2] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
              Your Contacts
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17283F]">
              Company Leadership
            </h2>
            <p className="text-sm sm:text-base text-[#68717B] mt-2">
              At Lawrence and Sons Roofing Inc, you work directly with company officers. We believe in building lasting relationships through open communication and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#17283F] text-white flex items-center justify-center font-bold text-lg">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#17283F] font-display">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#B97745] uppercase tracking-wider">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#68717B] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-[#17283F] font-medium flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#B97745]" />
                    <span>Direct Project Oversight</span>
                  </span>

                  {member.contact ? (
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="inline-flex items-center gap-1 text-[#17283F] font-semibold hover:text-[#B97745] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B97745]" />
                      <span>{member.contact}</span>
                    </a>
                  ) : (
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="inline-flex items-center gap-1 text-[#17283F] font-semibold hover:text-[#B97745] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B97745]" />
                      <span>Contact Via Email</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Commitment & Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
              Customer Commitment
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17283F]">
              How We Protect Our Clients
            </h2>
            <p className="text-sm sm:text-base text-[#68717B] mt-2">
              We prioritize open communication and transparency to ensure that each client feels valued and informed throughout the roofing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F7F6F2] p-6 rounded-lg border border-slate-200 space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B97745] shrink-0" />
                  <h3 className="text-base font-bold text-[#17283F] font-display">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#68717B] pl-6 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action row */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[#17283F]">
                Ready to speak directly with our team?
              </div>
              <div className="text-xs text-[#68717B]">
                Call (480) 330-1646 or request a free estimate online.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md transition-colors shadow-sm cursor-pointer"
              >
                Request Free Quote
              </button>
              <button
                onClick={() => onNavigate('/contact-us')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#17283F] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors border border-slate-300 cursor-pointer"
              >
                Contact Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
