import { Link } from "react-router-dom";
import styles from "./PunkRevival.module.css";

const PunkRevival = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Punk Revival</h1>
          <p className={styles.headerDescription}>
            Rebellious aesthetics with DIY attitude and chaotic energy
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.headline}>
            <span className={styles.outline}>DESTROY</span>{" "}
            <span className={styles.fill}>CREATE</span>
          </div>

          <div className={styles.slogan}>Design your own rules</div>

          <div className={styles.cutContent}>
            <div className={styles.bodyText}>
              Punk revival typography channels the raw energy and DIY aesthetics
              of punk zines and concert flyers. This approach deliberately
              breaks traditional design rules, embracing asymmetry, chaotic
              layouts, and distressed elements. Typography becomes an act of
              rebellion—cutting, pasting, and disrupting expectations.
            </div>
          </div>

          <div className={styles.anarchy}>&#8704;</div>
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

export default PunkRevival;
