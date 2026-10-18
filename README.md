# 장자훈's Log (HOPE77 Portfolio) — Structure & Maintenance Guide

GitHub Pages (`https://hope77-githhub.io`) 호스팅을 위해 구축된 **토스 디자인 시스템(TDS) 기반 로그 옵저버빌리티 포트폴리오**입니다.

---

## 🎨 디자인 시스템: 토스 디자인 시스템 (TDS, toss.md)

- **Brand Color:** Toss Blue (`#3182F6`), Pressed Blue (`#1B64DA`), Brand Weak (`#E8F3FF`)
- **Greyscale:** `grey-900` (`#191F28`, primary text/dark surface, never pure black), `grey-800` (`#333D4B`), `grey-700` (`#4E5968`), `grey-200` (`#E5E8EB`), `grey-100` (`#F2F4F6`), `grey-50` (`#F9FAFB`)
- **Typography:** Pretendard Variable & JetBrains Mono (TDS Type Ramp: Display Bold, Title SemiBold, Body Regular)
- **Geometry:** 공격적이지만 단정한 둥근 모서리 (`12px` ~ `24px` + `999px Full Pill`) 및 섬세한 Navy-900 기반 그림자 (`elevation`)
- **Log Engine:** 첫 진입 로그 스트리밍, Hero 시스템 로그 콘솔 윈도우, "장자훈's Log" 시간대별 아코디언 페이로드 시스템 완전 유지

---

## 📁 프로젝트 디렉토리 구조

```text
portfolio/
├── index.html                   # "장자훈's Log" 타임라인 피드 및 메인 마크업 (내용 수정용)
├── README.md                    # 유지보수 및 파일 설명 가이드
├── toss.md                      # 토스 디자인 시스템(TDS) 명세서
├── css/
│   ├── variables.css            # TDS 디자인 토큰 (토스 블루, 그레이스케일, 곡률, 그림자)
│   ├── base.css                 # 리셋, TDS 타이포그래피, 섹션 밴드
│   ├── components.css           # TDS 칩, 버튼, 카드, 장자훈's Log 아코디언 피드
│   ├── log-console.css          # 첫 진입 로그 스트리밍 터미널 오버레이 (TDS 다크 팔레트)
│   └── style.css                # 전체 CSS를 모아둔 마스터 스타일시트
└── js/
    ├── log-streamer.js          # 첫 진입 로그 스트리밍 & 실시간 터미널 제어 엔진
    ├── project-logs.js          # "장자훈's Log" 타임라인 피드, 아코디언 토글 & 필터 엔진
    ├── navigation.js            # 상단 퀵 네비게이션 & 프리뷰 패널 동기화 모듈
    ├── i18n.js                  # 한/영 언어 전환 및 실시간 자동 번역 (Google GTX API)
    └── main.js                  # 전체 모듈을 초기화하고 연결하는 진입점
```

---

## 🚀 주요 기능 및 사용자 경험

1. **첫 진입 로그 스트리밍 콘솔 (Bootstrapping Telemetry Stream)**
   - 실제 프로젝트 기반의 시스템 로그가 안정적인 속도로 출력됩니다.
   - 100% 완료 시 자동으로 닫히지 않고 **[🚀 장자훈's Log 메인 화면 진입하기 (Enter)]** 버튼이 나타나며 대기합니다.
   - `Enter` 키, `ESC` 키, 창 바깥 클릭, 또는 `스킵` 버튼으로 언제든지 즉시 메인 페이지로 진입할 수 있습니다.
   - 상단 헤더의 **[Pipeline Logs]** 버튼을 통해 언제든 터미널을 다시 열어 전체 로그를 검토하고 재실행할 수 있습니다.

2. **상단 Hero 시스템 로그 콘솔 윈도우**
   - 토스 다크 캔버스(`grey-900: #191F28`) 위에 3색 윈도우 도트와 실시간 메타데이터 스트립을 갖춘 정교한 콘솔 디자인.
   - 터미널 프롬프트 라인(`hope77@kernel:~$`)과 텔레메트리 HUD 모니터링 카드 탑재.

3. **메인 화면: "장자훈's Log" (시간대별 프로젝트 로그 적재 피드)**
   - 각 프로젝트와 아키텍처 이력이 **시간대별 시스템 로그(Chronological Log Record)** 형태로 적재되어 쌓여 있습니다.
   - **[로그 상세 페이로드 열기 (+ Inspect Payload)]** 버튼을 누르면:
     - 정교한 **JSON 구조화 메타데이터 블록**이 표시됩니다.
     - **문제 정의(Problem Incident)** 와 **해결 방안(Resolution Strategy)** 이 분리되어 노출됩니다.
     - 세부 내용 및 논문/GitHub 저장소 바로가기 버튼이 나타납니다.
   - 상단 툴바의 **필터 버튼**(`ALL`, `PROJECTS`, `ARCHITECTURE`, `RESEARCH`, `ABOUT`)과 **[전체 펼치기 / 전체 접기]** 버튼으로 손쉽게 탐색할 수 있습니다.

---

## 🛠️ 유지보수 및 내용 수정 가이드

- **프로젝트 상세 내용 및 링크 수정:** [`index.html`](file:///C:/Users/jahjang/python/portfolio/index.html)
- **첫 진입 로그 시퀀스 변경:** [`js/log-streamer.js`](file:///C:/Users/jahjang/python/portfolio/js/log-streamer.js)의 `LOG_SEQUENCE` 배열
- **타임라인 피드 상호작용 제어:** [`js/project-logs.js`](file:///C:/Users/jahjang/python/portfolio/js/project-logs.js)
- **TDS 디자인 토큰 변경:** [`css/variables.css`](file:///C:/Users/jahjang/python/portfolio/css/variables.css)
