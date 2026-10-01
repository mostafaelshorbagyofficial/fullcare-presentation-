import React, { useEffect } from 'react';
import { PresentationProvider, usePresentation } from './context/PresentationContext';
import { OpeningScreen } from './components/OpeningScreen';
import { TopNavigation } from './components/TopNavigation';
import { NavigationControls } from './components/NavigationControls';
import { SlideRenderer } from './components/SlideRenderer';
import { BrandLogosModal } from './components/BrandLogosModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

const PresentationShell: React.FC = () => {
  const { currentSlide } = usePresentation();

  // Fix dynamic viewport height on mobile browsers (Safari iOS / Android Chrome)
  useEffect(() => {
    const updateAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    updateAppHeight();
    window.addEventListener('resize', updateAppHeight);
    window.addEventListener('orientationchange', updateAppHeight);
    return () => {
      window.removeEventListener('resize', updateAppHeight);
      window.removeEventListener('orientationchange', updateAppHeight);
    };
  }, []);

  return (
    <div className="relative w-full h-[100dvh] bg-navy-950 text-slate-100 flex flex-col justify-between overflow-hidden">
      {/* Background Subtle Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {currentSlide === 0 ? (
        <OpeningScreen />
      ) : (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <TopNavigation />
          <SlideRenderer />
          <NavigationControls />
        </div>
      )}

      {/* Global Modals */}
      <BrandLogosModal />
      <KeyboardShortcutsModal />
    </div>
  );
};

export function App() {
  return (
    <PresentationProvider>
      <PresentationShell />
    </PresentationProvider>
  );
}

export default App;
