// Sections/Hero/Hero.tsx
import React from "react";
import styles from "./Hero.module.css";
import CircleAnimation from "../../Components/CircleAnimation/CircleAnimation";
import SpiralAnimation2 from "../../Components/SpiralAnimation2/SpiralAnimation2";
import SpiralAnimation from "../../Components/SpiralAnimation/SpiralAnimation";
// import SpiralAnimation2 from "../../Components/SpiralAnimation2/SpiralAnimation2";
import SinWave from "../../Components/SinWave/sinwave";

interface HeroProps {
  institution1: string;
  institution2: string;
  title: string[];
  programs: string[];
}

const Hero: React.FC<HeroProps> = ({
  institution1,
  institution2,
  title,
  programs,
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.institutions}>
          <h2 className={styles.institution}>{institution1}</h2>
          <h2 className={styles.institution}>{institution2}</h2>
        </div>

        <h1 className={styles.title}>
          {title.map((line, index) => (
            <span
              key={index}
              className={styles.fadeInUp}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className={styles.programs}>
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${styles.program} ${styles.fadeInUp}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <h3>{program}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroGraphic}>
        <div className={styles.curveContainer}>
          <SpiralAnimation2 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
