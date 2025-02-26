import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./AnimatedShapes.module.css";

const AnimatedShapes = () => {
  const sinWavePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // No additional effects needed since we're using CSS animations
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.noiseOverlay}></div>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>HARMONIC GEOMETRY</h1>
          <p className={styles.subtitle}>
            A visual exploration of animated shapes, curves, and geometric forms
            creating a symphony of synchronized motion and mathematical harmony.
          </p>
        </header>

        <div className={styles.shapesGallery}>
          {/* Concentric Circles */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Concentric Circles</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={`circle-${i}`}
                    cx="200"
                    cy="200"
                    r={160 - i * 20}
                    fill="none"
                    stroke={i % 2 === 0 ? "#0088B4" : "#39A87C"}
                    strokeWidth="6"
                    className={styles.circlePath}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              Pulsating concentric circles create an illusion of depth and
              rhythmic expansion. Each ring follows the same animation pattern
              with staggered timing.
            </p>
          </div>

          {/* Rotating Squares */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Nested Rotations</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  className={styles.squarePath}
                  style={{ animationDuration: "30s" }}
                >
                  <rect
                    x="100"
                    y="100"
                    width="200"
                    height="200"
                    fill="none"
                    stroke="#FF5E5B"
                    strokeWidth="6"
                  />
                  <g
                    className={styles.squarePath}
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  >
                    <rect
                      x="125"
                      y="125"
                      width="150"
                      height="150"
                      fill="none"
                      stroke="#FFD166"
                      strokeWidth="6"
                    />
                    <g
                      className={styles.squarePath}
                      style={{ animationDuration: "7s" }}
                    >
                      <rect
                        x="150"
                        y="150"
                        width="100"
                        height="100"
                        fill="none"
                        stroke="#06D6A0"
                        strokeWidth="6"
                      />
                      <g
                        className={styles.squarePath}
                        style={{
                          animationDuration: "3s",
                          animationDirection: "reverse",
                        }}
                      >
                        <rect
                          x="175"
                          y="175"
                          width="50"
                          height="50"
                          fill="none"
                          stroke="#118AB2"
                          strokeWidth="6"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              Nested squares rotating at different speeds and directions,
              creating mesmerizing patterns through their intersections and
              overlapping paths.
            </p>
          </div>

          {/* Spiral */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Archimedean Spiral</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200,200 m0,-180 a180,180 0 1,0 1,0 z m0,20 a160,160 0 1,1 -1,0 z m0,20 a140,140 0 1,0 1,0 z m0,20 a120,120 0 1,1 -1,0 z m0,20 a100,100 0 1,0 1,0 z m0,20 a80,80 0 1,1 -1,0 z m0,20 a60,60 0 1,0 1,0 z m0,20 a40,40 0 1,1 -1,0 z m0,20 a20,20 0 1,0 1,0 z"
                  fill="none"
                  stroke="url(#spiralGradient)"
                  strokeWidth="4"
                  className={styles.spiralPath}
                />
                <defs>
                  <linearGradient
                    id="spiralGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7B2CBF" />
                    <stop offset="50%" stopColor="#3A86FF" />
                    <stop offset="100%" stopColor="#00F5D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              A spiral formed from concentric circles with animated dash
              patterns, creating an illusion of perpetual inward or outward
              motion.
            </p>
          </div>

          {/* Sine Wave */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Sine Wave River</h2>
            <div className={`${styles.shapeCanvas} ${styles.shapeCanvasWide}`}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="waveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#0099FF" />
                    <stop offset="50%" stopColor="#00CCFF" />
                    <stop offset="100%" stopColor="#00FFEA" />
                  </linearGradient>
                </defs>

                <path
                  ref={sinWavePathRef}
                  d="M0,100 C100,80 200,120 300,100 C400,80 500,120 600,100 L600,300 L0,300 Z"
                  fill="url(#waveGradient)"
                  className={styles.sinWave}
                />

                {/* Small particles floating on the wave */}
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={`particle-${i}`}
                    cx={40 + ((i * 35) % 550)}
                    cy={90 + (i % 3) * 10}
                    r={2 + (i % 3)}
                    fill="white"
                    opacity={0.8}
                    className={styles.floatingShape}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              A fluid sine wave animation that morphs between different wave
              patterns, resembling water or sound waves in constant harmonic
              motion.
            </p>
          </div>

          {/* Morphing Blobs */}
          <div className={`${styles.shapeCard} ${styles.shapeCardLarge}`}>
            <h2 className={styles.shapeTitle}>Morphing Organic Forms</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="-200 -200 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="blobGradient"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    fx="0.75"
                    fy="0.25"
                  >
                    <stop offset="0%" stopColor="#FF9E00" />
                    <stop offset="100%" stopColor="#FF0058" />
                  </radialGradient>
                </defs>

                <g className={styles.floatingShape}>
                  {/* First blob */}
                  <path
                    d="M150,0 C150,82.8 82.8,150 0,150 C-82.8,150 -150,82.8 -150,0 C-150,-82.8 -82.8,-150 0,-150 C82.8,-150 150,-82.8 150,0"
                    fill="url(#blobGradient)"
                    opacity="0.7"
                    className={styles.blobs}
                  />

                  {/* Second blob with different timing */}
                  <path
                    d="M130,0 C130,72 72,130 0,130 C-72,130 -130,72 -130,0 C-130,-72 -72,-130 0,-130 C72,-130 130,-72 130,0"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    opacity="0.3"
                    className={styles.blobs}
                    style={{ animationDelay: "-2s" }}
                  />

                  {/* Third blob with different timing */}
                  <path
                    d="M100,0 C100,55 55,100 0,100 C-55,100 -100,55 -100,0 C-100,-55 -55,-100 0,-100 C55,-100 100,-55 100,0"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    opacity="0.5"
                    className={styles.blobs}
                    style={{ animationDelay: "-4s" }}
                  />
                </g>
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              Organic, blob-like shapes that continuously morph and transform,
              creating smooth transitions between different states. The shapes
              seem alive, breathing and pulsing with each transition.
            </p>
          </div>

          {/* Radiating Circles */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Radiating Ripples</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className={styles.radiatingCircles}>
                  {[...Array(5)].map((_, i) => (
                    <circle
                      key={`radiating-${i}`}
                      cx="200"
                      cy="200"
                      r="50%"
                      fill="none"
                      stroke="#14FFEC"
                      strokeWidth="2"
                      opacity="0.2"
                      style={{ animationDelay: `${i * 0.6}s` }}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              Concentric circles that pulse outward like ripples in water, with
              staggered timing to create a continuous flowing effect of
              expansion.
            </p>
          </div>

          {/* Cross Hatch Pattern */}
          <div className={styles.shapeCard}>
            <h2 className={styles.shapeTitle}>Intersecting Lines</h2>
            <div className={styles.shapeCanvas}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  className={styles.squarePath}
                  style={{ animationDuration: "40s" }}
                >
                  {/* Vertical Lines */}
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`vline-${i}`}
                      x1={20 + i * 20}
                      y1="0"
                      x2={20 + i * 20}
                      y2="400"
                      stroke="#6A00FF"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  ))}

                  {/* Horizontal Lines */}
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`hline-${i}`}
                      x1="0"
                      y1={20 + i * 20}
                      x2="400"
                      y2={20 + i * 20}
                      stroke="#00D1FF"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                  ))}
                </g>

                {/* Floating circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="rgba(255,255,255,0.1)"
                  stroke="#FF3366"
                  strokeWidth="4"
                  className={styles.floatingShape}
                />
              </svg>
            </div>
            <p className={styles.shapeDescription}>
              A grid of intersecting lines that rotate in unison, creating moiré
              patterns and optical illusions as they move across one another.
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

export default AnimatedShapes;
