import { Link } from "react-router-dom";
import styles from "./TechConstructivism.module.css";

const TechConstructivism = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Tech Constructivism</h1>
          <p className={styles.headerDescription}>
            Modular systems with technical precision and industrial minimalism
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.headerArea}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarItem}></div>
              <div className={styles.sidebarItem}></div>
              <div className={styles.sidebarItem}></div>
              <div className={styles.sidebarItem}></div>
            </div>
            <div className={styles.titleArea}>
              <div className={styles.headline}>MODULAR SYSTEMS</div>
            </div>
          </div>

          <div className={styles.contentArea}>
            <div className={styles.systemBar}>
              <div className={`${styles.systemItem} ${styles.active}`}>
                OVERVIEW
              </div>
              <div className={styles.systemItem}>COMPONENTS</div>
              <div className={styles.systemItem}>STRUCTURE</div>
              <div className={styles.systemItem}>OUTPUT</div>
            </div>

            <div className={styles.contentGrid}>
              <div className={styles.gridText}>
                Technical precision meets brutalist rawness
              </div>
              <div className={styles.gridText}>
                Tech constructivism combines the systematic approach of
                constructivist design with modern technical interfaces. This
                style creates complex grid systems with strict modular
                components while maintaining an industrial edge through raw
                materials and stark contrasts.
              </div>
              <div className={styles.gridText}>
                The modular structure allows for complex information hierarchies
                while maintaining visual cohesion through consistent spacing and
                alignment rules.
              </div>
              <div className={styles.gridText}>
                // DOCUMENTATION: This system establishes a framework for
                digital interfaces that balances technical precision with
                brutalist aesthetics. The resulting typography feels
                simultaneously engineered and raw.
              </div>
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

export default TechConstructivism;
