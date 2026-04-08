import React from 'react';

export default function Developer3DAbout({ size = 340 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow2" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#07080f" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="skinGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf7a"/>
          <stop offset="100%" stopColor="#f59e4a"/>
        </linearGradient>
        <linearGradient id="shirtGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#312e81"/>
          <stop offset="100%" stopColor="#4c1d95"/>
        </linearGradient>
        <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
        <linearGradient id="couchGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3730a3"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </linearGradient>
        <filter id="shadow3d2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="7" floodColor="#8b5cf6" floodOpacity="0.25"/>
        </filter>
        <filter id="glow2">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <circle cx="170" cy="180" r="145" fill="url(#bgGlow2)"/>

      {/* Floating particles */}
      <circle cx="40" cy="90" r="5" fill="#6366f1" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="110" r="7" fill="#e879f9" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,10;0,0" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="290" cy="260" r="5" fill="#22d3ee" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-7;0,0" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="240" r="4" fill="#a78bfa" opacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="4s" repeatCount="indefinite"/>
      </circle>

      {/* COUCH / BEAN BAG */}
      <ellipse cx="170" cy="295" rx="110" ry="28" fill="#1a1040" opacity="0.6"/>
      <path d="M60 230 Q60 200 80 195 Q170 188 260 195 Q280 200 280 230 Q280 275 170 278 Q60 275 60 230Z" fill="url(#couchGrad)" filter="url(#shadow3d2)"/>
      <path d="M60 230 Q60 210 80 205 Q170 198 260 205 Q280 210 280 230" fill="none" stroke="#4338ca" strokeWidth="2" opacity="0.5"/>
      {/* Couch armrests */}
      <rect x="48" y="215" width="20" height="55" rx="10" fill="#3730a3"/>
      <rect x="272" y="215" width="20" height="55" rx="10" fill="#3730a3"/>

      {/* BODY */}
      <path d="M138 240 Q170 258 202 240 L208 285 Q170 298 132 285 Z" fill="url(#shirtGrad2)" filter="url(#shadow3d2)"/>
      {/* T-shirt detail */}
      <text x="155" y="270" fontFamily="Fira Code, monospace" fontSize="9" fill="#818cf8" opacity="0.8">{'<dev/>'}</text>

      {/* ARMS - relaxed pose */}
      {/* Left arm resting */}
      <path d="M140 248 Q118 255 100 252" stroke="url(#skinGrad2)" strokeWidth="13" strokeLinecap="round" fill="none"/>
      <ellipse cx="98" cy="252" rx="8" ry="6" fill="#f59e4a"/>
      {/* Right arm holding laptop */}
      <path d="M200 248 Q218 255 228 248" stroke="url(#skinGrad2)" strokeWidth="13" strokeLinecap="round" fill="none"/>
      <ellipse cx="230" cy="248" rx="8" ry="6" fill="#f59e4a"/>

      {/* LAPTOP on lap */}
      <rect x="112" y="248" width="116" height="68" rx="6" fill="url(#laptopGrad)" filter="url(#shadow3d2)"/>
      {/* Screen */}
      <rect x="116" y="252" width="108" height="55" rx="4" fill="#07080f"/>
      {/* Code on screen */}
      <rect x="124" y="260" width="45" height="3" rx="1.5" fill="#6366f1" opacity="0.9"/>
      <rect x="173" y="260" width="20" height="3" rx="1.5" fill="#22d3ee" opacity="0.7"/>
      <rect x="124" y="268" width="15" height="3" rx="1.5" fill="#a78bfa" opacity="0.6"/>
      <rect x="143" y="268" width="35" height="3" rx="1.5" fill="#818cf8" opacity="0.8"/>
      <rect x="132" y="276" width="55" height="3" rx="1.5" fill="#e879f9" opacity="0.7"/>
      <rect x="124" y="284" width="30" height="3" rx="1.5" fill="#22d3ee" opacity="0.6"/>
      <rect x="158" y="284" width="40" height="3" rx="1.5" fill="#6366f1" opacity="0.8"/>
      <rect x="124" y="292" width="50" height="3" rx="1.5" fill="#a78bfa" opacity="0.5"/>
      {/* Cursor blink */}
      <rect x="124" y="298" width="2" height="6" rx="1" fill="#818cf8">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      {/* Laptop glow */}
      <rect x="112" y="248" width="116" height="68" rx="6" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.4"/>
      {/* Laptop touchpad */}
      <rect x="148" y="314" width="44" height="8" rx="3" fill="#1e1b4b" opacity="0.8"/>

      {/* NECK */}
      <rect x="163" y="224" width="14" height="16" rx="5" fill="url(#skinGrad2)"/>

      {/* HEAD */}
      <ellipse cx="170" cy="205" rx="30" ry="33" fill="url(#skinGrad2)" filter="url(#shadow3d2)"/>
      {/* Hair */}
      <path d="M140 200 Q142 172 170 170 Q198 172 200 200 Q193 180 170 178 Q147 180 140 200Z" fill="#1c1917"/>
      <path d="M140 198 Q137 186 143 178" stroke="#1c1917" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Ears */}
      <ellipse cx="140" cy="206" rx="5" ry="7" fill="#f59e4a"/>
      <ellipse cx="200" cy="206" rx="5" ry="7" fill="#f59e4a"/>
      {/* Eyes */}
      <ellipse cx="160" cy="207" rx="4.5" ry="5" fill="white"/>
      <ellipse cx="180" cy="207" rx="4.5" ry="5" fill="white"/>
      <ellipse cx="161" cy="208" rx="2.8" ry="3.2" fill="#1c1917"/>
      <ellipse cx="181" cy="208" rx="2.8" ry="3.2" fill="#1c1917"/>
      <circle cx="162" cy="207" r="0.9" fill="white" opacity="0.9"/>
      <circle cx="182" cy="207" r="0.9" fill="white" opacity="0.9"/>
      {/* Eyebrows */}
      <path d="M155 201 Q160 198 165 200" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M175 200 Q180 198 185 201" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Relaxed smile */}
      <path d="M163 218 Q170 224 177 218" stroke="#c2856b" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Headphones */}
      <path d="M141 200 Q142 173 170 170 Q198 173 199 200" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <rect x="137" y="198" width="9" height="12" rx="4" fill="#4f46e5"/>
      <rect x="194" y="198" width="9" height="12" rx="4" fill="#4f46e5"/>

      {/* Stars / sparkles */}
      <g filter="url(#glow2)" opacity="0.7">
        <text x="44" y="160" fontFamily="Fira Code, monospace" fontSize="16" fill="#e879f9">✦
          <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite"/>
        </text>
        <text x="290" y="180" fontFamily="Fira Code, monospace" fontSize="13" fill="#22d3ee">✦
          <animateTransform attributeName="transform" type="scale" values="1;1.3;1" dur="2.5s" repeatCount="indefinite"/>
        </text>
        <text x="70" y="290" fontFamily="Fira Code, monospace" fontSize="11" fill="#a78bfa">★
          <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="3s" repeatCount="indefinite"/>
        </text>
      </g>
    </svg>
  );
}
