import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const SplitContentSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Heading, Lead, Highlight & Story */}
        <div className="lg:col-span-6 flex flex-col gap-4 animate-fade-in-up">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharma-primary/15 border border-pharma-primary/30 text-pharma-light text-xs font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 text-pharma-primary" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-lg sm:text-2xl font-bold text-gradient-pharma">
              {content.subtitle}
            </p>
          )}

          {content.lead && (
            <p className="text-base sm:text-lg font-medium text-pharma-light leading-relaxed">
              {content.lead}
            </p>
          )}

          {content.paragraphs && (
            <div className="space-y-2 text-slate-300 text-sm sm:text-base">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {content.highlightText && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pharma-deep via-pharma-support/50 to-pharma-deep border border-pharma-primary/30 text-white font-bold text-sm sm:text-base shadow-lg">
              {content.highlightText}
            </div>
          )}
        </div>

        {/* Right Column: Cards or Visual */}
        <div className="lg:col-span-6 flex flex-col gap-3 animate-scale-in">
          {slide.visual?.src && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-pharma-primary/20 shadow-xl mb-2">
              <img
                src={slide.visual.src}
                alt={slide.visual.alt || 'Visual'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pharma-deep/80 via-transparent to-transparent" />
              {(slide.visual.captionAr || slide.visual.captionEn) && (
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-pharma-deep/80 backdrop-blur-md text-xs text-pharma-light">
                  {isAr ? slide.visual.captionAr : slide.visual.captionEn}
                </div>
              )}
            </div>
          )}

          {content.cards && content.cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl flex flex-col gap-1.5 border border-pharma-primary/15 hover:border-pharma-primary/50 transition-all hover:scale-[1.01]"
                >
                  {card.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-pharma-primary/20 text-pharma-light text-[10px] font-bold w-fit">
                      {card.badge}
                    </span>
                  )}
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-pharma-primary flex-shrink-0" />
                    <span>{card.title}</span>
                  </h4>
                  {card.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">{card.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
