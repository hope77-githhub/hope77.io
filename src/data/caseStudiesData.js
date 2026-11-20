import f1Img1 from '../assets/images/f1/01_session_configuration.png';
import f1Img2 from '../assets/images/f1/02_lap_history_and_setup.png';
import f1Img3 from '../assets/images/f1/03_corner_analysis_matrix.png';
import f1Img4 from '../assets/images/f1/04_circuit_map_and_sectors.png';
import fcoImg1 from '../assets/images/fco/01_boost_stage.png';
import fcoImg2 from '../assets/images/fco/02_boost_pitch.png';
import fcoImg3 from '../assets/images/fco/03_boost_team.png';
import fcoImg4 from '../assets/images/fco/04_record_identity.png';
import fcoImg5 from '../assets/images/fco/05_record_matchups.png';
import fcoImg6 from '../assets/images/fco/06_record_improve.png';
import fcoImg7 from '../assets/images/fco/07_record_shots.png';
import fcoImg8 from '../assets/images/fco/08_record_picks.png';
import traitImg1 from '../assets/images/fco-trait/01_icon_heel_impact.png';
import traitImg2 from '../assets/images/fco-trait/02_activation_conditions.png';
import traitImg3 from '../assets/images/fco-trait/03_usage_post_play.png';

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
    periodEn: '2025.12 – Present (Active)',
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
    SYNC --> R3`,
            mermaidChartEn: `flowchart TD
    subgraph Source["Input"]
        API["FC Online match detail data<br/>(match-detail)"]
        META["Metadata<br/>spid · spposition · season · matchtype"]
        VID["Screen recording"]
    end

    subgraph Engine["FastAPI Validation Engine"]
        SPEC["Data schema reference"]
        RULE["Per-field rule modules"]
        CHK["Validation runner"]
        SYNC["Time sync"]
    end

    subgraph UI["React Dashboard (tab-based)"]
        R1["Validation report"]
        R2["Pitch visualization 2D / 3D"]
        R3["Scene clip player"]
        R4["Integrity trend tracking"]
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

    IN --> A1 --> A2 --> A3 --> A4 --> OUT`,
            mermaidChartEn: `flowchart LR
    IN["matchInfo[]<br/>matchDetail · shoot · shootDetail[]<br/>pass · defence · player[]"]

    subgraph L1["1. Format"]
        A1["Allowed values · types<br/>coordinates within 0–1"]
    end
    subgraph L2["2. Summary ↔ Detail"]
        A2["shootTotal = shootDetail count<br/>goalTotal = goal-result shots"]
    end
    subgraph L3["3. Relations"]
        A3["success ≤ attempt<br/>assist ↔ assistSpId"]
    end
    subgraph L4["4. Cross-participant"]
        A4["possession sums to 100<br/>goals ↔ matchResult"]
    end

    OUT["Pass / fail report<br/>+ scene · coordinate check"]

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
- Successes never exceed attempts (\`passSuccess ≤ passTry\`, \`tackleSuccess ≤ tackleTry\`, \`effectiveShootTotal ≤ shootTotal\`, \`goalHeading ≤ shootHeading\`)
- \`assist: false\` implies \`assistSpId = -1\`, and \`assist: true\` requires a real player ID
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
  // 3. Real-Time AI Race Engineer (실시간 텔레메트리 & AI 음성 엔지니어) — Demo 완성
  // =========================================================================
  {
    id: 'log-entry-f1',
    category: 'Real-Time Telemetry & AI Voice',
    badgeTextKo: 'Demo 완성',
    badgeTextEn: 'Demo Complete',
    badgeType: 'success',
    titleKo: 'Real-Time AI Race Engineer — 게임 속 F1 차에 붙는 나만의 레이스 엔지니어',
    titleEn: 'Real-Time AI Race Engineer — Your Own Race Engineer for the F1 Game',
    tabLabelKo: 'F1 텔레메트리 AI',
    tabLabelEn: 'F1 Telemetry AI',
    oneLinerKo: 'F1 게임이 1초에 60번 보내 주는 차량 데이터를 실시간으로 받아 분석하고, 직접 파인튜닝한 레이스 엔지니어 목소리로 무전을 해 주는 심레이싱 코칭 프로그램',
    oneLinerEn: 'A sim-racing coach that reads the 60-per-second car data sent by the F1 game and talks to you over the radio in a race-engineer voice I fine-tuned myself.',
    roleKo: '개인 프로젝트 · 전체 기획, 데이터 수신 · 분석 서버, 무전 규칙, 음성 파인튜닝, 대시보드 · 오버레이',
    roleEn: 'Personal Project · Planning, Data Server, Radio Rules, Voice Fine-Tuning, Dashboard & Overlay',
    period: '2026.09 – 2026.11 (Demo 완성)',
    periodEn: '2026.09 – 2026.11 (Demo Complete)',
    repoUrl: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer',
    techStack: ['Python', 'FastAPI', 'UDP Socket (:20777)', 'WebSocket', 'React & SVG', 'GPT-SoVITS (Few-shot Fine-tuning)', 'faster-whisper', 'Electron Overlay'],

    metricsHeadingKo: '결과 요약 (Summary of Results)',
    metricsHeadingEn: 'Results Summary',
    keyMetrics: [
      {
        valueKo: '게임 데이터 초당 60번 실시간 수신 · 해석',
        valueEn: 'Game Data Received & Decoded 60 Times per Second',
        icon: 'fas fa-network-wired'
      },
      {
        valueKo: '목소리 3분 36초로 파인튜닝 → 무전 · 답변 음성 639개',
        valueEn: '3 min 36 s of Voice → 639 Radio & Answer Clips',
        icon: 'fas fa-headset'
      },
      {
        valueKo: '24개 서킷 코너 맵 · 엔지니어에게 질문 7종',
        valueEn: '24 Track Corner Maps · 7 Ask-the-Engineer Questions',
        icon: 'fas fa-map-location-dot'
      },
      {
        valueKo: '게임 화면 위 TV 중계 오버레이 연동',
        valueEn: 'TV Broadcast Overlay on Top of the Game',
        icon: 'fas fa-tv'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: '게임이 데이터 보내기 (초당 60번)', titleEn: 'Game Sends Data (60 Hz)' },
      { step: '02', titleKo: '해석 · 랩 · 코너별 기록', titleEn: 'Decode & Record Laps / Corners' },
      { step: '03', titleKo: '엔지니어 두뇌가 상황 판단', titleEn: 'Engineer Brain Decides' },
      { step: '04', titleKo: '파인튜닝한 목소리로 무전', titleEn: 'Radio in the Fine-Tuned Voice' },
      { step: '05', titleKo: '대시보드 · TV 오버레이 표시', titleEn: 'Dashboard & TV Overlay' }
    ],

    beforeAfter: {
      beforeKo: '시속 300km로 달리면서 화면 구석의 작은 숫자(타이어 마모, 랩 타임 차이)를 읽기는 어렵고, 주행이 끝나도 "어느 코너에서 왜 느렸는지" 알려 주는 사람이 없었습니다.',
      beforeEn: 'Reading tiny numbers (tyre wear, lap deltas) at 300 km/h is hard, and after a run nobody tells you which corner cost you time and why.',
      afterKo: '달리는 동안에는 엔지니어가 귀로 "1번 코너 제동이 13m 빨랐어", "이번 랩 박스!"처럼 알려 주고, 궁금한 건 직접 물어볼 수 있습니다. 주행이 끝나면 코너별 기록과 서킷 지도로 내 주행을 다시 확인합니다.',
      afterEn: 'While driving, the engineer tells you things like "braking was 13 m early into Turn 1" or "box this lap", and you can ask questions. Afterward, corner tables and the track map show exactly where time went.'
    },

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (배경 및 문제점)',
        titleEn: '01. Background & Problem',
        contentKo: `### 1. 실제 F1에는 '귀로 듣는 코치'가 있다
실제 F1 드라이버는 운전에만 집중하고, 피트월의 레이스 엔지니어가 무전으로 "앞차와 0.8초, DRS 가능", "이번 랩 박스"처럼 필요한 정보를 말해 줍니다. 하지만 F1 게임을 하는 사람에게는 그런 엔지니어가 없습니다.

### 2. 화면 숫자는 달리면서 볼 수 없다
게임 화면에도 숫자는 나오지만, 시속 300km로 코너에 들어가면서 작은 숫자를 읽으면 실수가 납니다. 그렇다고 주행이 끝난 뒤 수만 개의 숫자를 혼자 뒤져 "어디서 느렸는지" 찾기도 어렵습니다.

### 3. 게임은 데이터를 이미 보내 주고 있었다
F1 게임은 설정만 켜면 차의 속도 · 기어 · 페달 · 위치 · 타이어 상태를 **1초에 60번** 네트워크(UDP)로 보내 줍니다. 이 데이터를 받아서 해석하고, 사람 엔지니어처럼 말해 주는 프로그램을 직접 만들기로 했습니다.`,
        contentEn: `### 1. Real F1 Drivers Have a Coach in Their Ear
In real F1, the driver focuses on driving while a race engineer radios things like "0.8 seconds to the car ahead, DRS available" or "box this lap". Players of the F1 game have no such engineer.

### 2. You Can't Read Numbers at 300 km/h
The game shows numbers, but reading them while braking into a corner causes mistakes, and digging through tens of thousands of numbers after a run is just as hard.

### 3. The Game Was Already Sending the Data
With one setting, the F1 game sends speed, gear, pedals, position, and tyre data **60 times per second** over the network (UDP). I built a program that receives it, makes sense of it, and talks like a real engineer.`
      },
      {
        num: '02',
        titleKo: '02. What I Built (무엇을 만들었나)',
        titleEn: '02. What I Built',
        contentKo: `### 1. 실시간 대시보드
- 지금 속도 · 기어 · 페달, 랩별 기록, 코너별 진입 · 정점 · 탈출 속도와 제동 지점을 보여 줍니다. 녹화한 주행을 1~4배속으로 다시 볼 수도 있습니다.

### 2. 엔지니어 자동 무전
- 프랙티스 · 퀄리파잉 · 레이스를 스스로 알아보고, 상황에 맞춰 말합니다.
- **코너 제동**: 2랩부터, 코너를 빠져나오면 이번 세션 가장 빠른 랩과 제동 지점을 비교해 "제동이 13m 빨랐어"처럼 알려 줍니다.
- **페이스 · 앞차 간격 · 피트**: 랩 타임이 좋아지거나 떨어지면, 앞차와의 간격, 타이어가 많이 닳아 피트인할 때를 알려 줍니다.
- **셋업 조언**: 프랙티스에서 타이어 온도와 마모를 보고 "프런트 윙 36 → 38"처럼 바꿀 값을 제안합니다.
- 무전끼리는 최소 6초 간격을 두고, 세이프티카 · 피트인 랩은 비교에서 빼서 엉뚱한 무전이 나오지 않게 했습니다.

### 3. 엔지니어에게 물어보기
- "1등 하려면 어떻게 해야 해?", "앞차 잡을 수 있어?", "어디서 시간을 잃고 있어?", "언제 피트인 해야 해?" 같은 7가지 질문에 지금 데이터로 계산한 숫자와 함께 음성으로 답합니다. (한국어 · 영어 질문 모두 가능)

### 4. 24개 서킷 코너 맵
- 서킷마다 공식 코너 번호와 위치를 정리해, 어느 코너에서 무슨 일이 있었는지 정확히 짚을 수 있습니다.

### 5. TV 중계 오버레이
- 게임 화면 위에 실제 중계처럼 순위표, 랩 카드, 속도 · 기어 · 페달 HUD를 투명하게 그립니다. 오픈소스 오버레이(MIT)를 가져와 우리 데이터와 연결했습니다.`,
        contentEn: `### 1. Live Dashboard
- Speed, gear, pedals, lap history, and per-corner entry / apex / exit speed and braking point; recorded runs replay at 1–4x.

### 2. Automatic Engineer Radio
- Detects practice / qualifying / race and talks accordingly.
- **Corner braking**: from lap 2, after each corner it compares the braking point with the session's fastest lap ("braking was 13 m early").
- **Pace, gap, pit calls**: pace gains or drops, the gap ahead, and when worn tyres mean it's time to pit.
- **Setup advice**: in practice, tyre temperatures and wear lead to suggestions like "front wing 36 → 38".
- At least 6 seconds between calls; safety-car and pit laps are excluded so no false calls go out.

### 3. Ask the Engineer
- Seven questions such as "How can I win?", "Can I catch the car ahead?", "Where am I losing time?", and "When should I pit?" are answered by voice with the numbers behind them (Korean or English).

### 4. Corner Maps for 24 Tracks
- Official turn numbers and positions for every track, so events are pinned to the right corner.

### 5. TV Broadcast Overlay
- A transparent broadcast-style timing tower, lap card, and speed / gear / pedal HUD over the game, built by connecting an open-source (MIT) overlay to our data.`
      },
      {
        num: '03',
        titleKo: '03. System Architecture (시스템 구조)',
        titleEn: '03. System Architecture',
        contentKo: `### 데이터가 무전이 되기까지 5단계
1. **받기**: 게임이 1초에 60번 보내는 데이터 묶음(패킷)을 내 PC의 Python 서버가 받습니다. 편지가 쉬지 않고 쏟아지는 우체통이라고 생각하면 됩니다.
2. **해석하기**: 패킷은 0과 1로 된 정해진 모양이라, 게임 회사가 공개한 형식대로 잘라 "속도 287km/h, 기어 7단, 브레이크 0%" 같은 값으로 바꿉니다.
3. **기록하기**: 차 위치를 코너 맵과 맞춰 보면서 랩마다, 코너마다 제동 지점 · 최저 속도 · 탈출 속도를 정리합니다.
4. **판단하기**: '엔지니어 두뇌'가 정해 둔 규칙으로 지금 무전할 일이 있는지 결정합니다. 판단은 빠르고 정확해야 해서 AI가 아닌 규칙으로 만들었습니다.
5. **말하기 · 보여 주기**: 미리 만들어 둔 목소리 파일을 골라 재생하고, 같은 내용을 대시보드와 TV 오버레이에 보여 줍니다.

> 핵심 설계: **판단은 규칙으로, 목소리는 AI로.** 숫자 판단은 규칙이 더 정확하고, 사람 같은 목소리는 AI가 잘합니다.`,
        contentEn: `### Five Steps from Data to Radio
1. **Receive**: the Python server on my PC catches the data packets the game sends 60 times per second — like a mailbox that never stops filling.
2. **Decode**: packets are fixed patterns of 0s and 1s; following the game's published format turns them into values like "287 km/h, 7th gear, 0% brake".
3. **Record**: matching the car's position to the corner map, it logs braking point, minimum speed, and exit speed for every corner of every lap.
4. **Decide**: the "engineer brain" checks fixed rules to see whether something is worth saying. Decisions must be fast and exact, so they use rules, not AI.
5. **Speak & show**: it plays a pre-made voice clip and shows the same message on the dashboard and TV overlay.

> Key design: **rules for decisions, AI for the voice.** Rules are more exact with numbers; AI is better at sounding human.`,
        architectureDiagrams: [
          {
            id: 'diag-system-runtime',
            tabTitleKo: '전체 구조',
            tabTitleEn: 'Overall Architecture',
            titleKo: '전체 구조 — 게임 데이터가 무전과 화면이 되기까지',
            titleEn: 'Overall Architecture — From Game Data to Radio and Screens',
            defaultScale: 0.75,
            mermaidChart: `flowchart TD
    subgraph Input["입력"]
        G["F1 25 게임<br/>차 상태를 1초에 60번 전송<br/>(UDP 20777)"]
        RP["녹화한 주행 파일<br/>(리플레이 모드)"]
    end

    subgraph Server["내 PC의 Python 서버 (FastAPI)"]
        L["① 수신기<br/>데이터 묶음(패킷) 받기"]
        P["② 해석기<br/>0과 1 → 속도 · 기어 · 위치 · 타이어"]
        C["코너 맵 24개<br/>(서킷별 공식 코너 번호)"]
        S["③ 기록 관리자<br/>랩 · 코너 · 타이어 정리"]
        B["④ 엔지니어 두뇌<br/>규칙으로 무전 · 답변 결정"]
        V["⑤ 음성 창고<br/>미리 만든 목소리 639개"]
    end

    subgraph Screens["보고 듣는 곳"]
        O["TV 중계 오버레이<br/>(게임 화면 위에 표시)"]
        D["웹 대시보드<br/>(React · 실시간 WebSocket)"]
        H["엔지니어 무전<br/>음성 + 자막 + 근거 숫자"]
    end

    G --> L
    RP -. "다시 보기" .-> L
    L --> P --> S
    C --> S
    S --> B --> V --> H
    S -- "실시간 전송" --> D
    L -- "같은 데이터 복사 (20778)" --> O`,
            mermaidChartEn: `flowchart TD
    subgraph Input["Input"]
        G["F1 25 game<br/>sends car state 60 times per second<br/>(UDP 20777)"]
        RP["Recorded run files<br/>(replay mode)"]
    end

    subgraph Server["Python Server on My PC (FastAPI)"]
        L["① Receiver<br/>catches data packets"]
        P["② Decoder<br/>0s and 1s → speed · gear · position · tyres"]
        C["24 corner maps<br/>(official turn numbers)"]
        S["③ Recorder<br/>organizes laps · corners · tyres"]
        B["④ Engineer brain<br/>rules decide radio · answers"]
        V["⑤ Voice library<br/>639 pre-made clips"]
    end

    subgraph Screens["Where You See and Hear It"]
        O["TV broadcast overlay<br/>(drawn over the game)"]
        D["Web dashboard<br/>(React · live WebSocket)"]
        H["Engineer radio<br/>voice + caption + numbers"]
    end

    G --> L
    RP -. "replay" .-> L
    L --> P --> S
    C --> S
    S --> B --> V --> H
    S -- "live stream" --> D
    L -- "copies the same data (20778)" --> O`
          },
          {
            id: 'diag-f1-radio',
            tabTitleKo: '무전이 나오기까지',
            tabTitleEn: 'How a Radio Call Happens',
            titleKo: '무전이 나오기까지 — 지켜보기 → 판단하기 → 말하기',
            titleEn: 'How a Radio Call Happens — Watch → Decide → Speak',
            defaultScale: 0.85,
            mermaidChart: `flowchart TD
    subgraph Watch["1. 지켜보기"]
        direction LR
        W1["코너를 빠져나옴"] ~~~ W2["한 랩을 마침"] ~~~ W3["타이어 마모 · 앞차 간격 변화"]
    end
    subgraph Ask["드라이버가 물어볼 때"]
        direction LR
        Q1["질문 입력 · 버튼<br/>(앞차 잡을 수 있어?)"] --> Q2["질문 종류 알아보기<br/>(키워드)"] --> Q3["지금 데이터로 답 계산"]
    end
    subgraph Judge["2. 판단하기 (규칙)"]
        direction LR
        J1["이번 세션 가장 빠른 랩과 비교"] --> J2["차이가 기준 안인가?<br/>(예: 제동 5~45m)"] --> J3["지난 무전 후 6초 지났나?<br/>세이프티카 · 피트 랩은 제외"]
    end
    subgraph Speak["3. 말하기"]
        direction LR
        K1["숫자까지 들어간 문장 고르기"] --> K2["미리 만든 목소리 재생"] --> K3["무전 패널에 자막 · 근거 숫자"]
    end
    Watch --> Judge --> Speak
    Ask --> Speak`,
            mermaidChartEn: `flowchart TD
    subgraph Watch["1. Watch"]
        direction LR
        W1["Car leaves a corner"] ~~~ W2["Lap completed"] ~~~ W3["Tyre wear · gap changes"]
    end
    subgraph Ask["When the Driver Asks"]
        direction LR
        Q1["Typed question · preset<br/>(Can I catch the car ahead?)"] --> Q2["Detect question type<br/>(keywords)"] --> Q3["Compute answer from live data"]
    end
    subgraph Judge["2. Decide (rules)"]
        direction LR
        J1["Compare with the session's fastest lap"] --> J2["Is the gap in range?<br/>(e.g. braking 5–45 m)"] --> J3["6 s since last call?<br/>skip safety-car · pit laps"]
    end
    subgraph Speak["3. Speak"]
        direction LR
        K1["Pick the sentence with the number"] --> K2["Play pre-made voice"] --> K3["Caption · numbers in radio panel"]
    end
    Watch --> Judge --> Speak
    Ask --> Speak`
          },
          {
            id: 'diag-f1-voice',
            tabTitleKo: '목소리 파인튜닝',
            tabTitleEn: 'Voice Fine-Tuning',
            titleKo: '목소리 파인튜닝 — 3분 36초 녹음이 엔지니어 목소리가 되기까지',
            titleEn: 'Voice Fine-Tuning — From 3 min 36 s of Audio to an Engineer Voice',
            defaultScale: 0.85,
            mermaidChart: `flowchart TD
    subgraph Base["2. 이미 말할 줄 아는 모델"]
        direction LR
        B1["수천 시간 음성으로 미리 학습된<br/>GPT-SoVITS v2ProPlus"]
    end
    subgraph Data["1. 재료 준비"]
        direction LR
        A1["엔지니어 목소리 녹음<br/>9개 · 3분 36초"] --> A2["조용한 부분에서 자르기<br/>문장 44개 (3~10초)"] --> A3["받아쓰기<br/>(Whisper · 대본 있으면 대본)"]
    end
    subgraph Tune["3. 살짝 맞추기 (파인튜닝)"]
        direction LR
        T1["목소리 색깔(음색) 배우기<br/>SoVITS · 12번 반복"] --> T2["말투 · 억양 배우기<br/>GPT · 10번째 결과 선택"]
    end
    subgraph Bake["4. 무전 문장 미리 만들기"]
        direction LR
        K1["문장마다 6~12번 생성"] --> K2["Whisper로 다시 받아쓰기"] --> K3["대본과 가장 같은 것 채택<br/>(평균 일치율 0.92)"]
    end
    OUT["무전 · 답변 음성 파일<br/>(앱은 골라서 재생만)"]
    Data --> Tune
    Base --> Tune
    Tune --> Bake --> OUT`,
            mermaidChartEn: `flowchart TD
    subgraph Base["2. A Model That Already Speaks"]
        direction LR
        B1["GPT-SoVITS v2ProPlus<br/>pre-trained on thousands of hours"]
    end
    subgraph Data["1. Prepare the Material"]
        direction LR
        A1["Engineer voice recordings<br/>9 clips · 3 min 36 s"] --> A2["Cut at silences<br/>44 sentences (3–10 s)"] --> A3["Transcribe<br/>(Whisper · script if known)"]
    end
    subgraph Tune["3. Nudge It (Fine-Tuning)"]
        direction LR
        T1["Learn the timbre<br/>SoVITS · 12 rounds"] --> T2["Learn delivery · intonation<br/>GPT · round 10 chosen"]
    end
    subgraph Bake["4. Pre-Make Every Line"]
        direction LR
        K1["Generate each line 6–12 times"] --> K2["Transcribe back with Whisper"] --> K3["Keep the closest match<br/>(avg 0.92)"]
    end
    OUT["Radio & answer clips<br/>(the app just picks and plays)"]
    Data --> Tune
    Base --> Tune
    Tune --> Bake --> OUT`
          }
        ]
      },
      {
        num: '04',
        titleKo: '04. Voice Fine-Tuning, Explained Simply (목소리 파인튜닝 쉽게 이해하기)',
        titleEn: '04. Voice Fine-Tuning, Explained Simply',
        contentKo: `### 1. 파인튜닝이란? — 이미 잘하는 학생에게 '말투'만 가르치기
처음부터 말하는 법을 가르치려면 수천 시간의 녹음이 필요합니다. 그래서 이미 수천 시간 동안 말하기를 배운 AI 모델(GPT-SoVITS)을 가져와, 엔지니어 목소리 **3분 36초**만 들려주며 "이 사람처럼 말해 봐" 하고 **조금만 고쳐 주는** 방식을 썼습니다. 이걸 소량의 데이터로 맞춘다고 해서 '퓨샷(few-shot) 파인튜닝'이라고 부릅니다.

### 2. 목소리는 두 단계로 만들어진다
- **① 무엇을 어떻게 말할지 (GPT 단계)**: 글자를 발음 기호로 바꾸고, 어디서 높이고 얼마나 빠르게 말할지 '말소리 설계도'를 그립니다. 여기서 **말투와 억양**을 배웁니다.
- **② 누구 목소리로 낼지 (SoVITS 단계)**: 설계도를 실제 소리로 바꾸면서 **목소리 색깔(음색)** 을 입힙니다.
- 숫자는 미리 영어 단어로 풀어 씁니다. (13 → thirteen, 0.8 → zero point eight)

### 3. 학습 과정
1. 녹음 9개(3분 36초)를 조용한 부분에서 잘라 3~10초 문장 44개로 만들고, 받아쓰기 AI(Whisper)로 글자를 붙였습니다. 대본을 알고 있는 녹음은 받아쓰기 대신 대본을 썼습니다.
2. **음색 학습**을 12번 반복하고, **말투 학습**을 15번 반복했습니다.
3. 그런데 말투를 15번까지 배우자 오히려 발음이 불안정해졌습니다. 시험 문제만 외운 학생이 새 문제를 못 푸는 것과 같은 **과학습(overfitting)** 이라, **10번째 결과**를 골라 썼습니다.
4. 집에 있는 그래픽카드(RTX 3070 8GB)로 몇 분이면 학습이 끝납니다.

### 4. 품질 검사 — AI가 만든 목소리를 AI가 채점
- 같은 문장을 6~12번 만들고, 각각을 받아쓰기 AI로 다시 글자로 바꿔 **원래 대본과 가장 똑같은 것**을 골랐습니다. 평균 일치율은 0.92입니다.
- "제동이 13m 빨랐어"처럼 숫자가 들어간 문장은 숫자마다 **문장 전체를 따로** 만들어, 조각을 이어 붙인 것보다 자연스럽게 들리게 했습니다.

### 5. 왜 '미리' 만들어 둘까?
- 게임이 그래픽카드를 거의 다 쓰기 때문에, 달리는 중에 목소리를 새로 만들면 게임이 끊길 수 있습니다. 그래서 무전 · 답변 문장 **639개를 미리 만들어 두고**, 실제 주행 중에는 상황에 맞는 파일을 **골라서 재생만** 합니다.

### 6. 시도했다가 버린 방법
- **학습 없이 바로 따라 하는 모델(XTTS-v2)**: 목소리가 덜 닮았고 짧은 문장 뒤에 잡음이 붙었습니다.
- **더 큰 최신 모델(Fish Audio S2 Pro)**: 그래픽카드 메모리가 16~24GB 필요해 8GB로는 돌릴 수 없었습니다.`,
        contentEn: `### 1. What Is Fine-Tuning? — Teaching a Good Student a New Accent
Teaching speech from scratch needs thousands of hours of audio. Instead, I took an AI model that had already learned to speak from thousands of hours (GPT-SoVITS) and, with just **3 min 36 s** of the engineer's voice, **nudged it slightly** to "speak like this person". Using so little data is called few-shot fine-tuning.

### 2. A Voice Is Made in Two Steps
- **① What to say and how (GPT step)**: turns letters into pronunciation symbols and draws a "speech blueprint" of pitch and pace. This step learns **delivery and intonation**.
- **② Whose voice (SoVITS step)**: turns the blueprint into sound and applies the **timbre**.
- Numbers are spelled out first (13 → thirteen, 0.8 → zero point eight).

### 3. Training
1. Nine recordings (3 min 36 s) were cut at silences into 44 sentences of 3–10 s and transcribed with Whisper; recordings with a known script used the script instead.
2. **Timbre** was trained for 12 rounds and **delivery** for 15.
3. At 15 rounds, pronunciation became unstable — like a student who memorized the practice test and fails new questions (**overfitting**) — so the **round-10** result was used.
4. Training takes a few minutes on a home graphics card (RTX 3070 8 GB).

### 4. Quality Check — AI Grading AI
- Each line was generated 6–12 times, transcribed back with Whisper, and the take **closest to the script** was kept (average match 0.92).
- Lines with numbers ("braking was 13 m early") were made as **whole sentences for each number**, which sounds more natural than stitching pieces.

### 5. Why Make Them in Advance?
- The game uses almost all of the graphics card, so generating speech mid-race could make it stutter. All **639 radio and answer lines are pre-made**, and the app only **picks and plays** the right file.

### 6. Tried and Dropped
- **Zero-shot cloning (XTTS-v2)**: less similar voice and noise after short phrases.
- **A larger new model (Fish Audio S2 Pro)**: needs 16–24 GB of graphics memory; won't run on 8 GB.`
      },
      {
        num: '05',
        titleKo: '05. Results & UI (구현 성과 및 대시보드 화면)',
        titleEn: '05. Results & UI',
        highlight: true,
        contentKo: `### Demo 완성 — 실제 주행에서 엔지니어가 말을 겁니다
게임을 켜고 세션에 들어가면 대시보드가 데이터를 받기 시작하고, 2랩부터 코너 제동 무전이, 레이스에서는 페이스 · 앞차 간격 · 피트 무전이 나옵니다. 엔지니어에게 질문하면 지금 데이터로 계산한 답을 목소리로 들려주고, 게임 화면 위에는 TV 중계 오버레이가 함께 뜹니다. 녹화한 주행은 리플레이로 다시 볼 수 있습니다.`,
        contentEn: `### Demo Complete — The Engineer Talks During a Real Run
Enter a session and the dashboard starts receiving data; corner braking calls begin on lap 2, and in races you also get pace, gap, and pit calls. Ask the engineer and it answers by voice from live data, while the TV overlay runs on top of the game. Recorded runs can be replayed.`,
        screenshots: [
          {
            src: f1Img1,
            titleKo: '1. 세션 설정 및 리플레이 (Session Configuration & Replay)',
            titleEn: '1. Session Configuration & Replay',
            descKo: '실시간 게임 연결(UDP 20777)과 녹화 주행 리플레이 중 선택하고, 한 · 영 전환, 단위(km/h · mph), 엔지니어 목소리, 무전(TTS) · TV 오버레이 켜기를 고르는 시작 화면입니다.',
            descEn: 'Start screen to choose live game (UDP 20777) or a recorded replay, language, units, engineer voice, and radio (TTS) / TV overlay toggles.'
          },
          {
            src: f1Img2,
            titleKo: '2. 랩 기록 · 코너별 상세 카드 · 차량 셋업 (Lap Archive & Setup)',
            titleEn: '2. Lap Archive, Corner Cards & Setup',
            descKo: '랩별 기록과 베스트 랩 대비 차이, 4개 타이어 마모율, 차량 셋업 값, 고른 코너의 진입 · 정점 · 탈출 속도와 제동 · 가속 지점을 보여 줍니다.',
            descEn: 'Lap history with deltas, tyre wear for all four tyres, car setup, and entry / apex / exit speed with braking and throttle points for the selected corner.'
          },
          {
            src: f1Img3,
            titleKo: '3. 코너별 주행 분석 표 (Turn-by-Turn Matrix)',
            titleEn: '3. Turn-by-Turn Matrix',
            descKo: '모든 코너의 진입 · 정점 · 탈출 속도, 기어, 제동 지점, 가속 시작 지점, 최대 횡G를 한 표로 모아 앞차 · 선두와 비교합니다.',
            descEn: 'Every corner\'s entry / apex / exit speed, gear, braking point, throttle-on point, and peak lateral G in one table, compared with the car ahead and the leader.'
          },
          {
            src: f1Img4,
            titleKo: '4. 서킷 지도 · 섹터 분석 (Circuit Map & Sectors)',
            titleEn: '4. Circuit Map & Sectors',
            descKo: '실제 주행 라인 위에 코너 번호(T1~TN)를 표시하고, 코너를 누르면 그 코너 기록이 열립니다. 섹터 1 · 2 · 3 구간 기록도 비교합니다.',
            descEn: 'Turn numbers (T1–TN) on the racing line; click a corner to open its data, and compare sector 1 / 2 / 3 times.'
          }
        ]
      },
      {
        num: '06',
        titleKo: '06. Lessons & Next Steps (배운 점 및 다음 단계)',
        titleEn: '06. Lessons & Next Steps',
        contentKo: `### 1. AI는 꼭 필요한 곳에만
- 처음에는 판단까지 AI에게 맡기려 했지만, 1초에 60번 들어오는 숫자를 빠르고 정확하게 판단하는 데는 규칙이 더 낫다는 걸 알았습니다. AI는 사람처럼 들리는 목소리에 집중해서 썼습니다.

### 2. 데이터가 적을수록 '덜 배운' 모델이 나을 때가 있다
- 3분 36초라는 적은 데이터에서는 오래 학습할수록 오히려 발음이 무너졌습니다. 숫자(학습 횟수)보다 실제 결과를 귀로 듣고 고르는 과정이 중요했습니다.

### 3. 환경의 한계가 설계를 바꾼다
- 게임과 그래픽카드를 나눠 써야 한다는 한계 때문에 '실시간 생성' 대신 '미리 만들어 두기'를 택했고, 그 덕분에 무전이 끊기지 않고 바로 나옵니다.

### 4. 다음 단계
- 아직 코너 맵이 없는 반대 방향 서킷과 마드리드 추가
- 차가 막혀서 느려진 랩이 피트 무전을 잘못 부르는 경우 줄이기
- 새 무전 문장을 더 쉽게 추가할 수 있도록 목소리 생성 과정 자동화`,
        contentEn: `### 1. Use AI Only Where It's Needed
- I first planned to let AI make decisions too, but rules proved faster and more exact for numbers arriving 60 times per second. AI went where it shines: a human-sounding voice.

### 2. With Little Data, Less Training Can Be Better
- With only 3 min 36 s, longer training made pronunciation worse. Listening to the results mattered more than the round count.

### 3. Constraints Shape the Design
- Sharing the graphics card with the game led to pre-made lines instead of live generation, so radio calls play instantly without stutter.

### 4. Next Steps
- Add corner maps for reverse layouts and Madrid
- Cut false pit calls on laps slowed by traffic
- Automate voice generation so new lines are easy to add`
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
    periodEn: '2026.09 (Completed)',
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
  },
  // =========================================================================
  // 5. FCO Live Boost Lab (라부 예측 & 전적분석)
  //    서비스 재현에 쓰일 수 있는 수집 방법 · 모델 · 분석 설계는 공개하지 않음
  // =========================================================================
  {
    id: 'log-entry-fco-liveboost',
    category: 'Sports Data & Game Analytics',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'Active Project',
    badgeType: 'info',
    titleKo: 'FCO Live Boost Lab — 라이브 부스트 예측 & 전적분석',
    titleEn: 'FCO Live Boost Lab — Live Boost Prediction & Match Record Analysis',
    tabLabelKo: 'FCO 라이브 부스트',
    tabLabelEn: 'FCO Live Boost',
    oneLinerKo: '실제 UEFA 챔피언스리그 경기 데이터로 FC온라인 챔스 카드의 라이브 부스트를 확률로 예측하고, 유저 ID 하나로 공식경기 기록을 분석해 플레이 스타일을 진단하는 FC온라인 분석 서비스',
    oneLinerEn: 'An FC Online analytics service that predicts Live Boosts for Champions League cards as probabilities from real UCL match data, and diagnoses play style from official match records with a single user ID.',
    roleKo: '개인 프로젝트 · 기획, 데이터 수집, 모델링, 풀스택 개발',
    roleEn: 'Personal Project · Planning, Data Collection, Modeling & Full-Stack Development',
    period: '2026.11 – 현재 (Active)',
    periodEn: '2026.11 – Present (Active)',
    techStack: ['Python', 'FastAPI', 'React & TypeScript', 'FotMob Crawling', 'Nexon Open API', 'Data Mining', 'pytest'],

    metricsHeadingKo: '현재까지의 결과 (Progress So Far)',
    metricsHeadingEn: 'Progress So Far',
    keyMetrics: [
      {
        valueKo: '학습에 쓰지 않은 시즌 적중률 45.2% → 56.0%',
        valueEn: 'Held-Out Season Accuracy 45.2% → 56.0%',
        icon: 'fas fa-bullseye'
      },
      {
        valueKo: '유력 범위 적중 80% · 오를지 가려내는 힘 0.90',
        valueEn: '80% Likely-Range Hit · 0.90 Rise Discrimination',
        icon: 'fas fa-chart-simple'
      },
      {
        valueKo: '전적분석 첫 결과 380초 → 약 90초, 재분석 3초',
        valueEn: 'Record Analysis: 380s → ~90s First Run, 3s Re-Run',
        icon: 'fas fa-gauge-high'
      },
      {
        valueKo: '경기 종료 → 수집 → 예측 → 렌더링 실시간 파이프라인',
        valueEn: 'Real-Time Pipeline: Match End → Crawl → Predict → Render',
        icon: 'fas fa-bolt'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: 'FotMob 전 선수 경기 세부 데이터 수집', titleEn: 'FotMob Full-Squad Match Data Collection' },
      { step: '02', titleKo: '라이브 부스트 정답 데이터 정리', titleEn: 'Live Boost Ground Truth' },
      { step: '03', titleKo: '데이터 마이닝으로 예측 모델 탐색', titleEn: 'Model Search via Data Mining' },
      { step: '04', titleKo: '라부 예측: 경기 · 선수별 확률', titleEn: 'Boost Prediction: Per-Match, Per-Player Odds' },
      { step: '05', titleKo: '유저 ID 검색 → 플레이 스타일 리포트', titleEn: 'User ID Search → Play Style Report' }
    ],

    beforeAfter: {
      beforeKo: '라이브 부스트는 공개되지 않은 경기 평점으로 정해져, 어떤 선수가 오를지는 하이라이트를 보고 감으로 짐작해야 했습니다. 공식경기 전적도 승패 숫자뿐이라 "왜 지는지, 누구에게 약한지, 랭커와 무엇이 다른지"를 알 방법이 없었습니다.',
      beforeEn: 'Live Boosts follow unpublished match ratings, so predicting who would rise was guesswork. Official match history showed only wins and losses, with no way to see why you lose, who you struggle against, or how you differ from top rankers.',
      afterKo: '라운드가 끝나면 경기를 골라 선수마다 예측 OVR과 오를 확률을 보고, 넥슨 발표 뒤에는 적중 여부까지 확인합니다. 전적분석은 유저 ID 하나로 내 플레이 스타일, 상대 유형별 상성, 고칠 점과 처방을 랭커의 실제 경기와 견줘 보여줍니다.',
      afterEn: 'After each round, pick a match to see each player\'s expected OVR and rise odds, then check hits once Nexon announces. Record analysis turns a user ID into play style, matchups, fixes, and prescriptions benchmarked against rankers\' real games.'
    },

    sections: [
      {
        num: '01',
        titleKo: '01. Background & Problem (배경 및 문제점)',
        titleEn: '01. Background & Problem',
        contentKo: `### 1. 실제 경기 결과가 카드 능력치를 바꾸는 라이브 부스트
FC온라인 UEFA 챔피언스리그 시즌 카드는 실제 토너먼트 경기 활약에 따라 라운드마다 오버롤(OVR)이 오르거나 내립니다. 하지만 부스트 폭을 정하는 경기 평점은 공개되지 않아, 유저는 카드 구매 · 강화 판단을 감에 의존할 수밖에 없었습니다.

### 2. 승패 숫자만 남는 공식경기 전적
공식경기 기록은 승 · 무 · 패와 몇 가지 합계로만 보입니다. 내가 어떤 유형의 플레이어인지, 어떤 상대에게 유독 약한지, 상위 랭커와 무엇이 다른지는 직접 수십 경기를 돌려 보지 않고는 알기 어려웠습니다.

### 3. 흩어진 데이터
라이브 부스트 결과, 실제 경기 기록, 공식경기 기록이 서로 다른 곳에 흩어져 있고 선수 이름 표기도 달라, 데이터를 모으고 잇는 일부터가 큰 작업이었습니다.`,
        contentEn: `### 1. Live Boosts Tie Real Matches to Card Stats
FC Online UCL cards gain or lose OVR each round based on real knockout performances, but the match ratings that decide the boost are never published, so players had to rely on gut feeling when buying or upgrading cards.

### 2. Official Records Show Only Wins and Losses
Match history shows results and a few totals, not your play style, the opponents you struggle against, or how you differ from top rankers.

### 3. Scattered Data
Boost results, real match data, and official records live in different places with player names spelled differently in each.`
      },
      {
        num: '02',
        titleKo: '02. Service Overview (서비스 개요)',
        titleEn: '02. Service Overview',
        contentKo: `### 1. 라부 예측 탭
지난 시즌들의 실제 경기 데이터와 라이브 부스트 결과를 모아, **데이터 마이닝으로 예측 확률이 높은 모델을 찾아** 선수마다 다음 라운드 OVR과 오를 확률을 보여줍니다. 모델의 구체적인 구성은 이 프로젝트의 핵심 자산이라 공개하지 않습니다.

### 2. 전적분석 탭
유저 ID(닉네임)를 검색하면 넥슨 Open API로 그 유저의 최근 공식경기 매치 로그를 받아 자체 분석 엔진으로 **플레이 스타일 리포트**를 만들고, 상위 랭커들의 실제 경기와 견줘 상성 · 고칠 점 · 처방까지 한 화면에서 진단합니다.

### 3. 데이터 기반
FotMob 크롤링으로 경기에 출전한 **양 팀 모든 선수의 경기별 세부 데이터**를 수집하고, 이것이 데이터 마이닝과 예측의 토대가 됩니다. 백엔드는 FastAPI, 화면은 React + TypeScript입니다.`,
        contentEn: `### 1. Live Boost Prediction
Using past seasons' real match data and boost results, **a high-accuracy model found through data mining** shows each player's next-round OVR and rise odds. The model's internals are the project's core asset and are not disclosed.

### 2. Record Analysis
Searching a user ID pulls recent official match logs from the Nexon Open API, builds a **play style report** with an in-house analysis engine, and benchmarks against top rankers' real games for matchups, fixes, and prescriptions.

### 3. Data Foundation
FotMob crawling collects **detailed per-match data for every player on both teams**, the foundation for data mining and prediction. Built on FastAPI and React + TypeScript.`,
        architectureDiagrams: [
          {
            id: 'diag-fco-system',
            tabTitleKo: '시스템 아키텍쳐',
            tabTitleEn: 'System Architecture',
            titleKo: '시스템 아키텍쳐',
            titleEn: 'System Architecture',
            defaultScale: 0.75,
            mermaidChart: `flowchart TD
    subgraph Sources["데이터 소스"]
        FM["FotMob<br/>(실제 경기 · 전 선수 세부 데이터)"]
        LB["넥슨 공식 데이터<br/>(라이브 부스트 발표 · 카드 정보)"]
        NX["넥슨 Open API<br/>(유저 ID → 공식경기 매치 로그)"]
    end

    subgraph Backend["FastAPI 백엔드"]
        CR["경기 데이터 수집 파이프라인"]
        PS["선수 경기 기록 저장소"]
        GT["정답 데이터 정리"]
        ML["라부 예측 모델<br/>(데이터 마이닝으로 선정)"]
        NC["넥슨 API 수집기"]
        RA["매치 로그 분석 엔진"]
    end

    subgraph Front["React + TypeScript"]
        T1["라부 예측 탭<br/>(경기 라인업 · 선수별 확률)"]
        T2["전적분석 탭<br/>(플레이 스타일 리포트 · 처방)"]
    end

    FM --> CR --> PS
    LB --> GT
    PS --> ML
    GT --> ML
    ML --> T1
    NX --> NC --> RA
    RA --> T2`,
            mermaidChartEn: `flowchart TD
    subgraph Sources["Data Sources"]
        FM["FotMob<br/>(real matches · full-squad details)"]
        LB["Nexon official data<br/>(Live Boost announcements · card info)"]
        NX["Nexon Open API<br/>(user ID → official match logs)"]
    end

    subgraph Backend["FastAPI Backend"]
        CR["Match data collection pipeline"]
        PS["Player match record store"]
        GT["Ground truth preparation"]
        ML["Live Boost prediction model<br/>(selected via data mining)"]
        NC["Nexon API collector"]
        RA["Match log analysis engine"]
    end

    subgraph Front["React + TypeScript"]
        T1["Live Boost tab<br/>(match lineups · per-player odds)"]
        T2["Record analysis tab<br/>(play style report · prescriptions)"]
    end

    FM --> CR --> PS
    LB --> GT
    PS --> ML
    GT --> ML
    ML --> T1
    NX --> NC --> RA
    RA --> T2`
          },
          {
            id: 'diag-fco-model',
            tabTitleKo: '예측 모델 흐름',
            tabTitleEn: 'Prediction Model Flow',
            titleKo: '라부 예측 모델 흐름',
            titleEn: 'Live Boost Prediction Model Flow',
            defaultScale: 0.85,
            mermaidChart: `flowchart TD
    subgraph Data["1. 데이터 준비"]
        direction LR
        D1["경기별 선수 세부 기록"] ~~~ D2["라이브 부스트 정답"] ~~~ D3["시즌 · 카드 규칙"]
    end
    subgraph Prep["2. 전처리 · 특징 생성"]
        direction LR
        P1["선수 매칭 · 정제"] --> P2["결측 처리"] --> P3["특징 생성"]
    end
    subgraph Mining["3. 데이터 마이닝 · 모델 선택"]
        direction LR
        M1["기준선 모델"] --> M2["후보 모델 탐색"] --> M3["교차 검증"] --> M4["미사용 시즌<br/>최종 테스트"]
    end
    subgraph Serve["4. 예측"]
        direction LR
        S1["최종 모델 선정"] --> S2["확률 산출"] --> S3["부스트별 확률 · 유력 범위<br/>· 오를 확률"]
    end
    subgraph Eval["5. 평가 · 재학습"]
        direction LR
        E1["넥슨 발표 후<br/>적중 평가"] --> E2["새 라운드 결과로<br/>재학습"]
    end
    Data --> Prep --> Mining --> Serve --> Eval
    Eval -. "피드백 루프" .-> Prep`,
            mermaidChartEn: `flowchart TD
    subgraph Data["1. Data Preparation"]
        direction LR
        D1["Per-match player details"] ~~~ D2["Live Boost ground truth"] ~~~ D3["Season · card rules"]
    end
    subgraph Prep["2. Preprocessing · Features"]
        direction LR
        P1["Player matching · cleaning"] --> P2["Missing-value handling"] --> P3["Feature generation"]
    end
    subgraph Mining["3. Data Mining · Model Selection"]
        direction LR
        M1["Baseline model"] --> M2["Candidate model search"] --> M3["Cross-validation"] --> M4["Held-out season<br/>final test"]
    end
    subgraph Serve["4. Prediction"]
        direction LR
        S1["Final model"] --> S2["Probability output"] --> S3["Per-boost odds · likely range<br/>· rise probability"]
    end
    subgraph Eval["5. Evaluation · Retraining"]
        direction LR
        E1["Hit check after<br/>Nexon announcement"] --> E2["Retrain with<br/>new round results"]
    end
    Data --> Prep --> Mining --> Serve --> Eval
    Eval -. "feedback loop" .-> Prep`
          },
          {
            id: 'diag-fco-report',
            tabTitleKo: '플레이 스타일 리포트',
            tabTitleEn: 'Play Style Report',
            titleKo: '유저 ID 검색 → 플레이 스타일 리포트',
            titleEn: 'User ID Search → Play Style Report',
            defaultScale: 0.85,
            mermaidChart: `flowchart TD
    subgraph Me["1. 내 경기"]
        direction LR
        U["유저 ID 검색"] --> L["최근 공식경기<br/>매치 로그 수집"]
    end
    subgraph Rk["2. 비교 대상"]
        direction LR
        RK["상위 랭커"] --> RL["랭커 매치 로그"]
    end
    subgraph Feat["3. 분석"]
        direction LR
        F["매치 로그 분석 엔진"] --> T["플레이 유형 판정"] --> SIM["랭커 비교"]
    end
    subgraph Out["4. 리포트"]
        direction LR
        R1["플레이 스타일 리포트"] --> R2["상성표 · 개선점"] --> R3["처방"]
    end
    Me --> Feat
    Rk --> Feat
    Feat --> Out`,
            mermaidChartEn: `flowchart TD
    subgraph Me["1. My Matches"]
        direction LR
        U["User ID search"] --> L["Collect recent<br/>official match logs"]
    end
    subgraph Rk["2. Benchmark"]
        direction LR
        RK["Top rankers"] --> RL["Ranker match logs"]
    end
    subgraph Feat["3. Analysis"]
        direction LR
        F["Match log analysis engine"] --> T["Play style classification"] --> SIM["Ranker comparison"]
    end
    subgraph Out["4. Report"]
        direction LR
        R1["Play style report"] --> R2["Matchups · fixes"] --> R3["Prescriptions"]
    end
    Me --> Feat
    Rk --> Feat
    Feat --> Out`
          }
        ]
      },
      {
        num: '03',
        titleKo: '03. 라부 예측 탭 (Live Boost Prediction)',
        titleEn: '03. Live Boost Prediction Tab',
        highlight: true,
        contentKo: `### 라운드 단위로 보는 라이브 부스트 예측
- **실시간 예측 파이프라인**: 라운드 경기가 끝나면 수집을 시작하고(진행률 표시), 데이터가 저장되는 즉시 학습된 모델이 선수별 예측을 계산해 경기 라인업 화면과 팀 목록에 바로 그립니다. 넥슨 발표를 기다리지 않고 경기 직후에 결과를 볼 수 있고, 발표가 나오면 같은 화면에서 적중 여부가 채워집니다.
- **대회 진행 단계**: 라운드별 MAX OVR 사다리와 "지금 여기" 표시, 그리고 예측이 얼마나 믿을 만한지를 맨 위에 보여줍니다.
- **경기 라인업 화면**: 끝난 경기를 고르면 두 팀 선수가 실제 포지션 위에 시즌 카드 얼굴로 서고, 경기별 자체 평점과 예측 부스트 · 오를 확률 배지가 붙습니다. 1차전 · 2차전을 바꿔 보고 교체 선수도 확인합니다.
- **팀별 예측 목록**: 선수마다 시작 OVR → 예측 OVR, 오를 확률 막대, 예측 범위를 보여주고, 넥슨 발표가 나오면 실제 OVR과 적중 여부(✓ / ✕)를 함께 표시합니다. 정렬 · 필터와 부스트별 확률 펼쳐 보기를 지원합니다.
- **새 시즌 대응**: 아직 공지가 없는 시즌도 예측을 먼저 보여줍니다.`,
        contentEn: `### Live Boost Predictions, Round by Round
- **Real-time prediction pipeline**: once a round's matches end, collection starts (with progress); as data lands, the trained model scores every player and the lineup view and team lists render immediately, before Nexon announces, with hits filled in afterward.
- **Tournament stage**: MAX OVR ladder with a "you are here" marker, plus how reliable the predictions are.
- **Match lineup view**: both teams on the pitch with season card faces, per-match ratings, and predicted boost / rise odds badges; switch legs and see substitutes.
- **Team prediction list**: start → expected OVR, rise-odds bars, and likely range, with actual OVR and ✓ / ✕ once Nexon announces; sorting, filters, and per-boost odds.
- **New seasons**: predictions are shown even before any announcement.`,
        screenshots: [
          {
            src: fcoImg1,
            titleKo: '1. 대회 진행 단계와 예측 신뢰도',
            titleEn: '1. Tournament Stage & Prediction Reliability',
            descKo: '라운드별 MAX OVR 사다리에서 지금 위치를 보여주고, 유력 범위 적중 80% · 가장 유력 적중 50% · 오를지 가려내는 힘 0.90 같은 예측 신뢰도를 함께 표시합니다.',
            descEn: 'Shows the current position on the MAX OVR ladder alongside prediction reliability: 80% likely-range hit, 50% most-likely hit, 0.90 rise discrimination.'
          },
          {
            src: fcoImg2,
            titleKo: '2. 경기 라인업 · 선수별 예측 배지',
            titleEn: '2. Match Lineup with Per-Player Prediction Badges',
            descKo: '실제 라인업 위치에 시즌 카드 얼굴을 놓고, 경기별 자체 평점과 예측 부스트 · 오를 확률을 배지로 붙였습니다. 1·2차전 전환과 교체 투입 선수까지 한 화면에서 봅니다.',
            descEn: 'Season card faces at real lineup positions with per-match ratings and predicted boost / rise odds; switch legs and view substitutes.'
          },
          {
            src: fcoImg3,
            titleKo: '3. 팀별 예측과 실제 결과 대조',
            titleEn: '3. Team Predictions vs Actual Results',
            descKo: '시작 → 예측 OVR, 오를 확률, 예측 범위를 선수별로 보여주고, 넥슨 발표 후에는 실제 OVR과 적중 여부를 표시합니다. 이 팀은 13명 중 10명 적중.',
            descEn: 'Per-player start → expected OVR, rise odds, and likely range, checked against Nexon\'s announcement: 10 of 13 correct for this team.'
          }
        ]
      },
      {
        num: '04',
        titleKo: '04. 전적분석 탭 (Match Record Analysis)',
        titleEn: '04. Match Record Analysis Tab',
        highlight: true,
        contentKo: `### 유저 ID 검색 → 매치 로그 분석 → 플레이 스타일 리포트
유저 ID(닉네임)를 검색하면 넥슨 Open API로 그 유저의 최근 공식경기 매치 로그를 받아, 자체 분석 엔진으로 경기 기록을 분석해 플레이 스타일 리포트를 만듭니다. 리포트에는 다음이 담깁니다.

- **플레이 유형**: 6가지 플레이 유형 점수와 대표 유형
- **한 줄 성향**: 랭커와 비교해 가장 두드러진 특징을 문장으로 요약
- **닮은 랭커**: 나와 플레이가 비슷한 랭커를 레이더에 겹쳐 표시
- **천적 · 먹잇감**: 가장 약한 상대 유형과 가장 잘 잡는 상대 유형, 그 상대와의 전적
- **경기 리포트**: 최근 경기 흐름, 해결사, 득점 · 실점 루트, 골 넣는 · 먹는 시간대

> 예시 리포트 · 점유 빌드업형 — "짧게 주고받는 패스가 많고 공을 오래 쥐는 유형". 천적은 같은 점유 빌드업(1승 0무 3패), 먹잇감은 중거리 슈팅(3승 0무 0패). 득점 루트는 티키타카(33%), 실점 루트는 스루패스 침투(36%). 골은 60~75분에 가장 많이 넣고 75~90분에 가장 많이 먹습니다.

### 랭커와 견주는 진단
- **상성표**: 상대 유형별 내 승률을 천적부터 먹잇감까지 늘어놓고, 그 상대를 만나면 내 경기가 평소와 어떻게 달라지는지 비교합니다.
- **개선점**: 랭커의 경기와 견줘 "무엇을 · 왜 · 어떻게" 고칠지를 급한 순서로 제시합니다.
- **슈팅 분석**: 슈팅 지도와 구역별 전환율, 선수별 기록을 보여주고 여러 조건으로 걸러 봅니다.
- **선수 구성 · 처방**: 같은 포메이션 감독들이 자리마다 쓴 선수와, 약점을 메우는 포지션별 획득 특성(신특)을 추천합니다.`,
        contentEn: `### User ID Search → Match Log Analysis → Play Style Report
Searching a user ID pulls recent official match logs from the Nexon Open API and an in-house analysis engine builds a play style report:

- **Play type**: scores across six play styles and the main style
- **One-line profile**: the most distinctive traits compared with rankers
- **Similar rankers**: rankers who play like you, overlaid on the radar
- **Nemesis & prey**: weakest and strongest opponent styles with records
- **Match report**: recent form, top scorer, scoring/conceding routes, and goal/concede time bands

> Example report · Possession build-up type — "Plays lots of short passes and keeps the ball for long spells." Nemesis: the same possession build-up style (1W 0D 3L); prey: long-shot teams (3W 0D 0L). Scoring route: tiki-taka (33%); conceding route: through-ball runs (36%). Scores most in the 60–75th minute and concedes most in the 75–90th.

### Benchmarking Against Rankers
- **Matchup board**: win rate by opponent style from nemesis to prey, and how your game shifts against each.
- **Fixes**: what, why, and how to change, ordered by urgency.
- **Shot analysis**: shot maps, zone conversion, and per-player stats with filters.
- **Squad & prescriptions**: players managers on your formation use in each slot, plus trait recommendations by position.`,
        screenshots: [
          {
            src: fcoImg4,
            titleKo: '1. 플레이 스타일 리포트 — 나는 어떤 플레이어인가',
            titleEn: '1. Play Style Report — What Kind of Player Am I?',
            descKo: '플레이 유형 레이더에 닮은 랭커 · 랭커 평균을 겹쳐 보고, 천적 · 먹잇감, 해결사, 득점 · 실점 루트와 시간대를 요약합니다. (닉네임은 가렸습니다)',
            descEn: 'Play-style radar against similar rankers and the ranker average, with nemesis/prey, top scorer, and scoring/conceding routes and minutes (nickname hidden).'
          },
          {
            src: fcoImg5,
            titleKo: '2. 상성표 — 어떤 상대에게 강하고 약한가',
            titleEn: '2. Matchup Board — Who Do I Beat and Lose To?',
            descKo: '상대 유형별 승률을 천적부터 먹잇감까지 정리하고, 내 평소 승률 · 랭커 승률과 나란히 놓아 상성을 보여줍니다.',
            descEn: 'Win rate by opponent style, from nemesis to prey, next to my usual rate and the rankers\'.'
          },
          {
            src: fcoImg6,
            titleKo: '3. 개선점 — 무엇을 · 왜 · 어떻게',
            titleEn: '3. Fixes — What, Why, How',
            descKo: '랭커와 차이가 큰 부분을 골라, 이유와 구체적인 플레이 팁을 급한 순서로 보여줍니다.',
            descEn: 'Highlights the biggest gaps with rankers, with reasons and concrete tips ordered by urgency.'
          },
          {
            src: fcoImg7,
            titleKo: '4. 슈팅 분석 — 어디서 때리고 맞았나',
            titleEn: '4. Shot Analysis — Where Did Shots Come From?',
            descKo: '슈팅 위치와 결과를 지도에 그리고, 구역별 전환율을 비교 대상과 나란히 보여줍니다. 조건을 누르면 지도가 그것만 보여줍니다.',
            descEn: 'Shot locations and outcomes on the pitch, with zone conversion side by side; click a filter to focus the map.'
          },
          {
            src: fcoImg8,
            titleKo: '5. 선수 구성 — 같은 포메이션 감독들의 선택',
            titleEn: '5. Squad — What Managers on My Formation Use',
            descKo: '같은 포메이션 감독들이 자리마다 어떤 선수를 썼는지 보여주고, 내 선수와 나란히 비교합니다.',
            descEn: 'Shows which players managers on the same formation use in each slot, next to my own picks.'
          }
        ]
      },
      {
        num: '05',
        titleKo: '05. Problem Solving — 라부 예측 (문제 해결 과정)',
        titleEn: '05. Problem Solving — Live Boost Prediction',
        contentKo: `### 1. 정답이 공개되지 않은 문제 — 무엇을 맞힐지부터 다시 정하기
- **문제**: 라부를 정하는 경기 평점은 공개되지 않습니다. 첫 모델은 학습에 쓰지 않은 시즌에서 정확 적중 45.2%에 머물렀고, 어디까지가 모델의 실력인지 판단할 기준도 없었습니다.
- **시도**: 세 시즌의 정답 데이터를 직접 모은 뒤 단순한 기준선부터 세우고, 그 위에서 여러 후보 모델을 같은 조건으로 비교하는 데이터 마이닝을 반복하며 각 단계가 정확도를 얼마나 올리는지 숫자로 확인했습니다.
- **결과**: 학습에 쓰지 않은 23/24 시즌 적중률이 **45.2% → 56.0%**, 처음 보는 팀 기준으로는 50.6%(항상 0으로 찍을 때 대비 +17.8%p)까지 올랐습니다.

### 2. 정확도가 부풀려지는 검증 함정
- **문제**: 같은 팀 선수들은 같은 경기 결과를 공유해서, 검증 데이터를 대충 나누면 정확도가 실제보다 높게 나왔습니다.
- **시도**: "처음 보는 팀"을 맞히는 조건으로 검증을 다시 설계하고, 한 시즌은 끝까지 학습에 넣지 않는 최종 시험용으로 남겼습니다.
- **결과**: 낙관적인 숫자 대신 실제로 통하는 숫자를 얻었고, 화면에 보이는 정확도도 같은 기준으로 맞췄습니다.

### 3. 숫자 하나보다 확률 — 예측을 "쓸 수 있게" 만들기
- **문제**: "+1"처럼 값 하나만 보여주면, 틀렸을 때 신뢰를 잃고 유저가 정말 궁금한 "오를 가능성"은 알 수 없었습니다.
- **시도**: 결과를 부스트별 확률 · 가장 유력한 값 · 유력 범위 · 오를 확률로 함께 제공하도록 바꾸고, 그 확률이 실제로 맞는지도 따로 측정했습니다.
- **결과**: 유력 범위 적중 **80%**, 오를지 가려내는 힘 **0.90**(1에 가까울수록 정확). 넥슨 발표 뒤에는 선수마다 적중 여부가 바로 표시됩니다.

### 4. 이름은 같은데 다른 선수 — 카드 얼굴 매핑 오류
- **문제**: 공지에 쓰이는 짧은 한글 이름 때문에 루이스 디아스에게 후벵 디아스의 얼굴이 붙는 등 엉뚱한 카드가 연결됐습니다.
- **시도**: 이름 하나에 기대지 않고 여러 단서를 교차 확인해 확실할 때만 카드를 붙이고, 애매하면 틀린 얼굴 대신 빈 얼굴을 보여주도록 원칙을 바꿨습니다.
- **결과**: 잘못 붙는 카드가 사라졌고, 문제가 된 사례들을 테스트로 남겨 다시 생기지 않게 막았습니다.

### 5. 정답표가 없는 팀
- **문제**: 라부 공지 표가 없는 팀은 학습과 검증에서 통째로 빠졌습니다.
- **시도**: 공개된 다른 공식 데이터로 그 팀의 라부 결과를 복원했습니다.
- **결과**: 정답 데이터가 **723명**으로 늘었고, "표가 없는 팀" 경우도 테스트로 함께 확인합니다.

### 6. 모든 선수의 경기별 세부 데이터를 모으는 수집 파이프라인
- **문제**: 실제 경기에서 각 선수가 무엇을 했는지 세부 기록이 필요했지만 공개 API가 없었고, 선수를 하나씩 조회하는 방식으로는 라운드마다 수백 명을 모을 수 없었습니다. 서비스마다 선수 이름 표기도 달랐습니다.
- **시도**: FotMob을 대상으로 라운드 단위로 출전 선수 전원의 세부 기록을 한 번에 모으는 수집기를 만들고, 서버에 부담을 주지 않도록 요청 간격 · 캐시 · 차단 시 즉시 중단 · robots.txt 준수 원칙을 지켰습니다. 이름이 다른 선수는 하나로 이어 주는 매칭 단계를 두었습니다.
- **결과**: 수집 → 저장 → 예측 → 화면이 하나로 이어진 파이프라인이 완성되어, 라운드 경기가 끝나면 넥슨 발표 전에 바로 예측 결과를 렌더링합니다. 쌓인 세 시즌의 데이터가 데이터 마이닝의 토대가 되었습니다.`,
        contentEn: `### 1. No Published Ground Truth — Redefine What to Predict
- **Problem**: The deciding ratings are hidden; the first model hit only 45.2% on a held-out season, with no baseline to judge it.
- **Approach**: Built three seasons of ground truth, set simple baselines, then iterated a data-mining search over candidate models under identical conditions, measuring how much each step improved accuracy.
- **Result**: Held-out 23/24 accuracy rose from **45.2% to 56.0%**; 50.6% on unseen teams (+17.8pp over always predicting 0).

### 2. Validation That Inflates Accuracy
- **Problem**: Teammates share match outcomes, so careless splits overstated accuracy.
- **Approach**: Redesigned validation around predicting unseen teams and kept one season as a final test.
- **Result**: Numbers that actually hold, reported the same way in the UI.

### 3. Probabilities over a Single Number
- **Problem**: A lone "+1" loses trust when wrong and hides what users want: the chance of a rise.
- **Approach**: Output per-boost odds, most likely value, likely range, and rise probability, and measured how well they hold up.
- **Result**: **80%** likely-range hit and **0.90** rise discrimination; hits are marked per player after announcements.

### 4. Same Name, Different Player
- **Problem**: Short Korean names mapped Luis Díaz to Rúben Dias's card face.
- **Approach**: Cross-check several clues and attach a card only when certain; show a blank face rather than a wrong one.
- **Result**: Mismatches eliminated and locked in with regression tests.

### 5. Teams Without a Results Table
- **Problem**: Teams lacking a boost table were excluded from training.
- **Approach**: Reconstructed their results from other public official data.
- **Result**: Ground truth grew to **723 players**, with the "no table" path covered by tests.

### 6. A Collection Pipeline for Every Player's Match Data
- **Problem**: No public API for per-player match details, one-by-one lookups could not scale, and names differed across services.
- **Approach**: A FotMob collector that gathers full-squad details per round, with request pacing, caching, stop-on-block, and robots.txt compliance, plus a player-matching step.
- **Result**: An end-to-end crawl → store → predict → render pipeline that shows predictions right after a round ends, before Nexon announces; three seasons of data became the foundation for data mining.`
      },
      {
        num: '06',
        titleKo: '06. Problem Solving — 전적분석 (문제 해결 과정)',
        titleEn: '06. Problem Solving — Match Record Analysis',
        contentKo: `### 1. 느린 첫 분석과 API 요청 한도
- **문제**: 넥슨 Open API는 요청 수가 엄격히 제한되고, 첫 분석은 필요한 데이터를 차례로 받느라 **380초**가 걸렸습니다.
- **시도**: 수집 순서를 다시 짜 기다리는 시간을 겹치고, 요청 한도 안에서 속도를 최대한 끌어올렸습니다. 결과를 먼저 보여주고 나머지 통계는 뒤에서 채우며, 오늘 사용량을 화면에 띄웠습니다.
- **결과**: 첫 결과까지 **약 90초**, 저장된 기록으로 다시 분석하면 **3초**(API 0건).

### 2. 실제 데이터는 문서와 달랐다
- **문제**: 공식 문서만 믿고 계산하니 일부 숫자가 실제 게임 기록과 어긋났습니다.
- **시도**: 실제 응답을 기준으로 정합성을 확인하고, 문서와 다른 부분은 안전하게 보정했습니다. 앞의 자동화 테스트 툴에서 다룬 "데이터 정합성 확인"을 실제 데이터에 그대로 적용한 셈입니다.
- **결과**: 화면 숫자가 게임 안 기록과 맞게 되었고, 같은 실수를 막는 테스트를 추가했습니다.

### 3. 누구와 비교할 것인가 — 표본과 기준의 문제
- **문제**: 특정 유형 상대와의 경기는 몇 판 되지 않아 승률이 크게 흔들렸고, 랭커 전체와 비교하면 플레이 스타일이 달라 조언이 엉뚱하게 나왔습니다.
- **시도**: 표본이 적은 수치는 보정하고, 비교 기준을 나와 플레이가 비슷한 랭커로 맞췄습니다. 근거가 약할 때는 어떤 기준을 썼는지와 "표본 적음"을 화면에 표시합니다.
- **결과**: 유저가 납득할 수 있는 비교가 되었고, 숫자가 약할 때는 화면이 먼저 알려줍니다.

### 4. 표 대신 답부터 — 화면 구조 다시 짜기
- **문제**: 처음에는 분석 과정을 순서대로 표로 보여줘서, 정작 "그래서 뭘 고쳐야 하지?"는 맨 아래에 있었습니다.
- **시도**: 결과 우선 대시보드로 한 번, 다시 유저가 궁금한 순서(나는 어떤 유형? → 누구에게 약한가? → 무엇을 고칠까? → 어디서 때리고 맞았나?)로 재배치하고, 근거 표는 맨 아래에 접어 두었습니다.
- **결과**: 플레이 스타일 리포트 → 상성표 → 개선점 → 슈팅 분석 → 선수 구성 · 처방으로 이어지는 지금의 흐름이 되었습니다.

### 5. 요청 한도 안에서 반복 개선하기
- **문제**: 분석 코드나 화면을 고칠 때마다 다시 분석하면 하루 요청 한도가 금방 바닥났습니다.
- **시도**: API를 다시 부르지 않고 저장된 데이터로 최신 코드를 바로 확인하는 디버깅 모드를 만들고, 데이터 보관은 넥슨 약관에 맞췄습니다. 다른 유저 닉네임이 담긴 파일은 저장소에 올리지 않습니다.
- **결과**: 같은 경기로 API 0건 반복 개선이 가능해져 개발 속도가 크게 빨라졌습니다.

### 6. API에 없는 데이터 채우기
- **문제**: 넥슨 Open API만으로는 처방(획득 특성 추천)을 내릴 근거가 부족했습니다.
- **시도**: 공개된 공식 통계로 빈 부분을 보완하고, 근거가 부족한 경우는 화면에 알립니다.
- **결과**: "무엇을 고칠지"에서 끝나지 않고 "어떤 특성을 달지"까지 이어지는 처방이 되었습니다.`,
        contentEn: `### 1. Slow First Run and API Quotas
- **Problem**: The Nexon Open API is tightly rate-limited, and the first analysis took **380s** fetching data in sequence.
- **Approach**: Reordered collection to overlap waits, pushed throughput as far as the quota allows, showed results first, and displayed daily usage.
- **Result**: First result in **~90s**, re-analysis in **3s** with zero API calls.

### 2. Real Data Differed from the Docs
- **Problem**: Trusting the docs alone left some numbers out of line with the game.
- **Approach**: Checked integrity against real responses and safely corrected mismatches — the same mindset as the Automation Test Tool.
- **Result**: Numbers match the game, guarded by tests.

### 3. Who to Compare Against
- **Problem**: Few games per opponent style made win rates swing, and all-ranker comparisons gave advice for a different play style.
- **Approach**: Corrected small samples, benchmarked against rankers who play like you, and flagged weak evidence on screen.
- **Result**: Comparisons users can trust, and the screen speaks up first when the numbers are weak.

### 4. Answers Before Tables
- **Problem**: The first UI walked through the analysis in tables, burying "what should I change?"
- **Approach**: Moved to a results-first dashboard, then reordered again around user questions (what kind of player am I → who beats me → what should I fix → where do shots come from) and collapsed the supporting tables at the bottom.
- **Result**: Today's report → matchups → fixes → shots → squad & prescriptions flow.

### 5. Iterating Within Quotas
- **Problem**: Every code or UI change burned daily quota.
- **Approach**: A debugging mode that checks the latest code against stored data without API calls, with data retention following Nexon's terms; files containing other users' nicknames are kept out of the repository.
- **Result**: Zero-API iteration on the same matches.

### 6. Filling Data the API Lacks
- **Problem**: The API alone could not support trait prescriptions.
- **Approach**: Filled gaps with public official statistics and flagged thin evidence on screen.
- **Result**: Prescriptions extend from "what to fix" to "which traits to add".`
      },
      {
        num: '07',
        titleKo: '07. Next Steps & Lessons (다음 단계 및 배운 점)',
        titleEn: '07. Next Steps & Lessons',
        contentKo: `### 1. 정답이 무엇인지부터 정한다
- 보이지 않는 값을 맞히는 문제일수록, 무엇을 정답으로 볼지와 어떻게 검증할지를 먼저 정해야 숫자를 믿을 수 있다는 점을 배웠습니다.

### 2. 문서보다 실제 데이터
- 공식 문서와 실제 응답이 다른 경우가 적지 않았습니다. 데이터를 받자마자 정합성을 확인하는 습관이 분석 결과 전체의 신뢰를 지켜 줬습니다.

### 3. 숫자보다 답
- 같은 분석이라도 유저가 궁금한 순서로 보여줄 때 비로소 쓰이는 도구가 된다는 것을 화면 구조를 두 번 크게 바꾸며 체감했습니다.

### 4. 다음 단계
- 8강 · 4강 · 결승 결과가 쌓이는 대로 모델을 다시 학습하고, 26/27 시즌으로 확장
- 전적분석 리포트와 처방을 더 많은 유저 데이터로 다듬기`,
        contentEn: `### 1. Define the Ground Truth First
- When predicting hidden values, deciding what counts as correct and how to validate it comes before any model.

### 2. Real Data over Documentation
- Responses often differed from the docs; checking integrity on arrival protected every downstream result.

### 3. Answers over Numbers
- Restructuring the screen twice showed that analysis becomes useful only when ordered by the user's questions.

### 4. Next Steps
- Retrain as later rounds arrive and extend to 26/27
- Refine reports and prescriptions with more user data`
      }
    ]
  },
  // =========================================================================
  // 6. FC 온라인 신규 특성 제안 — 블라인드 링커 (my 신특 공모전)
  // =========================================================================
  {
    id: 'log-entry-fco-trait',
    category: 'Game Design · Data-Driven Proposal',
    badgeTextKo: '공모전 제출 완료',
    badgeTextEn: 'Submitted',
    badgeType: 'success',
    titleKo: 'FC 온라인 신규 특성 제안 — 블라인드 링커 (my 신특 공모전)',
    titleEn: 'FC Online New Trait Proposal — Blind Linker (Trait Idea Contest)',
    tabLabelKo: '신규 특성 제안',
    tabLabelEn: 'New Trait Proposal',
    oneLinerKo: '골문을 등지고 받은 공을 힐 · 노룩 원터치로 등 뒤 동료에게 연결할 때 정확도를 높이는 신규 특성을, 신규 특성 17종 전수 조사와 공식 데이터센터 사용률을 근거로 설계해 넥슨 공모전에 제출',
    oneLinerEn: 'Designed and submitted a new FC Online trait that improves back-to-goal heel / no-look one-touch passes, grounded in a full audit of all 17 new traits and official usage data.',
    roleKo: '개인 · 기획, 근거 데이터 조사, 특성 설계, 아이콘 · 발표 자료 제작',
    roleEn: 'Solo · Concept, Evidence Research, Trait Design, Icon & Deck Production',
    period: '2026.11.20 (제출 완료)',
    periodEn: '2026.11.20 (Submitted)',
    techStack: ['Game Design', 'FC Online 공식 데이터센터', 'Competitive Analysis', 'SVG Icon Design', 'PptxGenJS'],

    metricsHeadingKo: '핵심 근거 (Key Evidence)',
    metricsHeadingEn: 'Key Evidence',
    keyMetrics: [
      {
        valueKo: '신규 특성 17종 전수 조사 → 패스 계열은 커맨더 1종',
        valueEn: 'All 17 New Traits Audited → Only 1 Passing Trait',
        icon: 'fas fa-magnifying-glass-chart'
      },
      {
        valueKo: 'ST · CAM 상위 5개 특성 100% 돌파 · 마무리 계열',
        valueEn: 'ST & CAM Top-5 Traits: 100% Dribbling / Finishing',
        icon: 'fas fa-chart-column'
      },
      {
        valueKo: '중원(CM · CDM)에서도 패스 특성 사용률 8~9%',
        valueEn: 'Passing Trait Usage Only 8–9% Even in Midfield',
        icon: 'fas fa-percent'
      },
      {
        valueKo: '커맨더 공식 설명: 논스톱 · 플레어 패스 효과 제한',
        valueEn: 'Official: Commander Limited on One-Touch / Flair',
        icon: 'fas fa-puzzle-piece'
      }
    ],

    pipelineFlow: [
      { step: '01', titleKo: '실축 장면 관찰', titleEn: 'Real-Match Observation', descKo: '외질 · 사비 · 이니에스타 · 지루의 등진 원터치 힐 연계', descEn: 'Back-to-goal one-touch heel links' },
      { step: '02', titleKo: '신규 특성 17종 전수 조사', titleEn: 'Audit of 17 Traits', descKo: '공식 공지 · 데이터센터 아이콘 목록으로 분류', descEn: 'Classified via notices & data center' },
      { step: '03', titleKo: '사용률 데이터로 공백 확인', titleEn: 'Gap via Usage Data', descKo: '포지션별 8강 획득 특성 사용률 비교', descEn: 'Position-level trait usage' },
      { step: '04', titleKo: '특성 설계', titleEn: 'Trait Design', descKo: '효과 · 4가지 발동 조건 · 밸런스 레버', descEn: 'Effect, 4 conditions, balance levers' },
      { step: '05', titleKo: '아이콘 · 발표 자료 제출', titleEn: 'Icon & Deck Submitted', descKo: '공식 아이콘 문법 기반 아이콘 + 15쪽 PDF', descEn: 'Official-style icon + 15-page PDF' }
    ],

    sections: [
      {
        num: '01',
        titleKo: '01. 제안 개요 (무엇을 제안했나)',
        titleEn: '01. Proposal Overview',
        contentKo: `### 블라인드 링커 (Blind Linker)
골문을 등지고 공을 받는 상황에서, 등 뒤로 보내는 힐 · 힐훅 · 노룩 원터치 패스의 정확도를 높이고 전용 모션을 우선 발동시키는 신규 특성입니다. 티키타카, 그 시절 바르셀로나와 아스날의 연계 축구를 좋아하는 유저를 위한 '연계형' 특성입니다.

### 발동 조건 (네 가지 모두 충족 시)
- **등진 상태**: 몸 방향이 공격 방향의 반대쪽 ±60° 이내
- **다이렉트**: 퍼스트 터치 없는 원터치 (선입력 인정)
- **입력**: C+S(땅볼) 또는 C+W(스루) 플레어 패스
- **방향**: 몸 기준 등 뒤 180° 반원 안으로 보내는 패스
- 빠른 공 · 수비 근접 · 약발 사용 시 보정 감소, 밸런스 레버(발동 각도 180° → 150° → 120° 등)로 사후 조정

### 활용 상황
- **포스트 플레이 원투**: 센터백을 등진 ST가 침투하는 CAM에게 힐패스 → 레이저 슈터로 마무리
- **측면 백힐 오버래핑**: 등진 윙어가 오버래핑 풀백에게 힐 스루 → 크로스 포쳐로 마무리
- **중원 탈압박**: 압박 속 CM이 돌아서지 않고 힐 원터치 → 커맨더 로빙 스루로 전환

### 아이콘
기존 신규 특성 아이콘의 규칙(금색 육각 배지 + 단색 실루엣)을 지키고, 유일한 패스 특성인 커맨더의 '공 + 굵은 회전 화살표' 문법을 따라 뒤꿈치가 공을 치는 순간을 그렸습니다.`,
        contentEn: `### Blind Linker
A new trait that improves the accuracy of heel / heel-hook / no-look one-touch passes sent behind the player when receiving with the back to goal, and prioritizes dedicated flick animations — built for fans of tiki-taka style link-up play.

### Activation (all four required)
- **Back to goal**: body facing within ±60° of the opposite of the attack direction
- **Direct**: one-touch, no first touch (pre-input allowed)
- **Input**: C+S (ground) or C+W (through) flair pass
- **Direction**: pass sent into the rear 180° half-circle
- Reduced bonus for fast incoming balls, close pressure and weak foot; tunable via balance levers (activation angle 180° → 150° → 120°, etc.)

### Use Cases
- **Post-play one-two**: ST with back to the CB heels into a running CAM → finished with Laser Shooter
- **Wide back-heel overlap**: winger heels a through ball to the overlapping full-back → Cross Poacher finish
- **Escaping midfield pressure**: CM flicks first-time without turning → switch via Commander's lofted through ball

### Icon
Follows the existing new-trait icon rules (gold hexagon badge, single-color silhouette) and Commander's "ball + bold spin arrow" grammar, showing the heel striking the ball.`,
        screenshots: [
          {
            src: traitImg1,
            titleKo: '신규 특성 아이콘 — 힐 임팩트',
            titleEn: 'Trait Icon — Heel Impact',
            descKo: '뒤꿈치가 공을 치는 순간과 뒤로 감기는 회전 화살표로 "등 뒤로 보내는 힐 원터치"를 표현했습니다.',
            descEn: 'The heel striking the ball with a backward spin arrow conveys a one-touch heel pass behind the player.'
          },
          {
            src: traitImg2,
            titleKo: '발동 조건 — 등 뒤 180° 발동 구역',
            titleEn: 'Activation — Rear 180° Zone',
            descKo: '네 가지 조건과 발동 구역 도식. 레이저 슈터처럼 "방향"을 발동 조건으로 삼아 구현 선례를 함께 제시했습니다.',
            descEn: 'Four conditions with the activation-zone diagram; direction-based conditions already exist (Laser Shooter).'
          },
          {
            src: traitImg3,
            titleKo: '활용 상황 — 포스트 플레이 원투',
            titleEn: 'Use Case — Post-Play One-Two',
            descKo: '받는 패스 → 블라인드 링커 발동 → 다음 연결 순서로 장면별 전술 도식과 조작법을 정리했습니다.',
            descEn: 'Each use case is laid out as receive → trait triggers → next action, with a tactical diagram and controls.'
          }
        ]
      },
      {
        num: '02',
        titleKo: '02. 데이터적 근거 (왜 이 특성인가)',
        titleEn: '02. Data Rationale',
        contentKo: `### 1. 신규 특성 17종 전수 조사 — 패스 계열은 1종뿐
- 공식 업데이트 공지와 데이터센터 아이콘 목록으로 신규 특성 17종을 모두 분류했습니다: 돌파 · 침투 3 / 마무리 3 / 피지컬 2 / **패스 1(커맨더)** / 수비 5 / GK 3.
- 커맨더는 롱패스 전환 특성이며, 공식 설명에서 **"논스톱 · 플레어 패스와 같은 상황에서는 효과가 제한"**된다고 명시되어 있습니다. 즉 짧은 원터치 · 플레어 연계는 설계상 비어 있는 영역입니다.

### 2. 실제 사용률 — 공격은 개인기 · 마무리에 쏠려 있다
> 출처: FC 온라인 공식 데이터센터 '포지션 별 인기 특성', 2026.11.20 10:00 기준, 1:1 공식경기 슈퍼챔피언스~월드클래스3, 8강 획득(신규) 특성
- **ST**: 아크로바틱 피니셔 24.1% · 트릭스터 19.0% · 라인 브레이커 17.8% · 크로스 포쳐 17.5% · 스피드스터 9.8% → 상위 5개 모두 돌파 · 마무리 (합계 88.2%)
- **CAM**: 트릭스터 28.2% · 스피드스터 18.0% · 라인 브레이커 18.0% · 크로스 포쳐 11.3% · 아크로바틱 피니셔 9.8% → 상위 5개 모두 돌파 · 마무리 (합계 85.3%)
- **CM**: 레이저 슈터 26.1% · 2개의 심장 14.2% · 스피드스터 11.5% · 트릭스터 11.4% · 커맨더 8.8%
- **CDM**: 레이저 슈터 34.7% · 파이터 18.6% · 2개의 심장 14.3% · 체이서 10.6% · 커맨더 8.0%
- 해석: 연계의 중심인 2선과 중원까지 슈팅 · 돌파 특성이 1순위이고, 유일한 패스 특성은 5위(8~9%)에 머뭅니다. **연계형 플레이스타일을 뒷받침할 특성 선택지 자체가 부족하다**는 점이 사용 데이터로 확인됩니다.

### 3. 실제 축구 근거
- 신규 특성의 목적은 '실제 축구에서 간헐적으로 드러나는 플레이를 조건부로 재현'하는 것입니다. 외질 · 사비 · 이니에스타 · 지루 · 피르미누의 등진 원터치 힐 연계는 매 경기 나오는 장면이지만, 게임에서는 정확도 문제로 실전 선택지가 되지 못합니다.

### 4. 구현 가능성 근거
- 레이저 슈터가 이미 '공이 굴러오는 방향'을 발동 조건으로 사용합니다. 방향 기반 조건은 검증된 설계 방식입니다.
- 모션은 기존 플레어 패스(힐 · 노룩) 모션을 재사용할 수 있고, EA FC 본가에도 원터치 백힐을 다루는 PlayStyle(Pinged Pass)이 존재합니다.`,
        contentEn: `### 1. Audit of All 17 New Traits — Only One Passing Trait
- Classified all 17 traits from official notices and the data center icon list: Dribbling 3 / Finishing 3 / Physical 2 / **Passing 1 (Commander)** / Defense 5 / GK 3.
- Commander targets long transition passes, and the official notice states its effect is **limited for one-touch and flair passes** — short one-touch link-up is an unaddressed design space.

### 2. Usage Data — Attack Skews to Dribbling & Finishing
> Source: FC Online official data center, as of 2026.11.20 10:00, 1v1 ranked (Super Champions ~ World Class 3), tier-8 (new) traits
- **ST**: Acrobatic Finisher 24.1%, Trickster 19.0%, Line Breaker 17.8%, Cross Poacher 17.5%, Speedster 9.8% → all top-5 dribbling/finishing (88.2%)
- **CAM**: Trickster 28.2%, Speedster 18.0%, Line Breaker 18.0%, Cross Poacher 11.3%, Acrobatic Finisher 9.8% → all top-5 dribbling/finishing (85.3%)
- **CM**: Laser Shooter 26.1%, Two Hearts 14.2%, Speedster 11.5%, Trickster 11.4%, Commander 8.8%
- **CDM**: Laser Shooter 34.7%, Fighter 18.6%, Two Hearts 14.3%, Chaser 10.6%, Commander 8.0%
- Takeaway: even in the link-up zones, shooting/dribbling traits rank first while the sole passing trait sits fifth (8–9%) — **there are too few options that support a link-up play style**.

### 3. Real-Football Basis
- New traits aim to reproduce occasional real-match plays under conditions. Back-to-goal one-touch heel links (Özil, Xavi, Iniesta, Giroud, Firmino) happen every match, yet in-game they are too inaccurate to use.

### 4. Feasibility
- Laser Shooter already uses ball direction as a trigger, so direction-based conditions are proven.
- Existing flair (heel / no-look) animations can be reused; EA FC's Pinged Pass PlayStyle also covers first-time back-heels.`
      },
      {
        num: '03',
        titleKo: '03. 사업적 타당성 (왜 넣을 만한가)',
        titleEn: '03. Business Rationale',
        highlight: true,
        contentKo: `### 1. 운영 방향과 일치 — 선택지 다변화
- 개발진은 저사용 신규 특성을 상향하며 "선택지로서의 의미가 충분히 있어야 된다"는 방향을 밝혔습니다. 돌파 · 마무리에 쏠린 공격 메타에 '연계'라는 새 루트를 더하는 것은 이 방향과 정확히 맞닿습니다.

### 2. 카드 · 이벤트 가치 (BM 관점)
- 신규 특성은 신규 클래스의 고유 특성, '신규특성 100% 선수팩' 같은 이벤트 보상의 핵심 셀링 포인트로 쓰이고 있습니다.
- 블라인드 링커는 외질 · 사비 · 이니에스타 · 지루형 플레이메이커 카드와 짧은 패스 · 시야 능력치에 새로운 수요를 만들어, 기존에 덜 쓰이던 선수군의 가치를 재조명할 수 있습니다.

### 3. 낮은 개발 · 밸런스 리스크
- **겹침 없음**: 커맨더가 효과를 제한한 논스톱 · 플레어 영역만 담당해 기존 특성을 잠식하지 않고, 오히려 '짧게 연계 → 길게 전환'으로 커맨더와 시너지를 냅니다.
- **좁은 조건**: 네 가지 조건을 모두 만족해야 해 메타 붕괴 위험이 낮고, 발동 각도 · 보정치 · 압박 거리 · 공 속도 · 발동 구역 5단계 레버로 출시 후 조정이 가능합니다.
- **재사용**: 기존 플레어 패스 모션과 방향 조건 설계를 재사용해 신규 리소스 부담이 작습니다.

### 4. 보는 재미 (e스포츠 · 콘텐츠)
- 힐 · 노룩 원터치 골은 FSL 하이라이트와 스트리밍 클립으로 소비되기 좋은 장면이라, 경쟁전 플레이를 넘어 콘텐츠 화제성까지 기대할 수 있습니다.`,
        contentEn: `### 1. Aligned with the Live-Ops Direction
- Developers have buffed under-used new traits, stating each trait must be a meaningful choice. Adding a 'link-up' route to a dribbling/finishing-heavy meta fits that direction.

### 2. Card & Event Value (Monetization)
- New traits are a core selling point of new classes and event rewards such as guaranteed new-trait player packs.
- Blind Linker creates fresh demand for playmaker cards (Özil, Xavi, Iniesta, Giroud types) and for short passing / vision stats.

### 3. Low Development & Balance Risk
- **No overlap**: it covers only the one-touch/flair space Commander excludes, and pairs with it ("short link → long switch").
- **Narrow trigger**: all four conditions are required, and five post-launch levers (angle, bonus, pressure distance, ball speed, zone) allow tuning.
- **Reuse**: existing flair animations and direction-based trigger design keep new asset cost low.

### 4. Spectacle (Esports & Content)
- Heel / no-look one-touch goals are highly clippable moments for FSL highlights and streams.`
      },
      {
        num: '04',
        titleKo: '04. 배운 점',
        titleEn: '04. Lessons',
        contentKo: `### 1. 만들기 전에 있는 것부터 전수 조사
- 처음에는 '연계 특성이 없다'고 가정했지만, 17종을 모두 확인하며 커맨더의 존재와 공식 제한 문구를 찾았습니다. 주장의 범위를 '짧은 원터치 연계'로 좁히자 오히려 차별점이 더 선명해졌습니다.

### 2. 아이디어는 데이터로, 디자인은 기존 문법으로
- 사용률 데이터가 '왜 지금 필요한가'를 설득했고, 아이콘은 새로운 은유보다 공식 패스 아이콘의 문법(공 + 궤적)을 따를 때 '원래 게임에 있던 특성'처럼 보였습니다.`,
        contentEn: `### 1. Audit What Exists Before Designing
- I first assumed no link-up trait existed; auditing all 17 surfaced Commander and its official limitation. Narrowing the claim to short one-touch link-up made the differentiation sharper.

### 2. Data for the Idea, Existing Grammar for the Design
- Usage data explained why the trait is needed now, and the icon looked native once it followed the official passing-icon grammar (ball + trajectory).`
      }
    ]
  }
];
