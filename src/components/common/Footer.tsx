import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, AUTHENTIC_SERVICES } from '../../data/companyData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17283F] text-[#F7F6F2] border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-700/60 bg-[#122033]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Lawrence &amp; Sons Workmanship Commitment</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              "We stand by our work. If there are any leaks in your new roof, we cover the repair cost to the roof and any damage caused by the leak."
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Request Free Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-md transition-colors border border-slate-700"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Introduction (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo variant="footer" onClick={() => handleNav('/')} />
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              With years of experience in the roofing industry, Lawrence and Sons Roofing Inc specializes in residential and commercial roofing solutions across Phoenix, Arizona. Our skilled team is trained in the latest techniques and materials to deliver durable, reliable roofs.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-200">Frank Lawrence</strong> — President</div>
              <div><strong className="text-slate-200">Ken Lawrence</strong> — Vice President</div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/about-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Roofing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Quotes
                </button>
              </li>
            </ul>
          </div>

          {/* Roofing Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Roofing Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {AUTHENTIC_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('/services')}
                    className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#B97745] transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                <span>Phoenix, Arizona, United States</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-white hover:text-[#B97745] transition-colors font-medium block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400">Call or Text</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B97745] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="text-slate-200">Mon–Fri: 7:00 AM – 5:00 PM</div>
                  <div className="text-slate-400">Sat–Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Phoenix, AZ Roofing Contractor</span>
            <span>·</span>
            <button
              onClick={() => handleNav('/contact-us')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
