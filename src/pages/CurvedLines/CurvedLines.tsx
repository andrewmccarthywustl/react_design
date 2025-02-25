import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CurvedLines.module.css";

const CurvedLines = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("program");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine active section based on scroll position
      if (scrollPosition < 400) {
        setActiveSection("program");
      } else if (scrollPosition < 800) {
        setActiveSection("nature");
      } else if (scrollPosition < 1200) {
        setActiveSection("admission");
      } else {
        setActiveSection("information");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <svg
              ref={svgRef}
              className={`${styles.curveSvg} ${
                isVisible ? styles.animate : ""
              }`}
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer blue curves */}
              <path
                className={styles.bluePath}
                d="M400,100 A300,300 0 1,1 100,400 L100,350 A250,250 0 1,0 350,100 Z"
                fill="none"
                strokeWidth="10"
              />
              {/* Inner green curves */}
              <path
                className={styles.greenPath}
                d="M400,150 A250,250 0 1,1 150,400 L150,350 A200,200 0 1,0 350,150 Z"
                fill="none"
                strokeWidth="10"
              />
            </svg>
          </div>
          <nav className={styles.nav}>
            <button
              className={`${styles.navLink} ${
                activeSection === "program" ? styles.active : ""
              }`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("program");
              }}
            >
              Program
            </button>
            <button
              className={`${styles.navLink} ${
                activeSection === "nature" ? styles.active : ""
              }`}
              onClick={() => {
                document
                  .getElementById("nature")
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("nature");
              }}
            >
              Nature
            </button>
            <button
              className={`${styles.navLink} ${
                activeSection === "admission" ? styles.active : ""
              }`}
              onClick={() => {
                document
                  .getElementById("admission")
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("admission");
              }}
            >
              Admission
            </button>
            <button
              className={`${styles.navLink} ${
                activeSection === "information" ? styles.active : ""
              }`}
              onClick={() => {
                document
                  .getElementById("information")
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("information");
              }}
            >
              Information
            </button>
          </nav>
        </header>

        <main className={styles.content}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <div className={styles.institutions}>
                <h2 className={styles.institution}>
                  Massachusetts Institute of Technology
                </h2>
                <h2 className={styles.institution}>
                  Woods Hole Oceanographic Institution
                </h2>
              </div>

              <h1 className={styles.title}>
                <span
                  className={styles.fadeInUp}
                  style={{ animationDelay: "0.1s" }}
                >
                  Joint Program
                </span>
                <span
                  className={styles.fadeInUp}
                  style={{ animationDelay: "0.2s" }}
                >
                  Graduate Study
                </span>
              </h1>

              <div className={styles.programs}>
                <div
                  className={`${styles.program} ${styles.fadeInUp}`}
                  style={{ animationDelay: "0.3s" }}
                >
                  <h3>Physical Oceanography</h3>
                </div>
                <div
                  className={`${styles.program} ${styles.fadeInUp}`}
                  style={{ animationDelay: "0.4s" }}
                >
                  <h3>Marine Geophysics</h3>
                </div>
                <div
                  className={`${styles.program} ${styles.fadeInUp}`}
                  style={{ animationDelay: "0.5s" }}
                >
                  <h3>Marine Geology</h3>
                </div>
                <div
                  className={`${styles.program} ${styles.fadeInUp}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <h3>Chemical Oceanography</h3>
                </div>
              </div>
            </div>

            <div className={styles.heroGraphic}>
              <div className={styles.curveContainer}>
                <svg
                  className={styles.curvesLarge}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main large concentric curves */}
                  {[...Array(10)].map((_, i) => (
                    <circle
                      key={`blue-circle-${i}`}
                      cx="300"
                      cy="300"
                      r={250 - i * 20}
                      fill="none"
                      stroke={i % 2 === 0 ? "#0088B4" : "#39A87C"}
                      strokeWidth="8"
                      className={styles.circlePath}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </section>

          <section id="nature" className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Nature of the program</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoText}>
                <p>
                  This is a program of graduate study in oceanography conducted
                  jointly by the two institutions. It confers many aspects of
                  physical, chemical, geophysical and geological oceanography.
                </p>
                <p>
                  Thesis work may be done at either institution, as may be
                  achieved in a given case.
                </p>
                <p>
                  Students in this program have the advantage of the combined
                  resources and facilities of a major university and of the many
                  scientists and faculty and special facilities, including
                  ships, of a world-renowned oceanographic institution.
                </p>
              </div>
              <div className={styles.infoVisual}>
                <svg
                  className={styles.curvesSmall}
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Small spiral curves */}
                  <path
                    className={styles.greenPath}
                    d="M150,50 A100,100 0 0,1 250,150 A100,100 0 0,1 150,250 A100,100 0 0,1 50,150 A100,100 0 0,1 150,50"
                    fill="none"
                    strokeWidth="8"
                  />
                  <path
                    className={styles.bluePath}
                    d="M150,80 A70,70 0 0,1 220,150 A70,70 0 0,1 150,220 A70,70 0 0,1 80,150 A70,70 0 0,1 150,80"
                    fill="none"
                    strokeWidth="8"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section id="admission" className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Admission</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoVisual}>
                <svg
                  className={styles.curvesSmall}
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Horizontal curves */}
                  {[...Array(5)].map((_, i) => (
                    <path
                      key={`wave-${i}`}
                      d={`M50,${70 + i * 40} Q150,${30 + i * 40} 250,${
                        70 + i * 40
                      }`}
                      fill="none"
                      stroke={i % 2 === 0 ? "#0088B4" : "#39A87C"}
                      strokeWidth="8"
                      className={styles.wavePath}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
              <div className={styles.infoText}>
                <p>
                  Admission is competitive as judged by representatives of the
                  two institutions. It is based on a student's previous academic
                  work, particularly in the physical sciences and mathematics.
                </p>
                <p>
                  No previous academic preparation in oceanography per se is
                  necessary; however, some background in the earth sciences is
                  desirable for students planning to specialize in marine
                  geology.
                </p>
              </div>
            </div>
          </section>

          <section id="information" className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Financial aid</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoText}>
                <p>
                  Fellowships, traineeships, teaching and research
                  assistantships are available to all competitive candidates,
                  whether entering or continuing students. All of these forms of
                  financial aid cover tuition plus a modest stipend toward
                  living expenses.
                </p>
              </div>
              <div className={styles.infoVisual}>
                <svg
                  className={styles.curvesSmall}
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Vertical curves */}
                  {[...Array(5)].map((_, i) => (
                    <path
                      key={`vert-${i}`}
                      d={`M${70 + i * 40},50 Q${30 + i * 40},150 ${
                        70 + i * 40
                      },250`}
                      fill="none"
                      stroke={i % 2 === 0 ? "#0088B4" : "#39A87C"}
                      strokeWidth="8"
                      className={styles.vertPath}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </section>

          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>
              For further information, address
            </h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.contact}>
                  <p className={styles.contactName}>
                    Professor Henry G. Houghton, Head
                  </p>
                  <p>Department of Meteorology</p>
                  <p>Massachusetts Institute of Technology</p>
                  <p>Cambridge, Massachusetts 02139</p>
                </div>

                <div className={styles.contact}>
                  <p className={styles.contactName}>
                    Professor Frank Press, Head
                  </p>
                  <p>Department of Geology and Geophysics</p>
                  <p>Massachusetts Institute of Technology</p>
                  <p>Cambridge, Massachusetts 02139</p>
                </div>

                <div className={styles.contact}>
                  <p className={styles.contactName}>Dr. H. Burr Steinbach</p>
                  <p>Dean of Graduate Studies</p>
                  <p>Woods Hole Oceanographic Institution</p>
                  <p>Woods Hole, Massachusetts 02543</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <Link to="/" className={styles.backButton}>
              Back to home
            </Link>
            <p className={styles.copyright}>
              Redesigned from original 1971 poster
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CurvedLines;
