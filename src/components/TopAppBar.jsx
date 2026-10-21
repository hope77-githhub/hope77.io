import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TopAppBar({ onOpenTerminal, activeSection = "장자훈's Log" }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="top-app-bar">
      <div className="top-app-bar-inner">
        <div className="product-title">
          <i className="fas fa-terminal" style={{ fontSize: '16px', color: 'var(--color-primary)' }}></i>
          <span>Jang Ja Hun Portfolio</span>
          <span className="product-title-badge">Log Stream &amp; Observability</span>
        </div>
        <div className="header-right">
          {/* Pit Wall & Telemetry Overlay Reopen Button */}
          <button
            type="button"
            className="btn-log-console-toggle"
            id="btn-header-log-console"
            title="View Pit Wall & Live Telemetry"
            onClick={onOpenTerminal}
          >
            <span className="live-dot"></span>
            <span>Pit Wall Live</span>
          </button>

          <span className="active-module-pill" id="header-active-pill">
            SECTION: {activeSection}
          </span>

          {/* Multilingual Translation Toggle Button */}
          <button
            type="button"
            className="lang-toggle-btn"
            id="lang-toggle-btn"
            aria-label="Toggle Language"
            onClick={toggleLang}
          >
            <span className={`lang-opt ${lang === 'ko' ? 'active' : ''}`} id="lang-ko">
              KO
            </span>
            <span className={`lang-opt ${lang === 'en' ? 'active' : ''}`} id="lang-en">
              EN
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
