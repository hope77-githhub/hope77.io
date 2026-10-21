import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { PROJECT_LOGS_DATA } from '../data/projectLogsData';
import ProjectLogCard from './ProjectLogCard';
import { useLanguage } from '../context/LanguageContext';

const ProjectLogsFeed = forwardRef(function ProjectLogsFeed(props, ref) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [expandedMap, setExpandedMap] = useState({});

  // Filter projects
  const filteredProjects = PROJECT_LOGS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.categories.includes(filter);
  });

  const handleToggleCard = (id) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const nextMap = {};
    filteredProjects.forEach((p) => {
      nextMap[p.id] = true;
    });
    setExpandedMap(nextMap);
  };

  const handleCollapseAll = () => {
    setExpandedMap({});
  };

  // Expose openAndScrollTo method to parent ref (called by QuickNavigation)
  useImperativeHandle(ref, () => ({
    openAndScrollTo(targetSelector) {
      const cleanId = targetSelector.replace('#', '');
      setExpandedMap((prev) => ({
        ...prev,
        [cleanId]: true
      }));

      // Ensure filter doesn't hide it
      const targetProject = PROJECT_LOGS_DATA.find((p) => p.id === cleanId);
      if (targetProject && filter !== 'all' && !targetProject.categories.includes(filter)) {
        setFilter('all');
      }

      setTimeout(() => {
        const el = document.getElementById(cleanId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
    }
  }));

  return (
    <div className="band-soft" id="project-logs-section">
      <div className="band-inner">
        <section>
          {/* Log Dashboard Observability Header Banner */}
          <div className="log-dashboard-banner">
            <div className="log-dashboard-left">
              <div className="log-dashboard-title">
                <span className="log-pulse-dot"></span>
                <span>장자훈's Log Registry &amp; Timeline Stream</span>
              </div>
              <p className="log-dashboard-desc">
                {t(
                  "시간대별로 수행한 업무 효율화 도구 개발, 텔레메트리 파싱, 학술 논문 및 아키텍처 로그 기록입니다. [로그 상세 페이로드 열기]를 누르면 세부 프로젝트 정보가 노출됩니다.",
                  "Chronological log repository recording system tool builds, telemetry parsing, and research publications. Click 'Inspect Payload' to view detailed project architectures."
                )}
              </p>
            </div>
            <div className="log-metrics-grid">
              <div className="log-stat-card">
                <span className="log-stat-val">4 Entries</span>
                <span className="log-stat-lbl">Ingested Logs</span>
              </div>
              <div className="log-stat-card">
                <span className="log-stat-val">3 Projects</span>
                <span className="log-stat-lbl">Active &amp; Production</span>
              </div>
              <div className="log-stat-card">
                <span className="log-stat-val">1 Paper</span>
                <span className="log-stat-lbl">arXiv:2512.20116</span>
              </div>
              <div className="log-stat-card">
                <span className="log-stat-val">0 Errors</span>
                <span className="log-stat-lbl">Pipeline Health</span>
              </div>
            </div>
          </div>

          {/* Log Filter Toolbar */}
          <div className="log-toolbar">
            <div className="log-filter-group">
              <button
                type="button"
                className={`log-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <span>전체 로그 ALL</span>
                <span className="badge-count">4</span>
              </button>
              <button
                type="button"
                className={`log-filter-btn ${filter === 'projects' ? 'active' : ''}`}
                onClick={() => setFilter('projects')}
              >
                <span>프로젝트 PROJECTS</span>
                <span className="badge-count">4</span>
              </button>
              <button
                type="button"
                className={`log-filter-btn ${filter === 'research' ? 'active' : ''}`}
                onClick={() => setFilter('research')}
              >
                <span>연구 &amp; 논문 RESEARCH</span>
                <span className="badge-count">1</span>
              </button>
            </div>
            <div className="log-actions-group">
              <button
                type="button"
                className="btn-log-ctrl"
                id="btn-logs-expand-all"
                onClick={handleExpandAll}
              >
                <i className="fas fa-angles-down"></i>{' '}
                <span>{t('전체 로그 펼치기', 'Expand All')}</span>
              </button>
              <button
                type="button"
                className="btn-log-ctrl"
                id="btn-logs-collapse-all"
                onClick={handleCollapseAll}
              >
                <i className="fas fa-angles-up"></i>{' '}
                <span>{t('전체 접기', 'Collapse All')}</span>
              </button>
            </div>
          </div>

          {/* The Stream of Log Cards */}
          <div className="log-stream-feed">
            {filteredProjects.map((project) => (
              <ProjectLogCard
                key={project.id}
                project={project}
                isExpanded={!!expandedMap[project.id]}
                onToggle={() => handleToggleCard(project.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

export default ProjectLogsFeed;
