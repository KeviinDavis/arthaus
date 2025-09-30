'use client';
import styles from './About.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      {/* Reused Button */}
      <Link href="/about" className={styles.aboutButton}>
        <button>
          <span>ABOUT</span>
          <div className={styles.buttonCircle}></div>
        </button>
      </Link>

      {/* Text Block */}
      <p className={styles.aboutText}>
        Attention to detail is paramount, with intricate carvings,
        bespoke upholstery and refined finishes elevating each
        piece to a statement of opulence.
      </p>
    </div>
  );
}