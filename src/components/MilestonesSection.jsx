import React from 'react';
import { MILESTONES_DATA } from '../data/milestonesData';

export default function MilestonesSection({ onNavigateToProject }) {
  return (
    <div className="band-light">
      <div className="band-inner">
        <section className="section-card" id="timeline">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-heading">Project Timeline</h2>
              <span className="chip chip-info">Timeline</span>
            </div>
            <span className="meta-label">
              Key Development &amp; Research Progress Timeline
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
                    title="View detailed project case study"
                  >
                    <div className="release-date-row">
                      <h3 className="release-date">
                        {milestone.titleEn}
                      </h3>
                      <span
                        className={`chip ${
                          milestone.chipType === 'success' ? 'chip-success' : 'chip-info'
                        }`}
                      >
                        {milestone.statusEn}
                      </span>
                    </div>

                    <p className="release-body">
                      {milestone.bodyEn}
                    </p>

                    <div className="timeline-card-footer">
                      <span className="timeline-action-cue">
                        <span>View Case Study</span>
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
