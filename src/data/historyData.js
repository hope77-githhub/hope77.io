export const HISTORY_DATA = {
  career: [
    {
      id: 'career-tbd-1',
      isTbd: true,
      orgKo: '경력 이력 (추후 추가 예정)',
      orgEn: 'Career Experience (To Be Determined)',
      period: 'TBD',
      roleKo: '추후 업데이트 예정',
      roleEn: 'Upcoming',
      type: 'Career',
      dutiesKo: [
        '새로운 실무 경력 및 프로젝트 이력이 추가될 예정입니다.'
      ],
      dutiesEn: [
        'Upcoming professional career experience to be updated.'
      ]
    },
    {
      id: 'career-tbd-2',
      isTbd: true,
      orgKo: '경력 이력 (추후 추가 예정)',
      orgEn: 'Career Experience (To Be Determined)',
      period: 'TBD',
      roleKo: '추후 업데이트 예정',
      roleEn: 'Upcoming',
      type: 'Career',
      dutiesKo: [
        '새로운 실무 경력 및 프로젝트 이력이 추가될 예정입니다.'
      ],
      dutiesEn: [
        'Upcoming professional career experience to be updated.'
      ]
    }
  ],
  research: [
    {
      id: 'research-lol-sna',
      isTbd: false,
      orgKo: 'Voice Communication & In-Game Log Data 싱크 및 의사소통 패턴 분석 연구',
      orgEn: 'Voice Communication & In-Game Log Data Sync & Communication Pattern Analysis',
      period: '2023.09 – 2025.09',
      roleKo: '리드 데이터 엔지니어 (2저자 / 공동 연구)',
      roleEn: 'Lead Data Engineer (2nd Author / Co-Author)',
      type: 'Research / Publication',
      dutiesKo: [
        'Riot Games 및 LoL Client API 데이터 스키마 분석 및 밀리초(ms) 단위 인게임 이벤트 수집 파이프라인 설계',
        '커스텀 Discord Bot 개발을 통한 음성 스트림 수집 및 타임스탬프 동기화 체계 구축',
        '수집 주기가 다른 게임 로그와 음성 데이터(Voice Communication) 간의 시계열 오차를 수학적 보간법(Interpolation)으로 정밀 동기화',
        'RoBERTa 언어 모델 기반 발화 의도/감성 분류 및 동적 소셜 네트워크 분석(SNA) 그래프를 통한 의사소통 패턴 분석',
        '통계적 가설 검증 수행 및 국제 공인 학술 프리프린트(arXiv:2512.20116) 논문 집필'
      ],
      dutiesEn: [
        'Analyzed Riot Client API schemas to engineer real-time event log ingestion pipelines with ms precision',
        'Engineered custom Discord Bot capturing voice communication streams with synchronized Unix timestamps',
        'Applied mathematical time-series interpolation to align multi-frequency voice audio and in-game logs',
        'Analyzed communication patterns via RoBERTa language models and dynamic SNA graph algorithms',
        'Conducted statistical hypothesis testing and co-authored research paper on arXiv (arXiv:2512.20116)'
      ],
      relatedProjectId: 'log-entry-com-study',
      relatedProjectNameKo: 'LoL 커뮤니케이션 패턴 및 SNA 분석',
      relatedProjectNameEn: 'LoL Communication Patterns & Dynamic SNA',
      paperUrl: 'https://arxiv.org/abs/2512.20116',
      repoUrl: 'https://github.com/hope77-githhub/Proj_code'
    }
  ]
};
