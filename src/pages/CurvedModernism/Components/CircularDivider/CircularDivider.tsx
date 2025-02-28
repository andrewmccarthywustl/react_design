// CircularDivider.tsx
import React from "react";
import styles from "./CircularDivider.module.css";

interface CircularDividerProps {
  color: "blue" | "green";
}

const CircularDivider: React.FC<CircularDividerProps> = ({ color }) => {
  return (
    <div className={`${styles.divider} ${styles[color]}`}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default CircularDivider;
