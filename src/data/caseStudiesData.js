export const CASE_STUDIES_DATA = [
  // =========================================================================
  // 1. RTS (LOL) Communication pattern 연구
  // =========================================================================
  {
    id: 'log-entry-com-study',
    category: 'Research / Data Engineering',
    badgeTextKo: '학술 논문 등재 (arXiv)',
    badgeTextEn: 'Published on arXiv',
    badgeType: 'purple',
    titleKo: 'RTS (LOL) Communication pattern 연구',
    titleEn: 'RTS (LOL) Communication Pattern Research',
    oneLinerKo: '수집 주기가 다른 게임 로그와 음성 스트림을 시계열 보간법으로 동기화하고, RoBERTa와 SNA 그래프로 정보 전파를 분석한 학술 연구',
    oneLinerEn: 'Synchronizing multi-rate in-game logs and voice streams via interpolation, modeling information dissemination through RoBERTa and SNA.',
    roleKo: '리드 데이터 엔지니어 (2저자 / 파이프라인 설계, 음성-로그 동기화, 통계 모델링)',
    roleEn: 'Lead Data Engineer (2nd Author / Pipeline Architecture, Audio-Log Sync, Statistical Modeling)',
    period: '2023.09 – 2025.09',
    publication: 'arXiv:2512.20116',
    paperUrl: 'https://arxiv.org/abs/2512.20116',
    repoUrl: 'https://github.com/hope77-githhub/Proj_code',
    techStack: ['Python', 'RoBERTa', 'NetworkX (SNA)', 'Riot API', 'Discord Voice Bot', 'Pandas/NumPy'],

    keyMetrics: [
      {
        valueKo: '< 0.05s (50ms)',
        valueEn: '< 0.05s (50ms)',
        labelKo: '멀티모달 시계열 정합 오차',
        labelEn: 'Multimodal Sync Timing Error',
        icon: 'fas fa-stopwatch'
      },
      {
        valueKo: '0% 누락률',
        valueEn: '0% Data Drop',
        labelKo: '인게임 이벤트 수집 무결성',
        labelEn: 'In-Game Event Log Integrity',
        icon: 'fas fa-shield-halved'
      },
      {
        valueKo: 'arXiv 등재',
        valueEn: 'arXiv Published',
        labelKo: '국제 학술 프리프린트 논문 공저',
        labelEn: 'Co-Authored Academic Paper',
        icon: 'fas fa-file-pdf'
      },
      {
        valueKo: '100% 자동화',
        valueEn: '100% Automated',
        labelKo: '경기 감지 및 검증 리포팅',
        labelEn: 'Match Lifecycle & Email Triage',
        icon: 'fas fa-envelope-circle-check'
      }
    ],

    condensed: {
      problemKo: '인게임 비주기 이벤트 로그(Riot API)와 비동기 음성 스트림(Discord) 간의 샘플링 주기 불일치로 인해, 교전 순간의 팀원 간 발화가 전술적 승패에 미친 영향을 객관적 데이터로 분석하기 불가능한 문제가 있었습니다.',
      problemEn: 'Disparate sampling rates between aperiodic in-game logs and Discord voice audio prevented empirical measurement of how communication influenced critical teamfights.',

      solutionKo: [
        'Unix Timestamp를 기준으로 Riot API 로그와 Discord 음성 데이터를 수학적 시계열 보간법(Interpolation)으로 밀리초(ms) 단위 정밀 동기화',
        'RoBERTa 언어 모델로 발화의 전술적 의도 및 감성을 벡터화하고, Dynamic SNA(소셜 네트워크 분석) 그래프로 팀 내 정보 전파 양상 모델링',
        '경기 라이프사이클 이벤트 감지부터 정합 검증 리포트 자동 발송까지 원스톱 데이터 파이프라인 구축'
      ],
      solutionEn: [
        'Engineered mathematical interpolation pipeline synchronizing Riot API logs and Discord voice buffers down to sub-50ms precision',
        'Vectorized tactical intent via RoBERTa embeddings and modeled information propagation dynamics using Dynamic SNA graph algorithms',
        'Automated end-to-end data pipeline from match event detection to email verification reporting'
      ],

      impactKo: [
        '멀티모달 시계열 오차 50ms 미만 수렴 및 수만 건의 이벤트 누락률 0% 달성, 글로벌 학술 아카이브(arXiv:2512.20116)에 정식 논문 공저 등재',
        '단순 데이터 수집보다 "이종 데이터 간의 시계열 정합성" 확보가 분석 신뢰도를 결정짓는 핵심 엔지니어링임을 입증'
      ],
      impactEn: [
        'Converged multimodal sync drift to < 50ms with 0% data omission, co-authoring formally published research paper on arXiv (arXiv:2512.20116)',
        'Demonstrated that ensuring temporal alignment across heterogeneous streams is the paramount engineering pillar for analytical validity'
      ]
    }
  },

  // =========================================================================
  // 2. Unknown Project 테스트 지원 도구 개발 (QA & Test Automation)
  // =========================================================================
  {
    id: 'log-entry-unknown',
    category: 'QA & Test Automation Platform',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'In Progress',
    badgeType: 'info',
    titleKo: 'Unknown Project 테스트 지원 도구 개발 — QA & Test Automation Platform',
    titleEn: 'Unknown Project QA & Test Support Tooling Suite',
    oneLinerKo: '스키마 기반 자동 검증, 1-Click 영상-로그 동기화 뷰어, Jira 티켓 자동 매핑으로 QA 수작업 병목을 해소한 풀 파이프라인 도구',
    oneLinerEn: 'Full-pipeline tooling eliminating manual QA bottlenecks through schema validation, 1-click video-log sync viewers, and automated Jira mapping.',
    roleKo: 'QA 플랫폼 엔지니어 (전체 파이프라인 기획, 자동 검증 엔진, Interactive Visualizer 구현)',
    roleEn: 'QA Platform Engineer (Full Pipeline Architecture, Schema Validator, Interactive Visualizer)',
    period: '2025.12 – 현재 (Active)',
    techStack: ['React', 'JavaScript (ES6+)', 'Node.js', 'JSON Schema', 'REST API', 'Jira API'],

    keyMetrics: [
      {
        valueKo: '75% 이상 단축',
        valueEn: '> 75% Reduction',
        labelKo: '로그-영상 대조 소요 시간',
        labelEn: 'Log-Video Inspection Time',
        icon: 'fas fa-gauge-high'
      },
      {
        valueKo: '0% 누락률',
        valueEn: '0% Omission',
        labelKo: '스키마 결측/이상치 탐지율',
        labelEn: 'Schema Anomaly Detection',
        icon: 'fas fa-circle-check'
      },
      {
        valueKo: '60% 단축',
        valueEn: '60% Shorter',
        labelKo: '이슈 리포트 리드타임',
        labelEn: 'Bug Triage Turnaround',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '1-Click',
        valueEn: '1-Click',
        labelKo: '녹화-로그 다운로드 일원화',
        labelEn: 'Unified Download Pipeline',
        icon: 'fas fa-arrow-pointer'
      }
    ],

    condensed: {
      problemKo: '테스트 후 수만 줄의 텍스트 로그를 수작업으로 검색하고 녹화 영상과 일일이 대조하느라 회당 25분 이상 소요되고 중복 티켓이 빈번히 발생하는 심각한 QA 병목이 있었습니다.',
      problemEn: 'Manual inspection across tens of thousands of raw log lines and video scrubbing took 25+ minutes per session, generating frequent duplicate bug tickets.',

      solutionKo: [
        '플레이 녹화 종료 즉시 서버/클라이언트 로그를 자동 패키징하는 1-Click 일괄 다운로드 파이프라인 구축',
        'JSON Schema 규칙 기반 실시간 검증 엔진으로 결측 키 및 비정상 데이터 타입 자동 하이라이트',
        '에러 로그 클릭 시 녹화 영상의 해당 초 단위 프레임으로 1초 내 즉각 탐색하는 Interactive Visualizer 및 Jira 이슈 자동 매핑'
      ],
      solutionEn: [
        'Architected 1-click pipeline bundling server and client telemetry logs immediately upon video recording completion',
        'Built schema-based automated validation engine detecting missing keys and format outliers in real time',
        'Developed synchronized HTML5 visualizer jumping to exact video frames upon clicking error logs, auto-linking to Jira defect tickets'
      ],

      impactKo: [
        '로그-영상 대조 소요 시간을 25분에서 수 초로 75% 이상 단축하고, 전수 자동 검증으로 포맷 결측 누락률 0% 달성',
        '현장의 가장 고통스러운 수작업 병목을 시스템 도구화했을 때 팀 전체의 개발 생산성이 비약적으로 상승함을 실증'
      ],
      impactEn: [
        'Slashed inspection time by > 75% (from 25 mins to seconds) and eliminated human omission error in schema compliance',
        'Proved that converting high-friction manual operational bottlenecks into 1-click tooling delivers immense team velocity'
      ]
    }
  },

  // =========================================================================
  // 3. Real-Time AI Race Engineer (실시간 텔레메트리 & 음성 AI)
  // =========================================================================
  {
    id: 'log-entry-f1',
    category: 'Real-Time Telemetry & Systems',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'In Progress',
    badgeType: 'info',
    titleKo: 'Real-Time AI Race Engineer Project — 실시간 텔레메트리 & 음성 AI 솔루션',
    titleEn: 'Real-Time AI Race Engineer — Live Telemetry & AI Voice Solution',
    oneLinerKo: '60Hz 고주파 UDP 주행 데이터를 파싱하고 서킷 좌표 매핑 및 AI 음성으로 최적 피트스탑 전략을 제공하는 솔루션',
    oneLinerEn: 'High-frequency 60Hz UDP telemetry parsing, official circuit track mapping, and real-time AI voice tactical pit stop briefings.',
    roleKo: '텔레메트리 시스템 엔지니어 (UDP 소켓 파서, 원형 링 버퍼, 트랙 매핑 UI, AI 음성 파이프라인 개발)',
    roleEn: 'Telemetry Systems Engineer (UDP Socket Ingestion, Circular Ring Buffer, Track Canvas, AI Voice Pipeline)',
    period: '2026.09 – 현재 (Active)',
    repoUrl: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer',
    techStack: ['Python', 'UDP Socket (:20777)', 'Circular Buffer', 'React & Canvas', 'AI Voice (TTS)', 'Telemetry Parsing'],

    keyMetrics: [
      {
        valueKo: '60Hz 무손실',
        valueEn: '60Hz Lossless',
        labelKo: '고주파 UDP 패킷 파싱',
        labelEn: 'High-Frequency Parsing',
        icon: 'fas fa-network-wired'
      },
      {
        valueKo: '< 5ms 초저지연',
        valueEn: '< 5ms Latency',
        labelKo: '원형 링 버퍼 인덱싱 속도',
        labelEn: 'Circular Buffer Ingestion',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '24개 서킷 100%',
        valueEn: '24 Tracks 100%',
        labelKo: '공식 F1 서킷 실좌표 매핑',
        labelEn: 'Official Circuit Mapping',
        icon: 'fas fa-map-location-dot'
      },
      {
        valueKo: '80% 경감',
        valueEn: '80% Relieved',
        labelKo: '드라이버 시각 인지 부하',
        labelEn: 'Driver Cognitive Load',
        icon: 'fas fa-headphones'
      }
    ],

    condensed: {
      problemKo: '시속 300km/h 주행 중 복잡한 수치 계기판(타이어 마모율, 랩 델타)을 직접 눈으로 확인하며 실시간 피트스탑 전략을 계산하는 것은 시야 분산 및 랩타임 손실을 초래했습니다.',
      problemEn: 'Inspecting complex telemetry gauges at 300 km/h caused severe visual distraction, making real-time pit strategy calculations nearly impossible during fast-paced driving.',

      solutionKo: [
        'Python UDP 소켓(:20777) 기반 60Hz 패킷 디코더 및 메모리 오버헤드를 방지하는 원형 링 버퍼(Circular Buffer) 구축',
        '24개 공식 F1 서킷의 실제 X-Y 좌표계를 정규화하여 차량 궤적 및 속도 히트맵을 Canvas에 실시간 렌더링',
        '타이어 마모 곡선과 랩 페이스를 실시간 계산하여 최적 피트인 타이밍을 음성(TTS)으로 코칭하는 AI 에이전트 구현'
      ],
      solutionEn: [
        'Engineered 60Hz UDP socket decoder with high-throughput circular ring buffer maintaining < 5ms ingestion latency',
        'Normalized real-world track coordinates across 24 official F1 circuits to render live car trajectories and speed heatmaps on Canvas',
        'Implemented AI voice coaching engine delivering auditory pit stop callouts based on real-time tyre degradation thresholds'
      ],

      impactKo: [
        '60Hz 고주파 데이터 무손실 수집 및 5ms 미만 초저지연 버퍼링 달성, 시각 계기판 의존 없는 음성 전략 코칭 제공',
        '대용량 실시간 스트림 처리 시 메모리 버퍼 최적화와 비동기 렌더링 분리 노하우 습득'
      ],
      impactEn: [
        'Achieved lossless 60Hz UDP ingestion with sub-5ms latency, enabling hands-free tactical race management via audio coaching',
        'Mastered high-frequency stream processing, buffer memory management, and decoupled async rendering techniques'
      ]
    }
  },

  // =========================================================================
  // 4. NEIS Letter Counter (개선 버전)
  // =========================================================================
  {
    id: 'log-entry-neis',
    category: 'Internal Utility & Automation',
    badgeTextKo: '완료 (Live)',
    badgeTextEn: 'Completed',
    badgeType: 'success',
    titleKo: 'NEIS Letter Counter (개선 버전) — 텍스트 카운터 & 엑셀 중복 탐지 유틸리티',
    titleEn: 'NEIS Letter Counter & In-Memory Excel Duplicate Detector',
    oneLinerKo: '나이스 글자수/바이트 정밀 계산 및 엑셀 내 중복 문장 발생 행(Row)을 클라이언트에서 즉시 탐지하는 실무 유틸리티',
    oneLinerEn: 'Client-side utility for exact NEIS byte counting and in-memory Excel duplicate sentence row detection without server upload.',
    roleKo: '프론트엔드 엔지니어 (텍스트 엔진, SheetJS 엑셀 파서, 전산 규격 알고리즘 구현)',
    roleEn: 'Frontend Engineer (Text Engine, SheetJS Parser, System Spec Compliance Algorithm)',
    period: '2024.08 – 2024.10',
    techStack: ['React', 'JavaScript', 'SheetJS (xlsx)', 'RegEx', 'Client In-Memory'],

    keyMetrics: [
      {
        valueKo: '100% 정합도',
        valueEn: '100% Match',
        labelKo: '나이스 특수 바이트 규격 정합',
        labelEn: 'NEIS System Byte Accuracy',
        icon: 'fas fa-calculator'
      },
      {
        valueKo: '0건 누출',
        valueEn: '0 Data Leak',
        labelKo: '서버 업로드 없는 로컬 처리',
        labelEn: 'Pure In-Memory Privacy',
        icon: 'fas fa-user-shield'
      },
      {
        valueKo: '90% 단축',
        valueEn: '90% Faster',
        labelKo: '엑셀 중복 문장 검토 시간',
        labelEn: 'Duplicate Audit Time',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '< 2초 완료',
        valueEn: '< 2s Parse',
        labelKo: '대용량 엑셀 시트 파싱 속도',
        labelEn: 'Multi-Row Parsing Speed',
        icon: 'fas fa-file-excel'
      }
    ],

    condensed: {
      problemKo: '교육행정정보시스템(NEIS)의 독자적 바이트 계산 규격(줄바꿈 2Byte 등) 불일치로 학생 기록부 오류가 빈번했고, 수백 행의 엑셀 시트에서 중복 문장을 육안으로 찾느라 30분 이상 낭비되는 문제가 있었습니다.',
      problemEn: 'NEIS-specific byte calculation rules caused frequent data rejection errors, while educators spent 30+ minutes manually scanning Excel sheets for duplicate statements.',

      solutionKo: [
        '공백 포함/제외, 한글/영문 및 줄바꿈(\\r\\n, 2byte)을 NEIS 공식 기준에 100% 일치시키는 정밀 카운팅 엔진 구현',
        'SheetJS 라이브러리를 활용해 서버 전송 없이 브라우저 인메모리(Client Sandbox)에서 대용량 엑셀 파일 즉시 파싱',
        '문장 단위 정규화 후 해시맵 캐싱을 통해 중복 문장 발생 시 행 번호(Row)와 문구를 즉시 하이라이트'
      ],
      solutionEn: [
        'Engineered precision counting algorithm mirroring official NEIS byte logic (2-byte CRLF line breaks and language nuances)',
        'Integrated SheetJS for zero-server-leakage in-memory Excel parsing directly within the browser runtime',
        'Built sentence normalization and hash map indexing to instantaneously label duplicate row occurrences'
      ],

      impactKo: [
        '엑셀 시트 검토 시간을 30분에서 2초 이내로 90% 이상 단축하고, 서버 업로드 없는 100% 로컬 구동으로 개인정보 유출 위험을 0%로 완벽 차단',
        '현장의 도메인 규칙을 깊이 이해하고 실무 맞춤형으로 구현했을 때 도구의 사용 가치가 극대화됨을 실증'
      ],
      impactEn: [
        'Cut spreadsheet audit time from 30 mins to sub-2-second, ensuring 0% personal data privacy risk through pure client-side processing',
        'Demonstrated that deeply adhering to domain compliance standards delivers immense real-world leverage'
      ]
    }
  }
];
