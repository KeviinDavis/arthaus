
import styles from './FeaturedProduct.module.css';

export default function FeaturedProduct() {
  return (
    <div className={styles.featuredWrapper}>
      <img
        src="/images/featureproduct.png"
        alt="Featured Product"
        className={styles.featuredImage}
      />
      <div className={styles.featuredText}>
        <h1>ELEGANCE ISN’T<br />ADDED, IT’S CURATED</h1>
      </div>

    <div className={styles.featuredButton}>
    <button>
        <span>OUR PROJECTS</span>
        <div className={styles.buttonCircle}></div>
    </button>
    </div>
    </div>
  );
}