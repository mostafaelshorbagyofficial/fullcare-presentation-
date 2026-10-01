import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Heart, Activity, Bone, Salad, Stethoscope } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const SpecialtiesSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const getSpecialtyIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Heart className="w-6 h-6 text-rose-400" />;
      case 1: return <Activity className="w-6 h-6 text-cyan-400" />;
      case 2: return <Bone className="w-6 h-6 text-amber-400" />;
      case 3: return <Salad className="w-6 h-6 text-emerald-400" />;
      default: return <Stethoscope className="w-6 h-6 text-emerald-400" />;
    }
  };

  const getSpecialtyGradient = (idx: number) => {
    switch (idx) {
      case 0: return 'from-rose-500/10 via-slate-900/60 to-transparent hover:border-rose-500/40';
      case 1: return 'from-cyan-500/10 via-slate-900/60 to-transparent hover:border-cyan-500/40';
      case 2: return 'from-amber-500/10 via-slate-900/60 to-transparent hover:border-amber-500/40';
      case 3: return 'from-emerald-500/10 via-slate-900/60 to-transparent hover:border-emerald-500/40';
      default: return 'from-emerald-500/10 via-slate-900/60 to-transparent hover:border-emerald-500/40';
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-2xl">
              {content.lead}
            </p>
          )}
        </div>

        {/* 4 Specialties Grid */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className={`glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-white/10 bg-gradient-to-b ${getSpecialtyGradient(idx)} transition-all duration-300 hover:scale-[1.03] group shadow-xl`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getSpecialtyIcon(idx)}
                    </div>
                    {card.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide font-heading">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">{card.subtitle}</p>
                    )}
                  </div>

                  {card.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-center max-w-3xl mx-auto shadow-lg">
            <span className="text-xs sm:text-base font-bold text-gradient-emerald">
              {content.highlightText}
            </span>
            {content.keyTakeaway && (
              <p className="text-xs text-slate-400 mt-1 font-medium">{content.keyTakeaway}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
