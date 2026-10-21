import React, { useState } from 'react';
import { MODULES_NAV_DATA } from '../data/modulesNavData';
import { useLanguage } from '../context/LanguageContext';

export default function QuickNavigation({ onSelectModule }) {
  const { t, lang } = useLanguage();
  const [activeId, setActiveId] = useState('01');
  const [previewId, setPreviewId] = useState('01');

  const previewItem = MODULES_NAV_DATA.find((m) => m.id === previewId) || MODULES_NAV_DATA[0];

  const handleClick = (module) => {
    setActiveId(module.id);
    setPreviewId(module.id);
    if (onSelectModule) {
      onSelectModule(module.target, module.name);
    }
  };

  const handleMouseEnter = (module) => {
    setPreviewId(module.id);
  };

  return (
    <div className="band-light">
      <div className="band-inner">
        <section id="quick-navigation">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">Log Index &amp; Module Directory</h2>
              <span className="chip chip-info">{MODULES_NAV_DATA.length} Modules</span>
            </div>
            <span className="meta-label">
              {t(
                '항목을 클릭하면 해당 로그의 상세 페이로드로 자동 스크롤 및 펼쳐집니다.',
                'Click any log module below to jump directly to its detailed log payload.'
              )}
            </span>
          </div>

          <div className="quick-nav-grid">
            {MODULES_NAV_DATA.map((module) => {
              const isActive = activeId === module.id;
              return (
                <button
                  key={module.id}
                  type="button"
                  className={`module-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleClick(module)}
                  onMouseEnter={() => handleMouseEnter(module)}
                >
                  <div className="module-btn-top">
                    <span className="module-btn-title">
                      {module.id}. {module.name}
                    </span>
                    <span
                      className={`chip ${
                        isActive
                          ? 'chip-info'
                          : module.chip.type === 'purple'
                          ? 'chip-purple'
                          : module.chip.type === 'success'
                          ? 'chip-success'
                          : 'chip-neutral'
                      }`}
                    >
                      {isActive ? 'ON' : module.chip.text}
                    </span>
                  </div>
                  <span className="module-btn-desc">
                    {lang === 'en' ? module.subTitleEn : module.subTitleKo}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="preview-panel">
            <div className="preview-content">
              <div className="preview-title">
                <span className="chip chip-info">PREVIEW</span>
                <span id="preview-module-name" style={{ fontFamily: 'var(--font-mono)' }}>
                  {previewItem.id}. {previewItem.name}
                </span>
              </div>
              <p className="body-text" id="preview-module-desc" style={{ fontSize: '15px' }}>
                {lang === 'en' ? previewItem.descEn : previewItem.descKo}
              </p>
            </div>
            <a
              href={previewItem.target}
              id="preview-jump-btn"
              className="btn-utility btn-primary-accent"
              onClick={(e) => {
                e.preventDefault();
                handleClick(previewItem);
              }}
            >
              <span>{t('로그 상세 열기', 'Inspect Log Details')}</span>{' '}
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
