"use client";
import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo6.svg"
            alt="Site Logo"
            width={200}
            height={200}
            priority
          />
        </Link>

        {/* Right: Menu Trigger with circle + search */}
        <div className={styles.menuContainer}>
          <button className={styles.menuBtn}>MENU</button>
          <span className={styles.circle}></span>
          <button className={styles.searchBtn} aria-label="Search">
            {/* Inline SVG for magnifying glass */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}