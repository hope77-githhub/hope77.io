import React from 'react';
import { MILESTONES_DATA } from '../data/milestonesData';
import { useLanguage } from '../context/LanguageContext';

export default function MilestonesSection() {
  const { t, lang } = useLanguage();

  return (
    <div className="band-light">
      <div className="band-inner">
        <section className="section-card" id="milestones">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">Project &amp; Research Milestones</h2>
              <span className="chip chip-purple">Timeline</span>
            </div>
            <span className="meta-label">
              {t('주요 개발 및 연구 이력', 'Key Development & Research History')}
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
                  <div className="release-date-row">
                    <span className="release-date">
                      {lang === 'en' ? milestone.titleEn : milestone.titleKo}
                    </span>
                    <span
                      className={`chip ${
                        milestone.chipType === 'success' ? 'chip-success' : 'chip-info'
                      }`}
                    >
                      {lang === 'en' ? milestone.statusEn : milestone.statusKo}
                    </span>
                  </div>
                  <div className="release-body">
                    {lang === 'en' ? milestone.bodyEn : milestone.bodyKo}
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
