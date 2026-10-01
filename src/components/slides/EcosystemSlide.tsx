import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Pill, Leaf, Sparkle, ShieldPlus } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const EcosystemSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const getEcosystemIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Pill className="w-6 h-6 text-pharma-primary" />;
      case 1: return <Leaf className="w-6 h-6 text-pharma-secondary" />;
      case 2: return <Sparkle className="w-6 h-6 text-pharma-light" />;
      case 3: return <ShieldPlus className="w-6 h-6 text-pharma-primary" />;
      default: return <Pill className="w-6 h-6 text-pharma-primary" />;
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
            <p className="text-sm sm:text-base md:text-lg text-pharma-light font-medium">
              {content.lead}
            </p>
          )}
        </div>

        {/* 4 Care Worlds */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-pharma-primary/15 hover:border-pharma-primary/60 transition-all duration-300 hover:scale-[1.02] group shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/20 group-hover:scale-110 transition-transform">
                      {getEcosystemIcon(idx)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-pharma-primary/20 text-pharma-light border border-pharma-primary/30 uppercase">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      {card.title}
                    </h3>
                  </div>

                  {card.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}

                  {card.tags && card.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {card.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-pharma-deep/90 text-pharma-light border border-pharma-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{isAr ? 'معايير علاجية فائقة' : 'Clinical Grade'}</span>
                  <span className="text-pharma-primary font-bold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-pharma-deep via-pharma-support/50 to-pharma-deep border border-pharma-primary/30 text-center max-w-2xl mx-auto shadow-xl">
            <span className="text-sm sm:text-lg font-extrabold text-white tracking-widest uppercase">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
