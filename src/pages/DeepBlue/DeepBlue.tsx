import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./DeepBlue.module.css";

const DeepBlue = () => {
  const [dataChars, setDataChars] = useState<
    { id: number; char: string; x: number; delay: number; speed: number }[]
  >([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate data stream characters
    const chars = "01";
    const newDataChars = [];
    for (let i = 0; i < 100; i++) {
      newDataChars.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 80,
        delay: Math.random() * 10,
        speed: 3 + Math.random() * 7,
      });
    }
    setDataChars(newDataChars);

    // Scroll to top when component mounts
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <span className={styles.backLinkIcon}>←</span> Return to Gallery
      </Link>

      <div ref={scrollContainerRef} className={styles.scrollContainer}>
        <header className={styles.header}>
          <div className={styles.heroBackground}></div>
          <div className={styles.grid}></div>
          <img
            src="/deep_blue.jpg"
            alt="Deep Blue"
            className={styles.heroImage}
          />
          <h1 className={styles.title}>DEEP BLUE</h1>
          <p className={styles.subtitle}>
            THE MACHINE THAT CHANGED THE GAME FOREVER
          </p>
          <div className={styles.scrollHint}>
            <span>Scroll to explore</span>
            <svg
              className={styles.scrollHintIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
          </div>
        </header>

        <main className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitle}>The Rise of the Machine</h2>
              <p className={styles.paragraph}>
                In the quiet halls of IBM's research facilities, a team of
                scientists and engineers worked tirelessly on a machine that
                would eventually challenge humanity's supremacy in one of our
                oldest intellectual games. They called it Deep Blue, a name that
                evoked both the ocean depths and IBM's corporate identity.
              </p>
              <p className={styles.paragraph}>
                Deep Blue wasn't just a chess computer—it was a statement. A
                declaration that artificial intelligence could match and even
                exceed human capability in a domain long considered to require
                intuition, creativity, and strategic thinking. Its very
                existence posed a question that resonates to this day: What does
                it mean when a machine can outthink a human?
              </p>

              <div className={styles.statsContainer}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>200</div>
                  <div className={styles.statLabel}>
                    Million Positions Per Second
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>32</div>
                  <div className={styles.statLabel}>
                    Processors Working in Parallel
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>256</div>
                  <div className={styles.statLabel}>Custom Chess Chips</div>
                </div>
              </div>

              <div className={styles.chipDiagram}></div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.chipLines}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
              >
                <line
                  x1="200"
                  y1="0"
                  x2="300"
                  y2="1000"
                  stroke="#0050b3"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="400"
                  y1="0"
                  x2="200"
                  y2="1000"
                  stroke="#0050b3"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="600"
                  y1="0"
                  x2="800"
                  y2="1000"
                  stroke="#0050b3"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="800"
                  y1="0"
                  x2="600"
                  y2="1000"
                  stroke="#0050b3"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </svg>
            </div>

            <div className={styles.sectionInner}>
              <h2 className={`${styles.sectionTitle} ${styles.textRight}`}>
                The Human Opponent
              </h2>
              <p className={styles.paragraph} style={{ marginLeft: "auto" }}>
                Garry Kasparov stood as the undisputed world chess champion, a
                living legend whose name had become synonymous with intellectual
                dominance. With an aggressive style and psychological warfare as
                much a part of his arsenal as his brilliant tactics, Kasparov
                represented the pinnacle of human chess ability.
              </p>
              <p className={styles.paragraph} style={{ marginLeft: "auto" }}>
                For Kasparov, Deep Blue wasn't just an opponent—it was an
                affront to human exceptionalism. He had defeated its predecessor
                in 1996, but the rematch in 1997 would prove to be a turning
                point in the history of humanity's relationship with artificial
                intelligence.
              </p>

              <div className={styles.chessboard} style={{ marginLeft: "auto" }}>
                <svg width="100%" height="100%" viewBox="0 0 800 800">
                  {[...Array(8)].map((_, row) =>
                    [...Array(8)].map((_, col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={col * 100}
                        y={row * 100}
                        width="100"
                        height="100"
                        fill={(row + col) % 2 === 0 ? "#4080ff" : "#000"}
                        opacity="0.3"
                      />
                    ))
                  )}
                </svg>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitle}>The Fateful Match</h2>
              <p className={styles.paragraph}>
                May 11, 1997. The world watched as Deep Blue and Kasparov faced
                off in the decisive sixth game of their match. The score was
                tied at 2.5 points each. The atmosphere was electric, the stakes
                immeasurable. This wasn't just a chess match—it was a pivotal
                moment in the history of technology and humanity.
              </p>

              <div className={styles.movesList}>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>1.</span>
                  <span className={styles.moveText}>e4 c6</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>2.</span>
                  <span className={styles.moveText}>d4 d5</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>3.</span>
                  <span className={styles.moveText}>Nc3 dxe4</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>4.</span>
                  <span className={styles.moveText}>Nxe4 Nd7</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>5.</span>
                  <span className={styles.moveText}>Ng5 Ngf6</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>6.</span>
                  <span className={styles.moveText}>Bd3 e6</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>7.</span>
                  <span className={styles.moveText}>N1f3 h6</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>8.</span>
                  <span className={styles.moveText}>Nxe6 Qe7</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>9.</span>
                  <span className={styles.moveText}>0-0 fxe6</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>10.</span>
                  <span className={styles.moveText}>Bg6+ Kd8</span>
                </div>
                <div className={styles.moveItem}>
                  <span className={styles.moveNumber}>19.</span>
                  <span className={styles.moveText}>Kasparov resigns</span>
                </div>
              </div>

              <p className={styles.paragraph}>
                After just 19 moves in the final game, Kasparov did the
                unthinkable. The world champion resigned. Deep Blue had won. A
                machine had defeated the greatest chess player in the world, and
                nothing would ever be the same.
              </p>

              <div className={styles.quote}>
                "I'm a human being. When I see something that is well beyond my
                understanding, I'm afraid."
                <div className={styles.quoteAuthor}>
                  — Garry Kasparov, after the match
                </div>
              </div>

              <div className={styles.chessboardLeft}>
                <svg width="100%" height="100%" viewBox="0 0 800 800">
                  {[...Array(8)].map((_, row) =>
                    [...Array(8)].map((_, col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={col * 100}
                        y={row * 100}
                        width="100"
                        height="100"
                        fill={(row + col) % 2 === 0 ? "#4080ff" : "#000"}
                        opacity="0.3"
                      />
                    ))
                  )}
                </svg>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={styles.sectionTitle}>The Technological Marvel</h2>
              <p className={styles.paragraph}>
                Deep Blue was a technological behemoth, purpose-built for a
                single task: to calculate chess positions with unprecedented
                speed and accuracy. Its 32 processors could evaluate 200 million
                positions per second, supported by 256 custom chess chips that
                gave it the computational equivalent of a chess grandmaster's
                pattern recognition.
              </p>
              <p className={styles.paragraph}>
                Unlike today's AI systems that can learn and improve themselves,
                Deep Blue relied on brute force calculation and hand-crafted
                evaluation functions. It represented the pinnacle of specialized
                computing—a harbinger of the AI revolution that was yet to come.
              </p>

              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>1985</div>
                  <div className={styles.timelineText}>
                    ChipTest, the first prototype, is developed at Carnegie
                    Mellon University.
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>1988</div>
                  <div className={styles.timelineText}>
                    Deep Thought, the successor to ChipTest, wins a game against
                    a grandmaster for the first time.
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>1996</div>
                  <div className={styles.timelineText}>
                    Deep Blue plays a six-game match against Kasparov and loses
                    4-2.
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>1997</div>
                  <div className={styles.timelineText}>
                    A significantly upgraded Deep Blue defeats Kasparov 3.5-2.5
                    in their rematch.
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>Present Day</div>
                  <div className={styles.timelineText}>
                    Modern chess engines running on standard computers are
                    vastly stronger than Deep Blue ever was.
                  </div>
                </div>
              </div>

              <div className={styles.dataStream}>
                {dataChars.map((item) => (
                  <div
                    key={item.id}
                    className={styles.dataCharacter}
                    style={{
                      left: `${item.x}px`,
                      animationDuration: `${item.speed}s`,
                      animationDelay: `${item.delay}s`,
                    }}
                  >
                    {item.char}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <h2 className={`${styles.sectionTitle} ${styles.textRight}`}>
                Legacy and Impact
              </h2>
              <p className={styles.paragraph} style={{ marginLeft: "auto" }}>
                Deep Blue's victory marked more than just a milestone in
                computer chess—it was a watershed moment in the human
                relationship with technology. It forced us to reconsider what we
                thought to be uniquely human capabilities and to confront a
                future where machines could potentially surpass us in areas we
                considered our exclusive domain.
              </p>
              <p className={styles.paragraph} style={{ marginLeft: "auto" }}>
                Today, Deep Blue may seem primitive compared to modern AI
                systems that can beat humans at increasingly complex games like
                Go, Poker, and StarCraft. But unlike these newer systems, Deep
                Blue represents something singular and iconic—the moment when
                the line between human and machine capability began to blur in
                the public consciousness.
              </p>
              <p className={styles.paragraph} style={{ marginLeft: "auto" }}>
                Its true legacy lies not in its engineering but in its
                symbolism. Deep Blue stands as an eternal reminder of both human
                ingenuity and humility—we created a machine that could defeat us
                at our own game, forcing us to confront the implications of our
                own creation.
              </p>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <h2 className={styles.footerTitle}>THE DAWN OF A NEW ERA</h2>
          <p className={styles.footerText}>
            From Deep Blue to modern AI, machines continue to expand their
            capabilities beyond what we once thought possible. As artificial
            intelligences become increasingly sophisticated, we are reminded of
            that pivotal moment in 1997 when a chess-playing computer changed
            our understanding of what technology could achieve.
          </p>
          <Link to="/" className={styles.footerLink}>
            RETURN TO GALLERY <span className={styles.blinkingCursor}></span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default DeepBlue;
