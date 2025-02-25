import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>EXPERIMENTAL TYPOGRAPHY</h1>
          <p className={styles.subtitle}>
            A collection of bold and unconventional typography experiments
            pushing the boundaries of digital design. Each style explores unique
            aesthetics through typography, layout, and visual techniques.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/neo-brutalist"
              label="Neo-Brutalist"
              colorScheme="default"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/industrial-grunge"
              label="Industrial Grunge"
              colorScheme="yellow"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/digital-distortion"
              label="Digital Distortion"
              colorScheme="cyan"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/concrete-modernism"
              label="Concrete Modernism"
              colorScheme="default"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/punk-revival"
              label="Punk Revival"
              colorScheme="pink"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/tech-constructivism"
              label="Tech Constructivism"
              colorScheme="red"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/vapor-dimension"
              label="Vapor Dimension"
              colorScheme="cyan"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/data-maximalism"
              label="Data Maximalism"
              colorScheme="yellow"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/analog-glitch"
              label="Analog Glitch"
              colorScheme="pink"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/kinetic-typography"
              label="Kinetic Typography"
              colorScheme="green"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/liquid-brutalism"
              label="Liquid Brutalism"
              colorScheme="red"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/type-chaos"
              label="Type Chaos"
              colorScheme="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
