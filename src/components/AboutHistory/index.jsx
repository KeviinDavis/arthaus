import styles from './AboutHistory.module.css';

export default function AboutHistory() {
  return (
    <div className={styles.historyWrapper}>
      {/* Top Heading */}
      <h2 className={styles.historyHeading}>Discover timeless elegance</h2>

      {/* Year Sections */}
      <div className={styles.historyTimeline}>
        {/* Updated Intro Paragraph */}
        <p className={styles.historyIntro}>
          Evolution and passion for the furniture industry, respect and contribution to every professional and domestic space that wants to stand out.
        </p>

        <div className={styles.yearBlock}>
          <h4>1975</h4>
          <p>
            It all started in <strong>1975</strong>, when <strong>Dimitris Rigas</strong>, returning after 7 years from America, conceived the idea of creating dining chairs, inspired by the needs and trends he had observed there. With a vision of quality and durability, he began production in a small workshop, laying the foundations for what was to develop into a pioneering path in the field of professional furniture.
          </p>
        </div>

        <div className={styles.yearBlock}>
          <h4>1985</h4>
          <p>
            Ten years later, in <strong>1985</strong>, a trip to an exhibition in Italy would change his perspective once again. There, the idea of the Viennese chair was born – not wooden, as was traditionally the case, but made of metal. The proposal was radical and highly innovative for the time. The market response was impressive: sales skyrocketed and the metal Viennese chair became synonymous with aesthetics, durability and functionality.
          </p>
        </div>

        <div className={styles.yearBlock}>
          <h4>1995</h4>
          <p>
            <strong>1995</strong> was another important milestone. Driven by growth and the need for greater visibility, the decision was made to purchase privately owned facilities with a total area of <strong>3,500 square meters</strong>, with the aim of creating a complete and modern exhibition. The same year, the first product imports began, giving the company new life and bringing incredible designs to the Greek market, which until then had seemed unattainable. The market was now ready to embrace the new aesthetic.
          </p>
        </div>

        <div className={styles.yearBlock}>
          <h4>2005</h4>
          <p>
            In <strong>2005</strong>, the ever-increasing import activity created the need for even greater storage capacity. Thus, new, privately owned warehouses with a total area of <strong>6,500 square meters</strong> were erected, strengthening the operational mechanism and ensuring speed and consistency.
          </p>
        </div>

        <div className={styles.yearBlock}>
          <h4>2015</h4>
          <p>
            In <strong>2015</strong>, in the midst of the economic crisis, the company did not retreat – it evolved. It turned to new communication and commerce channels, launching its first e-shop and strategically focusing on the catering and hotel equipment sector. It was the beginning of a new era.
          </p>
          <p>
            And we come to today. The company completes <strong>50 years</strong> of presence in the field of professional furniture. At the helm are now <strong>Kiki and Anna Riga</strong>, who continue the vision and work of their father, <strong>Dimitris Rigas</strong>. With new designs, fresh ideas and modern aesthetics, they are moving forward dynamically, presenting a new site with premium items and an innovative e-shop, bringing to the market unique proposals that meet the requirements of the season.
          </p>
          <p><strong>We are here. And we continue…</strong></p>
        </div>
      </div>
    </div>
  );
}