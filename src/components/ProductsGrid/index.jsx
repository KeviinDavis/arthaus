import styles from './ProductsGrid.module.css';

export default function ProductsGrid({ items }) {
  return (
    <section className={styles.productsWrapper}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageContainer}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
              />
            </div>
            <h4 className={styles.title}>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}