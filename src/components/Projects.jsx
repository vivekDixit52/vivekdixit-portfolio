import React, { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    num: '01',
    title: 'E-Commerce Website',
    desc: 'A full-featured online store built with React and integrated with Stripe for secure payments. Features product listing, search, cart management, and smooth checkout flow — optimized for both mobile and desktop.',
    tech: ['React.js', 'Stripe API', 'CSS3', 'JavaScript', 'Hooks'],
    color: '#6366f1',
    icon: '🛒',
    link: 'https://github.com/vivekDixit52',
    live: '#',
    highlights: ['Stripe payment integration', 'Responsive cart UI', 'Product search & filter'],
  },
  {
    num: '02',
    title: 'Personal Blog',
    desc: 'A minimal, fully responsive personal blog featuring article listing, category filters, and dark/light mode toggle. Built mobile-first ensuring a seamless reading experience across all screen sizes.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    color: '#8b5cf6',
    icon: '✍️',
    link: 'https://github.com/vivekDixit52',
    live: '#',
    highlights: ['Dark/Light mode toggle', 'Category filtering', 'Mobile-first design'],
  },
  {
    num: '03',
    title: 'Portfolio Website',
    desc: 'This very portfolio — a modern, animated personal site built as a React application. Features scroll-triggered animations, 3D SVG illustrations, a typed role switcher, and a fully responsive layout.',
    tech: ['React.js', 'CSS Modules', 'SVG Animation', 'Intersection Observer'],
    color: '#e879f9',
    icon: '🎨',
    link: 'https://github.com/vivekDixit52',
    live: '#',
    highlights: ['3D SVG illustrations', 'CSS Module architecture', 'Scroll animations'],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header + ' reveal'}>
        <div className="section-tag">What I've Built</div>
        <h2 className="section-title">Featured <span>projects</span>.</h2>
        <p className="section-sub">Hands-on projects that showcase my skills in front-end development, design thinking, and problem-solving.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={styles.card + ' reveal'}
            style={{ transitionDelay: `${i * 0.1}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.cardInner}>
              <div className={styles.topRow}>
                <span className={styles.num}>{p.num}</span>
                <span className={styles.projIcon}>{p.icon}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>

              <ul className={styles.highlights}>
                {p.highlights.map(h => (
                  <li key={h}><span style={{ color: p.color }}>✓</span> {h}</li>
                ))}
              </ul>

              <div className={styles.tech}>
                {p.tech.map(t => (
                  <span key={t} className={styles.tag} style={{ borderColor: p.color + '44', color: p.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={p.link} target="_blank" rel="noreferrer" className={styles.link}>
                  GitHub →
                </a>
                <a href={p.live} className={styles.linkLive} style={{ color: p.color, borderColor: p.color + '44' }}>
                  Live Demo ↗
                </a>
              </div>
            </div>
            <div
              className={styles.glow}
              style={{ background: `radial-gradient(ellipse at 20% 20%, ${p.color}14, transparent 65%)`, opacity: hovered === i ? 1 : 0 }}
            />
            <div className={styles.topBorder} style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`, opacity: hovered === i ? 1 : 0 }}/>
          </div>
        ))}
      </div>
    </section>
  );
}
