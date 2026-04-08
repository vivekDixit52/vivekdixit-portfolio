import React from 'react';
import Developer3D from './Developer3D';
import styles from './Hero.module.css';

const roles = ['Front-End Engineer', 'React Developer', 'UI Craftsman', 'Full-Stack Trainee'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setFade(true);
      }, 350);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid}></div>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Available for opportunities
        </div>

        <h1 className={styles.headline}>
          Hi, I'm <span className={styles.name}>Vivek Dixit</span><br/>
          <span className={styles.role} style={{ opacity: fade ? 1 : 0 }}>
            {roles[roleIdx]}
          </span>
        </h1>

        <p className={styles.sub}>
          I craft <strong>responsive</strong>, performant web experiences with clean code and
          thoughtful design. Currently levelling up into <strong>Java Full-Stack</strong> development.
        </p>

        <div className={styles.codeSnippet}>
          <span className={styles.codeKeyword}>const</span>{' '}
          <span className={styles.codeVar}>vivek</span>{' = {'}
          <br/>
          &nbsp;&nbsp;<span className={styles.codeProp}>role</span>:{' '}
          <span className={styles.codeStr}>"Front-End Engineer"</span>,
          <br/>
          &nbsp;&nbsp;<span className={styles.codeProp}>status</span>:{' '}
          <span className={styles.codeStr}>"open_to_work"</span>
          <span className={styles.cursor}>|</span>
          <br/>
          {'}'}<span className={styles.codeSemi}>;</span>
        </div>

        <div className={styles.actions}>
          <a href="#projects" className="btn-primary">See My Work ✦</a>
          <a href="#contact" className="btn-secondary">Let's Talk →</a>
        </div>

        <div className={styles.stats}>
          {[['3+','Projects'], ['2','Internships'], ['5+','Skills']].map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.illustration}>
        <div className={styles.floatWrap}>
          <Developer3D size={400} />
        </div>
        <div className={styles.ring1}></div>
        <div className={styles.ring2}></div>
      </div>
    </section>
  );
}
