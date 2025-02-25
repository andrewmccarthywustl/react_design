import { Link } from "react-router-dom";
import styles from "./IndustrialGrunge.module.css";

const IndustrialGrunge = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Industrial Grunge</h1>
          <p className={styles.headerDescription}>
            Utilitarian aesthetics with hazard patterns and industrial
            references
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.headline}>
            <span className={styles.highlight}>HEAVY</span> INDUSTRY
          </div>

          <div className={styles.splitter}></div>

          <div className={styles.contentGrid}>
            <div>
              <div className={styles.label}>01/</div>
              <div className={styles.subhead}>RAW MATERIALS</div>
            </div>
            <div className={styles.bodyText}>
              Industrial grunge typography draws inspiration from factory
              signage, construction sites, and urban decay. This style embraces
              imperfection, using distressed elements and hazard patterns to
              create a visceral impact that feels authentic and unfiltered.
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

export default IndustrialGrunge;
