import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Quote, HeartHandshake, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const ClosingSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto py-2 px-2 sm:px-6 text-center">
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full animate-fade-in-up">
        {/* Tagline */}
        {content.tagline && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.tagline}</span>
          </div>
        )}

        {/* 4 Evolutionary Shifts Cards */}
        {content.cards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl my-1">
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-3.5 rounded-2xl flex flex-col justify-center gap-1.5 border border-white/10 hover:border-emerald-500/40 transition-all text-center"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {card.title}
                </span>
                <div className="h-0.5 w-6 bg-emerald-400 mx-auto" />
                <span className="text-xs sm:text-sm font-bold text-white font-heading">
                  {card.description}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Master Brand Lockup */}
        <div className="my-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-navy-900/90 to-emerald-950/60 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)] max-w-3xl w-full flex flex-col items-center gap-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight font-heading text-gradient-emerald">
            FULL CARE
          </h1>

          <p className="text-xl sm:text-3xl font-bold text-slate-100">
            {content.subtitle}
          </p>

          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-1" />

          <p className="text-sm sm:text-lg md:text-xl font-extrabold text-white tracking-wide font-sans">
            {content.highlightText}
          </p>

          {content.quote && (
            <p className="text-xs sm:text-sm text-slate-300 italic max-w-xl">
              "{content.quote}"
            </p>
          )}
        </div>

        {/* ProMedia Subtle Branding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 text-slate-400 text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <img src="/assets/promedia-logo.png" alt="ProMedia" className="h-5 w-auto object-contain" />
            <span className="font-semibold text-slate-300">
              {content.secondaryText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
