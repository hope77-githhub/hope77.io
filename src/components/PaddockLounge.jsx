import React, { useState, useEffect, useRef } from 'react';
import MiniDriver2D from './MiniDriver2D';
import { getVisitorSequence } from '../utils/visitorCounter';
import { useLanguage } from '../context/LanguageContext';

export default function PaddockLounge() {
  const { t, lang } = useLanguage();
  const visitorNum = getVisitorSequence();

  const arenaRef = useRef(null);
  const moveTimerRef = useRef(null);
  const lastLogMoveTimeRef = useRef(0);
  const logContainerRef = useRef(null);
  const channelRef = useRef(null);

  // User character state
  const [myPos, setMyPos] = useState({ x: 230, y: 160 });
  const [direction, setDirection] = useState('right');
  const [isMoving, setIsMoving] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [mySpeech, setMySpeech] = useState('');
  const speechTimeoutRef = useRef(null);

  // Other players (multi-tab sync + simulated paddock drivers)
  const [otherDrivers, setOtherDrivers] = useState({
    1: {
      id: 1,
      x: 440,
      y: 75,
      direction: 'left',
      isMoving: false,
      isBoosted: false,
      speech: '🏆 P1 포디움에서 대기 중!',
      customColor: { helmet: '#00264d', suit: '#001428' },
    },
    2: {
      id: 2,
      x: 80,
      y: 70,
      direction: 'right',
      isMoving: false,
      isBoosted: false,
      speech: '🔴 소프트 타이어 세팅 완료!',
      customColor: { helmet: '#003366', suit: '#001830' },
    },
  });

  // Chat input
  const [chatText, setChatText] = useState('');

  // Default filter is CHAT as requested
  const [logFilter, setLogFilter] = useState('CHAT');

  // Mini Log data (Initial logs)
  const [miniLogs, setMiniLogs] = useState([
    {
      id: 'init-chat-1',
      time: getCurrentTimeStr(),
      type: 'CHAT',
      user: '사용자 #1 (Verstappen)',
      isSelf: false,
      detail: '패독 라운지에 오신 것을 환영합니다! 오늘 세션 타임 멋지네요.',
    },
    {
      id: 'init-chat-2',
      time: getCurrentTimeStr(),
      type: 'CHAT',
      user: '사용자 #2 (Checo)',
      isSelf: false,
      detail: '각 구역으로 이동해서 스페이스바를 누르면 특별한 액션이 발동돼요!',
    },
    {
      id: 'init-join',
      time: getCurrentTimeStr(),
      type: 'JOIN',
      user: `사용자 #${visitorNum} (나)`,
      isSelf: true,
      detail: '패독 라운지에 접속했습니다. (WASD 또는 방향키로 이동)',
    },
  ]);

  function getCurrentTimeStr() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  // Append entry to mini log
  const addMiniLog = (type, user, detail, isSelf = false) => {
    setMiniLogs((prev) => {
      const next = [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          time: getCurrentTimeStr(),
          type,
          user,
          isSelf,
          detail,
        },
      ];
      // Keep max 60 logs
      if (next.length > 60) return next.slice(next.length - 60);
      return next;
    });
  };

  // Determine current active zone based on position
  const getActiveZone = (x, y) => {
    const arena = arenaRef.current;
    const w = arena ? arena.clientWidth : 540;
    const h = arena ? arena.clientHeight : 360;

    // 1. Pit Box (Top-Left)
    if (x <= 155 && y <= 125) {
      return {
        id: 'pitbox',
        name: '🔴 1번 피트 박스',
        prompt: '피트스탑 타이어 교체',
      };
    }
    // 2. P1 Winner Podium (Top-Right)
    if (x >= w - 155 && y <= 125) {
      return {
        id: 'podium',
        name: '🏆 P1 우승 포디움',
        prompt: '포디움 점령하기',
      };
    }
    // 3. Turbo Booster Pad (Bottom-Right)
    if (x >= w - 155 && y >= h - 145) {
      return {
        id: 'booster',
        name: '⚡ 터보 부스터 존',
        prompt: '터보 부스터 발동',
      };
    }
    // 4. Pit Wall Lounge (Bottom-Left)
    if (x <= 155 && y >= h - 145) {
      return {
        id: 'pitwall',
        name: '📡 핏 월 라운지',
        prompt: '피트 크루 하이파이브',
      };
    }

    return null;
  };

  const currentZone = getActiveZone(myPos.x, myPos.y);

  // Auto-scroll mini log to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [miniLogs, logFilter]);

  // Setup BroadcastChannel for real-time multi-tab communication
  useEffect(() => {
    let bc = null;
    try {
      bc = new BroadcastChannel('redbull_paddock_sync');
      channelRef.current = bc;

      // Announce entry
      bc.postMessage({
        type: 'JOIN',
        userNum: visitorNum,
        x: myPos.x,
        y: myPos.y,
      });

      bc.onmessage = (e) => {
        const msg = e.data;
        if (!msg || msg.userNum === visitorNum) return;

        if (msg.type === 'JOIN') {
          addMiniLog('JOIN', `사용자 #${msg.userNum}`, '다른 탭에서 패독에 입장했습니다.', false);
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              id: msg.userNum,
              x: msg.x || 200,
              y: msg.y || 160,
              direction: 'left',
              isMoving: false,
              isBoosted: false,
              speech: '👋 안녕하세요!',
            },
          }));
        } else if (msg.type === 'MOVE') {
          // Update avatar position only; do NOT add other users' movements to private MOVE log
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              ...prev[msg.userNum],
              id: msg.userNum,
              x: msg.x,
              y: msg.y,
              direction: msg.direction || 'left',
              isMoving: true,
              isBoosted: !!msg.isBoosted,
            },
          }));
        } else if (msg.type === 'CHAT') {
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              ...prev[msg.userNum],
              speech: msg.text,
            },
          }));
          addMiniLog('CHAT', `사용자 #${msg.userNum}`, `"${msg.text}"`, false);
        } else if (msg.type === 'BOOST') {
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              ...prev[msg.userNum],
              isBoosted: true,
            },
          }));
          addMiniLog('EVENT', `사용자 #${msg.userNum}`, '⚡ 터보 부스터 가동!', false);
        }
      };
    } catch (err) {
      console.warn('BroadcastChannel not supported', err);
    }

    return () => {
      if (bc) {
        try {
          bc.close();
        } catch (_) {}
      }
    };
  }, [visitorNum]);

  // Periodic subtle life for simulated drivers (when alone)
  useEffect(() => {
    const interval = setInterval(() => {
      setOtherDrivers((prev) => {
        const next = { ...prev };
        const targetId = Math.random() > 0.5 ? 1 : 2;
        if (next[targetId]) {
          const dx = (Math.random() - 0.5) * 40;
          const dy = (Math.random() - 0.5) * 30;
          const newX = Math.max(50, Math.min(500, next[targetId].x + dx));
          const newY = Math.max(50, Math.min(300, next[targetId].y + dy));
          next[targetId] = {
            ...next[targetId],
            x: newX,
            y: newY,
            direction: dx < 0 ? 'left' : 'right',
            isMoving: true,
          };
        }
        return next;
      });

      setTimeout(() => {
        setOtherDrivers((prev) => {
          const next = { ...prev };
          Object.keys(next).forEach((k) => {
            next[k] = { ...next[k], isMoving: false };
          });
          return next;
        });
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Set Moving Helper
  const triggerMovementState = () => {
    setIsMoving(true);
    if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
    moveTimerRef.current = setTimeout(() => {
      setIsMoving(false);
    }, 250);
  };

  // Move user by offset delta (dx, dy) — Strictly WASD & Arrow Keys
  const moveByDelta = (dx, dy) => {
    const arena = arenaRef.current;
    const w = arena ? arena.clientWidth : 540;
    const h = arena ? arena.clientHeight : 360;

    const speed = isBoosted ? 32 : 18;
    const nextX = Math.max(30, Math.min(w - 30, myPos.x + dx * speed));
    const nextY = Math.max(40, Math.min(h - 35, myPos.y + dy * speed));

    if (dx < 0) setDirection('left');
    else if (dx > 0) setDirection('right');

    setMyPos({ x: nextX, y: nextY });
    triggerMovementState();

    // Broadcast movement to other tabs
    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'MOVE',
        userNum: visitorNum,
        x: nextX,
        y: nextY,
        direction: dx < 0 ? 'left' : 'right',
        isBoosted,
      });
    }

    // Private movement log (Only current user's movement)
    const now = Date.now();
    if (now - lastLogMoveTimeRef.current > 1200) {
      const zone = getActiveZone(nextX, nextY);
      const zoneLabel = zone ? `[${zone.name}]` : '[패독 그라운드]';
      addMiniLog(
        'MOVE',
        `사용자 #${visitorNum} (나)`,
        `(X: ${Math.round(nextX)}, Y: ${Math.round(nextY)}) ${zoneLabel} 구역으로 이동`,
        true
      );
      lastLogMoveTimeRef.current = now;
    }
  };

  // Spacebar Interaction Trigger (Triggered when standing in a zone and pressing Spacebar)
  const handleSpacebarAction = () => {
    const zone = getActiveZone(myPos.x, myPos.y);

    if (zone?.id === 'podium') {
      // 1. P1 Podium Celebration
      const shout = '🏆 P1 우승 포디움 점령! 샴페인 세레머니!';
      setMySpeech(shout);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => setMySpeech(''), 4500);

      addMiniLog('EVENT', `사용자 #${visitorNum} (나)`, '🏆 [P1 우승 포디움]을 점령했습니다! (Space)', true);

      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'CHAT',
          userNum: visitorNum,
          text: shout,
        });
      }
    } else if (zone?.id === 'booster') {
      // 2. Turbo Boost Activation
      setIsBoosted(true);
      const shout = '⚡ 터보 부스터 최대 출력 가동! (속도 2배)';
      setMySpeech(shout);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => setMySpeech(''), 4500);

      addMiniLog('EVENT', `사용자 #${visitorNum} (나)`, '⚡ [터보 부스터 존]에서 부스터를 발동했습니다! (Space)', true);

      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'BOOST',
          userNum: visitorNum,
        });
      }

      setTimeout(() => {
        setIsBoosted(false);
      }, 4000);
    } else if (zone?.id === 'pitbox') {
      // 3. Pit Box Tyre Change
      const shout = '🔴 소프트 타이어 체결 완료! 1.82s 박스 아웃!';
      setMySpeech(shout);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => setMySpeech(''), 4500);

      addMiniLog('EVENT', `사용자 #${visitorNum} (나)`, '🔴 [1번 피트 박스]에서 타이어를 교체했습니다! (Space)', true);

      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'CHAT',
          userNum: visitorNum,
          text: shout,
        });
      }
    } else if (zone?.id === 'pitwall') {
      // 4. Pit Wall High-Five
      const shout = '🤝 피트 크루 & 전략팀과 하이파이브!';
      setMySpeech(shout);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => setMySpeech(''), 4500);

      addMiniLog('EVENT', `사용자 #${visitorNum} (나)`, '🤝 [핏 월 라운지]에서 크루와 하이파이브를 나눴습니다! (Space)', true);

      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'CHAT',
          userNum: visitorNum,
          text: shout,
        });
      }
    } else {
      // 5. Open Paddock cheer
      const shout = '🏎️ 부르릉! 레이스 질주 준비 완료!';
      setMySpeech(shout);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => setMySpeech(''), 4500);

      addMiniLog('EVENT', `사용자 #${visitorNum} (나)`, '🏎️ 패독에서 엔진 레브를 올렸습니다. (Space)', true);

      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'CHAT',
          userNum: visitorNum,
          text: shout,
        });
      }
    }
  };

  // Keyboard navigation & Spacebar listener (WASD, Arrows, Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in chat input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      let dx = 0;
      let dy = 0;

      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        dy -= 1;
        e.preventDefault();
        moveByDelta(dx, dy);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        dy += 1;
        e.preventDefault();
        moveByDelta(dx, dy);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        dx -= 1;
        e.preventDefault();
        moveByDelta(dx, dy);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        dx += 1;
        e.preventDefault();
        moveByDelta(dx, dy);
      } else if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleSpacebarAction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [myPos, isBoosted, visitorNum]);

  // Submit chat message
  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    const trimmed = chatText.trim();
    if (!trimmed) return;

    setMySpeech(trimmed);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setMySpeech('');
    }, 4500);

    addMiniLog('CHAT', `사용자 #${visitorNum} (나)`, `"${trimmed}"`, true);

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'CHAT',
        userNum: visitorNum,
        text: trimmed,
      });
    }

    setChatText('');
  };

  // Quick shout button action
  const handleQuickShout = (text) => {
    setMySpeech(text);
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setMySpeech('');
    }, 4500);

    addMiniLog('CHAT', `사용자 #${visitorNum} (나)`, `"${text}"`, true);

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'CHAT',
        userNum: visitorNum,
        text,
      });
    }
  };

  // Clear mini log
  const handleClearLog = () => {
    setMiniLogs([]);
  };

  // Filtered mini logs (Private MOVE: only current player's movements)
  const filteredLogs = miniLogs.filter((log) => {
    if (logFilter === 'CHAT') {
      return log.type === 'CHAT';
    }
    if (logFilter === 'MOVE') {
      // Private: only show the currently controlled player's movements
      return log.type === 'MOVE' && log.isSelf;
    }
    if (logFilter === 'EVENT') {
      return log.type === 'EVENT' || log.type === 'BOOST' || log.type === 'JOIN';
    }
    // ALL: Show events, chats, and private movements
    if (log.type === 'MOVE') return log.isSelf;
    return true;
  });

  return (
    <section className="paddock-section band-light" id="paddock-lounge">
      <div className="band-inner">
        {/* Section Header */}
        <div className="paddock-header-wrap">
          <div className="paddock-title-group">
            <div className="paddock-title-row">
              <h2 className="paddock-title">
                <i className="fas fa-gamepad"></i>
                <span>Red Bull Paddock Lounge</span>
              </h2>
              <span className="chip chip-info">2D MINI PLAYGROUND</span>
              <span className="chip chip-secondary">VISITOR #{visitorNum}</span>
            </div>
            <p className="paddock-desc">
              {t(
                'WASD 또는 방향키로 2D 미니 드라이버를 조작하고, 구역 이동 후 스페이스바를 눌러 액션을 실행해보세요!',
                'Control your 2D mini driver with WASD or Arrow keys. Move to any zone and press Spacebar to activate actions!'
              )}
            </p>
          </div>

          <div className="paddock-chips">
            <span className="chip chip-success">
              <i className="fas fa-users" style={{ marginRight: '4px' }}></i>
              실시간 접속 드라이버 {1 + Object.keys(otherDrivers).length}명
            </span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="paddock-grid">
          {/* Column 1: 2D Interactive Paddock Canvas Arena (Keyboard Only) */}
          <div className="paddock-arena-card">
            {/* Arena Top Telemetry Bar */}
            <div className="arena-top-bar">
              <div className="arena-status-indicator">
                <span className="live-pulse-dot"></span>
                <span>PADDOCK SIMULATOR LIVE // KEYBOARD ONLY</span>
              </div>
              <div className="arena-controls-hint">
                <span>조작:</span>
                <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>
                <span>/</span>
                <kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd>
                <span>&amp;</span>
                <kbd>SPACE</kbd>
                <span>액션</span>
              </div>
            </div>

            {/* Walkable Floor (Keyboard Controlled Only — No mouse-click movement) */}
            <div
              className="paddock-arena-canvas"
              ref={arenaRef}
              title="WASD 및 방향키로 캐릭터를 조작하세요"
            >
              {/* Floor Zone 1: Pit Box (Top-Left) */}
              <div className={`paddock-zone zone-pitbox ${currentZone?.id === 'pitbox' ? 'is-active' : ''}`}>
                <span>🔴 1번 피트 박스</span>
                <span className="zone-action-hint">[Space] 타이어 교체</span>
              </div>

              {/* Floor Zone 2: P1 Winner Podium (Top-Right) */}
              <div className={`paddock-zone zone-podium ${currentZone?.id === 'podium' ? 'is-active' : ''}`}>
                <span>🏆 P1 포디움</span>
                <span className="zone-action-hint">[Space] 포디움 점령</span>
              </div>

              {/* Floor Zone 3: Turbo Booster (Bottom-Right) */}
              <div className={`paddock-zone zone-booster ${currentZone?.id === 'booster' ? 'is-active' : ''}`}>
                <span>⚡ 터보 부스터</span>
                <span className="zone-action-hint">[Space] 2배 속도</span>
              </div>

              {/* Floor Zone 4: Pit Wall Lounge (Bottom-Left) */}
              <div className={`paddock-zone zone-pitwall ${currentZone?.id === 'pitwall' ? 'is-active' : ''}`}>
                <span>📡 핏 월 라운지</span>
                <span className="zone-action-hint">[Space] 하이파이브</span>
              </div>

              {/* Center Pit Wall Marker & Chequered Line */}
              <div className="zone-telemetry-center">ORACLE RB20</div>
              <div className="zone-chequered-line"></div>

              {/* Other Drivers (Simulated & Multi-tab Sync) */}
              {Object.values(otherDrivers).map((drv) => (
                <MiniDriver2D
                  key={drv.id}
                  x={drv.x}
                  y={drv.y}
                  direction={drv.direction}
                  isMoving={drv.isMoving}
                  isBoosted={drv.isBoosted}
                  isSelf={false}
                  visitorNum={drv.id}
                  speech={drv.speech}
                  customColor={drv.customColor}
                />
              ))}

              {/* My 2D Character (With Spacebar Interaction Prompt) */}
              <MiniDriver2D
                x={myPos.x}
                y={myPos.y}
                direction={direction}
                isMoving={isMoving}
                isBoosted={isBoosted}
                isSelf={true}
                visitorNum={visitorNum}
                speech={mySpeech}
                interactionPrompt={currentZone ? currentZone.prompt : null}
              />
            </div>
          </div>

          {/* Column 2: Chat & Zone Mission Guide + mini log */}
          <div className="paddock-controls-card">
            {/* 1. Chat Form */}
            <form className="paddock-chat-form" onSubmit={handleSendChat}>
              <input
                type="text"
                className="paddock-chat-input"
                placeholder={`사용자 #${visitorNum} (나)로 메시지 입력 후 Enter`}
                value={chatText}
                maxLength={45}
                onChange={(e) => setChatText(e.target.value)}
              />
              <button type="submit" className="btn-paddock-send">
                <i className="fas fa-paper-plane"></i>
                <span>전송</span>
              </button>
            </form>

            {/* 2. Spacebar Zone Mission Guide (Keyboard Interactive instead of mouse clicking) */}
            <div className="paddock-zone-guide">
              <div className="zone-guide-header">
                <span>구역 이동 후 <kbd>SPACE</kbd> 키를 누르면 액션 실행</span>
                <span style={{ color: '#db0a40' }}>🎮 KEYBOARD ACTION</span>
              </div>
              <div className="zone-guide-grid">
                <div className={`zone-guide-item ${currentZone?.id === 'podium' ? 'is-current' : ''}`}>
                  <span className="zone-guide-item-title">🏆 P1 포디움</span>
                  <span className="zone-guide-item-desc">우측 상단 이동 후 Space → 포디움 점령</span>
                </div>
                <div className={`zone-guide-item ${currentZone?.id === 'booster' ? 'is-current' : ''}`}>
                  <span className="zone-guide-item-title">⚡ 터보 부스터</span>
                  <span className="zone-guide-item-desc">우측 하단 이동 후 Space → 4초간 2배 속도</span>
                </div>
                <div className={`zone-guide-item ${currentZone?.id === 'pitbox' ? 'is-current' : ''}`}>
                  <span className="zone-guide-item-title">🔴 1번 피트 박스</span>
                  <span className="zone-guide-item-desc">좌측 상단 이동 후 Space → 타이어 교체</span>
                </div>
                <div className={`zone-guide-item ${currentZone?.id === 'pitwall' ? 'is-current' : ''}`}>
                  <span className="zone-guide-item-title">📡 핏 월 라운지</span>
                  <span className="zone-guide-item-desc">좌측 하단 이동 후 Space → 크루 하이파이브</span>
                </div>
              </div>

              {/* Quick Speech Chips */}
              <div className="quick-chips-row" style={{ marginTop: '4px' }}>
                <button
                  type="button"
                  className="btn-quick-chip"
                  onClick={() => handleQuickShout('👋 안녕하세요!')}
                >
                  👋 "안녕하세요!"
                </button>
                <button
                  type="button"
                  className="btn-quick-chip"
                  onClick={() => handleQuickShout('🏎️ 엔진 스타트! 부르릉')}
                >
                  🏎️ "엔진 스타트!"
                </button>
                <button
                  type="button"
                  className="btn-quick-chip"
                  onClick={() => handleQuickShout('🔥 피트스탑 1.82s 완료!')}
                >
                  🔥 "1.82s 피트스탑!"
                </button>
              </div>
            </div>

            {/* 3. mini log (Default screen: CHAT, Private MOVE) */}
            <div className="paddock-minilog-wrap">
              <div className="minilog-header">
                <div className="minilog-title">
                  <i className="fas fa-terminal"></i>
                  <span>mini log</span>
                </div>
                <div className="minilog-filters">
                  {['CHAT', 'MOVE', 'EVENT', 'ALL'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`btn-log-filter ${logFilter === f ? 'active' : ''}`}
                      onClick={() => setLogFilter(f)}
                    >
                      {f === 'MOVE' ? 'MOVE (PRIVATE)' : f}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="minilog-clear-btn"
                    onClick={handleClearLog}
                    title="로그 비우기"
                  >
                    <i className="fas fa-trash-can"></i>
                  </button>
                </div>
              </div>

              {/* Scrolling Log Body */}
              <div className="minilog-body" ref={logContainerRef}>
                {filteredLogs.length === 0 ? (
                  <div style={{ color: '#8e9192', textAlign: 'center', padding: '16px 0' }}>
                    {logFilter === 'MOVE'
                      ? '기록된 내 이동 로그가 없습니다. (WASD 또는 방향키로 이동해보세요)'
                      : logFilter === 'CHAT'
                      ? '기록된 채팅 메시지가 없습니다. 상단에서 메시지를 입력해보세요!'
                      : '기록된 활동 로그가 없습니다.'}
                  </div>
                ) : (
                  filteredLogs.map((log) => (
                    <div key={log.id} className="minilog-row">
                      <span className="log-time">{log.time}</span>
                      <span
                        className={`log-badge-mini ${
                          log.type === 'MOVE'
                            ? 'badge-move'
                            : log.type === 'CHAT'
                            ? 'badge-chat'
                            : log.type === 'BOOST'
                            ? 'badge-boost'
                            : log.type === 'JOIN'
                            ? 'badge-join'
                            : 'badge-event'
                        }`}
                      >
                        [{log.type}]
                      </span>
                      <span className="log-user-name">{log.user}:</span>
                      <span className={`log-detail ${log.type === 'CHAT' ? 'chat-msg' : ''}`}>
                        {log.detail}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
