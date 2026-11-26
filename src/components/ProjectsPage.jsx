import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import MermaidViewer from './MermaidViewer';
import MarkdownContent from './MarkdownContent';
import ProjectStory from './ProjectStory';

export default function ProjectsPage({ selectedProjectId, onSelectProject, onNavigateToOverview }) {
  const { t, lang } = useLanguage();
  const tabsRef = useRef(null);
  const [activeArchTab, setActiveArchTab] = useState(0);

  // Active project selection (old ids stay valid through `aliases`)
  const currentProject =
    CASE_STUDIES_DATA.find((p) => p.id === selectedProjectId) ||
    CASE_STUDIES_DATA.find((p) => p.aliases && p.aliases.includes(selectedProjectId)) ||
    CASE_STUDIES_DATA[0];

  // Each project starts on its first diagram tab
  useEffect(() => {
    setActiveArchTab(0);
  }, [currentProject.id]);

  const scrollToSection = (idx) => {
    const el = document.getElementById(`cs-sec-${currentProject.id}-${idx}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                '모든 프로젝트를 같은 순서로 정리했습니다. 위에서는 문제 → 해결 방향 → 데이터 · 방법 → 해결 과정 → 결과(수치)를 5단계로 먼저 보여 주고, 아래 기술 상세에서 구조와 구현을 자세히 다룹니다.',
                'Every project follows the same order: a five-step story first (problem → approach → data & methods → solution → measurable results), then a technical deep dive into architecture and implementation.'
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
                <span className="cs-category-badge">{currentProject.category}</span>
                <span className={`chip chip-${currentProject.badgeType || 'neutral'}`}>
                  {badgeText}
                </span>
                <span className="cs-period-pill">
                  <i className="far fa-calendar-alt"></i>
                  <span>{(lang === 'en' && currentProject.periodEn) || currentProject.period}</span>
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

            {currentProject.noticeKo && (
              <p className="cs-notice">
                <i className="fas fa-circle-info"></i>
                <span>{lang === 'en' ? (currentProject.noticeEn || currentProject.noticeKo) : currentProject.noticeKo}</span>
              </p>
            )}
          </header>

          {/* 5-step story: problem → approach → data & methods → solution → results */}
          <ProjectStory key={currentProject.id} story={currentProject.story} projectId={currentProject.id} />

          {/* Technical deep dive: divider + table of contents */}
          {currentProject.sections && currentProject.sections.length > 0 && (
            <div className="cs-deep-head">
              <span className="ps-eyebrow">{t('기술 상세', 'Technical Deep Dive')}</span>
              <h3 className="ps-title">{t('더 자세히 — 구조와 구현', 'In Depth — Architecture & Implementation')}</h3>
              <p className="ps-sub">
                {t(
                  '위 5단계를 실제로 어떻게 만들었는지, 구조 · 화면 · 시행착오까지 자세히 정리했습니다. 궁금한 항목으로 바로 이동할 수 있습니다.',
                  'How each of the five steps above was actually built, including architecture, screens, and trade-offs. Jump to any part below.'
                )}
              </p>
              <nav className="cs-deep-toc" aria-label={t('기술 상세 목차', 'Deep dive contents')}>
                {currentProject.sections.map((section, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="cs-deep-toc-btn"
                    onClick={() => scrollToSection(sIdx)}
                  >
                    <span className="cs-deep-toc-idx">{section.num || String(sIdx + 1).padStart(2, '0')}</span>
                    <span>
                      {lang === 'en'
                        ? (section.tocEn || section.titleEn)
                        : (section.tocKo || section.titleKo)}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Detailed Case Study Framework (Custom Sections with Large Headings) */}
          <div className="cs-steps-flow">
            {currentProject.sections &&
              currentProject.sections.map((section, sIdx) => (
                <section
                  key={`${currentProject.id}-${sIdx}`}
                  id={`cs-sec-${currentProject.id}-${sIdx}`}
                  className={`cs-step-block ${section.highlight ? 'highlight' : ''}`}
                >
                  <div className="cs-step-heading-row">
                    <span className={`cs-step-num ${section.highlight ? 'highlight' : ''}`}>
                      {section.num || String(sIdx + 1).padStart(2, '0')}
                    </span>
                    <div className="cs-step-title-wrap">
                      <h3 className="cs-step-title">
                        {lang === 'en' ? section.titleEn : section.titleKo}
                      </h3>
                    </div>
                  </div>

                  <div className={`cs-step-content-box ${section.highlight ? 'highlight' : ''}`}>
                    {section.contentKo && (
                      <MarkdownContent
                        content={lang === 'en' ? (section.contentEn || section.contentKo) : section.contentKo}
                      />
                    )}

                    {/* Architecture Flow Diagrams (Subheadings: 시스템 아키텍쳐 / 데이터 파이프라인) */}
                    {section.architectureDiagrams && (
                      <div className="cs-schema-relation-section">
                        {/* Subheading Tab Navigation */}
                        <div className="cs-schema-tab-nav">
                          {section.architectureDiagrams.map((diag, dIdx) => (
                            <button
                              key={dIdx}
                              type="button"
                              onClick={() => setActiveArchTab(dIdx)}
                              className={`cs-schema-tab-btn ${activeArchTab === dIdx ? 'is-active' : ''}`}
                            >
                              <span className="cs-schema-tab-title">
                                {lang === 'en' ? (diag.tabTitleEn || diag.titleEn) : (diag.tabTitleKo || diag.titleKo)}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Active Diagram Viewport */}
                        {(() => {
                          const activeDiag =
                            section.architectureDiagrams[activeArchTab] ||
                            section.architectureDiagrams[0];
                          return (
                            <div className="cs-architecture-diagram-block">
                              <MermaidViewer
                                chart={(lang === 'en' && activeDiag.mermaidChartEn) || activeDiag.mermaidChart}
                                title={lang === 'en' ? activeDiag.titleEn : activeDiag.titleKo}
                                defaultScale={activeDiag.defaultScale || 1.10}
                              />
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* Demo video (full width, above the screenshot gallery) */}
                    {section.video && (
                      <figure className="cs-video-card">
                        <video
                          className="cs-video"
                          src={section.video.src}
                          poster={section.video.poster}
                          controls
                          playsInline
                          preload="metadata"
                        />
                        <figcaption className="cs-screenshot-caption">
                          <strong className="cs-screenshot-title">
                            {lang === 'en' ? section.video.titleEn : section.video.titleKo}
                          </strong>
                          <p className="cs-screenshot-desc">
                            {lang === 'en' ? section.video.descEn : section.video.descKo}
                          </p>
                        </figcaption>
                      </figure>
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

          {/* Bottom Tech Stack Section (Above Navigation) */}
          {currentProject.techStack && currentProject.techStack.length > 0 && (
            <section className="cs-bottom-tech-section">
              <div className="cs-bottom-tech-header">
                <div className="cs-bottom-tech-title">
                  <i className="fas fa-layer-group"></i>
                  <span>{t('프로젝트 사용 기술 스택 (Technologies & Tools)', 'Technologies & Tools Used')}</span>
                </div>
                <span className="cs-bottom-tech-count">
                  {currentProject.techStack.length} {t('개 기술 스택', 'Technologies')}
                </span>
              </div>
              <div className="cs-bottom-tech-tags">
                {currentProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="cs-bottom-tech-pill">
                    <span className="tech-pill-index">0{tIdx + 1}</span>
                    <span className="tech-pill-name">{tech}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

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
