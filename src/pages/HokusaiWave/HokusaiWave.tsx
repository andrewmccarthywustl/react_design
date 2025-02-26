import { Link } from "react-router-dom";
import styles from "./HokusaiWave.module.css";

const HokusaiWave = () => {
  return (
    <div className={styles.page}>
      <div className={styles.scrollLines}></div>
      <div className={styles.calligraphyContainer}>
        <div className={styles.calligraphy}>浮世絵 北斎 波</div>
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>THE GREAT WAVE</h1>
          <div className={styles.japaneseTitle}>神奈川沖浪裏</div>
          <p className={styles.subtitle}>
            Exploring the timeless beauty of Hokusai's iconic woodblock print
            through traditional Japanese aesthetics and craftsmanship
          </p>
        </header>

        <div className={styles.mainContent}>
          <div className={styles.waveBox}>
            <div className={styles.stamp}>浮世絵</div>
            <img src="great_wave.webp" alt="" className={styles.waveImage} />
          </div>

          <div className={styles.textPanel}>
            <div className={styles.textColumn}>
              <p>
                Katsushika Hokusai's "The Great Wave off Kanagawa" is perhaps
                the most iconic image of Japanese art. Created around 1831 as
                part of the series "Thirty-six Views of Mount Fuji," this
                woodblock print masterfully captures the power of nature and the
                fragility of human existence.
              </p>
              <p>
                The composition features a massive wave threatening three boats
                with Mount Fuji—small but unmovable—in the background. This
                juxtaposition creates a profound statement about mankind's
                relationship with nature.
              </p>
            </div>

            <div className={styles.japaneseBox}>
              <p className={styles.japaneseText}>
                浮世絵師・葛飾北斎の代表作「神奈川沖浪裏」は、自然の力強さと人間の儚さを見事に表現した木版画です。波の下に小舟、背景には富士山。この構図が物語る世界観は、日本美術の象徴として世界中で愛されています。
              </p>
              <div className={styles.japaneseCaption}>
                — The essence of Hokusai's Great Wave described in Japanese
              </div>
            </div>

            <div className={styles.textColumn}>
              <p>
                What makes this work extraordinary is not just its composition,
                but the technical precision of the woodblock printing process.
                The use of Prussian blue—a newly imported pigment at the
                time—and the masterful carving create a sense of movement that
                seems to transcend the static medium.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.woodblockProcess}>
          <div className={styles.processStep}>
            <div className={styles.stepIcon}>一</div>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Drawing (下絵 - Shita-e)</h3>
            <p className={styles.stepDescription}>
              The artist creates the original design on thin paper, which will
              guide the entire woodblock printing process. Each color requires
              separate planning.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepIcon}>二</div>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Carving (彫り - Hori)</h3>
            <p className={styles.stepDescription}>
              Master carvers meticulously chisel the design into multiple cherry
              wood blocks, creating raised areas that will transfer ink to the
              paper.
            </p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepIcon}>三</div>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Printing (摺り - Suri)</h3>
            <p className={styles.stepDescription}>
              Each block is inked with a specific color and pressed onto washi
              paper, building up the complete image through multiple precisely
              aligned impressions.
            </p>
          </div>
        </div>

        <footer className={styles.footer}>
          <Link to="/" className={styles.backLink}>
            Return to Gallery
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default HokusaiWave;
