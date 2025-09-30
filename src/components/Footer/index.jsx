
'use client'
import styles from './Footer.module.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Footer() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;

    useEffect(() => {
    const animate = () => {
        if (xPercent <= -100) {
        xPercent = 0;
        }

        gsap.set(firstText.current, { xPercent });
        gsap.set(secondText.current, { xPercent: xPercent + 100 });
        xPercent -= 0.03;

        requestAnimationFrame(animate);
    };

    animate();
    }, []);

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerSticky}>
        <div className={styles.footerContent}>

          {/* ✅ LARGE “AWARDS.” HEADING */}
          <h1 className={styles.displayAward}>awards.</h1>


          {/* ✅ SEPARATOR */}
          <hr className={styles.separator} />

          {/* ✅ NAVIGATION + SUBSCRIBE */}
          <div className={styles.sectionTop}>
            <div className={styles.nav}>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Menu</h3>
                <p>Home Page</p>
                <p>About</p>
                <p>Collection</p>
                <p>Catalogue</p>
              </div>

              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Social Media</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Pinterest</p>
              </div>

              <div className={styles.column}>
                <h3 className={styles.columnTitle}>Contact Us</h3>
                <p>Showroom</p>
                <p>AIRBNB Section</p>
                <p>Contact</p>
                <p>via Email</p>
              </div>

                <div className={styles.column}>
                <h3 className={styles.columnTitle}>Location</h3>
                <p>123 Make Believe St</p>
                <p>Imaginary City, NY 10001</p>
                <p>T: (555) 123-4567</p>
                </div>
            </div>

            <div className={styles.subscribeWrapper}>
              <div className={styles.subscribe}>
                <input
                  type="text"
                  placeholder="SUBSCRIBE AND STAY INFORMED"
                  className={styles.subscribeInput}
                />
                <button className={styles.subscribeButton}></button>
              </div>
            </div>
          </div>

        <p className={styles.copyCentered}>© 2025 RIGAS FURNITURE • by PROWEB</p>
          {/* ✅ BOTTOM SECTION */}
          <hr className={styles.separator1} />

            <div className={styles.sectionBottom}>
            <div className={styles.sliderWrapper}>
                <div ref={slider} className={styles.slider}>
                <p ref={firstText}>ARTHAUS FURNITURE. </p>
                {/* <p ref={secondText}>arthaus furniture</p> */}
                </div>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
}