import React from 'react';

/**
 * MiniDriver2D
 * High-performance, lightweight pure SVG/CSS 2D Mini F1 Driver Character
 */
export default function MiniDriver2D({
  x,
  y,
  direction = 'right',
  isMoving = false,
  isBoosted = false,
  isSelf = false,
  visitorNum = 1,
  speech = '',
  customColor = null,
  interactionPrompt = null,
}) {
  // Suit / Helmet color theme (Default Red Bull Racing Navy & Crimson)
  const helmetColor = customColor ? customColor.helmet : '#001e3c';
  const suitColor = customColor ? customColor.suit : '#001224';
  const accentRed = '#db0a40';
  const visorColor = '#ffd600';

  return (
    <div
      className={`mini-driver-wrapper ${isSelf ? 'is-self-driver' : ''} ${isMoving ? 'is-walking' : 'is-idle'} ${
        isBoosted ? 'is-boosted' : ''
      }`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) scaleX(${direction === 'left' ? -1 : 1})`,
      }}
    >
      {/* Speech Bubble (Counter-transformed so text isn't flipped when facing left) */}
      {speech && (
        <div
          className="mini-speech-bubble"
          style={{
            transform: `scaleX(${direction === 'left' ? -1 : 1})`,
          }}
        >
          <span className="speech-text">{speech}</span>
          <div className="speech-arrow"></div>
        </div>
      )}

      {/* Spacebar Interaction Prompt when standing in an interactive zone */}
      {interactionPrompt && isSelf && (
        <div
          className="mini-interaction-prompt"
          style={{
            transform: `scaleX(${direction === 'left' ? -1 : 1})`,
          }}
        >
          <kbd>SPACE</kbd>
          <span>{interactionPrompt}</span>
        </div>
      )}

      {/* Name Tag (Counter-transformed so text is always readable) */}
      <div
        className={`mini-name-badge ${isSelf ? 'is-self' : ''}`}
        style={{
          transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        }}
      >
        {isSelf ? (
          <span className="badge-self-label">👑 사용자 #{visitorNum} (나)</span>
        ) : (
          <span className="badge-other-label">사용자 #{visitorNum}</span>
        )}
      </div>

      {/* Boost Nitro Flame Trail */}
      {isBoosted && <div className="mini-boost-trail"></div>}

      {/* 2D Mini Character SVG */}
      <svg
        className="mini-driver-svg"
        viewBox="0 0 38 48"
        width="38"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="visorGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffd600" />
            <stop offset="60%" stopColor="#ffb300" />
            <stop offset="100%" stopColor="#ff8f00" />
          </linearGradient>
          <linearGradient id="helmetGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#002d5c" />
            <stop offset="100%" stopColor="#001428" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="19" cy="45" rx="14" ry="3.5" fill="rgba(0, 0, 0, 0.45)" />

        {/* Legs & Racing Boots */}
        <g className="mini-driver-legs">
          {/* Left Leg */}
          <rect
            className="leg-left"
            x="11"
            y="32"
            width="6.5"
            height="11"
            rx="3"
            fill={suitColor}
            stroke="#000814"
            strokeWidth="0.8"
          />
          <rect x="10.5" y="40" width="7.5" height="4" rx="2" fill="#db0a40" />

          {/* Right Leg */}
          <rect
            className="leg-right"
            x="20.5"
            y="32"
            width="6.5"
            height="11"
            rx="3"
            fill={suitColor}
            stroke="#000814"
            strokeWidth="0.8"
          />
          <rect x="20" y="40" width="7.5" height="4" rx="2" fill="#db0a40" />
        </g>

        {/* Torso & Racing Suit */}
        <rect
          x="10"
          y="18"
          width="18"
          height="16"
          rx="5"
          fill={suitColor}
          stroke="#000814"
          strokeWidth="0.8"
        />
        {/* Red Bull Red Racing Stripe on Torso */}
        <path d="M10 22 Q19 25 28 22" stroke={accentRed} strokeWidth="2.5" fill="none" />
        {/* Belt */}
        <rect x="12" y="30" width="14" height="2.5" rx="1" fill="#ffd600" />
        <rect x="17.5" y="30" width="3" height="2.5" rx="0.5" fill="#ffffff" />

        {/* Arms & Hands */}
        <g className="mini-driver-arms">
          {/* Left Arm */}
          <rect
            className="arm-left"
            x="5.5"
            y="20"
            width="5.5"
            height="11"
            rx="2.5"
            fill={suitColor}
            stroke="#000814"
            strokeWidth="0.6"
          />
          <circle cx="8" cy="31" r="3" fill="#ffffff" />

          {/* Right Arm */}
          <rect
            className="arm-right"
            x="27"
            y="20"
            width="5.5"
            height="11"
            rx="2.5"
            fill={suitColor}
            stroke="#000814"
            strokeWidth="0.6"
          />
          <circle cx="30" cy="31" r="3" fill="#ffffff" />
        </g>

        {/* Helmet */}
        <g className="mini-driver-head">
          <ellipse
            cx="19"
            cy="12"
            rx="12.5"
            ry="11.5"
            fill="url(#helmetGrad)"
            stroke="#000814"
            strokeWidth="0.9"
          />
          {/* Top Bull Horns / Red Streak */}
          <path
            d="M9 8 Q19 4 29 8"
            stroke={accentRed}
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Golden Visor */}
          <rect
            x="11.5"
            y="9"
            width="15"
            height="6.5"
            rx="3"
            fill="url(#visorGlow)"
            stroke="#b78103"
            strokeWidth="0.8"
          />
          {/* Visor Glint Reflection */}
          <path
            d="M13 11 L16 11"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="24" cy="12" r="0.8" fill="#ffffff" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
