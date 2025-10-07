'use client';
import { useEffect, useRef } from 'react';
import styles from './ProductsGrid.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGrid({ items }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const overlays = gridRef.current.querySelectorAll(`.${styles.imageOverlay}`);

    overlays.forEach((overlay) => {
      gsap.fromTo(
        overlay,
        { xPercent: 0 },
        {
          xPercent: 100,
          duration: 2.6,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: overlay,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.productsWrapper}>
      <div ref={gridRef} className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageContainer}>
              <div className={styles.revealWrapper}>
                <div className={styles.imageOverlay}></div>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                />
              </div>
            </div>
            <h4 className={styles.title}>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}