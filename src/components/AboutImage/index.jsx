'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutImage.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutImage() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;

gsap.fromTo(
  overlay,
  { xPercent: 0 },
  {
    xPercent: 100,
    duration: 2.4, // Slowed down
    ease: 'power4.out', // Smoother easing
    scrollTrigger: {
      trigger: overlay,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  }
);
  }, []);

  return (
    <div className={styles.imageSectionWrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.revealWrapper}>
          <div ref={overlayRef} className={styles.imageOverlay}></div>
          <img
            src="/images/Aboutimage.webp"
            alt="About Section"
            className={styles.revealedImage}
          />
        </div>
      </div>
    </div>
  );
}