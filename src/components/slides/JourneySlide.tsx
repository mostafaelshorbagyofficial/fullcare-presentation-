import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, HelpCircle, Search, ShieldCheck, HeartHandshake, Pill, AlertCircle } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const JourneySlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const getJourneyIcon = (idx: number) => {
    switch (idx) {
      case 0: return <AlertCircle className="w-5 h-5 text-rose-400" />;
      case 1: return <HelpCircle className="w-5 h-5 text-amber-400" />;
      case 2: return <Search className="w-5 h-5 text-cyan-400" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 4: return <Pill className="w-5 h-5 text-teal-400" />;
      case 5: return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

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
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium">
              {content.lead}
            </p>
          )}
        </div>

        {/* 6 Journey Steps Grid */}
        {content.steps && content.steps.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-2">
            {content.steps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-3xl flex flex-col justify-between gap-3 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:scale-[1.03] group shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getJourneyIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h4>
                  {step.description && (
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  )}
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-teal-950/80 border border-emerald-500/30 text-center max-w-3xl mx-auto shadow-xl">
            <span className="text-xs sm:text-base font-bold text-gradient-emerald">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
