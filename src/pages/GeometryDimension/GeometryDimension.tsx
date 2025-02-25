import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./GeometryDimension.module.css";

const GeometryDimension = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.scene} ref={sceneRef}>
        {/* 3D Shapes */}
        <div
          className={`${styles.shape} ${styles.cube}`}
          style={{
            transform: `translateZ(100px) rotateX(${
              scrollPosition * 0.1
            }deg) rotateY(${scrollPosition * 0.2}deg)`,
          }}
        >
          <div className={`${styles.face} ${styles.front}`}></div>
          <div className={`${styles.face} ${styles.back}`}></div>
          <div className={`${styles.face} ${styles.right}`}></div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </div>

        <div
          className={`${styles.shape} ${styles.pyramid}`}
          style={{
            transform: `translateX(-150px) translateZ(100px) rotateY(${
              scrollPosition * -0.15
            }deg) rotateX(${scrollPosition * 0.1}deg)`,
          }}
        >
          <div className={`${styles.pyramidFace} ${styles.pyramidFront}`}></div>
          <div className={`${styles.pyramidFace} ${styles.pyramidRight}`}></div>
          <div className={`${styles.pyramidFace} ${styles.pyramidLeft}`}></div>
          <div
            className={`${styles.pyramidFace} ${styles.pyramidBottom}`}
          ></div>
        </div>

        <div
          className={`${styles.shape} ${styles.sphere}`}
          style={{
            transform: `translateX(150px) translateZ(80px) rotateY(${
              scrollPosition * 0.1
            }deg)`,
          }}
        ></div>

        <div
          className={`${styles.shape} ${styles.torus}`}
          style={{
            transform: `translateY(150px) translateZ(120px) rotateX(90deg) rotateY(${
              scrollPosition * 0.25
            }deg)`,
          }}
        ></div>

        <div
          className={`${styles.shape} ${styles.cylinder}`}
          style={{
            transform: `translateY(-150px) translateZ(80px) rotateX(${
              scrollPosition * 0.2
            }deg)`,
          }}
        >
          <div className={`${styles.cylinderFace} ${styles.cylinderTop}`}></div>
          <div
            className={`${styles.cylinderFace} ${styles.cylinderBottom}`}
          ></div>
          <div
            className={`${styles.cylinderFace} ${styles.cylinderSide}`}
          ></div>
        </div>

        {/* Floating Letters */}
        <div className={styles.floatingLetters}>
          {["G", "E", "O", "M", "E", "T", "R", "Y"].map((letter, index) => (
            <div
              key={index}
              className={styles.letter}
              style={{
                transform: `translateZ(${200 - index * 25}px) rotateY(${
                  scrollPosition * 0.05 * (index % 2 === 0 ? 1 : -1)
                }deg)`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className={styles.gridLine}
              style={{
                transform: `rotateY(${
                  index % 2 === 0 ? 0 : 90
                }deg) translateZ(${-500 + (index % 10) * 100}px)`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1
            className={styles.title}
            style={{
              transform: `translateZ(50px) rotateX(${
                mousePosition.y * 5
              }deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          >
            <span className={styles.titleLine}>3D</span>
            <span className={styles.titleLine}>GEOMETRY</span>
          </h1>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>DIMENSIONS IN TYPOGRAPHY</h2>
            <p className={styles.sectionText}>
              Exploring the intersection of three-dimensional space and
              typographic design. Typography breaks free from flat surfaces to
              inhabit the third dimension.
            </p>

            <div className={styles.dimensionCards}>
              <div
                className={styles.dimensionCard}
                style={{
                  transform: `translateZ(30px) rotateY(${
                    mousePosition.x * 10
                  }deg) rotateX(${mousePosition.y * -10}deg)`,
                }}
              >
                <div className={styles.cardFront}>
                  <h3 className={styles.cardTitle}>PERSPECTIVE</h3>
                  <div className={styles.cardIcon}>
                    <div className={styles.perspectiveIcon}></div>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <p>
                    Creating depth through converging lines and diminishing
                    scale
                  </p>
                </div>
              </div>

              <div
                className={styles.dimensionCard}
                style={{
                  transform: `translateZ(30px) rotateY(${
                    mousePosition.x * 10
                  }deg) rotateX(${mousePosition.y * -10}deg)`,
                }}
              >
                <div className={styles.cardFront}>
                  <h3 className={styles.cardTitle}>EXTRUSION</h3>
                  <div className={styles.cardIcon}>
                    <div className={styles.extrusionIcon}></div>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <p>
                    Transforming flat letterforms into three-dimensional objects
                  </p>
                </div>
              </div>

              <div
                className={styles.dimensionCard}
                style={{
                  transform: `translateZ(30px) rotateY(${
                    mousePosition.x * 10
                  }deg) rotateX(${mousePosition.y * -10}deg)`,
                }}
              >
                <div className={styles.cardFront}>
                  <h3 className={styles.cardTitle}>ROTATION</h3>
                  <div className={styles.cardIcon}>
                    <div className={styles.rotationIcon}></div>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <p>Adding dimension through movement around multiple axes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.rotatingContainer}>
            <div className={styles.rotatingCube}>
              <div className={`${styles.cubeFace} ${styles.cubeFaceFront}`}>
                <span className={styles.rotatingText}>FRONT</span>
              </div>
              <div className={`${styles.cubeFace} ${styles.cubeFaceBack}`}>
                <span className={styles.rotatingText}>BACK</span>
              </div>
              <div className={`${styles.cubeFace} ${styles.cubeFaceRight}`}>
                <span className={styles.rotatingText}>RIGHT</span>
              </div>
              <div className={`${styles.cubeFace} ${styles.cubeFaceLeft}`}>
                <span className={styles.rotatingText}>LEFT</span>
              </div>
              <div className={`${styles.cubeFace} ${styles.cubeFaceTop}`}>
                <span className={styles.rotatingText}>TOP</span>
              </div>
              <div className={`${styles.cubeFace} ${styles.cubeFaceBottom}`}>
                <span className={styles.rotatingText}>BOTTOM</span>
              </div>
            </div>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>TYPOGRAPHIC VOLUME</h2>
            <p className={styles.sectionText}>
              Letters transform from flat symbols into volumetric forms. Explore
              how typography occupies space, casts shadows, and interacts with
              light sources.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>DYNAMIC MOVEMENTS</h2>
            <p className={styles.sectionText}>
              Typography in motion reveals new dimensions. Rotations,
              translations, and transformations create kinetic energy and visual
              rhythm.
            </p>
          </div>

          <div className={styles.kineticTextContainer}>
            <div className={styles.kineticText}>
              {["D", "Y", "N", "A", "M", "I", "C"].map((letter, index) => (
                <span
                  key={index}
                  className={styles.kineticLetter}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.callToAction}>
          <Link to="/" className={styles.backButton}>
            RETURN TO DIMENSION SELECT
          </Link>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.control}>
          <div className={styles.controlLabel}>ROTATION X</div>
          <div className={styles.slider}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderHandle}
              style={{ left: `${50 + mousePosition.y * 50}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.controlLabel}>ROTATION Y</div>
          <div className={styles.slider}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderHandle}
              style={{ left: `${50 + mousePosition.x * 50}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.controlLabel}>ZOOM</div>
          <div className={styles.slider}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderHandle}
              style={{ left: `${50 + scrollPosition * 0.05}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometryDimension;
