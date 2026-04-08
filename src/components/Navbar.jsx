import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── OVERLAY ── */}
      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 998,
          }}
        />
      )}

      {/* ── MOBILE SLIDE PANEL ── */}
      <div style={{
        position: 'fixed',
        top: 0, right: menuOpen ? 0 : '-100%',
        width: '75%', maxWidth: '280px',
        height: '100vh',
        background: '#0d0f1e',
        borderLeft: '1px solid rgba(139,92,246,0.25)',
        zIndex: 999,
        transition: 'right 0.35s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        gap: '0.5rem',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
      }}>
        <p style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.7rem',
          color: '#6b7280',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
          paddingLeft: '1rem',
        }}>// navigation</p>

        {navLinks.map(l => (
          <a
            key={l.label}
            href={l.href}
            onClick={close}
            style={{
              display: 'block',
              padding: '0.9rem 1.2rem',
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              borderRadius: '10px',
              transition: 'background 0.2s, color 0.2s',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(139,92,246,0.12)';
              e.target.style.color = '#a78bfa';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#d1d5db';
            }}
          >
            {l.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={close}
          style={{
            display: 'block',
            marginTop: '1rem',
            padding: '0.9rem 1.2rem',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            boxShadow: '0 0 20px rgba(139,92,246,0.3)',
          }}
        >
          Hire Me ✦
        </a>

        {/* Social links */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(139,92,246,0.15)', display: 'flex', gap: '1rem', paddingLeft: '0.5rem' }}>
          <a href="https://github.com/vivekDixit52" target="_blank" rel="noreferrer"
            style={{ color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/vivek-dixit-88a652237/" target="_blank" rel="noreferrer"
            style={{ color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 6vw',
        background: scrolled ? 'rgba(7,8,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.15)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          fontWeight: 800, fontSize: '1.2rem',
          color: 'white', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '2px',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif",
        }}>
          <span style={{ color: '#8b5cf6', fontFamily: "'Fira Code', monospace", fontSize: '1rem' }}>&lt;</span>
          VD
          <span style={{ color: '#8b5cf6', fontFamily: "'Fira Code', monospace", fontSize: '1rem' }}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: '2rem',
          listStyle: 'none', margin: 0, padding: 0,
        }} className="desktop-nav-links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{
                color: '#9ca3af', textDecoration: 'none',
                fontSize: '0.92rem', fontWeight: 400,
                fontFamily: "'Outfit', sans-serif",
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#a78bfa'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              padding: '0.5rem 1.3rem',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white', borderRadius: '6px',
              textDecoration: 'none', fontWeight: 600,
              fontSize: '0.85rem',
              fontFamily: "'Outfit', sans-serif",
              whiteSpace: 'nowrap',
            }}>Hire Me ✦</a>
          </li>
        </ul>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column', justifyContent: 'center', gap: '5px',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px',
          }}
          className="burger-btn"
        >
          <span style={{
            display: 'block', width: '26px', height: '2px',
            background: '#a78bfa', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '26px', height: '2px',
            background: '#a78bfa', borderRadius: '2px',
            transition: 'all 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '26px', height: '2px',
            background: '#a78bfa', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>

      </nav>

      {/* ── RESPONSIVE STYLE TAG ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
