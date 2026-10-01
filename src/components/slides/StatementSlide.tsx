import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Quote } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const StatementSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;
  const isLogoSlide = slide.visual?.type === 'logo-comparison';

  return (
    <div className="w-full flex flex-col justify-center items-center max-w-5xl mx-auto py-2 px-2 sm:px-6 text-center">
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full animate-fade-in-up">
        {content.tagline && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharma-primary/15 border border-pharma-primary/30 text-pharma-light text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pharma-primary" />
            <span>{content.tagline}</span>
          </div>
        )}

        <div className="space-y-3 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gradient-pharma">
              {content.subtitle}
            </p>
          )}

          {content.lead && (
            <p className="text-base sm:text-xl text-pharma-light font-medium max-w-2xl mx-auto">
              {content.lead}
            </p>
          )}
        </div>

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="my-1 px-6 py-3 rounded-2xl bg-gradient-to-r from-pharma-deep via-pharma-support/50 to-pharma-deep border border-pharma-primary/40 shadow-xl max-w-3xl">
            <p className="text-lg sm:text-2xl font-black text-white tracking-wide">
              {content.highlightText}
            </p>
          </div>
        )}

        {/* Paragraphs */}
        {content.paragraphs && content.paragraphs.length > 0 && (
          <div className="space-y-2 max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg">
            {content.paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">{p}</p>
            ))}
          </div>
        )}

        {/* Logo comparison or visual showcase */}
        {isLogoSlide && (
          <div className="w-full max-w-3xl mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 border border-pharma-primary/20 hover:border-pharma-primary/60 transition-all">
              <span className="text-xs font-bold text-pharma-primary uppercase tracking-wider">
                {isAr ? 'المقترح البصري الأول' : 'PROPOSED DIRECTION 01'}
              </span>
              <div className="w-full aspect-[4/3] rounded-xl bg-white p-3 flex items-center justify-center">
                <img src="/assets/fullcare-logo-1.jpg" alt="Logo 1" className="max-h-full max-w-full object-contain" />
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 border border-pharma-support/30 hover:border-pharma-secondary transition-all">
              <span className="text-xs font-bold text-pharma-secondary uppercase tracking-wider">
                {isAr ? 'المقترح البصري الثاني' : 'PROPOSED DIRECTION 02'}
              </span>
              <div className="w-full aspect-[4/3] rounded-xl bg-white p-3 flex items-center justify-center">
                <img src="/assets/fullcare-logo-2.jpg" alt="Logo 2" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>
        )}

        {/* Feature Cards Grid (if present) */}
        {content.cards && content.cards.length > 0 && (
          <div className={`w-full grid gap-3 sm:gap-4 mt-3 ${
            content.cards.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' :
            content.cards.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
            content.cards.length === 4 ? 'grid-cols-2 sm:grid-cols-4' :
            'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'
          }`}>
            {content.cards.map((card, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-pharma-primary/15 hover:border-pharma-primary/50 transition-all hover:scale-[1.02]"
              >
                {card.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-pharma-primary/20 text-pharma-light text-[10px] font-bold border border-pharma-primary/30">
                    {card.badge}
                  </span>
                )}
                <h4 className="text-sm sm:text-base font-bold text-white">{card.title}</h4>
                {card.subtitle && (
                  <span className="text-xs text-pharma-primary font-medium">{card.subtitle}</span>
                )}
                {card.description && (
                  <p className="text-xs text-slate-300 leading-snug">{card.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.quote && (
          <div className="flex items-center gap-2 text-pharma-light text-xs sm:text-sm italic mt-2">
            <Quote className="w-4 h-4 text-pharma-primary rotate-180 flex-shrink-0" />
            <span>{content.quote}</span>
            <Quote className="w-4 h-4 text-pharma-primary flex-shrink-0" />
          </div>
        )}

        {content.secondaryText && (
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            {content.secondaryText}
          </p>
        )}
      </div>
    </div>
  );
};
