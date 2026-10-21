import React, { useState, useEffect, useRef } from 'react';
import { LOG_SEQUENCE } from '../data/logSequenceData';

export default function LogStreamOverlay({ isOpen, onClose }) {
  // Mode: 'stream' | 'login'
  const [mode, setMode] = useState('stream');

  // Stream state
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [events, setEvents] = useState(0);
  const [status, setStatus] = useState('STREAMING');
  const [isDone, setIsDone] = useState(false);
  const terminalBodyRef = useRef(null);
  const timeoutsRef = useRef([]);

  // Login simulation state
  const [visitorNumber, setVisitorNumber] = useState(1);
  const [typedId, setTypedId] = useState('');
  const [typedPw, setTypedPw] = useState('');
  const [focusedField, setFocusedField] = useState('id'); // 'id' | 'pw' | 'none'
  const [loginBtnState, setLoginBtnState] = useState('idle'); // 'idle' | 'pressed' | 'verifying' | 'success'

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  };

  // 방문자 카운트: 페이지 접속 및 새로고침할 때마다 1씩 자동 누적 증가
  useEffect(() => {
    try {
      const storageKey = 'hope77_persistent_visitor_seq';
      const stored = localStorage.getItem(storageKey);

      if (!stored) {
        // 첫 진입: 1번째로 저장
        localStorage.setItem(storageKey, '1');
        setVisitorNumber(1);
      } else {
        // 기존에 방문한 기록이 있으면 새로고침/재방문 시 1씩 증가
        let currentCount = parseInt(stored, 10);
        if (isNaN(currentCount) || currentCount < 1) {
          currentCount = 1;
        } else {
          currentCount += 1;
        }
        localStorage.setItem(storageKey, currentCount.toString());
        setVisitorNumber(currentCount);
      }
    } catch {
      setVisitorNumber(1);
    }
  }, []);

  const startStreaming = (isReplay = false) => {
    clearAllTimeouts();
    setMode('stream');
    setLogs([]);
    setProgress(0);
    setEvents(0);
    setStatus('STREAMING');
    setIsDone(false);

    let accumulatedDelay = isReplay ? 100 : 250;

    LOG_SEQUENCE.forEach((item, index) => {
      accumulatedDelay += item.duration;
      const timeoutId = setTimeout(() => {
        const timestamp = new Date().toISOString().substring(11, 23);
        setLogs((prev) => [
          ...prev,
          {
            id: index,
            level: item.level,
            tag: item.tag,
            msg: item.msg,
            timestamp
          }
        ]);
        setProgress(item.progress);
        setEvents(item.events);

        if (index === LOG_SEQUENCE.length - 1) {
          setStatus('INGESTED');
          setIsDone(true);
        }
      }, accumulatedDelay);

      timeoutsRef.current.push(timeoutId);
    });
  };

  useEffect(() => {
    if (isOpen) {
      startStreaming(false);
    } else {
      clearAllTimeouts();
    }
    return () => clearAllTimeouts();
  }, [isOpen]);

  // Auto-scroll terminal log body
  useEffect(() => {
    if (mode === 'stream' && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs, mode]);

  // Handle Enter & ESC keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Enter') {
        if (mode === 'stream') {
          handleStartLoginFlow();
        } else if (mode === 'login') {
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, mode, isDone]);

  // Start the interactive login simulation flow
  const handleStartLoginFlow = () => {
    clearAllTimeouts();
    setMode('login');
    setTypedId('');
    setTypedPw('');
    setFocusedField('id');
    setLoginBtnState('idle');

    const fullId = `당신은 ${visitorNumber}번째 사용자입니다`;
    const fullPw = '••••••••••••••••'; // 16 masked dots

    let currentIdIndex = 0;
    const typeIdInterval = () => {
      if (currentIdIndex < fullId.length) {
        currentIdIndex++;
        setTypedId(fullId.substring(0, currentIdIndex));
        const idTimer = setTimeout(typeIdInterval, 35);
        timeoutsRef.current.push(idTimer);
      } else {
        // Move to Password field
        const pwSwitchTimer = setTimeout(() => {
          setFocusedField('pw');
          let currentPwIndex = 0;
          const typePwInterval = () => {
            if (currentPwIndex < fullPw.length) {
              currentPwIndex++;
              setTypedPw(fullPw.substring(0, currentPwIndex));
              const pwTimer = setTimeout(typePwInterval, 40);
              timeoutsRef.current.push(pwTimer);
            } else {
              // Both typed! Trigger auto-click login
              triggerAutoLogin();
            }
          };
          typePwInterval();
        }, 220);
        timeoutsRef.current.push(pwSwitchTimer);
      }
    };

    // Begin typing ID after a short pause
    const initTimer = setTimeout(typeIdInterval, 180);
    timeoutsRef.current.push(initTimer);
  };

  const triggerAutoLogin = () => {
    setFocusedField('none');

    // 1. Press effect on button
    const pressTimer = setTimeout(() => {
      setLoginBtnState('pressed');

      // 2. Verifying loader state
      const verifyTimer = setTimeout(() => {
        setLoginBtnState('verifying');

        // 3. Success state
        const successTimer = setTimeout(() => {
          setLoginBtnState('success');

          // 4. Enter main view
          const enterTimer = setTimeout(() => {
            onClose();
          }, 450);
          timeoutsRef.current.push(enterTimer);
        }, 600);
        timeoutsRef.current.push(successTimer);
      }, 160);
      timeoutsRef.current.push(verifyTimer);
    }, 250);
    timeoutsRef.current.push(pressTimer);
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    startStreaming(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="log-stream-overlay"
      id="log-stream-overlay"
      onClick={onClose}
    >
      <div
        className="terminal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header (Clean Mac Light Style) */}
        <div className="terminal-header">
          <div className="terminal-controls">
            <span
              className="term-dot term-dot-red"
              onClick={onClose}
              style={{ cursor: 'pointer' }}
              title="Close"
            ></span>
            <span
              className="term-dot term-dot-yellow"
              style={{ cursor: 'pointer' }}
              title="Minimize"
            ></span>
            <span
              className="term-dot term-dot-green"
              onClick={handleReplay}
              style={{ cursor: 'pointer' }}
              title="Replay Stream"
            ></span>
          </div>
          <div className="terminal-title">
            <i className="fas fa-terminal"></i>
            <span>
              {mode === 'login'
                ? 'hope77@jang-log-system: ~/auth/session'
                : 'hope77@jang-log-system: ~/stream/boot'}
            </span>
            <span className="terminal-title-tag">
              {mode === 'login' ? 'TDS AUTH' : 'LIVE INGESTION'}
            </span>
          </div>
          <div className="terminal-actions">
            {mode === 'stream' && (
              <button
                type="button"
                className="btn-term-action btn-term-enter"
                id="btn-term-enter"
                onClick={handleStartLoginFlow}
              >
                <i className="fas fa-rocket"></i>{' '}
                <span>🚀 메인 화면 진입하기</span>
              </button>
            )}
            <button
              type="button"
              className="btn-term-action"
              id="btn-term-replay"
              title="Replay Stream"
              onClick={handleReplay}
            >
              <i className="fas fa-rotate-right"></i>
            </button>
            <button
              type="button"
              className="btn-term-action"
              id="btn-term-close"
              title="Close Terminal"
              onClick={onClose}
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* MODE 1: Log Stream Engine (Light Terminal) */}
        {mode === 'stream' && (
          <>
            {/* Telemetry Metrics Bar */}
            <div className="terminal-metrics-bar">
              <div className="metric-group">
                <div className="metric-item">
                  <span>PIPELINE:</span>
                  <span className="metric-val" id="term-status-tag">{status}</span>
                </div>
                <div className="metric-item">
                  <span>EVENTS PROCESSED:</span>
                  <span className="metric-val" id="term-event-counter">
                    {events.toLocaleString()}
                  </span>
                </div>
                <div className="metric-item">
                  <span>THROUGHPUT:</span>
                  <span className="metric-val">54.2k / sec</span>
                </div>
                <div className="metric-item">
                  <span>LATENCY (p99):</span>
                  <span className="metric-val">3.4ms</span>
                </div>
              </div>
              <div className="progress-container">
                <span style={{ fontSize: '11px' }}>SYNC:</span>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    id="term-progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="progress-pct" id="term-progress-pct">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Terminal Log Body */}
            <div className="terminal-body" id="terminal-log-body" ref={terminalBodyRef}>
              {logs.map((log) => (
                <div key={log.id} className="terminal-line">
                  <span className="log-ts">[{log.timestamp}]</span>
                  <span className={`log-badge log-${log.level.toLowerCase()}`}>
                    {log.level}
                  </span>
                  <span className="log-source">[{log.tag}]</span>
                  <span
                    className="log-msg"
                    dangerouslySetInnerHTML={{ __html: log.msg }}
                  ></span>
                </div>
              ))}
              {!isDone && (
                <div className="terminal-line" style={{ color: 'var(--color-primary)' }}>
                  <span className="prompt-cursor"></span>
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="terminal-footer">
              <div className="terminal-footer-hint">
                <i className="fas fa-keyboard"></i>
                <span>
                  <kbd>Enter</kbd> 키를 누르면 인증 로그인 화면을 거쳐 장자훈's Log로 입장합니다.
                </span>
              </div>
              <div style={{ color: '#6b7684' }}>
                <i className="fas fa-scroll"></i> <span>창 내부 스크롤을 통해 전체 로그 히스토리를 확인하실 수 있습니다.</span>
              </div>
            </div>
          </>
        )}

        {/* MODE 2: Interactive TDS Login Simulation (Toss White Card) */}
        {mode === 'login' && (
          <div className="toss-login-panel">
            <div className="toss-login-card">
              <div className="toss-login-header">
                <div className="toss-login-icon-wrap">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <h3 className="toss-login-title">보안 세션 로그인</h3>
                <p className="toss-login-desc">
                  장자훈's Log 환경에 접속하기 위해 인증을 진행해요.
                </p>
              </div>

              {/* ID Field */}
              <div className="toss-form-group">
                <div className="toss-field-label">
                  <span>사용자 식별자 (USER ID)</span>
                  <span className="toss-field-tag">VISITOR #{visitorNumber}</span>
                </div>
                <div className={`toss-input-box ${focusedField === 'id' ? 'is-focused' : ''}`}>
                  <i className="fas fa-user toss-input-icon"></i>
                  <span className="toss-input-value">
                    {typedId}
                    {focusedField === 'id' && <span className="toss-typing-cursor"></span>}
                  </span>
                </div>
              </div>

              {/* Password Field */}
              <div className="toss-form-group">
                <div className="toss-field-label">
                  <span>보안 인증 토큰 (PASSWORD)</span>
                  <span className="toss-field-tag">AES-256 ENCRYPTED</span>
                </div>
                <div className={`toss-input-box ${focusedField === 'pw' ? 'is-focused' : ''}`}>
                  <i className="fas fa-lock toss-input-icon"></i>
                  <span className="toss-input-value" style={{ letterSpacing: '2px' }}>
                    {typedPw}
                    {focusedField === 'pw' && <span className="toss-typing-cursor"></span>}
                  </span>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="button"
                className={`btn-toss-login ${loginBtnState === 'pressed' ? 'is-pressed' : ''} ${
                  loginBtnState === 'success' ? 'is-success' : ''
                }`}
                onClick={triggerAutoLogin}
              >
                {loginBtnState === 'idle' && (
                  <>
                    <i className="fas fa-right-to-bracket"></i>
                    <span>로그인하기</span>
                  </>
                )}
                {loginBtnState === 'pressed' && (
                  <>
                    <i className="fas fa-right-to-bracket"></i>
                    <span>로그인하기</span>
                  </>
                )}
                {loginBtnState === 'verifying' && (
                  <div className="toss-loader-dots">
                    <span className="toss-loader-dot"></span>
                    <span className="toss-loader-dot"></span>
                    <span className="toss-loader-dot"></span>
                  </div>
                )}
                {loginBtnState === 'success' && (
                  <>
                    <i className="fas fa-check"></i>
                    <span>인증 성공! 입장합니다</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
