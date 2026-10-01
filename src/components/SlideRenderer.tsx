import React, { useRef, useEffect } from 'react';
import { usePresentation } from '../context/PresentationContext';
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

export const SlideRenderer: React.FC = () => {
  const { currentSlideData, currentSlide, language, nextSlide, prevSlide } = usePresentation();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  if (!currentSlideData) return null;

  const isAr = language === 'ar';

  // Touch Swipe Handling for Mobile & Tablets (iOS / Android)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only handle horizontal swipes if horizontal movement dominates vertical movement
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swiped Left
        if (isAr) {
          prevSlide();
        } else {
          nextSlide();
        }
      } else {
        // Swiped Right
        if (isAr) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const renderLayout = () => {
    switch (currentSlideData.layout) {
      case 'intro':
        return <IntroSlide slide={currentSlideData} isAr={isAr} />;
      case 'statement':
        return <StatementSlide slide={currentSlideData} isAr={isAr} />;
      case 'split-content':
        return <SplitContentSlide slide={currentSlideData} isAr={isAr} />;
      case 'specialties':
        return <SpecialtiesSlide slide={currentSlideData} isAr={isAr} />;
      case 'ecosystem':
        return <EcosystemSlide slide={currentSlideData} isAr={isAr} />;
      case 'timeline':
        return <TimelineSlide slide={currentSlideData} isAr={isAr} />;
      case 'geographic':
        return <GeographicSlide slide={currentSlideData} isAr={isAr} />;
      case 'audience-split':
        return <AudienceSplitSlide slide={currentSlideData} isAr={isAr} />;
      case 'journey':
        return <JourneySlide slide={currentSlideData} isAr={isAr} />;
      case 'content-pillars':
        return <ContentPillarsSlide slide={currentSlideData} isAr={isAr} />;
      case 'campaign':
        return <CampaignSlide slide={currentSlideData} isAr={isAr} />;
      case 'founder':
        return <FounderSlide slide={currentSlideData} isAr={isAr} />;
      case 'strategy':
        return <StrategySlide slide={currentSlideData} isAr={isAr} />;
      case 'roadmap':
        return <RoadmapSlide slide={currentSlideData} isAr={isAr} />;
      case 'metrics':
        return <MetricsSlide slide={currentSlideData} isAr={isAr} />;
      case 'closing':
        return <ClosingSlide slide={currentSlideData} isAr={isAr} />;
      default:
        return <StatementSlide slide={currentSlideData} isAr={isAr} />;
    }
  };

  return (
    <main
      key={`slide-${currentSlide}-${language}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative flex-1 w-full h-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center px-3 sm:px-6 md:px-10 py-4 select-none animate-fade-in"
    >
      {/* Dynamic Background Glow according to accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto">
        {renderLayout()}
      </div>
    </main>
  );
};
