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
    oneLinerKo: 'League of legend (LOL)과 같은 MulitOnlineBattleArena(MOBA)게임에서 발생하는 팀원간 communication pattern이 인게임의 사전 정의된 중요 Event 지점에서 어떤 대화 패턴을 보이는지 분석한 학술 연구',
    oneLinerEn: 'An academic research analyzing team communication patterns around pre-defined in-game critical events in MOBA games like League of Legends (LOL).',
    roleKo: '리드 데이터 엔지니어 (2저자 / 파이프라인 설계, 음성-로그 동기화, 통계 모델링)',
    roleEn: 'Lead Data Engineer (2nd Author / Pipeline Architecture, Audio-Log Sync, Statistical Modeling)',
    period: '2023.09 – 2025.09',
    publication: 'arXiv:2512.20116',
    paperUrl: 'https://arxiv.org/abs/2512.20116',
    repoUrl: 'https://github.com/hope77-githhub/Proj_code',
    techStack: ['Python', 'Pandas/NumPy', 'RoBERTa', 'NetworkX (SNA)', 'Riot API', 'Discord Voice Bot'],

    metricsHeadingKo: '결과 요약 (Summary of Results)',
    metricsHeadingEn: 'Results Summary',
    keyMetrics: [
      {
        valueKo: '84경기 (45,660개 발화) SNA 소통 분석',
        valueEn: 'SNA across 84 Matches & 45,660 Utterances',
        icon: 'fas fa-network-wired'
      },
      {
        valueKo: '지시-수락 중심 의사결정 전환 규명 (p < .001)',
        valueEn: 'Shift to Directive-Commissive Patterns (p < .001)',
        icon: 'fas fa-chart-line'
      },
      {
        valueKo: '화자 독점 이상치 교차 검증 (p < .05)',
        valueEn: 'Cross-Validation of Team Monopolies (p < .05)',
        icon: 'fas fa-user-check'
      },
      {
        valueKo: '오디오·로그 기반 코칭 도구 실효성 증명',
        valueEn: 'Empirical E-Sports Coaching Diagnostics via Logs',
        icon: 'fas fa-bullseye'
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
        contentKo: `### e스포츠 소통 역학의 정량화 필요성
리그 오브 레전드(LoL)와 같은 고속 e스포츠 환경에서는 0.1초 단위의 판단과 실시간 커뮤니케이션이 경기 승패를 결정합니다. 그러나 기존 분석은 KDA나 승패 결과 등 사후 지표에만 치우쳐 있어, 실제 경기 중 어떤 소통 구조와 의사결정 흐름이 승리를 견인하는지 객관적으로 규명하지 못했습니다.

### 핵심 엔지니어링 및 분석 병목
- **멀티모달 이종 데이터 수집 주기 불일치**: 비주기적 이벤트 트리거 방식의 인게임 로그와 비동기 패킷 청크 단위로 들어오는 Discord 음성 스트림은 수집 주기가 달라 동일한 시점으로 정밀 결합하기 어려웠습니다.
- **맥락 부재 및 단순 집계의 한계**: 기존의 단순 발화량 총합 집계 방식은 주요 교전(오브젝트 한타, 갱킹 등) 시점의 전술적 의사결정 흐름과 팀 내 상호작용 역학을 설명할 수 없었습니다.`,
        contentEn: `### Need for Quantitative Modeling in E-Sports Communication
In high-velocity eSports like League of Legends (LoL), split-second decisions and real-time team communication dictate match outcomes. However, traditional post-hoc metrics (e.g., KDA, win/loss rates) fail to capture which communication structures genuinely drive victories.

### Engineering & Analytical Bottlenecks
- **Temporal Discrepancy in Multimodal Streams**: Aperiodic in-game event triggers and asynchronous Discord voice packet chunks operated on disjoint clocks, preventing microsecond alignment.
- **Absence of Context in Aggregate Counts**: Simple speech quantity counters failed to explain communication dynamics and tactical decision workflows during critical teamfights.`
      },
      {
        num: '02',
        titleKo: '02. Discovery & Trigger (문제 인지 계기)',
        titleEn: '02. Discovery & Trigger (Discovery Context)',
        contentKo: `### "말이 많은 팀이 승리하는가?" — 총량 분석의 한계
실제 팀 경기 음성 데이터와 인게임 타임라인을 대조하는 과정에서, 단순 발화량 총수와 경기 승률 간에 유의미한 상관관계가 없다는 점을 확인했습니다. 찰나의 1초에 스킬 연계가 오가는 결정적 순간(MoI: Moment of Interest)에는 잡담이 아닌 '맥락에 맞는 고순도 의사결정 오더'가 오가야 함을 발견했습니다.

### 프로팀 vs 아마추어팀 간의 네트워크 이상치 포착
프로팀과 아마추어팀의 데이터 비교 분석 중, 특정 프로팀(Pro B)에서 성적 저하와 함께 비정상적인 소통 지표(현저히 낮은 네트워크 밀도, 특정 1인 중심의 발언 독점)를 감지했습니다. 이를 통해 단순한 로그 수집을 넘어 팀 내 소통 구조와 의사결정의 질적 전환을 정밀 진단할 수 있는 프레임워크 구축을 결심했습니다.`,
        contentEn: `### "Does Talking More Equal Winning?" — Limits of Aggregate Volume
Cross-analyzing voice streams against in-game telemetry revealed no statistically significant correlation between total utterance count and win rate. Sub-second reactions during Moments of Interest (MoI) required contextualized tactical orders rather than sheer vocal volume.

### Detecting Network Anomalies in Team Communications
During comparative analyses between professional and amateur teams, we identified anomalies in a specific professional team (Pro B): abnormal performance drops coupled with low network density and high centralization (monopolized communication). This triggered the need for an empirical diagnostic framework.`
      },
      {
        num: '03',
        titleKo: '03. Approach & Methodology (접근 전략 및 가설)',
        titleEn: '03. Approach & Methodology (Strategic Hypotheses)',
        contentKo: `### 1. 대규모 멀티모달 데이터셋 구축
- **분석 표본**: 총 **84경기, 45,660개 발화**에 이르는 대규모 멀티모달(인게임 이벤트 + 다채널 음성) 데이터셋 구축
- **절대 시계열 정합**: Riot API와 Discord Voice Bot에 Unix Timestamp를 결합하고 수학적 보간법(Interpolation)을 적용하여 동기화 오차를 50ms 미만으로 수렴

### 2. 화행 이론(Speech Act) & RoBERTa 자연어 모델링
- 발화 문맥을 단순 텍스트가 아닌 전술적 화행 의도로 정밀 분류:
  - **정보 공유(Informative)**: 인게임 상태 전달 ("미드 플 빠짐", "용 30초 전")
  - **지시(Directive)**: 전술적 행동 지시 ("원딜 먼저 물어", "뒤로 빼")
  - **수락/약속(Commissive)**: 오더 수용 및 행동 약속 ("내가 들어갈게", "알겠어")

### 3. 동적 소셜 네트워크 분석(SNA) 모델링
- **Network Topology**: 선수를 Node로, RoBERTa 의도 가중치를 유향 Edge(Directed Edge)로 매핑
- **맥락별 분할 분석**:
  - 경기 흐름: 14분 이전 라인전 단계 vs 14분 이후 한타·운영 단계
  - 교전 구간: 일반 파밍 구간 vs 핵심 교전(MoI: Moment of Interest) 구간
- **통계적 가설 검증**: 네트워크 밀도(Density)와 중심화(Centralization)의 변화에 대한 다변량 통계 검증 ($p < .001$)

### 4. 혼합 연구(Mixed-Methods) 기반 교차 검증 설계
- 정량 지표의 임상적 유효성을 뒷받침하기 위해 선수단 설문($p < .05$) 및 코칭 스태프 심층 인터뷰를 병행 설계`,
        contentEn: `### 1. Large-Scale Multimodal Dataset
- **Empirical Corpus**: Ingested and structured **84 matches and 45,660 utterances** combining in-game telemetries and multichannel voice recordings.
- **Microsecond Synchronization**: Synchronized disparate logging clocks via universal Unix timestamps and mathematical interpolation down to < 50ms.

### 2. Speech Act Theory & RoBERTa NLP Modeling
- Classified utterance context into strategic tactical speech acts:
  - **Informative**: In-game status transmission ("Mid flash blown", "Dragon in 30s")
  - **Directive**: Tactical execution commands ("Focus ADC first", "Fall back")
  - **Commissive**: Tactical acknowledgement and commitment ("I'll engage", "Understood")

### 3. Dynamic Social Network Analysis (SNA)
- **Graph Topology**: Modeled players as nodes and classified tactical intents as directed weighted edges.
- **Contextual Segmentation**: Evaluated game phases (< 14m laning vs > 14m objective warfare) and engagement states (calm vs MoI: Moment of Interest).
- **Hypothesis Testing**: Statistically tested network density and centralization shifts ($p < .001$).

### 4. Mixed-Methods Triangulation
- Designed player questionnaires ($p < .05$) and in-depth coaching staff interviews to validate the practical accuracy of the quantitative network metrics.`
      },
      {
        num: '04',
        titleKo: '04. Implementation & System (구현 및 해결 과정)',
        titleEn: '04. Implementation & System (Engineering Execution)',
        contentKo: `### 1. 실시간 데이터 수집 & 무결성 파이프라인
- **Riot API & 게임 클라이언트 스키마 엔진**: 킬/데스, 주요 오브젝트 처치 등 경기 라이프사이클 이벤트를 밀리초 단위로 수집하고 무결성(0% Drop) 보장
- **Discord Audio Capture Bot**: 5인 음성 채널을 분할 패킷 청크로 무손실 버퍼링 및 Whisper STT 텍스트 변환 파이프라인 구축

### 2. 수학적 타임스탬프 보간 알고리즘
- 음성 발화 구간(Start-End)과 인게임 사건 타임라인 간의 샘플링 주기 지연을 스플라인/선형 보간으로 보정하여 프레임 수준 일치성 확보

### 3. 동적 SNA 그래프 엔진 및 진단 리포팅
- NetworkX를 활용해 타임 윈도우별 네트워크 밀도와 고유벡터/외향 중심성(Centrality) 지표를 자동 산출
- 경기 종료 즉시 소통 구조 이상치(화자 독점, 의사소통 단절 등) 패턴을 시각화하여 이메일로 전송하는 엔드투엔드 리포팅 자동화`,
        contentEn: `### 1. Real-Time Telemetry & Lossless Audio Pipelines
- **Riot API & In-Game Schema Parser**: Ingested match lifecycle events (kills, assists, objectives) at millisecond precision with 0% drop rate.
- **Discord Voice Bot**: Captured 5-player multichannel audio packets without loss and routed chunks through automated STT pipelines.

### 2. Time-Series Interpolation Algorithm
- Synchronized disparate sampling rates between speech utterances and in-game event occurrences via mathematical spline/linear interpolation down to frame accuracy.

### 3. Dynamic SNA Graph Engine & Automated Reporting
- Employed NetworkX to compute dynamic network density and centrality metrics across micro-windows.
- Automated post-match triage reports diagnosing communication bottlenecks and speaker monopoly via automated email delivery.`
      },
      {
        num: '05',
        titleKo: '05. Results & Impact (연구 결과 및 성과)',
        titleEn: '05. Results & Impact (Measurable Impact & Publication)',
        highlight: true,
        contentKo: `### 1. 맥락 기반 소통 변화 규명 ($p < .001$)
- **84경기(45,660개 발화)** 대상 SNA 네트워크 분석을 수행하여 경기 흐름 및 교전에 따른 소통의 질적 전환을 입증했습니다.
- **의사결정 패턴 전환**: 핵심 교전(MoI) 구간 및 경기 후반부(14분 이후)로 갈수록 단순 정보 공유에서 **'지시-수락(Directive → Commissive)'** 중심의 고속 의사결정 체계로 전환됨을 규명했습니다.
- **네트워크 구조의 유연화**: 교전 상황에서 팀원 간 발언 참여 폭(밀도)이 유의미하게 확장되고, 특정 인물에 편중되던 발언 의존도(중심화)가 완화되는 유연한 팀워크 구조를 통계적으로 증명했습니다 ($p < .001$).

### 2. 정량 지표 기반 팀 진단 프레임워크 검증 ($p < .05$)
- **이상치 조기 발견**: 프로팀과 아마추어팀 비교 분석 중 발견된 특정 프로팀(Pro B)의 이상치(낮은 밀도, 비대칭적으로 높은 중심화)를 감지했습니다.
- **설문 & 심층 인터뷰 교차 검증**: 선수단 설문($p < .05$) 및 심층 인터뷰와의 교차 검증을 통해, 오디오 및 인게임 로그만으로 도출한 네트워크 지표가 실제 팀 내 **'특정 화자 독점 현상'** 및 **'코칭 피드백 부재'** 문제를 정확히 진단해 냄을 증명했습니다.
- **데이터 기반 이스포츠 코칭 실효성 입증**: 주관적인 감에 의존하던 기존 피드백에서 벗어나, 데이터만으로 팀의 의사소통 병목을 비침습적으로 정밀 진단하는 코칭 도구의 실효성을 확립했습니다.

### 3. 학술적 공인 및 기술 성과
- **국제 학술 프리프린트(arXiv:2512.20116) 공식 등재**: 엄격한 통계적 가설 검증과 분석 방법론의 신뢰성을 인정받아 글로벌 학술 아카이브에 정식 논문으로 등재되었습니다.
- **멀티모달 시계열 오차 50ms 미만 & 0% 누락률**: 이종 데이터 엔지니어링 파이프라인의 완벽한 무결성을 입증했습니다.`,
        contentEn: `### 1. Uncovering Context-Driven Communication Shifts ($p < .001$)
- Conducted dynamic SNA across **84 matches (45,660 utterances)**, proving qualitative structural shifts across match phases.
- **Shift to Directive-Commissive Patterns**: Statistically validated that during Moments of Interest (MoI) and late-game phases (> 14m), communication shifted rapidly from passive information sharing to agile **'Directive → Commissive'** decision-making.
- **Network Democratization**: Demonstrated that decisive teamfights significantly increased team-wide participation (network density) while decreasing reliance on any single individual (centralization) ($p < .001$).

### 2. Validating Quantitative Team Diagnostic Frameworks ($p < .05$)
- **Anomaly Detection**: Pinpointed anomalous metrics in a professional team (Pro B) characterized by low network density and high centralization.
- **Triangulation via Surveys & Interviews**: Cross-validated with player surveys ($p < .05$) and coaching staff interviews, proving that telemetry-derived network metrics precisely detected internal **'speaker monopoly'** and **'absence of coaching feedback'**.
- **Empirical E-Sports Coaching Tools**: Established the validity of non-invasive, data-driven coaching tools replacing subjective intuition with empirical diagnostics.

### 3. Academic Recognition & Technical Robustness
- **Formal arXiv Publication (arXiv:2512.20116)**: Recognized by the international academic research community for empirical rigor and reproducibility.
- **Sub-50ms Multimodal Alignment & 0% Drop Rate**: Proven zero-loss pipeline robustness under high-volume streaming conditions.`
      },
      {
        num: '06',
        titleKo: '06. Learnings & Retrospective (회고 및 배운 점)',
        titleEn: '06. Learnings & Retrospective (Key Takeaways)',
        contentKo: `### 1. 데이터 분석의 본질은 실무 페인 포인트 해결
데이터 엔지니어링과 분석은 단순히 숫자를 나열하는 것을 넘어, 현장의 실질적인 문제(화자 독점, 피드백 부재)를 정밀 진단하고 실행 가능한 해결책을 제시할 때 진정한 가치를 발휘함을 배웠습니다.

### 2. 정량 지표와 정성 조사의 삼각검증(Triangulation)
단일 데이터 소스에 매몰되지 않고, 로그 기반 SNA 지표($p < .001$)를 현장 인터뷰 및 설문($p < .05$)과 교차 검증함으로써 모델의 현실 설명력을 극대화하는 혼합 연구 방법론의 가치를 체득했습니다.`,
        contentEn: `### 1. True Data Science Solves Real Operational Bottlenecks
Learned that data engineering and analytics achieve true impact when diagnosing real operational bottlenecks (speaker monopoly, lack of coaching feedback) and offering actionable interventions rather than mere metric reporting.

### 2. Power of Mixed-Methods Triangulation
Gained methodological mastery in combining quantitative telemetry/SNA metrics ($p < .001$) with qualitative surveys and interviews ($p < .05$), safeguarding against analytical blindspots and ensuring grounded empirical truth.`
      }
    ]
  },
  // =========================================================================
  // 2. Automation Test Tool
  //    (직접 개발한 자동화 테스트 툴의 개념을 넥슨 Open API의 FC Online 매치 상세 데이터에 확장 적용해 서술)
  // =========================================================================
  {
    id: 'entry-automation-test',
    category: 'Test Automation & Tooling',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'Active Project',
    badgeType: 'info',
    titleKo: '자동화 테스트 툴 — 경기 데이터 정합성 자동 검증',
    titleEn: 'Automation Test Tool — Automated Match Data Integrity Checks',
    tabLabelKo: '자동화 테스트 툴',
    tabLabelEn: 'Automation Test Tool',
    oneLinerKo: '직접 개발한 자동화 테스트 툴의 개념을 넥슨 FC Online Open API 매치 상세 데이터에 확장 적용하면, 경기 한 판에서 만들어지는 수백 개의 값이 "규칙대로, 서로 모순 없이" 기록되었는지를 사람 대신 자동으로 검증할 수 있습니다.',
    oneLinerEn: 'Extending the concept of my automation test tool to the FC Online Open API match detail data lets the hundreds of values produced by a match be verified automatically: recorded by the rules and consistent with each other.',
    roleKo: '개인 프로젝트 · 설계 및 풀스택 개발',
    roleEn: 'Personal Project · Design & Full-Stack Development',
    period: '2025.12 – 현재 (Active)',
    techStack: ['Python', 'FastAPI', 'React', 'Data Schema Validation', 'pandas', 'FFmpeg & OpenCV', 'RapidFuzz', 'cx_Freeze'],

    metricsHeadingKo: '기대 효과 요약 (Expected Benefits)',
    metricsHeadingEn: 'Expected Benefits',
    keyMetrics: [
      {
        valueKo: '사람이 데이터를 하나씩 확인하던 반복 검증 시간 단축',
        valueEn: 'Less Time Spent on Repetitive Manual Data Checks',
        icon: 'fas fa-stopwatch'
      },
      {
        valueKo: '아낀 시간을 엣지케이스 탐색에 집중',
        valueEn: 'Freed-Up Time Redirected to Edge-Case Hunting',
        icon: 'fas fa-magnifying-glass'
      },
      {
        valueKo: '형식 · 요약↔상세 · 관계 · 참가자 간 4단계 정합성 검사',
        valueEn: '4-Layer Checks: Format, Summary↔Detail, Relations, Cross-Participant',
        icon: 'fas fa-layer-group'
      },
      {
        valueKo: '데이터 정합성의 지속적 트래킹 기반 마련',
        valueEn: 'Foundation for Continuous Data Integrity Tracking',
        icon: 'fas fa-chart-line'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: '매치 데이터 불러오기', titleEn: 'Load Match Data' },
      { step: '02', titleKo: '데이터 스키마 참조 형식 검사', titleEn: 'Schema-Referenced Format Checks' },
      { step: '03', titleKo: '값 · 관계 정합성 검사', titleEn: 'Value & Relation Consistency' },
      { step: '04', titleKo: '영상 · 피치 시각화 대조', titleEn: 'Video & Pitch Cross-Check' },
      { step: '05', titleKo: '결과 리포트 & 추세 트래킹', titleEn: 'Reports & Trend Tracking' }
    ],

    beforeAfter: {
      beforeKo: '경기 데이터를 사람이 직접 검증하면 수십 개 항목을 하나씩 열어 보고 합계와 내역을 손으로 계산해야 합니다. 시간 대부분이 반복 확인에 쓰여, 정작 중요한 예외 상황(엣지케이스)을 찾을 여유가 부족합니다.',
      beforeEn: 'Manual verification means opening dozens of fields and hand-calculating totals. Most time goes to repetition, leaving little room to hunt for the edge cases that matter.',
      afterKo: '툴이 데이터 스키마를 참조해 형식 · 관계 · 참가자 간 검사를 한 번에 끝내고, 사람은 어긋난 항목과 엣지케이스에만 집중합니다. 검증 결과가 쌓이면서 데이터 정합성을 꾸준히 추적할 수 있습니다.',
      afterEn: 'The tool runs format, relation, and cross-participant checks against the data schema in one pass; people focus on mismatches and edge cases, and accumulated results enable ongoing integrity tracking.'
    },

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Concept (배경 및 툴 개념)',
        titleEn: '01. Background & Concept',
        contentKo: `> 실제 적용 데이터와 화면은 공개할 수 없어, 같은 개념을 넥슨 Open API에 공개된 FC Online 매치 상세(match-detail) 데이터에 확장 적용하는 방식으로 설명합니다.

### 1. 직접 개발한 자동화 테스트 툴의 핵심 개념
데이터 스키마를 참조해 "어떤 값이 어떤 모양으로 있어야 하는지"를 알고, 규칙을 적용해 "값끼리 서로 맞는지"를 자동으로 검증하는 구조입니다. 대상 데이터의 구조만 알면 같은 방식으로 다른 데이터에도 적용할 수 있습니다.

### 2. 왜 FC Online 매치 상세 데이터인가
FC Online 매치 상세 데이터에는 매치 하나에 참가자별 \`matchDetail\`(결과, 점유율, 카드, 컨트롤러), \`shoot\`(슈팅·골 요약), \`shootDetail[]\`(슈팅마다 시간·좌표·종류·결과·선수), \`pass\`, \`defence\`, 그리고 선수별 \`player[].status\`까지 수백 개의 값이 담깁니다. 요약값과 상세 내역, 참가자와 참가자 사이가 서로 맞물려 있어 정합성 검증을 보여주기에 좋은 예시입니다.

### 3. 값 하나가 맞아도 전체는 틀릴 수 있다
각 값의 형식이 올바르더라도 서로 맞물려야 하는 값들이 어긋나면 데이터는 신뢰할 수 없습니다. 예를 들어 \`goalTotal\`은 명세상 \`goalInPenalty + goalOutPenalty + goalPenaltyKick\`과 같아야 하고, \`shootDetail\`에서 결과가 골(\`result: 3\`)인 슈팅 수와도 맞아야 합니다. 이런 관계를 사람이 매번 손으로 확인하기에는 한계가 있습니다.`,
        contentEn: `> Real data and screens are private, so this case study applies the same concept to the public FC Online match detail data from the Nexon Open API.

### 1. Core Concept of the Tool
The tool references a data schema to know what each value should look like, then applies rules to verify that values agree with each other. Knowing a dataset's structure is enough to apply the same approach elsewhere.

### 2. Why FC Online Match Detail Data
A single match holds per-participant \`matchDetail\`, \`shoot\`, \`shootDetail[]\`, \`pass\`, \`defence\`, and per-player \`player[].status\`: hundreds of interlocking values, ideal for showing integrity checks.

### 3. Every Value Can Be Valid While the Whole Is Wrong
\`goalTotal\` should equal \`goalInPenalty + goalOutPenalty + goalPenaltyKick\` and the number of \`shootDetail\` entries with \`result: 3\`. Checking such relations by hand does not scale.`
      },
      {
        num: '02',
        titleKo: '02. How the Tool Works (툴 구조)',
        titleEn: '02. How the Tool Works',
        contentKo: `### 1. 데이터 스키마 참조
- 데이터 스키마를 참조해 검사할 항목과 타입, 허용 값을 자동으로 정합니다. 데이터 구조가 바뀌어도 스키마만 갱신하면 툴 코드를 고칠 필요가 없습니다.

### 2. 중첩 · 배열 구조 자동 탐색
- \`matchInfo[1].player[5].status.tackle\`처럼 깊이 들어간 값도 경로만으로 찾아 검사합니다.

### 3. 규칙 모듈과 맥락 분기
- 항목별 규칙을 독립 모듈로 두고, 매치 종류 같은 맥락에 따라 다른 기대값을 적용합니다.

### 4. 영상 동기화 · 피치 시각화
- 화면 녹화 시각과 데이터의 시각을 맞춰 검사 결과에서 해당 장면으로 이동하고, 선수·공·슈팅 좌표를 2D/3D 피치 위에 그립니다.

### 5. 결과 리포트 · 탭 단위 확장
- 항목별 통과/실패 리포트를 만들고, 이미 알려진 문제와 유사도로 대조해 새로 확인할 것만 남깁니다. 새 테스트 기능은 탭으로 붙일 수 있고, 별도 설치 없이 실행되는 단일 파일로 배포됩니다.`,
        contentEn: `### 1. Data Schema Reference
- Check targets, types, and allowed values come from the data schema; structural changes only require a schema update.

### 2. Nested & Array Path Resolution
- Deep values such as \`matchInfo[1].player[5].status.tackle\` are reached by path alone.

### 3. Rule Modules with Context Branching
- Independent rule modules apply different expectations depending on context such as match type.

### 4. Video Sync & Pitch Visualization
- Recording time is aligned with data time to jump to scenes; coordinates render on a 2D/3D pitch.

### 5. Reports & Tab-Based Extension
- Pass/fail reports, fuzzy-matched against known issues so only new findings remain. New features plug in as tabs; ships as a no-install executable.`
      },
      {
        num: '03',
        titleKo: '03. System Architecture & Data Flow (FC Online 데이터 적용 구조)',
        titleEn: '03. System Architecture & Data Flow (Applied to FC Online Data)',
        architectureDiagrams: [
          {
            id: 'diag-automation-system',
            tabTitleKo: '시스템 아키텍쳐',
            tabTitleEn: 'System Architecture',
            titleKo: '시스템 아키텍쳐',
            titleEn: 'System Architecture',
            defaultScale: 0.75,
            mermaidChart: `flowchart TD
    subgraph Source["입력"]
        API["FC Online 매치 상세 데이터<br/>(match-detail)"]
        META["메타데이터<br/>spid · spposition · season · matchtype"]
        VID["화면 녹화 영상"]
    end

    subgraph Engine["FastAPI 검증 엔진"]
        SPEC["데이터 스키마 참조"]
        RULE["항목별 규칙 모듈"]
        CHK["검증 실행기"]
        SYNC["시간 동기화"]
    end

    subgraph UI["React 대시보드 (탭 확장형)"]
        R1["검증 결과 리포트"]
        R2["피치 시각화 2D / 3D"]
        R3["장면 클립 플레이어"]
        R4["정합성 추세 트래킹"]
    end

    API --> CHK
    META --> CHK
    SPEC --> CHK
    RULE --> CHK
    CHK --> R1
    CHK --> R2
    R1 --> R4
    VID --> SYNC
    CHK --> SYNC
    SYNC --> R3`
          },
          {
            id: 'diag-automation-checks',
            tabTitleKo: '검증 단계',
            tabTitleEn: 'Check Layers',
            titleKo: '검증 단계 (FC Online 매치 상세 데이터 적용)',
            titleEn: 'Check Layers (Applied to FC Online Match Detail)',
            defaultScale: 1.0,
            mermaidChart: `flowchart LR
    IN["matchInfo[]<br/>matchDetail · shoot · shootDetail[]<br/>pass · defence · player[]"]

    subgraph L1["1. 형식"]
        A1["허용 값 · 타입<br/>좌표 0~1 범위"]
    end
    subgraph L2["2. 요약 ↔ 상세"]
        A2["shootTotal = shootDetail 수<br/>goalTotal = 골 결과 수"]
    end
    subgraph L3["3. 관계"]
        A3["성공 ≤ 시도<br/>assist ↔ assistSpId"]
    end
    subgraph L4["4. 참가자 간"]
        A4["점유율 합 100<br/>골 수 ↔ matchResult"]
    end

    OUT["통과 / 실패 리포트<br/>+ 장면 · 좌표 확인"]

    IN --> A1 --> A2 --> A3 --> A4 --> OUT`
          }
        ]
      },
      {
        num: '04',
        titleKo: '04. Applying to FC Online Data (FC Online 매치 상세 데이터 적용 시 검증 범위)',
        titleEn: '04. Applying to FC Online Data (What Can Be Verified)',
        highlight: true,
        contentKo: `직접 개발한 자동화 테스트 툴의 개념을 FC Online 매치 상세 데이터에 확장 적용하면, 아래와 같은 검증을 사람의 손을 거치지 않고 자동으로 수행할 수 있습니다.

### 1. 형식 검사 — 있어야 할 값이 올바른 모양으로 있는가
- \`matchResult\`는 "승"·"무"·"패", \`matchEndType\`은 0·1·2, \`controller\`는 keyboard·pad·etc 중 하나인지
- \`shootDetail[].type\`이 1~12, \`result\`가 1~3처럼 약속된 코드 안에 있는지
- \`x\`, \`y\`, \`assistX\`, \`assistY\` 좌표가 경기장 기준 0~1 범위 안에 있는지

### 2. 요약 ↔ 상세 일치 — 합계와 내역이 맞는가
- \`shootTotal\`과 \`shootDetail\` 항목 수, \`goalTotal\`과 골로 끝난 슈팅 수가 맞는지
- \`goalTotal = goalInPenalty + goalOutPenalty + goalPenaltyKick\`이 성립하는지
- 선수별 \`player[].status\`의 골·패스 합계가 팀 단위 \`shoot\`·\`pass\` 요약과 맞는지

### 3. 논리적 관계 — 말이 되는 숫자인가
- 성공 수가 시도 수를 넘지 않는지 (\`passSuccess ≤ passTry\`, \`tackleSuccess ≤ tackleTry\`, \`effectiveShootTotal ≤ shootTotal\`, \`goalHeading ≤ shootHeading\`)
- \`assist\`가 false면 \`assistSpId\`가 -1, true면 실제 선수 식별자인지
- \`inPenalty\` 값이 슈팅 좌표가 페널티박스 안에 있는지와 일치하는지

### 4. 참가자 간 정합성 — 양쪽 기록이 서로 맞는가
- 두 참가자의 \`possession\` 합이 100인지
- 양쪽 골 수를 비교한 결과가 각자의 \`matchResult\`와 맞는지 (몰수 등 \`matchEndType\` 예외는 별도 처리)

### 5. 메타데이터 · 맥락 검사
- \`spId\`, \`spPosition\`, \`seasonId\`, \`matchType\`이 메타데이터 목록에 실제로 있는 값인지
- \`matchType\`에 따라 기대값이 달라지는 항목은 규칙을 다르게 적용하는지

### 6. 시간 · 장면 검사
- 전·후반, 연장, 승부차기 구간이 함께 담긴 \`goalTime\` 값을 실제 경기 시각으로 풀어, 녹화 영상의 해당 장면과 나란히 확인
- 슈팅·어시스트 좌표를 피치 위에 그려, 의미 없는 기본 좌표로 남은 기록을 눈으로 바로 구별`,
        contentEn: `Extending the tool's concept to FC Online match detail data, the following checks run automatically without manual effort.

### 1. Format — Is Each Value Present and Well-Formed?
- \`matchResult\` in 승/무/패, \`matchEndType\` in 0/1/2, \`controller\` in keyboard/pad/etc
- \`shootDetail[].type\` within 1–12 and \`result\` within 1–3
- \`x\`, \`y\`, \`assistX\`, \`assistY\` within the 0–1 pitch range

### 2. Summary ↔ Detail — Do Totals Match Line Items?
- \`shootTotal\` vs number of \`shootDetail\` entries; \`goalTotal\` vs goal-result shots
- \`goalTotal = goalInPenalty + goalOutPenalty + goalPenaltyKick\`
- Per-player \`player[].status\` sums vs team \`shoot\`/\`pass\` summaries

### 3. Relations — Do the Numbers Make Sense?
- Successes never exceed attempts (\`passSuccess ≤ passTry\`, \`tackleSuccess ≤ tackleTry\`, \`effectiveShootTotal ≤ shootTotal\`)
- \`assist: false\` implies \`assistSpId = -1\`
- \`inPenalty\` agrees with whether the shot coordinates fall inside the box

### 4. Cross-Participant — Do Both Sides Agree?
- Both participants' \`possession\` sums to 100
- Goal comparison agrees with each side's \`matchResult\` (forfeit \`matchEndType\` handled separately)

### 5. Metadata & Context
- \`spId\`, \`spPosition\`, \`seasonId\`, \`matchType\` exist in the metadata lists
- Rules adapt where expectations differ by \`matchType\`

### 6. Time & Scene
- \`goalTime\` (half, extra time, shoot-out encoded together) is decoded and shown beside the recorded scene
- Shot and assist coordinates are drawn on the pitch, exposing placeholder positions at a glance`
      },
      {
        num: '05',
        titleKo: '05. Expected Benefits (기대 효과)',
        titleEn: '05. Expected Benefits',
        contentKo: `### 1. 사람이 데이터를 검증하는 시간 단축
- 수백 개 값의 형식 확인과 합계 계산 같은 반복 작업을 툴이 대신하므로, 사람이 데이터를 하나씩 열어 확인하던 시간이 크게 줄어듭니다.

### 2. 엣지케이스 탐색에 시간을 쏟을 수 있음
- 아낀 시간은 규칙으로 잡기 어려운 예외 상황에 쓸 수 있습니다. 연장전·승부차기로 끝난 경기, 몰수 처리된 경기, 자책골이 섞인 경기처럼 드물지만 중요한 케이스를 더 깊이 들여다볼 수 있습니다.

### 3. 데이터 정합성의 지속적 트래킹
- 같은 기준으로 반복 검증한 결과가 쌓이므로, 업데이트나 시즌이 바뀔 때마다 정합성이 어떻게 변하는지 추세로 추적할 수 있습니다. 이전에 통과하던 항목이 실패로 바뀌면 바로 드러나 문제를 조기에 발견할 수 있습니다.

### 4. 일관된 검증 기준과 신뢰할 수 있는 데이터
- 사람마다 달라질 수 있는 확인 기준이 규칙으로 고정되어, 누가 언제 검증해도 같은 결과를 얻습니다. 검증된 데이터는 분석·통계·서비스 지표의 신뢰도를 높이는 기반이 됩니다.`,
        contentEn: `### 1. Less Time Spent Verifying Data by Hand
- Format checks and total calculations across hundreds of values are automated, sharply cutting manual verification time.

### 2. More Time for Edge Cases
- Saved time goes to cases rules can't easily capture: extra-time and shoot-out finishes, forfeits, own goals.

### 3. Continuous Integrity Tracking
- Repeated checks under the same criteria build a history, so integrity trends can be tracked across updates and seasons, and regressions surface immediately.

### 4. Consistent Criteria, Trustworthy Data
- Rules fix the criteria, giving the same result regardless of who checks or when, strengthening analytics and service metrics built on the data.`
      },
      {
        num: '06',
        titleKo: '06. Conclusion & Lessons Learned (결론 및 배운 점)',
        titleEn: '06. Conclusion & Lessons Learned',
        contentKo: `### 1. 데이터는 '관계'로 검증해야 한다
- 값 하나하나가 맞는지보다, 요약과 상세, 참가자와 참가자 사이가 서로 맞는지를 볼 때 실제 문제가 드러난다는 점을 배웠습니다.

### 2. 스키마를 참조하는 구조는 다른 데이터로도 확장된다
- 검사 기준을 데이터 스키마에서 가져오는 구조 덕분에, 같은 툴의 개념을 FC Online 매치 상세 데이터처럼 전혀 다른 데이터에도 그대로 적용할 수 있습니다.

### 3. 오탐을 줄이는 것이 신뢰를 만든다
- 실패가 너무 많이 뜨는 검증기는 결국 쓰이지 않습니다. 맥락에 따라 기대값을 달리하는 규칙이 툴을 실제로 쓰이게 만드는 핵심입니다.

### 4. 다음 단계
- 시각화 화면에서 최신 규칙으로 바로 다시 검사하는 실시간 동기화, 그리고 시나리오 단위로 "무엇을 플레이하고 무엇을 확인할지" 안내하는 기능으로 확장할 계획입니다.`,
        contentEn: `### 1. Validate Relationships, Not Just Values
- Real problems appear when summaries, details, and participants are checked against each other.

### 2. Schema-Referenced Design Generalizes
- Because criteria come from the data schema, the same concept applies to entirely different datasets such as FC Online match detail.

### 3. Fewer False Positives Build Trust
- A validator that flags everything gets ignored; context-aware expectations keep the tool useful.

### 4. Next Steps
- Real-time re-checking from the visualizer, and scenario-driven guidance on what to play and what to verify.`
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
    techStack: ['Python', 'FastAPI', 'UDP Socket (:20777)', 'Circular Ring Buffer', 'WebSocket', 'React & SVG', 'AI Voice (TTS)'],

    metricsHeadingKo: '결과 요약 (Summary of Results)',
    metricsHeadingEn: 'Results Summary',
    keyMetrics: [
      {
        valueKo: '60Hz 고주파 UDP 텔레메트리 무손실 실시간 파싱',
        valueEn: '60Hz Lossless Real-Time UDP Telemetry Parsing',
        icon: 'fas fa-network-wired'
      },
      {
        valueKo: '5ms 미만 링 버퍼 인덱싱 및 28ms 초고속 디스크 캐싱',
        valueEn: 'Sub-5ms Ring Buffer & ~28ms High-Speed Disk Cache',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '24개 공식 서킷 실좌표 매핑 및 동적 에이펙스 탐색',
        valueEn: '24 Official Tracks Coordinate & Dynamic Apex Mapping',
        icon: 'fas fa-map-location-dot'
      },
      {
        valueKo: 'AI 음성 페르소나 실시간 핸즈프리 피트월 코칭',
        valueEn: 'Live Hands-Free Pitwall AI Voice Persona Coaching',
        icon: 'fas fa-headphones'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: 'F1 UDP Socket (:20777)', titleEn: 'F1 UDP Socket (:20777)' },
      { step: '02', titleKo: 'CircuitDataManager & 트랙 보간', titleEn: 'CircuitDataManager & Track Interpolation' },
      { step: '03', titleKo: 'StateManager & 동적 에이펙스 탐색', titleEn: 'StateManager & Dynamic Apex Recovery' },
      { step: '04', titleKo: '초고속 디스크 캐시 (~28ms)', titleEn: 'Ultra-Fast Disk Cache (~28ms)' },
      { step: '05', titleKo: 'WebSocket 실시간 스트림 & 대시보드', titleEn: 'WebSocket Live Stream & Dashboard' }
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
        contentKo: `### 1. 시속 300km/h 극한의 주행과 시야 분산의 위험성
F1 25 / 26과 같은 고속 심레이싱 환경에서는 시속 300km/h를 넘나드는 극한의 속도로 코너를 공략하며 0.1초 단위의 랩타임을 다툽니다. 주행 중 온스크린 계기판의 미세한 수치(타이어 마모도, 연료 잔여 랩, 델타 타임)를 눈으로 확인하려 하면 전방 시야가 분산되어 치명적인 브레이크 락업(Lock-up)과 랩타임 손실이 발생합니다.

### 2. 심레이싱 유저를 위한 전문 엔지니어링 분석 도구의 부재
"내가 왜 특정 코너에서 느렸는지, 브레이킹 포인트(Braking Point)는 적절했는지, 타이어 관리는 올바르게 이루어지고 있는지"를 스스로 분석하고 피드백할 수 있는 전문적인 툴이 시장에 부재했습니다.

### 3. 단순 수치 나열을 넘어선 '실질적 피드백 루프' 필요
기존 UI와 원시 텔레메트리 뷰어들은 숫자를 나열하는 데 그쳐, 드라이버가 주행 직후 자신의 주행 라인과 페달 조작을 입체적으로 점검하고 실력을 향상시키기 위한 실행 가능한 피드백을 제공하지 못했습니다.`,
        contentEn: `### 1. Cognitive Distraction at 300+ km/h Speeds
Piloting Formula 1 cars at 300+ km/h requires absolute visual focus. Glancing at dense on-screen telemetry gauges to check tire wear or fuel deltas causes dangerous visual disruption and costly lock-ups.

### 2. Critical Gap in Driver Analytics Tooling
Sim racers lacked professional engineering feedback tools to evaluate why they lost time in specific corners, whether braking points were optimal, and how tire degradation evolved over a stint.

### 3. Need for Actionable Feedback Loops
Rudimentary telemetry viewers merely list raw numbers without dynamic kinematics context, failing to provide actionable self-coaching insights for systematic lap-by-lap improvements.`
      },
      {
        num: '02',
        titleKo: '02. Introduction & Objective (도입 배경 및 개발 목표)',
        titleEn: '02. Introduction & Objective (Race Engineer Persona & Realism)',
        contentKo: `### 1. 실제 F1 피트월 무전(Radio) 경험의 현실화
실제 F1에서는 피트월의 전담 레이스 엔지니어가 무전을 통해 타이어 마모 상태, 경쟁 차량과의 코너 속도 득실, 최적 피트 윈도우를 실시간 브리핑합니다.

### 2. 유명 레이스 엔지니어 AI 음성 페르소나 구현
Max Verstappen의 "GP", Lewis Hamilton의 "Bono", Carlos Sainz의 "Ricky" 등 실제 F1 엔지니어들의 보이스 톤을 음성 합성(TTS)으로 구현하여, 드라이버가 화면을 보지 않고 귀로 상황을 파악하는 핸즈프리 몰입감을 완성했습니다.

### 3. 실시간 오디오 브리핑과 사후 정밀 텔레메트리의 결합
"주행 중에는 귀로 실시간 코칭을 받고, 주행 후에는 코너별 키네마틱스 분석을 통해 스스로 드라이빙을 개선하는 올인원 레이스 엔지니어링 솔루션" 구축을 목표로 설정했습니다.`,
        contentEn: `### 1. Replicating the Real-World F1 Pitwall Radio Dynamic
In real Formula 1 races, pitwall engineers continuously broadcast live tire degradation, competitor pace deltas, and strategic pit windows over team radio.

### 2. Authentic Race Engineer AI Voice Personas
Synthesized recognizable engineer personas (Max Verstappen's "GP", Lewis Hamilton's "Bono", Carlos Sainz's "Ricky") via text-to-speech, enabling hands-free situational awareness during high-speed racing.

### 3. Fusing Auditory Briefings with Post-Session Kinematics
Architected a closed-loop system where drivers receive real-time audio calls during racing and inspect deep turn-by-turn kinematics post-session for continuous driver improvement.`
      },
      {
        num: '03',
        titleKo: '03. System Architecture & Data Flow (시스템 아키텍처 및 데이터 흐름)',
        titleEn: '03. System Architecture & Data Flow',
        architectureDiagrams: [
          {
            id: 'diag-system-runtime',
            tabTitleKo: '시스템 아키텍쳐',
            tabTitleEn: 'System Architecture',
            titleKo: '시스템 아키텍쳐',
            titleEn: 'System Architecture',
            defaultScale: 0.60,
            mermaidChart: `flowchart TD
    subgraph GameSource["F1 25 / 26 Game Engine"]
        UDP["UDP Packet Stream (Port 20777)<br/>Packet 0, 1, 2, 4, 5, 6, 7, 10, 11"]
        REC["Pre-recorded Laps (.jsonl)<br/>Catalunya / Austria / Monaco"]
    end

    subgraph Backend["Python FastAPI Engine (project/backend)"]
        LS["telemetry/listener.py<br/>(4MB SO_RCVBUF, Non-blocking Batch Drain)"]
        CD["circuit_data/manager.py<br/>(Curvature & Track Interpolation)"]
        SM["state_mgmt/manager.py<br/>(Kinematics Recovery, Corner Mapping, Lap Cache)"]
    end

    subgraph Frontend["React Frontend (project/frontend)"]
        WS["WebSocket Client (ws://localhost:8080/ws)"]
        UI1["Top Hero: Live Speed & Classification"]
        UI2["Band 2: Lap History & Corner Detail"]
        UI3["Band 3: Corner Analysis Full Matrix"]
        UI4["Band 4: Interactive Circuit Map & Sectors"]
    end

    UDP --> LS
    REC --> SM
    LS --> SM
    CD --> SM
    SM -- "5Hz ~ 60Hz JSON Stream" --> WS
    WS --> UI1
    WS --> UI2
    WS --> UI3
    WS --> UI4`
          },
          {
            id: 'diag-data-rendering-pipeline',
            tabTitleKo: '데이터 파이프라인',
            tabTitleEn: 'Data Pipeline',
            titleKo: '데이터 파이프라인',
            titleEn: 'Data Pipeline',
            defaultScale: 1.10,
            mermaidChart: `flowchart LR
    subgraph Sources["1. 원본 데이터 소스 (Data Sources)"]
        UDP["F1 25/26 실시간 UDP 패킷<br/>또는 녹화본 (.jsonl)"]
        TRACK["서킷 레퍼런스 레이싱 라인<br/>(docs/tracks/*_racingline.txt)"]
        CORNER["서킷 코너 구간 정의<br/>(circuit_data/*_corners.json)"]
    end

    subgraph Backend["2. 백엔드 처리 엔진 (FastAPI / Python)"]
        CM["CircuitDataManager<br/>(트랙 좌표·곡률 보간 및 코너 기준점 로드)"]
        SM["StateManager<br/>(랩 세그먼트 분리, 물리 역산, 코너별 매핑)"]
        CACHE["사전 파싱 캐시<br/>(_parsed_laps_cache_v3.json)"]
    end

    subgraph Frontend["3. 프론트엔드 대시보드 (React / SVG)"]
        HERO["실시간 텔레메트리 & 리더보드"]
        LAP["Lap History & 코너별 상세 카드"]
        CA["Corner Analysis 전체 매트릭스"]
        MAP["Interactive Circuit Map (T1~TN)"]
        SEC["섹터 비교 & 셋업/타이어/AI 전략"]
    end

    UDP --> SM
    TRACK --> CM
    CORNER --> CM
    CM --> SM
    SM <--> CACHE
    SM -- "WebSocket (ws://localhost:8080/ws)" --> HERO
    SM -- "WebSocket" --> LAP
    SM -- "WebSocket" --> CA
    SM -- "WebSocket" --> MAP
    SM -- "WebSocket" --> SEC`
          }
        ]
      },
      {
        num: '04',
        titleKo: '04. Method & Engineering (분석 방법론 및 엔지니어링)',
        titleEn: '04. Method & Engineering (Kinematics & Dynamic Apex Algorithms)',
        contentKo: `### 1. 동적 에이펙스(Dynamic Apex) 탐색 알고리즘
- 서킷 맵의 코너 마커는 고정 좌표가 아니며, 코너 윈도우 \`[entry_dist - 15m, exit_dist + 15m]\` 내에서 드라이버가 실제 기록한 최저 속도 지점(\`min(apex_window, key=lambda p: p["speed"])\`)을 동적으로 추출합니다. 이를 통해 조기 제동 여부와 레이트 브레이킹 깊이를 랩마다 실제 주행 궤적으로 정확히 표시합니다.

### 2. 코너별 정밀 키네마틱스 지표 역산
- **Braking Point**: 브레이크 답력이 5% 이상 인가되기 시작한 최초 지점 거리(m)
- **Throttle-On Point**: 에이펙스 통과 직후 가속을 25% 이상 재개한 지점 거리(m)
- **Max Lateral G**: 코너링 중 발생한 피크 횡가속도(G)
- **vs Ahead / vs Leader**: 동일 코너에서 앞차 및 선두 차량의 에이펙스 최저 속도와 페달 답력을 내 기록과 비교

### 3. 물리 기반 결측 패킷 역산 복원 엔진
- 과거 녹화본(.jsonl)에서 UDP 패킷 누락 감지 시, 주행 거리와 경과 시간 변화율로부터 구간 속도($v = \Delta d / \Delta t \times 3.6$), 가감속도($a = \Delta v / \Delta t$), 횡가속도($G_{lat} = v^2 \cdot |\kappa| / 9.81$)를 역산하여 무결성을 100% 보장`,
        contentEn: `### 1. Dynamic Apex Tracking Algorithm
- Evaluates the corner window \`[entry_dist - 15m, exit_dist + 15m]\` to identify the absolute minimum velocity point (\`min(apex_window, key=lambda p: p["speed"])\`), tracking actual driver late-braking trajectory per lap.

### 2. Corner Kinematics Matrix
- **Braking Point**: Distance (m) where brake pedal input first exceeds 5%
- **Throttle-On Point**: Distance (m) where throttle re-application exceeds 25% post-apex
- **Max Lateral G**: Peak lateral cornering acceleration load (G)
- **Rival Comparison**: Turn-by-turn velocity and pedal deltas benchmarked against the car ahead and session leader

### 3. Physics-Based Packet Reconstruction Engine
- Reconstructs missing motion telemetry from distance and elapsed time differentials, computing velocity ($v = \Delta d / \Delta t \times 3.6$) and lateral G ($G_{lat} = v^2 \cdot |\kappa| / 9.81$) with zero data loss.`
      },
      {
        num: '05',
        titleKo: '05. Results & UI Implementation (구현 성과 및 대시보드 화면)',
        titleEn: '05. Results & UI Implementation (Live Dashboard Screens & Telemetry)',
        highlight: true,
        contentKo: `### 엔지니어링 피트월급 고밀도 대시보드 구현
60Hz 무손실 패킷 파싱, 5ms 초저지연 버퍼링, 28ms 초고속 디스크 캐싱을 달성하고 24개 공식 F1 서킷 좌표를 100% 매핑 완료했습니다. 다크 히어로 밴드와 JetBrains Mono 고밀도 타이포그래피를 채택한 4대 핵심 화면 인터페이스입니다.`,
        contentEn: `### High-Density Pitwall Telemetry Interface
Achieved 60Hz lossless parsing, sub-5ms buffer indexing, ~28ms disk caching, and 100% coordinate mapping across 24 official F1 tracks. High data-density views built with JetBrains Mono typography.`,
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
        contentKo: `### 1. 코너별 브레이킹 & 트레일 브레이킹 자가 교정
- "Turn 1에서 브레이킹 포인트가 지난 랩 대비 8m 빨라 턴인 속도를 잃었다"거나 "선두 드라이버 대비 스로틀 전개 시점(Throttle-On)이 12m 늦다"는 점을 키네마틱스 매트릭스로 즉각 확인하여 제동 지점을 과감하게 교정할 수 있습니다.

### 2. 동적 에이펙스(Dynamic Apex) 및 레이싱 라인 시각 진단
- 서킷 맵 위에 랩마다 찍힌 실제 동적 에이펙스 위치를 비교하여 이상적인 레이싱 라인 대비 언더스티어로 밀려났는지를 자가 진단하고 최적 진입 궤적을 수정합니다.

### 3. 전방 시야 확보 상태에서의 실시간 AI 무전 피드백
- 시속 300km/h 주행 중 화면에 시야를 빼앗기지 않고도 타이어 마모율 임계치 도달 알림, 경쟁 차량과의 코너 속도 득실, 최적 피트스탑 윈도우를 실제 엔지니어 음성으로 귀로 전달받아 모터스포츠 현장의 현실감과 전략적 판단을 경험합니다.`,
        contentEn: `### 1. Corner-by-Corner Braking & Throttle-On Optimization
- Drivers immediately identify when braking was executed 8m prematurely or when throttle re-application lagged 12m behind rivals, providing exact benchmarks to fine-tune trail braking.

### 2. Dynamic Apex & Trajectory Visualization
- Comparing dynamic apex positions against the ideal racing line allows drivers to diagnose understeer drift and calibrate turn-in entry trajectories.

### 3. Hands-Free Real-Time Pitwall Coaching
- Tactical radio updates—tire degradation thresholds, rival corner speed deltas, and strategic pit windows—are spoken aloud by authentic engineer personas, allowing drivers to maintain visual track focus.`
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
    period: '2026.09 (완료)',
    techStack: ['React', 'JavaScript (ES6+)', 'SheetJS (xlsx)', 'RegEx', 'Client In-Memory'],

    metricsHeadingKo: '결과 요약 (Summary of Results)',
    metricsHeadingEn: 'Results Summary',
    keyMetrics: [
      {
        valueKo: '나이스(NEIS) 특수 바이트 계산 규격 정합도 100%',
        valueEn: '100% Accuracy in Official NEIS Byte Regulations',
        icon: 'fas fa-calculator'
      },
      {
        valueKo: '엑셀 중복 문장 행(Row) 탐지 시간 90%+ 단축 (2초)',
        valueEn: '> 90% Faster Excel Duplicate Detection (< 2s)',
        icon: 'fas fa-bolt'
      },
      {
        valueKo: '서버 전송 0건 — 브라우저 인메모리 완전 샌드박스',
        valueEn: 'Zero Server Upload — 100% In-Memory Sandbox',
        icon: 'fas fa-user-shield'
      },
      {
        valueKo: '웹 인라인 수정 & 원본 엑셀 양방향 실시간 동기화',
        valueEn: 'Real-Time Inline Editing & Bidirectional Excel Export',
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
        contentKo: `### 1. 학교생활기록부 입력 시기의 반복적 행정 병목
학교생활기록부 작성 기간 동안 교사들은 수백 명의 학생에 대한 세부능력 및 특기사항 평가를 수작업으로 검토합니다.

### 2. NEIS 독자 규격과 시중 글자수 세기 툴의 불일치
교육행정정보시스템(NEIS)의 독자적 바이트 계산 규격(한글 3바이트, 줄바꿈 2바이트 등)이 일반 웹 글자수 세기 툴과 달라 입력 시 길이 초과 오류가 빈번하게 발생했습니다.

### 3. 수백 행 엑셀 수동 대조와 개인정보 유출 위험
수백 행의 엑셀 시트에서 학생 간 중복 문장을 육안으로 찾느라 야근이 반복되었으며, 민감한 학생 평가 데이터를 외부 클라우드 서버에 업로드하는 것은 개인정보보호법상 엄격히 금지되어 있었습니다.`,
        contentEn: `### 1. Administrative Bottlenecks in Student Record Entry
During evaluation seasons, educators review hundreds of student records manually, spending hours cross-checking phrasing.

### 2. Discrepancy Between NEIS Standards and Generic Counters
NEIS uses specific byte logic (Hangul 3 bytes, CRLF newlines 2 bytes) differing from generic counters, causing frequent length overflow errors upon submission.

### 3. Manual Excel Auditing and Privacy Risks
Educators spent hours manually scanning Excel spreadsheets to avoid duplicate evaluations across students. Uploading student evaluations to cloud servers was strictly prohibited by privacy regulations.`
      },
      {
        num: '02',
        titleKo: '02. Discovery & Trigger (문제 인지 계기)',
        titleEn: '02. Discovery & Trigger (Discovery Context)',
        contentKo: `### 1. 바이트 초과 오류와 수작업 Ctrl+F 야근의 악순환 목격
교직원들이 나이스 시스템에 복사-붙여넣기 후 "바이트 초과" 팝업을 만나 문장을 일일이 다시 줄이거나, 엑셀 Ctrl+F로 중복 문장을 밤새도록 하나씩 찾는 모습을 보며 현장의 심각한 비효율을 확인했습니다.

### 2. "보안 유출 없는 순수 인메모리 도구"의 필요성 절감
> "서버로 데이터를 전혀 전송하지 않고 100% 브라우저 메모리 안에서만 나이스 맞춤형 바이트를 계산하고 엑셀 중복을 행 번호로 찾아주는 도구가 있다면 현장의 큰 고통을 해결할 수 있다"고 확신했습니다.`,
        contentEn: `### 1. Observing the Cycle of Byte Overflows and Manual Searching
Witnessed teachers repeatedly encountering "byte overflow" alerts, desperately trimming words, and using Ctrl+F all night to find duplicate evaluations across classes.

### 2. Need for a Zero-Leakage In-Memory Solution
> Convinced that a 100% client-side tool calculating exact NEIS bytes and pinpointing duplicate rows without any server transmission would eliminate massive operational pain.`
      },
      {
        num: '03',
        titleKo: '03. Approach & Methodology (접근 전략 및 보안 원칙)',
        titleEn: '03. Approach & Methodology (Architecture & Privacy Principles)',
        contentKo: `### 1. 100% 클라이언트 인메모리 샌드박스 (SheetJS)
- 단 한 바이트의 데이터도 외부 서버로 전송하지 않고, 브라우저 메모리(RAM) 내에서만 모든 처리를 완결하여 학생 개인정보 완벽 보호

### 2. 나이스 맞춤형 바이트 계산 알고리즘 정립
- 한글 3Byte, 영문/숫자/공백 1Byte, 줄바꿈(\r\n) 2Byte를 오차 없이 정밀 측정하는 전산 규격 완벽 준수

### 3. 문장 단위 차분(Diff) & 해시맵 기반 행(Row) 매핑
- 정규식 기반 문장 단위 분리 후 해시맵을 구축하여 중복 문장 발생 시 해당 행 번호(Row Index)를 즉각 매핑

### 4. 실시간 인라인 편집 및 양방향 엑셀 내보내기
- 웹 테이블에서 문장을 바로 수정하고, 수정 사항이 즉시 반영된 .xlsx 파일을 원클릭으로 다운로드하는 양방향 워크플로우 구축`,
        contentEn: `### 1. 100% In-Memory Sandbox (SheetJS)
- Zero server requests; processes all spreadsheet data entirely inside browser RAM to ensure absolute student data protection.

### 2. Strict Compliance with Official NEIS Byte Logic
- Implemented exact logic counting Hangul as 3 bytes, ASCII as 1 byte, and newlines as 2 bytes without discrepancies.

### 3. Sentence Diff & Hash-Indexed Row Mapping
- Regex-tokenized sentences into hash maps to instantaneously index duplicate occurrences with exact row numbers.

### 4. Real-Time Inline Editing & Bidirectional Excel Export
- Enabled direct table editing with automatic recalculation and 1-click export back to .xlsx format.`
      },
      {
        num: '04',
        titleKo: '04. Implementation & System (구현 및 해결 과정)',
        titleEn: '04. Implementation & System (Engineering Execution)',
        contentKo: `### 1. 유니코드 코드포인트 순회 기반 정밀 바이트 엔진
- 자바스크립트 문자열의 유니코드 코드포인트를 순회하며 한글(3byte), 줄바꿈(\r\n, 2byte), 공백(1byte)을 구분 측정하는 전용 알고리즘 구축

### 2. SheetJS 인메모리 가상 워크북 파서
- 대용량 엑셀 파일 업로드 시 브라우저 내에서 가상 워크북으로 파싱하여 수백 행의 텍스트 셀을 2초 이내로 메모리에 적재

### 3. 행 단위 중복 문장 탐지 엔진
- 정규식 기반 문장 분리 후 각 문장의 출현 빈도와 행(Row) 인덱스를 맵에 캐싱하여, 중복 문장 발생 시 "Row 5, Row 19와 중복" 형태로 명시

### 4. 인라인 수정 및 실시간 엑셀 다운로드
- UI 상에서 문장을 수정하면 즉시 바이트 수치와 중복 상태가 실시간 재계산되며, 원본 서식을 보존한 엑셀 파일로 즉시 다운로드 지원`,
        contentEn: `### 1. Custom Byte Calculation Engine
- Traversed Unicode codepoints to accurately differentiate Hangul (3 bytes), newlines (2 bytes), and spaces (1 byte).

### 2. In-Memory SheetJS Workbook Parser
- Parsed multi-student spreadsheets directly into client virtual memory within 2 seconds with zero network transfer.

### 3. Sentence-Level Duplicate Detection Engine
- Tokenized text across rows into indexed hash maps, labeling duplicates with exact row indicators (e.g., "Duplicate in Row 5, Row 19").

### 4. Inline Editing & Real-Time Excel Export
- Synced inline modifications with real-time recalculations, allowing 1-click export of modified spreadsheets.`
      },
      {
        num: '05',
        titleKo: '05. Quantitative Results (정량 성과 및 무누출 달성)',
        titleEn: '05. Quantitative Results (Measurable Impact)',
        highlight: true,
        contentKo: `### 1. 대규모 엑셀 시트 내 중복 행 탐지 소요 시간 90% 이상 단축
- 기존 1시간 이상 소요되던 수백 행 육안 검토 작업을 엑셀 업로드 즉시 **2초 이내**로 단축했습니다.

### 2. 나이스 특수 규격 기준 바이트 계산 정합도 100% 달성
- 나이스 시스템 입력 시 길이 초과로 인한 반려 및 반환 수정 사례를 **0건**으로 예방했습니다.

### 3. 0% 서버 전송으로 개인정보 유출 위험 원천 차단
- 100% 브라우저 인메모리 샌드박스 구동으로 민감한 학생 평가 데이터의 개인정보보호법 규정을 완벽하게 충족했습니다.`,
        contentEn: `### 1. > 90% Reduction in Duplicate Verification Time
- Cut over 1 hour of manual scanning down to **sub-2-second automated row highlighting**.

### 2. 100% NEIS Byte Compliance
- Completely eliminated character overflow rejections when pasting into the administrative portal.

### 3. 0% Server Transmission Risk
- In-browser sandbox fully satisfied strict student privacy legal compliance with zero data leakage.`
      },
      {
        num: '06',
        titleKo: '06. Learnings & Retrospective (회고 및 배운 점)',
        titleEn: '06. Learnings & Retrospective (Key Takeaways)',
        contentKo: `### 1. 민감 도메인에서의 '순수 클라이언트 인메모리' 아키텍처의 위력
보안이 극도로 민감한 행정/교육 도메인에서는 서버를 쓰지 않는 "순수 클라이언트 인메모리(Client-Side Sandbox)" 아키텍처가 사용자에게 가장 큰 신뢰를 준다는 것을 확인했습니다.

### 2. 도메인 특수 규칙을 100% 준수하는 맞춤형 도구의 실질적 가치
사소해 보이는 업무라도 현장의 규칙(바이트 계산 방식, 중복 행 찾기)을 깊이 이해하고 맞춤형 도구를 만들었을 때 사용자의 체감 효용이 극대화된다는 엔지니어링 철학을 다졌습니다.`,
        contentEn: `### 1. Power of Pure Client-Side Sandboxes in Sensitive Domains
Confirmed that in privacy-sensitive domains, zero-server in-memory sandboxes provide the ultimate trust and adoption barrier.

### 2. Immense Value of Domain-Specific Precision Tools
Reaffirmed that deeply understanding domain-specific quirks (such as unique byte rules) and building precision tools delivers immense real-world productivity gains.`
      }
    ]
  }
];
