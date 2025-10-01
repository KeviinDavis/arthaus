import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <div className={styles.heroContainer}>
      {/* Background Video */}
      <video
        className={styles.heroImage}
        src="/images/aboutvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Large Text */}
      <div className={styles.mainText}>
        <h1>About us</h1>
      </div>

      {/* Side Middle Text */}
      {/* <div className={styles.sideText}>
        <p>
          50 YEARS OF<br />
          QUALITY<br />
          EXPERIENCE AND<br />
          PHILOSOPHY
        </p>
      </div> */}
    </div>
  );
}