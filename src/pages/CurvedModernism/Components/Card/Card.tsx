// Card.tsx (revised)
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  content: string;
  color: "blue" | "green";
  index?: number;
}

const Card: React.FC<CardProps> = ({ title, content, color, index }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      {index && <span className={styles.index}>{index}</span>}
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
