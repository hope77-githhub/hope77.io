import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { PROJECT_LOGS_DATA } from '../data/projectLogsData';
import ProjectLogCard from './ProjectLogCard';
import { useLanguage } from '../context/LanguageContext';

const ProjectLogsFeed = forwardRef(function ProjectLogsFeed({ onSelectSection }, ref) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('log-entry-com-study');

  const tabItems = [
    {
      id: 'log-entry-com-study',
      num: '01',
      nameKo: 'LoL 커뮤니케이션 & SNA (arXiv)',
      nameEn: 'LoL In-Game SNA & arXiv Paper',
      tag: 'RESEARCH',
      statusTextKo: '논문 등재',
      statusTextEn: 'Published',
      statusType: 'success',
      timestamp: '2023.09 - 2025.09'
    },
    {
      id: 'log-entry-unknown',
      num: '02',
      nameKo: 'Unknown QA & 테스트 지원 도구',
      nameEn: 'Unknown QA & Automation Suite',
      tag: 'QA_AUTOMATION',
      statusTextKo: '진행 중',
      statusTextEn: 'In Progress',
      statusType: 'info',
      timestamp: '2025.12 - PRESENT'
    },
    {
      id: 'log-entry-f1',
      num: '03',
      nameKo: 'AI Race Engineer (F1 텔레메트리)',
      nameEn: 'Live AI Race Engineer (F1 UDP)',
      tag: 'TELEMETRY / AI',
      statusTextKo: '진행 중',
      statusTextEn: 'In Progress',
      statusType: 'info',
      timestamp: '2026.09 - PRESENT'
    },
    {
      id: 'log-entry-neis',
      num: '04',
      nameKo: 'NEIS 글자수 & 엑셀 중복 탐지기',
      nameEn: 'NEIS Byte Counter & Excel Tool',
      tag: 'CLIENT_WEB',
      statusTextKo: '배포 완료',
      statusTextEn: 'Completed',
      statusType: 'success',
      timestamp: '2026.09 - DONE'
    },
    {
      id: 'all',
      num: 'ALL',
      nameKo: '전체 프로젝트 한눈에 보기',
      nameEn: 'View All Project Logs Feed',
      tag: '4 ENTRIES',
      statusTextKo: '전체 로그',
      statusTextEn: 'All Logs',
      statusType: 'neutral',
      timestamp: '2023 - 2026'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const targetTab = tabItems.find((tab) => tab.id === tabId);
    if (onSelectSection && targetTab) {
      onSelectSection(lang === 'en' ? targetTab.nameEn : targetTab.nameKo);
    }
  };

  useImperativeHandle(ref, () => ({
    openAndScrollTo(targetSelector) {
      const cleanId = targetSelector.replace('#', '');
      const matchedTab = tabItems.find((tab) => tab.id === cleanId);
      if (matchedTab) {
        setActiveTab(cleanId);
        if (onSelectSection) {
          onSelectSection(lang === 'en' ? matchedTab.nameEn : matchedTab.nameKo);
        }
      } else if (cleanId === 'all') {
        setActiveTab('all');
      }
      setTimeout(() => {
        const el = document.getElementById('project-logs-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }));

  const activeProject = PROJECT_LOGS_DATA.find((p) => p.id === activeTab);

  return (
    <div className="band-soft" id="project-logs-section">
      <div className="band-inner">
        <section>
          {/* Section Header */}
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">Log Index &amp; Project History</h2>
              <span className="chip chip-info">4 Ingested Projects</span>
              <span className="chip chip-purple">1 arXiv Paper (2512.20116)</span>
            </div>
            <span className="meta-label">
              {t(
                '세로 탭을 선택하면 해당 프로젝트의 문제 정의, 해결 전략, 세부 성과 및 Git 문서 전체가 즉시 노출됩니다.',
                'Select a vertical tab to inspect full architecture, problem context, and achievements directly.'
              )}
            </span>
          </div>

          {/* Split Layout: Left Vertical Tabs + Right Full Project Log Pane */}
          <div className="project-history-split">
            {/* Left Column: Vertical Tab List */}
            <aside className="project-vertical-nav" role="tablist">
              <div className="vertical-nav-sticky">
                <div className="vertical-nav-header">
                  <i className="fas fa-layer-group" style={{ color: 'var(--color-primary)' }}></i>
                  <span>{t('프로젝트 세로 탭 인덱스', 'Project Vertical Index')}</span>
                </div>

                <div className="vertical-tab-items">
                  {tabItems.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`vertical-tab-btn ${isActive ? 'is-active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                      >
                        <div className="vtab-top-row">
                          <span className="vtab-num">{tab.num}</span>
                          <span className="vtab-tag">{tab.tag}</span>
                        </div>
                        <div className="vtab-name">
                          {lang === 'en' ? tab.nameEn : tab.nameKo}
                        </div>
                        <div className="vtab-bottom-row">
                          <span className="vtab-meta">
                            <span
                              className="vtab-status-dot"
                              style={{
                                backgroundColor:
                                  tab.statusType === 'success'
                                    ? 'var(--color-semantic-up)'
                                    : tab.statusType === 'info'
                                    ? 'var(--color-primary)'
                                    : 'var(--color-muted)'
                              }}
                            ></span>
                            <span>{lang === 'en' ? tab.statusTextEn : tab.statusTextKo}</span>
                          </span>
                          <span className="vtab-ts">{tab.timestamp}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Right Column: Full Detailed Content */}
            <main className="project-detail-pane">
              {activeTab === 'all' ? (
                <div className="all-logs-container">
                  {PROJECT_LOGS_DATA.map((project) => (
                    <ProjectLogCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                activeProject && (
                  <ProjectLogCard key={activeProject.id} project={activeProject} />
                )
              )}
            </main>
          </div>
        </section>
      </div>
    </div>
  );
});

export default ProjectLogsFeed;
