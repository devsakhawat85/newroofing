import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../../data/companyData';
import { Phone, Mail, MapPin, Clock, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Project Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#20262D]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      {/* Premium Announcement Strip */}
      <div className="bg-[#17283F] text-[#F7F6F2] text-xs font-medium py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[13px] text-slate-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B97745]" />
              <span>Phoenix, Arizona</span>
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B97745]" />
              <span>Mon–Fri 7:00 AM – 5:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-[13px]">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B97745]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-[#F7F6F2] font-semibold hover:text-[#B97745] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B97745]" />
              <span className="tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Original Logo */}
        <div className="flex items-center shrink-0">
          <BrandLogo onClick={() => handleLinkClick('/')} />
        </div>

        {/* Zone 2: Navigation Links (Clean single-line prose, no pills) */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#20262D]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#17283F] font-semibold'
                    : 'text-[#68717B] hover:text-[#20262D]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B97745] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Direct Click-to-Call */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#17283F] bg-[#F7F6F2] hover:bg-[#EAE8E0] rounded-md transition-colors border border-[#20262D]/10"
            title="Call Ken Lawrence directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#B97745]" />
            <span className="whitespace-nowrap">Call Direct</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded-md shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#B97745]" />
          </button>

          {/* Mobile hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#20262D] hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#20262D]/10 bg-white px-5 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#17283F] text-white font-semibold'
                      : 'text-[#20262D] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#17283F] bg-[#F7F6F2] hover:bg-slate-200 rounded-md border border-slate-300"
            >
              <Phone className="w-4 h-4 text-[#B97745]" />
              <span>Call (480) 330-1646</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#B97745] hover:bg-[#9E6234] rounded-md shadow-sm"
            >
              <span>Request Free Roofing Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
