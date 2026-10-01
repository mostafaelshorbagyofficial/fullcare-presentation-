import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, SectionKey, PresentationState, SlideDefinition } from '../types/presentation';
import { SLIDES, SECTIONS } from '../data/slides';

interface PresentationContextType extends PresentationState {
  slides: SlideDefinition[];
  scrollToSection: (sectionKey: SectionKey) => void;
  scrollToSlide: (slideNumber: number) => void;
  scrollToTop: () => void;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  toggleFullscreen: () => void;
  setLogosModalOpen: (open: boolean) => void;
  setShortcutsModalOpen: (open: boolean) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');
  const [activeSection, setActiveSection] = useState<SectionKey>('intro');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLogosModalOpen, setLogosModalOpen] = useState<boolean>(false);
  const [isShortcutsModalOpen, setShortcutsModalOpen] = useState<boolean>(false);

  // Sync HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Handle Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Continuous Scroll Spy to update scrollProgress and activeSection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Detect active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(`section-${section.key}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35) {
            setActiveSection(section.key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request error:', err);
    }
  }, []);

  const scrollToSection = useCallback((sectionKey: SectionKey) => {
    const el = document.getElementById(`section-${sectionKey}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToSlide = useCallback((slideNumber: number) => {
    const el = document.getElementById(`slide-${slideNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
      } else if (e.key === 'Escape') {
        if (isLogosModalOpen) setLogosModalOpen(false);
        if (isShortcutsModalOpen) setShortcutsModalOpen(false);
      } else if (e.key === '?') {
        e.preventDefault();
        setShortcutsModalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLogosModalOpen, isShortcutsModalOpen, scrollToTop, toggleFullscreen, toggleLanguage]);

  return (
    <PresentationContext.Provider
      value={{
        language,
        activeSection,
        scrollProgress,
        isFullscreen,
        isLogosModalOpen,
        isShortcutsModalOpen,
        slides: SLIDES,
        scrollToSection,
        scrollToSlide,
        scrollToTop,
        toggleLanguage,
        setLanguage,
        toggleFullscreen,
        setLogosModalOpen,
        setShortcutsModalOpen,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};
