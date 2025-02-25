import { Link } from "react-router-dom";
import styles from "./NavigationButton.module.css";

interface NavigationButtonProps {
  to: string;
  label: string;
  colorScheme?: "default" | "red" | "yellow" | "green" | "cyan" | "pink";
}

const NavigationButton = ({
  to,
  label,
  colorScheme = "default",
}: NavigationButtonProps) => {
  return (
    <Link to={to} className={`${styles.button} ${styles[colorScheme]}`}>
      <span className={styles.buttonText}>{label}</span>
    </Link>
  );
};

export default NavigationButton;
