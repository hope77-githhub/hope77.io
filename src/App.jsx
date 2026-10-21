import React, { useState, useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LogStreamOverlay from './components/LogStreamOverlay';
import TopAppBar from './components/TopAppBar';
import HeroSection from './components/HeroSection';
import QuickNavigation from './components/QuickNavigation';
import ProjectLogsFeed from './components/ProjectLogsFeed';
import MilestonesSection from './components/MilestonesSection';
import AppFooter from './components/AppFooter';
import './styles/style.css';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("장자훈's Log");
  const projectLogsRef = useRef(null);

  const handleSelectModule = (targetSelector, moduleName) => {
    setActiveSection(moduleName);
    if (targetSelector === '#summary') {
      const el = document.getElementById('summary');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    if (projectLogsRef.current) {
      projectLogsRef.current.openAndScrollTo(targetSelector);
    }
  };

  return (
    <LanguageProvider>
      {/* 0. Initial Log Ingestion Telemetry Stream Overlay */}
      <LogStreamOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* 1. Top App Bar (Sticky Header) */}
      <TopAppBar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Container */}
      <main className="app-container">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Quick Navigation & Preview */}
        <QuickNavigation onSelectModule={handleSelectModule} />

        {/* 4. Project Logs Feed (Timeline Registry) */}
        <ProjectLogsFeed ref={projectLogsRef} />

        {/* 5. Milestones & Timeline */}
        <MilestonesSection />

        {/* 6. Footer */}
        <AppFooter />
      </main>
    </LanguageProvider>
  );
}
