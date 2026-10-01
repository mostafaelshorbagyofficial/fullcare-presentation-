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
      case 0: return <Heart className="w-6 h-6 text-pharma-light" />;
      case 1: return <Activity className="w-6 h-6 text-pharma-primary" />;
      case 2: return <Bone className="w-6 h-6 text-pharma-secondary" />;
      case 3: return <Salad className="w-6 h-6 text-pharma-light" />;
      default: return <Stethoscope className="w-6 h-6 text-pharma-primary" />;
    }
  };

  return (
    <div className="w-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharma-primary/15 border border-pharma-primary/30 text-pharma-light text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-pharma-primary" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base md:text-lg text-pharma-light font-medium max-w-2xl">
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
                className="glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-pharma-primary/15 hover:border-pharma-primary/60 transition-all duration-300 hover:scale-[1.03] group shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/20 group-hover:scale-110 transition-transform">
                      {getSpecialtyIcon(idx)}
                    </div>
                    {card.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pharma-primary/20 text-pharma-light border border-pharma-primary/30">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide font-heading">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-xs font-semibold text-pharma-primary mt-0.5">{card.subtitle}</p>
                    )}
                  </div>

                  {card.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-full bg-pharma-support/50 group-hover:bg-pharma-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/30 text-center max-w-3xl mx-auto shadow-lg">
            <span className="text-xs sm:text-base font-bold text-gradient-pharma">
              {content.highlightText}
            </span>
            {content.keyTakeaway && (
              <p className="text-xs text-pharma-light mt-1 font-medium">{content.keyTakeaway}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
