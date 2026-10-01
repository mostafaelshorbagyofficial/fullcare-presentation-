import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { ChevronLeft, ChevronRight, Play, Pause, Compass } from 'lucide-react';

export const NavigationControls: React.FC = () => {
  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    language,
    isAutoPlay,
    toggleAutoPlay,
  } = usePresentation();

  const isAr = language === 'ar';
  const isFirstSlide = currentSlide <= 1;
  const isLastSlide = currentSlide >= totalSlides;

  // In RTL:
  // Previous slide goes to the right visually (or labeled "السابق")
  // Next slide goes to the left visually (or labeled "التالي")
  return (
    <footer className="relative z-20 w-full bg-navy-950/70 backdrop-blur-md border-t border-white/5 py-2.5 px-4 sm:px-8 flex items-center justify-between gap-4 select-none safe-bottom">
      {/* Left side: Strategic Section tag & AutoPlay */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
            isAutoPlay
              ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              : 'glass-pill text-slate-400 hover:text-white hover:bg-slate-800/80'
          }`}
          title={isAutoPlay ? (isAr ? 'إيقاف التشغيل التلقائي' : 'Pause Autoplay') : (isAr ? 'تشغيل تلقائي' : 'Autoplay (6s)')}
        >
          {isAutoPlay ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isAutoPlay ? (isAr ? 'تشغيل مستمر' : 'Autoplaying') : (isAr ? 'تشغيل آلي' : 'Autoplay')}</span>
        </button>

        <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[10px] text-slate-300 font-mono">Space</kbd>
          <span>{isAr ? 'للتالي' : 'Next'}</span>
        </div>
      </div>

      {/* Center: Slide indicator on mobile / Brand statement */}
      <div className="text-center text-xs text-slate-400 font-medium tracking-wider flex items-center gap-1.5">
        <Compass className="w-3.5 h-3.5 text-emerald-400" />
        <span className="hidden sm:inline">ProMedia Strategic Deck</span>
        <span className="sm:hidden font-mono font-bold text-slate-300">{currentSlide} / {totalSlides}</span>
      </div>

      {/* Right side: Navigation Buttons (Previous & Next) */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={isFirstSlide}
          className={`group flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            isFirstSlide
              ? 'opacity-30 cursor-not-allowed text-slate-500 bg-slate-900/40 border border-slate-800'
              : 'glass-pill text-slate-200 hover:text-white hover:border-slate-600 active:scale-95'
          }`}
        >
          {isAr ? (
            <>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>السابق</span>
            </>
          ) : (
            <>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Previous</span>
            </>
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className={`group flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            isLastSlide
              ? 'opacity-30 cursor-not-allowed text-slate-500 bg-slate-900/40 border border-slate-800'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 border border-emerald-400/30'
          }`}
        >
          {isAr ? (
            <>
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </>
          ) : (
            <>
              <span>Next</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </div>
    </footer>
  );
};
