import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Mononoke.module.css";

const Mononoke = () => {
  const [spirits, setSpirits] = useState<
    {
      id: number;
      top: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    // Generate forest spirits
    const newSpirits = [];
    for (let i = 0; i < 30; i++) {
      newSpirits.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 5 + Math.random() * 15,
        delay: Math.random() * 15,
        duration: 15 + Math.random() * 20,
      });
    }
    setSpirits(newSpirits);
  }, []);

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <span className={styles.backLinkIcon}>←</span> Return to Gallery
      </Link>

      <div className={styles.parallaxContainer}>
        <header className={styles.header}>
          <div className={styles.overlay}></div>
          <img
            src="/mononoke_forest.webp"
            alt="Enchanted Forest"
            className={styles.forestBackground}
          />
          <div className={styles.titleContainer}>
            <h1 className={styles.japaneseTitle}>もののけ姫</h1>
            <h2 className={styles.englishTitle}>PRINCESS MONONOKE</h2>
          </div>
          <div className={styles.scrollHint}>
            <span className={styles.scrollText}>Scroll to explore</span>
            <svg
              className={styles.scrollArrow}
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
          <div className={styles.container}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                The Tale of Ashitaka and San
              </h2>
              <div className={styles.storyContainer}>
                <div>
                  <p className={styles.storyText}>
                    Set in the late Muromachi period of Japan, "Princess
                    Mononoke" follows the journey of Ashitaka, a young prince
                    who becomes involved in a struggle between forest gods and
                    the humans who consume its resources. After being cursed by
                    a demonized boar god, Ashitaka seeks a cure and finds
                    himself in the middle of a war between the animal gods of
                    the forest and a mining colony.
                  </p>
                  <p className={styles.storyText}>
                    There he meets San, a human girl raised by wolves, who is
                    known as "Princess Mononoke" (Spirit Princess) among the
                    townspeople. Ashitaka finds himself caught in the middle of
                    the conflict, seeking a way for humans and nature to coexist
                    peacefully.
                  </p>
                </div>
                <div>
                  <img
                    src="/mononoke_poster.webp"
                    alt="Princess Mononoke"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Characters</h2>
              <p className={styles.text}>
                Princess Mononoke features some of Miyazaki's most memorable
                characters, each representing different aspects of the complex
                relationship between humans and nature.
              </p>
              <div className={styles.characterGrid}>
                <div className={styles.characterCard}>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      backgroundColor: "#0e371f",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 20C40 20 30 30 30 50C30 70 40 80 50 80C60 80 70 70 70 50C70 30 60 20 50 20Z"
                        fill="#e6b78e"
                      />
                      <path
                        d="M40 40C38 40 36 42 36 45C36 48 38 50 40 50C42 50 44 48 44 45C44 42 42 40 40 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M60 40C58 40 56 42 56 45C56 48 58 50 60 50C62 50 64 48 64 45C64 42 62 40 60 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M50 60C46 60 42 58 40 55L42 53C44 56 48 58 50 58C52 58 56 56 58 53L60 55C58 58 54 60 50 60Z"
                        fill="#0e371f"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.characterName}>Ashitaka</h3>
                  <p className={styles.characterDescription}>
                    A young prince seeking a cure for a deadly curse inflicted
                    upon him by a boar god.
                  </p>
                </div>
                <div className={styles.characterCard}>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      backgroundColor: "#0e371f",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 20C40 20 30 30 30 50C30 70 40 80 50 80C60 80 70 70 70 50C70 30 60 20 50 20Z"
                        fill="#e6b78e"
                      />
                      <path
                        d="M40 40C38 40 36 42 36 45C36 48 38 50 40 50C42 50 44 48 44 45C44 42 42 40 40 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M60 40C58 40 56 42 56 45C56 48 58 50 60 50C62 50 64 48 64 45C64 42 62 40 60 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M30 30L40 25M70 30L60 25"
                        stroke="#e45240"
                        strokeWidth="2"
                      />
                      <path
                        d="M40 65C45 60 55 60 60 65"
                        stroke="#0e371f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.characterName}>San</h3>
                  <p className={styles.characterDescription}>
                    A human girl raised by wolf gods who hates humans for
                    destroying the forest.
                  </p>
                </div>
                <div className={styles.characterCard}>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      backgroundColor: "#0e371f",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="30" fill="#e6b78e" />
                      <path
                        d="M40 40C38 40 36 42 36 45C36 48 38 50 40 50C42 50 44 48 44 45C44 42 42 40 40 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M60 40C58 40 56 42 56 45C56 48 58 50 60 50C62 50 64 48 64 45C64 42 62 40 60 40Z"
                        fill="#0e371f"
                      />
                      <path
                        d="M40 60C45 65 55 65 60 60"
                        stroke="#0e371f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.characterName}>Lady Eboshi</h3>
                  <p className={styles.characterDescription}>
                    Leader of Irontown who wants to destroy the forest to access
                    its resources.
                  </p>
                </div>
                <div className={styles.characterCard}>
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      backgroundColor: "#0e371f",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="30" fill="white" />
                      <circle cx="40" cy="45" r="5" fill="#0e371f" />
                      <circle cx="60" cy="45" r="5" fill="#0e371f" />
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke="#0e371f"
                        strokeWidth="2"
                        strokeDasharray="2 4"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.characterName}>Forest Spirit</h3>
                  <p className={styles.characterDescription}>
                    A god of life and death with the power to heal or destroy.
                  </p>
                </div>
              </div>
            </section>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                The trees cry out as they die, but you cannot hear them. I lie
                here, listening to the pain of the forest.
              </p>
              <div className={styles.quoteAuthor}>— Moro, Wolf God</div>
            </div>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Miyazaki's Themes</h2>
              <p className={styles.text}>
                Princess Mononoke explores several of Hayao Miyazaki's recurring
                themes, presenting a nuanced view that avoids simple
                categorizations of good and evil.
              </p>
              <div className={styles.themesGrid}>
                <div className={styles.themeCard}>
                  <h3 className={styles.themeTitle}>Environmentalism</h3>
                  <p className={styles.themeText}>
                    The film explores the tension between human progress and
                    environmental preservation, without presenting either side
                    as completely right or wrong.
                  </p>
                </div>
                <div className={styles.themeCard}>
                  <h3 className={styles.themeTitle}>Spirituality</h3>
                  <p className={styles.themeText}>
                    Miyazaki weaves Japanese spirituality and animist beliefs
                    throughout the story, depicting nature as being filled with
                    gods and spirits.
                  </p>
                </div>
                <div className={styles.themeCard}>
                  <h3 className={styles.themeTitle}>Moral Complexity</h3>
                  <p className={styles.themeText}>
                    Unlike many animated films, Miyazaki refuses to portray
                    characters as simply good or evil, instead showing humans
                    and forest creatures with complex, often conflicting
                    motivations.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Artistic Beauty</h2>
              <p className={styles.text}>
                Princess Mononoke represents some of Studio Ghibli's finest
                artistry, with hand-drawn animation bringing the enchanted
                forests, spirits, and characters to vivid life. The film blends
                traditional animation techniques with early digital effects,
                creating a unique visual style that enhances the magical
                atmosphere of the story.
              </p>
              <p className={styles.text}>
                The contrast between the lush, mystical forest and the
                industrial Irontown visually reinforces the film's central
                conflict. Miyazaki's attention to detail is evident in every
                frame, from the hypnotic movement of the kodama spirits to the
                terrifying corruption that spreads through the boar god.
              </p>
            </section>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.footerText}>
              "Princess Mononoke" was released in 1997 and remains one of Hayao
              Miyazaki's most ambitious and profound works.
            </p>
            <Link to="/" className={styles.footerLink}>
              Return to Gallery
            </Link>
          </div>

          <div className={styles.kodamaContainer}>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.kodama}
            >
              <circle cx="50" cy="50" r="40" fill="rgba(255, 255, 255, 0.7)" />
              <circle cx="35" cy="40" r="5" fill="black" />
              <circle cx="65" cy="40" r="5" fill="black" />
              <path d="M40 60 L60 60" stroke="black" strokeWidth="2" />
            </svg>
          </div>

          <div className={styles.spiritContainer}>
            {spirits.map((spirit) => (
              <div
                key={spirit.id}
                className={styles.spirit}
                style={{
                  top: `${spirit.top}%`,
                  left: `${spirit.left}%`,
                  width: `${spirit.size}px`,
                  height: `${spirit.size}px`,
                  animationDelay: `${spirit.delay}s`,
                  animationDuration: `${spirit.duration}s`,
                }}
              ></div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Mononoke;
