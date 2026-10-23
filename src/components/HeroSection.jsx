import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getVisitorSequence } from '../utils/visitorCounter';

export default function HeroSection({ onOpenTerminal }) {
  const { t, lang } = useLanguage();
  const visitorNum = getVisitorSequence();

  const skills = [
    {
      icon: 'fab fa-python',
      name: 'Python',
      tag: 'Backend & Data Pipeline',
      bulletsKo: [
        '대규모 게임 텔레메트리 및 Riot API 실시간 수집 파이프라인 구축',
        'RoBERTa 트랜스포머 기반 감성/의도 분류 모델 파인튜닝 및 자연어 처리',
        'NetworkX 기반 동적 소셜 네트워크(SNA) 그래프 모델링 및 통계적 가설 검증'
      ],
      bulletsEn: [
        'Built high-throughput Riot API and game telemetry ingestion pipelines',
        'Fine-tuned RoBERTa NLP models for communicative intent and sentiment analysis',
        'Constructed dynamic SNA communication networks with NetworkX and ran statistical tests'
      ]
    },
    {
      icon: 'fab fa-js',
      name: 'JavaScript (ES6+) & TypeScript',
      tag: 'Client Logic & In-Memory Engine',
      bulletsKo: [
        '서버 부하 없는 100% 브라우저 인메모리 엑셀(SheetJS) 파서 및 대용량 데이터 처리 구현',
        '나이스(NEIS) 맞춤형 바이트 계산 및 특수문자 치환 알고리즘 개발',
        '행 단위 실시간 중복 문장 탐지 및 교사 행정 업무 자동화 최적화'
      ],
      bulletsEn: [
        'Engineered 100% client-side in-memory SheetJS parser with zero server workload',
        'Developed NEIS custom byte-length calculation and formatting algorithms',
        'Optimized real-time row-level duplicate sentence detection for administrative work'
      ]
    },
    {
      icon: 'fab fa-react',
      name: 'React & Vite',
      tag: 'Frontend & Reactive UI',
      bulletsKo: [
        '영상 재생과 프레임 단위 로그를 1:1로 일치시키는 QA 검증 뷰어 개발',
        'F1 24개 공식 서킷 실좌표 매핑 기반 실시간 텔레메트리 대시보드 구축',
        'Vite 번들링 기반의 고성능 컴포넌트 아키텍처 및 반응형 상태 관리 설계'
      ],
      bulletsEn: [
        'Built frame-synchronized video-log QA inspection viewer with sub-second accuracy',
        'Constructed real-time F1 telemetry dashboard with 24 official circuit track mappings',
        'Architected high-performance reactive UI flows and Vite-based modular state architecture'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      name: 'Data Analysis & NLP (RoBERTa & SNA)',
      tag: 'Research & Statistical Modeling',
      bulletsKo: [
        '음성 스트림과 게임 이벤트 로그 간 수학적 타임스탬프 보간 동기화',
        'RoBERTa 기반 팀 내 의사소통 발화 의도 정량화 및 감성 분석',
        '통계적 가설 검증 완료 논문 국제 학술 프리프린트(arXiv:2512.20116) 공식 등재'
      ],
      bulletsEn: [
        'Synchronized voice audio streams and in-game logs via mathematical interpolation',
        'Quantified in-game communicative intent and sentiment using RoBERTa transformers',
        'Published peer-accessible academic research on arXiv (arXiv:2512.20116)'
      ]
    },
    {
      icon: 'fas fa-robot',
      name: 'QA & Test Automation Platform',
      tag: 'Automation & Tooling',
      bulletsKo: [
        'JSON/CSV 스키마 기반 실시간 로그 유효성 자동 검증 엔진 구축',
        '1-Click 영상-로그 동기화 테스트 파이프라인 개발로 수동 검증 비용 대폭 절감',
        '검증 실패 로그 기반 Jira 이슈 티켓 자동 생성 및 매핑 시스템 구축'
      ],
      bulletsEn: [
        'Engineered schema-based automated validation engine for JSON/CSV log streams',
        'Developed 1-click video-log sync testing workflows, reducing manual QA overhead',
        'Automated Jira ticket generation and issue triage mapping for failed test logs'
      ]
    },
    {
      icon: 'fas fa-network-wired',
      name: 'UDP Telemetry & Real-Time Socket',
      tag: 'Real-Time Telemetry & Systems',
      bulletsKo: [
        '60Hz 고주파 UDP 20777 소켓 패킷 파싱 및 원형 링 버퍼(Circular Buffer) 인덱싱',
        '실시간 타이어 마모도·델타 타임 추적 엔진 및 브레이크 락업 감지 알고리즘 개발',
        '레이스 상황별 실시간 전술 조언을 음성으로 브리핑하는 AI 레이스 엔지니어 연동'
      ],
      bulletsEn: [
        'Parsed 60Hz UDP socket packets with high-speed circular ring buffer indexing',
        'Built real-time tire degradation, delta timing, and telemetry tracking algorithms',
        'Connected AI tactical voice coaching bridge generating contextual race briefings'
      ]
    }
  ];

  const profileBlocks = [
    {
      id: 'philosophy',
      titleKo: '엔지니어링 핵심 철학 및 문제 해결 원칙',
      titleEn: 'Core Engineering Philosophy & Principles',
      icon: 'fas fa-compass',
      steps: [
        {
          level: 1,
          labelKo: '핵심 원칙',
          labelEn: 'Core Premise',
          textKo: "당연한 것을 당연하게 여기지 않고, '왜?'라는 본질적 질문에서 모든 문제 해결을 시작합니다.",
          textEn: "Questioning what others take for granted; every solution begins with asking 'Why?' from first principles."
        },
        {
          level: 2,
          labelKo: '실행 전략',
          labelEn: 'Action Mechanism',
          textKo: '시스템의 숨은 비효율과 반복적인 수작업 병목을 포착하면, 망설임 없이 커스텀 자동화 도구를 직접 기획하고 구현합니다.',
          textEn: 'When systemic inefficiencies and manual bottlenecks arise, I proactively architect and implement custom automation tools.'
        },
        {
          level: 3,
          labelKo: '지향 가치',
          labelEn: 'Ultimate Value',
          textKo: '개인의 편의를 넘어 팀 전체의 업무 생산성을 비약적으로 높이고, 데이터 기반의 높은 신뢰성을 보장하는 엔지니어링을 지향합니다.',
          textEn: 'Beyond personal convenience, I aim to elevate overall team productivity and guarantee empirical, data-backed reliability.'
        }
      ]
    },
    {
      id: 'methodology',
      titleKo: '데이터 기반 문제 해결 및 시스템화 메커니즘',
      titleEn: 'Empirical Problem-Solving & Automation Architecture',
      icon: 'fas fa-gears',
      steps: [
        {
          level: 1,
          labelKo: '문제 정의',
          labelEn: 'Root-Cause Definition',
          textKo: '주관적 직관에 의존하지 않고, 현장의 실제 사용 패턴과 정량적 데이터를 수집해 근본 원인을 명확히 정의합니다.',
          textEn: 'Defining root causes through empirical operational telemetry and actual usage data, rather than subjective intuition.'
        },
        {
          level: 2,
          labelKo: '설계 원칙',
          labelEn: 'Architecture Tenet',
          textKo: '기존 인프라에 불필요한 서버 부하를 주지 않는 100% 브라우저 인메모리 처리 및 경량화 아키텍처를 우선 설계합니다.',
          textEn: 'Prioritizing lightweight, zero-server-overhead architectures such as 100% browser in-memory processing.'
        },
        {
          level: 3,
          labelKo: '지속성 확보',
          labelEn: 'System Sustainability',
          textKo: '1회성 해결에 그치지 않고, 자동 유효성 검증 엔진과 Jira 티켓 자동 매핑 파이프라인으로 연결하여 지속 가능한 시스템을 구축합니다.',
          textEn: 'Extending beyond one-off fixes into sustainable systems with automated validation engines and Jira issue triage workflows.'
        }
      ]
    },
    {
      id: 'action',
      titleKo: '현장 효율화 및 대표 도구 개발 실증 성과',
      titleEn: 'Key Tooling Implementations & Production Impact',
      icon: 'fas fa-lightbulb',
      steps: [
        {
          level: 1,
          labelKo: 'QA 검증 자동화',
          labelEn: 'QA Acceleration',
          textKo: '신규 프로젝트 QA의 반복 수동 검증 문제를 해결하기 위해 원클릭 영상-로그 프레임 동기화 뷰어를 자체 개발했습니다.',
          textEn: 'Built a 1-click video-log frame synchronized viewer to eliminate repetitive manual validation bottlenecks in QA.'
        },
        {
          level: 2,
          labelKo: '이슈 추적 시스템화',
          labelEn: 'Triage Automation',
          textKo: '검증 실패 로그를 Jira 이슈 티켓으로 즉시 매핑하는 시스템을 구축하여 검증 리포팅 리드타임을 획기적으로 단축했습니다.',
          textEn: 'Integrated automated log-to-Jira ticket mapping pipelines, dramatically reducing defect reporting turnaround time.'
        },
        {
          level: 3,
          labelKo: '공공·행정 편의 배포',
          labelEn: 'Public Service Utility',
          textKo: '교사들의 행정 편의를 위해 100% 클라이언트 인메모리 기반 나이스(NEIS) 글자수/중복 문장 탐지 웹 서비스를 독자 배포했습니다.',
          textEn: 'Engineered and deployed a 100% client-side in-memory NEIS byte counter and duplicate sentence detector for educators.'
        }
      ]
    },
    {
      id: 'research',
      titleKo: '고주파 텔레메트리 분석 및 학술 연구 검증 역량',
      titleEn: 'High-Frequency Telemetry & Academic Research Rigor',
      icon: 'fas fa-book-open',
      steps: [
        {
          level: 1,
          labelKo: '고주파 수집·인덱싱',
          labelEn: 'High-Frequency Ingestion',
          textKo: '대규모 게임 이벤트 로그 및 60Hz 고주파 UDP 텔레메트리 패킷을 원형 링 버퍼 메모리에 실시간으로 수집·인덱싱합니다.',
          textEn: 'Ingesting and indexing large-scale game event logs and high-frequency 60Hz UDP telemetry packets in real time.'
        },
        {
          level: 2,
          labelKo: '멀티모달 모델링',
          labelEn: 'Multimodal Modeling',
          textKo: '음성 스트림과 게임 로그 간 시계열 타임스탬프 수학적 보간 동기화 및 RoBERTa/SNA 통계 네트워크 모델링을 수행했습니다.',
          textEn: 'Conducted mathematical timestamp interpolation between voice audio and game logs alongside RoBERTa and SNA modeling.'
        },
        {
          level: 3,
          labelKo: '학술 연구 공식 등재',
          labelEn: 'Academic Publication',
          textKo: '통계적 가설 검증을 거친 연구 결과를 국제 학술 프리프린트(arXiv:2512.20116)에 공식 등재하여 공인된 연구 신뢰성을 확보했습니다.',
          textEn: 'Formally published empirical research findings on the international academic repository arXiv (arXiv:2512.20116).'
        }
      ]
    }
  ];

  return (
    <div className="band-hero-light">
      <div className="band-inner">
        <section className="hero-log-window" id="summary">
          {/* Terminal Window Header Bar (One Depth Unified Telemetry) */}
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
              <span className="visitor-badge">
                <i className="fas fa-user-check"></i>
                <span>{t(`당신은 ${visitorNum}번째 사용자입니다`, `Visitor #${visitorNum}`)}</span>
              </span>
              <span className="live-status-pill">
                <span className="live-dot"></span>
                <span>NODE ONLINE (200 OK)</span>
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

          {/* Metadata Substrip */}
          <div className="hero-log-substrip">
            <div className="hero-meta-items">
              <span><span className="hero-meta-key">SERVICE:</span> hope77.portfolio</span>
              <span><span className="hero-meta-key">ENGINEER:</span> 장자훈 (Jahoon Jang)</span>
              <span><span className="hero-meta-key">ROLE:</span> Problem Solver &amp; Tool Builder</span>
              <span><span className="hero-meta-key">BUFFER:</span> 65,536 slots</span>
            </div>
            <div className="hero-substrip-right">
              <span>UPTIME: <strong style={{ color: 'var(--color-semantic-up)' }}>99.99%</strong></span>
            </div>
          </div>

          {/* Main Body inside Terminal: Vertical Flow (No lateral clutter) */}
          <div className="hero-log-body">
            {/* 1. Terminal Prompt Line */}
            <div className="hero-prompt-line">
              <span className="prompt-host">hope77@kernel:~$</span>
              <span className="prompt-cmd">cat /etc/identity/profile.log</span>
              <span className="prompt-cursor"></span>
            </div>

            {/* 2. Topic Chips */}
            <div className="summary-chips">
              <span className="chip chip-secondary">
                <i className="fas fa-stream"></i> Data &amp; Log Pipeline
              </span>
              <span className="chip chip-purple">
                <i className="fas fa-book-open"></i> arXiv Research (2512.20116)
              </span>
              <span className="chip chip-info">
                <i className="fas fa-hammer"></i> Automation Tool Builder
              </span>
            </div>

            {/* 3. Main Headline & Bio */}
            <div className="hero-text-block">
              <h1 className="page-heading hero-main-heading">
                {t(
                  "반복업무 자동화 & 효율화 도구 개발자",
                  "Jahoon Jang — Problem Solver & Tool Builder"
                )}
              </h1>
              <p className="body-text hero-main-desc">
                {t(
                  "당연한 것을 당연하지 않게 바라보며, 언제나 끊임없이 효율적으로 문제를 해결할 수 있는 방법을 고민하는 문제 해결사입니다. 도구를 개발하여 일의 효율성을 높일 수 있다면 주저하지 않고 아이디어를 제시하고 직접 구현하며, 데이터 분석과 논문 집필을 통해 검증된 인사이트를 도출합니다.",
                  "I am a problem solver who questions what others take for granted and constantly seeks the most efficient ways to solve complex problems. Whenever a custom tool can boost workflow efficiency, I proactively propose ideas and build solutions—backed by telemetry data analysis and academic research."
                )}
              </p>
            </div>

            {/* 4. Contact & Quick Jump Action Bar */}
            <div className="hero-actions-bar">
              <div className="summary-owner-bar">
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
                  className="meta-label link-accent"
                >
                  <i className="fab fa-github"></i> github.com/hope77-githhub
                </a>
              </div>
              <a
                href="#project-logs-section"
                className="btn-primary-accent"
                style={{ height: '46px', padding: '0 26px', borderRadius: '100px', textDecoration: 'none' }}
              >
                <span>{t('프로젝트 로그 둘러보기', 'Explore Project Logs')}</span>
                <i className="fas fa-arrow-down" style={{ fontSize: '12px' }}></i>
              </a>
            </div>

            {/* 5. Core Skills (Vertical Layout with Concrete Accomplishments) */}
            <div className="hero-section-divider">
              <div className="hero-subhead-row">
                <span className="hero-subhead-title">
                  <i className="fas fa-code"></i>
                  {t('보유 기술 스택 및 수행 업무 (Technical Skills & Accomplishments)', 'Technical Skills & Accomplishments')}
                </span>
                <span className="skill-category-badge">6 Core Competencies</span>
              </div>
              <div className="skills-vertical-list">
                {skills.map((skill, idx) => {
                  const bullets = lang === 'en' ? skill.bulletsEn : skill.bulletsKo;
                  return (
                    <div key={idx} className="skill-vertical-card">
                      <div className="skill-icon-plate">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-content-wrap">
                        <div className="skill-header-row">
                          <span className="skill-name-title">{skill.name}</span>
                          <span className="skill-category-badge">{skill.tag}</span>
                        </div>
                        <ul className="skill-bullets-list">
                          {bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="skill-bullet-item">
                              <span className="skill-bullet-dot"></span>
                              <span className="skill-bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6. Engineering Philosophy & Capabilities (Stepped Hierarchy Flow) */}
            <div className="hero-section-divider">
              <div className="hero-subhead-row">
                <span className="hero-subhead-title">
                  <i className="fas fa-id-card"></i>
                  {t('엔지니어 프로필 & 철학 (About Me & Philosophy)', 'About Me & Engineering Philosophy')}
                </span>
                <span className="chip chip-neutral">Engineer Identity</span>
              </div>
              <div className="hero-vertical-cards">
                {profileBlocks.map((block, idx) => (
                  <div key={idx} className="profile-flow-card">
                    <div className="profile-card-header">
                      <div className="profile-card-title-group">
                        <span className="profile-card-icon-wrap">
                          <i className={block.icon}></i>
                        </span>
                        <h3 className="profile-card-title">
                          {t(block.titleKo, block.titleEn)}
                        </h3>
                      </div>
                    </div>

                    <div className="stepped-hierarchy-container">
                      {block.steps.map((step, sIdx) => {
                        const label = lang === 'en' ? step.labelEn : step.labelKo;
                        const text = lang === 'en' ? step.textEn : step.textKo;
                        return (
                          <div key={sIdx} className={`stepped-row stepped-level-${step.level}`}>
                            {step.level > 1 && (
                              <span className="stepped-connector">↳</span>
                            )}
                            <span className={`stepped-tag stepped-tag-l${step.level}`}>
                              {label}
                            </span>
                            <p className="stepped-text">
                              {text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
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
