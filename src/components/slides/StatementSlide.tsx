import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Quote, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const StatementSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const isLogoSlide = slide.visual?.type === 'logo-comparison';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl mx-auto py-2 px-2 sm:px-6 text-center">
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full animate-fade-in-up">
        {content.tagline && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.tagline}</span>
          </div>
        )}

        <div className="space-y-3 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gradient-emerald">
              {content.subtitle}
            </p>
          )}

          {content.lead && (
            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
              {content.lead}
            </p>
          )}
        </div>

        {/* Highlight Banner */}
        {content.highlightText && (
          <div className="my-1 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-teal-950/80 border border-emerald-500/40 shadow-xl max-w-3xl">
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
            <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 border border-white/10 hover:border-emerald-500/40 transition-all">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {isAr ? 'المقترح البصري الأول' : 'PROPOSED DIRECTION 01'}
              </span>
              <div className="w-full aspect-[4/3] rounded-xl bg-white p-3 flex items-center justify-center">
                <img src="/assets/fullcare-logo-1.jpg" alt="Logo 1" className="max-h-full max-w-full object-contain" />
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3 border border-white/10 hover:border-cyan-500/40 transition-all">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
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
                className="glass-card p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-white/10 hover:border-emerald-500/40 transition-all hover:scale-[1.02]"
              >
                {card.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    {card.badge}
                  </span>
                )}
                <h4 className="text-sm sm:text-base font-bold text-white">{card.title}</h4>
                {card.subtitle && (
                  <span className="text-xs text-emerald-400 font-medium">{card.subtitle}</span>
                )}
                {card.description && (
                  <p className="text-xs text-slate-300 leading-snug">{card.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.quote && (
          <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm italic mt-2">
            <Quote className="w-4 h-4 text-emerald-400 rotate-180 flex-shrink-0" />
            <span>{content.quote}</span>
            <Quote className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
