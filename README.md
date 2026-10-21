# 🏁 장자훈's Log (HOPE77 Portfolio)

> **"당연한 것에 질문을 던지고, 직접 도구를 만들어 비효율을 해결합니다."**  
> F1 레이싱의 속도감과 시스템 엔지니어링의 로그 옵저버빌리티를 결합한 장자훈(hope77)의 인터랙티브 포트폴리오 웹사이트입니다.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Portfolio-db0a40?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hope77-githhub.github.io/hope77.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-001e3c?style=for-the-badge)](LICENSE)

---

## 🏎️ 이 포트폴리오의 특별한 경험들

단순한 이력서 나열을 넘어, 방문자가 직접 만져보고 조작할 수 있는 다양한 인터랙티브 요소들을 담았습니다.

### 1. ⏱️ F1 피트스탑 & 세션 로그인 인트로
- **실제 F1 RB20 리버리 & 타이어 탈착 연출**: 페이지에 처음 들어오면 F1 서킷 피트레인으로 초대됩니다.
- **매 진입마다 달라지는 랜덤 피트스탑 시간 (2.0s ~ 4.0s)**: 스톱워치가 실시간으로 카운팅되며, 초고속 휠 건 회전("빙글빙글")과 함께 새로운 소프트 타이어가 머신에 체결됩니다.
- **방문자 세션 인증**: 내가 몇 번째 방문자인지(예: `당신은 7번째 사용자입니다`)를 아이디로 입력받고 자동 인증 후 콕핏으로 진입하는 유쾌한 플로우를 제공합니다.

### 2. 🎮 Red Bull Paddock Lounge (2D 미니 드라이버 게임)
- **키보드로 즐기는 2D 미니 드라이버**: 3D 엔진 없이 순수 2D 벡터/CSS로 제작된 귀여운 F1 드라이버 캐릭터를 <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 또는 방향키로 조작할 수 있습니다.
- **60fps 부드러운 연속 이동**: 방향키를 꾹 누르고 있으면 OS 딜레이 없이 60fps로 매끄럽게 패독을 글라이딩합니다.
- **스페이스바(<kbd>SPACE</kbd>) 구역 미션**:
  - 🏆 **P1 포디움 구역**: 포디움 정상에 올라 스페이스바를 누르면 샴페인 우승 세레머니!
  - ⚡ **터보 부스터 존**: 스페이스바를 누르면 4초 동안 이동 속도가 2배 빨라지며 강렬한 불꽃 오라가 점화됩니다.
  - 🔴 **1번 피트 박스**: 피트 크루들과의 소프트 타이어 교체 액션!
  - 📡 **핏 월 라운지**: 레이스 엔지니어 및 팀 크루와 하이파이브!
- **실시간 대화 & 다중 탭 동기화**:
  - 채팅 메시지를 입력하면 캐릭터 머리 위에 통통 튀는 만화풍 말풍선이 뜹니다.
  - 브라우저 내장 `BroadcastChannel` 기반으로 다른 탭이나 창에서 접속한 사용자들과 실시간으로 움직임과 대화가 동기화됩니다.
- **mini log**:
  - 기본 `CHAT` 화면으로 접속자들의 대화가 실시간 공유됩니다.
  - `MOVE (PRIVATE)` 탭에서는 다른 접속자의 움직임에 방해받지 않고 오직 내 캐릭터의 이동 기록만 안전하게 열람할 수 있습니다.

### 3. 📊 로그 옵저버빌리티 기반의 프로젝트 아카이브
엔지니어링 결과물을 시스템 로그 페이로드 형태로 구조화하여 투명하게 공개합니다:
- **LoL SNA 음성 커뮤니케이션 연구 (arXiv:2512.20116)**: Riot API와 Discord 음성 데이터를 보간법으로 동기화하고 RoBERTa 및 동적 사회연결망(SNA)으로 분석한 학술 논문.
- **Unknown QA 자동화 플랫폼**: 데이터 스키마 기반 로그 검증 및 영상-로그 원클릭 동기화 도구.
- **AI Race Engineer**: F1 UDP 실시간 텔레메트리 파싱 및 음성 피드백 레이스 전략 코치.
- **NEIS 글자수 계산기 & 엑셀 중복 탐지기**: 100% 클라이언트 메모리 기반의 나이스 규격 글자수 계산 및 학교 실무 보조 도구.

### 4. 🌐 글로벌 다국어 지원 (KO / EN)
- 상단 앱 바의 언어 토글 버튼 하나로 모든 프로필과 프로젝트 상세 설명, UI 라벨을 한국어와 영어로 즉시 전환할 수 있습니다.

---

## 💻 로컬에서 실행해보기

본 프로젝트는 최신 React 및 Vite 기반으로 제작되었습니다.

```bash
# 1. 저장소 클론
git clone https://github.com/hope77-githhub/hope77.io.git
cd portfolio

# 2. 의존성 패키지 설치
npm install

# 3. 로컬 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하면 바로 확인하실 수 있습니다.

```bash
# 프로덕션 빌드
npm run build
```

---

## 📬 Contact & Author

- **Author:** 장자훈 (Jang Ja Hun / HOPE77)
- **Email:** `contact@hope77.io`
- **GitHub:** [https://github.com/hope77-githhub](https://github.com/hope77-githhub)
- **Live Website:** [https://hope77-githhub.github.io/hope77.io/](https://hope77-githhub.github.io/hope77.io/)
