import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LiquidMotion.module.css";

const LiquidMotion = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const liquidBlobRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // For liquid mouse blob
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (liquidBlobRef.current) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });

        // Apply the position with a slight delay for a trailing effect
        liquidBlobRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle scroll effects
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);

      // Reset the scrolling state after a short delay
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Canvas wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Liquid wave parameters
    let frequency = 0.01;
    const waves = [
      {
        amplitude: 50,
        speed: 0.04,
        color: "rgba(0, 210, 255, 0.4)",
        height: 0.3,
      },
      {
        amplitude: 30,
        speed: 0.03,
        color: "rgba(0, 169, 255, 0.3)",
        height: 0.35,
      },
      {
        amplitude: 20,
        speed: 0.02,
        color: "rgba(0, 149, 255, 0.2)",
        height: 0.4,
      },
    ];

    let phase = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        const y = canvas.height * wave.height;

        ctx.beginPath();
        ctx.moveTo(0, y);

        // Draw wave
        for (let x = 0; x < canvas.width; x++) {
          const dx = x * frequency;
          const waveY = Math.sin(dx + phase * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y + waveY);
        }

        // Complete the wave shape
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(1, "rgba(0, 120, 255, 0.1)");

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      phase += 0.005; // Speed of phase shift
      animationRef.current = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Background liquid canvas */}
      <canvas ref={canvasRef} className={styles.liquidCanvas}></canvas>

      {/* Mouse follower liquid blob */}
      <div
        ref={liquidBlobRef}
        className={`${styles.liquidBlob} ${
          isScrolling ? styles.isScrolling : ""
        }`}
      ></div>

      <div className={styles.container} ref={contentRef}>
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            LIQUID<span>MOTION</span>
          </Link>
          <nav className={styles.nav}>
            <a href="#intro" className={styles.navLink}>
              Home
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#showcase" className={styles.navLink}>
              Showcase
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </header>

        <section id="intro" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.liquidText} data-text="Fluid">
                Fluid
              </span>
              <span className={styles.liquidText} data-text="Typography">
                Typography
              </span>
              <span className={styles.liquidText} data-text="in Motion">
                in Motion
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              Exploring the boundaries between digital typography and liquid
              physics
            </p>

            <div className={styles.scrollCta}>
              <span className={styles.scrollText}>Scroll to explore</span>
              <div className={styles.scrollIcon}>
                <div className={styles.scrollDot}></div>
              </div>
            </div>
          </div>

          <div className={styles.liquidHero}>
            <div className={styles.liquidBubble}></div>
            <div className={styles.liquidBubble}></div>
            <div className={styles.liquidBubble}></div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className={styles.stickyContainer}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.liquidChar}>L</span>
              <span className={styles.liquidChar}>I</span>
              <span className={styles.liquidChar}>Q</span>
              <span className={styles.liquidChar}>U</span>
              <span className={styles.liquidChar}>I</span>
              <span className={styles.liquidChar}>D</span>
            </h2>

            <div className={styles.liquidPool}>
              <div className={styles.liquidDrops}>
                <div className={styles.liquidDrop}></div>
                <div className={styles.liquidDrop}></div>
                <div className={styles.liquidDrop}></div>
              </div>
            </div>

            <div className={styles.textColumns}>
              <div className={styles.textColumn}>
                <p>
                  Liquid design moves beyond static elements, creating
                  interfaces and typography that respond organically to user
                  interactions as if they were made of fluid materials.
                </p>
              </div>
              <div className={styles.textColumn}>
                <p>
                  This approach creates a more dynamic, playful, and natural
                  digital experience that mimics the physical properties of
                  liquids - flowing, merging, splitting, and responding to
                  forces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className={styles.showcaseSection}>
          <h2 className={styles.showcaseTitle}>Fluid Interactions</h2>

          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseItem}>
              <div className={styles.liquidCard}>
                <div className={styles.cardContent}>
                  <h3>Droplet</h3>
                  <p>Surface tension creates perfect spherical forms</p>
                </div>
              </div>
            </div>

            <div className={styles.showcaseItem}>
              <div className={styles.liquidCard}>
                <div className={styles.cardContent}>
                  <h3>Flow</h3>
                  <p>Constant motion and adaptation to containment</p>
                </div>
              </div>
            </div>

            <div className={styles.showcaseItem}>
              <div className={styles.liquidCard}>
                <div className={styles.cardContent}>
                  <h3>Ripple</h3>
                  <p>Waves propagate from points of interaction</p>
                </div>
              </div>
            </div>

            <div className={styles.showcaseItem}>
              <div className={styles.liquidCard}>
                <div className={styles.cardContent}>
                  <h3>Splash</h3>
                  <p>Explosive, energetic responses to sudden forces</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.liquidLetters}>
            <div className={styles.liquidLetter}>F</div>
            <div className={styles.liquidLetter}>L</div>
            <div className={styles.liquidLetter}>O</div>
            <div className={styles.liquidLetter}>W</div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Get in Touch</h2>
            <p className={styles.contactText}>
              Want to learn more about fluid typography?
            </p>

            <div className={styles.liquidButton}>
              <div className={styles.liquidButtonText}>Contact Us</div>
              <div className={styles.liquidButtonBg}></div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              LIQUID<span>MOTION</span>
            </div>

            <div className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>
                Back to Home
              </Link>
            </div>
          </div>

          <div className={styles.liquidFooter}>
            <div className={styles.liquidWave}></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LiquidMotion;
