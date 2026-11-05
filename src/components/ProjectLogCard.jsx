import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectLogCard({ project }) {
  const { t, lang } = useLanguage();

  return (
    <article
      className="log-stream-card is-expanded"
      id={project.id}
    >
      {/* Log Card Header */}
      <div className="log-card-header">
        <div className="log-header-left">
          <span className="log-ts-badge">
            <i className="fas fa-clock"></i> {project.timestamp}
          </span>
          <span className="log-tag-badge">{project.tagPrimary}</span>
          <span
            className="log-tag-badge"
            style={{ color: project.tagSecondaryColor || 'var(--color-secondary)' }}
          >
            {project.tagSecondary}
          </span>
          <span className="log-service-name">{project.service}</span>
        </div>
        <div className="log-header-right">
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-purple"
              style={{ textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              title="Open arXiv Paper in new tab"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-file-pdf"></i>
              <span>arXiv:2512.20116</span>
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
            </a>
          )}
          <span
            className={`chip ${
              project.statusChip.type === 'success'
                ? 'chip-success'
                : project.statusChip.type === 'neutral'
                ? 'chip-neutral'
                : 'chip-info'
            }`}
          >
            {lang === 'en' ? project.statusChip.textEn : project.statusChip.textKo}
          </span>
        </div>
      </div>

      {/* Log Card Summary */}
      <div className="log-card-summary">
        <h3 className="log-project-title">
          {lang === 'en' ? project.titleEn : project.titleKo}
        </h3>
        <p className="log-summary-text">
          {lang === 'en' ? project.summaryEn : project.summaryKo}
        </p>
      </div>

      {/* Full Content Payload Flow (Always Open, No Expand Button Required) */}
      <div className="log-payload-drawer">
        {/* 1. Problem Context (세로 첫 번째 단계) */}
        {project.incident && (
          <div className="payload-flow-section">
            <div className="payload-step-card problem-card">
              <div className="payload-step-header">
                <span className="payload-step-badge problem-badge">
                  <i className="fas fa-triangle-exclamation"></i>
                  <span>{t('문제 정의 및 배경 (Problem Context)', 'Problem Context & Inefficiencies')}</span>
                </span>
              </div>
              <p className="body-text payload-step-desc">
                {lang === 'en' ? project.incident.problemEn : project.incident.problemKo}
              </p>
            </div>

            {/* 2. Resolution Strategy (세로 두 번째 단계) */}
            <div className="payload-step-card resolution-card">
              <div className="payload-step-header">
                <span className="payload-step-badge resolution-badge">
                  <i className="fas fa-circle-check"></i>
                  <span>{t('해결 전략 및 구현 (Resolution & Architecture)', 'Resolution Strategy & Implementation')}</span>
                </span>
              </div>
              <p className="body-text payload-step-desc">
                {lang === 'en' ? project.incident.resolutionEn : project.incident.resolutionKo}
              </p>
            </div>
          </div>
        )}

        {/* 3. Core Implementations & Quantitative Highlights (세로 세 번째 단계) */}
        {project.details && (
          <div className="payload-details-block">
            <div className="payload-details-header">
              <div className="details-header-left">
                <i className="fas fa-cubes-stacked" style={{ color: 'var(--color-primary)' }}></i>
                <h4 className="details-heading">
                  {lang === 'en' ? project.detailsTitleEn : project.detailsTitleKo}
                </h4>
              </div>
              <span className="chip chip-neutral" style={{ fontSize: '11.5px' }}>
                {lang === 'en' ? 'Core Achievements' : '주요 수행 내역'}
              </span>
            </div>

            <div className="payload-details-list">
              {project.details.map((item, idx) => (
                <div key={idx} className="payload-detail-row">
                  <div className="detail-number-badge">
                    <span>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="detail-content">
                    <strong className="detail-title">
                      {lang === 'en' ? item.titleEn : item.titleKo}
                    </strong>
                    <p className="body-text detail-desc">
                      {lang === 'en' ? item.descEn : item.descKo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Deep Documentation Note & External Links (논문 및 GitHub MD 문서화 지향) */}
        <div className="payload-doc-footer">
          <div className="doc-notice-box">
            <i className="fas fa-circle-info"></i>
            <span>
              {t(
                '※ 정량적 벤치마크 그래프, 가설 검증 수치 및 세부 트러블슈팅 내역은 학술 논문과 Git Repo의 마크다운(README.md)에 상세히 문서화되어 있습니다.',
                '※ Quantitative benchmark graphs, hypothesis tests, and detailed troubleshooting logs are fully documented in the academic paper and Git repository README.md.'
              )}
            </span>
          </div>

          <div className="payload-action-links">
            {project.footerLinks && project.footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.accent ? 'btn-primary-accent' : 'btn-secondary-light'}
                style={{ height: '42px', padding: '0 20px', borderRadius: '100px', textDecoration: 'none' }}
              >
                <i className={link.icon}></i>
                <span>{lang === 'en' ? link.labelEn : link.labelKo}</span>
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px', opacity: 0.85 }}></i>
              </a>
            ))}

            {project.footerChips && (
              <div className="payload-footer-chips">
                {project.footerChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className={`chip ${chip.type === 'success' ? 'chip-success' : 'chip-neutral'}`}
                  >
                    {chip.textKo ? (lang === 'en' ? chip.textEn : chip.textKo) : chip.text}
                  </span>
                ))}
              </div>
            )}

            <span className="meta-label log-id-label">ID: {project.logId}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
