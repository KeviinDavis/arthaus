'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './MenuOverlay.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function MenuOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const [animation, setAnimation] = useState(null); // Save timeline for reverse

  // Play enter animation on mount
  useEffect(() => {
    const tl = gsap.fromTo(
      overlayRef.current,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: 'power4.out',
        paused: true,
        onReverseComplete: () => {
          onClose(); // Only close after reverse animation
        },
      }
    );
    tl.play(); // Play forward
    setAnimation(tl); // Store timeline
  }, [onClose]);

  // Handle CLOSE click
  const handleClose = () => {
    if (animation) {
      animation.reverse(); // Play reverse animation
    } else {
      onClose(); // Fallback just in case
    }
  };

  return (
    <div ref={overlayRef} className={styles.overlayWrapper}>
      {/* Top-right controls: CLOSE ● 🔍 */}
      <div className={styles.menuTopRight}>
        <button className={styles.menuBtn} onClick={handleClose}>
          CLOSE
        </button>
        <span className={styles.circle}></span>
        <button className={styles.searchBtn} aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* Main 3-column layout */}
      <div className={styles.menuGrid}>
        {/* Left Column: Logo */}
        <div className={styles.leftColumn}>
          <Image
            src="/images/art2bgrwhite.svg"
            alt="Arthaus Logo"
            width={350}
            height={350}
          />
        </div>

        {/* Center Column: Navigation */}
        <div className={styles.centerColumn}>
          <ul className={styles.navList}>
            {['Projects', 'About', 'Philosophy', 'Timeline', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact + Social */}
        <div className={styles.rightColumn}>
          <div className={styles.contactBlock}>
            <p className={styles.blockHeading}>Get in touch</p>
            <p>Info Desk: contact@arthaus-furniture.gr</p>
            <p>AIRBnB: airbnb@arthaus-furniture.gr</p>
            <p>123 Studio Lane</p>
            <p>NYC, NY 10001</p>
            <p>T: (212) 000-0000</p>
          </div>

          <div className={styles.socialBlock}>
            <p className={styles.blockHeading}>Social Media</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>

      {/* Footer meta text and big wordmark */}
      <div className={styles.overlayFooterMeta}>
        <span>SINCE 1975</span>
        <span>©2025</span>
      </div>

      <div className={styles.overlayFooterText}>
        <p>ARTHAUS FURNITURE</p>
      </div>
    </div>
  );
}