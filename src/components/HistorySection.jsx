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
            '실제 현장의 수작업 병목을 시스템으로 해결한 실무 경험과 학술 논문 등재 및 공식 대회 성과로 검증된 이력입니다.',
            'Structured professional experience, official tournament achievements, and empirical research verified by academic publication.'
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
          const duties = lang === 'en' ? item.dutiesEn : item.dutiesKo;

          if (item.isTbd) {
            return (
              <article key={item.id} className="history-entry-card history-tbd-card">
                <div className="history-card-top">
                  <div className="history-org-role">
                    <h3 className="history-org-name tbd-text">{org}</h3>
                    <div className="history-role-badge tbd">
                      <i className="fas fa-clock"></i>
                      <span>{role}</span>
                    </div>
                  </div>
                  <div className="history-period-pill tbd">
                    <span>{item.period}</span>
                  </div>
                </div>
                <div className="history-tbd-body">
                  <p className="history-tbd-notice">
                    {lang === 'en'
                      ? 'Upcoming professional career experience to be updated.'
                      : '새로운 실무 경력 및 프로젝트 이력이 순차적으로 추가될 예정입니다.'}
                  </p>
                </div>
              </article>
            );
          }

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

              {/* Duties */}
              <div className="history-duties-block">
                <h4 className="history-col-title">
                  <i className="fas fa-list-check"></i>
                  <span>{t('담당 업무 및 핵심 수행 내용', 'Key Responsibilities & Scope')}</span>
                </h4>
                <ul className="history-bullet-list">
                  {duties.map((duty, dIdx) => (
                    <li key={dIdx} className="history-bullet-item">
                      <span className="bullet-dot accent"></span>
                      <span className="bullet-text">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards / Achievements (대회 수상 실적) */}
              {item.awards && item.awards.length > 0 && (
                <div className="history-awards-block">
                  <h4 className="history-col-title">
                    <i className="fas fa-trophy" style={{ color: '#d97706' }}></i>
                    <span>{t('대회 공식 수상 실적 및 주요 성과 (Awards & Honors)', 'Official Awards & Tournament Honors')}</span>
                    <span className="awards-count-pill">{item.awards.length}</span>
                  </h4>
                  <div className="history-awards-grid">
                    {item.awards.map((award, aIdx) => {
                      const isChampion = award.ko.includes('우승') && !award.ko.includes('준우승');
                      return (
                        <div key={aIdx} className={`history-award-item ${isChampion ? 'champion' : ''}`}>
                          <div className="award-icon-box">
                            <i className={isChampion ? 'fas fa-trophy trophy-gold' : 'fas fa-medal medal-silver'}></i>
                          </div>
                          <div className="award-text-group">
                            <div className="award-title-row">
                              <strong className="award-title">{lang === 'en' ? award.en : award.ko}</strong>
                              <span className="award-date-pill">{award.date}</span>
                            </div>
                            <span className="award-issuer-text">{award.issuer}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Footer: Project link & GitHub */}
              <div className="history-card-footer">
                <div className="history-footer-left">
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="history-external-link"
                    >
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                      <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
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
