import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { MapPin, Compass } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const GeographicSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const phaseColors = [
    { border: 'border-pharma-primary/40', bg: 'bg-pharma-primary/10', text: 'text-pharma-primary', badge: 'bg-pharma-primary/20 text-pharma-light' },
    { border: 'border-pharma-secondary/40', bg: 'bg-pharma-secondary/10', text: 'text-pharma-secondary', badge: 'bg-pharma-secondary/20 text-pharma-light' },
    { border: 'border-pharma-light/40', bg: 'bg-pharma-support/20', text: 'text-pharma-light', badge: 'bg-pharma-support/30 text-white' },
  ];

  return (
    <div className="w-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharma-primary/15 border border-pharma-primary/30 text-pharma-light text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-pharma-primary" />
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

        {/* 3 Phases Grid */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.cards.map((card, idx) => {
              const theme = phaseColors[idx] || phaseColors[0];
              return (
                <div
                  key={idx}
                  className={`glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-pharma-primary/15 hover:${theme.border} transition-all duration-300 hover:scale-[1.02] shadow-xl group`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full ${theme.badge} text-xs font-bold font-mono border border-pharma-primary/20`}>
                        {card.badge}
                      </span>
                      <MapPin className={`w-5 h-5 ${theme.text}`} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {card.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-300 mt-1">
                        {card.description}
                      </p>
                    </div>

                    {card.tags && card.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {card.tags.map((governorate, gIdx) => (
                          <span
                            key={gIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-pharma-deep/90 text-slate-200 border border-pharma-primary/20 font-medium flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-pharma-primary" />
                            <span>{governorate}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{isAr ? 'حضور ميداني مؤسسي' : 'Direct Field Coverage'}</span>
                    <span className={theme.text}>0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Strategic Note */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/30 text-center max-w-3xl mx-auto shadow-lg">
            <span className="text-xs sm:text-sm md:text-base font-bold text-gradient-pharma">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
