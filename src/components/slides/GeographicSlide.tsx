import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const GeographicSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const phaseColors = [
    { border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-400', badge: 'bg-emerald-500/20' },
    { border: 'border-cyan-500/40', bg: 'bg-cyan-500/10', text: 'text-cyan-400', badge: 'bg-cyan-500/20' },
    { border: 'border-amber-500/40', bg: 'bg-amber-500/10', text: 'text-amber-400', badge: 'bg-amber-500/20' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
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

        {/* 3 Phases Grid */}
        {content.cards && content.cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.cards.map((card, idx) => {
              const theme = phaseColors[idx] || phaseColors[0];
              return (
                <div
                  key={idx}
                  className={`glass-card p-5 rounded-3xl flex flex-col justify-between gap-4 border border-white/10 hover:${theme.border} transition-all duration-300 hover:scale-[1.02] shadow-xl group`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full ${theme.badge} ${theme.text} text-xs font-bold font-mono border border-white/10`}>
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
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/80 text-slate-200 border border-white/10 font-medium flex items-center gap-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 text-center max-w-3xl mx-auto shadow-lg">
            <span className="text-xs sm:text-sm md:text-base font-bold text-gradient-cyan">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
