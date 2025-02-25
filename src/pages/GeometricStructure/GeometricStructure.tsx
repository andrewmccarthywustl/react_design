import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./GeometricStructure.module.css";

const GeometricStructure = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page} ref={containerRef}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>A SHARING OF SCULPTURE</span>
            <span className={styles.titleSub}>
              BY BILL MAYER / FALL, WINTER & SPRING 1983-84 / HOLLAND SEATING
              PLANT
            </span>
          </h1>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <div className={styles.logoText}>herman miller</div>
              <div className={styles.logoLine}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        {/* Mountain silhouette at top */}
        <div className={styles.skyline}>
          <svg viewBox="0 0 1200 120" className={styles.skylineSvg}>
            <path
              d="M0,120 L100,70 L300,110 L500,60 L700,90 L900,50 L1100,80 L1200,60 L1200,0 L0,0 Z"
              fill="#FFDD40"
              className={styles.skylinePath}
            />
          </svg>
        </div>

        <div className={styles.gridContainer}>
          {/* Subtle background grid */}
          <div className={styles.grid}>
            {[...Array(12)].map((_, i) => (
              <div
                key={`horizontal-${i}`}
                className={styles.horizontalLine}
                style={{ top: `${(i + 1) * 8}%` }}
              ></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`vertical-${i}`}
                className={styles.verticalLine}
                style={{ left: `${(i + 1) * 8}%` }}
              ></div>
            ))}
          </div>

          {/* Pure geometric lines structure */}
          <div
            className={`${styles.linesContainer} ${
              isLoaded ? styles.loaded : ""
            }`}
          >
            {/* Text Elements First (for position reference) */}
            <div className={styles.textElements}>
              <div
                className={styles.textElement}
                style={{
                  top: "30%",
                  left: "10%",
                  animationDelay: "0.2s", // Text appears first now
                }}
              >
                Claude 3.7
              </div>
              <div
                className={styles.textElement}
                style={{
                  top: "50%",
                  left: "30%",
                  animationDelay: "0.4s", // Text appears first now
                }}
              >
                Web Dev
              </div>
              <div
                className={styles.textElement}
                style={{
                  top: "70%",
                  left: "20%",
                  animationDelay: "0.6s", // Text appears first now
                }}
              >
                Experimentation
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.contentSection} ${
            isLoaded ? styles.loaded : ""
          }`}
        >
          <div className={styles.contentInner}>
            <section className={styles.aboutSection}>
              <h2 className={styles.sectionTitle}>The Exhibition</h2>
              <p>
                An extraordinary collection of sculptural works exploring the
                relationship between form, function, and space. Bill Mayer's
                innovative approach to industrial design has influenced Herman
                Miller's seating philosophy, creating products that blend
                artistic vision with ergonomic excellence.
              </p>
            </section>

            <section className={styles.detailsSection}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailColumn}>
                  <h3>EXHIBITION DETAILS</h3>
                  <ul className={styles.detailsList}>
                    <li>
                      <span>Curator:</span> Sarah Richardson
                    </li>
                    <li>
                      <span>Location:</span> Holland Seating Plant
                    </li>
                    <li>
                      <span>Dates:</span> Fall 1983 – Spring 1984
                    </li>
                  </ul>
                </div>
                <div className={styles.detailColumn}>
                  <h3>THE ARTIST</h3>
                  <p>
                    Bill Mayer joined Herman Miller in 1971 and has been
                    instrumental in developing the company's distinctive design
                    language. His work bridges the gap between industrial
                    utility and sculptural expression.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link to="/" className={styles.backButton}>
            Return to Gallery
          </Link>
          <div className={styles.copyright}>
            Experimental Typography Project © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeometricStructure;
