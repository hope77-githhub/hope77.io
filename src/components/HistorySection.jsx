import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HISTORY_DATA } from '../data/historyData';

export default function HistorySection({ onNavigateToProject }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('career'); // 'career' | 'research'

  const items = activeTab === 'career' ? HISTORY_DATA.career : HISTORY_DATA.research;

  return (
    <section className="history-section" id="history">
      <div className="section-head-simple">
        <div className="section-head-title-group">
          <span className="section-label-chip">
            <i className="fas fa-briefcase"></i>
            <span>{t('경력 및 연구 이력', 'Experience & Research')}</span>
          </span>
          <h2 className="section-main-title">
            {t('경력 / 연구 이력 (Experience & Research History)', 'Career & Research History')}
          </h2>
        </div>
        <p className="section-sub-desc">
          {t(
            '실제 현장의 수작업 병목을 시스템으로 해결한 실무 경험과 학술 논문 등재로 검증된 데이터 분석 연구 이력입니다.',
            'Structured professional experience eliminating operational bottlenecks and empirical research verified by academic publication.'
          )}
        </p>
      </div>

      {/* Tabs: 경력 vs 연구 이력 */}
      <div className="history-tab-bar" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'career'}
          className={`history-tab-btn ${activeTab === 'career' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('career')}
        >
          <i className="fas fa-building"></i>
          <span>{t('경력 이력 (Career)', 'Career Experience')}</span>
          <span className="tab-count-pill">{HISTORY_DATA.career.length}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'research'}
          className={`history-tab-btn ${activeTab === 'research' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('research')}
        >
          <i className="fas fa-graduation-cap"></i>
          <span>{t('연구 이력 (Research)', 'Research Experience')}</span>
          <span className="tab-count-pill">{HISTORY_DATA.research.length}</span>
        </button>
      </div>

      {/* Tab Content List */}
      <div className="history-items-container">
        {items.map((item) => {
          const org = lang === 'en' ? item.orgEn : item.orgKo;
          const role = lang === 'en' ? item.roleEn : item.roleKo;
          const summary = lang === 'en' ? item.summaryEn : item.summaryKo;
          const duties = lang === 'en' ? item.dutiesEn : item.dutiesKo;
          const achievements = lang === 'en' ? item.achievementsEn : item.achievementsKo;

          return (
            <article key={item.id} className="history-entry-card">
              {/* Header: Period & Role */}
              <div className="history-card-top">
                <div className="history-org-role">
                  <h3 className="history-org-name">{org}</h3>
                  <div className="history-role-badge">
                    <i className="fas fa-id-badge"></i>
                    <span>{role}</span>
                  </div>
                </div>
                <div className="history-period-pill">
                  <i className="far fa-calendar-alt"></i>
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Summary line */}
              <p className="history-summary-text">{summary}</p>

              {/* Two columns: Duties & Achievements */}
              <div className="history-details-grid">
                {/* 1. Duties */}
                <div className="history-col">
                  <h4 className="history-col-title">
                    <i className="fas fa-list-check"></i>
                    <span>{t('담당 업무', 'Key Responsibilities')}</span>
                  </h4>
                  <ul className="history-bullet-list">
                    {duties.map((duty, dIdx) => (
                      <li key={dIdx} className="history-bullet-item">
                        <span className="bullet-dot"></span>
                        <span className="bullet-text">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Key Achievements */}
                <div className="history-col">
                  <h4 className="history-col-title accent">
                    <i className="fas fa-chart-line"></i>
                    <span>{t('주요 성과 요약', 'Key Achievements & Impact')}</span>
                  </h4>
                  <ul className="history-bullet-list">
                    {achievements.map((achieve, aIdx) => (
                      <li key={aIdx} className="history-bullet-item achievement">
                        <span className="bullet-dot accent"></span>
                        <span className="bullet-text">{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer: Static document badge (no link in overview) & Project link */}
              <div className="history-card-footer">
                <div className="history-footer-left">
                  {item.paperUrl && (
                    <span className="history-doc-badge">
                      <i className="fas fa-file-pdf"></i>
                      <span>arXiv:2512.20116</span>
                    </span>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="history-external-link"
                    >
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                      <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                    </a>
                  )}
                </div>

                {item.relatedProjectId && (
                  <button
                    type="button"
                    className="btn-history-project-jump"
                    onClick={() => onNavigateToProject && onNavigateToProject(item.relatedProjectId)}
                  >
                    <span>{t('관련 프로젝트 상세 보기', 'View Case Study')}</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
