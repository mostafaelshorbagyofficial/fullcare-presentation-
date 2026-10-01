import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, BarChart3, TrendingUp, Users2, DollarSign } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const MetricsSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const getMetricIcon = (idx: number) => {
    switch (idx) {
      case 0: return <TrendingUp className="w-6 h-6 text-pharma-primary" />;
      case 1: return <BarChart3 className="w-6 h-6 text-pharma-secondary" />;
      case 2: return <Users2 className="w-6 h-6 text-pharma-light" />;
      case 3: return <DollarSign className="w-6 h-6 text-pharma-primary" />;
      default: return <Sparkles className="w-6 h-6 text-pharma-primary" />;
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

        {/* 4 Metrics Cards */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-pharma-primary/15 hover:border-pharma-primary/60 transition-all duration-300 hover:scale-[1.02] shadow-xl group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/20 group-hover:scale-110 transition-transform">
                      {getMetricIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-pharma-light px-2 py-0.5 rounded-full bg-pharma-primary/20 border border-pharma-primary/30">
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

                  {card.tags && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {card.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-pharma-deep/90 text-pharma-light border border-pharma-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-pharma-primary/40 group-hover:bg-pharma-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
