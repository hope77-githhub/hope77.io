import f1Img1 from '../assets/images/f1/01_session_configuration.png';
import f1Img5 from '../assets/images/f1/05_tv_overlay_hud.webp';
import f1Img6 from '../assets/images/f1/06_team_radio_setup_board.png';
import f1Img7 from '../assets/images/f1/07_corner_analysis_silverstone.png';
import f1Img8 from '../assets/images/f1/08_circuit_map_sectors.png';
import f1Img9 from '../assets/images/f1/09_practice_setup_analysis.png';
import f1DemoPoster from '../assets/images/f1/demo_poster.webp';
import f1DemoVideo from '../assets/videos/f1_demo_silverstone.mp4';
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
    titleKo: 'RTS (LoL) 팀 커뮤니케이션 패턴 연구 — 결정적 순간, 팀은 어떻게 대화하는가',
    titleEn: 'RTS (LoL) Team Communication Research — How Teams Talk at Decisive Moments',
    tabLabelKo: 'RTS (LOL) 연구',
    tabLabelEn: 'RTS (LOL) Research',
    oneLinerKo: '리그 오브 레전드(LoL) 팀이 한타 · 오브젝트 싸움 같은 결정적 순간에 어떻게 대화하는지를, 84경기 · 45,660개 발화를 게임 기록과 맞춰 분석해 통계적으로 밝힌 학술 연구입니다. (arXiv 논문 공개 · 2저자)',
    oneLinerEn: 'An academic study that aligned 45,660 utterances from 84 League of Legends matches with in-game logs to show, statistically, how teams talk at decisive moments such as teamfights and objective fights (published on arXiv, second author).',
    roleKo: '리드 데이터 엔지니어 (2저자 / 파이프라인 설계, 음성-로그 동기화, 통계 모델링)',
    roleEn: 'Lead Data Engineer (2nd Author / Pipeline Architecture, Audio-Log Sync, Statistical Modeling)',
    period: '2023.09 – 2025.09',
    publication: 'arXiv:2512.20116',
    paperUrl: 'https://arxiv.org/abs/2512.20116',
    repoUrl: 'https://github.com/hope77-githhub/Proj_code',
    techStack: ['Python', 'Pandas/NumPy', 'RoBERTa', 'NetworkX (SNA)', 'Riot API', 'Discord Voice Bot'],

    story: {
      problem: {
        headlineKo: 'e스포츠 팀의 대화가 경기에 어떤 영향을 주는지, 감이 아닌 숫자로 설명할 방법이 없었습니다.',
        headlineEn: 'There was no way to explain, with numbers rather than intuition, how a team\'s communication affects the game.',
        pointsKo: [
          '리그 오브 레전드(LoL) 같은 5인 팀 게임은 0.1초 단위 판단과 실시간 음성 대화로 승패가 갈리지만, 기존 분석은 킬 · 데스 · 승패 같은 **결과 숫자**에만 머물렀습니다.',
          '실제 경기 음성과 게임 기록을 대조해 보니 **말을 많이 한 팀이 이긴다는 관계는 없었습니다.** 중요한 것은 말의 양이 아니라 "언제, 누가, 어떤 말을 했는가"였습니다.',
          '게임 기록과 음성은 기록되는 시각 기준이 서로 달라, **같은 순간을 정확히 맞춰 보는 것부터** 어려웠습니다.'
        ],
        pointsEn: [
          'In five-player games like League of Legends (LoL), split-second decisions and live voice chat decide matches, yet analysis stopped at **outcome numbers** such as kills, deaths, and wins.',
          'Comparing real match audio with game logs showed **no link between talking more and winning**. What mattered was not how much was said, but when, by whom, and what.',
          'Game logs and voice recordings run on different clocks, so even **lining up the same moment** was hard.'
        ]
      },
      approach: {
        headlineKo: '결정적인 순간(한타 · 오브젝트 싸움)을 기준으로, 누가 누구에게 어떤 종류의 말을 했는지 팀의 "대화 지도"를 그려 비교하기로 했습니다.',
        headlineEn: 'Anchor the analysis on decisive moments (teamfights, objective fights) and draw a "conversation map" of who said what kind of thing to whom.',
        pointsKo: [
          '대화를 단순히 세지 않고 말의 **역할**로 나눴습니다. 정보 공유("미드 플래시 없음"), 지시("원딜 먼저 물어"), 수락("내가 들어갈게") 세 가지입니다.',
          '선수를 점, 말의 흐름을 선으로 이어 **팀의 대화 구조를 네트워크(지도)로** 만들고, 경기 초반(14분 전) vs 후반, 평상시 vs 결정적 교전 순간을 비교했습니다.',
          '숫자로 나온 결과가 실제 팀 상황과 맞는지 **선수 설문과 코칭 스태프 인터뷰로 한 번 더 확인**하도록 설계했습니다.'
        ],
        pointsEn: [
          'Instead of counting words, utterances were sorted by **role**: informing ("mid has no flash"), directing ("dive their ADC first"), and committing ("I\'ll go in").',
          'Players became points and messages became lines, turning team talk into a **network map** that was compared across early (before 14 min) vs late game and calm play vs decisive fights.',
          'To make sure the numbers matched reality, the design included **player surveys and coaching-staff interviews**.'
        ]
      },
      method: {
        headlineKo: '84경기 · 45,660개 발화를 모아 언어 모델, 네트워크 분석, 통계 검증으로 분석했습니다.',
        headlineEn: '45,660 utterances from 84 matches, analyzed with a language model, network analysis, and statistical tests.',
        data: [
          {
            nameKo: '인게임 이벤트 로그 (Riot API)',
            nameEn: 'In-game event logs (Riot API)',
            descKo: '킬 · 오브젝트 처치 등 경기 중 일어난 사건을 밀리초 단위 시각과 함께 기록한 데이터',
            descEn: 'Match events such as kills and objectives, each stamped to the millisecond'
          },
          {
            nameKo: '팀 음성 대화 (Discord 봇)',
            nameEn: 'Team voice chat (Discord bot)',
            descKo: '5명의 음성 채널을 녹음해 텍스트로 바꾼(STT) 발화 45,660개',
            descEn: 'Five-player voice channels recorded and transcribed (speech-to-text): 45,660 utterances'
          },
          {
            nameKo: '선수 설문 · 코칭 스태프 인터뷰',
            nameEn: 'Player surveys & coaching interviews',
            descKo: '숫자로 나온 결과가 실제 팀 상황과 맞는지 확인하기 위한 자료',
            descEn: 'Used to check that the numbers matched what was really happening in the team'
          }
        ],
        methods: [
          {
            nameKo: '시계열 보간 (Interpolation)',
            nameEn: 'Time-series interpolation',
            descKo: '기록 주기가 다른 두 데이터의 시각을 수학적으로 맞춰 오차를 **50ms(0.05초) 미만**으로 정렬',
            descEn: 'Mathematically aligns two streams recorded at different rates to **under 50 ms**'
          },
          {
            nameKo: 'RoBERTa 언어 모델',
            nameEn: 'RoBERTa language model',
            descKo: '각 발화가 정보 공유 · 지시 · 수락 중 어떤 의도인지 자동으로 분류',
            descEn: 'Automatically labels each utterance as informing, directing, or committing'
          },
          {
            nameKo: '소셜 네트워크 분석 (SNA)',
            nameEn: 'Social network analysis (SNA)',
            descKo: '대화가 팀 전체에 고르게 퍼졌는지(밀도), 한 사람에게 쏠렸는지(중심화)를 계산',
            descEn: 'Measures whether talk spreads across the team (density) or concentrates on one person (centralization)'
          },
          {
            nameKo: '통계 검증 + 혼합 연구',
            nameEn: 'Statistical tests + mixed methods',
            descKo: '차이가 우연이 아닌지 가설 검증으로 확인하고, 설문 · 인터뷰 결과와 교차 확인',
            descEn: 'Hypothesis tests rule out chance, and results are cross-checked against surveys and interviews'
          }
        ]
      },
      solution: {
        headlineKo: '게임 기록과 음성을 자동으로 모으고 시각을 맞추는 수집 파이프라인부터 분석 · 리포트까지 직접 만들었습니다.',
        headlineEn: 'I built the whole chain myself: automatic collection and time alignment of game logs and voice, then analysis and reporting.',
        flow: [
          { titleKo: '게임 이벤트 수집 (Riot API)', titleEn: 'Collect game events (Riot API)' },
          { titleKo: '음성 녹음 · 텍스트 변환', titleEn: 'Record & transcribe voice' },
          { titleKo: '시각 맞추기 (보간)', titleEn: 'Align timestamps (interpolation)' },
          { titleKo: '발화 의도 분류 (RoBERTa)', titleEn: 'Classify intent (RoBERTa)' },
          { titleKo: '대화 네트워크 분석 (SNA)', titleEn: 'Analyze the conversation network (SNA)' }
        ],
        pointsKo: [
          '경기 시작과 종료를 자동으로 감지해 모든 이벤트를 **누락 없이(누락률 0%)** 기록하고, 경기가 끝나면 데이터를 검증한 뒤 리포트를 메일로 자동 발송했습니다.',
          'Discord 봇이 5명의 음성을 끊김 없이 녹음하고 텍스트로 바꿔, 사람이 영상과 음성을 일일이 대조하던 작업을 없앴습니다.',
          '짧은 시간 구간마다 대화 네트워크 지표를 자동 계산해, 경기 흐름에 따라 대화 구조가 어떻게 바뀌는지 추적했습니다.'
        ],
        pointsEn: [
          'Match start and end were detected automatically so every event was logged with **0% loss**; after each match the data was validated and a report was emailed automatically.',
          'A Discord bot recorded all five voices without gaps and transcribed them, replacing manual audio-to-video matching.',
          'Network metrics were computed for each short time window to track how the conversation structure shifted during a match.'
        ]
      },
      result: {
        headlineKo: '결정적인 순간일수록 팀 대화가 "지시 → 수락" 중심으로 바뀌고 참여가 고르게 퍼진다는 것을 통계적으로 증명해, arXiv에 논문으로 공개했습니다.',
        headlineEn: 'I showed statistically that at decisive moments team talk shifts to "direct → commit" and participation spreads out, and published it on arXiv.',
        metrics: [
          {
            valueKo: '84경기 · 45,660개',
            valueEn: '84 matches · 45,660',
            labelKo: '분석한 경기 · 발화 수',
            labelEn: 'Matches and utterances analyzed',
            noteKo: '게임 기록 + 5인 음성을 결합한 데이터셋',
            noteEn: 'Game logs combined with five-player voice'
          },
          {
            valueKo: '< 50ms',
            valueEn: '< 50 ms',
            labelKo: '게임 기록 ↔ 음성 시각 오차',
            labelEn: 'Timing error between logs and voice',
            noteKo: '이벤트 누락률 0%',
            noteEn: '0% event loss'
          },
          {
            valueKo: 'p < .001',
            valueEn: 'p < .001',
            labelKo: '결정적 순간의 대화 구조 변화',
            labelEn: 'Shift in conversation structure at decisive moments',
            noteKo: '우연히 나올 확률 0.1% 미만',
            noteEn: 'Less than a 0.1% chance of being random'
          },
          {
            valueKo: 'arXiv:2512.20116',
            valueEn: 'arXiv:2512.20116',
            labelKo: '국제 학술 아카이브 논문 공개',
            labelEn: 'Paper published on arXiv',
            noteKo: '2저자 · 파이프라인 설계와 통계 분석 담당',
            noteEn: 'Second author; pipeline design and statistics'
          }
        ],
        pointsKo: [
          '특정 프로팀(Pro B)에서 한 사람이 대화를 독점하는 **이상 패턴**을 숫자로 찾아냈고, 선수 설문(p < .05)과 인터뷰로 실제 "화자 독점" · "코칭 피드백 부재" 문제였음을 확인했습니다.',
          '게임 기록과 음성만으로 팀의 소통 문제를 진단할 수 있음을 보여, **데이터 기반 코칭 도구**의 가능성을 입증했습니다.'
        ],
        pointsEn: [
          'The numbers flagged an **anomaly** in one pro team (Pro B), where a single player dominated the talk; player surveys (p < .05) and interviews confirmed real "speaker monopoly" and "missing coaching feedback" issues.',
          'Showing that game logs and voice alone can diagnose team communication problems made the case for **data-driven coaching tools**.'
        ]
      }
    },

    sections: [
      {
        titleKo: '연구 설계 — 데이터셋 · 발화 분류 · 네트워크 모델',
        titleEn: 'Research Design — Dataset, Speech Acts, Network Model',
        tocKo: '연구 설계',
        tocEn: 'Research design',
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
- **통계적 가설 검증**: 네트워크 밀도(Density)와 중심화(Centralization)의 변화에 대한 다변량 통계 검증 (p < .001)

### 4. 혼합 연구(Mixed-Methods) 기반 교차 검증 설계
- 정량 지표의 임상적 유효성을 뒷받침하기 위해 선수단 설문(p < .05) 및 코칭 스태프 심층 인터뷰를 병행 설계`,
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
- **Hypothesis Testing**: Statistically tested network density and centralization shifts (p < .001).

### 4. Mixed-Methods Triangulation
- Designed player questionnaires (p < .05) and in-depth coaching staff interviews to validate the practical accuracy of the quantitative network metrics.`
      },
      {
        titleKo: '구현 — 수집 · 동기화 파이프라인과 분석 엔진',
        titleEn: 'Implementation — Collection & Sync Pipeline, Analysis Engine',
        tocKo: '구현',
        tocEn: 'Implementation',
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
        titleKo: '연구 결과 상세',
        titleEn: 'Detailed Findings',
        tocKo: '연구 결과',
        tocEn: 'Findings',
        highlight: true,
        contentKo: `### 1. 맥락 기반 소통 변화 규명 (p < .001)
- **84경기(45,660개 발화)** 대상 SNA 네트워크 분석을 수행하여 경기 흐름 및 교전에 따른 소통의 질적 전환을 입증했습니다.
- **의사결정 패턴 전환**: 핵심 교전(MoI) 구간 및 경기 후반부(14분 이후)로 갈수록 단순 정보 공유에서 **'지시-수락(Directive → Commissive)'** 중심의 고속 의사결정 체계로 전환됨을 규명했습니다.
- **네트워크 구조의 유연화**: 교전 상황에서 팀원 간 발언 참여 폭(밀도)이 유의미하게 확장되고, 특정 인물에 편중되던 발언 의존도(중심화)가 완화되는 유연한 팀워크 구조를 통계적으로 증명했습니다 (p < .001).

### 2. 정량 지표 기반 팀 진단 프레임워크 검증 (p < .05)
- **이상치 조기 발견**: 프로팀과 아마추어팀 비교 분석 중 발견된 특정 프로팀(Pro B)의 이상치(낮은 밀도, 비대칭적으로 높은 중심화)를 감지했습니다.
- **설문 & 심층 인터뷰 교차 검증**: 선수단 설문(p < .05) 및 심층 인터뷰와의 교차 검증을 통해, 오디오 및 인게임 로그만으로 도출한 네트워크 지표가 실제 팀 내 **'특정 화자 독점 현상'** 및 **'코칭 피드백 부재'** 문제를 정확히 진단해 냄을 증명했습니다.
- **데이터 기반 이스포츠 코칭 실효성 입증**: 주관적인 감에 의존하던 기존 피드백에서 벗어나, 데이터만으로 팀의 의사소통 병목을 비침습적으로 정밀 진단하는 코칭 도구의 실효성을 확립했습니다.

### 3. 학술적 공인 및 기술 성과
- **국제 학술 프리프린트(arXiv:2512.20116) 공식 등재**: 엄격한 통계적 가설 검증과 분석 방법론의 신뢰성을 인정받아 글로벌 학술 아카이브에 정식 논문으로 등재되었습니다.
- **멀티모달 시계열 오차 50ms 미만 & 0% 누락률**: 이종 데이터 엔지니어링 파이프라인의 완벽한 무결성을 입증했습니다.`,
        contentEn: `### 1. Uncovering Context-Driven Communication Shifts (p < .001)
- Conducted dynamic SNA across **84 matches (45,660 utterances)**, proving qualitative structural shifts across match phases.
- **Shift to Directive-Commissive Patterns**: Statistically validated that during Moments of Interest (MoI) and late-game phases (> 14m), communication shifted rapidly from passive information sharing to agile **'Directive → Commissive'** decision-making.
- **Network Democratization**: Demonstrated that decisive teamfights significantly increased team-wide participation (network density) while decreasing reliance on any single individual (centralization) (p < .001).

### 2. Validating Quantitative Team Diagnostic Frameworks (p < .05)
- **Anomaly Detection**: Pinpointed anomalous metrics in a professional team (Pro B) characterized by low network density and high centralization.
- **Triangulation via Surveys & Interviews**: Cross-validated with player surveys (p < .05) and coaching staff interviews, proving that telemetry-derived network metrics precisely detected internal **'speaker monopoly'** and **'absence of coaching feedback'**.
- **Empirical E-Sports Coaching Tools**: Established the validity of non-invasive, data-driven coaching tools replacing subjective intuition with empirical diagnostics.

### 3. Academic Recognition & Technical Robustness
- **Formal arXiv Publication (arXiv:2512.20116)**: Recognized by the international academic research community for empirical rigor and reproducibility.
- **Sub-50ms Multimodal Alignment & 0% Drop Rate**: Proven zero-loss pipeline robustness under high-volume streaming conditions.`
      },
      {
        titleKo: '배운 점',
        titleEn: 'Lessons Learned',
        tocKo: '배운 점',
        tocEn: 'Lessons',
        contentKo: `### 1. 데이터 분석의 본질은 실무 페인 포인트 해결
데이터 엔지니어링과 분석은 단순히 숫자를 나열하는 것을 넘어, 현장의 실질적인 문제(화자 독점, 피드백 부재)를 정밀 진단하고 실행 가능한 해결책을 제시할 때 진정한 가치를 발휘함을 배웠습니다.

### 2. 정량 지표와 정성 조사의 삼각검증(Triangulation)
단일 데이터 소스에 매몰되지 않고, 로그 기반 SNA 지표(p < .001)를 현장 인터뷰 및 설문(p < .05)과 교차 검증함으로써 모델의 현실 설명력을 극대화하는 혼합 연구 방법론의 가치를 체득했습니다.`,
        contentEn: `### 1. True Data Science Solves Real Operational Bottlenecks
Learned that data engineering and analytics achieve true impact when diagnosing real operational bottlenecks (speaker monopoly, lack of coaching feedback) and offering actionable interventions rather than mere metric reporting.

### 2. Power of Mixed-Methods Triangulation
Gained methodological mastery in combining quantitative telemetry/SNA metrics (p < .001) with qualitative surveys and interviews (p < .05), safeguarding against analytical blindspots and ensuring grounded empirical truth.`
      }
    ]
  },
  // =========================================================================
  // 2. Game Data Quality Guard (게임 경기 데이터 품질 관리 툴)
  //    실무 데이터 · 상황 · 수치는 비공개 → 페이지 전체를 넥슨 Open API의
  //    FC Online 매치 상세 데이터에 빗대어 서술 (실무 수치 · 사내 맥락 사용 금지)
  // =========================================================================
  {
    id: 'entry-data-quality-guard',
    aliases: ['entry-automation-test'],
    category: 'Data Quality & Validation Automation',
    badgeTextKo: '진행 중 (Active)',
    badgeTextEn: 'Active Project',
    badgeType: 'info',
    titleKo: '게임 데이터 품질 가드 — 경기 기록 데이터가 정확하게 쌓이도록 지키는 자동 검증 툴',
    titleEn: 'Game Data Quality Guard — Keeping Match Data Accurate, Automatically',
    tabLabelKo: '데이터 품질 가드',
    tabLabelEn: 'Data Quality Guard',
    oneLinerKo: 'FC온라인 경기 한 판이 남기는 수백 개의 기록처럼, 게임 데이터가 빠짐없이 · 형식에 맞게 · 서로 모순 없이 쌓였는지를 사람 대신 자동으로 확인하는 데이터 품질 관리 툴입니다.',
    oneLinerEn: 'A data quality tool that automatically checks, in place of a person, that game data such as the hundreds of values an FC Online match leaves behind is complete, well-formed, and free of contradictions.',
    roleKo: '개인 프로젝트 · 설계 및 풀스택 개발',
    roleEn: 'Personal Project · Design & Full-Stack Development',
    noticeKo: '실무 데이터와 화면은 공개할 수 없어, 이 페이지의 모든 설명은 같은 원리를 넥슨 Open API에 공개된 FC Online 매치 상세 데이터에 빗대어 설명합니다.',
    noticeEn: 'Real data and screens are confidential, so everything on this page explains the same approach using the public FC Online match detail data from the Nexon Open API.',
    period: '2025.12 – 현재 (Active)',
    periodEn: '2025.12 – Present (Active)',
    techStack: ['Python', 'FastAPI', 'React', 'YAML Data Schema', 'pandas', 'FFmpeg & OpenCV', 'RapidFuzz', 'cx_Freeze'],

    story: {
      problem: {
        headlineKo: '경기 한 판이 남기는 수백 개의 기록이 정확한지, 사람이 눈으로 하나하나 확인하기에는 한계가 있습니다.',
        headlineEn: 'A single match leaves hundreds of recorded values, and checking by eye that every one is correct does not scale.',
        pointsKo: [
          'FC온라인 경기 한 판이 끝나면 매치 데이터에 두 참가자의 결과 · 점유율 · 슈팅 · 패스 · 수비 기록, 슈팅마다의 시간 · 좌표 · 결과, 선수별 개인 기록까지 **수백 개의 값**이 남습니다. 이 데이터는 전적 검색, 통계, 밸런스 분석의 근거가 되기 때문에 **값 하나만 빠지거나 틀려도 그 위의 분석이 모두 어긋납니다.**',
          '사람이 확인하려면 경기마다 데이터를 열어 "총 골 수 = 골로 끝난 슈팅 수", "두 팀 점유율 합 = 100%" 같은 관계를 **손으로 계산해 대조**해야 하고, 경기 수만큼 시간이 늘어납니다.',
          '값 하나하나는 형식이 맞아도 **서로 어긋나는 경우**는 눈으로 찾기 어렵고, 확인하는 사람마다 기준이 달라 결과가 흔들립니다.'
        ],
        pointsEn: [
          'When an FC Online match ends, its match data holds **hundreds of values**: each participant\'s result, possession, shots, passes, and defending, plus time, position, and outcome for every shot and per-player stats. Match history, statistics, and balance analysis all build on this data, so **one missing or wrong value skews everything built on top of it.**',
          'Checking by hand means opening each match and **calculating relations yourself**, such as "total goals = shots that ended in a goal" or "both teams\' possession adds up to 100%", and the time grows with every match.',
          'Values can each look well-formed yet **contradict each other**, which is hard to spot by eye, and results vary with whoever is checking.'
        ]
      },
      approach: {
        headlineKo: '"무엇이 정상인가"를 규칙으로 한 번 정해 두고, 반복 확인은 툴이, 판단이 필요한 예외는 사람이 맡도록 나눴습니다.',
        headlineEn: 'Define "what correct looks like" once as rules, let the tool do the repetitive checks, and leave judgment calls on exceptions to people.',
        pointsKo: [
          '"패스 성공 수는 패스 시도 수보다 클 수 없다", "어시스트가 없으면 어시스트 선수 ID는 -1이어야 한다"처럼 사람이 머릿속으로 하던 확인 기준을 **코드 규칙으로 옮기면**, 누가 언제 돌려도 같은 결과가 나옵니다.',
          '데이터 구조가 바뀌어도 툴을 고치지 않도록, 검사 기준을 코드가 아니라 **데이터 명세(스키마) 파일에서 읽어 오게** 설계했습니다.',
          '목표는 세 가지입니다. ① 반복 확인 시간 줄이기 ② 누가 확인해도 **같은 Pass / Fail 판정** ③ 아낀 시간을 연장전 · 승부차기 · 몰수 경기 같은 **드문 예외 상황(엣지 케이스)** 확인에 쓰기.'
        ],
        pointsEn: [
          'Turning the checks people do in their heads, such as "pass successes can never exceed pass attempts" or "with no assist, the assisting player ID must be -1", **into code rules** gives the same answer no matter who runs it, or when.',
          'So the tool does not need rewriting whenever the data changes, the criteria are **read from a data specification (schema) file** rather than hard-coded.',
          'Three goals: ① less repetitive checking, ② **the same pass / fail call** whoever checks, ③ more time for rare **edge cases** such as extra time, penalty shoot-outs, and forfeits.'
        ]
      },
      method: {
        headlineKo: 'FC온라인 매치 데이터 · 메타데이터 · 경기 녹화 영상을 재료로, 데이터 품질의 네 가지 기준을 자동 검사로 바꿨습니다.',
        headlineEn: 'Using FC Online match data, metadata, and match recordings, I turned four data quality criteria into automatic checks.',
        data: [
          {
            nameKo: '매치 상세 데이터 (넥슨 Open API)',
            nameEn: 'Match detail data (Nexon Open API)',
            descKo: '경기마다 참가자별 `matchDetail` · `shoot` · `shootDetail[]` · `pass` · `defence` · `player[]` 기록',
            descEn: 'Per-participant `matchDetail`, `shoot`, `shootDetail[]`, `pass`, `defence`, and `player[]` records for every match'
          },
          {
            nameKo: '메타데이터',
            nameEn: 'Metadata',
            descKo: '선수(spid) · 포지션 · 시즌 · 매치 종류 목록. 기록된 ID가 실제로 있는 값인지 대조하는 기준',
            descEn: 'Lists of players (spid), positions, seasons, and match types, used to confirm recorded IDs really exist'
          },
          {
            nameKo: '데이터 명세 (스키마)',
            nameEn: 'Data specification (schema)',
            descKo: '각 값의 형식 · 허용 범위 · 코드(예: 슈팅 결과 1~3)를 정리해 YAML 파일로 관리',
            descEn: 'Format, allowed range, and codes for each value (e.g. shot result 1–3), kept as YAML files'
          },
          {
            nameKo: '경기 녹화 영상',
            nameEn: 'Match recordings',
            descKo: '기록된 골 시간 · 슈팅 위치가 실제 장면과 맞는지 눈으로 대조하는 자료',
            descEn: 'Video used to confirm that recorded goal times and shot positions match the actual scene'
          }
        ],
        methods: [
          {
            nameKo: '데이터 품질 4가지 기준',
            nameEn: 'Four data quality criteria',
            descKo: '**완전성**(필수 값이 빠짐없이) → **유효성**(좌표 0~1, 정해진 코드) → **정합성**(총 골 수 = 골 슈팅 수) → **일관성**(양 팀 점유율 합 100) 순서로 검사',
            descEn: 'Checked in order: **completeness** (no required value missing) → **validity** (coordinates 0–1, agreed codes) → **consistency** (total goals = goal shots) → **cross-record agreement** (possession sums to 100)'
          },
          {
            nameKo: '규칙 모듈 + 스키마 참조',
            nameEn: 'Rule modules + schema reference',
            descKo: '검사 영역마다 규칙을 독립 모듈로 두고, 기준값은 명세에서 읽어 자동으로 판정',
            descEn: 'One independent rule module per check area, with expected values read from the spec'
          },
          {
            nameKo: '시간 동기화',
            nameEn: 'Time synchronization',
            descKo: '`goalTime` 같은 기록 시각을 영상 시각과 맞춰, 문제가 된 골 장면을 클릭 한 번으로 재생',
            descEn: 'Aligns recorded times such as `goalTime` with the video so the flagged goal plays in one click'
          },
          {
            nameKo: '유사도 매칭',
            nameEn: 'Similarity matching',
            descKo: '새로 찾은 문제를 이미 알려진 이슈 목록과 비교해 **처음 보는 문제만** 남김',
            descEn: 'Compares new findings with the known-issue list so **only genuinely new problems** remain'
          }
        ]
      },
      solution: {
        headlineKo: '매치 데이터 불러오기부터 품질 검사 · 장면 확인 · 이슈 대조 · 결과 판정까지 한 프로그램 안에서 끝나도록 만들었습니다.',
        headlineEn: 'I built one program that covers everything from loading match data to quality checks, scene review, issue matching, and the final verdict.',
        flow: [
          { titleKo: '매치 데이터 불러오기', titleEn: 'Load match data' },
          { titleKo: '명세 기반 품질 검사', titleEn: 'Schema-based quality checks' },
          { titleKo: '문제 장면 · 좌표 확인', titleEn: 'Review the scene & positions' },
          { titleKo: '기존 이슈와 대조', titleEn: 'Match against known issues' },
          { titleKo: 'Pass / Fail 리포트', titleEn: 'Pass / fail report' }
        ],
        pointsKo: [
          '`matchInfo[1].player[5].status.tackle`처럼 깊숙이 들어간 값도 경로만으로 찾아, 경기 한 판의 수백 개 값을 **클릭 한 번으로** 검사합니다.',
          '**오탐(정상인데 문제로 잘못 잡는 것)을 줄이는 데** 가장 공을 들였습니다. 어시스트가 없을 때의 `assistSpId = -1`은 "없음"을 뜻하는 정상 값이고, 몰수 경기는 골 수와 승패가 맞지 않아도 정상입니다. 이런 예외까지 규칙에 넣어야 경고를 믿을 수 있습니다.',
          '슈팅 · 어시스트 좌표를 **2D / 3D 피치 위에** 그려, 숫자만으로는 안 보이는 이상(의미 없는 기본 좌표 등)을 눈으로 바로 구별합니다.',
          '별도 설치 없이 실행되는 단일 프로그램으로 배포합니다.'
        ],
        pointsEn: [
          'Deep values such as `matchInfo[1].player[5].status.tackle` are reached by path alone, so the hundreds of values in a match are checked **in one click**.',
          'The most effort went into **cutting false alarms** (correct data flagged as wrong). With no assist, `assistSpId = -1` is a valid "none", and in a forfeit the goals need not match the result. Only when such exceptions are in the rules can the warnings be trusted.',
          'Shot and assist positions are drawn **on a 2D / 3D pitch**, exposing problems numbers alone hide, such as meaningless default coordinates.',
          'It ships as a single no-install executable.'
        ]
      },
      result: {
        headlineKo: '사람이 손으로 하던 반복 확인을 규칙이 대신하고, 누가 확인해도 같은 기준으로 판정할 수 있게 되었습니다.',
        headlineEn: 'Rules now do the repetitive checking people did by hand, and anyone gets the same verdict under the same criteria.',
        metrics: [
          {
            valueKo: '4가지 기준',
            valueEn: '4 criteria',
            labelKo: '데이터 품질을 판정하는 기준',
            labelEn: 'Criteria that define data quality',
            noteKo: '완전성 · 유효성 · 정합성 · 일관성',
            noteEn: 'Completeness, validity, consistency, cross-record agreement'
          },
          {
            valueKo: '6개 영역 · 20여 개 규칙',
            valueEn: '6 areas · 20+ rules',
            labelKo: 'FC온라인 매치 데이터에 적용한 검사 범위',
            labelEn: 'Checks applied to FC Online match data',
            noteKo: '세부 규칙은 아래 기술 상세 "검사 규칙"',
            noteEn: 'See "Rules" in the deep dive below'
          },
          {
            valueKo: '클릭 1번',
            valueEn: 'One click',
            labelKo: '경기 한 판 수백 개 값의 품질 검사',
            labelEn: 'Quality check of a match\'s hundreds of values',
            noteKo: '데이터 불러오기부터 리포트까지',
            noteEn: 'From loading data to the report'
          },
          {
            valueKo: '코드 수정 0줄',
            valueEn: '0 lines of code',
            labelKo: '데이터 구조가 바뀔 때 필요한 툴 수정',
            labelEn: 'Tool changes needed when the data changes',
            noteKo: '명세(YAML) 파일만 갱신',
            noteEn: 'Only the spec (YAML) file is updated'
          }
        ],
        pointsKo: [
          '확인 기준이 규칙으로 고정되어 **누가 언제 확인해도 같은 판정**이 나오고, 사람은 연장전 · 승부차기 · 몰수 경기 · 자책골처럼 **규칙으로 잡기 어려운 예외 상황**에 시간을 쓸 수 있습니다.',
          '같은 방식을 **FCO Live Boost Lab**에서 넥슨 Open API 응답의 정합성 확인에 실제로 적용해, 화면의 숫자가 게임 안 기록과 맞도록 했습니다.'
        ],
        pointsEn: [
          'With criteria fixed as rules, **anyone gets the same verdict at any time**, and people spend their time on **edge cases rules cannot easily capture**, such as extra time, shoot-outs, forfeits, and own goals.',
          'The same approach is used in **FCO Live Boost Lab** to check Nexon Open API responses, so the numbers on screen match the game\'s records.'
        ]
      }
    },

    sections: [
      {
        titleKo: '원리 — 값 하나가 맞아도 전체는 틀릴 수 있다 (공개 데이터 예시)',
        titleEn: 'Principle — Every Value Can Be Valid While the Whole Is Wrong (Public-Data Example)',
        tocKo: '원리',
        tocEn: 'Principle',
        contentKo: `> 실무 데이터와 화면은 공개할 수 없어, 같은 원리를 넥슨 Open API에 공개된 FC Online 매치 상세(match-detail) 데이터에 적용해 설명합니다.

### 1. 데이터 품질이란 — "빠짐없이, 형식대로, 서로 맞게"
데이터 품질은 값이 그냥 "있는지"가 아니라, 분석에 써도 될 만큼 믿을 수 있는지를 말합니다. 이 툴은 아래 네 가지 기준으로 데이터를 확인합니다.
- **완전성**: 있어야 할 값이 빠짐없이 기록되었는가
- **유효성**: 값이 약속된 형식 · 범위 · 코드 안에 있는가
- **정합성**: 요약과 상세 내역, 값과 값이 서로 앞뒤가 맞는가
- **일관성**: 서로 다른 기록(예: 두 참가자의 기록)끼리 일치하는가

### 2. 왜 FC Online 매치 상세 데이터인가
FC Online 매치 하나에는 참가자별 \`matchDetail\`(결과, 점유율, 카드, 컨트롤러), \`shoot\`(슈팅·골 요약), \`shootDetail[]\`(슈팅마다 시간·좌표·종류·결과·선수), \`pass\`, \`defence\`, 그리고 선수별 \`player[].status\`까지 수백 개의 값이 담깁니다. 요약값과 상세 내역, 참가자와 참가자 사이가 서로 맞물려 있어 데이터 품질 검사를 보여주기에 좋은 예시입니다.

### 3. 값 하나가 맞아도 전체는 틀릴 수 있다
각 값의 형식이 올바르더라도 서로 맞물려야 하는 값들이 어긋나면 데이터는 신뢰할 수 없습니다. 예를 들어 \`goalTotal\`은 명세상 \`goalInPenalty + goalOutPenalty + goalPenaltyKick\`과 같아야 하고, \`shootDetail\`에서 결과가 골(\`result: 3\`)인 슈팅 수와도 맞아야 합니다. 이런 관계는 사람이 매번 손으로 확인하기 어렵기 때문에 규칙으로 만들어 자동으로 확인합니다.`,
        contentEn: `> Internal data and screens are confidential, so the same approach is shown on the public FC Online match detail data from the Nexon Open API.

### 1. What Data Quality Means — Complete, Well-Formed, Consistent
Data quality is not whether a value exists but whether it can be trusted for analysis. The tool checks four criteria:
- **Completeness**: is every required value recorded?
- **Validity**: is each value within its agreed format, range, and codes?
- **Consistency**: do summaries agree with line items, and values with each other?
- **Cross-record agreement**: do separate records (e.g. the two participants) agree?

### 2. Why FC Online Match Detail Data
A single match holds per-participant \`matchDetail\` (result, possession, cards, controller), \`shoot\` (shot and goal totals), \`shootDetail[]\` (time, position, type, result, and player per shot), \`pass\`, \`defence\`, and per-player \`player[].status\`: hundreds of interlocking values, a good showcase for quality checks.

### 3. Every Value Can Be Valid While the Whole Is Wrong
\`goalTotal\` must equal \`goalInPenalty + goalOutPenalty + goalPenaltyKick\` and also the number of \`shootDetail\` entries with \`result: 3\` (goal). Relations like this are impractical to check by hand every time, so they become rules.`
      },
      {
        titleKo: '툴 구조와 데이터 흐름',
        titleEn: 'Tool Structure & Data Flow',
        tocKo: '구조',
        tocEn: 'Structure',
        contentKo: `### 1. 데이터 명세(스키마) 참조
- 검사할 항목과 타입, 허용 값을 명세 파일(YAML)에서 읽어 옵니다. 데이터 구조가 바뀌어도 명세만 갱신하면 툴 코드를 고칠 필요가 없습니다.

### 2. 중첩 · 배열 구조 자동 탐색
- \`matchInfo[1].player[5].status.tackle\`처럼 깊이 들어간 값도 경로만으로 찾아 검사합니다.

### 3. 영역별 규칙 모듈과 맥락 분기
- 슈팅 · 패스 · 수비 · 선수 기록처럼 검사 영역마다 규칙을 독립 모듈로 두고, 판정은 모두 이 규칙 모듈에서만 내리도록 일원화해 같은 문제가 두 번 보고되지 않게 했습니다. 매치 종류 같은 맥락에 따라 기대값을 다르게 적용합니다.

### 4. 영상 동기화 · 피치 시각화
- 녹화 영상의 시각과 데이터의 시각을 맞춰 검사 결과에서 해당 장면으로 바로 이동하고, 선수 · 공 · 슈팅 좌표를 2D / 3D 피치 위에 그려 숫자만으로는 안 보이는 이상을 눈으로 확인합니다.

### 5. 품질 리포트 · 탭 단위 확장
- 항목별 Pass / Fail 리포트를 만들고, 이미 알려진 이슈와 유사도로 대조해 새로 확인할 것만 남깁니다. 새 기능은 탭으로 붙이고, 별도 설치 없이 실행되는 프로그램으로 배포합니다.`,
        contentEn: `### 1. Data Specification (Schema) Reference
- Check targets, types, and allowed values are read from spec files (YAML); structural changes only need a spec update, not new code.

### 2. Nested & Array Path Resolution
- Deep values such as \`matchInfo[1].player[5].status.tackle\` are reached by path alone.

### 3. Per-Area Rule Modules with Context Branching
- Each check area (shots, passes, defending, player stats) has its own rule module, and every verdict comes from those modules only, so one problem is never reported twice. Expectations change with context such as match type.

### 4. Video Sync & Pitch Visualization
- Recording time is aligned with data time to jump straight to the scene, and player, ball, and shot positions are drawn on a 2D / 3D pitch to expose problems numbers alone hide.

### 5. Quality Reports & Tab-Based Extension
- Pass / fail reports per item, fuzzy-matched against known issues so only new findings remain. New features plug in as tabs; the tool ships as a no-install executable.`,
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
        VID["경기 녹화 영상"]
        ISS["기존 이슈 목록"]
    end

    subgraph Engine["FastAPI 품질 검사 엔진"]
        SPEC["데이터 명세(스키마) 참조"]
        RULE["영역별 규칙 모듈"]
        CHK["품질 검사 실행기"]
        SYNC["시간 동기화"]
        MATCH["유사도 매칭"]
    end

    subgraph UI["React 대시보드 (탭 확장형)"]
        R1["품질 리포트<br/>(Pass / Fail)"]
        R2["피치 시각화 2D / 3D"]
        R3["문제 장면 재생"]
        R4["품질 추세 트래킹"]
    end

    API --> CHK
    META --> CHK
    SPEC --> CHK
    RULE --> CHK
    CHK --> MATCH
    ISS --> MATCH
    MATCH --> R1
    CHK --> R2
    R1 --> R4
    VID --> SYNC
    CHK --> SYNC
    SYNC --> R3`,
            mermaidChartEn: `flowchart TD
    subgraph Source["Input"]
        API["FC Online match detail data<br/>(match-detail)"]
        META["Metadata<br/>spid · spposition · season · matchtype"]
        VID["Match recording"]
        ISS["Known-issue list"]
    end

    subgraph Engine["FastAPI Quality Check Engine"]
        SPEC["Data spec (schema) reference"]
        RULE["Per-area rule modules"]
        CHK["Quality check runner"]
        SYNC["Time sync"]
        MATCH["Similarity matching"]
    end

    subgraph UI["React Dashboard (tab-based)"]
        R1["Quality report<br/>(pass / fail)"]
        R2["Pitch visualization 2D / 3D"]
        R3["Flagged-scene replay"]
        R4["Quality trend tracking"]
    end

    API --> CHK
    META --> CHK
    SPEC --> CHK
    RULE --> CHK
    CHK --> MATCH
    ISS --> MATCH
    MATCH --> R1
    CHK --> R2
    R1 --> R4
    VID --> SYNC
    CHK --> SYNC
    SYNC --> R3`
          },
          {
            id: 'diag-automation-checks',
            tabTitleKo: '품질 검사 단계',
            tabTitleEn: 'Quality Check Layers',
            titleKo: '품질 검사 단계 (FC Online 매치 상세 데이터 적용)',
            titleEn: 'Quality Check Layers (Applied to FC Online Match Detail)',
            defaultScale: 1.0,
            mermaidChart: `flowchart LR
    IN["matchInfo[]<br/>matchDetail · shoot · shootDetail[]<br/>pass · defence · player[]"]

    subgraph L1["1. 완전성 · 유효성"]
        A1["필수 값 누락 없음<br/>허용 코드 · 타입<br/>좌표 0~1 범위"]
    end
    subgraph L2["2. 정합성 · 요약 ↔ 상세"]
        A2["shootTotal = shootDetail 수<br/>goalTotal = 골 결과 수"]
    end
    subgraph L3["3. 정합성 · 값 사이 관계"]
        A3["성공 ≤ 시도<br/>assist ↔ assistSpId"]
    end
    subgraph L4["4. 일관성 · 참가자 간"]
        A4["점유율 합 100<br/>골 수 ↔ matchResult"]
    end

    OUT["Pass / Fail 품질 리포트<br/>+ 장면 · 좌표 확인"]

    IN --> A1 --> A2 --> A3 --> A4 --> OUT`,
            mermaidChartEn: `flowchart LR
    IN["matchInfo[]<br/>matchDetail · shoot · shootDetail[]<br/>pass · defence · player[]"]

    subgraph L1["1. Completeness · Validity"]
        A1["No required value missing<br/>allowed codes · types<br/>coordinates within 0–1"]
    end
    subgraph L2["2. Consistency · Summary ↔ Detail"]
        A2["shootTotal = shootDetail count<br/>goalTotal = goal-result shots"]
    end
    subgraph L3["3. Consistency · Relations"]
        A3["success ≤ attempt<br/>assist ↔ assistSpId"]
    end
    subgraph L4["4. Agreement · Cross-participant"]
        A4["possession sums to 100<br/>goals ↔ matchResult"]
    end

    OUT["Pass / fail quality report<br/>+ scene · coordinate check"]

    IN --> A1 --> A2 --> A3 --> A4 --> OUT`
          }
        ]
      },
      {
        titleKo: '품질 검사 규칙 상세 (FC Online 매치 데이터 적용 예)',
        titleEn: 'Quality Rules in Detail (Applied to FC Online Match Data)',
        tocKo: '검사 규칙',
        tocEn: 'Rules',
        highlight: true,
        contentKo: `같은 원리를 FC Online 매치 상세 데이터에 적용하면, 아래 검사를 사람의 손을 거치지 않고 자동으로 수행할 수 있습니다. 데이터 품질 기준별로 묶었습니다.

### 1. 완전성 · 유효성 — 있어야 할 값이 올바른 모양으로 있는가
- 슈팅마다 \`goalTime\` · \`x\` · \`y\` · \`type\` · \`result\` · \`spId\`가 빠짐없이 기록되었는지
- \`matchResult\`는 "승"·"무"·"패", \`matchEndType\`은 0·1·2, \`controller\`는 keyboard·pad·etc 중 하나인지
- \`shootDetail[].type\`이 1~12, \`result\`가 1~3처럼 약속된 코드 안에 있는지
- \`x\`, \`y\`, \`assistX\`, \`assistY\` 좌표가 경기장 기준 0~1 범위 안에 있는지

### 2. 정합성 ① 요약 ↔ 상세 — 합계와 내역이 맞는가
- \`shootTotal\`과 \`shootDetail\` 항목 수, \`goalTotal\`과 골로 끝난 슈팅 수가 맞는지
- \`goalTotal = goalInPenalty + goalOutPenalty + goalPenaltyKick\`이 성립하는지
- 선수별 \`player[].status\`의 골·패스 합계가 팀 단위 \`shoot\`·\`pass\` 요약과 맞는지

### 3. 정합성 ② 값 사이의 관계 — 말이 되는 숫자인가
- 성공 수가 시도 수를 넘지 않는지 (\`passSuccess ≤ passTry\`, \`tackleSuccess ≤ tackleTry\`, \`effectiveShootTotal ≤ shootTotal\`, \`goalHeading ≤ shootHeading\`)
- \`assist\`가 false면 \`assistSpId\`가 -1, true면 실제 선수 식별자인지
- \`inPenalty\` 값이 슈팅 좌표가 페널티박스 안에 있는지와 일치하는지

### 4. 일관성 — 양쪽 참가자의 기록이 서로 맞는가
- 두 참가자의 \`possession\` 합이 100인지
- 양쪽 골 수를 비교한 결과가 각자의 \`matchResult\`와 맞는지 (몰수 등 \`matchEndType\` 예외는 별도 처리)

### 5. 메타데이터 · 맥락 검사
- \`spId\`, \`spPosition\`, \`seasonId\`, \`matchType\`이 메타데이터 목록에 실제로 있는 값인지
- \`matchType\`에 따라 기대값이 달라지는 항목은 규칙을 다르게 적용하는지

### 6. 시간 · 장면 확인
- 전·후반, 연장, 승부차기 구간이 함께 담긴 \`goalTime\` 값을 실제 경기 시각으로 풀어, 녹화 영상의 해당 장면과 나란히 확인
- 슈팅·어시스트 좌표를 피치 위에 그려, 의미 없는 기본 좌표로 남은 기록을 눈으로 바로 구별`,
        contentEn: `Applied to FC Online match detail data, the following checks run automatically, grouped by data quality criterion.

### 1. Completeness & Validity — Is Each Value Present and Well-Formed?
- Every shot records \`goalTime\`, \`x\`, \`y\`, \`type\`, \`result\`, and \`spId\`
- \`matchResult\` in 승/무/패, \`matchEndType\` in 0/1/2, \`controller\` in keyboard/pad/etc
- \`shootDetail[].type\` within 1–12 and \`result\` within 1–3
- \`x\`, \`y\`, \`assistX\`, \`assistY\` within the 0–1 pitch range

### 2. Consistency ① Summary ↔ Detail — Do Totals Match Line Items?
- \`shootTotal\` vs number of \`shootDetail\` entries; \`goalTotal\` vs goal-result shots
- \`goalTotal = goalInPenalty + goalOutPenalty + goalPenaltyKick\`
- Per-player \`player[].status\` sums vs team \`shoot\`/\`pass\` summaries

### 3. Consistency ② Relations — Do the Numbers Make Sense?
- Successes never exceed attempts (\`passSuccess ≤ passTry\`, \`tackleSuccess ≤ tackleTry\`, \`effectiveShootTotal ≤ shootTotal\`, \`goalHeading ≤ shootHeading\`)
- \`assist: false\` implies \`assistSpId = -1\`, and \`assist: true\` requires a real player ID
- \`inPenalty\` agrees with whether the shot coordinates fall inside the box

### 4. Cross-Record Agreement — Do Both Participants Agree?
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
        titleKo: '엔지니어링 포인트 — 믿을 수 있고 빠른 검사기 만들기',
        titleEn: 'Engineering Notes — Building a Checker People Trust, and Fast',
        tocKo: '엔지니어링',
        tocEn: 'Engineering',
        contentKo: `> 아래 예시도 모두 FC온라인 매치 데이터에 빗대어 설명합니다.

### 1. 오탐 줄이기 — 경고가 많으면 아무도 믿지 않는다
- **문제**: 명세를 문자 그대로 적용하면 정상 데이터도 문제로 잡힙니다. 어시스트가 없을 때의 \`assistSpId = -1\`, 몰수 경기에서 골 수와 맞지 않는 \`matchResult\`, 승부차기 골이 섞인 \`goalTime\`은 겉보기엔 이상하지만 모두 정상입니다.
- **해결**: 명세상 "없음"을 뜻하는 값과 특정 조건에서만 의미가 있는 값을 규칙에서 구분하고, 관련 값끼리 교차 확인합니다. (예: \`assist\`가 false면 \`assistSpId\`는 -1이어야 정상, true면 실제 선수 ID여야 정상) 판정은 영역별 규칙 모듈 한 곳에서만 내려, 같은 문제가 두 개의 경고로 보고되지 않게 합니다.
- **결과**: 리포트에는 실제 문제만 남고, 사람은 경고를 믿고 바로 확인할 수 있습니다.

### 2. 속도 — 느린 곳을 측정한 뒤에 고치기
- **문제**: 검사 결과를 보여 줄 때 선수 ID(\`spId\`)를 이름으로 바꾸는데, 수만 명 규모의 선수 메타데이터를 매번 처음부터 검색하면 경기 수가 늘수록 급격히 느려집니다.
- **해결**: 추측 대신 프로파일링으로 병목을 찾고, 메타데이터를 한 번만 읽어 사전(dict)으로 캐시합니다. 검사는 별도 스레드에서 돌려 검사 중에도 화면이 멈추지 않게 합니다.
- **결과**: 검사 로직은 그대로 두고 조회 방식만 바꾸기 때문에, 바꾸기 전후 결과 파일의 해시(sha256)를 비교해 결과가 한 글자도 달라지지 않았는지까지 확인합니다.

### 3. 선수 식별 — 같은 선수 카드를 양 팀이 쓸 때
- **문제**: FC온라인에서는 두 참가자가 같은 선수 카드(같은 \`spId\`)를 쓸 수 있습니다. 선수 기록을 \`spId\`만으로 묶으면 두 팀의 기록이 섞입니다.
- **해결**: 어느 참가자(\`matchInfo[]\`)의 기록인지와 \`spId\`를 함께 써서 선수를 식별하고, 피치 위에 그릴 때 애매하면 이벤트 좌표에 가장 가까운 선수로 확정합니다.
- **결과**: "선수별 기록 합계 = 팀 요약" 같은 검사가 올바른 팀 기준으로 계산되고, 피치 위 표시도 올바른 팀 선수에게 연결됩니다.

### 4. 확장성 — 명세 파일만 넣으면 검사 범위가 늘어난다
- 검사 기준을 코드에 박지 않고 YAML 명세에서 읽도록 하고, 영역별 규칙 · 시각화 모듈을 분리했습니다. 새 기록 항목이 생겨도 명세 파일만 추가하면 바로 검사할 수 있는 구조입니다.`,
        contentEn: `> Every example below also uses FC Online match data as the stand-in.

### 1. Cutting False Alarms — Nobody Trusts a Tool That Cries Wolf
- **Problem**: Applying the spec literally flags correct data. \`assistSpId = -1\` when there is no assist, a \`matchResult\` that does not match the goals in a forfeit, and a \`goalTime\` that includes shoot-out goals all look odd but are valid.
- **Fix**: Rules distinguish values the spec defines as "none" from values that only matter under certain conditions, and related values are cross-checked (if \`assist\` is false, \`assistSpId\` must be -1; if true, it must be a real player ID). Verdicts come from one rule module per area, so one problem never shows up as two warnings.
- **Result**: Only real problems stay in the report, so people can trust a warning and act on it.

### 2. Speed — Measure Before You Fix
- **Problem**: Results show player names, converted from player IDs (\`spId\`); searching tens of thousands of player metadata entries from scratch every time gets slow fast as matches pile up.
- **Fix**: Profile instead of guessing, read the metadata once and cache it as a dict, and run checks on a separate thread so the screen never freezes.
- **Result**: Since only the lookup changes, not the check logic, output hashes (sha256) are compared before and after to confirm the results are identical.

### 3. Player Identity — When Both Teams Use the Same Card
- **Problem**: In FC Online both participants can field the same player card (the same \`spId\`). Grouping player stats by \`spId\` alone mixes the two teams.
- **Fix**: Identify players by participant (\`matchInfo[]\`) plus \`spId\`, and when drawing on the pitch, resolve any ambiguity to the player closest to the event position.
- **Result**: Checks such as "player totals = team summary" are computed for the right team, and pitch markers attach to the right team's player.

### 4. Extensibility — Add a Spec File, Get New Checks
- Criteria are read from YAML specs rather than hard-coded, with rule and visualization modules split per area. A new recorded field only needs a spec file to be checked.`
      },
      {
        titleKo: '배운 점 & 다음 단계',
        titleEn: 'Lessons & Next Steps',
        tocKo: '배운 점',
        tocEn: 'Lessons',
        contentKo: `### 1. 데이터는 '관계'로 확인해야 한다
- 값 하나하나가 맞는지보다 요약과 상세, 참가자와 참가자 사이가 서로 맞는지를 볼 때 실제 문제가 드러난다는 점을 배웠습니다.

### 2. 오탐을 줄이는 것이 신뢰를 만든다
- 경고가 너무 많이 뜨는 검사기는 결국 쓰이지 않습니다. 명세가 말하는 "정상"을 정확히 이해하고 맥락에 따라 기대값을 달리하는 것이 툴을 실제로 쓰이게 만드는 핵심이었습니다.

### 3. 고치기 전에 측정한다
- 느린 원인은 예상(검사 로직)과 달리 이름 조회였습니다. 추측 대신 측정으로 병목을 찾고, 고친 뒤 결과가 바뀌지 않았는지까지 확인하는 습관이 생겼습니다.

### 4. 명세를 참조하는 구조는 다른 데이터로도 확장된다
- 검사 기준을 명세에서 가져오는 구조 덕분에 같은 원리를 전혀 다른 데이터에도 적용할 수 있습니다. 실제로 FCO Live Boost Lab 프로젝트에서 넥슨 Open API 응답의 정합성을 확인할 때 같은 방식을 썼습니다.

### 5. 다음 단계
- 새 기능에 맞춘 검사 항목 설계와 자동 검사 범위 확장
- 원하는 검사 영역 · 경기만 골라 보는 필터와 스냅샷 형태의 시각화
- 시각화 화면에서 최신 규칙으로 바로 다시 검사하는 기능`,
        contentEn: `### 1. Check Relationships, Not Just Values
- Real problems appear when summaries, details, and participants are checked against each other.

### 2. Fewer False Alarms Build Trust
- A checker that flags everything gets ignored. Understanding exactly what the spec calls "normal" and adapting expectations to context is what keeps the tool in use.

### 3. Measure Before Fixing
- The slowdown was name lookups, not the checks I suspected. I now find bottlenecks by measuring, and confirm the output is unchanged after the fix.

### 4. Spec-Driven Design Carries Over to Other Data
- Because criteria come from the spec, the same approach works on entirely different data; FCO Live Boost Lab uses it to check Nexon Open API responses.

### 5. Next Steps
- Design checks for new features and widen automatic coverage
- Filters by check area or match, and snapshot-style visualization
- Re-run the latest rules directly from the visualizer`
      }
    ]
  },
  // =========================================================================
  // 3. F125 Tool (실시간 텔레메트리 & AI 음성 엔지니어) — Demo 완성
  // =========================================================================
  {
    id: 'log-entry-f1',
    category: 'Real-Time Telemetry & AI Voice',
    badgeTextKo: 'Demo 완성',
    badgeTextEn: 'Demo Complete',
    badgeType: 'success',
    titleKo: 'F125 Tool — 게임 속 F1 차에 붙는 나만의 AI 레이스 엔지니어',
    titleEn: 'F125 Tool — Your Own AI Race Engineer for the F1 Game',
    tabLabelKo: 'F125 Tool',
    tabLabelEn: 'F125 Tool',
    oneLinerKo: 'F1 게임이 1초에 60번 보내 주는 차량 데이터를 실시간으로 받아 분석하고, 직접 파인튜닝한 레이스 엔지니어 목소리로 무전을 해 주는 심레이싱 코칭 프로그램',
    oneLinerEn: 'A sim-racing coach that reads the 60-per-second car data sent by the F1 game and talks to you over the radio in a race-engineer voice I fine-tuned myself.',
    roleKo: '개인 프로젝트 · 전체 기획, 데이터 수신 · 분석 서버, 무전 규칙, 음성 파인튜닝, 대시보드 · 오버레이',
    roleEn: 'Personal Project · Planning, Data Server, Radio Rules, Voice Fine-Tuning, Dashboard & Overlay',
    period: '2026.07 – 2026.11 (Demo 완성)',
    periodEn: '2026.07 – 2026.11 (Demo Complete)',
    repoUrl: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer',
    techStack: ['Python', 'FastAPI', 'UDP Socket (:20777)', 'WebSocket', 'React & SVG', 'GPT-SoVITS (Few-shot Fine-tuning)', 'faster-whisper', 'Electron Overlay'],

    story: {
      problem: {
        headlineKo: 'F1 게임을 하는 사람에게는, 실제 F1처럼 달리는 중에 귀로 알려 주는 "레이스 엔지니어"가 없었습니다.',
        headlineEn: 'Players of the F1 game have no race engineer talking in their ear the way real F1 drivers do.',
        pointsKo: [
          '실제 F1 드라이버는 운전에만 집중하고, 피트월의 엔지니어가 무전으로 "앞차와 0.8초, DRS 가능", "이번 랩 박스(피트인)"처럼 필요한 정보를 말해 줍니다.',
          '게임 화면에도 숫자는 나오지만, **시속 300km로 코너에 들어가면서 작은 숫자를 읽으면 실수가 납니다.**',
          '주행이 끝난 뒤에도 "어느 코너에서 왜 느렸는지" 알려 주는 사람이 없어, **수만 개의 숫자를 혼자 뒤져야** 했습니다.'
        ],
        pointsEn: [
          'A real F1 driver just drives while the pit-wall engineer radios what matters: "0.8 s to the car ahead, DRS available", "box this lap".',
          'The game does show numbers, but **reading small figures while braking into a corner at 300 km/h causes mistakes.**',
          'After a run, nobody explains which corner cost time and why; you are left **digging through tens of thousands of numbers** alone.'
        ]
      },
      approach: {
        headlineKo: '게임이 이미 내보내는 차량 데이터를 받아, 판단은 규칙으로 하고 말은 AI 목소리로 하는 "나만의 엔지니어"를 만들기로 했습니다.',
        headlineEn: 'Take the car data the game already broadcasts and build a personal engineer: rules make the decisions, an AI voice does the talking.',
        pointsKo: [
          'F1 게임은 설정 하나만 켜면 차의 속도 · 기어 · 페달 · 위치 · 타이어 상태를 **1초에 60번** 네트워크로 내보냅니다. 이 데이터를 받아 해석하면 됩니다.',
          '"제동이 늦었다" 같은 숫자 판단은 빠르고 정확해야 해서 **규칙**으로, 사람처럼 들리는 목소리는 **AI**로 역할을 나눴습니다.',
          '게임이 그래픽카드를 거의 다 쓰기 때문에, 목소리는 달리는 중에 만들지 않고 **미리 만들어 두기로** 했습니다.'
        ],
        pointsEn: [
          'With one setting, the F1 game sends speed, gear, pedals, position, and tyre state **60 times per second** over the network; the job is to receive and interpret it.',
          'Numeric calls such as "you braked late" must be fast and exact, so they use **rules**; sounding human is the job of the **AI**.',
          'The game uses nearly all of the graphics card, so voice lines are **made in advance** rather than generated mid-race.'
        ]
      },
      method: {
        headlineKo: '초당 60번 들어오는 차량 데이터, 3분 36초 분량의 목소리 녹음, 24개 서킷의 코너 지도로 만들었습니다.',
        headlineEn: 'Built from 60 Hz car telemetry, 3 min 36 s of recorded voice, and corner maps for 24 tracks.',
        data: [
          {
            nameKo: '차량 텔레메트리 (UDP)',
            nameEn: 'Car telemetry (UDP)',
            descKo: '속도 · 기어 · 페달 · 위치 · 타이어 상태 등, 게임이 **1초에 60번** 보내는 데이터 묶음(패킷)',
            descEn: 'Speed, gear, pedals, position, and tyres: data packets the game sends **60 times per second**'
          },
          {
            nameKo: '서킷 코너 맵 24개',
            nameEn: 'Corner maps for 24 tracks',
            descKo: '서킷마다 공식 코너 번호와 위치를 정리해, 어느 코너에서 무슨 일이 있었는지 짚는 기준',
            descEn: 'Official turn numbers and positions for each track, used to pin events to the right corner'
          },
          {
            nameKo: '레이스 엔지니어 목소리 녹음',
            nameEn: 'Race-engineer voice recordings',
            descKo: '9개 클립, 총 **3분 36초**. 목소리 학습 재료',
            descEn: '9 clips, **3 min 36 s** in total: the training material for the voice'
          }
        ],
        methods: [
          {
            nameKo: '실시간 패킷 해석',
            nameEn: 'Real-time packet decoding',
            descKo: '게임사가 공개한 형식대로 0과 1을 "속도 287km/h, 7단" 같은 값으로 변환',
            descEn: 'Turns 0s and 1s into values such as "287 km/h, 7th gear" using the game\'s published format'
          },
          {
            nameKo: '규칙 기반 판단 엔진',
            nameEn: 'Rule-based decision engine',
            descKo: '세션 최고 랩과 비교해 기준을 벗어난 순간만 무전 (예: 제동 지점 5~45m 차이, 무전 사이 최소 6초)',
            descEn: 'Compares with the session\'s best lap and calls only real deviations (e.g. braking point off by 5–45 m, at least 6 s between calls)'
          },
          {
            nameKo: '퓨샷 음성 파인튜닝 (GPT-SoVITS)',
            nameEn: 'Few-shot voice fine-tuning (GPT-SoVITS)',
            descKo: '이미 말할 줄 아는 AI 모델에 짧은 녹음만 들려줘 "이 사람 목소리"로 맞춤',
            descEn: 'Nudges a model that already speaks toward one person\'s voice using a short recording'
          },
          {
            nameKo: 'AI 받아쓰기로 품질 채점 (Whisper)',
            nameEn: 'AI transcription as a quality check (Whisper)',
            descKo: '만든 음성을 다시 글자로 바꿔, 대본과 가장 같은 결과만 채택',
            descEn: 'Transcribes each generated line back to text and keeps only the take closest to the script'
          }
        ]
      },
      solution: {
        headlineKo: '데이터 받기 → 해석 → 코너별 기록 → 판단 → 무전까지 이어지는 프로그램을 만들고, 대시보드와 TV 중계 오버레이로 보여 줬습니다.',
        headlineEn: 'I built a program that runs from receiving data through decoding, per-corner logging, decisions, and radio calls, shown on a dashboard and a TV-style overlay.',
        flow: [
          { titleKo: '게임이 데이터 보내기 (초당 60번)', titleEn: 'Game sends data (60 Hz)' },
          { titleKo: '해석 · 랩 · 코너별 기록', titleEn: 'Decode & log laps / corners' },
          { titleKo: '엔지니어 두뇌가 상황 판단', titleEn: 'Engineer brain decides' },
          { titleKo: '파인튜닝한 목소리로 무전', titleEn: 'Radio in the fine-tuned voice' },
          { titleKo: '대시보드 · TV 오버레이 표시', titleEn: 'Dashboard & TV overlay' }
        ],
        pointsKo: [
          '2랩부터 코너를 빠져나올 때마다 이번 세션 가장 빠른 랩과 제동 지점을 비교해 **"제동이 13m 빨랐어"**처럼 바로 알려 줍니다. 레이스에서는 페이스 · 앞차 간격 · 피트인 시점도 알려 줍니다.',
          '"앞차 잡을 수 있어?", "언제 피트인 해야 해?" 같은 **7가지 질문**에 지금 데이터로 계산한 숫자와 함께 음성으로 답합니다. (한국어 · 영어)',
          '무전 · 답변 문장 **639개를 미리 만들어 두고** 상황에 맞는 파일만 골라 재생해, 게임이 끊기지 않고 무전이 바로 나옵니다.',
          '세이프티카 · 피트인 랩은 비교에서 빼고 무전 사이에 간격을 두어 **엉뚱한 무전이 나오지 않게** 했습니다.'
        ],
        pointsEn: [
          'From lap 2, after every corner it compares the braking point with the session\'s fastest lap and says things like **"braking was 13 m early"**; in races it also covers pace, the gap ahead, and when to pit.',
          '**Seven questions** such as "Can I catch the car ahead?" or "When should I pit?" are answered by voice with numbers computed from live data (Korean or English).',
          '**639 radio and answer lines are pre-made**, and the app just picks and plays the right one, so calls come instantly without stuttering the game.',
          'Safety-car and pit laps are excluded and calls are spaced out, so **no nonsense calls go out**.'
        ]
      },
      result: {
        headlineKo: '실제 주행 중에 엔지니어가 데이터를 근거로 말을 거는 데모를 완성했습니다.',
        headlineEn: 'I completed a working demo in which the engineer talks to you during a real run, backed by live data.',
        metrics: [
          {
            valueKo: '초당 60회',
            valueEn: '60 per second',
            labelKo: '실시간으로 받아 해석하는 게임 데이터',
            labelEn: 'Game data received and decoded live',
            noteKo: '실제 게임 연결 · 녹화 주행 리플레이 모두 지원',
            noteEn: 'Works live or on recorded replays'
          },
          {
            valueKo: '3분 36초 → 639개',
            valueEn: '3:36 → 639 lines',
            labelKo: '녹음 분량 → 만든 무전 · 답변 음성',
            labelEn: 'Recording length → radio and answer lines',
            noteKo: '집 그래픽카드(RTX 3070 8GB)로 몇 분 만에 학습',
            noteEn: 'Trained in minutes on a home RTX 3070 (8 GB)'
          },
          {
            valueKo: '0.92',
            valueEn: '0.92',
            labelKo: '생성 음성과 대본의 평균 일치율',
            labelEn: 'Average match between generated voice and script',
            noteKo: '1에 가까울수록 대본과 똑같이 발음',
            noteEn: 'Closer to 1 means closer to the script'
          },
          {
            valueKo: '24개 · 7종',
            valueEn: '24 · 7',
            labelKo: '코너 맵을 갖춘 서킷 · 엔지니어에게 할 수 있는 질문',
            labelEn: 'Tracks with corner maps · questions you can ask'
          }
        ],
        pointsKo: [
          '실버스톤 실제 주행 데모 영상(약 1분 40초)에서 TV 중계 오버레이와 엔지니어 무전이 함께 동작하는 모습을 볼 수 있습니다. (아래 기술 상세의 "데모 · 화면")'
        ],
        pointsEn: [
          'The Silverstone demo video (about 1 min 40 s) under "Demo & screens" below shows the TV overlay and engineer radio working together in a real run.'
        ]
      }
    },

    sections: [
      {
        titleKo: '만든 기능',
        titleEn: 'What I Built',
        tocKo: '기능',
        tocEn: 'Features',
        contentKo: `### 1. 실시간 대시보드
- 지금 속도 · 기어 · 페달, 랩별 기록, 코너별 진입 · 정점 · 탈출 속도와 제동 지점을 보여 줍니다. 녹화한 주행을 1~4배속으로 다시 볼 수도 있습니다.

### 2. 엔지니어 자동 무전
- 프랙티스 · 퀄리파잉 · 레이스를 스스로 알아보고, 상황에 맞춰 말합니다.
- **코너 제동**: 2랩부터, 코너를 빠져나오면 이번 세션 가장 빠른 랩과 제동 지점을 비교해 "제동이 13m 빨랐어"처럼 알려 줍니다.
- **페이스 · 앞차 간격 · 피트**: 랩 타임이 좋아지거나 떨어지면, 앞차와의 간격, 타이어가 많이 닳아 피트인할 때를 알려 줍니다.
- **프랙티스 셋업 분석**: 내 베스트 랩을 프랙티스 기준 차(다른 차 최고 기록)와 비교해 최고 속도와 저속 · 중속 · 고속 코너별 속도 차이를 보여 주고, 타이어 공기압 · 윙 · 밸런스를 항목마다 "유지 / 변경 추천"으로 판정해 "FL 27 → 27.4 psi"처럼 바꿀 값을 제안합니다.
- **팀 라디오 패널**: 방금 나간 무전을 "7랩 제동 지점 vs 기준 랩"처럼 근거 숫자와 함께 자막으로 보여 줍니다.
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
- **Practice setup analysis**: compares my best lap with the practice reference car (the best rival time) for top speed and slow / medium / fast corner speeds, rates tyre pressure, wing, and balance as "keep" or "change", and suggests values such as "FL 27 → 27.4 psi".
- **Team radio panel**: shows each call as a caption with the numbers behind it (e.g. lap 7 braking point vs the reference lap).
- At least 6 seconds between calls; safety-car and pit laps are excluded so no false calls go out.

### 3. Ask the Engineer
- Seven questions such as "How can I win?", "Can I catch the car ahead?", "Where am I losing time?", and "When should I pit?" are answered by voice with the numbers behind them (Korean or English).

### 4. Corner Maps for 24 Tracks
- Official turn numbers and positions for every track, so events are pinned to the right corner.

### 5. TV Broadcast Overlay
- A transparent broadcast-style timing tower, lap card, and speed / gear / pedal HUD over the game, built by connecting an open-source (MIT) overlay to our data.`
      },
      {
        titleKo: '시스템 구조 — 데이터가 무전이 되기까지',
        titleEn: 'System Architecture — From Data to Radio',
        tocKo: '구조',
        tocEn: 'Architecture',
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
        titleKo: '목소리 파인튜닝 쉽게 이해하기',
        titleEn: 'Voice Fine-Tuning, Explained Simply',
        tocKo: '목소리 파인튜닝',
        tocEn: 'Voice fine-tuning',
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
        titleKo: '데모 영상 & 화면',
        titleEn: 'Demo Video & Screens',
        tocKo: '데모 · 화면',
        tocEn: 'Demo & screens',
        highlight: true,
        contentKo: `### Demo 완성 — 실제 주행에서 엔지니어가 말을 겁니다
아래 데모 영상(약 1분 40초)은 실버스톤 프랙티스 1에서 실제로 주행하는 화면입니다. 게임 화면 위에서 TV 중계 오버레이와 헤일로 HUD가 실시간으로 움직이고, 엔지니어 무전이 함께 나옵니다.

게임을 켜고 세션에 들어가면 대시보드가 데이터를 받기 시작하고, 2랩부터 코너 제동 무전이, 레이스에서는 페이스 · 앞차 간격 · 피트 무전이 나옵니다. 엔지니어에게 질문하면 지금 데이터로 계산한 답을 목소리로 들려주고, 게임 화면 위에는 TV 중계 오버레이가 함께 뜹니다. 녹화한 주행은 리플레이로 다시 볼 수 있습니다.`,
        contentEn: `### Demo Complete — The Engineer Talks During a Real Run
The demo video below (about 1 min 40 s) is a real practice run at Silverstone, with the TV overlay and halo HUD updating live over the game and the engineer radio playing along.

Enter a session and the dashboard starts receiving data; corner braking calls begin on lap 2, and in races you also get pace, gap, and pit calls. Ask the engineer and it answers by voice from live data, while the TV overlay runs on top of the game. Recorded runs can be replayed.`,
        video: {
          src: f1DemoVideo,
          poster: f1DemoPoster,
          titleKo: '데모 영상 — 실버스톤 프랙티스 1 실제 주행 (약 1분 40초)',
          titleEn: 'Demo Video — Live Practice Run at Silverstone (about 1 min 40 s)',
          descKo: '게임 화면 위에서 순위표 · 섹터 카드 · 랩 델타 · 헤일로 HUD(속도 · 기어 · 코너 번호)가 텔레메트리에 맞춰 실시간으로 움직이고, 엔지니어 무전이 함께 나옵니다. 소리를 켜고 보세요.',
          descEn: 'The timing tower, sector cards, lap delta, and halo HUD (speed, gear, turn number) update live from telemetry over the game, with the engineer radio playing. Turn the sound on.'
        },
        screenshots: [
          {
            src: f1Img5,
            titleKo: '1. TV 중계 오버레이 · 헤일로 HUD (오버레이 그래픽)',
            titleEn: '1. TV Broadcast Overlay & Halo HUD (Overlay Graphics)',
            descKo: '게임 화면 위에 투명하게 겹쳐 그리는 중계 그래픽만 따로 본 모습입니다. 왼쪽 순위표(랩 수 · 간격 · 타이어), 패스티스트 랩 배너, 오른쪽 섹터 카드, 가운데 헤일로 HUD(속도 · 기어 · RPM · 브레이크/스로틀 · 배터리 · 오버테이크 · 액티브 에어로 · 코너 번호 T15)가 모두 게임이 보내는 텔레메트리로 움직입니다.',
            descEn: 'The broadcast graphics on their own, as drawn transparently over the game: timing tower (lap count, intervals, tyres), fastest-lap banner, sector card, and a centred halo HUD showing speed, gear, RPM, brake / throttle, battery, overtake, active aero, and the turn number (T15), all driven by the game’s telemetry.'
          },
          {
            src: f1Img1,
            titleKo: '2. 세션 설정 및 리플레이 (Session Configuration & Replay)',
            titleEn: '2. Session Configuration & Replay',
            descKo: '실시간 게임 연결(UDP 20777)과 녹화 주행 리플레이 중 선택하고, 한 · 영 전환, 단위(km/h · mph), 엔지니어 목소리, 무전(TTS) · TV 오버레이 켜기를 고르는 시작 화면입니다.',
            descEn: 'Start screen to choose live game (UDP 20777) or a recorded replay, language, units, engineer voice, and radio (TTS) / TV overlay toggles.'
          },
          {
            src: f1Img6,
            titleKo: '3. 랩 기록 · 차량 셋업 · 팀 라디오 (Lap Archive, Setup & Team Radio)',
            titleEn: '3. Lap Archive, Car Setup & Team Radio',
            descKo: '랩별 기록과 베스트 랩 대비 차이, 고른 랩의 코너별 카드(진입 · 정점 · 탈출), 차량 셋업 값과 4개 타이어 마모율을 보여 줍니다. 오른쪽 아래 팀 라디오 패널에는 방금 나간 무전("9m 늦게 제동")과 근거 숫자, 엔지니어에게 질문하는 버튼이 있습니다.',
            descEn: 'Lap history with deltas, per-corner cards (entry / apex / exit) for the chosen lap, car setup, and tyre wear. The team radio panel shows the latest call ("braking 9 m late") with its numbers and the ask-the-engineer buttons.'
          },
          {
            src: f1Img7,
            titleKo: '4. 코너별 정밀 분석 표 (Turn-by-Turn Matrix)',
            titleEn: '4. Turn-by-Turn Matrix',
            descKo: '실버스톤의 모든 코너를 실제 이름(Abbey, Farm, Village …)과 함께 진입 · 정점 · 탈출 속도, 기어, 스로틀 · 브레이크, 제동 지점, 최대 횡G, 앞차 대비 시간 차이로 정리하고, 랩을 바꿔 가며 비교합니다.',
            descEn: 'Every Silverstone corner by its real name (Abbey, Farm, Village …) with entry / apex / exit speed, gear, throttle / brake, braking point, peak lateral G, and time vs the car ahead, switchable by lap.'
          },
          {
            src: f1Img8,
            titleKo: '5. 서킷 맵 · 섹터 분석 (Circuit Map & Sectors)',
            titleEn: '5. Circuit Map & Sector Analysis',
            descKo: '주행 라인 위에 코너 번호(T1~T18)를 찍고, 코너를 누르면 그 코너의 진입 · 정점 · 탈출 기록이 열립니다. 오른쪽에는 랩별 공식 섹터 기록과 경쟁 차 대비 섹터별 시간 차이를 보여 줍니다.',
            descEn: 'Turn numbers (T1–T18) on the racing line; click a corner for its entry / apex / exit data. On the right, official sector times per lap and sector deltas against a rival.'
          },
          {
            src: f1Img9,
            titleKo: '6. 프랙티스 셋업 분석 (Practice Setup Analysis)',
            titleEn: '6. Practice Setup Analysis',
            descKo: '내 베스트 랩을 프랙티스 기준 차와 비교해 최고 속도와 저 · 중 · 고속 코너 속도 차이를 보여 주고, 타이어 공기압 · 윙 · 밸런스를 항목별로 "유지 / 변경 추천"으로 판정해 바꿀 값을 제안합니다.',
            descEn: 'Compares my best lap with the practice reference car (top speed and slow / medium / fast corner speeds), rates tyre pressure, wing, and balance as keep or change, and suggests new values.'
          }
        ]
      },
      {
        titleKo: '배운 점 & 다음 단계',
        titleEn: 'Lessons & Next Steps',
        tocKo: '배운 점',
        tocEn: 'Lessons',
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
    titleKo: 'NEIS Letter Counter — 생활기록부 바이트 계산 & 엑셀 중복 문장 탐지 도구',
    titleEn: 'NEIS Letter Counter — Byte Counter & Excel Duplicate-Sentence Finder for School Records',
    tabLabelKo: 'NEIS 문자 계산기',
    tabLabelEn: 'NEIS Letter Counter',
    oneLinerKo: '선생님들이 학교생활기록부를 쓸 때 나이스(NEIS) 규격 그대로 글자 수(바이트)를 계산하고, 엑셀 속 학생 간 중복 문장을 행 번호로 바로 찾아 주는 도구입니다. 데이터는 브라우저 밖으로 나가지 않습니다.',
    oneLinerEn: 'A tool for teachers writing school records: it counts bytes exactly the way NEIS does and pinpoints duplicate sentences across students by Excel row number, without the data ever leaving the browser.',
    roleKo: '프론트엔드 개발 (바이트 계산 엔진 · SheetJS 엑셀 파서 · 중복 탐지 구현)',
    roleEn: 'Frontend development (byte engine, SheetJS Excel parser, duplicate detection)',
    period: '2026.09 (완료)',
    periodEn: '2026.09 (Completed)',
    techStack: ['React', 'JavaScript (ES6+)', 'SheetJS (xlsx)', 'RegEx', 'Client In-Memory'],

    story: {
      problem: {
        headlineKo: '학교생활기록부 작성 시기마다, 선생님들은 "바이트 초과" 오류와 중복 문장 찾기로 밤늦게까지 일했습니다.',
        headlineEn: 'Every school-record season, teachers stayed late fighting "byte limit exceeded" errors and hunting for duplicate sentences.',
        pointsKo: [
          '교육행정정보시스템(NEIS)은 글자 수를 **독자 규격**(한글 3바이트, 줄바꿈 2바이트 등)으로 셉니다. 일반 글자 수 세기 사이트로 맞춘 문장도 입력하면 길이 초과로 튕기기 일쑤였습니다.',
          '수백 명 학생의 평가 문장 중 서로 겹치는 문장을 엑셀에서 Ctrl+F로 하나씩 찾느라 **1시간 이상**이 걸렸습니다.',
          '학생 평가는 민감한 개인정보라 **외부 서버에 올리는 도구는 쓸 수 없었습니다.**'
        ],
        pointsEn: [
          'NEIS, the national school administration system, counts length with **its own rules** (Hangul 3 bytes, line break 2 bytes, etc.), so text sized with ordinary counters was often rejected as too long.',
          'Finding overlapping sentences across hundreds of students meant pressing Ctrl+F in Excel one sentence at a time: **over an hour** of work.',
          'Student evaluations are sensitive personal data, so **tools that upload to a server were off-limits.**'
        ]
      },
      approach: {
        headlineKo: '데이터를 어디에도 보내지 않고 브라우저 안에서만 계산하는, NEIS 규격 그대로의 도구를 만들기로 했습니다.',
        headlineEn: 'Build a tool that follows the NEIS rules exactly and does all its work inside the browser, sending data nowhere.',
        pointsKo: [
          'NEIS가 실제로 세는 방식을 **그대로 따라 계산**하면 입력 오류를 미리 막을 수 있습니다.',
          '엑셀 파일을 서버에 올리지 않고 **브라우저 메모리 안에서만** 읽어, 개인정보가 밖으로 나가지 않게 했습니다.',
          '중복은 "어느 행과 겹치는지" **행 번호로 바로** 알려 주고, 그 자리에서 고쳐 다시 엑셀로 저장할 수 있게 했습니다.'
        ],
        pointsEn: [
          'Counting **exactly the way NEIS does** prevents input errors before they happen.',
          'Excel files are read **only in browser memory**, never uploaded, so personal data never leaves the machine.',
          'Duplicates are reported **by row number** and can be fixed in place and saved back to Excel.'
        ]
      },
      method: {
        headlineKo: '선생님들이 쓰는 엑셀 파일을 그대로 입력으로 받아, 규격 계산과 문장 단위 비교로 처리했습니다.',
        headlineEn: 'The teachers\' own Excel files are the input, processed with spec-exact counting and sentence-level comparison.',
        data: [
          {
            nameKo: '생활기록부 엑셀 파일',
            nameEn: 'School-record Excel files',
            descKo: '학생별 평가 문장이 행(Row)마다 담긴 시트 (수백 행)',
            descEn: 'Sheets with one student\'s evaluation per row (hundreds of rows)'
          },
          {
            nameKo: 'NEIS 바이트 규격',
            nameEn: 'NEIS byte rules',
            descKo: '한글 3바이트, 영문 · 숫자 · 공백 1바이트, 줄바꿈 2바이트',
            descEn: 'Hangul 3 bytes; letters, digits, and spaces 1 byte; line break 2 bytes'
          }
        ],
        methods: [
          {
            nameKo: '브라우저 인메모리 처리 (SheetJS)',
            nameEn: 'In-browser processing (SheetJS)',
            descKo: '엑셀을 서버 전송 없이 브라우저 안에서 읽고 씀',
            descEn: 'Reads and writes Excel inside the browser with no server transfer'
          },
          {
            nameKo: '유니코드 기반 바이트 계산',
            nameEn: 'Unicode-based byte counting',
            descKo: '글자마다 종류(한글 · 영문 · 공백 · 줄바꿈)를 판별해 NEIS 방식으로 합산',
            descEn: 'Classifies every character (Hangul, Latin, space, line break) and sums bytes the NEIS way'
          },
          {
            nameKo: '문장 분리 + 해시맵 색인',
            nameEn: 'Sentence splitting + hash-map index',
            descKo: '글을 문장 단위로 나누고, 같은 문장이 나온 행 번호를 표(해시맵)에 기록해 즉시 찾음',
            descEn: 'Splits text into sentences and records the rows each sentence appears in, for instant lookup'
          }
        ]
      },
      solution: {
        headlineKo: '엑셀을 올리면 2초 안에 중복 행을 표시하고, 고친 내용을 바로 엑셀로 내려받는 도구를 만들었습니다.',
        headlineEn: 'I built a tool that marks duplicate rows within 2 seconds of loading an Excel file and exports the edits straight back to Excel.',
        flow: [
          { titleKo: '엑셀 파일 선택 (서버 전송 없음)', titleEn: 'Pick an Excel file (no upload)' },
          { titleKo: 'NEIS 규격 바이트 계산', titleEn: 'Count bytes the NEIS way' },
          { titleKo: '문장 단위 중복 탐지', titleEn: 'Detect duplicate sentences' },
          { titleKo: '중복 행 번호 표시', titleEn: 'Show duplicate row numbers' },
          { titleKo: '수정 후 엑셀 내려받기', titleEn: 'Edit and download Excel' }
        ],
        pointsKo: [
          '"Row 5, Row 19와 중복"처럼 **겹치는 위치를 행 번호로** 보여 줍니다.',
          '화면에서 문장을 고치면 바이트 수와 중복 여부가 **즉시 다시 계산**됩니다.',
          '수정 사항을 반영한 .xlsx 파일을 **한 번에 내려받을** 수 있습니다.'
        ],
        pointsEn: [
          'Overlaps are shown **by row number**, e.g. "duplicate of Row 5, Row 19".',
          'Editing a sentence on screen **recalculates** bytes and duplicates instantly.',
          'The edited sheet downloads as an .xlsx file **in one click**.'
        ]
      },
      result: {
        headlineKo: '1시간 넘게 걸리던 중복 확인이 2초로 줄었고, NEIS 입력 시 길이 초과 오류를 미리 막을 수 있게 되었습니다.',
        headlineEn: 'Duplicate checks dropped from over an hour to 2 seconds, and NEIS length errors are caught before entry.',
        metrics: [
          {
            valueKo: '1시간+ → 2초',
            valueEn: '1 h+ → 2 s',
            labelKo: '수백 행 엑셀의 중복 문장 확인',
            labelEn: 'Duplicate check across hundreds of rows',
            noteKo: '확인 작업 시간 90% 이상 단축',
            noteEn: '90%+ less checking time'
          },
          {
            valueKo: '100%',
            valueEn: '100%',
            labelKo: 'NEIS 바이트 계산 규격 일치',
            labelEn: 'Match with NEIS byte rules',
            noteKo: '일반 글자 수 세기와 다른 독자 규격 그대로 계산',
            noteEn: 'The same rules NEIS uses, unlike generic counters'
          },
          {
            valueKo: '0건',
            valueEn: '0',
            labelKo: 'NEIS 입력 시 길이 초과 반려',
            labelEn: 'Length rejections when entering into NEIS',
            noteKo: '입력 전에 미리 확인',
            noteEn: 'Caught before entry'
          },
          {
            valueKo: '0건',
            valueEn: '0',
            labelKo: '외부 서버로 전송되는 데이터',
            labelEn: 'Data sent to any server',
            noteKo: '모든 처리를 브라우저 안에서',
            noteEn: 'Everything runs in the browser'
          }
        ]
      }
    },

    sections: [
      {
        titleKo: '설계 원칙 — 개인정보 보호와 규격 준수',
        titleEn: 'Design Principles — Privacy and Spec Compliance',
        tocKo: '설계 원칙',
        tocEn: 'Design principles',
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
        titleKo: '구현 상세',
        titleEn: 'Implementation Details',
        tocKo: '구현',
        tocEn: 'Implementation',
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
        titleKo: '배운 점',
        titleEn: 'Lessons Learned',
        tocKo: '배운 점',
        tocEn: 'Lessons',
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
    oneLinerKo: '실제 UEFA 챔피언스리그 경기 기록으로 FC온라인 챔스 카드의 능력치 변화(라이브 부스트)를 확률로 예측하고, 유저 ID 하나로 공식경기 기록을 분석해 플레이 스타일과 고칠 점을 진단하는 분석 서비스입니다.',
    oneLinerEn: 'An analytics service that predicts, as probabilities, how FC Online Champions League cards will change with real UCL performances (Live Boost), and diagnoses play style and fixes from official match records with a single user ID.',
    roleKo: '개인 프로젝트 · 기획, 데이터 수집, 모델링, 풀스택 개발',
    roleEn: 'Personal Project · Planning, Data Collection, Modeling & Full-Stack Development',
    period: '2026.11 – 현재 (Active)',
    periodEn: '2026.11 – Present (Active)',
    techStack: ['Python', 'FastAPI', 'React & TypeScript', 'FotMob Crawling', 'Nexon Open API', 'Data Mining', 'pytest'],

    story: {
      problem: {
        headlineKo: 'FC온라인 챔스 카드의 능력치는 실제 경기 활약에 따라 오르내리는데(라이브 부스트), 그 기준이 공개되지 않아 유저는 감으로 짐작할 수밖에 없었습니다.',
        headlineEn: 'FC Online Champions League cards rise and fall with real-match performance (Live Boost), but the criteria are unpublished, so players could only guess.',
        pointsKo: [
          '챔피언스리그 시즌 카드는 실제 경기 활약에 따라 라운드마다 능력치(OVR)가 바뀌지만, 이를 정하는 경기 평점은 공개되지 않습니다. 카드를 **살지, 강화할지 판단할 근거가 없었습니다.**',
          '공식경기 전적은 승 · 무 · 패 숫자뿐이라 **"왜 지는지, 누구에게 약한지, 잘하는 사람과 무엇이 다른지"** 알 수 없었습니다.',
          '부스트 결과, 실제 경기 기록, 게임 전적이 **서로 다른 곳에 흩어져 있고 선수 이름 표기도 달라**, 데이터를 모으고 잇는 일부터 큰 작업이었습니다.'
        ],
        pointsEn: [
          'Champions League season cards change OVR every round based on real performances, but the match ratings behind it are never published, leaving **no basis for deciding whether to buy or upgrade a card**.',
          'Official match history shows only wins, draws, and losses, so there was no way to see **why you lose, who you struggle against, or how you differ from strong players**.',
          'Boost results, real match stats, and game records **live in different places with different player-name spellings**, so even gathering and linking the data was a big job.'
        ]
      },
      approach: {
        headlineKo: '과거 시즌의 실제 경기 기록과 부스트 결과를 모아 "어떤 활약이 부스트로 이어지는지"를 데이터로 찾고, 전적은 상위 랭커와 비교해 진단하기로 했습니다.',
        headlineEn: 'Collect past seasons\' real match stats and boost results to learn which performances lead to boosts, and diagnose match records by comparing them with top rankers.',
        pointsKo: [
          '정답(실제 부스트 결과)이 있는 과거 시즌으로 모델을 만들고, **학습에 쓰지 않은 시즌으로 실력을 검증**합니다.',
          '"+1" 같은 숫자 하나가 아니라 **"오를 확률"로** 보여 줘서, 예측이 빗나가도 판단에 쓸 수 있게 했습니다.',
          '전적분석은 표를 늘어놓는 대신 **"나는 어떤 유형? → 누구에게 약한가? → 무엇을 고칠까?"** 질문 순서로 답하도록 설계했습니다.'
        ],
        pointsEn: [
          'Build the model on past seasons where the answers (actual boosts) are known, and **test it on a season it never saw**.',
          'Show **the probability of a rise** rather than a lone "+1", so the prediction stays useful even when it misses.',
          'Answer match analysis in the order players ask: **what kind of player am I → who beats me → what should I fix**, instead of dumping tables.'
        ]
      },
      method: {
        headlineKo: '세 시즌의 실제 경기 기록, 부스트 정답 723명, 넥슨 공식경기 로그를 데이터 마이닝으로 분석했습니다.',
        headlineEn: 'Three seasons of real match stats, boost ground truth for 723 players, and Nexon match logs, analyzed through data mining.',
        data: [
          {
            nameKo: '실제 경기 세부 기록 (FotMob)',
            nameEn: 'Real match details (FotMob)',
            descKo: '경기에 출전한 양 팀 **모든 선수의 경기별 세부 기록**, 세 시즌 분량',
            descEn: '**Per-match details for every player on both teams**, three seasons'
          },
          {
            nameKo: '라이브 부스트 정답 데이터',
            nameEn: 'Live Boost ground truth',
            descKo: '넥슨 공식 발표 결과 **723명** (발표 표가 없는 팀은 다른 공식 데이터로 복원)',
            descEn: 'Nexon\'s announced results for **723 players** (teams without a table rebuilt from other official data)'
          },
          {
            nameKo: '공식경기 매치 로그 (넥슨 Open API)',
            nameEn: 'Official match logs (Nexon Open API)',
            descKo: '유저 ID로 받는 최근 공식경기 기록과 상위 랭커의 경기 기록',
            descEn: 'Recent ranked matches fetched by user ID, plus top rankers\' matches'
          }
        ],
        methods: [
          {
            nameKo: '데이터 마이닝 · 모델 비교',
            nameEn: 'Data mining & model comparison',
            descKo: '단순한 기준선에서 시작해 여러 후보 모델을 같은 조건으로 비교하며 정확도를 끌어올림 (구체적 구성은 비공개)',
            descEn: 'Start from simple baselines and compare candidate models under identical conditions (internals not disclosed)'
          },
          {
            nameKo: '엄격한 검증 설계',
            nameEn: 'Strict validation design',
            descKo: '"처음 보는 팀"을 맞히는 조건으로 검증하고, 한 시즌은 끝까지 숨겨 둔 최종 시험용으로 사용',
            descEn: 'Validate on unseen teams and hold one season back as a final test'
          },
          {
            nameKo: '확률 예측',
            nameEn: 'Probabilistic output',
            descKo: '부스트별 확률 · 가장 유력한 값 · 유력 범위 · 오를 확률을 함께 출력',
            descEn: 'Per-boost odds, most likely value, likely range, and rise probability together'
          },
          {
            nameKo: '랭커 비교 분석',
            nameEn: 'Ranker benchmarking',
            descKo: '6가지 플레이 유형 점수를 매기고, 나와 비슷한 랭커와 견줘 상성 · 개선점을 도출',
            descEn: 'Scores six play styles and compares with similar rankers to find matchups and fixes'
          }
        ]
      },
      solution: {
        headlineKo: '경기가 끝나면 수집 → 예측 → 화면 표시까지 자동으로 이어지는 서비스를 만들고, 전적분석은 유저 ID 하나로 끝나게 했습니다.',
        headlineEn: 'I built a service where collection, prediction, and display run automatically after each match, and match analysis needs only a user ID.',
        flow: [
          { titleKo: '전 선수 경기 기록 수집 (FotMob)', titleEn: 'Collect full-squad match data (FotMob)' },
          { titleKo: '라이브 부스트 정답 정리', titleEn: 'Prepare boost ground truth' },
          { titleKo: '데이터 마이닝으로 모델 탐색', titleEn: 'Search models via data mining' },
          { titleKo: '선수별 예측 확률 표시', titleEn: 'Show per-player odds' },
          { titleKo: '유저 ID → 플레이 스타일 리포트', titleEn: 'User ID → play style report' }
        ],
        pointsKo: [
          '라운드 경기가 끝나면 넥슨 발표 전에 **선수별 예측 OVR과 오를 확률**을 보여 주고, 발표가 나오면 같은 화면에서 적중 여부(✓ / ✕)를 채웁니다.',
          '유저 ID 하나로 **플레이 스타일 리포트 → 상성표 → 개선점 → 슈팅 분석 → 선수 구성 처방**까지 한 화면에서 진단합니다.',
          '실제 API 응답을 공식 문서와 대조하는 **정합성 확인**을 넣어, 화면의 숫자가 게임 안 기록과 맞도록 했습니다. (데이터 품질 가드와 같은 접근)',
          '요청 한도가 엄격한 API에 맞춰 수집 순서를 다시 짜고, 저장된 데이터로 다시 분석할 때는 API를 한 번도 부르지 않게 했습니다.'
        ],
        pointsEn: [
          'When a round ends, **each player\'s predicted OVR and rise odds** appear before Nexon announces, and hits (✓ / ✕) are filled in on the same screen afterward.',
          'One user ID produces a **play style report → matchup board → fixes → shot analysis → squad prescriptions**, all on one screen.',
          '**Integrity checks** compare real API responses with the official docs so on-screen numbers match the game (the same approach as the Data Quality Guard).',
          'Collection was reordered to fit a tightly rate-limited API, and re-analysis from stored data makes zero API calls.'
        ]
      },
      result: {
        headlineKo: '학습에 쓰지 않은 시즌에서 예측 적중률을 45.2%에서 56.0%로 끌어올렸고, 전적분석 첫 결과 시간은 380초에서 약 90초로 줄였습니다.',
        headlineEn: 'Accuracy on a held-out season rose from 45.2% to 56.0%, and the first match-analysis result now arrives in about 90 s instead of 380 s.',
        metrics: [
          {
            valueKo: '45.2% → 56.0%',
            valueEn: '45.2% → 56.0%',
            labelKo: '학습에 쓰지 않은 시즌의 정확 적중률',
            labelEn: 'Exact-hit accuracy on a held-out season',
            noteKo: '처음 보는 팀 기준 50.6% (항상 "변화 없음"으로 찍을 때보다 +17.8%p)',
            noteEn: '50.6% on unseen teams (+17.8 pp over always predicting "no change")'
          },
          {
            valueKo: '80%',
            valueEn: '80%',
            labelKo: '실제 결과가 예측한 유력 범위 안에 든 비율',
            labelEn: 'Share of results inside the predicted likely range'
          },
          {
            valueKo: '0.90',
            valueEn: '0.90',
            labelKo: '오를 선수를 가려내는 힘',
            labelEn: 'Ability to tell which players will rise',
            noteKo: '1에 가까울수록 정확',
            noteEn: 'Closer to 1 is better'
          },
          {
            valueKo: '380초 → 약 90초',
            valueEn: '380 s → ~90 s',
            labelKo: '전적분석 첫 결과까지 걸리는 시간',
            labelEn: 'Time to the first match-analysis result',
            noteKo: '저장된 기록으로 재분석 시 3초 (API 호출 0건)',
            noteEn: '3 s to re-analyze from stored data (zero API calls)'
          }
        ],
        pointsKo: [
          '정답 데이터를 **723명**까지 늘렸고(발표 표가 없는 팀 복원 포함), 예시로 한 팀은 13명 중 10명의 부스트를 맞혔습니다.'
        ],
        pointsEn: [
          'Ground truth grew to **723 players** (including rebuilt teams), and in one example team 10 of 13 boosts were predicted correctly.'
        ]
      }
    },

    sections: [
      {
        titleKo: '서비스 구조',
        titleEn: 'Service Architecture',
        tocKo: '구조',
        tocEn: 'Architecture',
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
        titleKo: '라부 예측 탭 화면',
        titleEn: 'Live Boost Prediction Tab',
        tocKo: '예측 화면',
        tocEn: 'Prediction screens',
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
        titleKo: '전적분석 탭 화면',
        titleEn: 'Match Record Analysis Tab',
        tocKo: '전적분석 화면',
        tocEn: 'Analysis screens',
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
        titleKo: '문제 해결 과정 — 라부 예측',
        titleEn: 'Problem Solving — Live Boost Prediction',
        tocKo: '문제 해결 · 예측',
        tocEn: 'Solving · prediction',
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
        titleKo: '문제 해결 과정 — 전적분석',
        titleEn: 'Problem Solving — Match Record Analysis',
        tocKo: '문제 해결 · 전적',
        tocEn: 'Solving · analysis',
        contentKo: `### 1. 느린 첫 분석과 API 요청 한도
- **문제**: 넥슨 Open API는 요청 수가 엄격히 제한되고, 첫 분석은 필요한 데이터를 차례로 받느라 **380초**가 걸렸습니다.
- **시도**: 수집 순서를 다시 짜 기다리는 시간을 겹치고, 요청 한도 안에서 속도를 최대한 끌어올렸습니다. 결과를 먼저 보여주고 나머지 통계는 뒤에서 채우며, 오늘 사용량을 화면에 띄웠습니다.
- **결과**: 첫 결과까지 **약 90초**, 저장된 기록으로 다시 분석하면 **3초**(API 0건).

### 2. 실제 데이터는 문서와 달랐다
- **문제**: 공식 문서만 믿고 계산하니 일부 숫자가 실제 게임 기록과 어긋났습니다.
- **시도**: 실제 응답을 기준으로 정합성을 확인하고, 문서와 다른 부분은 안전하게 보정했습니다. 데이터 품질 가드에서 다룬 "데이터 정합성 확인"을 실제 데이터에 그대로 적용한 셈입니다.
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
- **Approach**: Checked integrity against real responses and safely corrected mismatches — the same approach as the Data Quality Guard.
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
        titleKo: '배운 점 & 다음 단계',
        titleEn: 'Lessons & Next Steps',
        tocKo: '배운 점',
        tocEn: 'Lessons',
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

    story: {
      problem: {
        headlineKo: 'FC온라인의 공격 특성은 돌파 · 마무리 쪽에 쏠려 있어, 짧은 패스로 풀어 가는 "연계 축구"를 좋아하는 유저에게는 고를 특성이 거의 없었습니다.',
        headlineEn: 'FC Online\'s attacking traits lean heavily toward dribbling and finishing, leaving almost nothing for players who love short-passing link-up football.',
        pointsKo: [
          '"특성"은 선수 카드에 붙여 특정 플레이를 강화하는 능력입니다. 그런데 신규 특성 17종 중 **패스 계열은 "커맨더" 1종뿐**이고, 그마저 공식 설명상 원터치 · 플레어 패스에서는 효과가 제한됩니다.',
          '실제 축구에서는 외질 · 사비 · 이니에스타처럼 **골문을 등지고 원터치 힐패스로 동료에게 연결하는 장면**이 매 경기 나오지만, 게임에서는 정확도가 낮아 실전에서 쓰기 어렵습니다.'
        ],
        pointsEn: [
          'A "trait" is an ability attached to a player card that boosts a specific kind of play. Of the 17 new traits, **only one ("Commander") is about passing**, and officially its effect is limited for one-touch and flair passes.',
          'In real football, players like Özil, Xavi, and Iniesta **flick one-touch heel passes to teammates with their back to goal** every match, but in the game such passes are too inaccurate to rely on.'
        ]
      },
      approach: {
        headlineKo: '"연계 특성이 없다"는 느낌을 먼저 데이터로 확인한 뒤, 비어 있는 영역만 정확히 채우는 특성을 설계하기로 했습니다.',
        headlineEn: 'First confirm with data that link-up traits really are missing, then design a trait that fills exactly that gap.',
        pointsKo: [
          '기존 특성을 **전부 조사**해, 겹치는 특성이 있는지부터 확인했습니다.',
          '공식 **사용률 데이터**로 "정말 선택지가 부족한지"를 확인했습니다.',
          '기존 특성을 잠식하지 않고, 출시 후에도 **밸런스를 조정하기 쉬운 좁은 조건**으로 설계했습니다.'
        ],
        pointsEn: [
          '**Audit every existing trait** to check for overlap first.',
          'Use official **usage data** to confirm that choices really are lacking.',
          'Design with **narrow, tunable conditions** so it does not cannibalize existing traits and stays easy to balance after launch.'
        ]
      },
      method: {
        headlineKo: '공식 업데이트 공지와 데이터센터의 포지션별 특성 사용률을 근거로 삼았습니다.',
        headlineEn: 'Grounded in official update notices and position-level trait usage from the official data center.',
        data: [
          {
            nameKo: '신규 특성 17종',
            nameEn: 'All 17 new traits',
            descKo: '공식 업데이트 공지와 데이터센터 아이콘 목록',
            descEn: 'Official update notices and the data center\'s icon list'
          },
          {
            nameKo: '포지션별 인기 특성 사용률',
            nameEn: 'Popular traits by position',
            descKo: 'FC 온라인 공식 데이터센터, 2026.11.20 기준, 상위 랭크(슈퍼챔피언스~월드클래스3) 1:1 공식경기',
            descEn: 'FC Online official data center as of 2026.11.20, top ranks (Super Champions – World Class 3), 1v1 ranked'
          },
          {
            nameKo: '실제 축구 장면',
            nameEn: 'Real football footage',
            descKo: '외질 · 사비 · 이니에스타 · 지루 · 피르미누의 등진 원터치 힐 연계',
            descEn: 'Back-to-goal one-touch heel links by Özil, Xavi, Iniesta, Giroud, and Firmino'
          }
        ],
        methods: [
          {
            nameKo: '전수 조사 · 분류',
            nameEn: 'Full audit & classification',
            descKo: '17종을 돌파 · 침투 / 마무리 / 피지컬 / 패스 / 수비 / GK로 분류',
            descEn: 'All 17 sorted into dribbling, finishing, physical, passing, defense, and GK'
          },
          {
            nameKo: '포지션별 사용률 비교',
            nameEn: 'Usage comparison by position',
            descKo: 'ST · CAM · CM · CDM의 상위 5개 특성을 비교해 공백 확인',
            descEn: 'Top-5 traits for ST, CAM, CM, and CDM compared to find the gap'
          },
          {
            nameKo: '구현 선례 분석',
            nameEn: 'Precedent analysis',
            descKo: '"방향"을 발동 조건으로 쓰는 기존 특성(레이저 슈터)과 EA FC의 유사 PlayStyle 확인',
            descEn: 'An existing direction-based trait (Laser Shooter) and a similar EA FC PlayStyle'
          }
        ]
      },
      solution: {
        headlineKo: '등진 상태에서 원터치로 등 뒤 동료에게 보내는 패스만 강화하는 "블라인드 링커"를 설계하고, 아이콘과 발표 자료까지 만들어 제출했습니다.',
        headlineEn: 'I designed "Blind Linker", which boosts only one-touch passes sent behind you while your back is to goal, and submitted it with an icon and a deck.',
        flow: [
          { titleKo: '실축 장면 관찰', titleEn: 'Observe real matches' },
          { titleKo: '신규 특성 17종 전수 조사', titleEn: 'Audit all 17 traits' },
          { titleKo: '사용률 데이터로 공백 확인', titleEn: 'Confirm the gap with usage data' },
          { titleKo: '특성 설계', titleEn: 'Design the trait' },
          { titleKo: '아이콘 · 발표 자료 제출', titleEn: 'Submit icon & deck' }
        ],
        pointsKo: [
          '**4가지 조건**(등진 상태 · 원터치 · 플레어 패스 입력 · 등 뒤 180° 방향)을 모두 만족할 때만 발동해 게임 밸런스를 흔들지 않습니다.',
          '발동 각도 · 보정치 · 압박 거리 · 공 속도 · 발동 구역의 **5가지 조정 레버**로 출시 후에도 밸런스를 맞출 수 있습니다.',
          '기존 특성 아이콘 규칙을 따른 아이콘과 **15쪽 발표 자료**를 만들었습니다.'
        ],
        pointsEn: [
          'It triggers only when **all four conditions** hold (back to goal, one-touch, flair-pass input, rear 180° direction), so it does not upset game balance.',
          '**Five tuning levers** (angle, bonus, pressure distance, ball speed, zone) allow balancing after launch.',
          'An icon following the existing trait-icon rules and a **15-page deck** were produced.'
        ]
      },
      result: {
        headlineKo: '데이터로 "빈 자리"를 증명한 기획안을 넥슨 공모전에 제출했습니다.',
        headlineEn: 'I submitted a proposal to Nexon\'s contest that proves the gap with data.',
        metrics: [
          {
            valueKo: '17종 중 1종',
            valueEn: '1 of 17',
            labelKo: '패스 계열 신규 특성',
            labelEn: 'New traits about passing',
            noteKo: '그마저 원터치 · 플레어 패스는 효과 제한',
            noteEn: 'Even that one is limited on one-touch and flair passes'
          },
          {
            valueKo: '100%',
            valueEn: '100%',
            labelKo: 'ST · CAM 상위 5개 특성 중 돌파 · 마무리 계열 비율',
            labelEn: 'Dribbling / finishing share of the ST and CAM top 5',
            noteKo: '상위 5개 사용률 합 88.2% · 85.3%',
            noteEn: 'Top-5 usage totals of 88.2% and 85.3%'
          },
          {
            valueKo: '8~9%',
            valueEn: '8–9%',
            labelKo: '중원(CM · CDM)에서도 유일한 패스 특성 사용률',
            labelEn: 'Usage of the only passing trait, even in midfield',
            noteKo: '두 포지션 모두 5위',
            noteEn: 'Fifth place at both CM and CDM'
          },
          {
            valueKo: '15쪽',
            valueEn: '15 pages',
            labelKo: '제출한 기획 발표 자료',
            labelEn: 'Submitted proposal deck',
            noteKo: '아이콘 · 발동 조건 도식 · 활용 시나리오 포함',
            noteEn: 'Icon, trigger diagram, and use cases'
          }
        ],
        pointsKo: [
          '기능 설명에 그치지 않고 **사업적 타당성**(카드 · 이벤트 가치, 낮은 개발 · 밸런스 리스크, 보는 재미)까지 함께 제시했습니다.'
        ],
        pointsEn: [
          'Beyond the feature itself, the proposal made the **business case**: card and event value, low development and balance risk, and spectator appeal.'
        ]
      }
    },

    sections: [
      {
        titleKo: '제안 개요 — 블라인드 링커',
        titleEn: 'Proposal Overview — Blind Linker',
        tocKo: '제안 개요',
        tocEn: 'Proposal',
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
        titleKo: '데이터 근거 상세 — 왜 이 특성인가',
        titleEn: 'Data Rationale — Why This Trait',
        tocKo: '데이터 근거',
        tocEn: 'Data rationale',
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
        titleKo: '사업적 타당성 — 왜 넣을 만한가',
        titleEn: 'Business Rationale — Why It Is Worth Adding',
        tocKo: '사업적 타당성',
        tocEn: 'Business case',
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
        titleKo: '배운 점',
        titleEn: 'Lessons Learned',
        tocKo: '배운 점',
        tocEn: 'Lessons',
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
