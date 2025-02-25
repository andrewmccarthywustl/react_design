import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink}>
            <h1 className={styles.logo}>
              Experimental<span>TYPOGRAPHY</span>
            </h1>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            Experimental Typography · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
