import React from 'react';
import { SlideDefinition } from '../../types/presentation';
import { Film, HeartHandshake } from 'lucide-react';

interface SlideProps {
  slide: SlideDefinition;
  isAr: boolean;
}

export const CampaignSlide: React.FC<SlideProps> = ({ slide, isAr }) => {
  const content = isAr ? slide.ar : slide.en;

  return (
    <div className="w-full flex flex-col justify-center max-w-6xl mx-auto py-2 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Storytelling & Hero Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-4 animate-fade-in-up">
          {content.tagline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharma-primary/15 border border-pharma-primary/30 text-pharma-light text-xs font-semibold tracking-wider uppercase w-fit">
              <Film className="w-3.5 h-3.5 text-pharma-primary" />
              <span>{content.tagline}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            {content.title}
          </h2>

          {content.lead && (
            <p className="text-sm sm:text-base text-pharma-light font-medium leading-relaxed">
              {content.lead}
            </p>
          )}

          {slide.visual?.src && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-pharma-primary/20 shadow-xl mt-1">
              <img
                src={slide.visual.src}
                alt="Campaign Hero"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pharma-deep/80 via-transparent to-transparent" />
              {(slide.visual.captionAr || slide.visual.captionEn) && (
                <div className="absolute bottom-2.5 left-3 right-3 p-2 rounded-lg bg-pharma-deep/80 backdrop-blur-md text-[11px] text-pharma-light">
                  {isAr ? slide.visual.captionAr : slide.visual.captionEn}
                </div>
              )}
            </div>
          )}

          {content.highlightText && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pharma-deep via-pharma-support/50 to-pharma-deep border border-pharma-primary/30 text-white font-bold text-sm sm:text-base shadow-md">
              {content.highlightText}
            </div>
          )}
        </div>

        {/* Right Column: Real Situations Stack */}
        <div className="lg:col-span-7 flex flex-col gap-3 animate-scale-in">
          <span className="text-xs font-bold uppercase tracking-wider text-pharma-light mb-1 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-pharma-primary" />
            <span>{isAr ? 'مواقف إنسانية حية من قلب البيوت المصرية' : 'Real Emotional Scenes Across Egyptian Homes'}</span>
          </span>

          {content.cards && (
            <div className="space-y-2.5">
              {content.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 sm:p-4 rounded-2xl flex items-start gap-3.5 border border-pharma-primary/15 hover:border-pharma-primary/50 transition-all hover:scale-[1.01]"
                >
                  <div className="w-8 h-8 rounded-xl bg-pharma-primary/20 text-pharma-light flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-pharma-primary/30">
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
            <div className="p-3 rounded-xl bg-pharma-deep/90 border border-pharma-primary/20 text-center text-xs font-semibold text-pharma-light mt-1">
              {content.secondaryText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
