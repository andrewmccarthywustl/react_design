import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./RetroBrutalist.module.css";

const RetroBrutalist = () => {
  const [activeElement, setActiveElement] = useState(1);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev === 5 ? 1 : prev + 1));
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMenuClick = (index: number) => {
    setActiveElement(index);
  };

  return (
    <div className={styles.page}>
      <div
        className={styles.cursorFollower}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>

      <div className={styles.grid}>
        <div className={styles.sidebar}>
          <div className={styles.menuHeader}>
            <div className={styles.dotPattern}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className={styles.dot}></div>
              ))}
            </div>
            <h2 className={styles.menuTitle}>COMMANDS_</h2>
          </div>

          <ul className={styles.menu}>
            <li
              className={`${styles.menuItem} ${
                activeElement === 1 ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(1)}
            >
              <span className={styles.menuNumber}>01.</span>
              <span className={styles.menuText}>MANIFESTO</span>
            </li>
            <li
              className={`${styles.menuItem} ${
                activeElement === 2 ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(2)}
            >
              <span className={styles.menuNumber}>02.</span>
              <span className={styles.menuText}>ELEMENTS</span>
            </li>
            <li
              className={`${styles.menuItem} ${
                activeElement === 3 ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(3)}
            >
              <span className={styles.menuNumber}>03.</span>
              <span className={styles.menuText}>DESIGN</span>
            </li>
            <li
              className={`${styles.menuItem} ${
                activeElement === 4 ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(4)}
            >
              <span className={styles.menuNumber}>04.</span>
              <span className={styles.menuText}>FUTURES</span>
            </li>
            <li
              className={`${styles.menuItem} ${
                activeElement === 5 ? styles.active : ""
              }`}
              onClick={() => handleMenuClick(5)}
            >
              <span className={styles.menuNumber}>05.</span>
              <span className={styles.menuText}>CONTACTS</span>
            </li>
          </ul>

          <div className={styles.sidebarFooter}>
            <div className={styles.pixelBox}></div>
            <span className={styles.retro}>EST. 1991</span>
          </div>
        </div>

        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              RETRO
              <br />
              BRUTALIST
            </h1>
            <div className={styles.tagline}>
              DESIGN SYSTEM // 10010101 // HYPERTEXT
            </div>
          </header>

          <div className={styles.mainContent}>
            {activeElement === 1 && (
              <div className={styles.manifestoSection}>
                <div className={styles.manifestoHeader}>
                  <div className={styles.horizontalLine}></div>
                  <h2 className={styles.sectionTitle}>MANIFESTO</h2>
                  <div className={styles.horizontalLine}></div>
                </div>

                <div className={styles.textColumns}>
                  <div className={styles.textColumn}>
                    <p className={styles.paragraph}>
                      Retro Brutalist design rejects the polished aesthetic of
                      modern interfaces in favor of raw, unfiltered expression.
                      We embrace the constraints and limitations of early
                      computing.
                    </p>
                    <p className={styles.paragraph}>
                      Our design language draws from the simplicity and
                      functionality of early operating systems, combined with
                      the honesty and directness of architectural brutalism.
                    </p>
                  </div>

                  <div className={styles.textColumn}>
                    <p className={styles.paragraph}>
                      We use monospaced typography, severe contrasts,
                      deliberately rough edges, and pixelated elements to create
                      a sense of authenticity and digital nostalgia.
                    </p>
                    <p className={styles.paragraph}>
                      This is not minimalism. This is maximalism with purpose.
                      Every element serves a function while retaining its raw
                      form.
                    </p>
                  </div>
                </div>

                <div className={styles.pixelArt}>
                  <div className={styles.pixelGrid}>
                    {[...Array(64)].map((_, index) => (
                      <div
                        key={index}
                        className={styles.pixel}
                        style={{
                          backgroundColor: [
                            12, 13, 14, 15, 19, 20, 23, 24, 26, 27, 28, 29, 35,
                            36, 37, 38, 43, 44, 45, 46, 51, 52, 59, 60,
                          ].includes(index)
                            ? "var(--accent-cyan)"
                            : "transparent",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeElement === 2 && (
              <div className={styles.elementsSection}>
                <h2 className={styles.sectionTitle}>ELEMENTS_</h2>

                <div className={styles.elementsGrid}>
                  <div className={styles.elementBlock}>
                    <h3 className={styles.elementTitle}>01_TYPOGRAPHY</h3>
                    <div className={styles.elementContent}>
                      <div className={styles.typeSample}>Aa Bb Cc</div>
                      <div className={styles.typeDesc}>MONO // SYSTEM</div>
                    </div>
                  </div>

                  <div className={styles.elementBlock}>
                    <h3 className={styles.elementTitle}>02_COLOR</h3>
                    <div className={styles.elementContent}>
                      <div className={styles.colorGrid}>
                        <div
                          className={`${styles.colorBox} ${styles.colorPrimary}`}
                        ></div>
                        <div
                          className={`${styles.colorBox} ${styles.colorSecondary}`}
                        ></div>
                        <div
                          className={`${styles.colorBox} ${styles.colorAccent}`}
                        ></div>
                        <div
                          className={`${styles.colorBox} ${styles.colorBlack}`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.elementBlock}>
                    <h3 className={styles.elementTitle}>03_LAYOUT</h3>
                    <div className={styles.elementContent}>
                      <div className={styles.layoutSample}>
                        <div className={styles.layoutBox}></div>
                        <div className={styles.layoutBox}></div>
                        <div className={styles.layoutLine}></div>
                        <div className={styles.layoutBox}></div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.elementBlock}>
                    <h3 className={styles.elementTitle}>04_SHAPES</h3>
                    <div className={styles.elementContent}>
                      <div className={styles.shapesContainer}>
                        <div className={styles.shape1}></div>
                        <div className={styles.shape2}></div>
                        <div className={styles.shape3}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeElement === 3 && (
              <div className={styles.designSection}>
                <h2 className={styles.sectionTitle}>DESIGN_PRINCIPLES</h2>

                <div className={styles.designGrid}>
                  <div className={styles.designCard}>
                    <div className={styles.designCardHeader}>
                      <div className={styles.designIcon}>■</div>
                      <h3 className={styles.designCardTitle}>RAW</h3>
                    </div>
                    <p className={styles.designCardText}>
                      Embrace imperfection. Show the structure. Reveal the
                      system behind the interface.
                    </p>
                  </div>

                  <div className={styles.designCard}>
                    <div className={styles.designCardHeader}>
                      <div className={styles.designIcon}>▲</div>
                      <h3 className={styles.designCardTitle}>DIRECT</h3>
                    </div>
                    <p className={styles.designCardText}>
                      Communication should be clear and unambiguous. Typography
                      leads function.
                    </p>
                  </div>

                  <div className={styles.designCard}>
                    <div className={styles.designCardHeader}>
                      <div className={styles.designIcon}>●</div>
                      <h3 className={styles.designCardTitle}>HONEST</h3>
                    </div>
                    <p className={styles.designCardText}>
                      Materials are used in their natural state. No false
                      affordances.
                    </p>
                  </div>

                  <div className={styles.designCard}>
                    <div className={styles.designCardHeader}>
                      <div className={styles.designIcon}>◆</div>
                      <h3 className={styles.designCardTitle}>PRIMITIVE</h3>
                    </div>
                    <p className={styles.designCardText}>
                      Use basic elements. Return to the fundamental building
                      blocks.
                    </p>
                  </div>
                </div>

                <div className={styles.designQuote}>
                  <blockquote className={styles.quote}>
                    "BRUTALIST DESIGN IS THE DECONSTRUCTION OF EXPECTATIONS"
                  </blockquote>
                  <div className={styles.quoteAuthor}>— SYSTEM ADMIN, 1993</div>
                </div>
              </div>
            )}

            {activeElement === 4 && (
              <div className={styles.futuresSection}>
                <h2 className={styles.sectionTitle}>DIGITAL_FUTURES</h2>

                <div className={styles.terminalWindow}>
                  <div className={styles.terminalHeader}>
                    <div className={styles.terminalControls}>
                      <span className={styles.terminalControl}></span>
                      <span className={styles.terminalControl}></span>
                      <span className={styles.terminalControl}></span>
                    </div>
                    <div className={styles.terminalTitle}>terminal.exe</div>
                  </div>

                  <div className={styles.terminalContent}>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> LOADING FUTURE
                      PREDICTIONS...
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> ANALYZING
                      DESIGN TRENDS...
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> FORECAST
                      COMPLETE.
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span>{" "}
                      -----------------------------
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> RETRO
                      BRUTALISM WILL...
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> REJECT
                      SKEUOMORPHISM
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> EMBRACE LOW
                      RESOLUTION
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> QUESTION
                      DESIGN CONVENTIONS
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span> RETURN TO
                      VISIBLE SYSTEMS
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span>{" "}
                      -----------------------------
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>&gt;</span>{" "}
                      <span className={styles.terminalCursor}>_</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeElement === 5 && (
              <div className={styles.contactsSection}>
                <h2 className={styles.sectionTitle}>CONTACT_INFO</h2>

                <div className={styles.contactCard}>
                  <div className={styles.cardPattern}>
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className={styles.patternSquare}></div>
                    ))}
                  </div>

                  <div className={styles.contactInfo}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>EMAIL:</span>
                      <span className={styles.contactValue}>
                        hello@brutalist.sys
                      </span>
                    </div>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>LOCATION:</span>
                      <span className={styles.contactValue}>
                        GRID:// 37.802, -122.405
                      </span>
                    </div>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>SYSTEM:</span>
                      <span className={styles.contactValue}>EARLY WEB 1.0</span>
                    </div>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>STATUS:</span>
                      <span className={styles.contactValue}>
                        ONLINE <span className={styles.blink}>_</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerText}>
              <span className={styles.copyrightText}>
                SYSTEM.SYS // ALL RIGHTS RESERVED
              </span>
              <span className={styles.footerDivider}>|</span>
              <span className={styles.resolution}>800×600</span>
            </div>

            <Link to="/" className={styles.backButton}>
              <span className={styles.backArrow}>←</span> RETURN TO MAINFRAME
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RetroBrutalist;
