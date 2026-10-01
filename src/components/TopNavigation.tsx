import React, { useState } from 'react';
import { usePresentation } from '../context/PresentationContext';
import { SECTIONS } from '../data/slides';
import { SectionKey } from '../types/presentation';
import { Globe, Maximize, Minimize, Home, Layers, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const TopNavigation: React.FC = () => {
  const {
    currentSlide,
    totalSlides,
    currentSection,
    language,
    toggleLanguage,
    isFullscreen,
    toggleFullscreen,
    exitToOpening,
    jumpToSection,
    setLogosModalOpen,
    setShortcutsModalOpen,
  } = usePresentation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isAr = language === 'ar';
  const progressPercent = totalSlides > 0 ? (currentSlide / totalSlides) * 100 : 0;

  const currentSectionMeta = SECTIONS.find(s => s.key === currentSection) || SECTIONS[0];

  return (
    <header className="relative z-30 w-full bg-navy-950/80 backdrop-blur-xl border-b border-white/5 select-none transition-all safe-top">
      {/* Progress Bar Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-800/40 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(16,185,129,0.7)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-2">
        {/* Left Side: Brand Indicator & Home */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={exitToOpening}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group"
            title={isAr ? 'العودة للشاشة الافتتاحية' : 'Return to Opening Screen'}
          >
            <Home className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:inline leading-none font-medium">ProMedia Presents</span>
              <span className="text-xs font-bold text-white tracking-wider leading-tight">FULL CARE</span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Section Shortcuts */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1 px-2 rounded-full bg-slate-900/60 border border-white/5 scrollbar-none">
          {SECTIONS.map((sec) => {
            const isActive = sec.key === currentSection;
            return (
              <button
                key={sec.key}
                onClick={() => jumpToSection(sec.key as SectionKey)}
                className={`relative px-3 py-1 text-[11px] font-semibold tracking-wider transition-all duration-200 rounded-full cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
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
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs text-emerald-300 font-medium"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{isAr ? currentSectionMeta.ar.label : currentSectionMeta.en.label}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full mt-2 right-0 sm:left-1/2 sm:-translate-x-1/2 w-56 p-2 rounded-xl bg-slate-900/95 border border-white/10 backdrop-blur-2xl shadow-2xl z-50 flex flex-col gap-1">
              {SECTIONS.map((sec) => (
                <button
                  key={sec.key}
                  onClick={() => {
                    jumpToSection(sec.key as SectionKey);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    sec.key === currentSection
                      ? 'bg-emerald-500/20 text-emerald-300 font-bold'
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
          {/* Slide Indicator */}
          <div className="px-2.5 py-1 rounded-md bg-slate-900/70 border border-white/5 font-mono text-xs font-semibold text-slate-300">
            <span className="text-emerald-400">{String(currentSlide).padStart(2, '0')}</span>
            <span className="text-slate-600 mx-1">/</span>
            <span className="text-slate-500">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Logos Modal Trigger */}
          <button
            onClick={() => setLogosModalOpen(true)}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs transition-all cursor-pointer flex items-center gap-1"
            title={isAr ? 'مقترحات الهوية البصرية' : 'Brand Logo Proposals'}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">{isAr ? 'الهوية' : 'Logos'}</span>
          </button>

          {/* Shortcuts Info */}
          <button
            onClick={() => setShortcutsModalOpen(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-xs transition-all cursor-pointer hidden sm:flex"
            title={isAr ? 'اختصارات لوحة المفاتيح' : 'Keyboard Shortcuts'}
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/30 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-all cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
          >
            <Globe className="w-3 h-3" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer hidden sm:flex"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
