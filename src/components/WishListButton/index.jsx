'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './WishlistButton.module.css';

export default function WishlistButton() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // Check wishlist in localStorage on mount + listen for updates
  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem('wishlist');
      const wishlist = stored ? JSON.parse(stored) : [];
      setCount(wishlist.length);
    };

    // Initial load
    updateCount();

    // ✅ Listen for both localStorage + custom events
    window.addEventListener('storage', updateCount);
    window.addEventListener('wishlistUpdated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('wishlistUpdated', updateCount);
    };
  }, []);

  // Navigate to wishlist page
  const handleClick = () => {
    router.push('/InterestForm');
  };

  return (
    <button
      className={`${styles.wishlistButton} ${count > 0 ? styles.active : ''}`}
      onClick={handleClick}
      aria-label="View wishlist"
    >
      {/* ✅ Always show the number, even when empty */}
      <span className={styles.count}>{count}</span>
    </button>
  );
}