'use client';
import styles from './Collections.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const imageRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    imageRefs.current.forEach((el, i) => {
      const speed = [0.95, 3.75, 2][i]; // Custom speed per image

      gsap.to(el, {
        yPercent: -20 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', // when image enters viewport
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const imageData = [
    { src: '/images/Products/Home/HeroHome.png', label: 'Home' },
    { src: '/images/outsidearea.png', label: 'OUTSIDE' },
    { src: '/images/kitchenarea.png', label: 'KITCHEN' },
    { src: '/images/livingarea.png', label: 'LIVING' }, // Take Down ???

  ];

    return (
    <section className={styles.collectionsWrapper}>
        {imageData.map((item, index) => (
        <Link href="/products" key={index} className={styles.collectionItem}>
            <div
            className={styles.parallaxGroup}
            ref={el => (imageRefs.current[index] = el)}
            >
            <div className={styles.imageContainer}>
                <img src={item.src} alt={item.label} />
            </div>
            <h4>{item.label}</h4>
            </div>
        </Link>
        ))}
    </section>
    );
}