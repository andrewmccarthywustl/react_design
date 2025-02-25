import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MinimalistDesign.module.css";

const MinimalistDesign = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Colors according to Rams' design palette
  const colorPalette = [
    "#FFFFFF", // White
    "#F5F5F5", // Off-white
    "#E0E0E0", // Light grey
    "#9E9E9E", // Mid grey
    "#333333", // Dark grey
    "#FFD700", // Accent yellow
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      if (containerRef.current) {
        const sections = containerRef.current.querySelectorAll(
          `.${styles.section}`
        );
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(index);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const designPrinciples = [
    {
      number: "01",
      title: "Good design is innovative",
      description:
        "The possibilities for innovation are not exhausted. Technological development offers new opportunities for innovative design.",
      image: "test_image.webp",
    },
    {
      number: "02",
      title: "Good design makes a product useful",
      description:
        "A product is bought to be used. It must satisfy certain criteria, not only functional, but also psychological and aesthetic.",
      image: "test_image.webp",
    },
    {
      number: "03",
      title: "Good design is aesthetic",
      description:
        "The aesthetic quality of a product is integral to its usefulness because products we use every day affect our well-being.",
      image: "test_image.webp",
    },
    {
      number: "04",
      title: "Good design makes a product understandable",
      description:
        "It clarifies the product's structure. Better still, it can make the product talk. At best, it is self-explanatory.",
      image: "test_image.webp",
    },
    {
      number: "05",
      title: "Good design is unobtrusive",
      description:
        "Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art.",
      image: "test_image.webp",
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <svg
            className={styles.logoShape}
            viewBox="0 0 100 100"
            width="50"
            height="50"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              stroke="#333"
              strokeWidth="2"
              fill="none"
            />
            <rect x="25" y="25" width="50" height="50" fill="#333" />
          </svg>
          <h1 className={styles.logoText}>
            Less<span>Typography</span>
          </h1>
        </div>
        <nav className={styles.nav}>
          {designPrinciples.map((principle, index) => (
            <button
              key={index}
              className={`${styles.navItem} ${
                activeSection === index ? styles.active : ""
              }`}
              onClick={() => {
                const sections = containerRef.current?.querySelectorAll(
                  `.${styles.section}`
                );
                sections?.[index].scrollIntoView({ behavior: "smooth" });
              }}
            >
              {principle.number}
            </button>
          ))}
        </nav>
      </header>

      <div className={styles.container} ref={containerRef}>
        <div className={styles.intro}>
          <h2 className={styles.introTitle}>
            Good typography
            <br />
            is good design
          </h2>
          <p className={styles.introText}>
            Typography should be clear and legible, should fulfill its intended
            purpose, and should be integrated harmoniously within the whole.
          </p>
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollText}>Scroll</span>
            <div className={styles.scrollLine}>
              <div className={styles.scrollDot}></div>
            </div>
          </div>
        </div>

        {designPrinciples.map((principle, index) => (
          <section
            key={index}
            className={`${styles.section} ${
              activeSection === index ? styles.active : ""
            }`}
            style={
              {
                "--section-progress": Math.max(
                  0,
                  Math.min(
                    1,
                    (scrollY - index * window.innerHeight * 0.8) /
                      (window.innerHeight * 0.8)
                  )
                ),
              } as React.CSSProperties
            }
          >
            <div className={styles.contentWrapper}>
              <div className={styles.contentText}>
                <span className={styles.principleNumber}>
                  {principle.number}
                </span>
                <h2 className={styles.principleTitle}>{principle.title}</h2>
                <p className={styles.principleDescription}>
                  {principle.description}
                </p>
              </div>
              <div className={styles.contentImage}>
                <div className={styles.imageWrapper}>
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className={styles.principleImage}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <h3 className={styles.footerTitle}>Less, but better</h3>
              <p className={styles.footerText}>
                Clarity and order create tranquil typography
              </p>
            </div>
            <div className={styles.footerRight}>
              <Link to="/" className={styles.backButton}>
                Back to Home
              </Link>
            </div>
          </div>
          <div className={styles.footerLine}></div>
          <div className={styles.copyright}>
            Typography Experiments © {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MinimalistDesign;
