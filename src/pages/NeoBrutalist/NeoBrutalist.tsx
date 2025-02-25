import { Link } from "react-router-dom";
import styles from "./NeoBrutalist.module.css";

const NeoBrutalist = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Neo-Brutalist</h1>
          <p className={styles.headerDescription}>
            Strong contrast with outlined typography and asymmetrical elements
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.headline}>
            NO <span className={styles.textStroke}>COMPROMISE</span>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.subhead}>DESIGNERS EMBRACE THE RAW</div>
            <div className={styles.bodyText}>
              Neo-brutalism takes the honesty of brutalist principles and
              updates it for the digital age. Typography is treated as
              architectural material—bold, structural, and unapologetically
              present. This approach values negative space as much as positive
              elements, creating dramatic tension through contrast.
            </div>
          </div>
        </div>

        <div className={styles.backLink}>
          <Link to="/" className={styles.linkButton}>
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeoBrutalist;
