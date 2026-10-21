import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const skills = [
    { icon: 'fab fa-html5', name: 'HTML / CSS' },
    { icon: 'fab fa-js', name: 'JavaScript (ES6+)' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-chart-line', name: 'Data Analysis & NLP' },
    { icon: 'fas fa-robot', name: 'QA & Test Automation' },
    { icon: 'fas fa-network-wired', name: 'UDP Telemetry & SNA' }
  ];

  const profileBlocks = [
    {
      titleKo: '배경 및 엔지니어링 가치관',
      titleEn: 'Background & Core Values',
      icon: 'fas fa-user-pen',
      badgeText: 'Philosophy',
      descKo: "당연한 것을 당연하게 여기지 않고 '왜?'라는 질문을 던지며 시스템의 비효율을 개선합니다. 데이터 분석과 커스텀 자동화 도구를 직접 개발하여 반복 수작업을 제거하고, 팀 전체의 생산성과 신뢰성을 비약적으로 높이는 엔지니어링을 지향합니다.",
      descEn: "I question what others take for granted and continually seek efficient solutions. I proactively build custom automation tools to eliminate bottlenecks, backed by empirical data and verified research."
    },
    {
      titleKo: '효율성 개선 및 도구 개발 대표 사례',
      titleEn: 'Key Efficiency & Tooling Episodes',
      icon: 'fas fa-lightbulb',
      badgeText: 'Action',
      descKo: '신규 프로젝트 QA의 반복 수동 검증 문제를 해결하기 위해 원클릭 영상-로그 동기화 파이프라인 및 Jira 티켓 자동 매핑 도구를 개발했으며, 교사들의 행정 편의를 위해 100% 브라우저 클라이언트 기반 나이스 글자수/중복 문장 탐지 도구를 배포했습니다.',
      descEn: 'Engineered a one-click video-log sync tool and Jira mapping system to cut QA overhead, and built a client-side NEIS byte counter and duplicate detector for teachers.'
    },
    {
      titleKo: '세부 기술 스택 및 프레임워크',
      titleEn: 'Frameworks & Technical Stack',
      icon: 'fas fa-layer-group',
      badgeText: 'Stack',
      descKo: 'Python, JavaScript (ES6+), React (JSX), Node.js, Vite, SheetJS (XLSX), RoBERTa / NLP 모델링, NetworkX (동적 SNA 그래프), UDP Socket 실시간 텔레메트리, REST / Client API 연동, Git & GitHub Actions CI/CD',
      descEn: 'Python, JavaScript (ES6+), React (JSX), Node.js, Vite, SheetJS (XLSX), RoBERTa / NLP, NetworkX (SNA Graph), UDP Socket Telemetry, REST / Client API, Git & GitHub Actions'
    },
    {
      titleKo: '데이터 분석 및 엔지니어링 상세 역량',
      titleEn: 'Data Analytics & Engineering Capabilities',
      icon: 'fas fa-database',
      badgeText: 'Data',
      descKo: '대규모 게임 이벤트 로그 및 고주파(60Hz) UDP 텔레메트리 패킷 인덱싱, 멀티모달 타임스탬프 동기화(보간법), RoBERTa 기반 감성/의도 분류, 동적 소셜 네트워크 분석(SNA), 통계적 가설 검증 및 학술 논문(arXiv) 공식 등재',
      descEn: 'High-frequency telemetry ingestion, multimodal timestamp interpolation, RoBERTa sentiment/intent mapping, dynamic SNA graphs, and academic research publication.'
    }
  ];

  return (
    <div className="band-hero-racing">
      <div className="band-inner">
        <section className="hero-log-window" id="summary">
          {/* Terminal Window Header Bar */}
          <div className="hero-log-header">
            <div className="hero-header-left">
              <div className="hero-window-dots">
                <span className="term-dot term-dot-red"></span>
                <span className="term-dot term-dot-yellow"></span>
                <span className="term-dot term-dot-green"></span>
              </div>
              <div className="hero-header-title">
                <i className="fas fa-terminal"></i>
                <span>node:seoul-dc-01 // identity.hope77.init()</span>
                <span className="hero-header-tag">RUNTIME: PRODUCTION</span>
              </div>
            </div>
            <div className="hero-header-right">
              <span className="live-dot"></span>
              <span>NODE ONLINE (200 OK)</span>
            </div>
          </div>

          {/* Metadata Substrip */}
          <div className="hero-log-substrip">
            <div className="hero-meta-items">
              <span><span className="hero-meta-key">SERVICE:</span> hope77.portfolio</span>
              <span><span className="hero-meta-key">ENGINEER:</span> 장자훈 (Jahoon Jang)</span>
              <span><span className="hero-meta-key">ROLE:</span> Problem Solver &amp; Tool Builder</span>
              <span><span className="hero-meta-key">BUFFER:</span> 65,536 slots</span>
            </div>
            <div>
              <span>UPTIME: <strong style={{ color: 'var(--color-semantic-up)' }}>99.99%</strong></span>
            </div>
          </div>

          {/* Main Body inside Terminal */}
          <div className="hero-log-body">
            <div className="summary-grid">
              {/* Left Column: Bio & Core Pitch */}
              <div className="summary-main">
                <div className="hero-prompt-line">
                  <span>hope77@kernel:~$</span>
                  <span>cat /etc/identity/profile.log</span>
                  <span className="prompt-cursor"></span>
                </div>

                <div className="summary-chips">
                  <span className="chip chip-secondary">
                    <i className="fas fa-stream"></i> Data &amp; Log Pipeline
                  </span>
                  <span className="chip chip-purple">
                    <i className="fas fa-book-open"></i> arXiv Research (2512.20116)
                  </span>
                  <span className="chip chip-success">
                    <i className="fas fa-hammer"></i> Automation Tool Builder
                  </span>
                </div>

                <div className="hero-text-block">
                  <h1
                    className="page-heading"
                    style={{ marginBottom: '16px', fontSize: 'clamp(32px, 4vw, 20px)' }}
                  >
                    {t(
                      "반복업무 자동화 업무 & 효율화 도구 개발자",
                      "Jahoon's Log — Problem Solver & Tool Builder."
                    )}
                  </h1>
                  <p className="body-text">
                    {t(
                      "당연한 것을 당연하지 않게 바라보며, 언제나 끊임없이 효율적으로 문제를 해결할 수 있는 방법을 고민하는 문제 해결사입니다. 도구를 개발하여 일의 효율성을 높일 수 있다면 주저하지 않고 아이디어를 제시하고 직접 구현하며, 데이터 분석과 논문 집필을 통해 검증된 인사이트를 도출합니다.",
                      "I am a problem solver who questions what others take for granted and constantly seeks the most efficient ways to solve complex problems. Whenever a custom tool can boost workflow efficiency, I proactively propose ideas and build solutions—backed by telemetry data analysis and academic research."
                    )}
                  </p>
                </div>

                <div className="summary-owner-bar" style={{ borderTop: 'none', paddingTop: 0 }}>
                  <span className="meta-label">
                    <i className="fas fa-user"></i> {t('장자훈 (hope77)', 'Jahoon Jang (hope77)')}
                  </span>
                  <span className="meta-label">
                    <i className="fas fa-envelope"></i> bijabi99@gmail.com
                  </span>
                  <a
                    href="https://github.com/hope77-githhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-label"
                    style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    <i className="fab fa-github"></i> github.com/hope77-githhub
                  </a>
                </div>
              </div>

              {/* Right Column: Telemetry HUD Card */}
              <div className="summary-profile-box">
                <div className="card-title-row" style={{ alignItems: 'center' }}>
                  <span className="meta-label">TELEMETRY HUD</span>
                  <span
                    className="chip chip-info"
                    style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
                  >
                    NODE ACTIVE
                  </span>
                </div>

                <div className="profile-stat-list">
                  <div className="profile-stat-item">
                    <span>{t('업무 효율화 & 자동화 도구 개발', 'Workflow Efficiency & Tooling')}</span>
                    <span className="chip chip-success">Core</span>
                  </div>
                  <div className="profile-stat-item">
                    <span>{t('데이터 분석 & 학술 논문 (arXiv)', 'Data Analysis & arXiv Paper')}</span>
                    <span className="chip chip-purple">Verified</span>
                  </div>
                  <div className="profile-stat-item">
                    <span>{t('관심 도메인 (F1 베르스타펜 & 축구)', 'Domains (F1 Verstappen & Football)')}</span>
                    <span className="chip chip-secondary">Passion</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '8px'
                  }}
                >
                  <span className="meta-label" style={{ fontSize: '12px' }}>Quick Jump</span>
                  <a
                    href="#project-logs-section"
                    className="btn-utility btn-primary-accent"
                    style={{ height: '40px', padding: '0 18px', fontSize: '14px', textDecoration: 'none' }}
                  >
                    {t('프로젝트 로그 보기', 'Explore Project Logs')}
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Section: Core Skills Grid */}
            <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--color-hairline)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-code" style={{ color: 'var(--color-primary)' }}></i>
                  {t('보유 기술 스택 (Technical Skills)', 'Technical Skills')}
                </span>
                <span className="meta-label" style={{ fontSize: '12px' }}>6 Core Competencies</span>
              </div>
              <div className="skills-grid" style={{ marginBottom: '28px' }}>
                {skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section: 4 About Me & Engineering Philosophy Cards */}
            <div style={{ paddingTop: '24px', borderTop: '1px solid var(--color-hairline)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#000000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-id-card" style={{ color: 'var(--color-primary)' }}></i>
                  {t('엔지니어 프로필 & 철학 (About Me)', 'About Me & Engineering Philosophy')}
                </span>
                <span className="chip chip-info">Engineer Identity</span>
              </div>
              <div className="two-col-grid" style={{ gap: '16px' }}>
                {profileBlocks.map((block, idx) => (
                  <div
                    key={idx}
                    className="needs-content-box"
                    style={{
                      background: 'var(--color-surface-container)',
                      border: '1px solid var(--color-hairline)',
                      borderRadius: '12px',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div className="needs-content-header" style={{ marginBottom: '4px' }}>
                      <span className="needs-content-title" style={{ color: '#000000', fontSize: '14px', fontWeight: 800 }}>
                        <i className={block.icon} style={{ color: 'var(--color-primary)' }}></i>{' '}
                        {t(block.titleKo, block.titleEn)}
                      </span>
                      <span className="chip chip-neutral" style={{ fontSize: '11px', padding: '2px 8px' }}>
                        {block.badgeText}
                      </span>
                    </div>
                    <p className="body-text" style={{ fontSize: '13.5px', margin: 0, color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                      {t(block.descKo, block.descEn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
