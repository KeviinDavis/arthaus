import styles from './HeroShelves.module.css';

export default function HeroShelves({ mainText, sideText }) {
  return (
    <div className={styles.heroContainer}>
      {/* Background Image */}
      <img
        src="/images/Products/Shelves/HeroShelves.png"
        alt="HeroShelves"
        className={styles.heroImage}
      />

      {/* Bottom Large Text */}
      <div className={styles.mainText}>
        <h1>Shelves</h1>
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