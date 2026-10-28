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

  // Scroll active tab into view if needed
  useEffect(() => {
    const activeBtn = tabsRef.current?.querySelector('.project-tab-btn.is-active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedProjectId]);

  const title = lang === 'en' ? currentProject.titleEn : currentProject.titleKo;
  const oneLiner = lang === 'en' ? currentProject.oneLinerEn : currentProject.oneLinerKo;
  const role = lang === 'en' ? currentProject.roleEn : currentProject.roleKo;
  const badgeText = lang === 'en' ? currentProject.badgeTextEn : currentProject.badgeTextKo;

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
                '문제 인지 계기부터 아키텍처 설계, 구현 개선, 정량적 수치 성과 및 배운 점까지 상세히 다룬 케이스 스터디입니다.',
                'Deep case studies detailing problem triggers, architectural decisions, quantitative metrics, and retrospectives.'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Sticky Project Tabs (길이 제한 없이 모든 탭 100% 노출) */}
      <nav className="projects-sticky-nav-bar" aria-label="Project Tabs">
        <div className="band-inner">
          <div className="horizontal-tabs-container" ref={tabsRef} role="tablist">
            {CASE_STUDIES_DATA.map((proj, idx) => {
              const isActive = proj.id === currentProject.id;
              const tabTitle = lang === 'en'
                ? (proj.tabLabelEn || proj.titleEn)
                : (proj.tabLabelKo || proj.titleKo);
              return (
                <button
                  key={proj.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`project-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    onSelectProject(proj.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
        </div>
      </nav>

      {/* 3. Main Case Study Content Container */}
      <div className="band-inner">
        <article className="case-study-container" id="case-study-view">
          {/* Case Study Meta Top Bar */}
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
                {currentProject.paperUrl && (
                  <a
                    href={currentProject.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-action-link accent"
                  >
                    <i className="fas fa-file-pdf"></i>
                    <span>arXiv:2512.20116</span>
                    <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                  </a>
                )}
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
                <i className="fas fa-user-check"></i>
                <strong>{t('담당 역할:', 'Role:')}</strong>
              </span>
              <span className="cs-role-text">{role}</span>
            </div>

            {/* Tech Stack Chips */}
            {currentProject.techStack && (
              <div className="cs-tech-tags">
                <span className="cs-tags-label">{t('사용 기술:', 'Technologies:')}</span>
                {currentProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="cs-tech-pill">{tech}</span>
                ))}
              </div>
            )}
          </header>

          {/* Key Metrics Highlight Grid (정량 성과 카드) */}
          {currentProject.keyMetrics && (
            <section className="cs-metrics-section">
              <h3 className="cs-section-subhead">
                <i className="fas fa-chart-pie"></i>
                <span>{t('핵심 정량 성과 지표 (Key Quantitative Impact)', 'Key Quantitative Impact')}</span>
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

          {/* Architecture Pipeline Flow Diagram */}
          {currentProject.pipelineFlow && (
            <section className="cs-diagram-section">
              <h3 className="cs-section-subhead">
                <i className="fas fa-diagram-project"></i>
                <span>{t('데이터 파이프라인 및 아키텍처 흐름', 'Data Pipeline & System Architecture')}</span>
              </h3>
              <div className="cs-pipeline-grid">
                {currentProject.pipelineFlow.map((flowItem, fIdx) => (
                  <div key={fIdx} className="cs-pipeline-node">
                    <div className="pipeline-node-top">
                      <span className="pipeline-step-badge">{flowItem.step}</span>
                      <strong className="pipeline-step-title">{flowItem.titleKo}</strong>
                    </div>
                    <p className="pipeline-step-desc">{flowItem.descKo}</p>
                    {fIdx < currentProject.pipelineFlow.length - 1 && (
                      <span className="pipeline-arrow-indicator">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Before & After Comparison Grid */}
          {currentProject.beforeAfter && (
            <section className="cs-ba-section">
              <h3 className="cs-section-subhead">
                <i className="fas fa-arrows-split-up-and-left"></i>
                <span>{t('도입 전 / 도입 후 시스템 변화 (Before & After)', 'Before vs After Transformation')}</span>
              </h3>
              <div className="before-after-grid">
                <div className="ba-card ba-before">
                  <div className="ba-header">
                    <i className="fas fa-circle-xmark"></i>
                    <span>{t('기존 수작업 병목 (Before)', 'Manual Bottlenecks (Before)')}</span>
                  </div>
                  <p className="ba-text">
                    {lang === 'en' ? currentProject.beforeAfter.beforeEn : currentProject.beforeAfter.beforeKo}
                  </p>
                </div>
                <div className="ba-card ba-after">
                  <div className="ba-header">
                    <i className="fas fa-circle-check"></i>
                    <span>{t('시스템 개선 및 자동화 후 (After)', 'Automated Resolution (After)')}</span>
                  </div>
                  <p className="ba-text">
                    {lang === 'en' ? currentProject.beforeAfter.afterEn : currentProject.beforeAfter.afterKo}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Detailed Case Study Framework (Custom Sections with Large Headings) */}
          <div className="cs-steps-flow">
            {currentProject.sections &&
              currentProject.sections.map((section, sIdx) => (
                <section
                  key={sIdx}
                  className={`cs-step-block ${section.highlight ? 'highlight' : ''}`}
                >
                  <div className="cs-step-heading-row">
                    <span className={`cs-step-num ${section.highlight ? 'highlight' : ''}`}>
                      {section.num || `0${sIdx + 1}`}
                    </span>
                    <div className="cs-step-title-wrap">
                      <h3 className="cs-step-title">
                        {lang === 'en' ? section.titleEn : section.titleKo}
                      </h3>
                    </div>
                  </div>

                  <div className={`cs-step-content-box ${section.highlight ? 'highlight' : ''}`}>
                    {section.contentKo && (
                      <div className="cs-formatted-content">
                        {(lang === 'en' ? section.contentEn : section.contentKo)
                          .split('\n')
                          .map((line, lIdx) => (
                            <p
                              key={lIdx}
                              className={`cs-text-paragraph ${line.startsWith('•') || line.startsWith('1)') || line.startsWith('2)') || line.startsWith('3)') ? 'bullet-line' : 'line'}`}
                            >
                              {line}
                            </p>
                          ))}
                      </div>
                    )}

                    {/* Screenshots Gallery (For F1 project results) */}
                    {section.screenshots && (
                      <div className="cs-screenshots-grid">
                        {section.screenshots.map((shot, shotIdx) => (
                          <figure key={shotIdx} className="cs-screenshot-card">
                            <div className="cs-screenshot-img-wrap">
                              <img
                                src={shot.src}
                                alt={lang === 'en' ? shot.titleEn : shot.titleKo}
                                className="cs-screenshot-img"
                                loading="lazy"
                              />
                            </div>
                            <figcaption className="cs-screenshot-caption">
                              <strong className="cs-screenshot-title">
                                {lang === 'en' ? shot.titleEn : shot.titleKo}
                              </strong>
                              <p className="cs-screenshot-desc">
                                {lang === 'en' ? shot.descEn : shot.descKo}
                              </p>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}
          </div>

          {/* Bottom Project Pagination & Navigation */}
          <footer className="cs-bottom-nav">
            <div className="cs-nav-prev">
              {prevProject ? (
                <button
                  type="button"
                  className="btn-cs-nav"
                  onClick={() => {
                    onSelectProject(prevProject.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
                  onClick={() => {
                    onSelectProject(nextProject.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
