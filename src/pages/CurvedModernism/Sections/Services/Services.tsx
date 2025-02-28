// Sections/Services/Services.tsx
import React from "react";
import styles from "./Services.module.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Card from "../../Components/Card/Card";

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  id?: string;
  title: string;
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ id, title, services }) => {
  return (
    <section id={id} className={styles.services}>
      <SectionTitle text={title} />

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <Card
              title={service.title}
              content={service.description}
              color={index % 2 === 0 ? "blue" : "green"}
              index={index + 1}
            />
          </div>
        ))}
      </div>

      <div className={styles.patternContainer}>
        <svg
          className={styles.pattern}
          viewBox="0 0 600 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(5)].map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M0,${20 + i * 15} Q150,${i % 2 === 0 ? 50 : 0} 300,${
                20 + i * 15
              } Q450,${i % 2 === 0 ? 0 : 50} 600,${20 + i * 15}`}
              fill="none"
              stroke={
                i % 2 === 0
                  ? "var(--cm-primary-blue)"
                  : "var(--cm-primary-green)"
              }
              strokeWidth="2"
              className={styles.wavePath}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default Services;
