import React, { useState, useEffect, useRef } from 'react';
import { getVisitorSequence } from '../utils/visitorCounter';

export default function LogStreamOverlay({ isOpen, onClose }) {
  // Mode: 'pitstop' | 'login'
  const [mode, setMode] = useState('pitstop');

  // Pit Stop Simulation States
  // phases: 'approaching' -> 'jacking' -> 'swapping' -> 'released' -> 'ready'
  const [phase, setPhase] = useState('approaching');
  const [stopwatchTime, setStopwatchTime] = useState('0.00');
  const [speedVal, setSpeedVal] = useState('80 km/h (LIMITER)');
  const [jacksActive, setJacksActive] = useState(false);
  const [gantryState, setGantryState] = useState('red'); // 'red' | 'green'

  const timeoutsRef = useRef([]);
  const timerIntervalRef = useRef(null);

  // Persistent Visitor Counter (Increments strictly on page load/reload)
  const [visitorNumber] = useState(getVisitorSequence);

  // Login Simulation States
  const [typedId, setTypedId] = useState('');
  const [typedPw, setTypedPw] = useState('');
  const [focusedField, setFocusedField] = useState('id'); // 'id' | 'pw' | 'none'
  const [loginBtnState, setLoginBtnState] = useState('idle'); // 'idle' | 'pressed' | 'verifying' | 'success'

  const clearAllTimers = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // Run the Netflix "Drive to Survive" Pit Stop Sequence
  const startPitStopSequence = () => {
    clearAllTimers();
    setMode('pitstop');
    setPhase('approaching');
    setStopwatchTime('0.00');
    setSpeedVal('80 km/h (LIMITER)');
    setJacksActive(false);
    setGantryState('red');

    // 1. Phase 1: Car stops in the pit box, jacks lift car (t = 800ms)
    const t1 = setTimeout(() => {
      setPhase('jacking');
      setJacksActive(true);
      setSpeedVal('0 km/h (BOXED)');

      // Start rapid stopwatch ticking
      let startTime = Date.now();
      timerIntervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed >= 1.82) {
          setStopwatchTime('1.82');
          if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        } else {
          setStopwatchTime(elapsed.toFixed(2));
        }
      }, 35);
    }, 800);
    timeoutsRef.current.push(t1);

    // 2. Phase 2: Wheel guns engage and swap tires to Red Softs (t = 1300ms)
    const t2 = setTimeout(() => {
      setPhase('swapping');
    }, 1300);
    timeoutsRef.current.push(t2);

    // 3. Phase 3: Wheels secured, Jacks down, Gantry lights GREEN! (t = 2100ms)
    const t3 = setTimeout(() => {
      setPhase('released');
      setJacksActive(false);
      setGantryState('green');
      setStopwatchTime('1.82');
      setSpeedVal('LAUNCH (295 km/h)');
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }, 2100);
    timeoutsRef.current.push(t3);

    // 4. Phase 4: Pit stop complete, show Big Enter Call To Action (t = 2800ms)
    const t4 = setTimeout(() => {
      setPhase('ready');
    }, 2800);
    timeoutsRef.current.push(t4);
  };

  useEffect(() => {
    if (isOpen) {
      startPitStopSequence();
    } else {
      clearAllTimers();
    }
    return () => clearAllTimers();
  }, [isOpen]);

  // Transition to the Interactive Login Simulation Flow
  const handleProceedToLogin = () => {
    clearAllTimers();
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
        const idTimer = setTimeout(typeIdInterval, 30);
        timeoutsRef.current.push(idTimer);
      } else {
        // Switch focus to password
        const pwSwitchTimer = setTimeout(() => {
          setFocusedField('pw');
          let currentPwIndex = 0;
          const typePwInterval = () => {
            if (currentPwIndex < fullPw.length) {
              currentPwIndex++;
              setTypedPw(fullPw.substring(0, currentPwIndex));
              const pwTimer = setTimeout(typePwInterval, 35);
              timeoutsRef.current.push(pwTimer);
            } else {
              // Auto click login
              triggerAutoLogin();
            }
          };
          typePwInterval();
        }, 200);
        timeoutsRef.current.push(pwSwitchTimer);
      }
    };

    const initTimer = setTimeout(typeIdInterval, 150);
    timeoutsRef.current.push(initTimer);
  };

  const triggerAutoLogin = () => {
    setFocusedField('none');

    const pressTimer = setTimeout(() => {
      setLoginBtnState('pressed');

      const verifyTimer = setTimeout(() => {
        setLoginBtnState('verifying');

        const successTimer = setTimeout(() => {
          setLoginBtnState('success');

          const enterTimer = setTimeout(() => {
            onClose();
          }, 450);
          timeoutsRef.current.push(enterTimer);
        }, 550);
        timeoutsRef.current.push(successTimer);
      }, 150);
      timeoutsRef.current.push(verifyTimer);
    }, 200);
    timeoutsRef.current.push(pressTimer);
  };

  // Keyboard Navigation: Enter & Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Enter') {
        if (mode === 'pitstop') {
          handleProceedToLogin();
        } else if (mode === 'login') {
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, mode, phase]);

  if (!isOpen) return null;

  return (
    <div
      className="log-stream-overlay"
      id="log-stream-overlay"
      onClick={onClose}
    >
      <div
        className="terminal-window"
        style={{ height: '600px', maxWidth: '960px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
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
              onClick={() => startPitStopSequence()}
              style={{ cursor: 'pointer' }}
              title="Replay Pit Stop"
            ></span>
          </div>

          <div className="terminal-title">
            <i className="fas fa-flag-checkered"></i>
            <span>
              {mode === 'login'
                ? 'RED BULL RACING // DRIVER SESSION AUTH'
                : 'NETFLIX DRIVE TO SURVIVE // RED BULL PIT STOP (1.82s)'}
            </span>
            <span className="terminal-title-tag">
              {mode === 'login' ? `VISITOR #${visitorNumber}` : 'PIT WALL LIVE'}
            </span>
          </div>

          <div className="terminal-actions">
            {mode === 'pitstop' && (
              <button
                type="button"
                className="btn-term-action"
                onClick={handleProceedToLogin}
                title="Skip to Login"
              >
                <span>⏩ Skip to Enter</span>
              </button>
            )}
            <button
              type="button"
              className="btn-term-action"
              onClick={() => startPitStopSequence()}
              title="Replay"
            >
              <i className="fas fa-rotate-right"></i>
            </button>
            <button
              type="button"
              className="btn-term-action"
              onClick={onClose}
              title="Close"
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* MODE 1: Netflix Drive to Survive F1 Pit Stop Experience */}
        {mode === 'pitstop' && (
          <div className="pitstop-arena">
            {/* Top Race & Telemetry Strip */}
            <div className="pitstop-hud-top">
              <div className="pitstop-race-status">
                <span className="race-pos-tag">🏆 P1 LEADER</span>
                <span className="race-lap-info">LAP 48/57 // GAP TO P2: +1.428s</span>
              </div>

              {/* 5-Bulb Gantry Pit Lights */}
              <div className="gantry-box" title="Pit Gantry Lights">
                <span className={`gantry-bulb ${gantryState === 'red' ? 'red' : ''}`}></span>
                <span className={`gantry-bulb ${gantryState === 'red' ? 'red' : ''}`}></span>
                <span className={`gantry-bulb ${gantryState === 'red' ? 'red' : ''}`}></span>
                <span className={`gantry-bulb ${gantryState === 'green' ? 'green' : ''}`}></span>
                <span className={`gantry-bulb ${gantryState === 'green' ? 'green' : ''}`}></span>
              </div>

              <div style={{ fontSize: '12px', color: '#82b1ff', fontFamily: 'var(--font-mono)' }}>
                <span>ORACLE RED BULL RACING RB20</span>
              </div>
            </div>

            {/* Main 3-Column Arena */}
            <div className="pitstop-grid">
              {/* 1. Left: Team Radio Card */}
              <div className="radio-hud-card">
                <div className="radio-header">
                  <div className="radio-channel-name">
                    <i className="fas fa-radio"></i>
                    <span>TEAM RADIO (CH-01)</span>
                  </div>
                  <div className="radio-equalizer">
                    <span className="radio-bar"></span>
                    <span className="radio-bar"></span>
                    <span className="radio-bar"></span>
                    <span className="radio-bar"></span>
                  </div>
                </div>

                <div className="radio-quote-box">
                  <div className="radio-speaker">
                    {phase === 'released' || phase === 'ready'
                      ? '🎙️ CHRISTIAN HORNER (PRINCIPAL)'
                      : '🎙️ GP (CHIEF RACE ENGINEER)'}
                  </div>
                  <div className="radio-message">
                    {phase === 'approaching' && '"Box now, Max! Soft compound ready. We need a sub-2s stop to keep P1!"'}
                    {phase === 'jacking' && '"Car in the box! Jacks up, wheel guns engaged!"'}
                    {phase === 'swapping' && '"Wheels swapped, torque lock confirmed! Ready to drop!"'}
                    {(phase === 'released' || phase === 'ready') && '"1.82 SECONDS! World record pit stop! Pit limiter off, hammer time, Max!"'}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8e9192', fontFamily: 'var(--font-mono)' }}>
                  <span>TARGET: SUB 2.0s</span>
                  <span style={{ color: '#00c853', fontWeight: 800 }}>AUDIO ACTIVE</span>
                </div>
              </div>

              {/* 2. Center: F1 Chassis & 4-Wheel Crew HUD */}
              <div className={`car-chassis-stage ${jacksActive ? 'is-jacking' : ''} ${phase === 'released' || phase === 'ready' ? 'is-released' : ''}`}>
                <div className="chassis-wrapper">
                  {/* F1 Car Silhouette Top-Down SVG */}
                  <svg className="f1-car-graphic" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rear Wing */}
                    <rect x="35" y="190" width="90" height="14" rx="3" fill="#001224" stroke="#db0a40" strokeWidth="2" />
                    {/* Rear Diffuser */}
                    <path d="M50 185 L110 185 L115 204 L45 204 Z" fill="#0a192f" />
                    {/* Main Chassis Body */}
                    <path d="M60 55 L100 55 L108 120 L115 180 L45 180 L52 120 Z" fill="#001830" stroke="#1b6aee" strokeWidth="1.5" />
                    {/* Sidepods */}
                    <path d="M42 95 Q38 140 45 170 L55 170 Q50 135 52 95 Z" fill="#001020" stroke="#db0a40" strokeWidth="1" />
                    <path d="M118 95 Q122 140 115 170 L105 170 Q110 135 108 95 Z" fill="#001020" stroke="#db0a40" strokeWidth="1" />
                    {/* Red Bull Engine Cover Racing Stripe */}
                    <path d="M78 40 L82 40 L84 165 L76 165 Z" fill="#db0a40" />
                    {/* Yellow Bull Nose Horn */}
                    <circle cx="80" cy="35" r="4" fill="#ffd600" />
                    {/* Cockpit Halo */}
                    <ellipse cx="80" cy="85" rx="14" ry="18" fill="none" stroke="#ffd600" strokeWidth="3" />
                    {/* Driver Helmet #1 */}
                    <circle cx="80" cy="90" r="7" fill="#001e3c" stroke="#db0a40" strokeWidth="1.5" />
                    <text x="80" y="93" fontSize="8" fontWeight="800" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">1</text>
                    {/* Front Nose Cone */}
                    <path d="M72 55 L88 55 L84 20 L76 20 Z" fill="#001224" stroke="#1b6aee" strokeWidth="1" />
                    {/* Front Wing */}
                    <rect x="25" y="16" width="110" height="10" rx="3" fill="#001224" stroke="#db0a40" strokeWidth="2" />
                  </svg>

                  {/* Front-Left Wheel */}
                  <div className="wheel-node fl">
                    <span className={`wheel-tyre-pill ${phase === 'approaching' ? 'medium' : phase === 'jacking' || phase === 'swapping' ? 'swapping' : 'soft-locked'}`}>
                      {phase === 'approaching' ? '🟡 MED' : phase === 'jacking' ? '⚡ GUN' : '🔴 SOFT'}
                    </span>
                    <span className={`wheel-status-tag ${phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'FL WHEEL'}
                    </span>
                  </div>

                  {/* Front-Right Wheel */}
                  <div className="wheel-node fr">
                    <span className={`wheel-tyre-pill ${phase === 'approaching' ? 'medium' : phase === 'jacking' || phase === 'swapping' ? 'swapping' : 'soft-locked'}`}>
                      {phase === 'approaching' ? '🟡 MED' : phase === 'jacking' ? '⚡ GUN' : '🔴 SOFT'}
                    </span>
                    <span className={`wheel-status-tag ${phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'FR WHEEL'}
                    </span>
                  </div>

                  {/* Rear-Left Wheel */}
                  <div className="wheel-node rl">
                    <span className={`wheel-tyre-pill ${phase === 'approaching' ? 'medium' : phase === 'jacking' || phase === 'swapping' ? 'swapping' : 'soft-locked'}`}>
                      {phase === 'approaching' ? '🟡 MED' : phase === 'jacking' ? '⚡ GUN' : '🔴 SOFT'}
                    </span>
                    <span className={`wheel-status-tag ${phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'RL WHEEL'}
                    </span>
                  </div>

                  {/* Rear-Right Wheel */}
                  <div className="wheel-node rr">
                    <span className={`wheel-tyre-pill ${phase === 'approaching' ? 'medium' : phase === 'jacking' || phase === 'swapping' ? 'swapping' : 'soft-locked'}`}>
                      {phase === 'approaching' ? '🟡 MED' : phase === 'jacking' ? '⚡ GUN' : '🔴 SOFT'}
                    </span>
                    <span className={`wheel-status-tag ${phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'RR WHEEL'}
                    </span>
                  </div>
                </div>

                {/* Jack Telemetry Status */}
                <div className="jack-status-hud">
                  <span>JACKS:</span>
                  <span className={`jack-badge ${jacksActive ? 'active' : ''}`}>
                    {jacksActive ? '⬆️ LIFTED' : phase === 'released' || phase === 'ready' ? '⬇️ RELEASED' : 'STANDBY'}
                  </span>
                  <span>WHEEL NUTS:</span>
                  <span style={{ color: phase === 'released' || phase === 'ready' ? '#00c853' : '#ffd600', fontWeight: 800 }}>
                    {phase === 'released' || phase === 'ready' ? 'TORQUE 100%' : 'FASTENING...'}
                  </span>
                </div>
              </div>

              {/* 3. Right: Pit Stopwatch & Telemetry Card */}
              <div className="stopwatch-hud-card">
                <div className="stopwatch-label">
                  <i className="fas fa-stopwatch" style={{ color: '#db0a40', marginRight: '6px' }}></i>
                  <span>PIT STOP TIME</span>
                </div>

                <div className={`stopwatch-time-digits ${phase === 'released' || phase === 'ready' ? 'record-done' : ''}`}>
                  {stopwatchTime}s
                </div>

                {(phase === 'released' || phase === 'ready') ? (
                  <span className="stopwatch-record-badge">
                    ⚡ 1.82s WORLD RECORD PACE
                  </span>
                ) : (
                  <span style={{ fontSize: '11px', color: '#b0c4de', fontFamily: 'var(--font-mono)' }}>
                    TARGET: &lt; 2.00s
                  </span>
                )}

                <div className="pit-speed-strip">
                  <span>PIT SPEED:</span>
                  <span className="speed-number">{speedVal}</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Area: Enter CTA or Skip */}
            <div className="pitstop-bottom-bar">
              {phase === 'ready' ? (
                <div className="pitstop-enter-wrap">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd600', fontSize: '13px', fontWeight: 800 }}>
                    <i className="fas fa-trophy"></i>
                    <span>피트스탑 완료! 1.82초 신기록 달성</span>
                  </div>
                  <button
                    type="button"
                    className="btn-pitstop-enter"
                    id="btn-pitstop-enter-cta"
                    onClick={handleProceedToLogin}
                  >
                    <i className="fas fa-rocket"></i>
                    <span>ENTER THE COCKPIT // 입장하기 (Enter)</span>
                  </button>
                  <div className="enter-key-hint">
                    <kbd>Enter</kbd> 키를 누르거나 버튼을 누르면 사용자 인증 후 메인 화면으로 진입합니다.
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#b0c4de' }}>
                    <span className="toss-loader-dot" style={{ background: '#db0a40' }}></span>
                    <span>피트스탑 진행 중... 타이어 교체 및 텔레메트리 동기화</span>
                  </div>
                  <button
                    type="button"
                    className="btn-pitstop-skip"
                    onClick={handleProceedToLogin}
                  >
                    <span>⏩ 바로 입장하기 (Skip)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MODE 2: Interactive TDS / Red Bull Login Simulation */}
        {mode === 'login' && (
          <div className="toss-login-panel">
            <div className="toss-login-card">
              <div className="toss-login-header">
                <div className="toss-login-icon-wrap">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <h3 className="toss-login-title">보안 세션 인증 (Session Auth)</h3>
                <p className="toss-login-desc">
                  장자훈's Log 고성능 파이프라인 접속을 위한 인증을 진행합니다.
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
