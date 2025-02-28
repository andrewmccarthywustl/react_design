// Components/CircleAnimation/CircleAnimation.tsx
import React from "react";
import styles from "./CircleAnimationSmall.module.css";

const CircleAnimation: React.FC = () => {
  return (
    <svg
      className={styles.circlesSvg}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Create 10 concentric circles alternating between blue and green */}
      {[...Array(5)].map((_, i) => (
        <circle
          key={`circle-${i}`}
          cx="300"
          cy="300"
          r={250 - i * 40}
          fill="none"
          stroke={
            i % 2 === 0 ? "var(--cm-primary-blue)" : "var(--cm-primary-green)"
          }
          strokeWidth="16"
          className={styles.circlePath}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </svg>
  );
};

export default CircleAnimation;
