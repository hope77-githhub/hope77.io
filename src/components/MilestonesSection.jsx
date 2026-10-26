import React from 'react';
import { MILESTONES_DATA } from '../data/milestonesData';
import { useLanguage } from '../context/LanguageContext';

export default function MilestonesSection({ onNavigateToProject }) {
  const { t, lang } = useLanguage();

  return (
    <div className="band-light">
      <div className="band-inner">
        <section className="section-card" id="timeline">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">
                {t('프로젝트 타임라인 (Project Timeline)', 'Project Timeline')}
              </h2>
              <span className="chip chip-info">Timeline</span>
            </div>
            <span className="meta-label">
              {t('주요 개발 및 연구 진행 타임라인 (카드 클릭 시 상세 이동)', 'Key Development & Research Progress Timeline (Click for details)')}
            </span>
          </div>

          <div className="release-timeline">
            {MILESTONES_DATA.map((milestone) => (
              <div key={milestone.id} className="release-row">
                <div className="marker-lane">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="content-lane">
                  <div
                    className="timeline-interactive-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => onNavigateToProject && onNavigateToProject(milestone.projectId)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        onNavigateToProject && onNavigateToProject(milestone.projectId);
                      }
                    }}
                    title={t('프로젝트 상세 케이스 스터디로 이동', 'View detailed project case study')}
                  >
                    <div className="release-date-row">
                      <h3 className="release-date">
                        {lang === 'en' ? milestone.titleEn : milestone.titleKo}
                      </h3>
                      <span
                        className={`chip ${
                          milestone.chipType === 'success' ? 'chip-success' : 'chip-info'
                        }`}
                      >
                        {lang === 'en' ? milestone.statusEn : milestone.statusKo}
                      </span>
                    </div>

                    <p className="release-body">
                      {lang === 'en' ? milestone.bodyEn : milestone.bodyKo}
                    </p>

                    <div className="timeline-card-footer">
                      <span className="timeline-action-cue">
                        <span>{t('프로젝트 상세 보기', 'View Case Study')}</span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
