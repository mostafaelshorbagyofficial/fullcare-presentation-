import React from 'react';
import { usePresentation } from '../context/PresentationContext';
import { SECTIONS } from '../data/slides';
import { IntroSlide } from './slides/IntroSlide';
import { StatementSlide } from './slides/StatementSlide';
import { SplitContentSlide } from './slides/SplitContentSlide';
import { SpecialtiesSlide } from './slides/SpecialtiesSlide';
import { EcosystemSlide } from './slides/EcosystemSlide';
import { TimelineSlide } from './slides/TimelineSlide';
import { GeographicSlide } from './slides/GeographicSlide';
import { AudienceSplitSlide } from './slides/AudienceSplitSlide';
import { JourneySlide } from './slides/JourneySlide';
import { ContentPillarsSlide } from './slides/ContentPillarsSlide';
import { CampaignSlide } from './slides/CampaignSlide';
import { FounderSlide } from './slides/FounderSlide';
import { StrategySlide } from './slides/StrategySlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { MetricsSlide } from './slides/MetricsSlide';
import { ClosingSlide } from './slides/ClosingSlide';
import { SlideDefinition } from '../types/presentation';
import { Sparkles } from 'lucide-react';

export const SlideRenderer: React.FC = () => {
  const { slides, language } = usePresentation();
  const isAr = language === 'ar';

  const renderSlideContent = (slide: SlideDefinition) => {
    switch (slide.layout) {
      case 'intro':
        return <IntroSlide slide={slide} isAr={isAr} />;
      case 'statement':
        return <StatementSlide slide={slide} isAr={isAr} />;
      case 'split-content':
        return <SplitContentSlide slide={slide} isAr={isAr} />;
      case 'specialties':
        return <SpecialtiesSlide slide={slide} isAr={isAr} />;
      case 'ecosystem':
        return <EcosystemSlide slide={slide} isAr={isAr} />;
      case 'timeline':
        return <TimelineSlide slide={slide} isAr={isAr} />;
      case 'geographic':
        return <GeographicSlide slide={slide} isAr={isAr} />;
      case 'audience-split':
        return <AudienceSplitSlide slide={slide} isAr={isAr} />;
      case 'journey':
        return <JourneySlide slide={slide} isAr={isAr} />;
      case 'content-pillars':
        return <ContentPillarsSlide slide={slide} isAr={isAr} />;
      case 'campaign':
        return <CampaignSlide slide={slide} isAr={isAr} />;
      case 'founder':
        return <FounderSlide slide={slide} isAr={isAr} />;
      case 'strategy':
        return <StrategySlide slide={slide} isAr={isAr} />;
      case 'roadmap':
        return <RoadmapSlide slide={slide} isAr={isAr} />;
      case 'metrics':
        return <MetricsSlide slide={slide} isAr={isAr} />;
      case 'closing':
        return <ClosingSlide slide={slide} isAr={isAr} />;
      default:
        return <StatementSlide slide={slide} isAr={isAr} />;
    }
  };

  return (
    <div className="relative w-full flex flex-col gap-12 sm:gap-20 md:gap-24 py-8 sm:py-16">
      {slides.map((slide, index) => {
        // Check if this slide is the beginning of a strategic section
        const isSectionStart = SECTIONS.find(s => s.slideRange[0] === slide.id);
        const sectionMeta = isSectionStart || null;

        return (
          <React.Fragment key={`slide-container-${slide.id}`}>
            {/* Strategic Chapter Divider if section starts */}
            {sectionMeta && (
              <div
                id={`section-${sectionMeta.key}`}
                className="presentation-section w-full max-w-6xl mx-auto px-4 sm:px-8 pt-6 sm:pt-10 flex items-center justify-between border-t border-pharma-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-pharma-primary shadow-[0_0_8px_rgba(73,182,238,0.8)]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-pharma-light font-mono">
                    {isAr ? sectionMeta.ar.label : sectionMeta.en.label}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-pharma-deep/80 border border-pharma-primary/20 text-[11px] font-mono text-pharma-secondary">
                  {isAr ? sectionMeta.ar.tag : sectionMeta.en.tag}
                </div>
              </div>
            )}

            {/* Slide Component Section */}
            <section
              id={`slide-${slide.id}`}
              className="presentation-section relative w-full min-h-[75vh] flex flex-col justify-center items-center px-3 sm:px-6 md:px-10 py-6 sm:py-10"
            >
              {/* Subtle Section Number Watermark */}
              <div className="absolute top-4 right-6 sm:right-12 font-mono text-4xl sm:text-6xl font-black text-pharma-primary/5 pointer-events-none select-none">
                {String(slide.id).padStart(2, '0')}
              </div>

              {/* Slide Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto">
                {renderSlideContent(slide)}
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </div>
  );
};
