// SectionTitle.tsx
import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  text: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  align = "left",
}) => {
  return (
    <h2
      className={`${styles.sectionTitle} ${
        styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`]
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
