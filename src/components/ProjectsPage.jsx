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
            <span className="breadcrumb-current">{t('프로젝트 상세', 'Project Details')}</span>
          </div>

          <div className="projects-hero-titles">
            <h1 className="projects-main-heading">
              {t('프로젝트 상세 케이스 스터디', 'Engineering Case Studies')}
            </h1>
            <p className="projects-sub-heading">
              {t(
                '각 프로젝트별 핵심 문제 정의부터 해결 전략, 구현 과정 및 성과 분석 프레임워크입니다.',
                'Case study architecture detailing problem definitions, implementation processes, and retrospective frameworks.'
              )}
            </p>
          </div>

          {/* 2. Horizontal Project Tabs (가로 탭 내비게이션) */}
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
                  onClick={() => onSelectProject(proj.id)}
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
      </div>

      {/* 3. Main Case Study Content Container (제목만 유지, 작성된 본문 내용 삭제) */}
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

          {/* 6-Step Case Study Sections (내용 없이 제목만 남김) */}
          <div className="cs-steps-flow">
            {/* Step 1: 문제 정의 */}
            <section className="cs-step-block">
              <div className="cs-step-heading-row">
                <span className="cs-step-num">01</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag">{t('문제 정의', 'Problem Context')}</span>
                  <h3 className="cs-step-title">
                    {t('01. 문제 정의 (Problem Context)', '01. Problem Context & Bottlenecks')}
                  </h3>
                </div>
              </div>
            </section>

            {/* Step 2: 문제 인지 계기 */}
            <section className="cs-step-block">
              <div className="cs-step-heading-row">
                <span className="cs-step-num">02</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag">{t('문제 인지 계기', 'Discovery & Trigger')}</span>
                  <h3 className="cs-step-title">
                    {t('02. 문제 인지 계기 (Discovery & Trigger)', '02. Discovery & Trigger')}
                  </h3>
                </div>
              </div>
            </section>

            {/* Step 3: 접근 방식 / 의사결정 */}
            <section className="cs-step-block">
              <div className="cs-step-heading-row">
                <span className="cs-step-num">03</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag">{t('접근 전략', 'Approach & Decision Making')}</span>
                  <h3 className="cs-step-title">
                    {t('03. 접근 방식 및 의사결정 (Approach & Decisions)', '03. Approach & Decision Making')}
                  </h3>
                </div>
              </div>
            </section>

            {/* Step 4: 구현 및 해결 과정 */}
            <section className="cs-step-block">
              <div className="cs-step-heading-row">
                <span className="cs-step-num">04</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag">{t('구현 과정', 'Implementation & Process')}</span>
                  <h3 className="cs-step-title">
                    {t('04. 구현 및 해결 과정 (Implementation & Process)', '04. Implementation & Process')}
                  </h3>
                </div>
              </div>
            </section>

            {/* Step 5: 성과 */}
            <section className="cs-step-block highlight">
              <div className="cs-step-heading-row">
                <span className="cs-step-num highlight">05</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag highlight">{t('정량 성과', 'Quantitative Results')}</span>
                  <h3 className="cs-step-title">
                    {t('05. 정량적 또는 관찰 가능한 성과 (Quantitative Results)', '05. Measurable & Observable Results')}
                  </h3>
                </div>
              </div>
            </section>

            {/* Step 6: 배운 점 */}
            <section className="cs-step-block">
              <div className="cs-step-heading-row">
                <span className="cs-step-num">06</span>
                <div className="cs-step-title-wrap">
                  <span className="cs-step-tag">{t('회고 및 배운 점', 'Key Learnings & Takeaways')}</span>
                  <h3 className="cs-step-title">
                    {t('06. 배운 점 및 회고 (Key Learnings & Retrospective)', '06. Key Learnings & Retrospective')}
                  </h3>
                </div>
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
