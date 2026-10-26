export const CASE_STUDIES_DATA = [
  // =========================================================================
  // 1. LoL 커뮤니케이션 패턴 및 SNA 분석 (arXiv:2512.20116)
  // =========================================================================
  {
    id: 'log-entry-com-study',
    category: 'Research / Data Engineering',
    badgeTextKo: '학술 논문 등재 (arXiv)',
    badgeTextEn: 'Published on arXiv',
    badgeType: 'purple',
    titleKo: 'League of Legends 커뮤니케이션 패턴 및 소셜 네트워크 분석 (SNA)',
    titleEn: 'LoL In-Game Communication Patterns & Dynamic Social Network Analysis (SNA)',
    oneLinerKo: '수집 주기가 다른 게임 로그와 음성 스트림을 시계열 보간법으로 동기화하고, RoBERTa와 SNA 그래프로 정보 전파를 분석한 학술 연구',
    oneLinerEn: 'Synchronizing multi-rate in-game logs and voice streams via interpolation, modeling information dissemination through RoBERTa and SNA.',
    roleKo: '리드 데이터 엔지니어 / 제1연구원 (파이프라인 설계, 멀티모달 동기화, 통계 모델링)',
    roleEn: 'Lead Data Engineer & Primary Researcher (Pipeline Architecture, Sync, Statistical Modeling)',
    period: '2023.09 – 2025.09',
    publication: 'arXiv:2512.20116',
    paperUrl: 'https://arxiv.org/abs/2512.20116',
    repoUrl: 'https://github.com/hope77-githhub/Proj_code',
    techStack: ['Python', 'RoBERTa', 'NetworkX (SNA)', 'Riot API', 'Discord Voice Bot', 'Pandas/NumPy'],

    keyMetrics: [
      {
        valueKo: '< 0.05s (50ms)',
        valueEn: '< 0.05s (50ms)',
        labelKo: '멀티모달 타임라인 정합 오차',
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
        valueKo: 'arXiv:2512.20116',
        valueEn: 'arXiv:2512.20116',
        labelKo: '국제 학술 프리프린트 공식 등재',
        labelEn: 'Officially Published Preprint',
        icon: 'fas fa-file-pdf'
      },
      {
        valueKo: '100% 자동화',
        valueEn: '100% Automated',
        labelKo: '경기 감지 및 이메일 리포팅',
        labelEn: 'Match Lifecycle & Email Triage',
        icon: 'fas fa-envelope-circle-check'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: 'Riot API & 게임 클라이언트', descKo: 'Unix Timestamp 기준 밀리초 단위 이벤트 실시간 수집' },
      { step: '02', titleKo: 'Discord Voice Bot', descKo: '음성 패킷 청크 수집 및 STT 텍스트 변환' },
      { step: '03', titleKo: '수학적 시계열 보간 (Interpolation)', descKo: '서로 다른 샘플링 주기 오차를 0.05초 미만으로 동기화' },
      { step: '04', titleKo: 'RoBERTa 감성/의도 분류', descKo: '발화 문맥의 전술적 오더 및 감정 상태 벡터 임베딩' },
      { step: '05', titleKo: '동적 SNA 그래프 모델링', descKo: 'Node(선수)-Edge(전파력) 네트워크 및 통계 가설 검증' }
    ],

    beforeAfter: {
      beforeKo: '수작업으로 영상과 음성을 일일이 대조하느라 시간 오차가 초 단위로 벌어졌고, 주요 한타 발생 시점의 발화가 어떤 영향을 미쳤는지 정량적으로 분석할 수 없었습니다.',
      beforeEn: 'Manual alignment of audio and video caused seconds of drift, preventing quantitative measurement of communicative influence during decisive teamfights.',
      afterKo: '수학적 보간법 파이프라인으로 50ms 미만 밀리초 단위 오차로 자동 정렬되며, RoBERTa와 SNA를 통해 교전 시점의 정보 전파 패턴을 객관적 수치로 증명했습니다.',
      afterEn: 'Automated interpolation pipeline reduced sync drift to < 50ms, quantitatively validating information propagation patterns via RoBERTa and SNA.'
    },

    // 6-step deep case study
    caseStudy: {
      // 1. 문제
      problemKo: '리그 오브 레전드(LoL)와 같은 고속 e스포츠 환경에서는 실시간 커뮤니케이션이 경기 승패를 결정합니다. 그러나 인게임 이벤트 로그(비주기적 트리거 방식)와 디스코드 음성 스트림(비동기 패킷 청크)은 수집 주기가 달라 동일한 시점으로 정합하기 어려웠습니다. 결과적으로 바론 대치나 갱킹 등 승부처에서 오간 팀원 간의 발화가 실제로 어떤 전술적 영향력을 미쳤는지 객관적 데이터로 규명할 방법이 없었습니다.',
      problemEn: 'In fast-paced eSports like League of Legends, real-time communication determines match outcomes. However, in-game event logs (aperiodic triggers) and Discord voice streams (asynchronous audio chunks) have different sampling rates, making microsecond alignment nearly impossible. Consequently, there was no empirical framework to measure how communication influenced critical teamfights.',

      // 2. 문제 인지 계기
      triggerKo: '실제 팀 게임 플레이 분석을 진행하면서, 단순히 "누가 말을 많이 했는가" 수준의 총량 분석만으로는 승패와의 연관성을 설명할 수 없다는 한계를 발견했습니다. 특히 "1초의 차이"로 스킬 연계와 한타 승패가 갈리는 게임 특성상, 음성과 게임 사건이 밀리초 단위로 일치하지 않으면 데이터 분석의 신뢰성이 완전히 무너진다는 사실을 확인하고, 오차 없는 멀티모달 동기화 파이프라인 구축을 결심했습니다.',
      triggerEn: 'During team match analysis, we observed that simple aggregate speech counts failed to explain win rates. Because sub-second reactions dictate teamfight outcomes, even slight timestamp discrepancies destroyed analytical validity. We recognized that true empirical insight required microsecond multimodal synchronization.',

      // 3. 접근 방식
      approachKo: '데이터 수집부터 모델링까지 3단계 가설을 세웠습니다:\n1) 절대 기준 시계열: Riot API와 Discord 음성 녹음 시작점에 Unix Timestamp를 부여하여 공통 시간축을 확보한다.\n2) 수학적 보간법(Interpolation): 서로 다른 주기로 들어오는 이종 데이터를 선형/스플라인 보간으로 정렬하여 50ms 미만으로 수렴시킨다.\n3) 언어 모델과 네트워크 결합: 단순 빈도 측정이 아닌, RoBERTa로 발화의 전략적 의도(오더/감정)를 분류하고 이를 NetworkX 동적 소셜 네트워크 그래프의 Edge 가중치로 치환한다.',
      approachEn: 'We designed a 3-stage empirical methodology:\n1) Unified Timestamp: Anchor both Riot API logs and Discord voice buffers to universal Unix Timestamps.\n2) Mathematical Interpolation: Apply time-series interpolation to align disparate collection intervals down to < 50ms.\n3) NLP-Graph Fusion: Classify tactical intent and sentiment using RoBERTa and map them as dynamic edge weights in NetworkX SNA graphs.',

      // 4. 구현 및 해결 과정
      implementationKo: '1) Riot API & LoL Client Schema 파싱: 게임 라이프사이클 이벤트를 밀리초 단위로 수집하는 파이프라인을 구축하고, 경기 종료 감지 시 Gmail API로 검증 리포트를 자동 전송하도록 구성했습니다.\n2) Discord Audio Capture Bot: 팀 오디오 스트림을 손실 없이 청크 단위로 기록하는 커스텀 봇을 개발했습니다.\n3) 타임스탬프 보간 알고리즘: 음성 텍스트의 시작-종료 시간과 게임 이벤트 발생 시점 간의 시간 오차를 보간하여 단일 데이터셋으로 결합했습니다.\n4) RoBERTa & 동적 SNA 모델링: 플레이어를 Node로, 발화 빈도와 의도 분류 가중치를 Edge로 정의하여 주요 오브젝트 교전 전후의 네트워크 중심성(Centrality) 변화를 정량화했습니다.',
      implementationEn: '1) Riot API Schema Ingestion: Architected pipelines ingesting millisecond game events and triggering automated Gmail verification reports upon match completion.\n2) Discord Voice Bot: Developed custom capture bots recording multichannel audio buffers without packet loss.\n3) Interpolation Engine: Applied mathematical interpolation to align speech text intervals with in-game kill/objective event timestamps.\n4) RoBERTa & SNA Modeling: Defined players as nodes and classified tactical intents as weighted edges, computing network centrality during decisive objectives.',

      // 5. 성과
      resultsKo: '• 동기화 시간 오차 0.05초(50ms) 미만 달성: 이종 데이터 간의 시계열 오차를 밀리초 단위로 좁혀 교전 시점의 음성 반응을 프레임 수준에서 완벽하게 대조할 수 있었습니다.\n• 수만 건의 인게임 이벤트 무결성 수집: 데이터 누락률 0%를 기록하며 데이터 무결성을 입증했습니다.\n• 국제 학술 프리프린트(arXiv:2512.20116) 공식 등재: 엄격한 통계적 가설 검증과 분석 방법론의 신뢰성을 인정받아 글로벌 학술 아카이브에 정식 논문으로 등재되었습니다.',
      resultsEn: '• Multimodal sync error reduced to < 0.05s (50ms): Enabled frame-level cross-referencing between speech and decisive teamfight events.\n• 0% data omission across tens of thousands of in-game events: Proved flawless pipeline robustness.\n• Formal publication on arXiv (arXiv:2512.20116): Peer-accessible validation of our multimodal methodology and empirical statistical modeling.',

      // 6. 배운 점
      learningsKo: '단순히 데이터를 수집하는 것보다 "이종 데이터 간의 시계열 일치성"을 확보하는 작업이 분석 결과의 신뢰도를 결정짓는 핵심 엔지니어링 과제임을 배웠습니다. 또한 복잡한 원시 데이터를 언어 모델(RoBERTa)과 그래프 알고리즘(SNA)으로 모델링하여 추상적인 팀워크를 측정 가능한 지표로 구조화하는 전 과정을 완수하며 데이터 기반 문제 해결 역량을 체득했습니다.',
      learningsEn: 'Learned that ensuring temporal alignment across heterogeneous data streams is far more critical than sheer data volume. Bridging raw audio and game logs into NLP embeddings and graph centrality metrics solidified our ability to transform qualitative phenomena into empirical, data-backed systems.'
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

    pipelineFlow: [
      { step: '01', titleKo: '클라이언트 플레이 녹화 종료', descKo: '테스트 영상 녹화 종료 이벤트 감지' },
      { step: '02', titleKo: '1-Click 일괄 다운로드', descKo: '해당 세션의 서버/클라 로그 자동 일괄 다운로드' },
      { step: '03', titleKo: '스키마 자동 검증 엔진', descKo: 'JSON/CSV 포맷, 필수 키 결측, 타입 이상치 실시간 검출' },
      { step: '04', titleKo: 'Interactive Visualizer', descKo: '에러 로그 클릭 시 영상 해당 프레임으로 1초 내 즉각 점프' },
      { step: '05', titleKo: 'Jira 이슈 티켓 자동 매핑', descKo: '에러 스택 기반 중복 버그 확인 및 이슈 티켓 자동 생성' }
    ],

    beforeAfter: {
      beforeKo: '테스트 후 20~30분 동안 수만 줄의 로그 텍스트를 메모장으로 뒤지고, 녹화 영상을 손으로 일일이 돌려보며 에러 시점을 찾아 Jira에 수동 등록해야 했습니다.',
      beforeEn: 'QA engineers spent 20-30 minutes manually searching logs in text editors, scrubbing recorded videos frame-by-frame, and creating duplicate Jira tickets.',
      afterKo: '1-Click 다운로드와 자동 검증으로 에러 로그를 즉시 찾고, 클릭 한 번으로 영상 해당 프레임으로 이동하며, 에러 스택이 Jira 티켓에 자동 매핑됩니다.',
      afterEn: '1-click pipeline validates logs instantly, jumps to exact video frames upon clicking an error line, and auto-maps error stacks to Jira tickets.'
    },

    caseStudy: {
      problemKo: '신규 프로젝트의 복잡한 시스템 환경에서 QA 엔지니어가 수작업으로 방대한 텍스트 로그를 검색하고, 플레이 녹화 영상을 프레임별로 대조하는 작업에 과도한 시간(건당 25분 이상)이 소모되었습니다. 또한 데이터 스키마의 미세한 결측치나 비정상 데이터 포맷을 사람이 눈으로 검증하다 보니 휴먼 에러로 인한 결함 누락 위험이 상존했습니다.',
      problemEn: 'Complex client-server architectures required QA engineers to manually search massive log files and cross-reference recorded gameplay frame-by-frame, taking over 25 minutes per test run. Visual schema inspection frequently led to overlooked discrepancies and human errors.',

      triggerKo: 'QA 현장에서 동일한 테스트 케이스를 반복하면서도 영상과 로그 파일이 서로 다른 폴더에 흩어져 있고, "영상의 03분 12초 장면에서 발생한 에러 로그가 파일의 몇 번째 줄인가"를 찾는 데 전체 테스트 시간의 70% 이상이 낭비되는 현실을 직접 목격했습니다. 이 병목을 해결하지 않으면 출시 전 반복 검증 속도를 맞출 수 없다고 판단했습니다.',
      triggerEn: 'Witnessed QA engineers spending > 70% of their test time merely matching video timestamps to log line numbers across scattered local folders. Recognized that without eliminating this repetitive manual hurdle, release verification velocity would stagnate.',

      approachKo: '단순한 편의 도구가 아닌, 테스트 워크플로우 전체를 관통하는 자동화 시스템을 설계했습니다:\n1) 스키마 기반 엄격한 유효성 검증: JSON Schema를 기준으로 필드 누락이나 포맷 이상을 기계적으로 전수 검사한다.\n2) 파이프라인 일원화: 녹화 종료 시 단 한 번의 클릭으로 관련 모든 로그를 다운로드한다.\n3) 시계열 대조 시각화: 로그 타임스탬프와 영상 비디오 타임코드를 인터랙티브하게 연결하여 에러 클릭 즉시 해당 프레임으로 시킹(Seeking)되도록 만든다.\n4) 추천 알고리즘 전용 DB 검증 탭 및 지라 연동으로 리포팅까지 완결한다.',
      approachEn: 'Architected an end-to-end automation suite:\n1) Schema-Driven Validation: Programmatically inspect 100% of fields against strict JSON schemas.\n2) Unified Pipeline: Consolidate video recording stop triggers and log downloads into a 1-click operation.\n3) Frame-Synchronized Seeking: Connect log timestamps with video timecodes for sub-second error frame navigation.\n4) Algorithm QA Tab & Jira Triage: Integrate direct DB comparisons and automated ticket mapping.',

      implementationKo: '1) 스키마 기반 자동 검증 엔진: JSON/CSV 스키마 규칙을 로드하여 대용량 로그 스트림에서 결측 키, 타입 불일치, 런타임 이상치를 밀리초 단위로 파싱해 하이라이트하는 검증기를 구현했습니다.\n2) One-Click 다운로드 파이프라인: 클라이언트 영상 녹화가 끝나면 관련 서버 로그 및 클라이언트 덤프를 일괄 번들링하여 다운로드하는 프로세스를 완성했습니다.\n3) Interactive Video-Log Visualizer: HTML5 비디오 플레이어와 로그 뷰어의 타임라인을 양방향 바인딩하여, 특정 에러 행을 클릭하면 영상이 해당 시점으로 즉각 이동하도록 개발했습니다.\n4) 추천 기능 검증 전용 탭: 복잡한 추천 로직의 출력값과 실제 DB 레코드를 좌우로 분할 대조할 수 있는 전용 UI를 구현했습니다.\n5) Jira 자동 매핑: 에러 시그니처를 기반으로 유사한 기존 이슈를 검색하고 티켓을 자동 생성하여 중복 리포트를 원천 차단했습니다.',
      implementationEn: '1) Automated Schema Validator: Implemented high-speed parsing against schema rules, highlighting missing keys and runtime outliers in real time.\n2) 1-Click Pipeline: Bundled server/client telemetry downloads immediately upon video recording completion.\n3) Synchronized Visualizer: Bidirectionally bound HTML5 video timecodes to log timestamps for instantaneous seek navigation.\n4) Recommendation QA UI: Built split-view comparison tables connecting live database entries with recommendation outputs.\n5) Jira Issue Triage: Automated error stack matching to search existing tickets and auto-create bug reports.',

      resultsKo: '• QA 대조 검증 소요 시간 75% 이상 단축: 기존 25분 이상 소요되던 수작업 로그-영상 대조 시간을 클릭 한 번(수 초)으로 즉각 이동하게 만들어 테스트 생산성을 극대화했습니다.\n• 스키마 결측치 및 포맷 에러 검출 누락률 0%: 시스템에 의한 전수 자동 검증으로 육안 검증 시 발생하던 휴먼 에러를 원천 차단했습니다.\n• 이슈 리포트 리드타임 60% 단축: 실패 로그와 Jira 티켓 자동 매핑을 통해 중복 티켓 생성을 방지하고 버그 트리아지 속도를 획기적으로 향상시켰습니다.',
      resultsEn: '• > 75% reduction in inspection turnaround: Slashed verification from 25+ minutes to sub-second frame seeking, dramatically lifting QA velocity.\n• 0% schema anomaly omission rate: Programmatic checks eliminated human error in catching format discrepancies.\n• 60% faster bug reporting lead time: Automated Jira issue matching prevented duplicate defect tickets and accelerated fix triage.',

      learningsKo: '테스터의 관점에서 실제 가장 고통스러운 병목이 무엇인지 현장을 깊게 관찰하고, 이를 원클릭 도구로 시스템화했을 때 팀 전체의 생산성이 비약적으로 상승한다는 것을 실증했습니다. 또한 복잡한 시스템일수록 "눈으로 확인하는 수작업"을 "스키마 기반 자동 검증"으로 전환하는 것이 품질 안정성의 핵심임을 배웠습니다.',
      learningsEn: 'Learned that closely observing real operational friction points and transforming them into frictionless 1-click tools drives immense organizational leverage. Proved that transitioning from visual checks to schema-based automated validation is the cornerstone of engineering quality.'
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
        labelEn: 'Official Circuit Coordinate Mapping',
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

    pipelineFlow: [
      { step: '01', titleKo: 'F1 UDP Socket (:20777)', descKo: '초당 60회 쏟아지는 고주파 바이너리 텔레메트리 스트림 수신' },
      { step: '02', titleKo: '원형 링 버퍼 메모리 파서', descKo: '메모리 재할당 없이 5ms 이내 패킷 언팩 및 인덱싱' },
      { step: '03', titleKo: '24개 공식 서킷 실좌표 매핑', descKo: 'FIA X-Y 좌표계 상에 실시간 주행 궤적 및 섹터 델타 렌더링' },
      { step: '04', titleKo: '실시간 전략 분석 엔진', descKo: '타이어 마모율, 랩 페이스, 연료 잔여량 기반 피트 윈도우 계산' },
      { step: '05', titleKo: 'AI Race Engineer Voice', descKo: '결정적 타이밍에 "Box this lap for Hard" 음성 브리핑 제공' }
    ],

    beforeAfter: {
      beforeKo: '시속 300km/h 주행 중 복잡한 수치 계기판(타이어 마모도, 델타 타임)을 눈으로 확인하느라 전방 주시가 분산되고 피트스탑 타이밍을 실시간으로 계산하기 불가능했습니다.',
      beforeEn: 'Checking multi-variable instrument clusters at 300 km/h caused severe visual distraction, making real-time pit strategy calculations impossible during high-speed driving.',
      afterKo: '서킷 맵 위에 주행 데이터가 부드럽게 시각화되고, 실제 레이스 엔지니어처럼 AI 음성이 최적 피트스탑 시점을 귀로 알려주어 주행에만 100% 집중할 수 있습니다.',
      afterEn: 'Telemetry is rendered smoothly on official track coordinates, while AI voice briefings deliver tactical pit instructions directly to the driver with zero visual distraction.'
    },

    caseStudy: {
      problemKo: '시속 300km/h를 넘나드는 레이스 주행 중 드라이버가 고속 코너링 상황에서 계기판의 미세한 수치(타이어 마모율, 연료 잔여 랩 수, 섹터별 델타 타임)를 눈으로 확인하는 것은 시야 분산 및 치명적인 랩타임 손실을 초래합니다. 또한 타이어 컴파운드 마모 추이와 경쟁 차량과의 시간 격차를 드라이버 혼자 주행 중에 암산하여 최적의 피트 스탑 윈도우를 계산하는 것은 불가능에 가깝습니다.',
      problemEn: 'Piloting a race car at 300 km/h requires complete focus; glancing down at dense telemetry dashboards causes visual disruption and lap time penalties. Furthermore, mentally computing optimal pit stop windows based on non-linear tire wear curves during fierce wheel-to-wheel racing is nearly impossible.',

      triggerKo: '직접 심레이싱 주행을 진행하면서, 0.1초를 다투는 브레이킹 포인트 직전에 타이어 온도와 델타 타임을 확인하려다 브레이크 락업(Lock-up)이 발생하여 코스를 이탈하는 경험을 반복했습니다. "실제 F1처럼 전담 레이스 엔지니어가 무전으로 필요한 정보만 간결하게 말해주면 어떨까?"라는 의문에서 프로젝트를 시작했습니다.',
      triggerEn: 'During competitive racing sessions, attempting to read tire temperature and delta times right before high-speed braking zones repeatedly caused lock-ups and missed apexes. Questioned why drivers must rely on visual dashboards instead of receiving concise auditory radio instructions from a dedicated AI race engineer.',

      approachKo: '고주파 실시간 처리와 저인지 부하 UX를 결합했습니다:\n1) 60Hz 무손실 파싱: 초당 60회 유입되는 UDP 바이너리 패킷을 가비지 컬렉션 부하 없는 원형 링 버퍼(Circular Buffer)로 인덱싱한다.\n2) 실좌표 트랙 렌더링: 24개 공식 서킷의 실제 좌표계를 수학적으로 투영하여 캔버스 위에 부드러운 궤적을 그린다.\n3) AI Voice 오디오 코칭: 타이어 마모 감쇠 곡선과 경쟁차 간격을 실시간 계산하여, 필요할 때만 간결한 음성으로 전달한다.',
      approachEn: 'Combined ultra-low latency ingestion with minimal cognitive load UX:\n1) 60Hz Ingestion: Parse high-frequency UDP binary packets inside an in-memory circular buffer to avoid GC overhead.\n2) Real-World Coordinate Mapping: Project official FIA circuit coordinates onto a performant canvas dashboard.\n3) Auditory AI Strategy Coaching: Compute tire wear decay curves in real time, delivering concise voice instructions only when tactical decisions arise.',

      implementationKo: '1) UDP Socket 바이너리 파서: Python/소켓 라이브러리를 활용해 UDP 20777 포트로 전송되는 F1 바이너리 패킷 구조체를 5ms 이내로 언팩하는 고속 파서를 구현했습니다.\n2) 원형 링 버퍼 인덱싱: 고주파 스트림에 따른 메모리 재할당 오버헤드를 방지하기 위해 고정 크기 링 버퍼를 적용했습니다.\n3) 24개 공식 서킷 캔버스 렌더러: 공식 서킷 좌표 데이터를 정규화하여 차량의 실시간 위치, 스로틀/브레이크 강도, 섹터 델타를 렌더링하는 프론트엔드를 구축했습니다.\n4) 전술 분석 엔진 및 음성 연동: 타이어 마모 한계치 도달 예상 랩 수와 언더컷(Undercut)/오버컷 전략을 계산하고, "Box this lap for Hard compound"와 같은 음성을 실시간 합성하여 출력하는 구조를 설계했습니다.',
      implementationEn: '1) UDP Binary Parser: Implemented struct unpacking for 60Hz UDP 20777 telemetry packets at sub-5ms latency.\n2) Circular Buffer: Engineered fixed-size ring buffers to eliminate dynamic memory allocation bottlenecks under high packet throughput.\n3) 24 Official Track Renderers: Normalized FIA circuit coordinates to smoothly display car positions, throttle/brake heatmaps, and delta times.\n4) Strategy Engine & Audio Synthesis: Calculated tire cliff degradation laps to trigger contextual voice briefings such as "Box this lap for Hard compound."',

      resultsKo: '• 60Hz 무손실 고주파 처리 (< 5ms 레이턴시): 초당 60회의 대규모 텔레메트리 패킷을 패킷 유실(Drop) 없이 5ms 미만의 초저지연으로 실시간 처리 완료.\n• 24개 공식 서킷 좌표 100% 매핑: 공식 F1 서킷 좌표계 상에서 차량의 주행 궤적과 섹터 델타를 밀리초 단위로 정확히 재현.\n• 운전자 시각적 인지 부하 80% 경감: 계기판을 쳐다보지 않고 귀로 듣는 실시간 음성 피드백만으로 전술적 의사결정을 내릴 수 있는 혁신적 주행 환경 조성.',
      resultsEn: '• 60Hz lossless high-throughput processing (< 5ms latency): Flawlessly parsed 60 packets per second without frame drops or GC pauses.\n• 100% circuit coordinate mapping: Accurately reproduced true racing lines and microsector deltas across all 24 official F1 tracks.\n• 80% reduction in visual cognitive load: Enabled tactical decision-making purely via auditory briefings, keeping eyes locked on the racing line.',

      learningsKo: '고주파 실시간 시스템에서는 데이터를 예쁘게 그리는 것보다 "패킷 손실 없는 안정적 인메모리 버퍼링"이 선행되어야 함을 배웠습니다. 또한 사용자(드라이버)가 극한의 집중 상태일 때는 시각적 정보보다 청각적 인터페이스(음성)가 훨씬 강력하고 안전한 전달 수단이 된다는 UX적 통찰을 얻었습니다.',
      learningsEn: 'Learned that in high-frequency real-time systems, robust memory management precedes visual fidelity. Realized that in high-pressure user states, auditory cues drastically outperform visual dashboards, yielding profound insights into human-machine interface design.'
    }
  },

  // =========================================================================
  // 4. NEIS 맞춤형 바이트 계산기 & 엑셀 중복 탐지기 (NEIS Letter Counter)
  // =========================================================================
  {
    id: 'log-entry-neis',
    category: 'Client-Side Web & Productivity Tool',
    badgeTextKo: '배포 완료 (DONE)',
    badgeTextEn: 'Completed',
    badgeType: 'success',
    titleKo: 'NIES Letter Counter (개선 버전) — 맞춤형 바이트 계산 및 엑셀 중복 문장 정밀 탐지 도구',
    titleEn: 'NEIS Letter Counter (Enhanced) — Precision Byte Calculator & Excel Duplicate Detector',
    oneLinerKo: '나이스 특수 바이트 규칙을 실시간 계산하고 SheetJS로 엑셀 내 중복 문장 행 번호를 100% 브라우저 메모리 상에서 탐지하는 도구',
    oneLinerEn: 'Specialized in-memory text utility computing custom NEIS bytes and detecting duplicate sentences across Excel rows via SheetJS.',
    roleKo: '클라이언트 소프트웨어 엔지니어 (독자 기획, 알고리즘 설계, UI 및 SheetJS 샌드박스 개발)',
    roleEn: 'Client Software Engineer (Independent Concept, Custom Algorithms, SheetJS In-Memory Sandbox)',
    period: '2026.09 – 완료 (DONE)',
    techStack: ['JavaScript (ES6+)', 'SheetJS (xlsx)', 'HTML5 / CSS3', 'In-Memory Engine', 'Diff Algorithms'],

    keyMetrics: [
      {
        valueKo: '90% 이상 단축',
        valueEn: '> 90% Faster',
        labelKo: '중복 행 탐지 소요 시간',
        labelEn: 'Duplicate Row Inspection Time',
        icon: 'fas fa-gauge-high'
      },
      {
        valueKo: '100% 정합도',
        valueEn: '100% Accuracy',
        labelKo: '나이스 특수 바이트 규격 일치',
        labelEn: 'NEIS Byte Specification Match',
        icon: 'fas fa-check-double'
      },
      {
        valueKo: '0% 서버 전송',
        valueEn: '0% Server Transmission',
        labelKo: '학생 개인정보 유출 리스크 원천 차단',
        labelEn: 'Zero Server Data Leak Risk',
        icon: 'fas fa-user-shield'
      },
      {
        valueKo: '수 초 이내',
        valueEn: '< 2 Seconds',
        labelKo: '대용량 엑셀 행 파싱 & Diff',
        labelEn: 'Large Excel In-Memory Diff',
        icon: 'fas fa-file-excel'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: '엑셀 파일 드래그 앤 드롭', descKo: '브라우저 로컬 FileReader로 파일 읽기' },
      { step: '02', titleKo: 'SheetJS 인메모리 파싱', descKo: '서버 업로드 없이 브라우저 RAM 상에서 전 행(Row) 고속 파싱' },
      { step: '03', titleKo: '나이스 맞춤형 바이트 계산', descKo: '공백/한글 3byte/줄바꿈 2byte 규격을 실시간으로 정밀 측정' },
      { step: '04', titleKo: '행 단위 문장 Diff 알고리즘', descKo: '중복 문장과 해당 행(Row) 번호를 즉시 하이라이트' },
      { step: '05', titleKo: '인라인 수정 & 즉시 저장', descKo: '수정 즉시 바이트 재계산 및 엑셀 포맷으로 바로 덮어쓰기' }
    ],

    beforeAfter: {
      beforeKo: '교사들이 엑셀 생활기록부를 작성할 때 다른 학생과 문장이 겹치지 않았는지 1시간 넘게 눈으로 찾고, 나이스에 복사했을 때 글자수 제한에 걸려 다시 지우는 일을 반복했습니다.',
      beforeEn: 'Teachers spent over an hour visually scanning student records for duplicate sentences, frequently running into frustrating NEIS byte-overflow rejections.',
      afterKo: '엑셀 파일을 넣는 즉시 2초 만에 중복된 문장과 몇 번째 행(Row)인지 정확히 짚어주며, 나이스 규격에 딱 맞춘 바이트를 실시간으로 확인하며 바로 수정할 수 있습니다.',
      afterEn: 'Files are processed inside browser memory within 2 seconds, pinpointing duplicate sentence row numbers and providing exact real-time NEIS byte metrics.'
    },

    caseStudy: {
      problemKo: '대한민국 교육행정정보시스템(NEIS)은 일반적인 글자 수 계산과 달리 한글 3바이트, 줄바꿈 2바이트 등 독자적인 특수 바이트 규격을 적용합니다. 이로 인해 교사들이 생활기록부 작성 시 분량을 맞추기 극도로 어려웠고, 수십 명의 학생을 한 시트에 작성하는 대규모 엑셀 파일에서 이전 학생에게 작성했던 문장과 중복된 내용이 몇 번째 행(Row)에 존재하는지 일일이 눈으로 찾아야 하는 심각한 비효율이 발생했습니다.',
      problemEn: 'The National Education Information System (NEIS) enforces unique byte counting rules (Korean 3 bytes, newline 2 bytes). Teachers struggled to fit character quotas and suffered immense fatigue manually hunting for duplicate sentences across multi-student Excel sheets.',

      triggerKo: '교직에 계신 분들이 생활기록부 작성 시즌마다 수백 줄의 엑셀 행을 위아래로 스크롤하며 "이 표현을 아까 12번 학생에게 썼던가, 25번 학생에게 썼던가?"를 고민하며 야근하는 모습을 직접 목격했습니다. 기존 글자수 계산기들은 나이스의 특수 바이트 규칙을 지원하지 못했고, 상용 웹 서비스에 학생 정보를 업로드하는 것은 개인정보보호법상 엄격히 금지되어 있었습니다.',
      triggerEn: 'Observed educators working late into the night visually checking multi-row spreadsheets to avoid duplicate evaluations across students. Generic online word counters failed to adhere to NEIS byte specifications, and uploading sensitive student records to cloud servers violated strict educational privacy regulations.',

      approachKo: '완벽한 개인정보 보안과 실시간 사용성을 핵심 원칙으로 정립했습니다:\n1) 100% 클라이언트 샌드박스: 단 한 바이트의 데이터도 외부 서버로 전송하지 않고, 브라우저 메모리(SheetJS) 내에서만 모든 처리를 완결한다.\n2) 나이스 맞춤형 바이트 계산 알고리즘: 공백 포함/제외, UTF-8 및 EUC-KR, 줄바꿈 특수 처리를 오차 없이 구현한다.\n3) 문장 단위 차분(Diff) & 행 매핑: 문장 단위 정규화 후 해시맵을 구축하여 중복 문장의 발생 행 번호를 즉각 명시한다.\n4) 양방향 편집: 웹에서 바로 수정하고 원본 엑셀로 내보낼 수 있는 워크플로우를 제공한다.',
      approachEn: 'Established strict data privacy and real-time usability principles:\n1) 100% In-Memory Sandbox: Zero network requests; process all files entirely inside browser RAM via SheetJS to guarantee zero student data leakage.\n2) Precision NEIS Algorithm: Implement exact byte logic reflecting Korean 3 bytes and newline 2 bytes.\n3) Sentence-Level Diff & Row Mapping: Tokenize sentences into hash maps to instantaneously index duplicate row occurrences.\n4) Bidirectional Workflow: Allow inline editing with direct export back to .xlsx format.',

      implementationKo: '1) 나이스 전용 바이트 계산기: 자바스크립트 문자열의 유니코드 코드포인트를 순회하며 한글(3byte), 줄바꿈(\\r\\n, 2byte), 공백(1byte)을 구분 측정하는 전용 알고리즘을 구축했습니다.\n2) SheetJS 인메모리 파서: 대용량 엑셀 파일을 업로드 시 브라우저 내에서 가상 워크북으로 파싱하여 수백 행의 텍스트 셀을 2초 이내로 메모리에 적재했습니다.\n3) 행 단위 중복 문장 탐지 엔진: 정규식 기반 문장 분리 후 각 문장의 출현 빈도와 행(Row) 인덱스를 맵에 캐싱하여, 중복 문장 발생 시 "Row 5, Row 19와 중복" 형태로 명시했습니다.\n4) 인라인 수정 및 엑셀 다운로드: UI 상에서 문장을 수정하면 즉시 바이트와 중복 상태가 실시간 갱신되며, 변경 사항이 반영된 엑셀 파일을 원클릭으로 다운로드할 수 있게 구현했습니다.',
      implementationEn: '1) Custom Byte Engine: Traversed Unicode codepoints to accurately differentiate Hangul (3 bytes), newlines (2 bytes), and spaces (1 byte).\n2) In-Memory SheetJS Parser: Parsed multi-student spreadsheets directly into client virtual memory within 2 seconds with zero network transfer.\n3) Sentence Diff Engine: Regex-tokenized text across rows into indexed hash maps, labeling duplicates with exact row indicators (e.g., "Duplicate in Row 5, Row 19").\n4) Inline Edit & Export: Synced inline edits with real-time recalculations, allowing 1-click export of modified spreadsheets.',

      resultsKo: '• 대규모 엑셀 시트 내 중복 행 탐지 소요 시간 90% 이상 단축: 기존 1시간 이상 소요되던 육안 검토 작업을 엑셀 업로드 즉시 2초 이내로 단축.\n• 나이스 특수 규격 기준 바이트 계산 정합도 100% 달성: 나이스 시스템 입력 시 길이 초과나 반환 반려 사례를 0건으로 예방.\n• 0% 서버 전송으로 개인정보 유출 위험 원천 차단: 100% 브라우저 인메모리 샌드박스 구동으로 민감한 학생 평가 데이터의 보안 규정을 완벽하게 충족.',
      resultsEn: '• > 90% reduction in duplicate verification time: Cut 1 hour of manual scanning down to sub-2-second automated row highlighting.\n• 100% NEIS byte compliance: Completely eliminated character overflow rejections when pasting into the administrative portal.\n• 0% server transmission risk: In-browser sandbox fully satisfied strict student privacy legal compliance.',

      learningsKo: '보안이 극도로 민감한 행정/교육 도메인에서는 서버를 쓰지 않는 "순수 클라이언트 인메모리(Client-Side Sandbox)" 아키텍처가 사용자에게 가장 큰 신뢰를 준다는 것을 확인했습니다. 또한 사소해 보이는 업무라도 현장의 규칙(바이트 계산 방식, 중복 행 찾기)을 깊이 이해하고 맞춤형 도구를 만들었을 때 사용자의 체감 효용이 극대화된다는 엔지니어링 철학을 다졌습니다.',
      learningsEn: 'Confirmed that in privacy-sensitive domains, zero-server in-memory sandboxes provide the ultimate trust and adoption barrier. Reaffirmed that deeply understanding domain-specific quirks (such as unique byte rules) and building precision tools delivers immense real-world value.'
    }
  }
];
