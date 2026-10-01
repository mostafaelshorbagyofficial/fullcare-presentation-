import React, { useState, useEffect } from 'react';
import { usePresentation } from '../context/PresentationContext';
import { ArrowUp, Compass, Sparkles } from 'lucide-react';
import { SECTIONS } from '../data/slides';

export const NavigationControls: React.FC = () => {
  const {
    scrollProgress,
    activeSection,
    scrollToTop,
    scrollToSection,
    language,
  } = usePresentation();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isAr = language === 'ar';

  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!isVisible) return null;

  const currentSectionMeta = SECTIONS.find(s => s.key === activeSection) || SECTIONS[0];

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none safe-bottom safe-right animate-fade-in">
      {/* Floating Active Section Pill */}
      <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-pharma-deep/90 backdrop-blur-xl border border-pharma-primary/30 shadow-2xl text-xs font-semibold text-pharma-light">
        <Sparkles className="w-3.5 h-3.5 text-pharma-primary animate-pulse-subtle" />
        <span>{isAr ? currentSectionMeta.ar.label : currentSectionMeta.en.label}</span>
        <span className="font-mono text-pharma-primary text-[11px] font-bold">({Math.round(scrollProgress)}%)</span>
      </div>

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="group flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-r from-pharma-support to-pharma-primary hover:from-pharma-primary hover:to-pharma-secondary text-white shadow-[0_0_25px_rgba(73,182,238,0.4)] hover:shadow-[0_0_35px_rgba(73,182,238,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-pharma-light/40"
        title={isAr ? 'العودة للأعلى' : 'Back to top'}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </aside>
  );
};
