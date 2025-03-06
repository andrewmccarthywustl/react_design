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
              colorScheme="red"
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
              colorScheme="green"
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
              colorScheme="blue"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/vapor-dimension"
              label="Vapor Dimension"
              colorScheme="purple"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/data-maximalism"
              label="Data Maximalism"
              colorScheme="orange"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/analog-glitch"
              label="Analog Glitch"
              colorScheme="magenta"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/kinetic-typography"
              label="Kinetic Typography"
              colorScheme="lime"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/liquid-brutalism"
              label="Liquid Brutalism"
              colorScheme="teal"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/type-chaos"
              label="Type Chaos"
              colorScheme="indigo"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/minimalist-design"
              label="Minimalist Design"
              colorScheme="amber"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/retro-brutalist"
              label="Retro Brutalist"
              colorScheme="coral"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/liquid-motion"
              label="Liquid Motion"
              colorScheme="turquoise"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/curved-lines"
              label="Curved Lines"
              colorScheme="lavender"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/skeletal-performance"
              label="Skeletal Performance"
              colorScheme="rose"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/geometric-structure"
              label="Geometric Structure"
              colorScheme="gold"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/hokusai-wave"
              label="Hokusai Wave"
              colorScheme="emerald"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/animated-shapes"
              label="Animated Shapes"
              colorScheme="cyan"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/deep-blue"
              label="Deep Blue"
              colorScheme="blue"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/mononoke"
              label="Princess Mononoke"
              colorScheme="red"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/design-system"
              label="Design System"
              colorScheme="green"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/curved-modernism"
              label="Curved Modernism"
              colorScheme="blue"
            />
          </div>
          <div className={styles.gridItem}>
            <NavigationButton
              to="/syth2"
              label="SYTH teal "
              colorScheme="blue"
            />
          </div>
          <div>
            <NavigationButton
              to="/mid-century-constructivism"
              label="mid-century constructivism"
              colorScheme="pink"
            />
          </div>

          <NavigationButton to="/syth" label="Syth Band" colorScheme="red" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
