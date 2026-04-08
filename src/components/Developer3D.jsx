import React from 'react';

export default function Developer3D({ size = 380 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#0d0f1e" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf7a"/>
          <stop offset="100%" stopColor="#f59e4a"/>
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="chairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b"/>
          <stop offset="100%" stopColor="#312e81"/>
        </linearGradient>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2060"/>
          <stop offset="100%" stopColor="#1a1040"/>
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f0f2e"/>
          <stop offset="100%" stopColor="#1a1a4e"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1917"/>
          <stop offset="100%" stopColor="#292524"/>
        </linearGradient>
        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="8" stdDeviation="8" floodColor="#6366f1" floodOpacity="0.3"/>
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background circle glow */}
      <circle cx="190" cy="200" r="160" fill="url(#bgGlow)"/>

      {/* Floating orbs */}
      <circle cx="50" cy="100" r="8" fill="#6366f1" opacity="0.5" filter="url(#glow)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="330" cy="130" r="5" fill="#8b5cf6" opacity="0.6" filter="url(#glow)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="310" cy="280" r="7" fill="#22d3ee" opacity="0.4" filter="url(#glow)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="4s" repeatCount="indefinite"/>
      </circle>

      {/* DESK */}
      <rect x="60" y="250" width="260" height="16" rx="4" fill="url(#deskGrad)" filter="url(#shadow3d)"/>
      <rect x="60" y="264" width="260" height="6" rx="2" fill="#0f0a30" opacity="0.6"/>
      {/* Desk legs */}
      <rect x="80" y="270" width="10" height="55" rx="3" fill="#1a1040"/>
      <rect x="290" y="270" width="10" height="55" rx="3" fill="#1a1040"/>

      {/* MONITOR */}
      <rect x="110" y="150" width="160" height="105" rx="8" fill="#0a0a20" filter="url(#shadow3d)"/>
      <rect x="114" y="154" width="152" height="97" rx="6" fill="url(#screenGrad)"/>
      {/* Screen content - code lines */}
      <rect x="122" y="164" width="60" height="4" rx="2" fill="#8b5cf6" opacity="0.9"/>
      <rect x="186" y="164" width="30" height="4" rx="2" fill="#22d3ee" opacity="0.7"/>
      <rect x="122" y="174" width="20" height="4" rx="2" fill="#6366f1" opacity="0.6"/>
      <rect x="146" y="174" width="50" height="4" rx="2" fill="#a78bfa" opacity="0.8"/>
      <rect x="122" y="184" width="40" height="4" rx="2" fill="#22d3ee" opacity="0.5"/>
      <rect x="166" y="184" width="30" height="4" rx="2" fill="#e879f9" opacity="0.7"/>
      <rect x="130" y="194" width="70" height="4" rx="2" fill="#818cf8" opacity="0.6"/>
      <rect x="122" y="204" width="25" height="4" rx="2" fill="#8b5cf6" opacity="0.9"/>
      <rect x="151" y="204" width="45" height="4" rx="2" fill="#a78bfa" opacity="0.5"/>
      <rect x="130" y="214" width="55" height="4" rx="2" fill="#22d3ee" opacity="0.7"/>
      <rect x="122" y="224" width="80" height="4" rx="2" fill="#6366f1" opacity="0.6"/>
      {/* Blinking cursor */}
      <rect x="122" y="234" width="3" height="8" rx="1" fill="#a78bfa">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      {/* Monitor stand */}
      <rect x="181" y="255" width="18" height="8" rx="2" fill="#0f0a30"/>
      <rect x="171" y="262" width="38" height="5" rx="2" fill="#0f0a30"/>
      {/* Monitor frame glow */}
      <rect x="110" y="150" width="160" height="105" rx="8" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.4"/>

      {/* KEYBOARD */}
      <rect x="128" y="247" width="124" height="18" rx="4" fill="#1e1b4b"/>
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <rect key={i} x={132 + i*13} y={251} width="10" height="6" rx="2" fill="#312e81" opacity="0.9"/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={135 + i*13} y={259} width="10" height="4" rx="2" fill="#312e81" opacity="0.7"/>
      ))}

      {/* CHAIR */}
      <rect x="148" y="308" width="84" height="10" rx="5" fill="url(#chairGrad)"/>
      <rect x="170" y="318" width="10" height="30" rx="3" fill="#1e1b4b"/>
      <rect x="200" y="318" width="10" height="30" rx="3" fill="#1e1b4b"/>
      <ellipse cx="190" cy="350" rx="40" ry="8" fill="#1a1040" opacity="0.7"/>

      {/* BODY - shirt */}
      <ellipse cx="190" cy="300" rx="40" ry="15" fill="#4338ca" opacity="0.5"/>
      <path d="M155 285 Q190 310 225 285 L230 330 Q190 345 150 330 Z" fill="url(#shirtGrad)" filter="url(#shadow3d)"/>
      {/* Collar */}
      <path d="M178 285 L190 298 L202 285" stroke="#a5b4fc" strokeWidth="1.5" fill="none" opacity="0.7"/>

      {/* ARMS */}
      {/* Left arm */}
      <path d="M158 295 Q140 305 130 250" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Right arm */}
      <path d="M222 295 Q240 305 250 250" stroke="url(#skinGrad)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Hands */}
      <ellipse cx="130" cy="249" rx="9" ry="7" fill="#f59e4a"/>
      <ellipse cx="250" cy="249" rx="9" ry="7" fill="#f59e4a"/>

      {/* NECK */}
      <rect x="183" y="260" width="14" height="18" rx="5" fill="url(#skinGrad)"/>

      {/* HEAD */}
      <ellipse cx="190" cy="240" rx="32" ry="35" fill="url(#skinGrad)" filter="url(#shadow3d)"/>
      {/* Hair */}
      <path d="M158 230 Q160 198 190 195 Q220 198 222 230 Q215 210 190 208 Q165 210 158 230Z" fill="url(#hairGrad)"/>
      <path d="M158 228 Q155 218 160 210 Q162 205 167 204" stroke="#1c1917" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Eyes */}
      <ellipse cx="179" cy="240" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="201" cy="240" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="180" cy="241" rx="3" ry="3.5" fill="#1c1917"/>
      <ellipse cx="202" cy="241" rx="3" ry="3.5" fill="#1c1917"/>
      <circle cx="181" cy="240" r="1" fill="white" opacity="0.8"/>
      <circle cx="203" cy="240" r="1" fill="white" opacity="0.8"/>
      {/* Eyebrows */}
      <path d="M174 234 Q179 231 184 233" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M196 233 Q201 231 206 234" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Smile */}
      <path d="M182 252 Q190 258 198 252" stroke="#c2856b" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Glasses */}
      <rect x="172" y="235" width="16" height="11" rx="5" fill="none" stroke="#6366f1" strokeWidth="1.8" opacity="0.9"/>
      <rect x="192" y="235" width="16" height="11" rx="5" fill="none" stroke="#6366f1" strokeWidth="1.8" opacity="0.9"/>
      <line x1="188" y1="240" x2="192" y2="240" stroke="#6366f1" strokeWidth="1.5" opacity="0.9"/>
      <line x1="157" y1="240" x2="172" y2="240" stroke="#6366f1" strokeWidth="1.5" opacity="0.7"/>
      <line x1="208" y1="240" x2="222" y2="240" stroke="#6366f1" strokeWidth="1.5" opacity="0.7"/>

      {/* Code floating elements */}
      <g filter="url(#glow)" opacity="0.8">
        <text x="42" y="175" fontFamily="Fira Code, monospace" fontSize="11" fill="#22d3ee" opacity="0.7">
          {'</>'}
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3.5s" repeatCount="indefinite"/>
        </text>
        <text x="315" y="200" fontFamily="Fira Code, monospace" fontSize="10" fill="#e879f9" opacity="0.6">
          {'{ }'}
          <animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="2.8s" repeatCount="indefinite"/>
        </text>
        <text x="55" y="280" fontFamily="Fira Code, monospace" fontSize="9" fill="#a78bfa" opacity="0.5">
          {'()=>'}
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="4s" repeatCount="indefinite"/>
        </text>
      </g>
    </svg>
  );
}
