import { Link } from "react-router-dom";
import styles from "./DigitalDistortion.module.css";

const DigitalDistortion = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Digital Distortion</h1>
          <p className={styles.headerDescription}>
            Glitch aesthetics and terminal interfaces with cybernetic influence
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.glitchContainer}>
            <div className={styles.headline} data-text="SYSTEM_ERROR">
              SYSTEM_ERROR
            </div>
          </div>

          <div className={styles.terminal}>
            <span className={styles.cmd}>initializing brutalist interface</span>
            <span className={styles.cmd}>loading typography protocols</span>
            <span className={styles.cmd}>
              merging digital and analog aesthetics
            </span>
            <span className={styles.cmd}>distortion levels: optimal</span>
            <span className={styles.cmd}>system ready...</span>
            <span className={styles.cmd}>
              Digital distortion embraces the glitches and imperfections of
              technology, creating a raw aesthetic that exposes the systems
              beneath the surface. This approach uses mono-spaced typography,
              terminal-style interfaces, and deliberate corruption of visual
              elements.
            </span>
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

export default DigitalDistortion;
