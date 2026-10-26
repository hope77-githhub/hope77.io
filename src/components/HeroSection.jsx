import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getVisitorSequence } from '../utils/visitorCounter';

export default function HeroSection({ onOpenTerminal, onNavigateToProjects, onNavigateToHistory }) {
  const { t, lang } = useLanguage();
  const visitorNum = getVisitorSequence();

  // Compressed Tech Stack as requested in Section 2 & 2.3 of edit.MD
  const skills = [
    {
      name: 'Python',
      tag: 'Pipeline & Automation',
      scopeKo: '대규모 데이터 수집 파이프라인 및 백엔드 자동화 도구 개발',
      scopeEn: 'High-throughput data ingestion pipelines and backend automation tooling'
    },
    {
      name: 'React & Vite',
      tag: 'Frontend & Reactive UI',
      scopeKo: '데이터 중심 반응형 웹 대시보드 및 인터랙티브 시각화 뷰어 구현',
      scopeEn: 'Data-driven reactive web dashboards and interactive timeline visualizers'
    },
    {
      name: 'JavaScript / TypeScript',
      tag: 'Client Engine',
      scopeKo: '100% 브라우저 인메모리(SheetJS) 파서 및 클라이언트 샌드박스 로직 구축',
      scopeEn: '100% browser in-memory parser and zero-server sandbox client logic'
    },
    {
      name: 'Data & NLP (RoBERTa & SNA)',
      tag: 'Modeling & Research',
      scopeKo: '언어 모델 기반 발화 의도/감성 분류 및 동적 SNA 네트워크 그래프 모델링',
      scopeEn: 'NLP intent/sentiment classification and dynamic SNA graph statistical modeling'
    },
    {
      name: 'QA & Test Automation',
      tag: 'Tooling & CI/CD',
      scopeKo: '스키마 기반 자동 검증 엔진 및 원클릭 영상-로그 대조 파이프라인 구축',
      scopeEn: 'Schema-based automated validation engines and 1-click video-log sync pipelines'
    },
    {
      name: 'UDP & Telemetry Systems',
      tag: 'Real-Time Ingestion',
      scopeKo: '60Hz 고주파 UDP 소켓 패킷 파싱 및 원형 링 버퍼 초저지연 인덱싱',
      scopeEn: '60Hz high-frequency UDP socket parsing and low-latency circular ring buffers'
    }
  ];

  // Engineering Core Philosophy Bullets (3~5 bullets as requested in Section 3.4 of edit.MD)
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
                <span>identity.hope77.init()</span>
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
                    "당연한 것을 당연하게 여기지 않고 시스템의 숨은 비효율을 포착하여 직접 도구를 만들어 해결합니다. 현장의 수작업 병목을 해소하는 자동화 파이프라인 구축부터 멀티모달 데이터 정합 연구(arXiv:2512.20116)까지, 데이터와 정량적 수치로 가치를 증명하는 엔지니어입니다.",
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
                  <a
                    href="https://arxiv.org/abs/2512.20116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item link purple"
                  >
                    <i className="fas fa-file-pdf"></i>
                    <span>arXiv:2512.20116</span>
                  </a>
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

            {/* 3. Two-Column Compact Grid: Tech Stack & Philosophy (Section 2 & 3 of edit.MD) */}
            <div className="hero-compact-grid">
              {/* Column 1: Compressed Tech Stack (간소화된 기술 스택) */}
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
                      <div className="skill-item-top">
                        <strong className="skill-item-name">{skill.name}</strong>
                        <span className="skill-item-tag">{skill.tag}</span>
                      </div>
                      <p className="skill-item-scope">
                        {lang === 'en' ? skill.scopeEn : skill.scopeKo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Engineering Profile & Philosophy (프로필 & 핵심 가치) */}
              <div className="compact-card profile-compact">
                <div className="compact-card-header">
                  <div className="compact-header-left">
                    <i className="fas fa-compass"></i>
                    <h3>{t('엔지니어링 철학 & 핵심 가치 (Philosophy)', 'Engineering Philosophy')}</h3>
                  </div>
                  <span className="compact-count-badge">Principles</span>
                </div>

                {/* Short Profile Statement (2~4 sentences) */}
                <div className="compact-profile-summary">
                  <p className="profile-summary-text">
                    {t(
                      "불필요한 반복과 수동 개입을 기술로 제거하여 팀 전체의 생산성을 극대화합니다. 복잡한 문제를 단순한 원클릭 도구로 구조화하고, 모든 개선 결과를 측정 가능한 숫자로 입증합니다.",
                      "Dedicated to eliminating manual bottlenecks to maximize team productivity. Structuring complex issues into frictionless 1-click tools and backing every improvement with empirical numbers."
                    )}
                  </p>
                </div>

                {/* 4 Core Philosophy Bullets */}
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

          </div>
        </section>
      </div>
    </div>
  );
}
