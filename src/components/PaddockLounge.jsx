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

  // Click ripple animation state
  const [ripples, setRipples] = useState([]);

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

  // Mini Telemetry Log
  const [miniLogs, setMiniLogs] = useState([
    {
      id: 'init-1',
      time: getCurrentTimeStr(),
      type: 'JOIN',
      user: `사용자 #${visitorNum}`,
      detail: '패독 라운지에 접속했습니다. (키보드 방향키 또는 바닥 클릭으로 이동)',
    },
    {
      id: 'init-2',
      time: getCurrentTimeStr(),
      type: 'EVENT',
      user: 'SYSTEM',
      detail: 'ORACLE RED BULL RACING 텔레메트리 세션 동기화 완료.',
    },
  ]);
  const [logFilter, setLogFilter] = useState('ALL');

  function getCurrentTimeStr() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  // Append entry to mini telemetry log
  const addMiniLog = (type, user, detail) => {
    setMiniLogs((prev) => {
      const next = [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          time: getCurrentTimeStr(),
          type,
          user,
          detail,
        },
      ];
      // Keep max 60 logs
      if (next.length > 60) return next.slice(next.length - 60);
      return next;
    });
  };

  // Determine which zone coordinates are currently in
  const getZoneName = (x, y, w, h) => {
    if (x < 150 && y < 120) return '[🔴 1번 피트 박스]';
    if (x > w - 150 && y < 120) return '[🏆 P1 우승 포디움]';
    if (y > h - 60) return '[🏁 체커 피니시 라인]';
    if (Math.abs(x - w / 2) < 90 && Math.abs(y - h / 2) < 50) return '[📡 핏 월 텔레메트리]';
    return '[패독 그라운드]';
  };

  // Auto-scroll mini log to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [miniLogs]);

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
          addMiniLog('JOIN', `사용자 #${msg.userNum}`, '다른 탭에서 패독에 입장했습니다.');
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
          // Throttle movement logs from other tabs
          const now = Date.now();
          if (now - lastLogMoveTimeRef.current > 2500) {
            addMiniLog('MOVE', `사용자 #${msg.userNum}`, `(X: ${Math.round(msg.x)}, Y: ${Math.round(msg.y)}) 구역으로 이동 중`);
            lastLogMoveTimeRef.current = now;
          }
        } else if (msg.type === 'CHAT') {
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              ...prev[msg.userNum],
              speech: msg.text,
            },
          }));
          addMiniLog('CHAT', `사용자 #${msg.userNum}`, `"${msg.text}"`);
        } else if (msg.type === 'BOOST') {
          setOtherDrivers((prev) => ({
            ...prev,
            [msg.userNum]: {
              ...prev[msg.userNum],
              isBoosted: true,
            },
          }));
          addMiniLog('BOOST', `사용자 #${msg.userNum}`, '⚡ 터보 부스터 가동!');
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
        // Randomly nudge driver 1 or 2
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

      // Stop moving after 400ms
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

  // Move user by offset delta (dx, dy)
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

    // Throttled log entry
    const now = Date.now();
    if (now - lastLogMoveTimeRef.current > 1200) {
      const zone = getZoneName(nextX, nextY, w, h);
      addMiniLog('MOVE', `사용자 #${visitorNum}`, `(X: ${Math.round(nextX)}, Y: ${Math.round(nextY)}) ${zone} 로 이동`);
      lastLogMoveTimeRef.current = now;
    }
  };

  // Keyboard navigation listener (Arrow keys & WASD)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in chat input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      let dx = 0;
      let dy = 0;

      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') dy -= 1;
      else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') dy += 1;
      else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') dx -= 1;
      else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') dx += 1;
      else return;

      e.preventDefault();
      moveByDelta(dx, dy);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [myPos, isBoosted, visitorNum]);

  // Click on Arena floor to move character to target point
  const handleArenaClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const targetX = Math.round(e.clientX - rect.left);
    const targetY = Math.round(e.clientY - rect.top);

    // Add click ripple
    const newRipple = { id: Date.now(), x: targetX, y: targetY };
    setRipples((prev) => [...prev.slice(-3), newRipple]);

    const w = rect.width;
    const h = rect.height;
    const clampedX = Math.max(30, Math.min(w - 30, targetX));
    const clampedY = Math.max(40, Math.min(h - 35, targetY));

    setDirection(clampedX < myPos.x ? 'left' : 'right');
    setMyPos({ x: clampedX, y: clampedY });
    triggerMovementState();

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'MOVE',
        userNum: visitorNum,
        x: clampedX,
        y: clampedY,
        direction: clampedX < myPos.x ? 'left' : 'right',
        isBoosted,
      });
    }

    const zone = getZoneName(clampedX, clampedY, w, h);
    addMiniLog('MOVE', `사용자 #${visitorNum}`, `(X: ${clampedX}, Y: ${clampedY}) ${zone} 로 이동`);
  };

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

    addMiniLog('CHAT', `사용자 #${visitorNum}`, `"${trimmed}"`);

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

    addMiniLog('CHAT', `사용자 #${visitorNum}`, `"${text}"`);

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'CHAT',
        userNum: visitorNum,
        text,
      });
    }
  };

  // Activate Turbo Booster (speed x2 + glowing flame aura)
  const handleActivateBoost = () => {
    setIsBoosted(true);
    addMiniLog('BOOST', `사용자 #${visitorNum}`, '⚡ 터보 부스터 발동! (이동속도 2배, 3.5초 유지)');

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'BOOST',
        userNum: visitorNum,
      });
    }

    setTimeout(() => {
      setIsBoosted(false);
    }, 3500);
  };

  // Teleport to Pit Box zone
  const handleTeleportPitbox = () => {
    setMyPos({ x: 80, y: 70 });
    setDirection('right');
    triggerMovementState();
    addMiniLog('EVENT', `사용자 #${visitorNum}`, '🎯 [🔴 1번 피트 박스]로 순간이동했습니다.');

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'MOVE',
        userNum: visitorNum,
        x: 80,
        y: 70,
        direction: 'right',
      });
    }
  };

  // Teleport to P1 Podium zone
  const handleTeleportPodium = () => {
    const arena = arenaRef.current;
    const w = arena ? arena.clientWidth : 540;
    const targetX = w - 80;
    setMyPos({ x: targetX, y: 70 });
    setDirection('left');
    triggerMovementState();
    handleQuickShout('🏆 P1 포디움 정상에 올랐습니다!');
    addMiniLog('EVENT', `사용자 #${visitorNum}`, '🏆 [P1 우승 포디움]으로 점프했습니다.');

    if (channelRef.current) {
      channelRef.current.postMessage({
        type: 'MOVE',
        userNum: visitorNum,
        x: targetX,
        y: 70,
        direction: 'left',
      });
    }
  };

  // High-five nearby driver
  const handleHighFive = () => {
    handleQuickShout('🤝 레이스 엔지니어 & 크루들과 하이파이브!');
    addMiniLog('EVENT', `사용자 #${visitorNum}`, '🤝 피트 크루와 열정적인 하이파이브를 나눴습니다.');
  };

  // Clear Mini Telemetry Log
  const handleClearLog = () => {
    setMiniLogs([]);
  };

  // Filtered mini logs
  const filteredLogs = miniLogs.filter((log) => {
    if (logFilter === 'ALL') return true;
    return log.type === logFilter;
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
                '2D 미니 드라이버 캐릭터로 패독을 자유롭게 이동하고, 실시간 로그 기록과 채팅을 즐겨보세요! (키보드 방향키 또는 바닥 클릭)',
                'Explore the 2D Red Bull paddock, chat with fellow visitors, and watch real-time movement telemetry logs! (Use Arrow keys or Click ground)'
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
          {/* Column 1: 2D Interactive Paddock Canvas Arena */}
          <div className="paddock-arena-card">
            {/* Arena Top Telemetry Bar */}
            <div className="arena-top-bar">
              <div className="arena-status-indicator">
                <span className="live-pulse-dot"></span>
                <span>PADDOCK SIMULATOR LIVE // ORACLE RB20</span>
              </div>
              <div className="arena-controls-hint">
                <span>조작:</span>
                <kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd>
                <span>/ 바닥 터치 이동</span>
              </div>
            </div>

            {/* Clickable Floor */}
            <div
              className="paddock-arena-canvas"
              ref={arenaRef}
              onClick={handleArenaClick}
              title="클릭하여 캐릭터를 해당 위치로 이동하세요"
            >
              {/* Floor Zones */}
              <div className="paddock-zone zone-pitbox"></div>
              <div className="paddock-zone zone-podium"></div>
              <div className="paddock-zone zone-telemetry-center"></div>
              <div className="paddock-zone zone-chequered-line"></div>

              {/* Click Ripple Animation */}
              {ripples.map((rip) => (
                <div
                  key={rip.id}
                  className="arena-click-ripple"
                  style={{ left: `${rip.x}px`, top: `${rip.y}px` }}
                />
              ))}

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

              {/* My 2D Character */}
              <MiniDriver2D
                x={myPos.x}
                y={myPos.y}
                direction={direction}
                isMoving={isMoving}
                isBoosted={isBoosted}
                isSelf={true}
                visitorNum={visitorNum}
                speech={mySpeech}
              />

              {/* Touch Mobile D-Pad */}
              <div
                className="arena-dpad"
                onClick={(e) => e.stopPropagation()}
                title="모바일 방향키 컨트롤러"
              >
                <button
                  type="button"
                  className="dpad-btn dpad-up"
                  onClick={() => moveByDelta(0, -1)}
                >
                  ▲
                </button>
                <button
                  type="button"
                  className="dpad-btn dpad-left"
                  onClick={() => moveByDelta(-1, 0)}
                >
                  ◄
                </button>
                <div className="dpad-btn dpad-center">RB</div>
                <button
                  type="button"
                  className="dpad-btn dpad-right"
                  onClick={() => moveByDelta(1, 0)}
                >
                  ►
                </button>
                <button
                  type="button"
                  className="dpad-btn dpad-down"
                  onClick={() => moveByDelta(0, 1)}
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Chat & Action Controls + Telemetry Mini Log */}
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

            {/* 2. Quick Action Chips */}
            <div className="paddock-quick-actions">
              <span className="quick-action-label">
                <i className="fas fa-bolt" style={{ color: '#db0a40' }}></i>
                <span>인터랙티브 액션 &amp; 원클릭 챗</span>
              </span>
              <div className="quick-chips-row">
                <button
                  type="button"
                  className="btn-quick-chip boost"
                  onClick={handleActivateBoost}
                  title="3.5초간 이동속도 2배 및 불꽃 오라"
                >
                  ⚡ 터보 부스터
                </button>
                <button
                  type="button"
                  className="btn-quick-chip teleport"
                  onClick={handleTeleportPitbox}
                  title="1번 피트 박스로 순간이동"
                >
                  🎯 피트박스
                </button>
                <button
                  type="button"
                  className="btn-quick-chip teleport"
                  onClick={handleTeleportPodium}
                  title="P1 우승 포디움으로 순간이동"
                >
                  🏆 포디움 점령
                </button>
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
                <button
                  type="button"
                  className="btn-quick-chip"
                  onClick={handleHighFive}
                >
                  🤝 하이파이브
                </button>
              </div>
            </div>

            {/* 3. Real-Time Mini Telemetry Log */}
            <div className="paddock-minilog-wrap">
              <div className="minilog-header">
                <div className="minilog-title">
                  <i className="fas fa-terminal"></i>
                  <span>실시간 활동 미니 로그 (TELEMETRY)</span>
                </div>
                <div className="minilog-filters">
                  {['ALL', 'MOVE', 'CHAT', 'EVENT'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`btn-log-filter ${logFilter === f ? 'active' : ''}`}
                      onClick={() => setLogFilter(f)}
                    >
                      {f}
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
                    기록된 활동 로그가 없습니다.
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
