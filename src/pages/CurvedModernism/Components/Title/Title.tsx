// Title.tsx
import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  text: string;
  align?: "left" | "center" | "right";
  size?: "small" | "medium" | "large";
  color?: "dark" | "light" | "blue" | "green";
  withLine?: boolean;
}

const Title: React.FC<TitleProps> = ({
  text,
  align = "left",
  size = "large",
  color = "dark",
  withLine = true,
}) => {
  const titleClasses = [
    styles.title,
    styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
  ].join(" ");

  return (
    <div className={styles.container}>
      <h2 className={titleClasses}>{text}</h2>
      {withLine && (
        <div
          className={`${styles.line} ${
            styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}Line`]
          }`}
        ></div>
      )}
    </div>
  );
};

export default Title;
