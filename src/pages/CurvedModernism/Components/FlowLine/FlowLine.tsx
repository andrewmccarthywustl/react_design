// FlowLine.tsx
import React from "react";
import styles from "./FlowLine.module.css";

interface FlowLineProps {
  type: "circular" | "wave" | "spiral";
  color: "blue" | "green";
  className?: string;
}

const FlowLine: React.FC<FlowLineProps> = ({ type, color, className }) => {
  const getPathData = () => {
    switch (type) {
      case "circular":
        return `M50,250 C250,150 350,150 550,250 C750,350 850,350 1050,250 C1250,150 1350,150 1550,250`;
      case "wave":
        return `M0,100 C150,0 300,200 450,100 C600,0 750,200 900,100 C1050,0 1200,200 1350,100`;
      case "spiral":
        return `M500,500 C500,350 650,350 650,500 C650,650 500,650 500,500 C500,350 650,350 800,500 C950,650 800,800 650,800 C500,800 350,650 500,500`;
      default:
        return "";
    }
  };

  const svgClasses = [styles.flowLine, styles[color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={svgClasses}
      viewBox="0 0 1600 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={getPathData()}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        className={styles.path}
      />
    </svg>
  );
};

export default FlowLine;
