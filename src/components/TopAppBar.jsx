import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TopAppBar({
  onOpenTerminal,
  currentPage = 'overview',
  onNavigate
}) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="top-app-bar">
      <div className="top-app-bar-inner">
        {/* Brand / Logo */}
        <div
          className="product-title"
          onClick={() => onNavigate && onNavigate('overview')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-terminal" style={{ fontSize: '15px', color: 'var(--color-primary)' }}></i>
          <span className="brand-name">장자훈's Log</span>
          <span className="brand-sub">hope77</span>
        </div>

        {/* Center: Main Page Tabs (이력 / 개요 vs 프로젝트 상세) */}
        <nav className="top-nav-pages" aria-label="Main Navigation">
          <button
            type="button"
            className={`top-nav-tab ${currentPage === 'overview' ? 'is-active' : ''}`}
            onClick={() => onNavigate && onNavigate('overview')}
          >
            <i className="fas fa-user-circle"></i>
            <span>{t('이력 / 개요', 'Overview & Resume')}</span>
          </button>
          <button
            type="button"
            className={`top-nav-tab ${currentPage === 'projects' ? 'is-active' : ''}`}
            onClick={() => onNavigate && onNavigate('projects')}
          >
            <i className="fas fa-folder-open"></i>
            <span>{t('프로젝트 상세', 'Projects Case Study')}</span>
          </button>
        </nav>

        {/* Right Controls */}
        <div className="header-right">
          {/* Telemetry Pit Wall Trigger */}
          {onOpenTerminal && (
            <button
              type="button"
              className="btn-log-console-toggle"
              id="btn-header-log-console"
              title={t('F1 피트스탑 & 텔레메트리 콘솔 열기', 'Open Pit Wall & Telemetry')}
              onClick={onOpenTerminal}
            >
              <span className="live-dot"></span>
              <span>Pit Wall</span>
            </button>
          )}

          {/* Multilingual Toggle */}
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
