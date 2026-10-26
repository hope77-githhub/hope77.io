import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';

export default function ProjectsPage({ selectedProjectId, onSelectProject, onNavigateToOverview }) {
  const { t, lang } = useLanguage();
  const tabsRef = useRef(null);

  // Active project selection
  const currentProject =
    CASE_STUDIES_DATA.find((p) => p.id === selectedProjectId) || CASE_STUDIES_DATA[0];

  const currentIndex = CASE_STUDIES_DATA.findIndex((p) => p.id === currentProject.id);
  const prevProject = currentIndex > 0 ? CASE_STUDIES_DATA[currentIndex - 1] : null;
  const nextProject =
    currentIndex < CASE_STUDIES_DATA.length - 1 ? CASE_STUDIES_DATA[currentIndex + 1] : null;

  // Scroll active tab into view if overflowed
  useEffect(() => {
    const activeBtn = tabsRef.current?.querySelector('.project-tab-btn.is-active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedProjectId]);

  const handleSelectTab = (id) => {
    if (onSelectProject) {
      onSelectProject(id);
    }
    const container = document.getElementById('case-study-view');
    if (container) {
      const topOffset = container.getBoundingClientRect().top + window.pageYOffset - 125;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
    }
  };

  const goToPrevTab = () => {
    if (prevProject) {
      handleSelectTab(prevProject.id);
    }
  };

  const goToNextTab = () => {
    if (nextProject) {
      handleSelectTab(nextProject.id);
    }
  };

  const title = lang === 'en' ? currentProject.titleEn : currentProject.titleKo;
  const oneLiner = lang === 'en' ? currentProject.oneLinerEn : currentProject.oneLinerKo;
  const role = lang === 'en' ? currentProject.roleEn : currentProject.roleKo;
  const badgeText = lang === 'en' ? currentProject.badgeTextEn : currentProject.badgeTextKo;
  const c = currentProject.condensed;

  return (
    <div className="projects-page-wrap">
      {/* 1. Page Header & Back Button */}
      <div className="projects-page-header">
        <div className="band-inner">
          <div className="projects-top-breadcrumbs">
            <button
              type="button"
              className="btn-back-to-overview"
              onClick={onNavigateToOverview}
            >
              <i className="fas fa-arrow-left"></i>
              <span>{t('이력 / 개요 페이지로 돌아가기', 'Back to Overview & Resume')}</span>
            </button>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">{t('프로젝트 상세 케이스 스터디', 'Project Case Studies')}</span>
          </div>

          <div className="projects-hero-titles">
            <h1 className="projects-main-heading">
              {t('프로젝트 상세 케이스 스터디', 'Engineering Case Studies')}
            </h1>
            <p className="projects-sub-heading">
              {t(
                '핵심 문제 정의부터 아키텍처 해결 전략, 정량적 수치 성과를 초간결 요약으로 압축한 케이스 스터디입니다.',
                'Condensed case studies detailing problem triggers, core architectural solutions, and quantitative metrics.'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Sticky Tab Bar: 스크롤 시 화면 상단에 고정되어 언제든 탭 이동 가능 */}
      <nav className="projects-sticky-nav-bar" aria-label="Project Tabs Navigation">
        <div className="band-inner projects-sticky-inner">
          <button
            type="button"
            className="tab-arrow-btn prev"
            onClick={goToPrevTab}
            disabled={!prevProject}
            title={t('이전 프로젝트 탭', 'Previous Project Tab')}
            aria-label="Previous Project Tab"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="horizontal-tabs-container" ref={tabsRef} role="tablist">
            {CASE_STUDIES_DATA.map((proj, idx) => {
              const isActive = proj.id === currentProject.id;
              const tabTitle = lang === 'en' ? proj.titleEn : proj.titleKo;
              return (
                <button
                  key={proj.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`project-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleSelectTab(proj.id)}
                >
                  <span className="ptab-idx">0{idx + 1}</span>
                  <span className="ptab-title">{tabTitle}</span>
                  {proj.publication && (
                    <span className="ptab-sub-chip">arXiv</span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="tab-arrow-btn next"
            onClick={goToNextTab}
            disabled={!nextProject}
            title={t('다음 프로젝트 탭', 'Next Project Tab')}
            aria-label="Next Project Tab"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </nav>

      {/* 3. Main Case Study Content Container (축약형 고정 레이아웃) */}
      <div className="band-inner">
        <article className="case-study-container" id="case-study-view">
          {/* Header Card */}
          <header className="cs-header-card">
            <div className="cs-header-meta-row">
              <div className="cs-meta-left">
                <span className="cs-index-chip">CASE STUDY 0{currentIndex + 1}</span>
                <span className="cs-category-badge">{currentProject.category}</span>
                <span className={`chip chip-${currentProject.badgeType || 'neutral'}`}>
                  {badgeText}
                </span>
                <span className="cs-period-pill">
                  <i className="far fa-calendar-alt"></i>
                  <span>{currentProject.period}</span>
                </span>
              </div>

              <div className="cs-meta-right">
                {currentProject.repoUrl && (
                  <a
                    href={currentProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-action-link"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub Repo</span>
                    <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                  </a>
                )}
              </div>
            </div>

            <h2 className="cs-title">{title}</h2>
            <p className="cs-oneliner">{oneLiner}</p>

            <div className="cs-role-row">
              <span className="cs-role-label">
                <i className="fas fa-id-badge"></i>
                <span>{t('역할 및 기여 범위', 'Role & Scope')}:</span>
              </span>
              <strong className="cs-role-val">{role}</strong>
            </div>

            {currentProject.techStack && (
              <div className="cs-tech-tags-wrap">
                {currentProject.techStack.map((tech, idx) => (
                  <span key={idx} className="cs-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Key Metrics Highlight Grid (핵심 정량 성과) */}
          {currentProject.keyMetrics && (
            <section className="cs-metrics-section">
              <h3 className="cs-section-subhead">
                <i className="fas fa-chart-pie"></i>
                <span>{t('핵심 정량 성과 지표 (Key Metrics)', 'Key Quantitative Metrics')}</span>
              </h3>
              <div className="cs-metrics-grid">
                {currentProject.keyMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="cs-metric-card">
                    <div className="cs-metric-icon">
                      <i className={metric.icon}></i>
                    </div>
                    <div className="cs-metric-val">
                      {lang === 'en' ? metric.valueEn : metric.valueKo}
                    </div>
                    <div className="cs-metric-lbl">
                      {lang === 'en' ? metric.labelEn : metric.labelKo}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3-Step Condensed Core Grid (최대한 축약된 초간결 핵심 카드) */}
          <div className="cs-condensed-grid">
            {/* 01. 핵심 문제 (Problem) */}
            <section className="cs-condensed-card">
              <div className="cs-condensed-card-header">
                <div className="cs-condensed-num-badge">01</div>
                <div>
                  <span className="cs-condensed-tag">{t('문제 정의', 'Problem Context')}</span>
                  <h3 className="cs-condensed-title">
                    {t('어떤 핵심 병목이 있었는가?', 'Core Problem & Bottleneck')}
                  </h3>
                </div>
              </div>
              <div className="cs-condensed-body">
                <p className="cs-condensed-desc">
                  {lang === 'en' ? c.problemEn : c.problemKo}
                </p>
              </div>
            </section>

            {/* 02. 해결 및 구현 과정 (Solution & Implementation) */}
            <section className="cs-condensed-card highlight-blue">
              <div className="cs-condensed-card-header">
                <div className="cs-condensed-num-badge highlight-blue">02</div>
                <div>
                  <span className="cs-condensed-tag highlight-blue">{t('핵심 해결책', 'Architecture & Resolution')}</span>
                  <h3 className="cs-condensed-title">
                    {t('무엇을 어떻게 구현해 해결했는가?', 'Key Implementation Actions')}
                  </h3>
                </div>
              </div>
              <div className="cs-condensed-body">
                <ul className="cs-condensed-list">
                  {(lang === 'en' ? c.solutionEn : c.solutionKo).map((item, idx) => (
                    <li key={idx} className="cs-condensed-item">
                      <span className="cs-condensed-dot accent"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 03. 정량 성과 및 배운 점 (Impact & Learnings) */}
            <section className="cs-condensed-card highlight-green">
              <div className="cs-condensed-card-header">
                <div className="cs-condensed-num-badge highlight-green">03</div>
                <div>
                  <span className="cs-condensed-tag highlight-green">{t('성과 및 회고', 'Results & Learnings')}</span>
                  <h3 className="cs-condensed-title">
                    {t('정량적 성과와 핵심 인사이트는?', 'Impact & Key Insights')}
                  </h3>
                </div>
              </div>
              <div className="cs-condensed-body">
                <ul className="cs-condensed-list">
                  {(lang === 'en' ? c.impactEn : c.impactKo).map((item, idx) => (
                    <li key={idx} className="cs-condensed-item">
                      <span className="cs-condensed-dot green"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Bottom Project Pagination & Navigation */}
          <footer className="cs-bottom-nav">
            <div className="cs-nav-prev">
              {prevProject ? (
                <button
                  type="button"
                  className="btn-cs-nav"
                  onClick={goToPrevTab}
                >
                  <i className="fas fa-chevron-left"></i>
                  <div className="cs-nav-text">
                    <span className="cs-nav-sub">{t('이전 프로젝트', 'Previous Project')}</span>
                    <strong className="cs-nav-title">
                      {lang === 'en' ? prevProject.titleEn : prevProject.titleKo}
                    </strong>
                  </div>
                </button>
              ) : (
                <div />
              )}
            </div>

            <div className="cs-nav-center">
              <button
                type="button"
                className="btn-cs-overview-link"
                onClick={onNavigateToOverview}
              >
                <i className="fas fa-table-cells-large"></i>
                <span>{t('이력 / 개요 목록으로', 'Back to Overview')}</span>
              </button>
            </div>

            <div className="cs-nav-next">
              {nextProject && (
                <button
                  type="button"
                  className="btn-cs-nav next"
                  onClick={goToNextTab}
                >
                  <div className="cs-nav-text right">
                    <span className="cs-nav-sub">{t('다음 프로젝트', 'Next Project')}</span>
                    <strong className="cs-nav-title">
                      {lang === 'en' ? nextProject.titleEn : nextProject.titleKo}
                    </strong>
                  </div>
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
