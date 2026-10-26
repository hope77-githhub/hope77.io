export const HISTORY_DATA = {
  career: [
    {
      id: 'career-unknown-qa',
      orgKo: 'Unknown Project QA & 테스트 플랫폼 엔지니어링팀',
      orgEn: 'Unknown Project QA & Test Platform Engineering Group',
      period: '2025.12 – 현재 (Active)',
      roleKo: 'QA 플랫폼 엔지니어 & 테스트 도구 개발자',
      roleEn: 'QA Platform Engineer & Tooling Developer',
      type: 'Career',
      summaryKo: '복잡한 클라이언트-서버 환경에서 수작업 로그 대조 및 검증 병목을 해소하기 위해 데이터 스키마 기반 자동 검증 엔진과 영상-로그 프레임 동기화 뷰어를 개발했습니다.',
      summaryEn: 'Engineered an automated schema-based validation engine and frame-synchronized video-log visualizer to eliminate manual QA verification bottlenecks.',
      dutiesKo: [
        '사전 정의된 JSON/CSV 데이터 스키마 기반 로그 결측·이상치 자동 유효성 검증 엔진 개발',
        '플레이 영상 녹화 종료 시 서버/클라 로그 자동 다운로드 및 즉시 검증 원클릭 파이프라인 구축',
        '로그 타임라인과 영상 프레임을 1:1로 매핑하여 오류 발생 시점으로 즉시 이동하는 Interactive Visualizer 구현',
        '추천 알고리즘 출력과 DB 실데이터를 즉각 대조하는 전용 QA 탭 및 Jira 티켓 자동 매핑 파이프라인 구축'
      ],
      dutiesEn: [
        'Developed schema-based automated validation engine detecting missing fields, type errors, and runtime anomalies',
        'Built 1-click pipeline downloading in-game logs upon video recording completion with immediate validity checks',
        'Implemented interactive video-log viewer mapping error timestamps directly to video frames',
        'Created recommendation algorithm verification UI tab and automated error-to-Jira ticket triage pipeline'
      ],
      achievementsKo: [
        '로그-영상 수작업 대조 소요 시간 75% 이상 단축 (건당 25분 소요 ➔ 수 초 내 프레임 점프)',
        '스키마 결측치 및 포맷 에러 검출 누락률 0% 달성 (휴먼 에러 시스템 차원 원천 차단)',
        '에러 패턴과 Jira 티켓 자동 매핑으로 중복 등록 방지 및 이슈 리포트 리드타임 60% 단축'
      ],
      achievementsEn: [
        'Reduced manual video-log inspection time by > 75% (from 25 mins down to instant frame jumping)',
        'Achieved 0% omission rate for schema discrepancies and format violations',
        'Reduced issue triage reporting turnaround time by 60% via automated Jira ticket mapping'
      ],
      relatedProjectId: 'log-entry-unknown',
      relatedProjectNameKo: 'Unknown QA & 테스트 지원 도구',
      relatedProjectNameEn: 'Unknown QA & Test Support Suite'
    },
    {
      id: 'career-neis-counter',
      orgKo: '교육 공공행정 소프트웨어 유틸리티 개발',
      orgEn: 'EdTech & Public Administration Software Utility',
      period: '2026.09 – 완료 (DONE)',
      roleKo: '클라이언트 소프트웨어 엔지니어 (독자 기획·개발)',
      roleEn: 'Client-Side Software Engineer (Independent Lead)',
      type: 'Career / Service',
      summaryKo: '나이스(NEIS) 시스템의 특수 바이트 계산 규격(한글 3byte, 줄바꿈 2byte)과 엑셀 시트 내 중복 문장 탐지 피로도를 해결하기 위해 100% 브라우저 인메모리 텍스트 유틸리티를 개발 및 배포했습니다.',
      summaryEn: 'Designed and deployed a 100% browser in-memory utility addressing custom NEIS byte calculation rules and multi-row Excel duplicate sentence fatigue.',
      dutiesKo: [
        '공백 포함/제외, UTF-8 및 EUC-KR 기반의 나이스 전용 실시간 정밀 Byte 계산 알고리즘 설계',
        'SheetJS 기반 100% 브라우저 인메모리 엑셀 파서 구축으로 대규모 행(Row) 고속 파싱 구현',
        '문장 단위 텍스트 차분(Diff) 알고리즘을 통한 행 번호 기반 중복 문장 실시간 탐지 UI 개발',
        '양방향 인라인 수정 및 엑셀 포맷 즉시 덮어쓰기/내보내기 워크플로우 구현'
      ],
      dutiesEn: [
        'Engineered precision byte counting logic supporting UTF-8/EUC-KR under strict NEIS standards',
        'Built 100% client-side Excel parser using SheetJS to inspect large multi-student grade sheets',
        'Developed sentence-level diff algorithm mapping duplicate sentences directly to exact row indices',
        'Supported bidirectional inline editing with instant .xlsx export and overwrite capabilities'
      ],
      achievementsKo: [
        '대규모 엑셀 시트 내 중복 문장 탐지 시간 90% 이상 단축 (수작업 1시간 ➔ 2초 이내 자동 탐지)',
        '나이스 특수 규격 기준 바이트 계산 정합도 100% 달성',
        '서버 데이터 전송 0%로 학생 민감 개인정보 유출 위험을 원천 차단하여 안전성 확보'
      ],
      achievementsEn: [
        'Cut duplicate sentence inspection time by > 90% (from 1 hour manual review to < 2 seconds)',
        'Achieved 100% precision matching official NEIS byte counting specifications',
        'Guaranteed zero server transmission, completely eliminating student privacy leak risks'
      ],
      relatedProjectId: 'log-entry-neis',
      relatedProjectNameKo: 'NEIS 글자수 & 엑셀 중복 탐지기',
      relatedProjectNameEn: 'NEIS Byte Counter & Excel Tool'
    }
  ],
  research: [
    {
      id: 'research-lol-sna',
      orgKo: 'LoL 멀티모달 데이터 분석 & SNA 연구팀',
      orgEn: 'LoL Multimodal SNA Research Group',
      period: '2023.09 – 2025.09',
      roleKo: '리드 데이터 엔지니어 / 제1연구원',
      roleEn: 'Lead Data Engineer & Primary Researcher',
      type: 'Research / Publication',
      summaryKo: '수집 주기가 다른 게임 이벤트 로그와 디스코드 음성 스트림을 수학적 보간법으로 동기화하고, RoBERTa 감성 모델 및 동적 SNA 그래프로 팀 내 정보 전파 양상을 통계적으로 규명하여 arXiv에 논문을 공식 등재했습니다.',
      summaryEn: 'Synchronized in-game logs with Discord voice streams using mathematical interpolation, modeling communication dissemination via RoBERTa and dynamic SNA, formally published on arXiv.',
      dutiesKo: [
        'Riot Games 및 LoL Client API 데이터 스키마 분석 및 밀리초(ms) 단위 이벤트 수집 파이프라인 설계',
        '커스텀 Discord Bot 개발을 통한 팀 음성 수집 및 타임스탬프 동기화 체계 구축',
        '샘플링 레이트가 다른 게임 로그와 음성 텍스트의 시계열 오차를 해결하기 위한 수학적 보간법(Interpolation) 적용',
        'RoBERTa 트랜스포머 기반 발화 의도/감성 분류 및 플레이어를 Node/영향력을 Edge로 정의한 동적 SNA 그래프 모델링',
        '통계적 가설 검증 수행 및 국제 공인 학술 프리프린트(arXiv:2512.20116) 논문 집필'
      ],
      dutiesEn: [
        'Analyzed Riot Client API schemas to engineer real-time event log ingestion pipelines with ms precision',
        'Engineered custom Discord Bot to capture team voice streams with synchronized Unix timestamps',
        'Applied mathematical time-series interpolation to align multi-frequency audio and in-game logs',
        'Fine-tuned RoBERTa models for communicative intent and constructed dynamic SNA graphs using NetworkX',
        'Conducted statistical hypothesis testing and authored research paper published on arXiv (arXiv:2512.20116)'
      ],
      achievementsKo: [
        '이종 데이터 간 타임스탬프 동기화 시간 오차 0.05초(50ms) 미만 정밀 달성',
        '수만 건의 인게임 이벤트 무결성 수집 (누락률 0%) 및 경기 종료 시 자동 리포트 발송 파이프라인 완성',
        '국제 공인 학술 프리프린트(arXiv:2512.20116) 논문 공식 등재로 데이터 신뢰성 학술 검증 완료'
      ],
      achievementsEn: [
        'Achieved multimodal synchronization timing error under 0.05 seconds (50ms)',
        'Collected tens of thousands of in-game events with 0% data omission rate and automated email triage',
        'Formally published peer-accessible academic research paper on arXiv (arXiv:2512.20116)'
      ],
      relatedProjectId: 'log-entry-com-study',
      relatedProjectNameKo: 'LoL 커뮤니케이션 패턴 및 SNA 분석',
      relatedProjectNameEn: 'LoL Communication Patterns & Dynamic SNA',
      paperUrl: 'https://arxiv.org/abs/2512.20116',
      repoUrl: 'https://github.com/hope77-githhub/Proj_code'
    },
    {
      id: 'research-f1-telemetry',
      orgKo: '고주파 레이스 텔레메트리 & AI 전략 연구 Lab',
      orgEn: 'High-Frequency Race Telemetry & AI Strategy Lab',
      period: '2026.09 – 현재 (Active)',
      roleKo: '텔레메트리 시스템 엔지니어 (연구 개발)',
      roleEn: 'Telemetry Systems Engineer (R&D Lead)',
      type: 'Research & Engineering',
      summaryKo: 'F1 게임으로부터 초당 60회 쏟아지는 고빈도 UDP 텔레메트리를 실시간 파싱하고, 공식 서킷 실좌표 매핑과 타이어 마모 예측 기반 AI 음성 전술 피드백 시스템을 연구 및 구현하고 있습니다.',
      summaryEn: 'Researching 60Hz high-frequency UDP telemetry parsing, official circuit track mapping, and AI voice feedback models for tactical pit stop strategies.',
      dutiesKo: [
        'F1 공식 UDP 20777 포트 바이너리 패킷 파서 및 원형 링 버퍼(Circular Buffer) 초저지연 인덱싱 엔진 개발',
        '차량 속도, 스로틀/브레이크 강도, 타이어 마모도, 섹터별 델타 타임 시계열 분석 알고리즘 구현',
        'FIA 24개 공식 서킷 X-Y 실좌표계 기반 실시간 주행 궤적 렌더링 프론트엔드 구축',
        '드라이버 랩 페이스 및 타이어 수명 감쇠 모델 기반 실시간 피트스탑 AI Voice 음성 브리핑 에이전트 설계'
      ],
      dutiesEn: [
        'Developed binary packet parser and circular buffer indexing engine for 60Hz UDP 20777 streams',
        'Implemented time-series algorithms for vehicle speed, throttle/brake inputs, tire wear, and sector deltas',
        'Constructed real-time canvas track visualizer mapped to 24 official FIA circuit coordinate systems',
        'Architected AI voice coaching agent delivering auditory pit stop strategies based on live tire wear models'
      ],
      achievementsKo: [
        '초당 60회 고주파 UDP 패킷을 패킷 손실 없이 5ms 미만 초저지연으로 실시간 처리',
        '24개 F1 공식 서킷 좌표계 100% 매핑으로 정밀 주행 궤적 재현',
        '계기판 시각 주시 대비 운전자 시각 인지 부하 80% 경감 (음성 피드백 전환)'
      ],
      achievementsEn: [
        'Processed 60Hz UDP packets with zero drops at sub-5ms low latency',
        'Mapped 100% of 24 official FIA F1 circuits to true-scale coordinates',
        'Reduced driver visual cognitive burden by 80% through real-time auditory briefings'
      ],
      relatedProjectId: 'log-entry-f1',
      relatedProjectNameKo: 'Real-Time AI Race Engineer',
      relatedProjectNameEn: 'Real-Time AI Race Engineer (F1 UDP)',
      repoUrl: 'https://github.com/hope77-githhub/F125_Personal_RaceEngineer'
    }
  ]
};
