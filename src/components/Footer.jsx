import React from 'react';
import styles from './Footer.module.css';

const links = [
  { label: 'GitHub', href: 'https://github.com/vivekDixit52' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivek-dixit-88a652237/' },
  { label: 'Email', href: 'mailto:dixitvivek857@gmail.com' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.logo}>
          <span className={styles.angle}>&lt;</span>VD<span className={styles.angle}>/&gt;</span>
        </span>
        <p className={styles.tagline}>Crafting the web, one component at a time.</p>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Vivek Dixit. Built with React & ❤️</p>
        <div className={styles.navLinks}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
