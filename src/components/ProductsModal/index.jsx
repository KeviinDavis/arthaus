'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductsModal.module.css';

export default function ProductsModal({ isOpen, onClose, product }) {
  const modalRef = useRef(null);
  const [added, setAdded] = useState(false); // true if product is in wishlist

  /* ---------- UTILITIES ---------- */
  const readWishlist = () => {
    try {
      const stored = localStorage.getItem('wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const saveWishlist = (list) => {
    localStorage.setItem('wishlist', JSON.stringify(list));
    // notify all listeners (InterestForm + Floating Button)
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  /* ---------- EFFECTS ---------- */

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Determine initial added state whenever modal opens or product changes
  useEffect(() => {
    if (!isOpen || !product?.id) return;
    const wishlist = readWishlist();
    setAdded(wishlist.some((item) => item.id === product.id));
  }, [isOpen, product]);

  /* ---------- TOGGLE HANDLER ---------- */
  const handleToggleWishlist = () => {
    if (!product?.id) return;
    const wishlist = readWishlist();
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      // Remove
      const updated = wishlist.filter((item) => item.id !== product.id);
      saveWishlist(updated);
      setAdded(false);
    } else {
      // Add
      const newItem = {
        id: product.id,
        src: product.src,
        alt: product.alt,
        title: product.title,
        code: product.code,
      };
      const updated = [...wishlist, newItem];
      saveWishlist(updated);
      setAdded(true);
    }
  };

  /* ---------- RENDER ---------- */
  if (!isOpen || !product) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}>
      <div
        ref={modalRef}
        className={`${styles.modalContainer} ${
          isOpen ? styles.modalActive : ''
        }`}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {/* Left: image */}
        <div className={styles.imageSection}>
          <img
            src={product.src}
            alt={product.alt || 'Product Image'}
            className={styles.productImage}
          />
        </div>

        {/* Right: info */}
        <div className={styles.infoSection}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productMaterial}>
            MATERIAL: {product.material}
          </p>
          <p className={styles.productCode}>CODE: {product.code}</p>

          {/* Toggle button */}
          <button
            className={`${styles.wishlistButton} ${
              added ? styles.addedButton : ''
            }`}
            onClick={handleToggleWishlist}
          >
            {added ? 'Remove from wishlist' : 'Add to wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
}