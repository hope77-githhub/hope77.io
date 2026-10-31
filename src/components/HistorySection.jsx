import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HISTORY_DATA } from '../data/historyData';

export default function HistorySection({ onNavigateToProject }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('career'); // 'career' | 'research'
  const [expandedAwards, setExpandedAwards] = useState({});

  const toggleAwards = (id) => {
    setExpandedAwards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
          const isAwardsExpanded = !!expandedAwards[item.id];

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

              {/* Awards / Achievements (대회 공식 수상 실적 - 드롭다운 섹션) */}
              {item.awards && item.awards.length > 0 && (
                <div className={`history-awards-block ${isAwardsExpanded ? 'is-expanded' : 'is-collapsed'}`}>
                  <button
                    type="button"
                    className="history-awards-trigger"
                    onClick={() => toggleAwards(item.id)}
                    aria-expanded={isAwardsExpanded}
                    title={isAwardsExpanded ? t('수상 실적 접기', 'Collapse awards') : t('수상 실적 펼치기', 'Expand awards')}
                  >
                    <div className="history-awards-title-wrap">
                      <div className="awards-trigger-heading">
                        <i className="fas fa-trophy trophy-header-icon"></i>
                        <span className="awards-trigger-title-text">
                          {t('대회 공식 수상 실적 및 주요 성과 (Awards & Honors)', 'Official Awards & Tournament Honors')}
                        </span>
                        <span className="awards-count-pill">{item.awards.length}</span>
                      </div>
                    </div>

                    <div className="history-awards-trigger-meta">
                      {item.totalPrizeKo && (
                        <div className="awards-total-prize-pill" title="공식 대회 누적 상금">
                          <i className="fas fa-coins"></i>
                          <span>{lang === 'en' ? item.totalPrizeEn : item.totalPrizeKo}</span>
                        </div>
                      )}
                      <div className="awards-toggle-action">
                        <span className="toggle-label-text">
                          {isAwardsExpanded ? t('접기', 'Collapse') : t('상세 보기', 'Details')}
                        </span>
                        <i className={`fas fa-chevron-down awards-chevron-icon ${isAwardsExpanded ? 'is-open' : ''}`}></i>
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Content */}
                  {isAwardsExpanded && (
                    <div className="history-awards-dropdown-body">
                      <div className="history-awards-vertical-list">
                        {item.awards.map((award, aIdx) => {
                          const isChampion = award.rankKo?.includes('우승') || (award.ko.includes('우승') && !award.ko.includes('준우승'));
                          const isRunnerUp = award.rankKo?.includes('준우승') || award.ko.includes('준우승');
                          return (
                            <div
                              key={aIdx}
                              className={`history-award-row ${isChampion ? 'champion' : isRunnerUp ? 'runner-up' : 'qualifier'}`}
                            >
                              <div className="award-time-cell">
                                <span className="award-date-pill">
                                  <i className="far fa-calendar-alt"></i>
                                  <span>{award.date}</span>
                                </span>
                              </div>

                              <div className="award-icon-cell">
                                <div className="award-icon-box">
                                  <i className={isChampion ? 'fas fa-trophy trophy-gold' : isRunnerUp ? 'fas fa-medal medal-silver' : 'fas fa-shield-halved ribbon-blue'}></i>
                                </div>
                              </div>

                              <div className="award-main-cell">
                                <div className="award-title-line">
                                  <strong className="award-title">{lang === 'en' ? award.en : award.ko}</strong>
                                  {award.team && (
                                    <span className="award-team-tag">{award.team}</span>
                                  )}
                                </div>
                                <span className="award-issuer-text">{award.issuer}</span>
                              </div>

                              <div className="award-meta-cell">
                                {award.prizeKo && (
                                  <span className="award-prize-pill" title={lang === 'en' ? 'Price' : '상금'}>
                                    <span>{lang === 'en' ? award.prizeEn : award.prizeKo}</span>
                                  </span>
                                )}
                                <span className={`award-rank-pill ${isChampion ? 'rank-gold' : isRunnerUp ? 'rank-silver' : 'rank-bronze'}`}>
                                  {lang === 'en'
                                    ? (award.rankEn || (isChampion ? 'Champion' : isRunnerUp ? 'Runner-up' : 'Top 16'))
                                    : (award.rankKo || (isChampion ? '우승 (1등)' : isRunnerUp ? '준우승 (2등)' : '16강'))}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Footer: Project link & GitHub & Wiki links */}
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
                  {item.paperUrl && (
                    <a
                      href={item.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="history-external-link paper-link"
                    >
                      <i className="fas fa-file-pdf"></i>
                      <span>arXiv Paper</span>
                      <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                    </a>
                  )}
                  {item.wikiLinks && item.wikiLinks.map((wLink, wIdx) => (
                    <a
                      key={wIdx}
                      href={wLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`history-external-link wiki-link ${wLink.isProfile ? 'profile-link' : ''}`}
                    >
                      <i className={wLink.isProfile ? 'fas fa-user-tie' : 'fas fa-globe'}></i>
                      <span>{lang === 'en' ? wLink.labelEn : wLink.labelKo}</span>
                      <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                    </a>
                  ))}
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
