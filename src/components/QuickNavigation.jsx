import React, { useState } from 'react';
import { MODULES_NAV_DATA } from '../data/modulesNavData';
import { useLanguage } from '../context/LanguageContext';

export default function QuickNavigation({ onSelectModule }) {
  const { t, lang } = useLanguage();
  const [activeId, setActiveId] = useState('01');

  const activeItem = MODULES_NAV_DATA.find((m) => m.id === activeId) || MODULES_NAV_DATA[0];

  const handleTabClick = (module) => {
    setActiveId(module.id);
  };

  const handleJump = (module) => {
    if (onSelectModule) {
      onSelectModule(module.target, module.name);
    }
  };

  return (
    <div className="band-light">
      <div className="band-inner">
        <section id="quick-navigation" className="quick-nav-section">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">Log Index &amp; Module Tabs</h2>
              <span className="chip chip-secondary">{MODULES_NAV_DATA.length} Modules</span>
            </div>
            <span className="meta-label">
              {t(
                '탭을 선택하여 각 모듈의 개요를 확인하고 해당 로그로 바로 이동할 수 있습니다.',
                'Select a tab to preview module architecture and jump directly to its log.'
              )}
            </span>
          </div>

          {/* Tab Navigation Bar (Horizontal Tab Strip to minimize vertical scroll) */}
          <div className="nav-tab-container">
            <div className="nav-tab-bar" role="tablist">
              {MODULES_NAV_DATA.map((module) => {
                const isActive = activeId === module.id;
                return (
                  <button
                    key={module.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`nav-tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleTabClick(module)}
                  >
                    <span className="nav-tab-num">{module.id}</span>
                    <span className="nav-tab-name">{module.name}</span>
                    <span
                      className={`chip chip-mini ${
                        isActive
                          ? 'chip-info'
                          : module.chip.type === 'purple'
                          ? 'chip-purple'
                          : module.chip.type === 'success'
                          ? 'chip-success'
                          : 'chip-neutral'
                      }`}
                    >
                      {module.chip.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content Panel */}
            <div className="nav-tab-panel" role="tabpanel">
              <div className="nav-panel-left">
                <div className="nav-panel-tag-row">
                  <span className="chip chip-secondary">
                    {t('선택된 모듈', 'Active Module')} {activeItem.id}
                  </span>
                  <span className="nav-panel-subtitle">
                    {lang === 'en' ? activeItem.subTitleEn : activeItem.subTitleKo}
                  </span>
                </div>
                <h3 className="nav-panel-title">
                  {activeItem.id}. {activeItem.name}
                </h3>
                <p className="body-text nav-panel-desc">
                  {lang === 'en' ? activeItem.descEn : activeItem.descKo}
                </p>
              </div>

              <div className="nav-panel-action">
                <button
                  type="button"
                  className="nav-jump-btn"
                  onClick={() => handleJump(activeItem)}
                >
                  <span>{t('해당 로그로 이동', 'Jump to Log Payload')}</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
