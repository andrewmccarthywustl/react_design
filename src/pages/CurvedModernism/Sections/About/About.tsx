// About.tsx
import React from "react";
import styles from "./About.module.css";
import Title from "../../Components/Title/Title";
import FlowLine from "../../Components/FlowLine/FlowLine";

interface Value {
  title: string;
  description: string;
}

interface AboutProps {
  title: string;
  description: string;
  values: Value[];
}

const About: React.FC<AboutProps> = ({ title, description, values }) => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.grid}>
        <div className={styles.contentColumn}>
          <Title text={title} align="left" color="dark" />
          <p className={styles.description}>{description}</p>

          <div className={styles.valuesContainer}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.graphicColumn}>
          <div className={styles.graphicContainer}>
            <FlowLine type="wave" color="blue" />
            <div className={styles.overlayGraphic}>
              <FlowLine type="circular" color="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
