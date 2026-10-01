import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Sparkles, Heart, Film, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const CampaignSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Storytelling & Hero Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-4 animate-fade-in-up">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold tracking-wider uppercase w-fit">
              <Film className="w-3.5 h-3.5" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              {content.lead}
            </p>
          )}

          {slide.visual?.src && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-white/10 shadow-xl mt-1">
              <img
                src={slide.visual.src}
                alt="Campaign Hero"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              {(slide.visual.captionAr || slide.visual.captionEn) && (
                <div className="absolute bottom-2.5 left-3 right-3 p-2 rounded-lg bg-navy-950/80 backdrop-blur-md text-[11px] text-slate-300">
                  {isAr ? slide.visual.captionAr : slide.visual.captionEn}
                </div>
              )}
            </div>
          )}

          {content.highlightText && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900/90 border border-emerald-500/30 text-white font-bold text-sm sm:text-base shadow-md">
              {content.highlightText}
            </div>
          )}
        </div>

        {/* Right Column: Real Situations Stack */}
        <div className="lg:col-span-7 flex flex-col gap-3 animate-scale-in">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'مواقف إنسانية حية من قلب البيوت المصرية' : 'Real Emotional Scenes Across Egyptian Homes'}</span>
          </span>

          {content.cards && (
            <div className="space-y-2.5">
              {content.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 sm:p-4 rounded-2xl flex items-start gap-3.5 border border-white/10 hover:border-emerald-500/40 transition-all hover:scale-[1.01]"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">{card.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {content.secondaryText && (
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-center text-xs font-semibold text-emerald-300 mt-1">
              {content.secondaryText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
