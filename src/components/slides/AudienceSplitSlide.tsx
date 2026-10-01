import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Stethoscope, Users, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const AudienceSplitSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

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

        {/* 2 Big Audience Columns: B2B & B2C */}
        {content.cards && content.cards.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {/* B2B Column */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-5 border border-pharma-primary/30 bg-gradient-to-b from-pharma-deep/60 via-pharma-support/20 to-transparent hover:border-pharma-primary/60 transition-all shadow-2xl group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-pharma-primary/20 border border-pharma-primary/40 text-pharma-light group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pharma-primary/20 text-pharma-light text-xs font-extrabold font-mono tracking-wider border border-pharma-primary/30">
                    {content.cards[0].badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {content.cards[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-pharma-primary mt-1">
                    {content.cards[0].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {content.cards[0].description}
                </p>

                {content.cards[0].tags && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-pharma-light uppercase tracking-wider block">
                      {isAr ? 'ما نبنيه معًا:' : 'What We Build:'}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {content.cards[0].tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-pharma-primary flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* B2C Column */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-5 border border-pharma-secondary/30 bg-gradient-to-b from-pharma-deep/60 via-pharma-support/20 to-transparent hover:border-pharma-secondary/60 transition-all shadow-2xl group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-pharma-secondary/20 border border-pharma-secondary/40 text-pharma-light group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pharma-secondary/20 text-pharma-light text-xs font-extrabold font-mono tracking-wider border border-pharma-secondary/30">
                    {content.cards[1].badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {content.cards[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-pharma-secondary mt-1">
                    {content.cards[1].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {content.cards[1].description}
                </p>

                {content.cards[1].tags && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-pharma-light uppercase tracking-wider block">
                      {isAr ? 'ما نبنيه معًا:' : 'What We Build:'}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {content.cards[1].tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-pharma-secondary flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Highlight */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/20 text-center max-w-2xl mx-auto shadow-lg">
            <span className="text-xs sm:text-base font-bold text-gradient-pharma">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
