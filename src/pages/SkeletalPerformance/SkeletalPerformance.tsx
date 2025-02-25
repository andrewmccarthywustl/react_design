import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./SkeletalPerformance.module.css";

const SkeletalPerformance = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skullRef = useRef<HTMLDivElement>(null);
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.border}>
        <div className={styles.container} ref={containerRef}>
          <div className={styles.header}>
            <Link to="/" className={styles.backButton}>
              <span className={styles.backArrow}>←</span> Back
            </Link>
          </div>

          <div className={styles.mainContent}>
            <div
              className={`${styles.titleSection} ${
                isVisible ? styles.visible : ""
              }`}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <h1
                className={styles.title}
                ref={titleRef}
                style={{ transform: `translateX(${scrollY * 0.05}px)` }}
              >
                <span className={styles.titleLine}>Serjeant</span>
                <span className={styles.titleLine}>Musgrave's</span>
                <span className={styles.titleLine}>Dance</span>
              </h1>

              <div className={styles.byline}>
                <p>by John Arden</p>
                <p>February 8–12</p>
                <p>8:30 pm</p>
                <p>The Playhouse (1865-1884)</p>
                <p>The Pennsylvania State University</p>
              </div>

              <div className={styles.emblem}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25,5 C30,15 35,20 45,25 C35,30 30,35 25,45 C20,35 15,30 5,25 C15,20 20,15 25,5 Z"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <circle
                    cx="25"
                    cy="25"
                    r="5"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.skeletonSection}>
              <div
                className={`${styles.skullContainer} ${
                  isVisible ? styles.visible : ""
                }`}
                ref={skullRef}
                style={{ transform: `translateY(${scrollY * -0.05}px)` }}
              >
                <div className={styles.skull}>
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.skullSvg}
                  >
                    <path
                      className={styles.skullPath}
                      d="M100,30 C130,30 150,60 150,90 C150,110 140,130 120,140 L120,160 C120,170 110,175 100,175 C90,175 80,170 80,160 L80,140 C60,130 50,110 50,90 C50,60 70,30 100,30 Z"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="75"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="125"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M85,140 L115,140"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M70,160 L80,160 M120,160 L130,160 M90,160 L95,160 M105,160 L110,160"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div
                  className={styles.skull}
                  style={{ left: "30%", animationDelay: "0.1s" }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.skullSvg}
                  >
                    <path
                      className={styles.skullPath}
                      d="M100,30 C130,30 150,60 150,90 C150,110 140,130 120,140 L120,160 C120,170 110,175 100,175 C90,175 80,170 80,160 L80,140 C60,130 50,110 50,90 C50,60 70,30 100,30 Z"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="75"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="125"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M85,140 L115,140"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M70,160 L80,160 M120,160 L130,160 M90,160 L95,160 M105,160 L110,160"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div
                  className={styles.skull}
                  style={{ left: "60%", animationDelay: "0.2s" }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.skullSvg}
                  >
                    <path
                      className={styles.skullPath}
                      d="M100,30 C130,30 150,60 150,90 C150,110 140,130 120,140 L120,160 C120,170 110,175 100,175 C90,175 80,170 80,160 L80,140 C60,130 50,110 50,90 C50,60 70,30 100,30 Z"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="75"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <circle
                      className={styles.skullPath}
                      cx="125"
                      cy="100"
                      r="15"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M85,140 L115,140"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skullPath}
                      d="M70,160 L80,160 M120,160 L130,160 M90,160 L95,160 M105,160 L110,160"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`${styles.fullSkeletonContainer} ${
                  isVisible ? styles.visible : ""
                }`}
                ref={skeletonRef}
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <div className={styles.fullSkeleton}>
                  <svg
                    viewBox="0 0 300 600"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.skeletonSvg}
                  >
                    {/* Torso */}
                    <path
                      className={styles.skeletonPath}
                      d="M150,200 C180,200 200,230 200,260 C200,350 180,400 150,450 C120,400 100,350 100,260 C100,230 120,200 150,200 Z"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Spine */}
                    <path
                      className={styles.skeletonPath}
                      d="M150,200 L150,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skeletonPath}
                      d="M135,220 L165,220 M135,240 L165,240 M135,260 L165,260 M135,280 L165,280 M135,300 L165,300 M135,320 L165,320 M135,340 L165,340 M135,360 L165,360 M135,380 L165,380 M135,400 L165,400 M135,420 L165,420"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Ribs */}
                    <path
                      className={styles.skeletonPath}
                      d="M150,240 C170,240 190,250 200,260 M150,240 C130,240 110,250 100,260"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skeletonPath}
                      d="M150,270 C170,270 190,280 200,290 M150,270 C130,270 110,280 100,290"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skeletonPath}
                      d="M150,300 C170,300 190,310 200,320 M150,300 C130,300 110,310 100,320"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skeletonPath}
                      d="M150,330 C170,330 190,340 200,350 M150,330 C130,330 110,340 100,350"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Pelvis */}
                    <path
                      className={styles.skeletonPath}
                      d="M100,450 C120,480 180,480 200,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <ellipse
                      className={styles.skeletonPath}
                      cx="150"
                      cy="460"
                      rx="50"
                      ry="20"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Arms */}
                    <path
                      className={styles.skeletonPath}
                      d="M100,220 C80,240 70,300 60,350 C50,400 30,420 20,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={styles.skeletonPath}
                      d="M200,220 C220,240 230,300 240,350 C250,400 270,420 280,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Hands */}
                    <path
                      className={styles.skeletonPath}
                      d="M20,450 L10,470 M20,450 L20,470 M20,450 L30,470 M20,450 L40,465 M20,450 L45,460"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Gun */}
                    <path
                      className={`${styles.skeletonPath} ${styles.gunPath}`}
                      d="M30,450 L280,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={`${styles.skeletonPath} ${styles.gunPath}`}
                      d="M100,450 L100,470 L200,470 L200,450"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      className={`${styles.skeletonPath} ${styles.gunAccent}`}
                      d="M120,450 L120,470 M140,450 L140,470 M160,450 L160,470 M180,450 L180,470"
                      fill="none"
                      stroke="#cc9900"
                      strokeWidth="3"
                    />
                    <path
                      className={`${styles.skeletonPath} ${styles.gunPath}`}
                      d="M240,430 L240,470"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />

                    {/* Uniform accents */}
                    <path
                      className={`${styles.skeletonPath} ${styles.uniformAccent}`}
                      d="M90,300 L110,300 M190,300 L210,300"
                      fill="none"
                      stroke="#cc9900"
                      strokeWidth="3"
                    />
                    <path
                      className={`${styles.skeletonPath} ${styles.uniformAccent}`}
                      d="M75,250 C90,240 90,260 75,250 Z"
                      fill="none"
                      stroke="#cc9900"
                      strokeWidth="3"
                    />

                    {/* Bottom display platform */}
                    <path
                      className={styles.skeletonPath}
                      d="M50,500 L250,500 L200,550 L100,550 Z"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.synopsis}>
              <h2>Synopsis</h2>
              <p>
                When Serjeant Musgrave and three soldiers arrive in a northern
                mining town, they appear to be recruiting for the British Army.
                However, their true intention is to hold the town accountable
                for atrocities committed abroad.
              </p>
              <p>
                A powerful anti-war play, Serjeant Musgrave's Dance examines
                moral responsibility, violence, and the cycle of vengeance with
                stark and uncompromising vision.
              </p>
            </div>

            <div className={styles.ticketInfo}>
              <h2>Tickets</h2>
              <p>
                Student: $10
                <br />
                Adult: $15
                <br />
                Senior: $12
              </p>
              <div className={styles.button}>Reserve Seats</div>
            </div>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <p>
                Experimental Typography Project · {new Date().getFullYear()}
              </p>
              <Link to="/" className={styles.footerLink}>
                Return to Gallery
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SkeletalPerformance;
