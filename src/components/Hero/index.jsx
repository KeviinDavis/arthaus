import styles from './Hero.module.css';

export default function Hero({ mainText, sideText }) {
  return (
    <div className={styles.heroContainer}>
      {/* Background Image */}
      <img
        src="/images/landingHero.png"
        alt="Landing Hero"
        className={styles.heroImage}
      />

      {/* Bottom Large Text */}
      <div className={styles.mainText}>
        <h1>exclusive</h1>
      </div>

      {/* Side Middle Text */}
      <div className={styles.sideText}>
        <p>
            50 YEARS OF<br />
            QUALITY<br />
            EXPERIENCE AND<br />
            PHILOSOPHY
        </p>
      </div>
    </div>
  );
}