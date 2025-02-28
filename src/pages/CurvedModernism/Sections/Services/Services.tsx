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
    </section>
  );
};

export default Services;
