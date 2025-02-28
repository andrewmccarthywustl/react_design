// Components/SpiralAnimation/SpiralAnimation.tsx
import React, { useRef, useEffect } from "react";
import styles from "./SpiralAnimation.module.css";

interface SpiralAnimationProps {
  className?: string;
}

const SpiralAnimation: React.FC<SpiralAnimationProps> = ({ className }) => {
  const bluePathsRef = useRef<SVGPathElement[]>([]);
  const greenPathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    // For each path, set up animation that follows the path
    bluePathsRef.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        // Set up stroke animation
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `${styles.drawStroke} 3s ${
          index * 0.2
        }s forwards,
                                  ${styles.fillPath} 3s ${
          index * 0.2
        }s forwards`;
      }
    });

    greenPathsRef.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        // Set up stroke animation
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `${styles.drawStroke} 3s ${
          0.8 + index * 0.2
        }s forwards,
                                  ${styles.fillPath} 3s ${
          0.8 + index * 0.2
        }s forwards`;
      }
    });
  }, []);

  return (
    <svg
      className={`${styles.spiralSvg} ${className || ""}`}
      viewBox="0 0 1286 1800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue spiral paths */}
      <path
        ref={(el) => (bluePathsRef.current[0] = el as SVGPathElement)}
        className={`${styles.path} ${styles.bluePath}`}
        d="M615,62h59l36,3,35,5,33,7,30,8,37,12,27,11,20,9,21,10,23,13,20,12,22,15,19,14,16,13,13,11,13,12,15,14,8,8,7,8,13,14,9,11,11,13,14,19,20,30,13,22,14,26,10,21,12,29,12,34,10,35,7,32,5,31,3,28,1,15v315l-1,39-8-1-6-4-5-6-2-5v-304l-1-35-3-33-5-33-6-28-8-30-12-36-14-34-16-33-13-23-15-24-12-17-16-21-9-11-12-14-15-16-21-21-8-7-15-13-15-12-19-14-21-14-25-15-26-14-28-13-33-13-34-11-36-9-31-6-31-4-24-2h-65l-34,3-33,5-33,7-29,8-30,10-25,10-20,9-23,11-23,13-21,13-12,8-14,10-17,13-13,11-11,9-15,14-26,26-7,8-12,14-13,17-12,16-16,24-13,22-13,24-11,23-13,32-12,36-8,30-7,34-5,36-2,25-1,22v24l3,33,5,27,6,23,9,26,9,20,12,23,12,19,14,19,11,13,11,12,15,15,11,9,12,10,20,14,26,15,21,10,26,10,24,7,23,5,28,4,15,1h32l31-3,23-4,27-7,26-9,26-12,22-12,21-14,13-10,11-9,13-12,16-16,9-11,12-15,12-18,11-19,8-15,12-29,8-25,6-26,4-28,1-11v-32l-4-20-6-15-6-11-10-13-9-9-14-10-17-8-14-4-14-2h-14l-19,3-17,6-16,9-11,9-7,7-10,14-8,16-5,17-1,6-1,24-3,19-7,21-8,15-8,11-9,11-8,7-13,10-21,11-19,6-12,2-12,1h-10l-17-2-19-5-16-7-15-9-13-11-8-8-10-13-9-16-6-15-5-21-1-10v-13l2-30,3-23,6-28,6-21,7-20,10-23,10-20,14-23,13-18,9-11,12-14,25-25,11-9,15-12,24-16,21-12,25-12,24-9,19-6,25-6,24-4,18-2,19-1h16l31,2,27,4,27,6,36,12,25,11,23,12,19,12,17,12,11,9,14,12,17,16,7,8,10,11,10,13,12,17,13,21,13,25,8,19,7,19,8,28,6,31,3,28v53l-3,36-4,28-6,31-8,32-9,29-11,29-13,30-12,24-13,23-13,21-13,19-14,19-9,11-11,13-7,8-9,10-10,10-4,5h-2v2l-8,7-10,10-11,9-10,9-13,10-20,15-24,16-25,15-24,13-29,14-27,11-41,14-35,9-29,6-34,5-34,3-29,1-312,1h-44l-1-1,1-21,1-1,359-1,26-1,40-4,36-6,34-8,30-9,28-10,26-11,29-14,24-13,24-15,19-13,16-12,10-8,11-9,15-13,7-7,8-7,12-12,7-8,12-13,9-11,12-15,12-17,16-24,12-20,12-22,13-27,14-34,12-37,10-40,6-34,3-25,2-28v-44l-3-31-5-26-7-26-8-22-8-18-10-20-13-21-12-17-13-16-11-12-18-18-11-9-15-12-15-10-20-12-16-8-17-8-28-10-26-7-27-5-20-2-18-1h-12l-22,1-24,3-26,5-31,9-25,10-25,12-17,10-19,13-14,11-15,13-23,23-9,11-13,17-10,15-12,21-12,25-11,30-6,22-5,26-3,26v40l4,17,7,16,7,11,9,11,11,10,14,9,11,5,12,4,19,3h13l15-2,16-5,16-8,13-9,12-12,9-13,7-14,5-16,2-14,1-20,3-18,6-18,10-19,10-13,10-11,14-11,14-8,16-7,19-5,7-1h28l17,3,18,6,19,10,13,10,11,10,11,14,8,14,7,16,4,14,2,12,1,20-2,33-5,32-7,28-9,27-11,25-13,25-12,19-10,14-11,14-9,10-7,8-21,21-11,9-18,14-15,10-15,9-23,12-20,9-28,10-31,8-31,5-22,2h-40l-30-3-31-6-26-7-27-10-20-9-23-12-19-12-18-13-13-11-11-9-23-23-9-11-10-12-12-17-12-19-13-24-12-28-10-31-6-26-4-24-2-22v-51l3-35,5-35,7-33,8-30,12-36,11-28,14-30,12-23,15-25,18-27,14-19,13-16,12-14,11-12,12-13,10-10,8-7,15-14,11-9,15-12,18-13,27-18,20-12,26-14,27-13,34-14,36-12,35-9,24-5,32-5,29-3,15-1Z"
        style={{ animationDelay: "0s" }}
      />
      <path
        ref={(el) => (bluePathsRef.current[1] = el as SVGPathElement)}
        className={`${styles.path} ${styles.bluePath}`}
        d="M627,90h34l33,2,33,4,33,6,36,9,37,12,28,11,28,13,27,14,23,14,18,12,14,10,13,10,11,9,13,11,12,11,16,15,14,15,12,13,9,11,11,14,14,19,12,18,15,25,13,24,12,25,14,35,10,30,8,30,6,28,5,32,3,30,1,21v324l4,9,4,5,12,6,7,1v22l-12-1-13-5-8-6-5-5-6-8-5-12-1-5-1-342-3-32-5-32-6-27-7-26-11-33-12-29-11-24-10-19-13-22-18-27-14-19-9-11-12-14-11-12-12-13-26-24-11-9-12-10-19-14-26-17-26-15-15-8-28-13-28-11-30-10-34-9-31-6-29-4-23-2-20-1h-31l-32,2-33,4-36,7-28,7-36,12-28,11-30,14-22,12-22,13-25,17-21,16-13,11-11,9-17,16-17,17-7,8-13,15-11,14-14,19-10,15-13,21-14,25-13,27-11,27-13,38-9,35-6,32-4,31-2,29v37l3,30,5,26,7,24,8,21,11,24,13,22,12,17,8,10,12,14,21,21,11,9,13,10,15,10,19,11,25,12,27,10,27,7,23,4,20,2h40l27-3,29-6,26-8,20-8,17-8,21-12,19-13,10-8,13-11,15-14,7-8,12-14,13-18,11-18,9-16,11-25,9-27,6-26,4-29,1-19v-12l-2-14-5-14-7-12-10-11-13-9-11-5-11-3-6-1h-17l-14,3-14,6-11,8-7,6-8,11-6,12-4,14-2,29-3,18-6,20-8,18-10,16-9,11-9,10-11,10-16,11-19,10-24,8-16,3-9,1h-23l-21-3-18-5-21-9-16-10-14-11-15-15-11-15-10-17-7-17-5-17-3-20v-36l3-30,5-28,7-27,10-29,10-23,13-26,11-18,11-16,9-12,9-11,9-10,7-8,18-18,11-9,9-8,19-14,20-13,21-12,27-13,26-10,26-8,27-6,26-4,22-2h46l29,3,24,4,32,8,29,10,23,10,16,8,17,9,22,14,21,16,11,9,10,9,12,11,8,8,7,8,13,15,14,19,13,20,12,21,14,29,9,24,8,26,6,26,4,25,2,19,1,340,2,19,4,20,8,24,10,21,10,16,10,13,12,14,13,12,16,12,15,9,16,8,20,8,23,6,21,3,18,1,1,1v21h-20l-21-3-25-6-24-9-20-10-16-10-12-9-13-11-17-17-11-14-9-13-9-16-8-16-10-30-5-25-2-20-1-333-3-29-5-27-7-27-10-28-12-27-12-22-11-17-10-14-10-13-12-14-26-26-11-9-15-12-21-14-15-9-27-14-27-11-28-9-26-6-25-4-22-2h-43l-29,3-28,5-26,7-26,9-23,10-20,10-23,14-18,13-14,11-11,10-8,7-16,16-9,11-8,9-13,18-14,22-14,27-9,20-9,25-8,30-5,28-3,30v34l4,21,7,19,8,15,10,14,12,13,17,13,21,11,19,6,16,3h30l21-4,21-8,16-9,13-10,14-14,10-14,10-19,6-18,3-16,2-28,3-15,6-16,8-13,8-10,8-8,13-9,14-7,17-5,6-1h25l14,3,16,6,15,9,13,12,9,11,8,14,5,13,3,15v37l-4,31-6,27-8,26-10,24-8,17-11,19-10,15-9,12-8,10-9,10-7,8-12,12-8,7-13,11-18,13-21,13-23,12-19,8-33,11-27,6-19,3-26,2h-27l-24-2-30-5-24-6-26-9-29-13-18-10-19-12-13-10-16-13-16-15-9-9-7-8-13-16-12-17-12-20-12-23-10-25-6-18-6-23-5-31-2-31v-19l2-36,4-33,7-38,8-31,12-37,13-32,13-28,12-22,12-20,16-24,14-19,13-16,9-11,14-15,9-10,11-11,8-7,13-12,11-9,15-12,18-13,21-14,25-15,28-15,24-11,30-12,30-10,38-10,37-7,34-4,32-2Z"
        style={{ animationDelay: "0.1s" }}
      />
      <path
        ref={(el) => (bluePathsRef.current[2] = el as SVGPathElement)}
        className={`${styles.path} ${styles.bluePath}`}
        d="M617,119h54l27,2,35,5,34,7,26,7,36,12,29,12,29,14,20,11,23,14,20,14,17,13,16,13,12,11,8,7,28,28,7,8,12,14,10,13,13,18,10,15,11,18,12,21,12,24,13,31,10,28,8,27,8,34,6,39,3,36v329l2,12,5,12,8,11,10,8,13,6,9,2,9,1v22h-11l-16-4-10-4-12-8-12-11-9-14-6-14-3-17v-328l-2-29-4-30-7-35-8-29-10-30-12-29-15-31-13-23-14-22-13-18-14-18-12-14-11-12-28-28-11-9-14-12-20-15-21-14-20-12-22-12-27-13-36-14-32-10-34-8-30-5-26-3-14-1h-58l-33,3-37,6-29,7-24,7-21,7-27,11-25,12-25,13-24,15-19,13-17,13-17,14-13,12-12,11-14,14-7,8-13,15-13,17-12,16-11,17-13,22-12,23-11,23-11,28-11,33-8,32-5,27-4,32-1,14-1,41,2,26,5,28,7,24,8,21,10,21,12,20,14,19,11,13,12,13,13,12,14,11,17,12,23,13,22,10,30,10,27,6,25,3h41l24-3,28-6,27-9,20-9,19-10,24-16,16-13,12-11,11-11,9-11,13-17,12-19,11-21,11-28,7-25,4-20,2-17,1-17v-11l-2-11-6-12-8-9-10-6-8-3-6-1h-11l-12,3-10,6-7,6-6,10-4,11-2,31-5,26-7,20-10,21-7,11-8,11-11,13-10,10-14,11-10,7-14,8-17,8-18,6-18,4-15,2h-32l-25-4-20-6-21-9-19-11-13-10-12-11-12-12-12-16-9-15-8-16-8-24-4-19-2-23v-14l2-31,4-29,5-24,7-26,10-29,11-25,14-27,13-21,11-16,13-17,12-14,14-15,16-16,8-7,17-14,18-13,15-10,24-14,16-8,17-8,23-9,28-9,29-7,32-5,20-2,31-1,26,1,29,3,28,5,28,7,30,10,24,10,25,12,18,10,27,18,16,12,11,9,20,18,18,18,9,11,8,9,15,20,13,20,11,19,12,23,13,31,10,31,7,29,5,29,2,19,1,17,1,336,4,23,8,24,8,16,7,12,9,12,9,10,5,6,11,9,13,10,16,9,17,8,19,6,21,4,22,2,1,1v20l-1,1h-12l-24-3-20-5-19-7-21-10-18-12-10-8-10-9-13-13-15-20-10-18-7-15-7-21-4-18-2-15-1-235v-85l-1-27-4-33-7-34-8-27-11-29-15-31-13-22-10-15-14-19-12-14-9-10-8-8v-2l-4-2-12-12-11-9-15-12-17-12-18-11-18-10-27-13-29-11-28-8-22-5-26-4-21-2h-50l-29,3-24,4-32,8-27,9-28,12-20,10-17,10-21,14-16,12-11,9-11,10-8,7-14,14-7,8-11,13-12,16-12,18-9,15-12,23-9,19-10,27-7,23-6,26-4,25-2,22v44l4,22,7,21,12,23,11,15,11,12,10,10,15,11,18,10,20,8,19,5,14,2h33l22-4,16-5,19-8,15-9,13-10,12-11,9-10,10-14,9-16,7-17,5-17,3-16,2-30,4-15,7-13,9-11,12-9,12-6,11-3,16-1,17,3,12,5,10,7,9,8,7,10,5,10,4,14v35l-4,30-6,25-10,30-9,20-10,19-13,20-9,12-9,11-11,12-18,18-11,9-19,14-20,12-23,12-28,11-25,7-26,5-31,3h-22l-26-2-28-5-23-6-20-7-25-11-20-11-21-14-13-10-10-9-8-7-14-14-9-11-10-12-16-24-12-22-9-20-11-33-6-28-3-25v-51l3-34,5-33,8-36,8-28,12-33,10-23,12-25,11-20,13-21,8-12,10-14,12-16,12-14,9-11,12-12,7-8,15-14,12-11,11-9,15-12,18-13,15-10,18-11,16-9,23-12,24-11,29-11,24-8,30-8,36-7,30-4,26-2Z"
        style={{ animationDelay: "0.2s" }}
      />
      <path
        ref={(el) => (bluePathsRef.current[3] = el as SVGPathElement)}
        className={`${styles.path} ${styles.bluePath}`}
        d="M631,147h25l35,2,37,5,34,7,35,10,28,10,30,13,26,13,27,16,15,10,14,10,16,12,15,13,8,7,12,11,20,20,7,8,12,14,13,17,13,18,12,19,10,17,15,29,9,20,9,23,10,30,9,36,5,27,4,32,1,12,1,343,3,14,5,13,6,10,8,10,11,10,16,9,15,5,20,3v22l-16-1-17-4-13-5-16-9-11-9-10-10-10-14-8-17-5-18-1-7-1-340-3-33-6-36-9-36-11-33-10-24-12-26-13-24-14-22-12-17-12-16-12-14-22-24-10-10-8-7-11-10-14-11-16-12-24-16-24-14-19-10-27-12-29-11-30-9-25-6-28-5-36-4-23-1h-23l-32,2-31,4-26,5-28,7-36,12-29,12-17,8-22,12-20,12-19,13-19,14-14,12-11,9-32,32-7,8-12,14-9,12-13,18-12,19-13,23-8,16-10,21-11,29-10,32-7,30-5,29-3,28-1,18v32l3,26,5,23,10,30,12,25,11,18,12,16,12,14,15,15,11,9,18,13,19,11,23,11,30,10,24,5,17,2h42l23-3,25-6,21-7,24-11,19-11,18-13,14-12,19-19,11-14,10-14,10-18,8-16,8-21,7-25,4-25,1-13v-19l-5-8-6-3h-11l-7,4-4,8-2,30-5,26-5,17-8,19-11,21-11,16-9,11-12,13-13,12-19,14-18,10-14,7-22,8-21,5-20,3h-40l-25-4-21-6-16-6-19-9-19-12-13-10-12-11-14-14-13-17-11-18-8-16-6-15-6-19-4-21-2-19v-27l2-29,5-35,7-31,9-30,10-26,11-24,13-25,11-18,11-16,12-16,13-16,11-12,7-8,16-16,8-7,15-13,16-12,17-12,21-13,18-10,24-12,27-11,34-11,29-7,22-4,35-4,19-1h25l32,2,35,5,27,6,25,7,29,10,27,12,24,12,17,10,20,13,18,13,11,9,13,11,13,12,21,21,9,11,11,13,12,16,14,21,11,19,12,23,8,17,11,28,10,32,7,31,4,25,3,32,1,336,3,21,5,17,8,18,10,16,11,13,10,10,13,10,17,10,20,8,21,5,23,2,1,2v20l-4,1-22-2-23-5-21-8-17-9-13-9-11-9-16-16-12-16-9-16-8-18-6-21-3-21-1-338-3-31-5-29-6-25-9-29-11-28-14-29-12-21-14-21-14-19-12-14-7-8-11-12-13-13-8-7-13-11-20-15-18-12-20-12-27-14-23-10-28-10-29-8-30-6-23-3-28-2h-31l-28,2-28,4-29,6-24,7-26,9-21,9-21,10-24,14-19,12-17,13-9,7-13,11-12,11-19,19-7,8-11,13-14,19-15,23-12,21-8,16-8,17-10,27-7,22-6,24-5,28-3,26-1,15v33l3,22,5,20,8,21,11,21,12,17,9,10,7,8,11,10,16,12,21,12,19,8,20,6,22,4,11,1h22l24-3,17-4,18-6,23-11,14-9,13-10,10-9,11-11,13-17,12-20,8-18,6-18,4-18,2-15,1-20,3-12,6-10,7-7,12-6,4-1h15l11,4,8,6,7,8,4,8,2,9v19l-3,27-5,24-6,20-8,21-8,16-10,18-11,16-11,14-12,13-16,16-14,11-15,11-24,14-19,9-28,10-25,6-20,3-10,1h-42l-24-3-27-6-24-8-20-9-21-11-18-12-13-10-15-13-15-15-9-11-10-13-10-15-10-18-10-21-10-30-6-27-2-15-1-13v-33l2-30,5-37,8-37,10-34,11-29,11-25,13-26,13-22,18-27,9-12,11-14,12-14,12-13,24-24,8-7,14-12,17-13,18-13,19-12,26-15,28-14,34-14,34-11,36-9,36-6,30-3,21-1Z"
        style={{ animationDelay: "0.3s" }}
      />
      {/* Green spiral paths */}
      // Components/SpiralAnimation/SpiralAnimation.tsx (continued)
      {/* Green spiral paths */}
      <path
        ref={(el) => (greenPathsRef.current[0] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M639,316l31,1,31,4,27,6,36,12,24,11,19,10,19,12,16,12,11,9,10,9,8,7,9,9,7,8,11,13,11,15,10,15,14,25,11,24,12,36,6,26,4,28,1,13v43l-3,38-4,28-7,35-8,30-11,33-14,34-12,25-11,21-12,20-16,24-14,19-11,14-12,14-22,24-16,16-8,7-10,9-11,9-18,14-18,13-25,16-21,12-27,14-24,11-31,12-24,8-29,8-33,7-26,4-27,3-15,1-259,1h-123v-22l93-1,285-1,36-3,33-5,33-7,28-8,24-8,28-11,28-13,23-12,17-10,19-12,14-10,16-12,11-9,13-11,10-9,17-16,9-9,7-8,10-11,11-14,14-18,20-30,9-15,10-18,10-19,11-25,10-26,10-31,9-36,6-34,3-26,2-32v-28l-2-26-5-29-7-25-7-20-9-20-11-21-12-19-14-18-12-14-22-22-11-9-19-14-21-13-19-10-24-10-21-7-25-6-25-4-10-1h-47l-26,3-24,5-24,7-21,8-25,12-19,11-20,14-11,9-12,11-8,7-14,15-11,14-11,15-11,18-12,23-8,19-9,27-5,22-4,25-1,12v33l4,15,7,14,8,10,10,9,14,8,17,5,13,1,17-2,12-4,13-7,12-11,8-10,7-15,3-12,1-8,1-22,5-25,7-19,11-21,9-12,9-10,5-6,11-9,12-9,16-9,20-8,21-5,17-2h17l18,2,17,4,19,7,21,11,13,10,10,9,11,11,11,15,9,16,8,19,5,19,2,13,1,15-1,32-3,26-6,31-8,29-10,27-9,20-8,16-10,18-14,21-16,21-13,15-7,7-7,8-16,15-11,9-15,12-24,16-24,14-25,12-26,10-25,8-25,6-31,5-22,2H65v-21l1-1h123l245-1,25-2,26-4,30-7,30-10,26-11,25-13,24-15,17-13,16-13,16-15,10-10,7-8,11-13,14-19,12-19,10-18,13-27,10-27,8-28,6-32,3-30v-35l-3-17-5-16-6-14-10-16-9-11-11-11-15-11-17-9-21-7-16-3-11-1h-11l-17,2-17,4-19,8-14,8-13,10-13,13-11,15-9,17-7,21-3,17-1,20-3,19-6,16-7,13-8,10-11,11-15,10-16,7-17,4h-26l-14-3-16-6-13-8-10-8-8-8-9-13-7-14-4-12-2-11v-38l3-24,5-26,9-31,11-27,8-16,11-20,13-19,10-13,12-14,12-13,16-15,14-11,13-10,17-11,18-10,25-12,25-9,20-6,29-6,26-3,20-1Z"
        style={{ animationDelay: "0.05s" }}
      />
      <path
        ref={(el) => (greenPathsRef.current[1] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M628,345h33l28,3,29,6,26,8,24,10,20,10,21,13,16,12,11,9,10,9,19,19,11,14,10,13,12,19,10,18,9,20,9,25,7,28,4,26,1,12v42l-2,30-4,31-7,35-8,30-12,36-11,26-12,25-11,21-14,23-15,22-9,12-10,13-11,13-9,10-11,12-17,17-8,7-11,10-11,9-18,14-23,16-28,17-30,16-29,13-29,11-32,10-33,8-35,6-27,3-14,1-284,1h-97l-1-1v-20l1-1,365-1,33-2,32-4,31-6,31-8,36-12,29-12,25-12,23-13,18-11,19-13,16-12,16-13,14-12,8-8,8-7,15-16,11-12,9-11,14-18,14-20,12-19,10-18,14-27,12-28,9-24,9-30,7-30,5-29,3-27,1-14v-48l-3-26-5-23-6-20-8-21-8-17-13-22-12-17-11-13-9-10-16-16-14-11-15-11-15-9-23-12-25-10-24-7-20-4-26-3h-36l-27,3-27,6-30,10-24,11-21,12-17,12-11,9-10,9-11,10-7,8-11,13-13,18-11,19-8,16-7,16-9,27-6,28-3,27v24l4,13,7,10,8,7,10,5,7,2h18l12-4,11-8,6-8,5-11,1-5,2-30,4-22,5-17,9-21,8-14,9-13,9-11,11-12,11-9,13-10,17-10,15-7,21-7,25-5,10-1h26l22,3,23,6,24,10,17,10,11,8,11,9,16,16,13,17,9,15,10,21,8,26,3,19,1,11v22l-2,31-5,33-7,31-12,36-8,20-12,25-11,20-12,19-13,18-13,16-12,14-28,28-11,9-16,13-17,12-21,13-18,10-22,11-25,10-30,10-24,6-27,5-23,3-15,1-205,1H66l-1-1v-21l378-2,29-3,28-5,31-8,26-9,25-11,16-8,15-8,19-12,17-12,16-13,14-12,25-25,9-11,10-12,13-18,13-21,12-22,10-21,11-29,8-27,5-22,4-24,2-19,1-19v-21l-2-18-5-21-8-20-8-15-9-13-11-13-11-11-16-12-16-9-15-7-20-6-16-3-10-1h-23l-21,3-21,6-21,9-16,10-14,11-16,16-11,15-8,14-8,17-6,20-3,17-2,28-4,16-6,12-8,10-10,9-10,6-15,5-7,1h-15l-16-4-14-7-11-9-8-10-7-14-3-11-1-7v-18l2-25,4-24,6-23,9-26,10-22,10-18,12-18,12-16,12-14,22-22,11-9,13-10,17-11,16-9,16-8,19-8,25-8,27-6,21-3,14-1Z"
        style={{ animationDelay: "0.15s" }}
      />
      <path
        ref={(el) => (greenPathsRef.current[2] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M621,374h46l22,3,23,5,20,6,22,9,22,11,16,10,19,14,10,9,8,7,12,12,9,11,11,14,11,17,13,24,11,27,7,25,4,20,2,15,1,14v25l-2,33-4,32-7,35-7,26-12,36-12,28-12,25-13,23-12,19-11,16-13,17-9,11-12,14-14,15-17,17-8,7-15,13-13,10-19,14-17,11-22,13-23,12-23,11-28,11-27,9-31,8-30,6-31,4-28,2H65v-21l131-1,244-1,35-3,32-5,30-7,31-9,32-12,30-14,26-14,19-12,19-13,17-13,13-11,14-12,27-27,9-11,9-10,15-20,14-20,17-29,14-27,12-28,11-31,8-30,6-28,4-28,2-21,1-21v-18l-2-26-5-27-7-23-11-26-11-20-11-16-8-10-12-14-11-11-11-9-17-13-20-12-25-12-30-10-24-5-16-2-23-1-22,1-27,4-23,6-22,8-23,11-18,11-16,12-13,11-18,18-11,14-12,17-12,22-9,21-7,21-5,22-3,24v25l3,6,5,4,3,1h10l7-4,4-7,2-31,4-22,7-24,9-21,11-20,10-14,11-13,9-10,8-7,13-11,15-10,18-10,18-8,22-7,19-4,17-2h34l27,4,19,5,19,7,17,8,18,11,12,9,13,11,16,16,11,14,10,15,10,18,10,25,5,17,4,22,1,10v41l-3,32-5,30-7,30-12,36-10,25-11,23-10,18-13,21-12,17-10,13-9,11-12,14-30,30-11,9-12,10-18,13-21,14-23,13-19,10-28,12-35,12-36,9-29,5-30,3-49,1H66l-1-1v-20l1-1,378-2,30-3,29-5,32-8,30-10,26-11,26-13,22-13,19-13,12-9,10-8,11-9,16-15,15-15,7-8,11-13,14-19,14-21,15-26,14-29,11-29,8-26,7-30,4-25,2-20,1-18v-28l-3-22-5-21-8-21-11-21-12-17-12-14-9-9-11-9-14-10-18-10-21-9-21-6-27-4h-28l-23,3-19,5-19,7-16,8-15,9-13,10-12,11-10,10-13,17-8,13-8,15-9,25-5,23-2,18-1,17-4,13-6,8-8,7-8,4-10,2-13-1-10-4-10-8-6-9-3-9v-28l3-25,6-27,8-24,8-18,8-16,11-18,11-15,9-11,11-12,13-13,11-9,15-11,19-12,19-10,25-10,23-7,25-5,17-2Z"
        style={{ animationDelay: "0.25s" }}
      />
      <path
        ref={(el) => (greenPathsRef.current[3] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M635,288h16l31,2,27,4,27,6,36,12,25,11,23,12,19,12,17,12,11,9,14,12,17,16,7,8,10,11,10,13,12,17,13,21,13,25,8,19,7,19,8,28,6,31,3,28v53l-3,36-4,28-6,31-8,32-9,29-11,29-13,30-12,24-13,23-13,21-13,19-14,19-9,11-11,13-7,8-9,10-10,10-4,5h-2v2l-8,7-10,10-11,9-10,9-13,10-20,15-24,16-25,15-24,13-29,14-27,11-41,14-35,9-29,6-34,5-34,3-29,1-312,1h-44l-1-1,1-21,1-1,359-1,26-1,40-4,36-6,34-8,30-9,28-10,26-11,29-14,24-13,24-15,19-13,16-12,10-8,11-9,15-13,7-7,8-7,12-12,7-8,12-13,9-11,12-15,12-17,16-24,12-20,12-22,13-27,14-34,12-37,10-40,6-34,3-25,2-28v-44l-3-31-5-26-7-26-8-22-8-18-10-20-13-21-12-17-13-16-11-12-18-18-11-9-15-12-15-10-20-12-16-8-17-8-28-10-26-7-27-5-20-2-18-1h-12l-22,1-24,3-26,5-31,9-25,10-25,12-17,10-19,13-14,11-15,13-23,23-9,11-13,17-10,15-12,21-12,25-11,30-6,22-5,26-3,26v40l4,17,7,16,7,11,9,11,11,10,14,9,11,5,12,4,19,3h13l15-2,16-5,16-8,13-9,12-12,9-13,7-14,5-16,3-23,21,1v-5h1v15l-3,19-7,21-8,15-8,11-9,11-8,7-13,10-21,11-19,6-12,2-12,1h-10l-17-2-19-5-16-7-15-9-13-11-8-8-10-13-9-16-6-15-5-21-1-10v-13l2-30,3-23,6-28,6-21,7-20,10-23,10-20,14-23,13-18,9-11,12-14,25-25,11-9,15-12,24-16,21-12,25-12,24-9,19-6,25-6,24-4,18-2,19-1Z"
        style={{ animationDelay: "0.35s" }}
      />
      <path
        ref={(el) => (greenPathsRef.current[4] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M621,176h47l34,3,36,6,25,6,24,7,26,9,30,13,22,11,24,14,24,16,19,14,13,11,11,9,11,11,2,1v2l4,2,12,13,7,7,9,11,14,17,14,20,9,14,12,20,14,27,11,25,11,30,9,31,7,32,4,27,2,22,1,20v318l2,18,4,15,8,18,9,13,9,10,8,8,10,7,14,8,16,6,20,4,13,1v22h-13l-18-3-17-5-16-7-16-10-11-9-14-14-10-14-9-16-7-19-4-20-1-23v-305l-2-33-4-31-6-29-7-26-11-32-10-23-11-23-13-23-16-24-14-19-11-13-12-14-28-28-11-9-13-11-18-13-15-10-25-15-25-13-28-12-28-10-29-8-29-6-28-4-24-2h-49l-33,3-30,5-33,8-36,12-22,9-25,12-22,12-22,14-18,13-14,11-14,12-12,11-21,21-7,8-14,17-12,16-16,24-12,21-12,23-12,28-12,36-7,27-5,25-4,33-1,13v44l4,27,5,19,8,22,10,20,10,16,10,13,12,14,9,9,11,9,15,11,15,9,16,8,17,7,20,6,20,4,17,2h30l24-3,25-6,22-8,22-11,21-14,11-9,10-9,12-12,11-14,12-18,12-23,9-25,5-21,3-21,1-17,2-9,3-4,3-1h7l6,4,1,2v25l-3,23-6,25-7,20-9,20-11,19-12,17-9,11-12,13-7,7-11,9-13,10-19,12-17,9-20,8-19,6-23,5-15,2-14,1h-20l-22-2-26-5-20-6-24-10-19-10-18-12-13-10-12-11-16-16-11-14-12-18-9-16-9-20-8-24-5-22-3-24v-42l3-34,5-30,6-27,9-30,9-25,10-23,9-19,13-23,13-21,13-18,11-14,11-13,9-10,11-12,16-16,8-7,14-12,17-13,17-12,19-12,19-11,21-11,25-11,27-10,26-8,24-6,27-5,33-4,16-1Z"
        style={{ animationDelay: "0.40s" }}
      />
      <path
        ref={(el) => (greenPathsRef.current[5] = el as SVGPathElement)}
        className={`${styles.path} ${styles.greenPath}`}
        d="M630,402h26l21,2,26,5,20,6,26,11,18,10,12,8,16,12,13,12,15,15,11,14,10,14,13,23,9,21,7,21,5,23,3,27v24l-2,34-4,30-6,30-7,27-12,35-13,30-12,24-16,27-13,19-14,19-24,28-28,28-11,9-10,9-20,15-24,16-15,9-22,12-25,12-28,11-31,10-24,6-26,5-29,4-26,2H65v-20l1-1,364-1,32-2,35-5,32-7,30-9,25-9,33-15,22-12,18-11,19-13,12-9,16-13,20-18,19-19,7-8,11-13,15-20,16-24,9-15,14-27,8-17,10-26,8-24,7-27,5-26,3-22,2-24v-42l-3-23-5-21-8-23-8-16-9-16-10-14-8-10-11-12-14-13-16-12-13-8-23-12-25-9-21-5-22-3h-37l-27,4-25,7-24,10-15,8-15,10-13,10-12,11-12,12-11,14-10,15-11,20-9,23-6,21-4,22-2,29-4,6-4,2h-6l-6-4-2-5,1-25,4-26,6-22,8-22,8-17,10-17,12-17,11-13,9-10,14-13,17-13,17-11,21-11,23-9,21-6,21-4,20-2Z"
        style={{ animationDelay: "0.45s" }}
      />
    </svg>
  );
};

export default SpiralAnimation;
