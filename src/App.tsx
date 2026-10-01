import React, { useEffect } from 'react';
import { PresentationProvider } from './context/PresentationContext';
import { OpeningScreen } from './components/OpeningScreen';
import { TopNavigation } from './components/TopNavigation';
import { NavigationControls } from './components/NavigationControls';
import { SlideRenderer } from './components/SlideRenderer';
import { BrandLogosModal } from './components/BrandLogosModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

const ContinuousPresentation: React.FC = () => {
  // Fix dynamic viewport height on mobile browsers
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
    <div className="relative w-full min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between">
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Sticky Top Navigation */}
      <TopNavigation />

      {/* Main Continuous Presentation Stream */}
      <main className="relative z-10 w-full flex flex-col">
        {/* 01. Opening Screen */}
        <OpeningScreen />

        {/* 02. Continuous All 38 Strategic Slides */}
        <SlideRenderer />
      </main>

      {/* Floating Controls & Modals */}
      <NavigationControls />
      <BrandLogosModal />
      <KeyboardShortcutsModal />
    </div>
  );
};

export function App() {
  return (
    <PresentationProvider>
      <ContinuousPresentation />
    </PresentationProvider>
  );
}

export default App;
