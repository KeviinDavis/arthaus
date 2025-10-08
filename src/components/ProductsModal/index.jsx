'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductsModal.module.css';

export default function ProductsModal({ isOpen, onClose, product }) {
  const modalRef = useRef(null);
  const [added, setAdded] = useState(false); // track button state

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // ✅ Reset button state when modal opens or product changes
// ✅ Reset button state when modal opens or product changes
useEffect(() => {
  if (!isOpen || !product || !product.id) {
    setAdded(false);
    return;
  }

  try {
    const stored = localStorage.getItem('wishlist');
    const wishlist = stored ? JSON.parse(stored) : [];
    const exists = wishlist.some((item) => item.id.trim() === product.id.trim());
    setAdded(exists);
  } catch {
    setAdded(false);
  }
}, [isOpen, product]);

  // Add to wishlist handler
  const handleAddToWishlist = () => {
    try {
      const stored = localStorage.getItem('wishlist');
      const wishlist = stored ? JSON.parse(stored) : [];

      // Check if already exists
      const exists = wishlist.some((item) => item.id === product.id);
      if (exists) return;

      // Create new entry
      const newItem = {
        id: product.id,
        src: product.src,
        alt: product.alt,
        title: product.title,
        code: product.code,
      };

      const updated = [...wishlist, newItem];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      setAdded(true);
    } catch (err) {
      console.error('Error adding to wishlist:', err);
    }
  };

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

        <div className={styles.imageSection}>
          <img
            src={product.src}
            alt={product.alt || 'Product Image'}
            className={styles.productImage}
          />
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productMaterial}>
            MATERIAL: {product.material}
          </p>
          <p className={styles.productCode}>CODE: {product.code}</p>

          <button
            className={`${styles.wishlistButton} ${
              added ? styles.addedButton : ''
            }`}
            onClick={handleAddToWishlist}
            disabled={added}
          >
            {added ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
}