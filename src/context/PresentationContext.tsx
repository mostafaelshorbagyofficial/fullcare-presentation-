import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, SectionKey, PresentationState, SlideDefinition } from '../types/presentation';
import { SLIDES, SECTIONS } from '../data/slides';

interface PresentationContextType extends PresentationState {
  slides: SlideDefinition[];
  currentSlideData: SlideDefinition | null;
  currentSection: SectionKey;
  goToSlide: (slideNumber: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  startPresentation: () => void;
  exitToOpening: () => void;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  toggleFullscreen: () => void;
  toggleAutoPlay: () => void;
  jumpToSection: (sectionKey: SectionKey) => void;
  setLogosModalOpen: (open: boolean) => void;
  setShortcutsModalOpen: (open: boolean) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // 0 = Opening screen, 1..38
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [language, setLanguageState] = useState<Language>('ar');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [navigationDirection, setNavigationDirection] = useState<'next' | 'prev' | null>(null);
  const [isLogosModalOpen, setLogosModalOpen] = useState<boolean>(false);
  const [isShortcutsModalOpen, setShortcutsModalOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const totalSlides = SLIDES.length; // 38

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
      console.warn('Fullscreen request could not be completed:', err);
    }
  }, []);

  const goToSlide = useCallback((targetSlide: number) => {
    if (isTransitioning) return;
    if (targetSlide < 0 || targetSlide > totalSlides) return;

    setIsTransitioning(true);
    setNavigationDirection(targetSlide > currentSlide ? 'next' : 'prev');
    setCurrentSlide(targetSlide);
    setIsPlaying(targetSlide > 0);

    setTimeout(() => {
      setIsTransitioning(false);
      setNavigationDirection(null);
    }, 450);
  }, [currentSlide, totalSlides, isTransitioning]);

  const startPresentation = useCallback(() => {
    goToSlide(1);
  }, [goToSlide]);

  const exitToOpening = useCallback(() => {
    goToSlide(0);
  }, [goToSlide]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    if (currentSlide === 0) {
      startPresentation();
    } else if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, isTransitioning, startPresentation, goToSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    } else if (currentSlide === 1) {
      goToSlide(0);
    }
  }, [currentSlide, isTransitioning, goToSlide]);

  const jumpToSection = useCallback((sectionKey: SectionKey) => {
    const targetSection = SECTIONS.find(s => s.key === sectionKey);
    if (targetSection) {
      goToSlide(targetSection.slideRange[0]);
    }
  }, [goToSlide]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay(prev => !prev);
  }, []);

  // AutoPlay timer
  useEffect(() => {
    if (!isAutoPlay || currentSlide === 0) return;
    const timer = setInterval(() => {
      if (currentSlide < totalSlides) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentSlide, totalSlides, nextSlide]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid intercepting input fields
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (language === 'ar') {
          prevSlide();
        } else {
          nextSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (language === 'ar') {
          nextSlide();
        } else {
          prevSlide();
        }
      } else if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
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
  }, [currentSlide, language, totalSlides, isLogosModalOpen, isShortcutsModalOpen, nextSlide, prevSlide, goToSlide, toggleFullscreen, toggleLanguage]);

  // Current Slide Data & Section
  const currentSlideData = currentSlide > 0 ? SLIDES[currentSlide - 1] : null;
  const currentSection = currentSlideData ? currentSlideData.section : 'intro';

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        isPlaying,
        language,
        isFullscreen,
        isAutoPlay,
        navigationDirection,
        isLogosModalOpen,
        isShortcutsModalOpen,
        slides: SLIDES,
        currentSlideData,
        currentSection,
        goToSlide,
        nextSlide,
        prevSlide,
        startPresentation,
        exitToOpening,
        toggleLanguage,
        setLanguage,
        toggleFullscreen,
        toggleAutoPlay,
        jumpToSection,
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
