// Components/Header/Header.tsx
import React from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import CircleAnimationSmall from "../CircleAnimationSmall/CircleAnimationSmall";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  navItems: {
    id: string;
    label: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSectionChange,
  navItems,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <CircleAnimationSmall />
        </div>

        <Nav
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          navItems={navItems}
        />
      </div>
    </header>
  );
};

export default Header;
