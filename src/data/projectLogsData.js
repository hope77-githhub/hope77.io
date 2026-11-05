export const PROJECT_LOGS_DATA = [
  // =========================================================================
  // 1. [2023.09 - 2025.09] League of Legends 커뮤니케이션 패턴 및 SNA 분석 (arXiv:2512.20116)
  // =========================================================================
  {
    id: 'log-entry-com-study',
    categories: ['projects', 'research'],
    timestamp: '2023.09 - 2025.09',
    service: 'service.com_study.riot_api',
    tagPrimary: 'RESEARCH',
    tagSecondary: 'ARXIV_PAPER',
    tagSecondaryColor: '#8a63f8',
    statusChip: { textKo: '논문 등재 (PUBLISHED)', textEn: 'Published', type: 'success' },
    titleKo: 'League of Legends 커뮤니케이션 패턴 및 소셜 네트워크 분석 (SNA) — arXiv:2512.20116',
    titleEn: 'LoL In-Game Communication Patterns & Social Network Analysis (SNA) — arXiv:2512.20116',
    summaryKo: '84경기(45,660개 발화)의 인게임 로그와 디스코드 음성 스트림을 시계열 보간법으로 동기화하고, RoBERTa와 동적 SNA 모델링을 통해 교전 시점의 지시-수락 의사결정 패턴(p < .001)과 팀 내 화자 독점 이상치(p < .05)를 정밀 진단하여 학술 논문(arXiv:2512.20116)으로 공식 등재한 데이터 엔지니어링 연구 프로젝트입니다.',
    summaryEn: 'An empirical data engineering research analyzing 84 matches (45,660 utterances) by synchronizing multi-rate in-game logs and Discord voice streams, uncovering directive-commissive decision shifts (p < .001) and diagnosing team communication monopolies (p < .05), formally published on arXiv (arXiv:2512.20116).',
    jsonPayload: {
      timestamp: "2023-09-01T00:00:00Z",
      publication: "arXiv:2512.20116",
      paper_url: "https://arxiv.org/abs/2512.20116",
      repository: "https://github.com/hope77-githhub/Proj_code",
      core_roles: [
        "Data_Ingestion_Pipeline_Design",
        "Multimodal_Timestamp_Alignment_Interpolation",
        "RoBERTa_Sentiment_Intent_Mapping",
        "Dynamic_Network_SNA_Graph_Modeling"
      ],
      dataset_source: "Riot Games Client API + Discord Voice Bot Stream",
      peer_reviewed: true
    },
    incident: {
      problemKo: '서로 다른 샘플링 레이트와 수집 주기를 가진 인게임 로그와 음성 데이터(Text 변환본) 간의 정밀 동기화 체계가 없고, 대규모 게임 플레이어 간의 커뮤니케이션 흐름을 정량화하고 통계적 인사이트를 도출할 자동화 파이프라인 부재',
      problemEn: 'Lack of automated pipelines to synchronize high-frequency in-game event logs with asynchronous Discord voice streams, and absence of quantitative frameworks to analyze team communication patterns during critical game events.',
      resolutionKo: 'Riot Games/LoL Client API 스키마를 정밀 분석하여 Unix Timestamp 기준 밀리초 단위 이벤트 수집 파이프라인을 구축했습니다. 커스텀 Discord Bot을 개발하고 보간법(Interpolation)을 적용해 음성과 게임 로그를 완벽히 정렬한 뒤, RoBERTa 임베딩 및 플레이어를 Node/가중치를 Edge로 정의한 동적 SNA 그래프 모델링을 완성했습니다.',
      resolutionEn: 'Architected real-time event logging via Riot API and built a custom Discord bot. Implemented mathematical interpolation to precisely align multimodal voice and game telemetry on Unix Timestamps, modeling dynamic communication networks via RoBERTa embeddings and SNA graph algorithms.'
    },
    detailsTitleKo: '주요 수행 내용 및 아키텍처 성과',
    detailsTitleEn: 'Key Architecture & Implementation Achievements',
    details: [
      {
        titleKo: 'API 스키마 분석 및 실시간 데이터 수집 파이프라인 구축',
        titleEn: 'API Schema Analysis & Ingestion Pipeline',
        descKo: 'Riot Games 및 LoL Client API 데이터 스키마를 체계적으로 분석하여 인게임 이벤트 로그 수집 파이프라인을 설계했습니다.',
        descEn: 'Analyzed Riot Games & LoL Client API schemas to engineer robust in-game event log ingestion pipelines.'
      },
      {
        titleKo: '실시간 게임 데이터 로깅 및 이벤트 트리거 자동 알림',
        titleEn: 'Real-time Event Logging & Automated Reporting',
        descKo: '게임 시작/종료를 실시간 감지하여 모든 로그를 Unix Timestamp 기준 밀리초 단위로 기록하고, 종료 감지 시 데이터 검증 후 Gmail API를 통해 리포트를 자동 발송했습니다.',
        descEn: 'Detected match lifecycle events in real-time with millisecond Unix Timestamp precision, triggering automated email reports via Gmail API.'
      },
      {
        titleKo: 'Discord Voice 수집 및 멀티모달 Sync Alignment (보간법)',
        titleEn: 'Discord Voice Capture & Multimodal Interpolation Alignment',
        descKo: '커스텀 Discord Bot으로 팀 보이스 스트림을 수집하고, 수집 주기가 다른 게임 로그와 음성 텍스트의 타임라인을 수학적 보간법(Interpolation)으로 오차 없이 정밀 동기화했습니다.',
        descEn: 'Engineered a custom Discord Bot to capture team voice streams, using mathematical interpolation to achieve microsecond alignment with in-game logs.'
      },
      {
        titleKo: 'RoBERTa 임베딩 & 소셜 네트워크 분석(SNA) 모델링',
        titleEn: 'RoBERTa NLP Embedding & Dynamic SNA Graph Modeling',
        descKo: '보이스·채팅 텍스트를 RoBERTa 모델로 감성 및 의도를 분류하고, 플레이어를 Node, 영향력을 Edge Weight로 정의하여 오브젝트 한타 및 갱킹 시점의 정보 전파 패턴을 규명했습니다.',
        descEn: 'Applied RoBERTa language models to classify communicative intent, constructing dynamic SNA graphs to reveal information dissemination during decisive teamfights.'
      }
    ],
    paperUrl: 'https://arxiv.org/abs/2512.20116',
    repoUrl: 'https://github.com/hope77-githhub/Proj_code',
    footerLinks: [
      {
        labelKo: 'arXiv:2512.20116 논문 원문 열기',
        labelEn: 'Read Paper on arXiv:2512.20116',
        href: 'https://arxiv.org/abs/2512.20116',
        icon: 'fas fa-arrow-up-right-from-square',
        accent: true
      },
      {
        labelKo: 'GitHub 소스코드 저장소',
        labelEn: 'GitHub Repository (Proj_code)',
        href: 'https://github.com/hope77-githhub/Proj_code',
        icon: 'fab fa-github',
        accent: false
      }
    ],
    logId: 'LOG-RESEARCH-ARXIV-2512'
  },

  // =========================================================================
  // 2. [2025.12 - PRESENT] Telemetry Log Automation & QA Ops
  // =========================================================================
  {
    id: 'log-entry-unknown',
    categories: ['projects'],
    timestamp: '2025.12 - PRESENT',
    service: 'service.telemetry.qa_ops',
    tagPrimary: 'PROJECT',
    tagSecondary: 'QA_TEST_AUTOMATION',
    statusChip: { textKo: '진행 중 (ACTIVE)', textEn: 'In Progress', type: 'info' },
    titleKo: 'Telemetry Log Automation & QA Ops',
    titleEn: 'Telemetry Log Automation & QA Ops',
    summaryKo: 'QA중 가장 많은 Human Resource를 요구하는 Telemetry Log 검증을 지원하는 도구 제작 및 파이프라인 일원화 개발을 진행하였고, 부가적인 테스트 툴을 새로운 탭으로 추가하여 확장하는 QA Test Tool입니다.',
    summaryEn: 'A QA test tool built to streamline and unify high-labor telemetry log verification into a single pipeline, extendable with additional testing modules via independent tabs.',
    jsonPayload: {
      timestamp: "2025-12-01T09:00:00Z",
      service: "Telemetry-Log-Automation-QA-Ops",
      domain: "Automated Verification & Telemetry Alignment",
      core_modules: [
        "Kafbat_Stored_Downloader",
        "Declarative_YAML_Validator",
        "FFmpeg_Video_Timestamp_Sync",
        "Interactive_Log_Visualizer",
        "Team_Tactics_Test_Tool",
        "Issue_Ticket_Auto_Mapper"
      ],
      runtime_status: "Active Development & Real-World QA Ops"
    },
    incident: {
      problemKo: '인게임 이벤트 수행 후 대상 로그를 필터링하고 버그 발생 시 화면 녹화 영상을 재촬영해 대조하는 반복 작업으로 인해, 로그 필드 하나를 검증하는 데도 최소 5분이 소요되고 문서 미비로 129개 케이스 기준 총 120~180분의 오랜 시간이 소요됨',
      problemEn: 'Repeatedly triggering in-game events, filtering logs, and re-recording video footage to cross-reference defects meant verifying a single log field took at least 5 minutes, resulting in 120-180 minutes across 129 legacy cases.',
      resolutionKo: 'Kafbat API 자동 다운로더, YAML 스키마 기반 필드별 자동 검증, FFmpeg 영상-타임스탬프 연동 뷰어, Log Visualization 및 팀전술 테스트 지원도구(선수 DB 연동, 호버 점수 비교)를 일원화하여 검증 시간을 20~30분(80% 이상 절감)으로 단축했습니다.',
      resolutionEn: 'Architected automated Kafbat downloads, YAML schema-based automated verification, FFmpeg video-timestamp sync seeking, Log Visualization, and Team Tactics Test Tools with live player DB and hover score comparison, slashing verification by >80%.'
    },
    detailsTitleKo: '주요 기능 및 핵심 성과',
    detailsTitleEn: 'Core Features & Technical Milestones',
    details: [
      {
        titleKo: 'Kafbat API 기반 로그 자동 수집 & 1-Click 다운로드',
        titleEn: 'Kafbat API Automated Ingestion & 1-Click Downloader',
        descKo: '다수의 테스트 서버별 엔드포인트에서 필요한 게임플레이 텔레메트리 로그를 1-Click API 요청으로 자동 수집하여 수동 다운로드 병목을 원천 해소했습니다.',
        descEn: 'Automated telemetry retrieval across multiple test server endpoints with single-click API downloads, removing manual retrieval bottlenecks.'
      },
      {
        titleKo: 'YAML 스키마 기반 자동 검증 엔진',
        titleEn: 'YAML Schema-Based Automated Verification Engine',
        descKo: '하드코딩을 탈피하고 YAML 명세 및 이벤트별 rules.py를 기반으로 필수 키 결측, 포맷 오류, 런타임 이상치를 전수 자동 검증하여 스키마 누락률 0%를 달성했습니다.',
        descEn: 'Decoupled checks into YAML schemas and event-specific rules.py, catching missing keys and runtime outliers with 0% omission.'
      },
      {
        titleKo: 'FFmpeg 인게임 영상 녹화 & Unix Timestamp 동기화',
        titleEn: 'FFmpeg Screen Capture & Unix Timestamp Video Sync',
        descKo: '테스트 영상을 자동 녹화하고 로그 타임스탬프와 정합하여, 로그 클릭 시 해당 이벤트 프레임으로 1초 내 즉각 이동하며 실시간 인게임 오버레이를 지원합니다.',
        descEn: 'Captured test footage via FFmpeg and synchronized timecodes; clicking any log entry navigates to that exact in-game video frame within 1 second.'
      },
      {
        titleKo: '인터랙티브 Log Visualization & 세션 Clean 기능',
        titleEn: 'Interactive Log Visualization & Test Session Clean',
        descKo: '복잡한 텔레메트리 이벤트 시퀀스와 필드 분포를 직관적으로 시각화하고, 테스트 환경을 원클릭으로 초기화하는 세션 Clean 기능을 제공합니다.',
        descEn: 'Intuitive telemetry visualization board mapping event sequences, pinpointing anomalies, and providing 1-click testbed resets.'
      },
      {
        titleKo: '팀전술 테스트 지원도구',
        titleEn: 'Team Tactics Test Tool',
        descKo: '선수 DB(players.xlsx) 실시간 연동, 입출력 JSON 파이프라인, 마우스 호버 실시간 포지션 점수 비교 및 히스토리 저장을 지원하여 테스트 효율을 80% 이상 향상시켰습니다.',
        descEn: 'Boosted testing efficiency >80% via live player DB sync, bidirectional JSON I/O, real-time hover score deltas, and artifact caching.'
      }
    ],
    logId: 'LOG-PROJ-QAOPS-001'
  },

  // =========================================================================
  // 3. [2026.09 - PRESENT] Real-Time AI Race Engineer Project
  // =========================================================================
  {
    id: 'log-entry-f1',
    categories: ['projects'],
    timestamp: '2026.09 - PRESENT',
    service: 'service.f1.race_engineer',
    tagPrimary: 'TELEMETRY',
    tagSecondary: 'UDP_SOCKET_20777',
    statusChip: { textKo: '진행 중 (ACTIVE)', textEn: 'In Progress', type: 'info' },
    titleKo: 'Real-Time AI Race Engineer Project — 실시간 텔레메트리 & 음성 AI 솔루션',
    titleEn: 'Real-Time AI Race Engineer — Live Telemetry & AI Voice Feedback Solution',
    summaryKo: 'F1 실시간 UDP 텔레메트리 주행 데이터를 초당 수십 회 파싱하여 차량 속도, 타이어 마모도, 델타 타임을 서킷 맵 위에 렌더링하고, 음성 AI를 결합하여 최적의 피트 스탑 타이밍과 실시간 레이스 전략 조언을 제공하는 풀스택 솔루션입니다.',
    summaryEn: 'A high-frequency UDP telemetry processing system that maps live vehicle dynamics, tire degradation, and delta times onto circuit tracks, integrating real-time AI voice feedback for strategic pit stop decisions.',
    jsonPayload: {
      timestamp: "2026-09-01T12:00:00Z",
      network_protocol: "UDP Socket :20777",
      stream_frequency: "60Hz real-time high-throughput stream",
      telemetry_signals: [
        "Vehicle_Speed_Kmh",
        "Throttle_Brake_Inputs",
        "Surface_Core_Tire_Wear",
        "Live_Sector_Delta_Times",
        "Fuel_Load_Remaining_Laps"
      ],
      ai_voice_module: "Real-time Tactical Audio Coach (TTS & Strategy Engine)",
      repository: "https://github.com/hope77-githhub/F125_Personal_RaceEngineer"
    },
    incident: {
      problemKo: '레이스 주행 중 드라이버가 고속 상황에서 실시간 차량 상태(타이어 마모, 연료, 랩타임 델타)를 시각적으로 확인하기 어렵고, 데이터에 기반한 즉각적인 피트 스탑 전략을 스스로 계산하기 불가능함',
      problemEn: 'High cognitive load during competitive driving makes it nearly impossible to manually process complex telemetry figures and calculate optimal pit windows on the fly.',
      resolutionKo: 'UDP 20777 포트로부터 고빈도 주행 데이터를 실시간 인덱싱하고, 실제 서킷 좌표계 기반의 프론트엔드 트랙 매핑 UI를 구축했습니다. 드라이버의 페이스 분석 결과를 바탕으로 최적 피트 스탑 조언을 실시간 AI Voice 음성으로 전달하는 에이전트를 개발 중입니다.',
      resolutionEn: 'Engineered an in-memory UDP parser capturing 60Hz telemetry packets, rendered live coordinate tracks on an interactive dashboard, and deployed an AI voice strategy agent delivering auditory tactical guidance.'
    },
    detailsTitleKo: '주요 진행 상황 및 로드맵',
    detailsTitleEn: 'Implementation Status & Strategic Roadmap',
    details: [
      {
        titleKo: '실시간 주행 데이터 텔레메트리 파싱',
        titleEn: 'High-Frequency Telemetry Ingestion',
        descKo: '차량 속도, 스로틀/브레이크 인풋, 타이어 마모도, 델타 타임 등 실시간 주행 텔레메트리 패킷을 오차 없이 인덱싱합니다.',
        descEn: 'Captures and indexes vehicle speeds, pedal inputs, tire degradation rates, and sector delta times.'
      },
      {
        titleKo: '레이스 서킷 트랙 매핑 (Front-End)',
        titleEn: 'Circuit Coordinates Real-Time Track Mapping',
        descKo: '실제 공식 서킷 좌표계에 주행 궤적 및 섹터별 주행 정보를 실시간으로 부드럽게 렌더링하는 UI를 구현하고 테스트를 진행했습니다.',
        descEn: 'Renders dynamic racing lines and sector timing telemetry across true-to-scale official circuit coordinates.'
      },
      {
        titleKo: 'AI Race Engineer 음성 에이전트 구축 (진행 중)',
        titleEn: 'AI Voice Tactical Feedback Agent',
        descKo: '드라이버의 랩 페이스, 타이어 상태, 연료 소모율을 분석하여 최적 피트 스탑 타이밍과 주행 조언을 실시간 AI 음성으로 출력하여 현실감 넘치는 피드백을 제공합니다.',
        descEn: 'Developing an AI voice coach that analyzes live pace and tire wear to deliver real-time auditory pit stop instructions.'
      }
    ],
    footerLinks: [
      {
        labelKo: 'GitHub 저장소 (F125_Personal_RaceEngineer)',
        labelEn: 'GitHub Repository',
        href: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer',
        icon: 'fab fa-github',
        accent: true
      }
    ],
    logId: 'LOG-TELEMETRY-F1-001'
  },

  // =========================================================================
  // 4. [2026.09 - DONE] NIES Letter Counter (개선 버전)
  // * 규칙: 2026.09 시작이지만 DONE(완료) 프로젝트이므로 맨 마지막에 배치
  // =========================================================================
  {
    id: 'log-entry-neis',
    categories: ['projects'],
    timestamp: '2026.09 - DONE (고도화 완료)',
    service: 'service.neis.counter',
    tagPrimary: 'PRODUCTION',
    tagSecondary: 'SHEETJS_SANDBOX',
    tagSecondaryColor: 'var(--color-semantic-up)',
    statusChip: { textKo: '배포 완료 (DONE)', textEn: 'Completed', type: 'success' },
    titleKo: 'NIES Letter Counter (개선 버전) — 맞춤형 바이트 계산 및 엑셀 중복 문장 정밀 탐지 도구',
    titleEn: 'NEIS Letter Counter (Enhanced) — Precision Byte Calculator & Excel Duplicate Detector',
    summaryKo: '나이스(NEIS) 시스템의 특수 바이트 규칙(공백 포함/제외, 한글 3byte, 줄바꿈 2byte)을 실시간 계산하고, SheetJS 기반으로 엑셀 시트 내 중복 문장과 해당 행(Row) 번호를 정밀 탐지하여 100% 브라우저 메모리 상에서 안전하게 처리하는 텍스트 유틸리티입니다.',
    summaryEn: 'A specialized text utility calculating exact NEIS byte specifications (UTF-8, EUC-KR) in real-time, detecting duplicate sentences across Excel rows via SheetJS inside a 100% client-side memory sandbox.',
    jsonPayload: {
      timestamp: "2026-09-15T10:00:00Z",
      target_system: "National Education Information System (NEIS)",
      encoding_support: ["UTF-8", "EUC-KR", "NEIS_Custom_Spec"],
      core_features: [
        "Realtime_Byte_And_Character_Counting",
        "Excel_Row_Duplicate_Sentence_Detection",
        "Bidirectional_Inline_Edit_And_Save"
      ],
      data_privacy: "100% Client-Side In-Memory Execution (Zero Server Transmission)",
      excel_engine: "SheetJS XLSX Parser"
    },
    incident: {
      problemKo: '나이스 시스템의 특수 바이트 계산 방식(한글 3byte, 줄바꿈 2byte 등)으로 인해 학생부 작성 시 길이를 맞추기 어렵고, 여러 학생의 엑셀 생활기록부를 작성할 때 이전 문장과 중복된 내용이 몇 번째 행(Row)에 존재하는지 찾기 어려운 비효율 발생',
      problemEn: 'Teachers struggled with unique NEIS byte counting rules and spent excessive manual effort finding duplicate sentence instances across multi-student Excel rows.',
      resolutionKo: '공백 포함/제외 및 UTF-8, EUC-KR 기준 정밀 Byte 계산 로직을 구현하고, Excel 파일 업로드 시 모든 행(Row)을 파싱하여 중복 문장의 위치(Row 번호)를 직관적으로 명시하는 알고리즘을 개발했습니다. 브라우저 내 인메모리(SheetJS)로 구동되어 학생 개인정보 유출을 원천 방지했습니다.',
      resolutionEn: 'Engineered precise byte calculation matching NEIS rules and built an in-browser Excel parser identifying duplicate sentences with row numbers, ensuring zero server data transmission.'
    },
    detailsTitleKo: '핵심 기능 및 사용자 경험',
    detailsTitleEn: 'Core Features & Technical Utility',
    details: [
      {
        titleKo: '정밀 글자 수 및 Byte 계산',
        titleEn: 'Precision Character & Byte Counter',
        descKo: '공백 포함/제외 글자 수, UTF-8 및 EUC-KR 기반의 Byte 수를 입력 즉시 실시간으로 오차 없이 계산합니다.',
        descEn: 'Calculates characters (with/without spaces) and bytes across UTF-8 and EUC-KR encodings in real time.'
      },
      {
        titleKo: 'Excel 파일 연동 중복 문장 탐지',
        titleEn: 'Excel Duplicate Sentence Row Detection',
        descKo: '업로드된 엑셀 시트 내 모든 행(Row)을 파싱하여, 현재 작성 중인 내용과 일치/유사한 문장이 몇 번 행(Row)과 중복되는지 직관적으로 명시합니다.',
        descEn: 'Parses all rows in uploaded Excel sheets, identifying exact duplicate sentences and displaying their row indices.'
      },
      {
        titleKo: '실시간 양방향 수정 및 즉시 저장',
        titleEn: 'Real-time Bidirectional Edit & Export',
        descKo: '중복 발생 위치와 글자 수/Byte 변동 사항을 즉각 확인하며 인라인으로 수정하고 엑셀 형식으로 바로 덮어쓰기/저장할 수 있는 워크플로우를 지원합니다.',
        descEn: 'Enables bidirectional inline editing with live byte metrics, supporting direct export and overwrite to .xlsx files.'
      }
    ],
    footerChips: [
      { text: 'SheetJS Client-Side', type: 'neutral' },
      { textKo: '개인정보 100% 무전송 안전 설계', textEn: '100% Privacy Safe Sandbox', type: 'success' }
    ],
    logId: 'LOG-TOOL-NEIS-001'
  }
];
