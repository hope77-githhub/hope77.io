# HOPE77 Portfolio Website Structure & Maintenance Guide

GitHub Pages (`github.io`) 호스팅을 위해 최적화된 모듈러 포트폴리오 프로젝트입니다.

---

## 📁 프로젝트 디렉토리 구조

```text
portfolio/
├── index.html                   # 메인 포트폴리오 마크업 (내용 수정용)
├── README.md                    # 유지보수 및 파일 설명 가이드
├── css/
│   ├── variables.css            # 디자인 시스템 토큰 (색상, 여백, 폰트, 곡률 등)
│   ├── base.css                 # 리셋, 기본 HTML 스타일, 레이아웃 밴드
│   ├── components.css           # 버튼, 칩, 카드, 타임라인, 그리드 등 UI 컴포넌트
│   ├── log-console.css          # 첫 진입 로그 스트리밍 터미널 오버레이 스타일
│   └── style.css                # 전체 CSS를 모아둔 마스터 스타일시트
└── js/
    ├── log-streamer.js          # 첫 진입 로그 데이터 스트리밍 & 터미널 엔진
    ├── navigation.js            # 상단 퀵 네비게이션 & 프리뷰 패널 상호작용
    ├── i18n.js                  # 한/영 자동 번역 및 언어 토글 로직
    └── main.js                  # 웹사이트 진입점 및 모듈 초기화
```

---

## 🛠️ 유지보수 및 내용 수정 가이드

### 1. 포트폴리오 내용 (텍스트, 프로젝트 링크, 경력) 수정
- **파일:** [`index.html`](file:///C:/Users/jahjang/python/portfolio/index.html)
- 각 섹션이 명확한 주석(`<!-- 2. PROFILE SUMMARY -->`, `<!-- 5. ARCHITECTURE INSIGHTS -->`, `<!-- 6. PROJECTS -->` 등)으로 구분되어 있어 손쉽게 텍스트나 링크를 변경할 수 있습니다.
- 영어 번역 문구를 함께 지정하고 싶을 때는 태그 내의 `data-en="..."` 속성을 수정하시면 됩니다.

### 2. 첫 진입 로그 스트리밍 메시지 수정 / 추가
- **파일:** [`js/log-streamer.js`](file:///C:/Users/jahjang/python/portfolio/js/log-streamer.js)
- `LOG_SEQUENCE` 배열에 로그 객체를 추가하거나 메시지를 수정할 수 있습니다:
  ```javascript
  {
      level: 'INGEST',          // INFO, DEBUG, INGEST, FILTER, PIPELINE, METRIC, SUCCESS
      tag: 'telemetry:f1-udp',  // 모듈 태그
      msg: '로그 메시지 내용...', // HTML 태그 (<span class="highlight">) 지원
      duration: 100,            // 스트리밍 딜레이 (ms)
      progress: 50,             // 프로그레스 바 (%)
      events: 8000              // 누적 처리 이벤트 수
  }
  ```

### 3. 색상 및 테마 스타일 수정
- **파일:** [`css/variables.css`](file:///C:/Users/jahjang/python/portfolio/css/variables.css)
- 기본 브랜드 컬러(`--color-primary`), 다크 모드 배경색, 터미널 테마 컬러 등이 정의되어 있어, 이 파일의 변수값만 바꾸면 웹사이트 전체에 일괄 적용됩니다.

### 4. UI 컴포넌트 모양 및 레이아웃 수정
- **파일:** [`css/components.css`](file:///C:/Users/jahjang/python/portfolio/css/components.css)
- 카드 여백, 버튼 크기, 프로젝트 그리드 배치, 모바일 반응형 브레이크포인트(`@media (max-width: 1024px)`, `@media (max-width: 640px)`)를 관리합니다.

---

## 🚀 주요 기능 및 특징

1. **데이터 파이프라인 부트스트랩 연출 (Log Streamer Overlay)**
   - 첫 진입 시 실제 고성능 데이터 파이프라인(F1 UDP 텔레메트리, Riot API 데이터 인제스천, CEL 문법 컴파일, SheetJS 클라이언트 샌드박스)의 스트리밍 로그가 실시간 터미널 스타일로 출력됩니다.
   - 우측 상단 `스킵 [ESC]` 버튼으로 언제든지 즉시 메인 화면으로 전환할 수 있습니다.
   - 상단 헤더의 **[Pipeline Logs]** 버튼을 누르면 언제든지 터미널을 다시 열어 로그를 재확인하거나 재생(Replay)할 수 있습니다.

2. **자동 번역 (Hybrid i18n)**
   - 우측 상단 `KO / EN` 버튼을 통해 한국어와 영어를 전환할 수 있습니다.
   - 기본 프리셋 문구뿐만 아니라 추후 새로 작성한 한국어 텍스트도 Google GTX API를 통해 실시간 자동 번역을 지원합니다.

3. **반응형 Coinbase Design System 적용**
   - 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 레이아웃을 제공합니다.
