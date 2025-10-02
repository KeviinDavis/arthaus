"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";

// Dynamically import the MenuOverlay component (can be removed if you prefer static import)
const MenuOverlay = dynamic(() => import("@/components/MenuOverlay"), { ssr: false });

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW: Controls overlay state

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          {/* Left: Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/art2bgr.svg"
              alt="Site Logo"
              width={200}
              height={200}
              priority
            />
          </Link>

          {/* Right: Menu Trigger with circle + search */}
          <div className={styles.menuContainer}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuOpen(true)} // NEW: Opens menu
            >
              MENU
            </button>
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

      {/* NEW: MenuOverlay component */}
      {isMenuOpen && (
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}