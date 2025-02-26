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
            <div className={styles.waveSvgContainer}>
              <svg
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}
              >
                {/* Background */}
                <rect width="800" height="600" fill="#f5efd7" />

                {/* Mount Fuji */}
                <path
                  d="M600 350L650 200L700 350H600Z"
                  fill="#f2f2f2"
                  stroke="#0d3b66"
                  strokeWidth="2"
                />

                {/* Boats */}
                <path
                  d="M200 380C250 350 280 380 320 370C360 360 380 340 420 350"
                  stroke="#8B4513"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M350 400C400 370 430 400 470 390C510 380 530 360 570 370"
                  stroke="#8B4513"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M500 430C550 400 580 430 620 420C660 410 680 390 720 400"
                  stroke="#8B4513"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Wave base */}
                <path
                  d="M-50 450C0 420 50 440 100 420C150 400 200 380 250 400C300 420 350 400 400 380C450 360 500 380 550 400C600 420 650 400 700 380C750 360 800 380 850 400"
                  fill="#b3d5e6"
                  stroke="#0d3b66"
                  strokeWidth="2"
                />

                {/* Main wave */}
                <path
                  d="M-50 350C0 320 50 340 100 320C150 300 200 280 250 300C300 320 350 300 400 280C450 260 500 280 550 300C600 320 650 300 700 280C750 260 800 280 850 300"
                  fill="#0d3b66"
                  stroke="#0d3b66"
                  strokeWidth="2"
                />

                {/* Wave foam */}
                <path
                  d="M-50 350C0 320 50 340 100 320C150 300 200 280 250 300"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1 15"
                />
                <path
                  d="M250 300C300 320 350 300 400 280"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1 12"
                />
                <path
                  d="M400 280C450 260 500 280 550 300"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1 10"
                />
                <path
                  d="M550 300C600 320 650 300 700 280C750 260 800 280 850 300"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1 18"
                />

                {/* Wave crest details */}
                <path
                  d="M100 300C120 280 140 290 160 270"
                  fill="none"
                  stroke="#0d3b66"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M200 260C220 240 240 250 260 230"
                  fill="none"
                  stroke="#0d3b66"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M300 270C320 250 340 260 360 240"
                  fill="none"
                  stroke="#0d3b66"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M400 250C420 230 440 240 460 220"
                  fill="none"
                  stroke="#0d3b66"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M500 260C520 240 540 250 560 230"
                  fill="none"
                  stroke="#0d3b66"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Wave spray dots */}
                <circle cx="150" cy="250" r="3" fill="white" />
                <circle cx="170" cy="260" r="2" fill="white" />
                <circle cx="190" cy="240" r="4" fill="white" />
                <circle cx="250" cy="230" r="3" fill="white" />
                <circle cx="270" cy="250" r="2" fill="white" />
                <circle cx="350" cy="220" r="4" fill="white" />
                <circle cx="370" cy="230" r="3" fill="white" />
                <circle cx="390" cy="240" r="2" fill="white" />
                <circle cx="450" cy="210" r="3" fill="white" />
                <circle cx="470" cy="230" r="4" fill="white" />
                <circle cx="490" cy="220" r="2" fill="white" />
                <circle cx="550" cy="240" r="3" fill="white" />
                <circle cx="570" cy="220" r="2" fill="white" />

                {/* Artist seal */}
                <rect
                  x="50"
                  y="50"
                  width="80"
                  height="120"
                  fill="none"
                  stroke="#e94f37"
                  strokeWidth="2"
                />
                <text
                  x="65"
                  y="100"
                  fill="#e94f37"
                  style={{ fontFamily: "serif", fontSize: "16px" }}
                >
                  北斎
                </text>
                <text
                  x="65"
                  y="130"
                  fill="#e94f37"
                  style={{ fontFamily: "serif", fontSize: "16px" }}
                >
                  画
                </text>
              </svg>
            </div>
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
