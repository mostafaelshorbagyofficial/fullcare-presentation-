import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Quote, ShieldCheck, Flame, Compass } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const FounderSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  const founderImgSrc = slide.visual?.src || '/assets/founder-1.jpg';

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Left Column: Text & DNA Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-4 animate-fade-in-up">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase w-fit">
              <Flame className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-lg sm:text-2xl font-bold text-gradient-gold">
              {content.subtitle}
            </p>
          )}

          {content.lead && (
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              {content.lead}
            </p>
          )}

          {content.paragraphs && (
            <div className="space-y-2 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {/* Cards for Values / DNA */}
          {content.cards && content.cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
              {content.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 rounded-2xl flex flex-col gap-1 border border-white/10 hover:border-amber-500/40 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {card.badge}
                    </span>
                    <span className="text-xs font-bold text-white">{card.title}</span>
                  </div>
                  {card.description && (
                    <p className="text-xs text-slate-300 mt-1 leading-snug">{card.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {content.highlightText && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900/90 to-emerald-950/70 border border-amber-500/40 text-white font-extrabold text-base sm:text-xl shadow-xl mt-1">
              {content.highlightText}
            </div>
          )}

          {content.quote && (
            <p className="text-xs sm:text-sm italic text-amber-300/90 border-l-2 border-amber-400 pl-3">
              "{content.quote}"
            </p>
          )}
        </div>

        {/* Right Column: Founder Portrait (Cinematic & Editorial) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center animate-scale-in">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden glass-card border border-amber-500/20 shadow-2xl group">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10" />
            
            <img
              src={founderImgSrc}
              alt="Founder Portrait"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />

            {/* Editorial Caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-navy-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block mb-0.5">
                {isAr ? 'روح المؤسس والرؤية الاستراتيجية' : 'FOUNDER DNA & VISION'}
              </span>
              <p className="font-semibold text-white">
                {isAr ? slide.visual?.captionAr || 'قيادة تأسيسية صلبة تقود منظومة Full Care' : slide.visual?.captionEn || 'Visionary leadership steering Full Care forward'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
