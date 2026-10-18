# 장자훈's Log (HOPE77 Portfolio) — Structure & Maintenance Guide

GitHub Pages (`https://hope77-githhub.io`) 호스팅을 위해 구축된 **로그 데이터 & 옵저버빌리티(Observability) 컨셉의 모듈러 포트폴리오**입니다.

---

## 📁 프로젝트 디렉토리 구조

```text
portfolio/
├── index.html                   # "장자훈's Log" 타임라인 피드 및 메인 마크업 (내용 수정용)
├── README.md                    # 유지보수 및 파일 설명 가이드
├── css/
│   ├── variables.css            # 디자인 시스템 토큰 (색상, 여백, 폰트, 터미널 테마)
│   ├── base.css                 # 리셋, 기본 HTML 스타일, 레이아웃 밴드
│   ├── components.css           # 장자훈's Log 카드, 아코디언 드로어, JSON 블록, 필터 툴바
│   ├── log-console.css          # 첫 진입 로그 스트리밍 터미널 오버레이 스타일
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
   - 방문자가 충분히 읽을 수 있는 안정적인 페이스로 실제 프로젝트 기반의 시스템 로그가 출력됩니다.
   - 100% 완료 시 자동으로 닫히지 않고 **[🚀 장자훈's Log 메인 화면 진입하기 (Enter)]** 버튼이 나타나며 대기합니다.
   - `Enter` 키, `ESC` 키, 창 바깥 클릭, 또는 `스킵` 버튼으로 언제든지 즉시 메인 페이지로 진입할 수 있습니다.
   - 상단 헤더의 **[Pipeline Logs]** 버튼을 통해 언제든 터미널을 다시 열어 전체 로그를 검토하고 재실행할 수 있습니다.

2. **메인 화면: "장자훈's Log" (시간대별 프로젝트 로그 적재 피드)**
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
- **색상 및 디자인 토큰 변경:** [`css/variables.css`](file:///C:/Users/jahjang/python/portfolio/css/variables.css)
