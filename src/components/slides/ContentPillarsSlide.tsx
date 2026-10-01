import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, BookOpen, HelpCircle, AlertTriangle, Heart, Sun, Pill } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const ContentPillarsSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0: return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 1: return <HelpCircle className="w-5 h-5 text-cyan-400" />;
      case 2: return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 3: return <Heart className="w-5 h-5 text-rose-400" />;
      case 4: return <Sun className="w-5 h-5 text-yellow-400" />;
      case 5: return <Pill className="w-5 h-5 text-teal-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
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

        {/* 6 Content Pillars 3x2 Grid */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-3xl flex flex-col justify-between gap-3 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] shadow-xl group"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {getPillarIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">{card.subtitle}</p>
                    )}
                  </div>

                  {card.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
