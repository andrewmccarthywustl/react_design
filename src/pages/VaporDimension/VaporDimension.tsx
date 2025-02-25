import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./VaporDimension.module.css";

const VaporDimension = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        gridRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      gridRef.current.style.setProperty("--mouse-x", x.toString());
      gridRef.current.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.gridBackground} ref={gridRef}>
        <div className={styles.gridPlane}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Vapor Dimension</h1>
          <p className={styles.headerDescription}>
            Nostalgic digital aesthetics with surreal elements and retrofuturism
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.heroSection}>
            <div className={styles.headline}>
              <span className={styles.retroText}>VAPOR</span>
              <span className={styles.chromaText}>WAVE</span>
            </div>

            <div className={styles.objectContainers}>
              <div className={styles.floatingObject}>
                <div className={styles.pyramid}></div>
              </div>
              <div className={styles.floatingObject}>
                <div className={styles.sphere}></div>
              </div>
              <div className={styles.floatingObject}>
                <div className={styles.torus}></div>
              </div>
            </div>
          </div>

          <div className={styles.palmContainer}>
            <div className={styles.palmSilhouette}></div>
          </div>

          <div className={styles.sunContainer}>
            <div className={styles.retroSun}></div>
            <div className={styles.horizon}></div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.japaneseText}>アエステティック</div>

            <div className={styles.manifesto}>
              <p>
                The aesthetic draws on nostalgia for 1980s and 1990s computer
                graphics, early internet design, glitch art, and retro-futurism.
              </p>
              <p>
                Combining elements of cyberpunk, retro computing, and surreal
                digital landscapes to create an otherworldly atmosphere.
              </p>
            </div>

            <div className={styles.glitchContainer}>
              <div
                className={styles.glitchText}
                data-text="ＤＩＧＩＴＡＬ　ＮＯＳＴＡＬＧＩＡ"
              >
                ＤＩＧＩＴＡＬ　ＮＯＳＴＡＬＧＩＡ
              </div>
            </div>
          </div>

          <div className={styles.gridSection}>
            <div className={styles.gridBlock}>
              <h3>VIRTUAL REALITY</h3>
              <p>Escape into digital worlds that never existed</p>
            </div>
            <div className={styles.gridBlock}>
              <h3>RETROFUTURISM</h3>
              <p>The future as imagined in the past</p>
            </div>
            <div className={styles.gridBlock}>
              <h3>DIGITAL DREAMS</h3>
              <p>Lost in the machine aesthetic</p>
            </div>
            <div className={styles.gridBlock}>
              <h3>NEON NOSTALGIA</h3>
              <p>The glow of memories that never were</p>
            </div>
          </div>
        </div>

        <div className={styles.windowsBar}>
          <div className={styles.windowsStart}>START</div>
          <div className={styles.windowsTime}>4:20 PM</div>
        </div>

        <div className={styles.backLink}>
          <Link to="/" className={styles.linkButton}>
            <span className={styles.btnText}>RETURN TO REALITY</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VaporDimension;
