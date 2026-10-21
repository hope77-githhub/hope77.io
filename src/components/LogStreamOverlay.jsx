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
                    {phase === 'approaching' && '"Box now, Max! Soft compound ready. Hit your marks!"'}
                    {phase === 'jacking' && '"Car lifted! Old wheels off, slotting new tyres onto the hub!"'}
                    {phase === 'swapping' && '"Wheel guns spinning — torque fastening at 1.82s pace!"'}
                    {(phase === 'released' || phase === 'ready') && '"1.82 SECONDS! World record pit stop! Pit limiter off, hammer time, Max!"'}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8e9192', fontFamily: 'var(--font-mono)' }}>
                  <span>TARGET: SUB 2.0s</span>
                  <span style={{ color: '#00c853', fontWeight: 800 }}>AUDIO ACTIVE</span>
                </div>
              </div>

              {/* 2. Center: Realistic F1 Livery & Direct Wheel Mounting HUD */}
              <div className={`car-chassis-stage ${jacksActive ? 'is-jacking' : ''} ${phase === 'released' || phase === 'ready' ? 'is-released' : ''}`}>
                <div className="chassis-wrapper">
                  {/* Detailed Red Bull Racing RB20 / RB21 Realistic Livery Graphic */}
                  <svg className="f1-car-graphic" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#001224" />
                        <stop offset="50%" stopColor="#001c38" />
                        <stop offset="100%" stopColor="#001224" />
                      </linearGradient>
                      <linearGradient id="carbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e222b" />
                        <stop offset="100%" stopColor="#0c0e12" />
                      </linearGradient>
                    </defs>

                    {/* Front Suspension Wishbone Arms (connecting to front wheels) */}
                    <line x1="72" y1="56" x2="36" y2="58" stroke="#3a404d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="72" y1="68" x2="36" y2="64" stroke="#252a33" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="128" y1="56" x2="164" y2="58" stroke="#3a404d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="128" y1="68" x2="164" y2="64" stroke="#252a33" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Rear Suspension Wishbone Arms (connecting to rear wheels) */}
                    <line x1="68" y1="230" x2="32" y2="238" stroke="#3a404d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="72" y1="246" x2="32" y2="244" stroke="#252a33" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="132" y1="230" x2="168" y2="238" stroke="#3a404d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="128" y1="246" x2="168" y2="244" stroke="#252a33" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Rear Wing Structure */}
                    <rect x="42" y="260" width="116" height="18" rx="4" fill="url(#carbonGrad)" stroke="#1b6aee" strokeWidth="1.5" />
                    {/* Upper DRS Flap in Red Bull Red */}
                    <rect x="46" y="262" width="108" height="6" rx="2" fill="#db0a40" />
                    {/* DRS Center Actuator Pod */}
                    <rect x="97" y="258" width="6" height="14" rx="2" fill="#ffd600" />
                    {/* Rear Rain Safety Flashing LED */}
                    <circle cx="100" cy="275" r="3.5" fill="#ff1744">
                      <animate attributeName="opacity" values="1;0.3;1" dur="0.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Floor & Aerodynamic Diffuser Channels */}
                    <path d="M48 115 L152 115 L160 250 L40 250 Z" fill="#080c14" stroke="#101826" strokeWidth="1" />

                    {/* Sculpted Sidepods with Undercut Radiator Inlets */}
                    <path d="M52 118 Q42 165 50 220 L66 220 Q62 160 66 118 Z" fill="url(#bodyGrad)" stroke="#db0a40" strokeWidth="1.5" />
                    <path d="M148 118 Q158 165 150 220 L134 220 Q138 160 134 118 Z" fill="url(#bodyGrad)" stroke="#db0a40" strokeWidth="1.5" />

                    {/* Main Monocoque Chassis Body */}
                    <path d="M78 50 L122 50 L126 120 L134 235 L66 235 L74 120 Z" fill="url(#bodyGrad)" stroke="#1b6aee" strokeWidth="1" />

                    {/* Red Bull Charging Bull Livery on Engine Cover */}
                    {/* Left & Right Yellow Sun Discs */}
                    <circle cx="82" cy="178" r="14" fill="#ffd600" />
                    <circle cx="118" cy="178" r="14" fill="#ffd600" />

                    {/* Red Bull Silhouettes Lunging Across the Sun */}
                    <path d="M72 176 Q80 166 90 178 Q84 186 76 182 Z" fill="#db0a40" />
                    <path d="M128 176 Q120 166 110 178 Q116 186 124 182 Z" fill="#db0a40" />

                    {/* Engine Cover Shark Fin Dorsal Spine */}
                    <line x1="100" y1="135" x2="100" y2="255" stroke="#db0a40" strokeWidth="2.5" />

                    {/* Cockpit Halo Aerodynamic Safety Structure */}
                    <path d="M84 92 C84 80 116 80 116 92 C116 115 104 122 100 130 C96 122 84 115 84 92 Z" fill="#0a121f" stroke="#ffd600" strokeWidth="2.5" />

                    {/* Max Verstappen Helmet (#1) */}
                    <circle cx="100" cy="104" r="9" fill="#001830" stroke="#db0a40" strokeWidth="2" />
                    {/* Golden Mirrored Visor */}
                    <path d="M94 100 Q100 96 106 100 L104 104 Q100 101 96 104 Z" fill="#ffd600" />

                    {/* Aerodynamic Wing Mirrors */}
                    <rect x="48" y="102" width="12" height="4" rx="1.5" fill="#001020" stroke="#db0a40" strokeWidth="1" />
                    <rect x="140" y="102" width="12" height="4" rx="1.5" fill="#001020" stroke="#db0a40" strokeWidth="1" />

                    {/* Tapered Front Nose Cone */}
                    <path d="M86 50 L114 50 L108 22 L92 22 Z" fill="url(#bodyGrad)" stroke="#1b6aee" strokeWidth="1" />
                    {/* Nose Racing Stripe */}
                    <line x1="100" y1="22" x2="100" y2="60" stroke="#db0a40" strokeWidth="3" />
                    {/* Nose Tip Yellow Accent */}
                    <path d="M92 22 L108 22 L105 15 L95 15 Z" fill="#ffd600" />

                    {/* Driver Number 1 Badge */}
                    <rect x="94" y="32" width="12" height="12" rx="3" fill="#ffffff" />
                    <text x="100" y="42" fontSize="10" fontWeight="900" fill="#db0a40" textAnchor="middle" fontFamily="sans-serif">1</text>

                    {/* Multi-Element Carbon Front Wing */}
                    <path d="M18 16 L182 16 L184 26 L16 26 Z" fill="url(#carbonGrad)" stroke="#db0a40" strokeWidth="2" />
                    <line x1="30" y1="21" x2="170" y2="21" stroke="#ffd600" strokeWidth="1.5" />
                    {/* Front Wing Endplates */}
                    <rect x="14" y="10" width="5" height="24" rx="2" fill="#db0a40" />
                    <rect x="181" y="10" width="5" height="24" rx="2" fill="#db0a40" />
                  </svg>

                  {/* 4 Realistic Wheels with Direct Mounting & "빙글빙글" Spin Animation */}
                  {/* Front-Left Wheel */}
                  <div className={`f1-wheel-wrapper fl ${phase === 'swapping' ? 'is-mounting is-spinning' : phase === 'released' || phase === 'ready' ? 'is-locked' : ''}`}>
                    <div className="f1-realistic-tyre">
                      <div className="f1-wheel-rim">
                        <div className="f1-wheel-spokes"></div>
                        <div className="f1-center-nut"></div>
                      </div>
                    </div>
                    <span className={`wheel-torque-badge ${phase === 'swapping' ? 'spinning' : phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'swapping' ? '⚡ FASTENING' : phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'ON HUB'}
                    </span>
                  </div>

                  {/* Front-Right Wheel */}
                  <div className={`f1-wheel-wrapper fr ${phase === 'swapping' ? 'is-mounting is-spinning' : phase === 'released' || phase === 'ready' ? 'is-locked' : ''}`}>
                    <div className="f1-realistic-tyre">
                      <div className="f1-wheel-rim">
                        <div className="f1-wheel-spokes"></div>
                        <div className="f1-center-nut"></div>
                      </div>
                    </div>
                    <span className={`wheel-torque-badge ${phase === 'swapping' ? 'spinning' : phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'swapping' ? '⚡ FASTENING' : phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'ON HUB'}
                    </span>
                  </div>

                  {/* Rear-Left Wheel */}
                  <div className={`f1-wheel-wrapper rl ${phase === 'swapping' ? 'is-mounting is-spinning' : phase === 'released' || phase === 'ready' ? 'is-locked' : ''}`}>
                    <div className="f1-realistic-tyre">
                      <div className="f1-wheel-rim">
                        <div className="f1-wheel-spokes"></div>
                        <div className="f1-center-nut"></div>
                      </div>
                    </div>
                    <span className={`wheel-torque-badge ${phase === 'swapping' ? 'spinning' : phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'swapping' ? '⚡ FASTENING' : phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'ON HUB'}
                    </span>
                  </div>

                  {/* Rear-Right Wheel */}
                  <div className={`f1-wheel-wrapper rr ${phase === 'swapping' ? 'is-mounting is-spinning' : phase === 'released' || phase === 'ready' ? 'is-locked' : ''}`}>
                    <div className="f1-realistic-tyre">
                      <div className="f1-wheel-rim">
                        <div className="f1-wheel-spokes"></div>
                        <div className="f1-center-nut"></div>
                      </div>
                    </div>
                    <span className={`wheel-torque-badge ${phase === 'swapping' ? 'spinning' : phase === 'released' || phase === 'ready' ? 'locked' : ''}`}>
                      {phase === 'swapping' ? '⚡ FASTENING' : phase === 'released' || phase === 'ready' ? '✓ LOCKED' : 'ON HUB'}
                    </span>
                  </div>
                </div>

                {/* Jack Telemetry Status */}
                <div className="jack-status-hud">
                  <span>JACKS:</span>
                  <span className={`jack-badge ${jacksActive ? 'active' : ''}`}>
                    {jacksActive ? '⬆️ LIFTED' : phase === 'released' || phase === 'ready' ? '⬇️ RELEASED' : 'STANDBY'}
                  </span>
                  <span>WHEEL GUN:</span>
                  <span style={{ color: phase === 'swapping' ? '#ffd600' : phase === 'released' || phase === 'ready' ? '#00c853' : '#b0c4de', fontWeight: 800 }}>
                    {phase === 'swapping' ? '⚡ SPARK FASTENING...' : phase === 'released' || phase === 'ready' ? '✓ 100% TORQUE LOCKED' : 'STANDBY'}
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
