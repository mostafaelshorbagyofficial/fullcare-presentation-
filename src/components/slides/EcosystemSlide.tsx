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
      case 0: return <Pill className="w-6 h-6 text-emerald-400" />;
      case 1: return <Leaf className="w-6 h-6 text-teal-400" />;
      case 2: return <Sparkle className="w-6 h-6 text-cyan-400" />;
      case 3: return <ShieldPlus className="w-6 h-6 text-indigo-400" />;
      default: return <Pill className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium">
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
                className="glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] group shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getEcosystemIcon(idx)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-cyan-500/20 uppercase">
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
                        <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{isAr ? 'معايير علاجية فائقة' : 'Clinical Grade'}</span>
                  <span className="text-cyan-400 font-bold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-emerald-950/80 border border-cyan-500/30 text-center max-w-2xl mx-auto shadow-xl">
            <span className="text-sm sm:text-lg font-extrabold text-white tracking-widest uppercase">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
