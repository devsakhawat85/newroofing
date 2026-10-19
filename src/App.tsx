/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { Lightbox } from './components/common/Lightbox';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { RoofingProject } from './types';
import { AUTHENTIC_PROJECTS, COMPANY_INFO } from './data/companyData';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  // Extract initial path from window.location
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (['/about-us', '/services', '/gallery', '/contact-us'].includes(path)) {
      return path;
    }
    // Check hash for fallback
    const hash = window.location.hash.replace('#', '');
    if (['/about-us', '/services', '/gallery', '/contact-us'].includes(hash)) {
      return hash;
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('Shingle Roofing');
  const [lightboxProject, setLightboxProject] = useState<RoofingProject | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) setQuoteInitialService(serviceTitle);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#20262D]">
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
            onSelectProject={(p) => setLightboxProject(p)}
          />
        )}
        {currentPath === '/about-us' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={navigateTo}
          />
        )}
        {currentPath === '/services' && (
          <ServicesPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}
        {currentPath === '/gallery' && (
          <GalleryPage
            onSelectProject={(p) => setLightboxProject(p)}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {currentPath === '/contact-us' && <ContactPage />}
      </main>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={quoteInitialService}
      />

      {/* Project Lightbox Modal */}
      <Lightbox
        project={lightboxProject}
        projects={AUTHENTIC_PROJECTS}
        onClose={() => setLightboxProject(null)}
        onSelectProject={(p) => setLightboxProject(p)}
      />

      {/* Mobile Floating Quick Contact Bar (Clean, unobtrusive, <15% height) */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2 p-1.5 bg-[#17283F]/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#B97745] text-white rounded text-xs font-semibold shadow-sm active:scale-[0.98]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (480) 330-1646</span>
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 flex items-center justify-center py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold border border-white/20 active:scale-[0.98]"
        >
          <span>Free Quote</span>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden sm:flex fixed bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-[#17283F] text-white shadow-lg items-center justify-center hover:bg-[#20262D] transition-colors border border-slate-700 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
      />
    </div>
  );
}
