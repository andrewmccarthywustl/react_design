// Portfolio.tsx (revised)
import React from "react";
import styles from "./Portfolio.module.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

interface PortfolioProps {
  id?: string;
  title: string;
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ id, title, projects }) => {
  return (
    <section id={id} className={styles.portfolio}>
      <SectionTitle text={title} />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectItem} ${
              index === 0 ? styles.featured : ""
            } ${index === 10 ? styles.secondary : ""}`}
          >
            <a href={project.link} className={styles.projectLink}>
              <div className={styles.imageContainer}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.projectInfo}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
