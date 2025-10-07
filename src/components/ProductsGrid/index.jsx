'use client';
import { useEffect, useRef } from 'react';
import styles from './ProductsGrid.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsGrid({ items }) {
  const gridRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const overlays = gridRef.current.querySelectorAll(`.${styles.imageOverlay}`);

    // Scroll Reveal Overlay Animation
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

    // Parallax Scroll Animation (Desktop only)
    if (window.innerWidth < 768) return;

        imageRefs.current.forEach((el, index) => {
const speed = [3, 15, 11][index % 3];

gsap.to(el, {
  y: -15 * speed, // pixel-based control
  ease: 'none',
  scrollTrigger: {
    trigger: el,
    start: 'top bottom',
    scrub: true,
  },
});
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

return (
  <section className={styles.productsWrapper}>
    <div ref={gridRef} className={styles.grid}>
      {items.map((item, index) => (
        <div className={styles.card} key={index}>
          <div
            className={styles.parallaxGroup}
            ref={(el) => (imageRefs.current[index] = el)}
          >
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
        </div>
      ))}
    </div>
  </section>
);
}