'use client';
import { useState, useEffect } from 'react';
import styles from './InterestForm.module.css';
import HomeData from '/src/Data/HomeData';

export default function InterestForm() {
  const [wishlist, setWishlist] = useState([]);

  // Function to load wishlist from localStorage
  const loadWishlist = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    } else {
      setWishlist([]);
    }
  };

  // Load wishlist on mount + listen for updates
  useEffect(() => {
    loadWishlist();

    // ✅ Listen for localStorage + custom wishlistUpdated events
    const handleStorageChange = () => loadWishlist();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('wishlistUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
    };
  }, []);

  // Remove item from wishlist and update localStorage
  const removeItem = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem('wishlist', JSON.stringify(updatedList));

    // ✅ Notify all components instantly (same tab + Next.js safe)
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  return (
    <div className={styles.formWrapper}>
      {/* Header */}
      <div className={styles.headerSection}>
        <h1>My interest list</h1>
      </div>

      {/* Wishlist Items */}
      <div className={styles.itemSection}>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              <div className={styles.itemInfo}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.itemImage}
                />
                <div className={styles.itemText}>
                  <h4>{item.title}</h4>
                  <p>Code: {item.code}</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className={styles.removeBtn}
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p className={styles.emptyText}>Your wishlist is empty.</p>
        )}
      </div>

      {/* Contact Form */}
      <div className={styles.contactSection}>
        <h3>Contact Information</h3>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" />
          <div className={styles.doubleRow}>
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea placeholder="Message" rows="5" />
          <button type="submit">Submission</button>
        </form>
      </div>
    </div>
  );
}