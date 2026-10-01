import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const IntroSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Text Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 animate-fade-in-up">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-300/90 leading-snug">
              {content.lead}
            </p>
          )}

          {content.paragraphs && content.paragraphs.length > 0 && (
            <div className="space-y-3 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {content.highlightText && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900/60 border border-emerald-500/30 flex items-center gap-3 shadow-lg">
              <HeartPulse className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                {content.highlightText}
              </span>
            </div>
          )}

          {content.quote && (
            <p className="text-xs sm:text-sm italic text-slate-400 border-l-2 border-emerald-400 pl-3">
              "{content.quote}"
            </p>
          )}
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center animate-scale-in">
          {slide.visual?.src && (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl group">
              <img
                src={slide.visual.src}
                alt={slide.visual.alt || 'Healthcare Concept'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
              
              {(slide.visual.captionAr || slide.visual.captionEn) && (
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-navy-950/70 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                  {isAr ? slide.visual.captionAr : slide.visual.captionEn}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
