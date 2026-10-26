import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LogStreamOverlay from './components/LogStreamOverlay';
import TopAppBar from './components/TopAppBar';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import ProjectsPage from './components/ProjectsPage';
import MilestonesSection from './components/MilestonesSection';
import PaddockLounge from './components/PaddockLounge';
import AppFooter from './components/AppFooter';
import './styles/style.css';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // URL Hash-based router: 'overview' | 'projects'
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#/projects')) {
      return 'projects';
    }
    return 'overview';
  });

  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('id=')) {
      const parts = window.location.hash.split('?');
      if (parts[1]) {
        const params = new URLSearchParams(parts[1]);
        return params.get('id') || 'log-entry-com-study';
      }
    }
    return 'log-entry-unknown';
  });

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects')) {
        setCurrentPage('projects');
        const parts = hash.split('?');
        if (parts[1]) {
          const params = new URLSearchParams(parts[1]);
          const id = params.get('id');
          if (id) setSelectedProjectId(id);
        }
      } else {
        setCurrentPage('overview');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handlers
  const navigateTo = (page, projectId) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProjectId(projectId);
    }
    if (page === 'projects') {
      const targetId = projectId || selectedProjectId;
      window.location.hash = `#/projects?id=${targetId}`;
    } else {
      window.location.hash = '#/overview';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToHistory = () => {
    const el = document.getElementById('history');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LanguageProvider>
      {/* 0. Telemetry & Pit Wall Overlay (Accessible via Top Bar or Hero trigger) */}
      <LogStreamOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* 1. Top App Bar (Sticky Header with Page Navigation Tabs) */}
      <TopAppBar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* 2. Main Content Views */}
      <main className="app-container">
        {currentPage === 'overview' ? (
          <div className="overview-page-flow">
            {/* A. Hero: Concise Bio, Compressed Tech Stack & Philosophy */}
            <HeroSection
              onOpenTerminal={() => setIsTerminalOpen(true)}
              onNavigateToProjects={() => navigateTo('projects')}
              onNavigateToHistory={scrollToHistory}
            />

            <div className="band-soft">
              <div className="band-inner">
                {/* B. Career & Research History (Career: Unknown + F1 Telemetry, Research: LoL SNA) */}
                <HistorySection
                  onNavigateToProject={(projectId) => navigateTo('projects', projectId)}
                />

                {/* C. Milestones Timeline */}
                <MilestonesSection />
              </div>
            </div>

            {/* D. 2D Interactive Paddock Lounge Character Game at Bottom */}
            <PaddockLounge />

            {/* E. Footer */}
            <AppFooter />
          </div>
        ) : (
          <div className="projects-page-flow">
            {/* Projects Detailed Case Study View */}
            <ProjectsPage
              selectedProjectId={selectedProjectId}
              onSelectProject={(id) => {
                setSelectedProjectId(id);
                window.location.hash = `#/projects?id=${id}`;
              }}
              onNavigateToOverview={() => navigateTo('overview')}
            />

            {/* Footer */}
            <AppFooter />
          </div>
        )}
      </main>
    </LanguageProvider>
  );
}
