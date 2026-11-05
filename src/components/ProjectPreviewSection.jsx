import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';

export default function ProjectPreviewSection({ onSelectProject }) {
  const { t, lang } = useLanguage();

  return (
    <section className="project-preview-section" id="projects-preview">
      <div className="section-head-simple">
        <div className="section-head-title-group">
          <span className="section-label-chip">
            <i className="fas fa-folder-tree"></i>
            <span>{t('프로젝트 요약', 'Project Summary')}</span>
          </span>
          <h2 className="section-main-title">
            {t('주요 프로젝트 케이스 스터디 (Key Projects)', 'Featured Case Studies')}
          </h2>
        </div>
        <p className="section-sub-desc">
          {t(
            '반복적인 수작업 병목을 도구로 해결하고, 정량적 수치와 학술 논문으로 검증된 4개의 엔지니어링 프로젝트입니다. 카드를 클릭하면 상세 케이스 스터디 페이지로 이동합니다.',
            'Engineering case studies eliminating manual bottlenecks and validated with empirical metrics. Click any card to read the full case study.'
          )}
        </p>
      </div>

      <div className="project-preview-grid">
        {CASE_STUDIES_DATA.map((project, idx) => {
          const title = lang === 'en' ? project.titleEn : project.titleKo;
          const oneLiner = lang === 'en' ? project.oneLinerEn : project.oneLinerKo;
          const role = lang === 'en' ? project.roleEn : project.roleKo;
          const badgeText = lang === 'en' ? project.badgeTextEn : project.badgeTextKo;
          const primaryMetric = project.keyMetrics && project.keyMetrics[0];

          return (
            <div
              key={project.id}
              className="preview-card"
              onClick={() => onSelectProject && onSelectProject(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectProject && onSelectProject(project.id);
                }
              }}
            >
              {/* Card Top: Index, Category & Badge */}
              <div className="preview-card-header">
                <div className="preview-idx-badge">
                  <span>0{idx + 1}</span>
                </div>
                <div className="preview-badges">
                  <span className="preview-category-tag">{project.category}</span>
                  <span className={`chip chip-${project.badgeType || 'neutral'}`}>
                    {badgeText}
                  </span>
                </div>
              </div>

              {/* Title & One-Liner */}
              <div className="preview-card-body">
                <h3 className="preview-card-title">{title}</h3>
                <p className="preview-card-desc">{oneLiner}</p>
              </div>

              {/* Context / Role */}
              <div className="preview-context-row">
                <i className="fas fa-user-gear"></i>
                <span className="preview-role-text">{role}</span>
              </div>

              {/* Highlight Metric Pill & Action */}
              <div className="preview-card-footer">
                {primaryMetric && (
                  <div className="preview-metric-pill">
                    <span className="preview-metric-label">
                      {lang === 'en' ? primaryMetric.labelEn : primaryMetric.labelKo}:
                    </span>
                    <strong className="preview-metric-val">
                      {lang === 'en' ? primaryMetric.valueEn : primaryMetric.valueKo}
                    </strong>
                  </div>
                )}
                <span className="preview-action-btn">
                  <span>{t('자세히 보기', 'View Case Study')}</span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
