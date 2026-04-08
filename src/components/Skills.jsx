import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const skills = [
  { name: 'HTML5', icon: '🏗️', level: 95, desc: 'Semantic & Accessible Markup', color: '#f97316' },
  { name: 'CSS3', icon: '🎨', level: 95, desc: 'Animations, Flexbox, Grid', color: '#06b6d4' },
  { name: 'JavaScript', icon: '⚡', level: 90, desc: 'ES6+, DOM, APIs', color: '#eab308' },
  { name: 'Bootstrap', icon: '🅱️', level: 90, desc: 'Responsive UI Components', color: '#7c3aed' },
  { name: 'React.js', icon: '⚛️', level: 65, desc: 'Components, Hooks, State', color: '#22d3ee' },
  { name: 'Java', icon: '☕', level: 90, desc: 'OOP, Spring Boot (Learning)', color: '#f59e0b' },
  { name: 'Git & GitHub', icon: '🔧', level: 85, desc: 'Version Control & Collaboration', color: '#f43f5e' },
  { name: 'Responsive Design', icon: '📱', level: 88, desc: 'Mobile-First Layouts', color: '#10b981' },
];

export default function Skills() {
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.level + '%';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });

    barRefs.current.forEach(b => b && observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header + ' reveal'}>
        <div className="section-tag">What I Use</div>
        <h2 className="section-title">My tech <span>toolkit</span>.</h2>
        <p className="section-sub">A core set of technologies I use to craft modern, performant web interfaces.</p>
      </div>

      <div className={styles.grid}>
        {skills.map((s, i) => (
          <div key={s.name} className={styles.card + ' reveal'} style={{ transitionDelay: `${i * 0.06}s` }}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.levelBadge}>{s.level}%</span>
            </div>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                ref={el => barRefs.current[i] = el}
                data-level={s.level}
                style={{ width: '0%', background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
              />
            </div>
            <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse at 30% 30%, ${s.color}18, transparent 65%)` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
