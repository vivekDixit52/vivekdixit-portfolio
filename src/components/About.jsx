import React from 'react';
import Developer3DAbout from './Developer3DAbout';
import styles from './About.module.css';

const traits = [
  { icon: '🚀', label: 'Fast Learner' },
  { icon: '🎯', label: 'Detail-Oriented' },
  { icon: '💡', label: 'Problem Solver' },
  { icon: '🌐', label: 'Open Source Contributor' },
  { icon: '📐', label: 'Clean Code Advocate' },
  { icon: '⚡', label: 'Performance Focused' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left + ' reveal'}>
        <div className={styles.imgWrap}>
          <Developer3DAbout size={340} />
          <div className={styles.badge1}>
            <span>🎓</span>
            <div>
              <strong>BCA Graduate</strong>
              <span>GLA University, Mathura</span>
            </div>
          </div>
          <div className={styles.badge2}>
            <span>☕</span>
            <div>
              <strong>Full-Stack Trainee</strong>
              <span>Ducat, Noida</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right + ' reveal'}>
        <div className="section-tag">Who I Am</div>
        <h2 className="section-title">Building digital<br/><span>experiences</span> that matter.</h2>

        <p className={styles.para}>
          I'm a <strong>Front-End Engineer</strong> with a genuine love for translating ideas into clean,
          accessible, and visually compelling web interfaces. My foundation is solid in the core web
          trio — HTML, CSS, and JavaScript — and I've built real-world apps using React.
        </p>
        <p className={styles.para}>
          Currently deepening my skills with <strong>Java, Spring Boot, REST APIs, and DSA</strong> at
          Ducat Noida, I'm on my path to becoming a confident full-stack developer ready to tackle
          any challenge.
        </p>
        <p className={styles.para}>
          I believe great software lives at the intersection of clean code and thoughtful design —
          every pixel should have a purpose.
        </p>

        <div className={styles.traits}>
          {traits.map(t => (
            <div key={t.label} className={styles.trait}>
              <span>{t.icon}</span> {t.label}
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="https://github.com/vivekDixit52" target="_blank" rel="noreferrer" className="btn-secondary">GitHub Profile</a>
        </div>
      </div>
    </section>
  );
}
