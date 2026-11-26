import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { renderInline } from './MarkdownContent';

/**
 * 5-step project story shown at the top of every case study.
 *
 *   1. problem   — 무엇이 문제였는지
 *   2. approach  — 어떻게 해결하려 했는지
 *   3. method    — 어떤 데이터 · 방법론을 썼는지
 *   4. solution  — 실제로 어떻게 해결했는지
 *   5. result    — 결과는 어땠는지 (수치)
 *
 * Each step leads with one bold headline so that reading only the five
 * headlines already tells the whole story; details follow underneath.
 */
const STEP_META = [
  {
    key: 'problem',
    labelKo: '문제',
    labelEn: 'Problem',
    questionKo: '무엇이 문제였나요?',
    questionEn: 'What was the problem?'
  },
  {
    key: 'approach',
    labelKo: '해결 방향',
    labelEn: 'Approach',
    questionKo: '어떻게 해결하려고 했나요?',
    questionEn: 'How did I plan to solve it?'
  },
  {
    key: 'method',
    labelKo: '데이터 · 방법',
    labelEn: 'Data & Methods',
    questionKo: '어떤 데이터와 방법을 썼나요?',
    questionEn: 'What data and methods did I use?'
  },
  {
    key: 'solution',
    labelKo: '해결 과정',
    labelEn: 'Solution',
    questionKo: '실제로 어떻게 해결했나요?',
    questionEn: 'How did I actually solve it?'
  },
  {
    key: 'result',
    labelKo: '결과',
    labelEn: 'Results',
    questionKo: '결과는 어땠나요?',
    questionEn: 'What were the results?'
  }
];

export default function ProjectStory({ story, projectId }) {
  const { t, lang } = useLanguage();
  if (!story) return null;

  const pick = (obj, base) => {
    if (!obj) return undefined;
    if (lang === 'en') return obj[`${base}En`] ?? obj[`${base}Ko`];
    return obj[`${base}Ko`];
  };

  const scrollToStep = (key) => {
    const el = document.getElementById(`ps-step-${projectId}-${key}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const steps = STEP_META.filter((meta) => story[meta.key]);

  return (
    <section className="ps-section" aria-labelledby={`ps-heading-${projectId}`}>
      <header className="ps-head">
        <span className="ps-eyebrow">{t('프로젝트 스토리', 'Project Story')}</span>
        <h3 id={`ps-heading-${projectId}`} className="ps-title">
          {t('한눈에 보는 문제 해결 과정', 'The Project at a Glance')}
        </h3>
        <p className="ps-sub">
          {t(
            '굵은 문장만 이어 읽어도 프로젝트 전체를 이해할 수 있게 정리했습니다. 구현 방식과 화면은 아래 기술 상세에서 다룹니다.',
            'Reading just the bold sentences gives you the whole project. Implementation details and screens follow in the technical deep dive below.'
          )}
        </p>
        <ol className="ps-stepper" aria-label={t('스토리 단계', 'Story steps')}>
          {steps.map((meta, idx) => (
            <li key={meta.key} className="ps-stepper-item">
              <button
                type="button"
                className="ps-stepper-btn"
                onClick={() => scrollToStep(meta.key)}
              >
                <span className="ps-stepper-idx">{idx + 1}</span>
                <span>{lang === 'en' ? meta.labelEn : meta.labelKo}</span>
              </button>
            </li>
          ))}
        </ol>
      </header>

      <ol className="ps-steps">
        {steps.map((meta, idx) => {
          const step = story[meta.key];
          const headline = pick(step, 'headline');
          const points = pick(step, 'points');
          const data = step.data;
          const methods = step.methods;
          const flow = step.flow;
          const metrics = step.metrics;

          return (
            <li
              key={meta.key}
              className={`ps-step ps-step--${meta.key}`}
              id={`ps-step-${projectId}-${meta.key}`}
            >
              <div className="ps-rail" aria-hidden="true">
                <span className="ps-num">{idx + 1}</span>
              </div>

              <div className="ps-card">
                <div className="ps-step-label">
                  <span className="ps-step-name">{lang === 'en' ? meta.labelEn : meta.labelKo}</span>
                  <span className="ps-step-q">{lang === 'en' ? meta.questionEn : meta.questionKo}</span>
                </div>

                {headline && <p className="ps-headline">{renderInline(headline)}</p>}

                {/* Step 3 — data & methods side by side */}
                {(data || methods) && (
                  <div className="ps-method-grid">
                    {data && (
                      <div className="ps-method-col">
                        <h4 className="ps-method-title">
                          <i className="fas fa-database"></i>
                          <span>{t('사용한 데이터', 'Data used')}</span>
                        </h4>
                        <ul className="ps-method-list">
                          {data.map((item, dIdx) => (
                            <li key={dIdx}>
                              <span className="ps-method-name">{pick(item, 'name')}</span>
                              <span className="ps-method-desc">{renderInline(pick(item, 'desc'))}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {methods && (
                      <div className="ps-method-col">
                        <h4 className="ps-method-title">
                          <i className="fas fa-gears"></i>
                          <span>{t('사용한 방법', 'Methods used')}</span>
                        </h4>
                        <ul className="ps-method-list">
                          {methods.map((item, mIdx) => (
                            <li key={mIdx}>
                              <span className="ps-method-name">{pick(item, 'name')}</span>
                              <span className="ps-method-desc">{renderInline(pick(item, 'desc'))}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4 — how it works, as an ordered flow */}
                {flow && (
                  <ol className="ps-flow" aria-label={t('처리 흐름', 'Process flow')}>
                    {flow.map((item, fIdx) => (
                      <li key={fIdx} className="ps-flow-item">
                        <span className="ps-flow-idx">{fIdx + 1}</span>
                        <span className="ps-flow-text">{pick(item, 'title')}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {/* Step 5 — numbers first */}
                {metrics && (
                  <div className="ps-metrics">
                    {metrics.map((m, mIdx) => (
                      <div key={mIdx} className="ps-metric">
                        <div className="ps-metric-value">{pick(m, 'value')}</div>
                        <div className="ps-metric-label">{pick(m, 'label')}</div>
                        {pick(m, 'note') && <div className="ps-metric-note">{pick(m, 'note')}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {points && points.length > 0 && (
                  <ul className="ps-points">
                    {points.map((p, pIdx) => (
                      <li key={pIdx}>{renderInline(p)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
