// Components/Nav/Nav.tsx
import React from "react";
import styles from "./Nav.module.css";

interface NavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  navItems: {
    id: string;
    label: string;
  }[];
}

const Nav: React.FC<NavProps> = ({
  activeSection,
  onSectionChange,
  navItems,
}) => {
  const handleNavClick = (sectionId: string) => {
    if (sectionId === navItems[0].id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    onSectionChange(sectionId);
  };

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.navLink} ${
            activeSection === item.id ? styles.active : ""
          }`}
          onClick={() => handleNavClick(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
