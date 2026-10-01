import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const TimelineSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
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
            <p className="text-sm sm:text-base md:text-lg text-pharma-light font-medium max-w-2xl">
              {content.lead}
            </p>
          )}
        </div>

        {/* Steps Grid / Timeline */}
        {content.steps && content.steps.length > 0 && (
          <div className={`grid gap-3 sm:gap-4 mt-2 ${
            content.steps.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
            content.steps.length === 5 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5' :
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
          }`}>
            {content.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative glass-card p-4 sm:p-5 rounded-3xl flex flex-col justify-between gap-3 border border-pharma-primary/15 hover:border-pharma-primary/60 transition-all hover:scale-[1.02] group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-pharma-primary/20 text-pharma-light border border-pharma-primary/40 flex items-center justify-center text-xs font-bold font-mono">
                    {step.step || `0${idx + 1}`}
                  </span>
                  <span className="text-[10px] text-pharma-secondary font-mono tracking-wider">PHASE {idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-pharma-light transition-colors">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pharma-support to-pharma-primary w-full opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-pharma-deep/90 border border-pharma-primary/30 text-center max-w-2xl mx-auto shadow-xl">
            <span className="text-xs sm:text-sm md:text-base font-bold text-gradient-pharma">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
