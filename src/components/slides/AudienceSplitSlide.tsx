import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Stethoscope, Users, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const AudienceSplitSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

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

        {/* 2 Big Audience Columns: B2B & B2C */}
        {content.cards && content.cards.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {/* B2B Column */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-5 border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-transparent hover:border-cyan-400/60 transition-all shadow-2xl group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-extrabold font-mono tracking-wider border border-cyan-500/30">
                    {content.cards[0].badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {content.cards[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">
                    {content.cards[0].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {content.cards[0].description}
                </p>

                {content.cards[0].tags && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                      {isAr ? 'ما نبنيه معًا:' : 'What We Build:'}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {content.cards[0].tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* B2C Column */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-5 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-slate-900/60 to-transparent hover:border-emerald-400/60 transition-all shadow-2xl group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold font-mono tracking-wider border border-emerald-500/30">
                    {content.cards[1].badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {content.cards[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    {content.cards[1].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {content.cards[1].description}
                </p>

                {content.cards[1].tags && (
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                      {isAr ? 'ما نبنيه معًا:' : 'What We Build:'}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {content.cards[1].tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-center max-w-2xl mx-auto shadow-lg">
            <span className="text-xs sm:text-base font-bold text-gradient-emerald">
              {content.highlightText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
