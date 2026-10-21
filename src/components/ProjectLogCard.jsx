import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectLogCard({ project, isExpanded, onToggle }) {
  const { t, lang } = useLanguage();

  return (
    <article
      className={`log-stream-card ${isExpanded ? 'is-expanded' : ''}`}
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
            style={{ color: project.tagSecondaryColor || 'var(--color-primary)' }}
          >
            {project.tagSecondary}
          </span>
          <span className="log-service-name">{project.service}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-purple"
              style={{ textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
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

      {/* Expand/Collapse Button */}
      <button
        type="button"
        className="log-expand-btn"
        onClick={onToggle}
      >
        <span>
          <i className="fas fa-magnifying-glass"></i>{' '}
          <span>
            {isExpanded
              ? t('로그 상세 페이로드 닫기', 'Collapse Log Payload')
              : t('로그 상세 페이로드 열기', 'Inspect Log Details & Payload')}
          </span>
        </span>
        <span
          className="toggle-icon"
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        >
          <i className="fas fa-chevron-down"></i>
        </span>
      </button>

      {/* Expandable Payload Drawer */}
      {isExpanded && (
        <div className="log-payload-drawer" style={{ display: 'block' }}>
          {/* CASE 1: 4 Architecture Pillars */}
          {project.isCustomPillars ? (
            <>
              <div className="pitch-banner" style={{ marginBottom: 0 }}>
                <p className="body-text">
                  {lang === 'en' ? project.pitchQuoteEn : project.pitchQuoteKo}
                </p>
              </div>

              <div className="four-topic-grid">
                {project.pillars.map((pillar) => (
                  <div key={pillar.num} className="topic-card">
                    <div className="card-title-row">
                      <h4 className="card-title">
                        {lang === 'en' ? pillar.titleEn : pillar.titleKo}
                      </h4>
                      <span
                        className={`chip ${
                          pillar.chipType === 'purple'
                            ? 'chip-purple'
                            : pillar.chipType === 'success'
                            ? 'chip-success'
                            : 'chip-info'
                        }`}
                      >
                        {pillar.chipText}
                      </span>
                    </div>
                    <div className="needs-content-box" style={{ background: '#ffffff', border: '1px solid var(--color-hairline)' }}>
                      <p className="body-text" style={{ fontSize: '14px', margin: 0, color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                        {lang === 'en' ? pillar.descEn : pillar.descKo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="log-actions-footer">
                <span className="meta-label">ARCHITECTURE PILLARS 1~4</span>
                <span className="meta-label">ID: {project.logId}</span>
              </div>
            </>
          ) : project.isCustomProfile ? (
            /* CASE 2: Engineer Profile & Skills */
            <>
              <div className="skills-grid">
                {project.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="two-col-grid">
                {project.needsContentBoxes.slice(0, 2).map((box, idx) => (
                  <div key={idx} className="needs-content-box" style={{ background: '#ffffff', border: '1px solid var(--color-hairline)' }}>
                    <div className="needs-content-header" style={{ marginBottom: '8px' }}>
                      <span className="needs-content-title" style={{ color: '#000000', fontWeight: 800 }}>
                        <i className={box.icon} style={{ color: 'var(--color-primary)' }}></i>{' '}
                        {lang === 'en' ? box.titleEn : box.titleKo}
                      </span>
                      <span className="chip chip-info">Profile</span>
                    </div>
                    <p className="body-text" style={{ fontSize: '14px', margin: 0, color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                      {lang === 'en' ? box.contentEn : box.contentKo}
                    </p>
                  </div>
                ))}
              </div>

              <div className="two-col-grid" style={{ marginTop: '12px' }}>
                {project.needsContentBoxes.slice(2, 4).map((box, idx) => (
                  <div key={idx} className="needs-content-box" style={{ background: '#ffffff', border: '1px solid var(--color-hairline)' }}>
                    <div className="needs-content-header" style={{ marginBottom: '8px' }}>
                      <span className="needs-content-title" style={{ color: '#000000', fontWeight: 800 }}>
                        <i className={box.icon} style={{ color: 'var(--color-primary)' }}></i>{' '}
                        {lang === 'en' ? box.titleEn : box.titleKo}
                      </span>
                      <span className="chip chip-info">Technical</span>
                    </div>
                    <p className="body-text" style={{ fontSize: '14px', margin: 0, color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                      {lang === 'en' ? box.contentEn : box.contentKo}
                    </p>
                  </div>
                ))}
              </div>

              <div className="log-actions-footer">
                <span className="meta-label">ENGINEER PROFILE &amp; TECH STACK</span>
                <span className="meta-label">ID: {project.logId}</span>
              </div>
            </>
          ) : (
            /* CASE 3: Standard Project Log Card */
            <>
              {/* Structured JSON Metadata Block */}
              {project.jsonPayload && (
                <div style={{ position: 'relative' }}>
                  <pre className="log-json-block">
                    <code>{JSON.stringify(project.jsonPayload, null, 2)}</code>
                  </pre>
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-utility btn-primary-accent"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        height: '32px',
                        fontSize: '12px',
                        padding: '0 12px'
                      }}
                    >
                      <i className="fas fa-file-pdf"></i> arXiv:2512.20116 열기
                    </a>
                  )}
                </div>
              )}

              {/* Problem & Resolution Incident Grid */}
              {project.incident && (
                <div className="log-incident-grid">
                  <div className="log-incident-box">
                    <span className="log-incident-title">
                      <i className="fas fa-triangle-exclamation" style={{ color: 'var(--color-semantic-down)' }}></i>
                      <span>{t('문제 정의 (Problem Incident)', 'Problem Incident')}</span>
                    </span>
                    <p className="body-text" style={{ fontSize: '14px' }}>
                      {lang === 'en' ? project.incident.problemEn : project.incident.problemKo}
                    </p>
                  </div>
                  <div className="log-incident-box">
                    <span className="log-incident-title">
                      <i className="fas fa-circle-check" style={{ color: 'var(--color-semantic-up)' }}></i>
                      <span>{t('해결 방안 (Resolution Strategy)', 'Resolution Strategy')}</span>
                    </span>
                    <p className="body-text" style={{ fontSize: '14px' }}>
                      {lang === 'en' ? project.incident.resolutionEn : project.incident.resolutionKo}
                    </p>
                  </div>
                </div>
              )}

              {/* Detailed Implementations List (Populated from contents.md) */}
              {project.details && (
                <div className="needs-content-box" style={{ background: '#ffffff', border: '1px solid var(--color-hairline)', padding: '20px' }}>
                  <div className="needs-content-header" style={{ marginBottom: '12px' }}>
                    <span className="needs-content-title" style={{ color: '#000000', fontWeight: 800 }}>
                      <i className="fas fa-cubes" style={{ color: 'var(--color-primary)' }}></i>{' '}
                      {lang === 'en' ? project.detailsTitleEn : project.detailsTitleKo}
                    </span>
                    <span className="chip chip-info">
                      {lang === 'en' ? 'Core Achievements' : '주요 수행 내용'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.details.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '3px',
                          padding: '10px 14px',
                          background: 'var(--color-surface-container)',
                          borderRadius: '8px',
                          border: '1px solid var(--color-hairline)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '13px' }}>
                            {idx + 1}.
                          </span>
                          <strong style={{ color: '#000000', fontSize: '14px', fontWeight: 700 }}>
                            {lang === 'en' ? item.titleEn : item.titleKo}
                          </strong>
                        </div>
                        <p style={{ margin: 0, color: 'var(--color-on-surface-variant)', fontSize: '13.5px', lineHeight: '1.55', paddingLeft: '20px' }}>
                          {lang === 'en' ? item.descEn : item.descKo}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons & Footer */}
              <div className="log-actions-footer">
                {project.footerLinks && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.footerLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-utility ${link.accent ? 'btn-primary-accent' : ''}`}
                        style={{ height: '38px', fontSize: '13px', textDecoration: 'none' }}
                      >
                        <i className={link.icon}></i>{' '}
                        <span>{lang === 'en' ? link.labelEn : link.labelKo}</span>
                      </a>
                    ))}
                  </div>
                )}

                {project.footerAction && (
                  <a
                    href={project.footerAction.href}
                    className="btn-utility btn-primary-accent"
                    style={{ height: '38px', fontSize: '13px', textDecoration: 'none' }}
                  >
                    <i className={project.footerAction.icon}></i>{' '}
                    <span>{lang === 'en' ? project.footerAction.labelEn : project.footerAction.labelKo}</span>
                  </a>
                )}

                {project.footerChips && (
                  <div style={{ display: 'flex', gap: '8px' }}>
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

                <span className="meta-label">ID: {project.logId}</span>
              </div>
            </>
          )}
        </div>
      )}
    </article>
  );
}
