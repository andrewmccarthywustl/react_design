// src/pages/MidCenturyConstructivism/MidCenturyConstructivism.tsx
import { Link } from "react-router-dom";
import styles from "./MidCenturyConstructivism.module.css";

const MidCenturyConstructivism = () => {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <div className={styles.waveContainer}>
          <div className={styles.waveGraphic}></div>
          <div className={styles.waveOverlay}></div>
          <h1 className={styles.heroTitle}>
            MID-CENTURY
            <br />
            CONSTRUCTIVISM
          </h1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Mid-Century Constructivism</h1>
          <p className={styles.headerDescription}>
            Structured grid systems with mid-century modern sensibilities
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
              <div className={styles.headline}>CURVED SYSTEMS</div>
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
                Wave forms meet structured systems
              </div>
              <div className={styles.gridText}>
                Mid-century constructivism combines systematic grid approaches
                with flowing wave forms and a restricted color palette. This
                style creates visual harmony through balanced compositions while
                maintaining mathematical precision through careful spacing and
                alignment.
              </div>
              <div className={styles.gridText}>
                The modular structure allows for sophisticated information
                hierarchies while creating visual appeal through deliberate use
                of color and form reminiscent of educational and scientific
                materials from the 1950s and 60s.
              </div>
              <div className={styles.gridText}>
                // DOCUMENTATION: This system establishes a framework for design
                that balances technical precision with mid-century
                sensibilities. The resulting typography feels simultaneously
                engineered and organic.
              </div>
            </div>
          </div>

          <div className={styles.circularPatterns}>
            <div className={styles.circleBlue}></div>
            <div className={styles.circleGreen}></div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={styles.infoColumn}>
                <h3 className={styles.infoTitle}>Joint Program</h3>
                <h4 className={styles.infoSubtitle}>Graduate Study</h4>
                <div className={styles.divider}></div>
                <p className={styles.infoText}>
                  This is a program of graduate study in constructivism
                  coordinated jointly by the two institutions. It covers many
                  aspects of physical, chemical, typographical and geometrical
                  constructivism.
                </p>
              </div>
              <div className={styles.infoColumn}>
                <h3 className={styles.infoTitle}>Nature of the program</h3>
                <div className={styles.divider}></div>
                <p className={styles.infoText}>
                  Students in this program have the advantage of the combined
                  resources and facilities including ships of world-renowned
                  constructivist institutions.
                </p>
              </div>
              <div className={styles.infoColumn}>
                <h3 className={styles.infoTitle}>Admission</h3>
                <div className={styles.divider}></div>
                <p className={styles.infoText}>
                  Admission is competitive as judged by representatives of the
                  two institutions. It is based on the overall quality of the
                  applicant's previous academic work, particularly in the
                  physical sciences and mathematics.
                </p>
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

export default MidCenturyConstructivism;
