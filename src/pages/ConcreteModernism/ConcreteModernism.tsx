import { Link } from "react-router-dom";
import styles from "./ConcreteModernism.module.css";

const ConcreteModernism = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Concrete Modernism</h1>
          <p className={styles.headerDescription}>
            Architectural influence with structured grids and raw material
            aesthetics
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.headerBand}>
            <div className={styles.headline}>FORM & STRUCTURE</div>
          </div>

          <div className={styles.contentArea}>
            <div className={styles.gridContent}>
              <div>
                <div className={styles.subhead}>STRUCTURAL INTEGRITY</div>
                <div className={styles.numberBlock}>04</div>
              </div>
              <div className={styles.bodyText}>
                Inspired by architectural brutalism, this typography approach
                treats text as building material. It embraces honest expression
                of structure, creates dramatic scale relationships, and uses
                minimal palette with unfinished material textures. The result is
                a powerful system that feels simultaneously timeless and
                contemporary.
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

export default ConcreteModernism;
