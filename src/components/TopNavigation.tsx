import React, { useState } from 'react';
import { usePresentation } from '../context/PresentationContext';
import { SECTIONS } from '../data/slides';
import { SectionKey } from '../types/presentation';
import { Globe, Maximize, Minimize, Home, Layers, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const TopNavigation: React.FC = () => {
  const {
    activeSection,
    scrollProgress,
    language,
    toggleLanguage,
    isFullscreen,
    toggleFullscreen,
    scrollToTop,
    scrollToSection,
    setLogosModalOpen,
    setShortcutsModalOpen,
  } = usePresentation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isAr = language === 'ar';
  const currentSectionMeta = SECTIONS.find(s => s.key === activeSection) || SECTIONS[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-pharma-deep/90 backdrop-blur-xl border-b border-pharma-primary/20 select-none transition-all safe-top shadow-xl">
      {/* Scroll Progress Bar Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-900/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pharma-support via-pharma-primary to-pharma-light transition-all duration-150 ease-out shadow-[0_0_10px_rgba(73,182,238,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-2">
        {/* Left Side: Brand Indicator & Scroll to Top */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group"
            title={isAr ? 'العودة للأعلى' : 'Scroll to top'}
          >
            <Home className="w-4 h-4 text-pharma-primary group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-pharma-light/70 uppercase tracking-widest hidden sm:inline leading-none font-medium">ProMedia Presents</span>
              <span className="text-xs font-bold text-white tracking-wider leading-tight">FULL CARE</span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Section Shortcuts */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1 px-2 rounded-full bg-pharma-deep/80 border border-pharma-primary/20 scrollbar-none">
          {SECTIONS.map((sec) => {
            const isActive = sec.key === activeSection;
            return (
              <button
                key={sec.key}
                onClick={() => scrollToSection(sec.key as SectionKey)}
                className={`relative px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-200 rounded-full cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-pharma-primary/30 text-pharma-light border border-pharma-primary/50 shadow-[0_0_12px_rgba(73,182,238,0.35)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isAr ? sec.ar.label : sec.en.tag}
              </button>
            );
          })}
        </nav>

        {/* Mobile/Tablet Section Trigger */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pharma-deep/90 border border-pharma-primary/40 text-xs text-pharma-light font-medium"
          >
            <Sparkles className="w-3 h-3 text-pharma-primary" />
            <span>{isAr ? currentSectionMeta.ar.label : currentSectionMeta.en.label}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full mt-2 right-0 sm:left-1/2 sm:-translate-x-1/2 w-56 p-2 rounded-xl bg-pharma-deep border border-pharma-primary/30 backdrop-blur-2xl shadow-2xl z-50 flex flex-col gap-1">
              {SECTIONS.map((sec) => (
                <button
                  key={sec.key}
                  onClick={() => {
                    scrollToSection(sec.key as SectionKey);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    sec.key === activeSection
                      ? 'bg-pharma-primary/30 text-pharma-light font-bold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {isAr ? sec.ar.label : sec.en.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Progress Indicator, Logos Modal, Language & Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Scroll Progress Indicator */}
          <div className="px-2.5 py-1 rounded-md bg-pharma-deep/90 border border-pharma-primary/30 font-mono text-xs font-semibold text-slate-300">
            <span className="text-pharma-primary">{Math.round(scrollProgress)}%</span>
          </div>

          {/* Logos Modal Trigger */}
          <button
            onClick={() => setLogosModalOpen(true)}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-xs transition-all cursor-pointer flex items-center gap-1 border border-pharma-primary/20"
            title={isAr ? 'مقترحات الهوية البصرية' : 'Brand Logo Proposals'}
          >
            <Layers className="w-3.5 h-3.5 text-pharma-primary" />
            <span className="hidden md:inline">{isAr ? 'الهوية' : 'Logos'}</span>
          </button>

          {/* Shortcuts Info */}
          <button
            onClick={() => setShortcutsModalOpen(true)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-xs transition-all cursor-pointer hidden sm:flex border border-pharma-primary/20"
            title={isAr ? 'اختصارات لوحة المفاتيح' : 'Keyboard Shortcuts'}
          >
            <HelpCircle className="w-3.5 h-3.5 text-pharma-secondary" />
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-pharma-support/60 hover:bg-pharma-support border border-pharma-primary/40 text-xs font-semibold text-pharma-light hover:text-white transition-all cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
          >
            <Globe className="w-3 h-3" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer hidden sm:flex border border-pharma-primary/20"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
