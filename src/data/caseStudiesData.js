import f1Img1 from '../assets/images/f1/01_session_configuration.png';
import f1Img2 from '../assets/images/f1/02_lap_history_and_setup.png';
import f1Img3 from '../assets/images/f1/03_corner_analysis_matrix.png';
import f1Img4 from '../assets/images/f1/04_circuit_map_and_sectors.png';

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
    titleKo: 'RTS (LOL) Communication pattern 연구',
    titleEn: 'RTS (LOL) Communication Pattern Research',
    tabLabelKo: 'RTS (LOL) 연구',
    tabLabelEn: 'RTS (LOL) Research',
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

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (문제 정의 및 배경)',
        titleEn: '01. Background & Problem (Problem Context & Bottlenecks)',
        contentKo: '리그 오브 레전드(LoL)와 같은 고속 e스포츠 환경에서는 실시간 커뮤니케이션이 경기 승패를 결정합니다. 그러나 인게임 이벤트 로그(비주기적 트리거 방식)와 디스코드 음성 스트림(비동기 패킷 청크)은 수집 주기가 달라 동일한 시점으로 정합하기 어려웠습니다. 결과적으로 바론 대치나 갱킹 등 승부처에서 오간 팀원 간의 발화가 실제로 어떤 전술적 영향력을 미쳤는지 객관적 데이터로 규명할 방법이 없었습니다.',
        contentEn: 'In fast-paced eSports like League of Legends, real-time communication determines match outcomes. However, in-game event logs (aperiodic triggers) and Discord voice streams (asynchronous audio chunks) have different sampling rates, making microsecond alignment nearly impossible. Consequently, there was no empirical framework to measure how communication influenced critical teamfights.'
      },
      {
        num: '02',
        titleKo: '02. Discovery & Trigger (문제 인지 계기)',
        titleEn: '02. Discovery & Trigger (Discovery Context)',
        contentKo: '실제 팀 게임 플레이 분석을 진행하면서, 단순히 "누가 말을 많이 했는가" 수준의 총량 분석만으로는 승패와의 연관성을 설명할 수 없다는 한계를 발견했습니다. 특히 "1초의 차이"로 스킬 연계와 한타 승패가 갈리는 게임 특성상, 음성과 게임 사건이 밀리초 단위로 일치하지 않으면 데이터 분석의 신뢰성이 완전히 무너진다는 사실을 확인하고, 오차 없는 멀티모달 동기화 파이프라인 구축을 결심했습니다.',
        contentEn: 'During team match analysis, we observed that simple aggregate speech counts failed to explain win rates. Because sub-second reactions dictate teamfight outcomes, even slight timestamp discrepancies destroyed analytical validity. We recognized that true empirical insight required microsecond multimodal synchronization.'
      },
      {
        num: '03',
        titleKo: '03. Approach & Methodology (접근 전략 및 가설)',
        titleEn: '03. Approach & Methodology (Strategic Hypotheses)',
        contentKo: '데이터 수집부터 모델링까지 3단계 가설을 세웠습니다:\n1) 절대 기준 시계열: Riot API와 Discord 음성 녹음 시작점에 Unix Timestamp를 부여하여 공통 시간축을 확보한다.\n2) 수학적 보간법(Interpolation): 서로 다른 주기로 들어오는 이종 데이터를 선형/스플라인 보간으로 정렬하여 50ms 미만으로 수렴시킨다.\n3) 언어 모델과 네트워크 결합: 단순 빈도 측정이 아닌, RoBERTa로 발화의 전략적 의도(오더/감정)를 분류하고 이를 NetworkX 동적 소셜 네트워크 그래프의 Edge 가중치로 치환한다.',
        contentEn: 'We designed a 3-stage empirical methodology:\n1) Unified Timestamp: Anchor both Riot API logs and Discord voice buffers to universal Unix Timestamps.\n2) Mathematical Interpolation: Apply time-series interpolation to align disparate collection intervals down to < 50ms.\n3) NLP-Graph Fusion: Classify tactical intent and sentiment using RoBERTa and map them as dynamic edge weights in NetworkX SNA graphs.'
      },
      {
        num: '04',
        titleKo: '04. Implementation & System (구현 및 해결 과정)',
        titleEn: '04. Implementation & System (Engineering Execution)',
        contentKo: '1) Riot API & LoL Client Schema 파싱: 게임 라이프사이클 이벤트를 밀리초 단위로 수집하는 파이프라인을 구축하고, 경기 종료 감지 시 Gmail API로 검증 리포트를 자동 전송하도록 구성했습니다.\n2) Discord Audio Capture Bot: 팀 오디오 스트림을 손실 없이 청크 단위로 기록하는 커스텀 봇을 개발했습니다.\n3) 타임스탬프 보간 알고리즘: 음성 텍스트의 시작-종료 시간과 게임 이벤트 발생 시점 간의 시간 오차를 보간하여 단일 데이터셋으로 결합했습니다.\n4) RoBERTa & 동적 SNA 모델링: 플레이어를 Node로, 발화 빈도와 의도 분류 가중치를 Edge로 정의하여 주요 오브젝트 교전 전후의 네트워크 중심성(Centrality) 변화를 정량화했습니다.',
        contentEn: '1) Riot API Schema Ingestion: Architected pipelines ingesting millisecond game events and triggering automated Gmail verification reports upon match completion.\n2) Discord Voice Bot: Developed custom capture bots recording multichannel audio buffers without packet loss.\n3) Interpolation Engine: Applied mathematical interpolation to align speech text intervals with in-game kill/objective event timestamps.\n4) RoBERTa & SNA Modeling: Defined players as nodes and classified tactical intents as weighted edges, computing network centrality during decisive objectives.'
      },
      {
        num: '05',
        titleKo: '05. Quantitative Results (정량 성과 및 논문 등재)',
        titleEn: '05. Quantitative Results (Measurable Impact)',
        highlight: true,
        contentKo: '• 동기화 시간 오차 0.05초(50ms) 미만 달성: 이종 데이터 간의 시계열 오차를 밀리초 단위로 좁혀 교전 시점의 음성 반응을 프레임 수준에서 완벽하게 대조할 수 있었습니다.\n• 수만 건의 인게임 이벤트 무결성 수집: 데이터 누락률 0%를 기록하며 데이터 무결성을 입증했습니다.\n• 국제 학술 프리프린트(arXiv:2512.20116) 공식 등재: 엄격한 통계적 가설 검증과 분석 방법론의 신뢰성을 인정받아 글로벌 학술 아카이브에 정식 논문으로 등재되었습니다.',
        contentEn: '• Multimodal sync error reduced to < 0.05s (50ms): Enabled frame-level cross-referencing between speech and decisive teamfight events.\n• 0% data omission across tens of thousands of in-game events: Proved flawless pipeline robustness.\n• Formal publication on arXiv (arXiv:2512.20116): Peer-accessible validation of our multimodal methodology and empirical statistical modeling.'
      },
      {
        num: '06',
        titleKo: '06. Learnings & Retrospective (회고 및 배운 점)',
        titleEn: '06. Learnings & Retrospective (Key Takeaways)',
        contentKo: '단순히 데이터를 수집하는 것보다 "이종 데이터 간의 시계열 일치성"을 확보하는 작업이 분석 결과의 신뢰도를 결정짓는 핵심 엔지니어링 과제임을 배웠습니다. 또한 복잡한 원시 데이터를 언어 모델(RoBERTa)과 그래프 알고리즘(SNA)으로 모델링하여 추상적인 팀워크를 측정 가능한 지표로 구조화하는 전 과정을 완수하며 데이터 기반 문제 해결 역량을 체득했습니다.',
        contentEn: 'Learned that ensuring temporal alignment across heterogeneous data streams is far more critical than sheer data volume. Bridging raw audio and game logs into NLP embeddings and graph centrality metrics solidified our ability to transform qualitative phenomena into empirical, data-backed systems.'
      }
    ]
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
    tabLabelKo: 'Unknown QA 도구',
    tabLabelEn: 'Unknown QA Tool',
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

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (문제 정의 및 병목)',
        titleEn: '01. Background & Problem (Problem Context & Inefficiencies)',
        contentKo: '신규 프로젝트의 복잡한 시스템 환경에서 QA 엔지니어가 수작업으로 방대한 텍스트 로그를 검색하고, 플레이 녹화 영상을 프레임별로 대조하는 작업에 과도한 시간이 소모되었습니다. 로그 검색 도구의 파편화와 수동 검증 방식으로 인해 테스트 후 결함 분석까지 20~30분 이상 지연되었으며, 결측치 누락 및 중복 이슈 발행이 잦아 개발-QA 간 커뮤니케이션 비용이 매우 컸습니다.',
        contentEn: 'In complex project test environments, QA engineers spent excessive time manually parsing dense text logs and cross-referencing gameplay video recordings. Fragmented tools caused 20-30 minute verification bottlenecks per defect, leading to missed schema anomalies and duplicate Jira issues that slowed developer turnaround.'
      },
      {
        num: '02',
        titleKo: '02. Discovery & Trigger (문제 인지 계기)',
        titleEn: '02. Discovery & Trigger (Discovery Context)',
        contentKo: 'QA 현장에서 엔지니어들이 듀얼 모니터에 영상 플레이어와 텍스트 에디터를 나란히 띄워두고 초 단위로 일시정지를 반복하며 버그 발생 타임스탬프를 손으로 기록하는 비효율을 직접 목격했습니다. "영상 타임코드와 서버/클라이언트 로그 타임스탬프를 원클릭으로 동기화하고 스키마를 자동 검증할 수 있다면 검증 시간을 획기적으로 줄일 수 있다"는 확신을 가지고 자체 툴링 개발에 착수했습니다.',
        contentEn: 'Observed engineers painfully pausing screen recordings second-by-second on one monitor while manually scrolling log files on another to locate bug timestamps. Realized that linking video timecodes to server/client timestamps and validating schemas programmatically would drastically accelerate verification velocity.'
      },
      {
        num: '03',
        titleKo: '03. Approach & Methodology (접근 전략 및 설계)',
        titleEn: '03. Approach & Methodology (Strategic Architecture)',
        contentKo: '현장의 피로도를 없애기 위해 4대 설계 원칙을 수립했습니다:\n1) 단일 통합 파이프라인: 녹화 종료 시점 감지부터 로그 번들 다운로드까지를 1-Click으로 묶는다.\n2) 스키마 기반 자동화: 사람이 눈으로 찾기 전에 JSON Schema 검증기가 결측 키와 비정상 데이터 타입을 즉시 붉은색으로 하이라이트한다.\n3) 인터랙티브 타임라인 연동: 에러 로그 라인을 클릭하면 HTML5 비디오가 해당 프레임으로 1초 이내에 자동 탐색(Seek)하도록 구축한다.\n4) 이슈 트래커 직결: 에러 스택 시그니처를 기반으로 유사한 Jira 이슈를 검색하고 티켓 작성을 자동화한다.',
        contentEn: 'Established four core engineering tenets:\n1) Unified Pipeline: Consolidate session recording completion to log downloading into a single click.\n2) Schema-Driven Automation: Programmatically validate logs against strict JSON Schemas to highlight anomalies before human inspection.\n3) Interactive Time-Sync: Enable 1-second video seek jumps upon clicking any log line.\n4) Defect Auto-Triage: Search similar Jira bugs by error signatures to streamline reporting.'
      },
      {
        num: '04',
        titleKo: '04. Implementation & System (구현 및 해결 과정)',
        titleEn: '04. Implementation & System (Engineering Execution)',
        contentKo: '1) 스키마 자동 검증기: 대용량 텍스트 로그를 고속 스트리밍 파싱하여 필수 필드 누락 및 포맷 에러를 실시간으로 집계하는 검증 엔진을 구축했습니다.\n2) 1-Click 다운로더: 플레이 녹화가 종료되면 해당 세션의 서버/클라이언트 로그를 자동으로 수집해 압축 패키징하는 파이프라인을 연동했습니다.\n3) Interactive Log-Video Player: 브라우저 상에서 비디오 재생 시간(HTML5 Video currentTime)과 로그의 Unix Timestamp를 양방향 바인딩하여, 로그 클릭 시 즉시 해당 플레이 영상 프레임으로 이동하는 뷰어를 개발했습니다.\n4) 추천 기능 검증 전용 탭: 복잡한 추천 로직의 출력값과 실제 DB 레코드를 좌우로 분할 대조할 수 있는 전용 UI를 구현했습니다.\n5) Jira 자동 매핑: 에러 시그니처를 기반으로 유사한 기존 이슈를 검색하고 티켓을 자동 생성하여 중복 리포트를 원천 차단했습니다.',
        contentEn: '1) Automated Schema Validator: Implemented high-speed parsing against schema rules, highlighting missing keys and runtime outliers in real time.\n2) 1-Click Pipeline: Bundled server/client telemetry downloads immediately upon video recording completion.\n3) Synchronized Visualizer: Bidirectionally bound HTML5 video timecodes to log timestamps for instantaneous seek navigation.\n4) Recommendation QA UI: Built split-view comparison tables connecting live database entries with recommendation outputs.\n5) Jira Issue Triage: Automated error stack matching to search existing tickets and auto-create bug reports.'
      },
      {
        num: '05',
        titleKo: '05. Quantitative Results (정량 성과 및 생산성 개선)',
        titleEn: '05. Quantitative Results (Measurable Impact)',
        highlight: true,
        contentKo: '• QA 대조 검증 소요 시간 75% 이상 단축: 기존 25분 이상 소요되던 수작업 로그-영상 대조 시간을 클릭 한 번(수 초)으로 즉각 이동하게 만들어 테스트 생산성을 극대화했습니다.\n• 스키마 결측치 및 포맷 에러 검출 누락률 0%: 시스템에 의한 전수 자동 검증으로 육안 검증 시 발생하던 휴먼 에러를 원천 차단했습니다.\n• 이슈 리포트 리드타임 60% 단축: 실패 로그와 Jira 티켓 자동 매핑을 통해 중복 티켓 생성을 방지하고 버그 트리아지 속도를 획기적으로 향상시켰습니다.',
        contentEn: '• > 75% reduction in inspection turnaround: Slashed verification from 25+ minutes to sub-second frame seeking, dramatically lifting QA velocity.\n• 0% schema anomaly omission rate: Programmatic checks eliminated human error in catching format discrepancies.\n• 60% faster bug reporting lead time: Automated Jira issue matching prevented duplicate defect tickets and accelerated fix triage.'
      },
      {
        num: '06',
        titleKo: '06. Learnings & Retrospective (회고 및 배운 점)',
        titleEn: '06. Learnings & Retrospective (Key Takeaways)',
        contentKo: '테스터의 관점에서 실제 가장 고통스러운 병목이 무엇인지 현장을 깊게 관찰하고, 이를 원클릭 도구로 시스템화했을 때 팀 전체의 생산성이 비약적으로 상승한다는 것을 실증했습니다. 또한 복잡한 시스템일수록 "눈으로 확인하는 수작업"을 "스키마 기반 자동 검증"으로 전환하는 것이 품질 안정성의 핵심임을 배웠습니다.',
        contentEn: 'Learned that closely observing real operational friction points and transforming them into frictionless 1-click tools drives immense organizational leverage. Proved that transitioning from visual checks to schema-based automated validation is the cornerstone of engineering quality.'
      }
    ]
  },

  // =========================================================================
  // 3. Real-Time AI Race Engineer (실시간 텔레메트리 & AI 음성 솔루션)
  // =========================================================================
  {
    id: 'log-entry-f1',
    category: 'Real-Time Telemetry & Systems',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'Active Project',
    badgeType: 'info',
    titleKo: 'Real-Time AI Race Engineer Project — 실시간 텔레메트리 & 음성 AI 솔루션',
    titleEn: 'Real-Time AI Race Engineer — Live Telemetry & AI Voice Solution',
    tabLabelKo: 'F1 텔레메트리 AI',
    tabLabelEn: 'F1 Telemetry AI',
    oneLinerKo: '60Hz 고주파 UDP 텔레메트리 파싱, 24개 공식 서킷 실좌표 매핑 및 실제 레이스 엔지니어 음성 코칭을 제공하는 심레이싱 전문 분석 대시보드',
    oneLinerEn: 'Institutional-grade telemetry dashboard capturing 60Hz UDP packets, mapping 24 official circuits, and delivering auditory race engineer coaching.',
    roleKo: '텔레메트리 시스템 & 풀스택 엔지니어 (전체 파이프라인 기획, UDP 파서, 물리 역산 엔진, 서킷 Canvas 렌더링, AI 음성 연동)',
    roleEn: 'Telemetry Systems & Full-Stack Engineer (Pipeline Architecture, UDP Parser, Kinematics Engine, Canvas Map, AI Voice)',
    period: '2026.09 – 현재 (Active)',
    repoUrl: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer',
    techStack: ['Python', 'FastAPI', 'UDP Socket (:20777)', 'React & SVG', 'WebSocket', 'Circular Ring Buffer', 'AI Voice (TTS)', 'JetBrains Mono'],

    keyMetrics: [
      {
        valueKo: '60Hz 무손실',
        valueEn: '60Hz Lossless',
        labelKo: '고주파 UDP 패킷 실시간 파싱',
        labelEn: 'High-Frequency UDP Parsing',
        icon: 'fas fa-network-wired'
      },
      {
        valueKo: '< 5ms',
        valueEn: '< 5ms',
        labelKo: '원형 버퍼 인덱싱 레이턴시',
        labelEn: 'Circular Buffer Latency',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '~28ms',
        valueEn: '~28ms',
        labelKo: '고속 디스크 캐시 로드 속도',
        labelEn: 'Disk Cache Lap Loading',
        icon: 'fas fa-microchip'
      },
      {
        valueKo: '24개 서킷',
        valueEn: '24 Circuits',
        labelKo: '공식 F1 서킷 실좌표 매핑',
        labelEn: 'Official Track Coordinate Mapping',
        icon: 'fas fa-map-location-dot'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: 'F1 UDP Socket (:20777)', descKo: '초당 60회 전송되는 모션/세션/랩/셋업/텔레메트리/대미지 바이너리 패킷 실시간 수신' },
      { step: '02', titleKo: 'CircuitDataManager & 트랙 보간', descKo: '3~4m 간격 레퍼런스 트랙 좌표 및 벡터 외적(Cross-Product) 기반 곡률(Curvature) 계산' },
      { step: '03', titleKo: 'StateManager & 동적 에이펙스 탐색', descKo: '코너 구간 내 최저 속도 지점(Dynamic Apex) 및 제동(Brake)/가속(Throttle-On) 지점 역산' },
      { step: '04', titleKo: '초고속 디스크 캐시 (~28ms)', descKo: '수백 MB급 텔레메트리 랩 세그먼트를 사전 파싱하여 메모리 병목 없이 즉각 로드' },
      { step: '05', titleKo: 'WebSocket 실시간 스트림 & 대시보드', descKo: 'Hero 텔레메트리, 코너 매트릭스, 인터랙티브 서킷 맵 및 AI 엔지니어 음성 실시간 전달' }
    ],

    beforeAfter: {
      beforeKo: '시속 300km/h 주행 중 미세한 계기판 수치(타이어 마모율, 델타 타임)를 눈으로 확인하느라 전방 시야가 분산되고, 주행 후에도 내가 왜 특정 코너에서 느렸는지 자가 피드백할 수 있는 전문 도구가 전무했습니다.',
      beforeEn: 'Checking dense gauges at 300 km/h caused dangerous visual distraction, and drivers lacked empirical tools to analyze why they lost time in specific corners or evaluate their driving.',
      afterKo: '실제 F1 엔지니어(Bono, GP, Ricky)의 음성으로 타이어 상태와 피트스탑 시점을 귀로 실시간 전달받고, 랩 종료 후 코너별 제동 거리, 동적 에이펙스 궤적, 라이벌 대비 속도 델타를 한눈에 비교 분석할 수 있습니다.',
      afterEn: 'Real-time radio briefings from AI engineer personas deliver tactical calls hands-free, while post-session matrices reveal braking points, dynamic apex drift, and rival velocity deltas.'
    },

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (배경 및 문제점)',
        titleEn: '01. Background & Problem (Simulation Context & Tooling Gap)',
        contentKo: 'F1 25 / 26과 같은 고속 심레이싱 환경에서는 시속 300km/h를 넘나드는 극한의 속도로 코너를 공략하며 0.1초 단위의 랩타임을 다툽니다.\n하지만 주행 중 드라이버가 고속 코너링과 헤어핀 제동 상황에서 스티어링 휠이나 온스크린 계기판의 미세한 수치(타이어 표면 마모도, 연료 잔여 랩 수, 섹터별 델타 타임)를 눈으로 확인하려 하면 치명적인 시야 분산이 발생해 랩타임 손실이나 브레이크 락업(Lock-up)으로 이어집니다.\n무엇보다 심레이싱 유저 입장에서 "내가 왜 특정 코너에서 느렸는지, 브레이킹 포인트(Braking Point)는 적절했는지, 타이어 관리는 올바르게 이루어지고 있는지"를 스스로 분석하고 피드백할 수 있는 전문적인 도구가 부족하다는 점을 게임을 직접 플레이하면서 깊이 절감했습니다.\n기존 게임 내 UI나 단순 텔레메트리 뷰어들은 원시 숫자를 나열하는 데 그쳐, 드라이버가 주행 직후 자신의 주행 라인과 페달 조작을 입체적으로 점검하고 실력을 향상시키기 위한 실질적 피드백 루프를 제공하지 못했습니다.',
        contentEn: 'Piloting modern Formula 1 cars at 300+ km/h requires absolute visual focus. Glancing down at dense on-screen gauges to inspect tire wear, fuel deltas, or split times causes dangerous cognitive disruption and costly lock-ups.\nCrucially, while actively playing the game, we recognized a fundamental gap: sim racers completely lack institutional-grade engineering tools to evaluate and self-correct their driving technique.\nStandard in-game dashboards and rudimentary telemetry viewers merely list raw numbers without structured kinematics context, preventing drivers from diagnosing why they lost time in a corner, whether their braking point was optimal, or how to systematically improve lap after lap.'
      },
      {
        num: '02',
        titleKo: '02. Introduction & Objective (도입 배경 및 개발 목표)',
        titleEn: '02. Introduction & Objective (Race Engineer Persona & Realism)',
        contentKo: '실제 포뮬러 1(F1) 경기에서는 드라이버가 계기판을 보며 혼자 모든 판단을 내리지 않습니다. 피트월(Pitwall)의 전담 레이스 엔지니어가 무전(Radio)을 통해 현재 타이어 컴파운드 마모 상태, 경쟁 차량과의 코너 속도 득실, 최적의 피트스탑 윈도우(Pit Window)를 실시간으로 브리핑해 줍니다.\n이에 착안하여 실제 F1 레이스 엔지니어의 실제 목소리(Max Verstappen의 "GP", Lewis Hamilton의 "Bono", Carlos Sainz의 "Ricky" 등)를 음성 합성(TTS)으로 구현하여, 게임의 몰입도와 현실감을 극대화하는 것을 핵심 목표로 설정했습니다.\n동시에 단순 오디오 피드백을 넘어, 엔지니어링 피트월급의 고정밀 텔레메트리 대시보드를 구축하여 "드라이버가 주행 중에는 귀로 실시간 코칭을 받고, 주행 후에는 코너별 키네마틱스 분석을 통해 스스로 드라이빙을 개선할 수 있는 올인원 레이스 엔지니어링 솔루션"을 완성하고자 했습니다.',
        contentEn: 'In real-world Formula 1, drivers never race in isolation; dedicated pitwall race engineers constantly broadcast real-time telemetry updates over team radio regarding tire degradation, competitor deltas, and pit windows.\nInspired by this dynamic, our primary objective was to integrate authentic race engineer voice personas (such as Max Verstappen\'s "GP", Lewis Hamilton\'s "Bono", and Carlos Sainz\'s "Ricky") to maximize realism and emotional immersion.\nSimultaneously, we engineered an institutional-grade pitwall web dashboard combining auditory race briefings with deep turn-by-turn kinematics, creating a complete feedback loop where drivers receive real-time audio calls during racing and deep analytical insight post-session.'
      },
      {
        num: '03',
        titleKo: '03. Data Pipeline Architecture (전체 데이터 파이프라인)',
        titleEn: '03. Data Pipeline Architecture (Three-Tier Ingestion & Processing)',
        contentKo: '본 시스템은 3가지 이종 데이터 소스를 결합하여 실시간으로 정밀 동기화합니다 (DATA_AND_RENDERING_GUIDE.md 참조):\n\n1) 주행 텔레메트리 데이터 (F1 실시간 UDP 패킷)\n• Packet 0 (Motion): 3D 월드 좌표 (X, Z) 및 코너링 횡가속도(Lateral G) 측정\n• Packet 1 (Session): 트랙 ID, 날씨/트랙 온도, 섹터 1·2·3 분할선(S1, S2, S3) 거리 기준 제공\n• Packet 2 (Lap Data): 차량 주행 거리(m_lapDistance), 경과 시간, 순위 및 앞차/선두 간격 계산\n• Packet 5 (Car Setup) & Packet 6 (Car Telemetry): 에어로/브레이크 셋업, 속도, 스로틀, 브레이크, 기어\n• Packet 10 (Car Damage): 4개 타이어(FL, FR, RL, RR) 실시간 표면 마모도 및 랩당 소모량 산출\n• Packet 11 (Session History): 각 랩의 공식 최종 랩타임 및 공식 섹터 1·2·3 기록 추출\n\n2) 서킷 레퍼런스 레이싱 라인 (*_racingline.txt)\n카탈루냐(1,424pt), 오스트리아(5,183pt) 등 3~4m 간격의 고정밀 트랙 좌표를 바탕으로, 인접 세 점의 벡터 외적(v1 x v2)을 통해 트랙 전 구간의 곡률(κ)과 회전 방향(Left/Right)을 보간합니다.\n\n3) 서킷 코너 구간 정의 (*_corners.json)\n서킷별로 어디서부터 어디까지가 몇 번 코너(Turn 1 ~ Turn N)인지를 출발선 기준 진입(entry_dist), 정점(apex_dist), 탈출(exit_dist) 미터(m) 구간으로 정의합니다.\n\n백엔드(FastAPI)의 CircuitDataManager가 트랙 지오메트리를 로드하고, StateManager가 랩 세그먼트 분리 및 물리 역산을 수행하며, 사전 파싱 디스크 캐시(_parsed_laps_cache_v3.json)를 통해 1GB급 데이터를 28ms 만에 즉시 로드합니다. 가공된 데이터는 WebSocket(ws://localhost:8080/ws)을 통해 프론트엔드로 실시간 브로드캐스팅됩니다.',
        contentEn: 'The system synchronizes three foundational data sources:\n\n1) Live Driving Telemetry (F1 UDP 20777 Packets):\n• Packet 0 (Motion): 3D coordinates (X, Z) and lateral G-forces\n• Packet 1 (Session): Track ID, ambient/track temps, and official S1/S2/S3 split lines\n• Packet 2 (Lap Data): Distance traveled (m_lapDistance), elapsed lap time, and delta to leader\n• Packet 5 (Car Setup) & Packet 6 (Car Telemetry): Aero/brake setup, speed, throttle %, brake %, gear\n• Packet 10 (Car Damage): 4-wheel tire surface wear % (FL, FR, RL, RR) and lap degradation\n• Packet 11 (Session History): Official millisecond lap and sector times\n\n2) Circuit Reference Racing Lines (*_racingline.txt):\nHigh-density track coordinates spaced every 3-4m (1,424 points for Catalunya, 5,183 points for Austria). Curvature (κ) and rotation direction are interpolated via vector cross-products (v1 x v2).\n\n3) Circuit Corner Definitions (*_corners.json):\nExplicit boundary definitions establishing entry_dist, apex_dist, and exit_dist for Turn 1 through Turn N.\n\nFastAPI handles ingestion via CircuitDataManager and StateManager, employing high-speed disk caching (_parsed_laps_cache_v3.json) to load 1GB datasets in ~28ms. State updates stream over WebSockets to the React frontend at 60Hz.'
      },
      {
        num: '04',
        titleKo: '04. Method & Engineering (분석 방법론 및 엔지니어링)',
        titleEn: '04. Method & Engineering (Kinematics & Dynamic Apex Algorithms)',
        contentKo: '고정된 좌표 표시에 머무르지 않고 실제 드라이버의 거동을 분석하기 위해 3대 핵심 알고리즘을 구현했습니다:\n\n1) 동적 에이펙스(Dynamic Apex) 탐색 알고리즘\n서킷 맵의 코너 마커(T1~TN)는 단순 고정 좌표가 아닙니다. 코너 기준점 [entry_dist - 15m, exit_dist + 15m] 구간 내에서 드라이버가 해당 랩에서 실제로 기록한 최저 속도 지점(min(apex_window, key=lambda p: p["speed"]))을 탐색하여 매핑합니다. 이를 통해 드라이버가 조기 제동했는지, 레이트 브레이킹(Late Braking)으로 코너 깊숙이 파고들었는지를 랩마다 실제 주행 궤적에 맞춰 동적으로 보여줍니다.\n\n2) 코너별 정밀 키네마틱스 지표 역산\n코너 진입부터 탈출까지의 세부 물리량을 정량화합니다:\n• Braking Point: 브레이크 답력이 5% 이상 인가되기 시작한 최초 거리(m)\n• Throttle-On Point: 에이펙스 통과 직후 가속을 25% 이상 재개한 거리(m)\n• Max Lateral G: 코너링 중 발생한 최대 횡가속도(G)\n• vs Ahead / vs Leader: 동일 코너에서 앞차 및 선두 차량이 기록한 에이펙스 최저 속도와 페달 답력을 내 기록과 나란히 막대그래프로 비교\n\n3) 물리 기반 결측 패킷 역산 복원 엔진\n과거 녹화본(.jsonl)에서 UDP 버퍼 오버플로우로 인해 일부 프레임 누락이 감지되면, 정상 수집된 주행 거리와 경과 시간 변화율로부터 실제 구간 속도(v = Δd / Δt * 3.6), 가감속도(a = Δv / Δt), 횡가속도(G_lat = v² * |κ| / 9.81)를 역산하여 텔레메트리 무결성을 100% 보장합니다.',
        contentEn: 'Engineered three mathematical algorithms to capture true driver dynamics:\n\n1) Dynamic Apex Tracking Algorithm:\nCorner markers (T1~TN) on the circuit map are not static waypoints. The engine evaluates the window [entry_dist - 15m, exit_dist + 15m] to identify the point of absolute minimum velocity (min(apex_window, key=lambda p: p["speed"])). This reveals whether the driver braked early or executed a deep late-braking trajectory per lap.\n\n2) Corner Kinematics Matrix:\nDerives quantitative performance parameters across each corner:\n• Braking Point: Distance (m) where brake pedal input first exceeds 5%\n• Throttle-On Point: Distance (m) where throttle re-application exceeds 25% post-apex\n• Max Lateral G: Peak lateral cornering acceleration (G)\n• Rival Comparison: Comparative bars displaying apex speed, throttle %, and braking intensity against the car ahead and session leader\n\n3) Physics-Based Packet Reconstruction:\nWhen packet drops occur in legacy recordings, the engine reconstructs missing motion and telemetry data from lap distance and elapsed time differentials, computing velocity v = Δd / Δt * 3.6 and lateral G = v² * |κ| / 9.81 with zero data loss.'
      },
      {
        num: '05',
        titleKo: '05. Results & UI Implementation (구현 성과 및 대시보드 화면)',
        titleEn: '05. Results & UI Implementation (Live Dashboard Screens & Telemetry)',
        highlight: true,
        contentKo: '60Hz 무손실 패킷 파싱, 5ms 초저지연 버퍼링, 28ms 초고속 디스크 캐싱을 달성하고, 24개 공식 F1 서킷을 100% 실좌표로 매핑 완료했습니다.\nCoinbase Design System의 정제된 다크 히어로 밴드, 에디토리얼 화이트 캔버스, JetBrains Mono 고밀도 타이포그래피를 채택하여 완성한 4대 핵심 화면 인터페이스입니다:',
        contentEn: 'Achieved 60Hz lossless UDP ingestion, sub-5ms buffer indexing latency, ~28ms disk cache loading, and 100% coordinate mapping across 24 official F1 circuits.\nBuilt with the Coinbase Design System aesthetic—combining a deep dark hero band, crisp white editorial canvas, and tabular JetBrains Mono typography for high data density across 4 core dashboard views:',
        screenshots: [
          {
            src: f1Img1,
            titleKo: '1. 세션 환경 설정 및 리플레이 제어 (Session Configuration & Replay)',
            titleEn: '1. Session Configuration & Replay Mode',
            descKo: '실시간 게임 UDP(20777) 수신 또는 녹화 세션(카탈루냐 9 Laps, 오스트리아) 1x~4x 리플레이 선택, 한/영 및 단위(km/h, °C / mph, °F) 전환, AI 레이스 엔지니어 음성 페르소나(GP, Bono, Ricky) 선택 인터페이스.',
            descEn: 'Toggle live 60Hz UDP streaming or replay recorded telemetry files (Catalunya 9 Laps, Austria) at 1x to 4x playback speed, with i18n and AI voice persona selection (GP, Bono, Ricky).'
          },
          {
            src: f1Img2,
            titleKo: '2. 랩 아카이브, 코너별 상세 카드 및 차량 셋업 (Lap Archive & Setup)',
            titleEn: '2. Lap Archive, Corner Telemetry Cards & Setup',
            descKo: 'Lap 1~9 전체 기록 및 베스트 랩 대비 델타 타임, 4륜 타이어 표면 마모율, 차량 에어로/브레이크 셋업 수치, 선택된 코너의 Entry/Apex/Exit 속도 및 제동점·가속점 카드.',
            descEn: 'Comprehensive lap archive (Lap 1~9) with delta times, 4-wheel tire surface wear %, car aerodynamic/brake setup, and corner entry/apex/exit velocity cards.'
          },
          {
            src: f1Img3,
            titleKo: '3. 코너별 주행 키네마틱스 매트릭스 (Turn-by-Turn Kinematics Matrix)',
            titleEn: '3. Turn-by-Turn Kinematics Matrix Table',
            descKo: 'Turn 1부터 Turn N까지 전 코너의 진입/정점/탈출 속도(km/h), 기어단수, 브레이킹 포인트(m), 가속 재개 지점(m), 최대 횡G, 앞차/선두와의 속도 득실 비교 종합 표.',
            descEn: 'Full corner table (T1~TN) detailing entry/apex/exit speed, gear selection, braking point distance, throttle-on distance, lateral G-load, and live rival comparison bars.'
          },
          {
            src: f1Img4,
            titleKo: '4. 인터랙티브 서킷 맵 및 섹터 분석 (Interactive Circuit Map & Sectors)',
            titleEn: '4. Interactive Circuit Map & Sector Analysis',
            descKo: 'SVG 벡터 레이싱 라인, 랩별 실제 최저 속도 지점을 반영하는 동적 에이펙스 마커(T1~TN), 코너 클릭 시 인스펙터 팝업, 섹터 1·2·3 공식 분할선 및 득실 분석.',
            descEn: 'Vector racing line, clickable dynamic apex markers tracking true minimum velocity per lap, S1/S2/S3 sector split lines, and comparative sector timing analysis.'
          }
        ]
      },
      {
        num: '06',
        titleKo: '06. Conclusion & User Feedback Applications (결론 및 유저 피드백 활용 방향)',
        titleEn: '06. Conclusion & User Feedback Applications (Actionable Driver Coaching)',
        contentKo: '본 F1 AI Race Engineer 대시보드는 심레이싱 유저가 단순한 게이머를 넘어, 데이터를 바탕으로 자신의 주행을 객관적으로 분석하고 실력을 비약적으로 향상시킬 수 있는 3가지 구체적인 피드백 경로를 제공합니다:\n\n1) 코너별 브레이킹 & 트레일 브레이킹 자가 피드백\n"Turn 1에서 브레이킹 포인트가 지난 랩 대비 8m 빨라 턴인 속도를 잃었다"거나 "선두 드라이버 대비 스로틀 전개 시점(Throttle-On)이 12m 늦다"는 점을 키네마틱스 매트릭스 수치로 즉각 확인하여, 제동 지점을 과감하게 늦추고 탈출 가속 타이밍을 앞당기는 정밀한 페달 조작 교정이 가능합니다.\n\n2) 동적 에이펙스(Dynamic Apex) 및 레이싱 라인 시각 피드백\n서킷 맵 위에 랩마다 찍힌 실제 동적 에이펙스 위치를 비교하여, 내가 이상적인 레이싱 라인에 맞춰 제때 정점을 밟았는지, 아니면 언더스티어로 코너 바깥으로 밀려났는지를 시각적으로 자가 진단하고 최적의 진입 궤적을 교정할 수 있습니다.\n\n3) 실시간 AI 레이스 엔지니어 무전 피드백\n시속 300km/h 주행 중 화면에 시야를 빼앗기지 않고도, 타이어 마모율 임계치 도달 알림, 경쟁 차량과의 코너 속도 득실, 최적의 피트스탑 윈도우를 실제 F1 엔지니어(Bono, GP, Ricky)의 목소리로 피드백받음으로써, 실제 모터스포츠 현장과 동일한 극상의 몰입감과 전략적 판단을 경험할 수 있습니다.',
        contentEn: 'The F1 AI Race Engineer dashboard transforms sim racers from casual players into data-driven drivers through three concrete feedback vectors:\n\n1) Corner-by-Corner Braking & Throttle-On Optimization:\nDrivers instantly identify that "Turn 1 braking was 8m too early, sacrificing apex speed" or "Throttle re-application lagged 12m behind the leader," providing exact metric benchmarks to fine-tune trail braking and exit acceleration.\n\n2) Dynamic Apex & Trajectory Visualization:\nComparing the dynamic apex markers across laps against the circuit racing line allows drivers to diagnose understeer tendencies and assess whether they clipped the optimal apex.\n\n3) Hands-Free Auditory Pitwall Coaching:\nCrucial tactical updates—tire degradation thresholds, rival corner speed deltas, and strategic pit windows—are spoken aloud by authentic race engineer personas (Bono, GP, Ricky), allowing drivers to maintain 100% track focus while making institutional-grade race decisions.'
      }
    ]
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
    tabLabelKo: 'NEIS 문자 계산기',
    tabLabelEn: 'NEIS Letter Counter',
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

    pipelineFlow: [
      { step: '01', titleKo: '엑셀 파일 로컬 선택', descKo: 'SheetJS를 통한 브라우저 메모리 직접 적재 (서버 전송 0건)' },
      { step: '02', titleKo: '나이스 특수 바이트 정밀 연산', descKo: '한글 3Byte, 영문/공백 1Byte, 줄바꿈 2Byte 공식 알고리즘 판정' },
      { step: '03', titleKo: '문장 단위 정규화 및 해싱', descKo: '정규식 기반 종결 어미 분리 및 중복 문장 발생 인덱싱' },
      { step: '04', titleKo: '실시간 행(Row) 매핑 및 하이라이트', descKo: '중복 문장 발생 행 번호 즉각 표시 및 테이블 시각화' },
      { step: '05', titleKo: '인라인 수정 및 원클릭 내보내기', descKo: '브라우저 상에서 수정 후 변경된 엑셀 파일 즉시 다운로드' }
    ],

    beforeAfter: {
      beforeKo: '수백 명의 학생 생활기록부를 작성할 때 엑셀 내 중복 문장을 찾기 위해 밤늦게까지 눈으로 대조해야 했고, 일반 글자수 세기 사이트는 나이스 고유 바이트 규격과 달라 등록 오류가 빈번했습니다.',
      beforeEn: 'Educators worked late into the night visually checking multi-row spreadsheets to avoid duplicate evaluations across students. Generic online word counters failed to adhere to NEIS byte specifications.',
      afterKo: '대용량 엑셀을 업로드하자마자 2초 만에 중복 문장 발생 행 번호를 즉각 확인하고, 나이스 규격에 100% 일치하는 정밀 바이트를 서버 전송 없이 안전하게 검토할 수 있습니다.',
      afterEn: 'Instantly identifies duplicate sentence rows within 2 seconds upon uploading, ensuring 100% NEIS byte compliance with zero server data leakage.'
    },

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (문제 정의 및 규격 불일치)',
        titleEn: '01. Background & Problem (Context & Regulatory Bottlenecks)',
        contentKo: '학교생활기록부 작성 기간 동안 교사들은 수백 명의 학생에 대한 세부능력 및 특기사항 평가를 수작업으로 검토합니다. 그러나 교육행정정보시스템(NEIS)의 독자적 바이트 계산 규격(한글 3바이트, 줄바꿈 2바이트 등)이 시중의 일반 글자수 세기 툴과 달라 입력 시 길이 초과 오류가 빈번했습니다. 또한 수백 행의 엑셀 시트에서 학생 간 중복 문장을 육안으로 찾느라 야근이 반복되었으며, 민감한 학생 평가 데이터를 클라우드 서버에 업로드하는 것은 개인정보보호법상 엄격히 금지되어 있었습니다.',
        contentEn: 'During student record entry seasons, educators evaluate hundreds of students. However, NEIS utilizes unique byte rules (Hangul 3 bytes, CRLF newlines 2 bytes) differing from generic counters, causing frequent truncation errors upon submission. Educators spent hours manually scanning Excel spreadsheets to avoid duplicate evaluations, while uploading student data to cloud servers was prohibited by privacy laws.'
      },
      {
        num: '02',
        titleKo: '02. Discovery & Trigger (문제 인지 계기)',
        titleEn: '02. Discovery & Trigger (Discovery Context)',
        contentKo: '교직원들이 나이스 시스템에 복사-붙여넣기 후 "바이트 초과" 팝업을 만나 문장을 일일이 다시 줄이거나, 엑셀 Ctrl+F로 중복 문장을 밤새도록 하나씩 찾는 모습을 보며 큰 비효율을 확인했습니다. "서버로 데이터를 전혀 전송하지 않고 100% 브라우저 메모리 안에서만 나이스 맞춤형 바이트를 계산하고 엑셀 중복을 행 번호로 찾아주는 도구가 있다면 현장의 큰 고통을 해결할 수 있다"고 확신했습니다.',
        contentEn: 'Witnessed teachers repeatedly encountering "byte overflow" popups after pasting text into the administrative portal, frantically cutting words, and using Ctrl+F all night to find duplicate evaluations. Realized that a 100% in-browser utility calculating exact NEIS bytes and detecting duplicate rows without server transmission would eliminate massive operational pain.'
      },
      {
        num: '03',
        titleKo: '03. Approach & Methodology (접근 전략 및 보안 원칙)',
        titleEn: '03. Approach & Methodology (Architecture & Privacy Principles)',
        contentKo: '완벽한 개인정보 보안과 실시간 사용성을 핵심 원칙으로 정립했습니다:\n1) 100% 클라이언트 샌드박스: 단 한 바이트의 데이터도 외부 서버로 전송하지 않고, 브라우저 메모리(SheetJS) 내에서만 모든 처리를 완결한다.\n2) 나이스 맞춤형 바이트 계산 알고리즘: 공백 포함/제외, UTF-8 및 EUC-KR, 줄바꿈 특수 처리를 오차 없이 구현한다.\n3) 문장 단위 차분(Diff) & 행 매핑: 문장 단위 정규화 후 해시맵을 구축하여 중복 문장의 발생 행 번호를 즉각 명시한다.\n4) 양방향 편집: 웹에서 바로 수정하고 원본 엑셀로 내보낼 수 있는 워크플로우를 제공한다.',
        contentEn: 'Established strict data privacy and real-time usability principles:\n1) 100% In-Memory Sandbox: Zero network requests; process all files entirely inside browser RAM via SheetJS to guarantee zero student data leakage.\n2) Precision NEIS Algorithm: Implement exact byte logic reflecting Korean 3 bytes and newline 2 bytes.\n3) Sentence-Level Diff & Row Mapping: Tokenize sentences into hash maps to instantaneously index duplicate row occurrences.\n4) Bidirectional Workflow: Allow inline editing with direct export back to .xlsx format.'
      },
      {
        num: '04',
        titleKo: '04. Implementation & System (구현 및 해결 과정)',
        titleEn: '04. Implementation & System (Engineering Execution)',
        contentKo: '1) 나이스 전용 바이트 계산기: 자바스크립트 문자열의 유니코드 코드포인트를 순회하며 한글(3byte), 줄바꿈(\\r\\n, 2byte), 공백(1byte)을 구분 측정하는 전용 알고리즘을 구축했습니다.\n2) SheetJS 인메모리 파서: 대용량 엑셀 파일을 업로드 시 브라우저 내에서 가상 워크북으로 파싱하여 수백 행의 텍스트 셀을 2초 이내로 메모리에 적재했습니다.\n3) 행 단위 중복 문장 탐지 엔진: 정규식 기반 문장 분리 후 각 문장의 출현 빈도와 행(Row) 인덱스를 맵에 캐싱하여, 중복 문장 발생 시 "Row 5, Row 19와 중복" 형태로 명시했습니다.\n4) 인라인 수정 및 엑셀 다운로드: UI 상에서 문장을 수정하면 즉시 바이트와 중복 상태가 실시간 갱신되며, 변경 사항이 반영된 엑셀 파일을 원클릭으로 다운로드할 수 있게 구현했습니다.',
        contentEn: '1) Custom Byte Engine: Traversed Unicode codepoints to accurately differentiate Hangul (3 bytes), newlines (2 bytes), and spaces (1 byte).\n2) In-Memory SheetJS Parser: Parsed multi-student spreadsheets directly into client virtual memory within 2 seconds with zero network transfer.\n3) Sentence Diff Engine: Regex-tokenized text across rows into indexed hash maps, labeling duplicates with exact row indicators (e.g., "Duplicate in Row 5, Row 19").\n4) Inline Edit & Export: Synced inline edits with real-time recalculations, allowing 1-click export of modified spreadsheets.'
      },
      {
        num: '05',
        titleKo: '05. Quantitative Results (정량 성과 및 무누출 달성)',
        titleEn: '05. Quantitative Results (Measurable Impact)',
        highlight: true,
        contentKo: '• 대규모 엑셀 시트 내 중복 행 탐지 소요 시간 90% 이상 단축: 기존 1시간 이상 소요되던 육안 검토 작업을 엑셀 업로드 즉시 2초 이내로 단축했습니다.\n• 나이스 특수 규격 기준 바이트 계산 정합도 100% 달성: 나이스 시스템 입력 시 길이 초과나 반환 반려 사례를 0건으로 예방했습니다.\n• 0% 서버 전송으로 개인정보 유출 위험 원천 차단: 100% 브라우저 인메모리 샌드박스 구동으로 민감한 학생 평가 데이터의 보안 규정을 완벽하게 충족했습니다.',
        contentEn: '• > 90% reduction in duplicate verification time: Cut 1 hour of manual scanning down to sub-2-second automated row highlighting.\n• 100% NEIS byte compliance: Completely eliminated character overflow rejections when pasting into the administrative portal.\n• 0% server transmission risk: In-browser sandbox fully satisfied strict student privacy legal compliance.'
      },
      {
        num: '06',
        titleKo: '06. Learnings & Retrospective (회고 및 배운 점)',
        titleEn: '06. Learnings & Retrospective (Key Takeaways)',
        contentKo: '보안이 극도로 민감한 행정/교육 도메인에서는 서버를 쓰지 않는 "순수 클라이언트 인메모리(Client-Side Sandbox)" 아키텍처가 사용자에게 가장 큰 신뢰를 준다는 것을 확인했습니다. 또한 사소해 보이는 업무라도 현장의 규칙(바이트 계산 방식, 중복 행 찾기)을 깊이 이해하고 맞춤형 도구를 만들었을 때 사용자의 체감 효용이 극대화된다는 엔지니어링 철학을 다졌습니다.',
        contentEn: 'Confirmed that in privacy-sensitive domains, zero-server in-memory sandboxes provide the ultimate trust and adoption barrier. Reaffirmed that deeply understanding domain-specific quirks (such as unique byte rules) and building precision tools delivers immense real-world value.'
      }
    ]
  }
];
