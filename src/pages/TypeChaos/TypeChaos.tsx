import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./TypeChaos.module.css";

const TypeChaos = () => {
  const [_, setMousePosition] = useState({ x: 0, y: 0 });
  const letterContainerRef = useRef<HTMLDivElement>(null);
  const chaosLettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Update CSS variables for mouse position
      if (letterContainerRef.current) {
        const { left, top, width, height } =
          letterContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        letterContainerRef.current.style.setProperty("--mouse-x", x.toString());
        letterContainerRef.current.style.setProperty("--mouse-y", y.toString());
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create floating letters
    if (chaosLettersRef.current) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      chaosLettersRef.current.innerHTML = "";

      for (let i = 0; i < 50; i++) {
        const span = document.createElement("span");
        const randomChar = letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
        span.textContent = randomChar;

        // Random positioning
        span.style.top = `${Math.random() * 100}%`;
        span.style.left = `${Math.random() * 100}%`;

        // Random size
        const size = 1 + Math.random() * 3;
        span.style.fontSize = `${size}rem`;

        // Random rotation
        const rotation = Math.random() * 360;
        span.style.transform = `rotate(${rotation}deg)`;

        // Random animation delay
        span.style.animationDelay = `${Math.random() * 5}s`;

        // Random opacity
        span.style.opacity = (0.1 + Math.random() * 0.9).toString();

        chaosLettersRef.current.appendChild(span);
      }
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.chaosBackground} ref={chaosLettersRef}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Type Chaos</h1>
          <p className={styles.headerDescription}>
            Breaking every rule of typography for explosive, unpredictable
            results
          </p>
        </div>

        <div className={styles.letterContainer} ref={letterContainerRef}>
          <div className={styles.chaoticLetters}>
            <span
              className={styles.letter}
              style={{ "--index": 0 } as React.CSSProperties}
            >
              C
            </span>
            <span
              className={styles.letter}
              style={{ "--index": 1 } as React.CSSProperties}
            >
              H
            </span>
            <span
              className={styles.letter}
              style={{ "--index": 2 } as React.CSSProperties}
            >
              A
            </span>
            <span
              className={styles.letter}
              style={{ "--index": 3 } as React.CSSProperties}
            >
              O
            </span>
            <span
              className={styles.letter}
              style={{ "--index": 4 } as React.CSSProperties}
            >
              S
            </span>
          </div>
        </div>

        <div className={styles.manifestoSection}>
          <div className={styles.manifestoTitle}>
            <span>THE</span>
            <span className={styles.emphasis}>NEW</span>
            <span>TYPOGRAPHIC</span>
            <span className={styles.emphasis}>DISORDER</span>
          </div>

          <div className={styles.manifestoContent}>
            <p className={styles.chaosText}>
              Type Chaos rejects the established rules of typography—legibility,
              readability, hierarchy, grid systems—in favor of expressive,
              emotional and visceral arrangements of letterforms.
            </p>

            <div className={styles.scatteredText}>
              <span
                style={{ top: "10%", left: "5%", transform: "rotate(-15deg)" }}
              >
                BREAK
              </span>
              <span
                style={{ top: "20%", left: "50%", transform: "rotate(20deg)" }}
              >
                THE
              </span>
              <span
                style={{ top: "50%", left: "15%", transform: "rotate(-5deg)" }}
              >
                RULES
              </span>
              <span
                style={{ top: "30%", right: "10%", transform: "rotate(10deg)" }}
              >
                OF
              </span>
              <span
                style={{
                  bottom: "20%",
                  left: "30%",
                  transform: "rotate(-25deg)",
                }}
              >
                DESIGN
              </span>
            </div>

            <p className={styles.chaosText}>
              Where traditional typography seeks clarity, chaos typography
              celebrates confusion. Where convention demands restraint, chaos
              demands excess. Where discipline requires consistency, chaos
              embraces contradiction.
            </p>
          </div>
        </div>

        <div className={styles.techniquesSection}>
          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>OVERLAPPING</h3>
              <div className={styles.techniqueDemo}>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 1 } as React.CSSProperties}
                >
                  O
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 2 } as React.CSSProperties}
                >
                  V
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 3 } as React.CSSProperties}
                >
                  E
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 4 } as React.CSSProperties}
                >
                  R
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 5 } as React.CSSProperties}
                >
                  L
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 6 } as React.CSSProperties}
                >
                  A
                </span>
                <span
                  className={styles.overlapLetter}
                  style={{ "--z": 7 } as React.CSSProperties}
                >
                  P
                </span>
              </div>
            </div>
            <p className={styles.techniqueText}>
              Creating depth and visual tension by layering text elements on top
              of each other
            </p>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>DISTORTION</h3>
              <div className={styles.techniqueDemo}>
                <span className={styles.distortLetter}>D</span>
                <span className={styles.distortLetter}>I</span>
                <span className={styles.distortLetter}>S</span>
                <span className={styles.distortLetter}>T</span>
                <span className={styles.distortLetter}>O</span>
                <span className={styles.distortLetter}>R</span>
                <span className={styles.distortLetter}>T</span>
              </div>
            </div>
            <p className={styles.techniqueText}>
              Stretching, compressing, and warping letterforms beyond
              recognition
            </p>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>FRAGMENTATION</h3>
              <div className={styles.techniqueDemo}>
                <div className={styles.fragLetter}>
                  <span className={styles.frag1}>F</span>
                  <span className={styles.frag2}>F</span>
                  <span className={styles.frag3}>F</span>
                </div>
                <div className={styles.fragLetter}>
                  <span className={styles.frag1}>R</span>
                  <span className={styles.frag2}>R</span>
                  <span className={styles.frag3}>R</span>
                </div>
                <div className={styles.fragLetter}>
                  <span className={styles.frag1}>A</span>
                  <span className={styles.frag2}>A</span>
                  <span className={styles.frag3}>A</span>
                </div>
                <div className={styles.fragLetter}>
                  <span className={styles.frag1}>G</span>
                  <span className={styles.frag2}>G</span>
                  <span className={styles.frag3}>G</span>
                </div>
              </div>
            </div>
            <p className={styles.techniqueText}>
              Breaking letters into pieces to explore the negative space within
              typography
            </p>
          </div>

          <div className={styles.techniqueCard}>
            <div className={styles.techniqueHeader}>
              <h3>RANDOMIZATION</h3>
              <div className={styles.techniqueDemo}>
                <span className={styles.randomLetter}>R</span>
                <span className={styles.randomLetter}>A</span>
                <span className={styles.randomLetter}>N</span>
                <span className={styles.randomLetter}>D</span>
                <span className={styles.randomLetter}>O</span>
                <span className={styles.randomLetter}>M</span>
              </div>
            </div>
            <p className={styles.techniqueText}>
              Embracing the unexpected through algorithmic and chance-based
              typographic arrangements
            </p>
          </div>
        </div>

        <div className={styles.typePlayground}>
          <div className={styles.playgroundTitle}>CHAOS PLAYGROUND</div>

          <div className={styles.playgroundContainer}>
            <div className={styles.playBox}>
              <div className={styles.mixedType}>
                <span className={styles.huge}>A</span>
                <span className={styles.vertical}>TYPE</span>
                <span className={styles.rotated}>IS</span>
                <span className={styles.upside}>MEANT</span>
                <span className={styles.stretched}>TO</span>
                <span className={styles.compressed}>BE</span>
                <span className={styles.diagonal}>BROKEN</span>
              </div>
            </div>

            <div className={styles.colorExplosion}>
              <div className={styles.colorLetter} style={{ color: "#FF5E5B" }}>
                C
              </div>
              <div className={styles.colorLetter} style={{ color: "#D8D8F6" }}>
                O
              </div>
              <div className={styles.colorLetter} style={{ color: "#39A0ED" }}>
                L
              </div>
              <div className={styles.colorLetter} style={{ color: "#FCFF4B" }}>
                O
              </div>
              <div className={styles.colorLetter} style={{ color: "#FF5E5B" }}>
                R
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chaosGallery}>
          <div className={styles.galleryTitle}>
            <div className={styles.titleLine}></div>
            <h2>GALLERY OF CHAOS</h2>
            <div className={styles.titleLine}></div>
          </div>

          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <div className={styles.galleryText}>
                <span className={styles.largeText}>D</span>
                <span className={styles.mediumText}>I</span>
                <span className={styles.largeText}>S</span>
                <span className={styles.smallText}>R</span>
                <span className={styles.hugeText}>U</span>
                <span className={styles.tinyText}>P</span>
                <span className={styles.largeText}>T</span>
              </div>
            </div>

            <div className={styles.galleryItem}>
              <div className={styles.galleryLines}>
                <div className={styles.lineText}>BREAK</div>
                <div className={styles.lineText}>THE</div>
                <div className={styles.lineText}>GRID</div>
              </div>
            </div>

            <div className={styles.galleryItem}>
              <div className={styles.chaosCircle}>
                <div className={styles.circleText}>
                  <span>R</span>
                  <span>O</span>
                  <span>T</span>
                  <span>A</span>
                  <span>T</span>
                  <span>E</span>
                </div>
              </div>
            </div>

            <div className={styles.galleryItem}>
              <div className={styles.noiseText}>NOISE</div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerText}>
            TYPE RULES ARE MEANT TO BE BROKEN
          </div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.linkButton}>
              <span>ESCAPE THE CHAOS</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeChaos;
