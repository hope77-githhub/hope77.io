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
    summaryKo: 'RoBERTa 기반 언어 모델 및 소셜 네트워크 분석(SNA)을 활용하여 리그 오브 레전드 인게임 로그와 디스코드 음성 스트림을 수집·동기화하고, 팀워크와 정보 전파 양상을 정량적으로 규명하여 학술 논문(arXiv:2512.20116)으로 공식 등재한 데이터 엔지니어링 연구 프로젝트입니다.',
    summaryEn: 'A research project analyzing in-game communication patterns and information propagation in League of Legends using RoBERTa language models and Dynamic SNA graph modeling, validated through a published paper on arXiv (arXiv:2512.20116).',
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
  // 2. [2025.12 - PRESENT] Unknown Project 테스트 지원 도구 개발 (QA/Test Support Tool)
  // =========================================================================
  {
    id: 'log-entry-unknown',
    categories: ['projects'],
    timestamp: '2025.12 - PRESENT',
    service: 'service.unknown.qa_suite',
    tagPrimary: 'PROJECT',
    tagSecondary: 'QA_TEST_AUTOMATION',
    statusChip: { textKo: '진행 중 (ACTIVE)', textEn: 'In Progress', type: 'info' },
    titleKo: 'Unknown Project 테스트 지원 도구 개발 — QA & Test Automation Platform',
    titleEn: 'Unknown Project QA & Test Support Tooling Suite',
    summaryKo: '신규 프로젝트의 검증 효율 극대화를 위해 데이터 스키마 기반 로그 검증, 플레이 영상 녹화-데이터 다운로드-자동화 검증 원클릭 파이프라인, 그리고 영상과 로그를 프레임 단위로 대조하는 대화형 시각화 도구를 개발 중인 풀스택 자동화 플랫폼입니다.',
    summaryEn: 'A full-pipeline QA support suite engineered to maximize testing efficiency through automated schema validation, one-click video-log sync pipelines, and interactive visual playback for complex client-server platforms.',
    jsonPayload: {
      timestamp: "2025-12-01T09:00:00Z",
      service: "Unknown-QA-Automation-Platform",
      domain: "Automated Verification & Telemetry Alignment",
      core_modules: [
        "Schema_Based_Log_Validator",
        "One_Click_Video_Download_Pipeline",
        "Interactive_Video_Log_Comparator",
        "Player_Recommendation_DB_Tab",
        "Jira_Issue_Ticket_Auto_Mapper"
      ],
      runtime_status: "Active Development & Continuous QA Delivery"
    },
    incident: {
      problemKo: '복잡한 신규 프로젝트 시스템 환경에서 수동 로그 확인, 이상치 탐지, 반복 테스트 및 이슈 티켓 작성에 소모되는 QA 리소스가 과도하고 휴먼 에러 발생 위험이 높음',
      problemEn: 'Excessive manual QA overhead spent cross-referencing logs, spotting schema discrepancies, and manually linking test failures to issue tracking systems.',
      resolutionKo: '사전 정의된 데이터 스키마 기반 로그 자동 검증 엔진과 영상 녹화-데이터 다운로드-검증 원클릭 파이프라인을 구축했습니다. 영상과 로그 타임라인을 상호 매핑하는 뷰어와 선수 추천 전용 DB 연동 탭을 개발해 QA 검증 속도를 비약적으로 단축했습니다.',
      resolutionEn: 'Engineered a schema-based log validation engine coupled with a one-click video recording and log download pipeline. Built interactive timeline viewers mapping frames to error logs, along with real-time DB verification tabs.'
    },
    detailsTitleKo: '주요 기능 및 핵심 성과',
    detailsTitleEn: 'Core Features & Technical Milestones',
    details: [
      {
        titleKo: '데이터 스키마 기반 Log Data 자동 검증/분석',
        titleEn: 'Schema-Based Automated Log Validation',
        descKo: '사전에 정의된 데이터 스키마를 바탕으로 수집된 로그의 결측, 포맷 오류, 런타임 이상치를 자동 탐지하고 유효성을 검증합니다.',
        descEn: 'Automatically detects missing fields, format inconsistencies, and runtime anomalies using predefined schemas.'
      },
      {
        titleKo: '영상 녹화 - 데이터 다운로드 - 자동화 검증 원클릭 파이프라인',
        titleEn: 'One-Click Video Recording & Log Download Pipeline',
        descKo: '클라이언트 플레이 영상 녹화 종료와 동시에 관련 인게임 로그 및 서버 데이터를 자동 다운로드하고 즉각 유효성을 검증하는 일원화 프로세스를 구축했습니다.',
        descEn: 'Unified pipeline that automatically downloads server/client logs upon video recording completion and verifies data validity.'
      },
      {
        titleKo: '영상 & 로그 대조 시각화 (Interactive Visualizer)',
        titleEn: 'Interactive Video-Log Synchronized Visualizer',
        descKo: '로그 타임라인과 플레이 영상을 상호 매핑하여, 특정 오류 로그 발생 프레임으로 즉각 이동할 수 있는 직관적인 대조 편의 기능을 제공합니다.',
        descEn: 'Interactive visualizer linking log timestamps with recorded video frames, enabling instant jumps to error points.'
      },
      {
        titleKo: '선수 추천 기능 검증 전용 탭 & 실시간 DB 연동',
        titleEn: 'Recommendation Algorithm QA Tab & Live DB Integration',
        descKo: '추천 알고리즘의 Output과 DB 실제 저장 데이터를 한눈에 대조할 수 있는 전용 UI 탭을 개발하여 QA 검증 속도를 대폭 단축했습니다.',
        descEn: 'Dedicated QA UI tab comparing recommendation algorithm outputs directly against live database records in real time.'
      },
      {
        titleKo: '자동화 테스트 결과 - 이슈 티켓 매핑 시스템',
        titleEn: 'Automated Test Failure to Jira Ticket Mapping',
        descKo: '실패한 테스트 케이스 및 에러 패턴을 Jira 등 이슈 티켓과 자동 매칭하여 중복 버그 리포트를 방지하고 원인 분석 속도를 가속화했습니다.',
        descEn: 'Auto-maps failed test cases and error stacks to Jira issue tickets, eliminating duplicate bug reports and accelerating triage.'
      }
    ],
    logId: 'LOG-PROJ-UNKNOWN-001'
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
