'use client';
import { useEffect, useRef } from 'react';
import styles from './ProductsModal.module.css';

export default function ProductsModal({ isOpen, onClose, product }) {
  const modalRef = useRef(null);

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

        <button className={styles.wishlistButton}>Add to wishlist</button>
      </div>
    </div>
  </div>
);
}