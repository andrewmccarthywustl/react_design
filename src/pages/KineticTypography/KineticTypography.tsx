import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./KineticTypography.module.css";

const KineticTypography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the wave text
    if (!waveTextRef.current) return;

    const text = waveTextRef.current;
    const textContent = text.textContent || "";
    text.innerHTML = "";

    // Split text into spans for individual character animation
    [...textContent].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.1}s`;
      text.appendChild(span);
    });

    // Mouse parallax effect for the container
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container center
      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);

      // Apply subtle parallax to container
      containerRef.current.style.setProperty("--mouse-x", x.toString());
      containerRef.current.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>KINETIC TYPOGRAPHY</h1>
            <p className={styles.headerDescription}>
              Typography in motion, bringing words to life through animation
            </p>
          </div>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.dynamicLetters}>
            <div className={styles.letterM}>M</div>
            <div className={styles.letterO}>O</div>
            <div className={styles.letterT}>T</div>
            <div className={styles.letterI}>I</div>
            <div className={styles.letterO2}>O</div>
            <div className={styles.letterN}>N</div>
          </div>

          <div className={styles.scrollText}>
            <div className={styles.scrollingLine}>
              TYPOGRAPHY IN MOTION &bull; TYPOGRAPHY IN MOTION &bull;
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <div className={styles.infoTitle}>TEXT COMES ALIVE</div>
            <div className={styles.infoParagraph}>
              <p>
                Kinetic typography transforms static text into dynamic, animated
                expressions that capture attention and convey emotion through
                movement, scale, and timing.
              </p>
              <p>
                By choreographing the behavior of letterforms, designers can
                enhance communication, create rhythm, and evoke feelings that
                static typography alone cannot achieve.
              </p>
            </div>
          </div>

          <div className={styles.rotatingBlock}>
            <div className={styles.rotatingElement}>
              <div className={styles.face}>MOVE</div>
              <div className={styles.face}>FLOW</div>
              <div className={styles.face}>SHIFT</div>
              <div className={styles.face}>TURN</div>
              <div className={styles.face}>TWIST</div>
              <div className={styles.face}>DANCE</div>
            </div>
          </div>
        </div>

        <div className={styles.wavyTextContainer}>
          <div className={styles.waveText} ref={waveTextRef}>
            UNDULATING TYPOGRAPHY
          </div>
        </div>

        <div className={styles.techniquesGrid}>
          <div className={styles.techniqueCard}>
            <div className={styles.techniqueNumber}>01</div>
            <div className={styles.techniqueContent}>
              <h3>CHOREOGRAPHY</h3>
              <p>
                Carefully planned sequences of movement that guide the viewer's
                eye through the information hierarchy.
              </p>
              <div className={styles.expandingLine}></div>
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueNumber}>02</div>
            <div className={styles.techniqueContent}>
              <h3>TIMING</h3>
              <p>
                Strategic use of speed, delays, and rhythmic patterns to create
                emotional responses and enhance meaning.
              </p>
              <div className={styles.expandingLine}></div>
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueNumber}>03</div>
            <div className={styles.techniqueContent}>
              <h3>TRANSFORMATION</h3>
              <p>
                Morphing letters between shapes and states to create visual
                continuity and surprising moments of revelation.
              </p>
              <div className={styles.expandingLine}></div>
            </div>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueNumber}>04</div>
            <div className={styles.techniqueContent}>
              <h3>SPATIAL PLAY</h3>
              <p>
                Using three-dimensional space and perspective to create depth
                and unexpected relationships between elements.
              </p>
              <div className={styles.expandingLine}></div>
            </div>
          </div>
        </div>

        <div className={styles.verticalTextSection}>
          <div className={styles.verticalContainer}>
            <div className={styles.verticalColumn}>
              <span>M</span>
              <span>O</span>
              <span>V</span>
              <span>E</span>
              <span>M</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
            </div>

            <div className={styles.verticalColumn}>
              <span>R</span>
              <span>H</span>
              <span>Y</span>
              <span>T</span>
              <span>H</span>
              <span>M</span>
            </div>

            <div className={styles.verticalColumn}>
              <span>D</span>
              <span>Y</span>
              <span>N</span>
              <span>A</span>
              <span>M</span>
              <span>I</span>
              <span>C</span>
            </div>

            <div className={styles.verticalColumn}>
              <span>F</span>
              <span>L</span>
              <span>O</span>
              <span>W</span>
            </div>
          </div>
        </div>

        <div className={styles.typingContainer}>
          <div className={styles.typingText}>
            Animation creates meaning through{" "}
            <span className={styles.emphasized}>movement</span>...
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.animatedLine}></div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.linkButton}>
              <div className={styles.linkText}>BACK TO COLLECTION</div>
              <div className={styles.linkArrow}>&rarr;</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KineticTypography;
