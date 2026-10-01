import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, ArrowDown, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const RoadmapSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-2xl">
              {content.lead}
            </p>
          )}
        </div>

        {/* Roadmap Steps */}
        {content.steps && content.steps.length > 0 && (
          <div className={`grid gap-4 mt-2 ${
            content.steps.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
            content.steps.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
          }`}>
            {content.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative glass-card p-5 sm:p-6 rounded-3xl flex flex-col justify-between gap-4 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:scale-[1.02] group shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono border border-emerald-500/30">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {step.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 w-full opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Highlight */}
        {content.highlightText && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-cyan-950/80 border border-emerald-500/30 text-center max-w-3xl mx-auto shadow-xl">
            <span className="text-xs sm:text-base font-extrabold text-gradient-emerald tracking-wide">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
