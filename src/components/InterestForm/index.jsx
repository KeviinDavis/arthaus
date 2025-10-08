'use client';
import styles from './InterestForm.module.css';

export default function InterestForm() {
  return (
    <div className={styles.formWrapper}>
      {/* Header */}
      <div className={styles.headerSection}>
        <h1>My interest list</h1>
      </div>

      {/* Wishlist Items */}
      <div className={styles.itemSection}>
        {/* Item 1 */}
        <div className={styles.itemRow}>
          <div className={styles.itemInfo}>
            <img
              src="/images/Products/Home/shelfUk.webp"
              alt="Wishlist item"
              className={styles.itemImage}
            />
            <div className={styles.itemText}>
              <h4>GRIF SHOWCASE NATURAL 53×40×197</h4>
              <p>Code: 24-0703</p>
            </div>
          </div>
          <button className={styles.removeBtn}>×</button>
        </div>

        {/* Item 2 */}
        <div className={styles.itemRow}>
          <div className={styles.itemInfo}>
            <img
              src="/images/Products/Home/shelflargebrown.webp"
              alt="Wishlist item"
              className={styles.itemImage}
            />
            <div className={styles.itemText}>
              <h4>ARIS MODERN CHAIR 45×45×80</h4>
              <p>Code: 18-0245</p>
            </div>
          </div>
          <button className={styles.removeBtn}>×</button>
        </div>
      </div>

      {/* Form */}
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