import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getVisitorSequence } from '../utils/visitorCounter';

export default function HeroSection({ onOpenTerminal, onNavigateToProjects, onNavigateToHistory }) {
  const { t, lang } = useLanguage();
  const visitorNum = getVisitorSequence();

  // Compressed Tech Stack (Technical Skills)
  const skills = [
    {
      name: 'Python',
      tag: 'Pipeline & Automation'
    },
    {
      name: 'React & Vite',
      tag: 'Frontend UI'
    },
    {
      name: 'JavaScript / TypeScript',
      tag: 'Client Engine'
    },
    {
      name: 'Data & NLP (RoBERTa & SNA)',
      tag: 'Analysis & Modeling'
    },
    {
      name: 'QA & Test Automation',
      tag: 'Test Tooling'
    },
    {
      name: 'UDP & Telemetry Systems',
      tag: 'Real-Time Data'
    }
  ];

  // Engineering Core Philosophy Bullets (Section 3.4 of edit.MD)
  const philosophies = [
    {
      principleKo: "본질적 질문에서 시작",
      principleEn: "First-Principles Inquiry",
      descKo: "당연한 것을 당연하게 여기지 않고, '왜?'라는 본질적 질문에서 모든 문제 해결을 시작합니다.",
      descEn: "Questioning what others take for granted; every solution begins with asking 'Why?' from first principles."
    },
    {
      principleKo: "수작업 병목의 도구화",
      principleEn: "Tooling Inefficiencies",
      descKo: "반복적인 수작업 병목과 비효율을 포착하면, 주저하지 않고 원클릭 자동화 도구를 직접 기획하고 구현합니다.",
      descEn: "Proactively architecting custom automation tools whenever manual bottlenecks and systemic friction arise."
    },
    {
      principleKo: "데이터 기반의 신뢰성 검증",
      principleEn: "Empirical Reliability",
      descKo: "주관적 직관에 의존하지 않고, 정량적 수치와 학술 논문 등재 수준의 엄격한 가설 검증으로 신뢰성을 확보합니다.",
      descEn: "Relying on empirical telemetry, quantitative metrics, and rigorous hypothesis testing rather than intuition."
    },
    {
      principleKo: "지속 가능한 시스템 구축",
      principleEn: "Sustainable Systems",
      descKo: "일회성 임시 해결에 그치지 않고, 자동 검증 엔진과 모듈화된 아키텍처로 팀 전체의 지속성을 높입니다.",
      descEn: "Building maintainable, repeatable systems through automated validation engines and modular architectures."
    }
  ];

  // Verified Professional Certifications & Qualifications (국가공인 자격 및 전문성 검증)
  const certifications = [
    {
      nameKo: '정보처리기사',
      nameEn: 'Engineer Information Processing',
      date: '2026.12',
      issuerKo: '한국산업인력공단 (Q-Net)',
      issuerEn: 'Human Resources Development Service of Korea',
      category: '국가기술자격',
      icon: 'fas fa-laptop-code'
    },
    {
      nameKo: '빅데이터분석기사',
      nameEn: 'Engineer Big Data Analytics',
      date: '2025.07',
      issuerKo: '한국데이터산업진흥원 (K-DATA)',
      issuerEn: 'Korea Data Agency',
      category: '국가기술자격',
      icon: 'fas fa-chart-line'
    },
    {
      nameKo: 'ADsP (데이터분석 준전문가)',
      nameEn: 'Advanced Data Analytics Semi-Professional',
      date: '2025.06',
      issuerKo: '한국데이터산업진흥원 (K-DATA)',
      issuerEn: 'Korea Data Agency',
      category: '국가공인 민간자격',
      icon: 'fas fa-database'
    },
    {
      nameKo: 'SQLD (SQL 개발자)',
      nameEn: 'SQL Developer',
      date: '2025.04',
      issuerKo: '한국데이터산업진흥원 (K-DATA)',
      issuerEn: 'Korea Data Agency',
      category: '국가공인 민간자격',
      icon: 'fas fa-server'
    }
  ];

  return (
    <div className="band-hero-light">
      <div className="band-inner">
        <section className="hero-log-window" id="summary">
          {/* 1. Terminal Window Header Bar (Clean Minimal) */}
          <div className="hero-log-header">
            <div className="hero-header-left">
              <div className="hero-window-dots">
                <span className="term-dot term-dot-red"></span>
                <span className="term-dot term-dot-yellow"></span>
                <span className="term-dot term-dot-green"></span>
              </div>
              <div className="hero-header-title">
                <i className="fas fa-terminal"></i>
                <span className="hero-header-file">system_status.log</span>
                <span className="hero-header-tag">PRODUCTION</span>
              </div>
            </div>
            <div className="hero-header-right">
              <span className="visitor-badge">
                <i className="fas fa-user-check"></i>
                <span>{t(`Visitor #${visitorNum}`, `Visitor #${visitorNum}`)}</span>
              </span>
              <span className="live-status-pill">
                <span className="live-dot"></span>
                <span>ONLINE</span>
              </span>
              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="btn-hero-pit-trigger"
                  title={t('F1 피트스탑 & 텔레메트리 콘솔 열기', 'Open F1 Pit Wall & Telemetry Console')}
                >
                  <i className="fas fa-gauge-high"></i>
                  <span>Pit Wall</span>
                </button>
              )}
            </div>
          </div>

          {/* 2. Hero Body: Crisp Bio & Quick Jump Action Bar */}
          <div className="hero-compact-body">
            {/* Bio & Intro Headline */}
            <div className="hero-intro-row">
              <div className="hero-intro-content">
                <div className="hero-identity-tag">
                  <i className="fas fa-code-commit"></i>
                  <span>{t('문제 해결사 & 자동화 도구 개발자', 'Problem Solver & Automation Tool Builder')}</span>
                </div>
                <h1 className="hero-main-title">
                  {t('장자훈 (Jahoon Jang)', 'Jahoon Jang — hope77')}
                </h1>
                <p className="hero-concise-desc">
                  {t(
                    "당연한 것을 당연하게 여기지 않고 시스템의 숨은 비효율을 포착하여 직접 도구를 만들어 해결합니다. 현장의 수작업 병목을 해소하는 자동화 파이프라인 구축부터 음성 및 인게임 로그 싱크 분석 연구(arXiv:2512.20116)까지, 데이터와 정량적 수치로 가치를 증명하는 엔지니어입니다.",
                    "A problem solver who questions standard assumptions, builds custom tools to eliminate manual bottlenecks, and validates impact with empirical metrics and published research (arXiv:2512.20116)."
                  )}
                </p>

                {/* Contact & Links Bar */}
                <div className="hero-contact-row">
                  <span className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>bijabi99@gmail.com</span>
                  </span>
                  <a
                    href="https://github.com/hope77-githhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item link"
                  >
                    <i className="fab fa-github"></i>
                    <span>github.com/hope77-githhub</span>
                  </a>
                  <span className="contact-item purple">
                    <i className="fas fa-file-pdf"></i>
                    <span>arXiv:2512.20116</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons to Jump */}
              <div className="hero-quick-actions">
                <button
                  type="button"
                  className="btn-hero-primary"
                  onClick={onNavigateToProjects}
                >
                  <span>{t('프로젝트 상세 보기', 'Explore Case Studies')}</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button
                  type="button"
                  className="btn-hero-secondary"
                  onClick={onNavigateToHistory}
                >
                  <span>{t('경력 / 연구 이력 확인', 'Career & Research')}</span>
                  <i className="fas fa-arrow-down"></i>
                </button>
              </div>
            </div>

            {/* 3. Two-Column Compact Grid: Tech Stack & Philosophy */}
            <div className="hero-compact-grid">
              {/* Column 1: Compressed Tech Stack */}
              <div className="compact-card tech-stack-compact">
                <div className="compact-card-header">
                  <div className="compact-header-left">
                    <i className="fas fa-layer-group"></i>
                    <h3>{t('핵심 기술 스택 (Technical Skills)', 'Technical Skills')}</h3>
                  </div>
                  <span className="compact-count-badge">6 Core</span>
                </div>
                <div className="compact-skills-list">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="compact-skill-item">
                      <strong className="skill-item-name">{skill.name}</strong>
                      <span className="skill-item-tag">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Engineering Profile & Philosophy */}
              <div className="compact-card profile-compact">
                <div className="compact-card-header">
                  <div className="compact-header-left">
                    <i className="fas fa-compass"></i>
                    <h3>{t('엔지니어링 철학 & 핵심 가치 (Philosophy)', 'Engineering Philosophy')}</h3>
                  </div>
                  <span className="compact-count-badge">Principles</span>
                </div>

                <div className="compact-profile-summary">
                  <p className="profile-summary-text">
                    {t(
                      "불필요한 반복과 수동 개입을 기술로 제거하여 팀 전체의 생산성을 극대화합니다. 복잡한 문제를 단순한 원클릭 도구로 구조화하고, 모든 개선 결과를 측정 가능한 숫자로 입증합니다.",
                      "Dedicated to eliminating manual bottlenecks to maximize team productivity. Structuring complex issues into frictionless 1-click tools and backing every improvement with empirical numbers."
                    )}
                  </p>
                </div>

                <div className="compact-philosophy-list">
                  {philosophies.map((item, idx) => (
                    <div key={idx} className="compact-philosophy-item">
                      <div className="philosophy-bullet-dot"></div>
                      <div className="philosophy-content">
                        <strong className="philosophy-title">
                          {lang === 'en' ? item.principleEn : item.principleKo}
                        </strong>
                        <p className="philosophy-desc">
                          {lang === 'en' ? item.descEn : item.descKo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Professional Certifications & Qualifications Bar */}
            <div className="hero-credentials-wrapper">
              <div className="compact-card credentials-compact-card">
                <div className="compact-card-header">
                  <div className="compact-header-left">
                    <i className="fas fa-certificate"></i>
                    <h3>{t('공인 자격증 및 전문성 검증 (Certifications & Qualifications)', 'Professional Certifications')}</h3>
                  </div>
                  <span className="compact-count-badge">4 Certified</span>
                </div>
                <div className="credentials-grid-row">
                  {certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="credential-pill-card">
                      <div className="cert-card-top">
                        <div className="cert-icon-box">
                          <i className={cert.icon}></i>
                        </div>
                        <span className="cert-category-chip">{cert.category}</span>
                      </div>
                      <div className="cert-details">
                        {/* 1. 자격증이름 */}
                        <strong className="cert-title-name">
                          {lang === 'en' ? cert.nameEn : cert.nameKo}
                        </strong>
                        {/* 2. 취득날짜 */}
                        <div className="cert-date-row">
                          <span className="cert-date-chip">
                            <i className="far fa-calendar-check"></i> {cert.date}
                          </span>
                        </div>
                        {/* 3. 발급기관 */}
                        <span className="cert-issuer-badge">
                          {lang === 'en' ? cert.issuerEn : cert.issuerKo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
