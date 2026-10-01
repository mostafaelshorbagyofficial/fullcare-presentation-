import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { Play, Sparkles, Globe, Maximize, Eye, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const OpeningScreen: React.FC = () => {
  const { language, toggleLanguage, startPresentation, toggleFullscreen, isFullscreen, setLogosModalOpen, setShortcutsModalOpen } = usePresentation();

  const isAr = language === 'ar';

  return (
    <div className="relative w-full h-[100dvh] bg-navy-950 flex flex-col justify-between items-center p-6 sm:p-8 md:p-12 overflow-hidden select-none safe-top safe-bottom safe-left safe-right">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Top Bar on Opening */}
      <header className="relative z-20 w-full max-w-6xl flex justify-between items-center animate-fade-in-down">
        {/* ProMedia Presentation Tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
              {isAr ? 'عرض استراتيجي تفاعلي' : 'Interactive Strategic Deck'}
            </span>
          </div>
        </div>

        {/* Action controls on Opening */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo directions modal trigger */}
          <button
            onClick={() => setLogosModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill hover:bg-slate-800/80 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
            title={isAr ? 'معاينة مقترحات الهوية البصرية' : 'Preview Brand Identities'}
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">{isAr ? 'مقترحات الهوية' : 'Brand Logos'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill hover:bg-emerald-950/40 border-emerald-500/30 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-all cursor-pointer shadow-sm"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isAr ? 'English (EN)' : 'العربية (AR)'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full glass-pill hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all cursor-pointer"
            title={isFullscreen ? (isAr ? 'إنهاء وضع الشاشة الكاملة' : 'Exit Fullscreen') : (isAr ? 'ملء الشاشة' : 'Fullscreen')}
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Hero Centerpiece */}
      <main className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center my-auto py-6 sm:py-10 animate-scale-in">
        {/* ProMedia Presents Header */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400 font-medium mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ProMedia Presents</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </span>

          {/* ProMedia Logo Showcase */}
          <div className="relative group p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-emerald-500/40 hover:scale-105">
            <img
              src="/assets/promedia-logo.png"
              alt="ProMedia Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Full Care Title */}
        <div className="space-y-3 mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading">
            <span className="text-gradient-emerald">FULL CARE</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-slate-200 font-sans tracking-wide">
            {isAr ? 'الاستراتيجية الرقمية والرؤية المستقبلية للهوية' : 'Digital Brand Strategy & Strategic Deck'}
          </p>
          <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-4" />
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {isAr 
              ? 'من مجرد تصنيع وبيع المنتجات الطبية.. إلى الرعاية الإنسانية الحقيقية خلف كل عائلة مصرية.'
              : 'From Healthcare Products — To the Care Behind Every Family.'}
          </p>
        </div>

        {/* Play Presentation CTA Button */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <button
            onClick={startPresentation}
            className="group relative inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white font-bold text-base sm:text-lg shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-emerald-300/30"
          >
            {/* Ambient Shine animation */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent ease-out" />
            
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-900 transition-colors">
              <Play className="w-4 h-4 fill-current translate-x-0.5" />
            </div>

            <span className="tracking-wide">
              {isAr ? 'بدء العرض التقديمي' : 'PLAY PRESENTATION'}
            </span>
          </button>

          {/* Quick Key navigation guide */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
            <kbd className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[11px] text-slate-300">Space</kbd>
            <span>{isAr ? 'أو الأسهم للتنقل السلس' : 'or Arrow Keys to Navigate'}</span>
          </div>
        </div>
      </main>

      {/* Strategic Pillars Ribbon */}
      <footer className="relative z-20 w-full max-w-5xl flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-4 border-t border-slate-800/60 text-slate-400 text-xs animate-fade-in-up">
        <div className="flex items-center gap-2 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{isAr ? 'تصنيع دوائي متطور' : 'Industrial Manufacturing'}</span>
        </div>
        <span className="hidden sm:inline text-slate-700">•</span>
        <div className="flex items-center gap-2 text-slate-300">
          <HeartHandshake className="w-4 h-4 text-cyan-400" />
          <span>{isAr ? 'السند اللي دايمًا موجود' : 'The Support Always There'}</span>
        </div>
        <span className="hidden sm:inline text-slate-700">•</span>
        <div className="flex items-center gap-2 text-slate-300">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>{isAr ? 'تغطية جغرافية وطنية' : 'Nationwide Healthcare Network'}</span>
        </div>
      </footer>
    </div>
  );
};
