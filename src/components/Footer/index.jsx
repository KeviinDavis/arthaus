import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerSticky}>
        <div className={styles.footerContent}>
          <div className={styles.sectionTop}>
            <div className={styles.nav}>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Our Mission</p>
                <p>Contact Us</p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Education</h3>
                <p>News</p>
                <p>Learn</p>
                <p>Certification</p>
                <p>Publications</p>
              </div>
            </div>
          </div>

          <div className={styles.sectionBottom}>
            <h1 className={styles.largeText}>Sticky Footer</h1>
            <p className={styles.copy}>©copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}