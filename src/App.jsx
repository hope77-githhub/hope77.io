import React, { useState, useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LogStreamOverlay from './components/LogStreamOverlay';
import TopAppBar from './components/TopAppBar';
import HeroSection from './components/HeroSection';
import ProjectLogsFeed from './components/ProjectLogsFeed';
import MilestonesSection from './components/MilestonesSection';
import PaddockLounge from './components/PaddockLounge';
import AppFooter from './components/AppFooter';
import './styles/style.css';

export default function App() {
  // Default to false so user is not surprised by initial full-screen popup
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("01. LoL SNA (arXiv)");
  const projectLogsRef = useRef(null);

  return (
    <LanguageProvider>
      {/* 0. Telemetry & Pit Wall Overlay (Accessible via top bar button or hero trigger, not forced on load) */}
      <LogStreamOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* 1. Top App Bar (Sticky Header — Clean Light Navigation) */}
      <TopAppBar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Container */}
      <main className="app-container">
        {/* 2. Hero Section (Unified White Canvas Landing) */}
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* 3. Project History & Vertical Tab Index (Full Content Display, No Expand Button) */}
        <ProjectLogsFeed
          ref={projectLogsRef}
          onSelectSection={setActiveSection}
        />

        {/* 4. Milestones & Timeline */}
        <MilestonesSection />

        {/* 5. Real-time 2D Mini Game Character Paddock Lounge & Chat (Moved to Bottom Feature) */}
        <PaddockLounge />

        {/* 6. Footer */}
        <AppFooter />
      </main>
    </LanguageProvider>
  );
}
