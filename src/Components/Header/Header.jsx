import { useState, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <p>Next Level</p>
      </span>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navList}>
          {t("home")}
        </Link>
        <Link to="/about" className={styles.navList}>
          {t("about")}
        </Link>
        <Link to="/contact" className={styles.navList}>
          {t("contact")}
        </Link>
        <div>
          <button onClick={toggleTheme} className={styles.themeButton}>
            {theme === "light" ? (
              <i className="bi bi-moon-stars-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </button>

          <motion.button
            onClick={() => setOpen(!open)}
            /* style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
        }} */
            className={styles.langButton}
            animate={{ rotate: open ? -90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <i className="bi bi-gear"></i>
          </motion.button>
        </div>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            /* style={{
            position: "absolute",
            top: "2rem",
            right: 0,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            listStyle: "none",
            padding: "0.5rem 0",
            margin: 0,
            zIndex: 10,
          }} */
            className={styles.langBar}
          >
            <li>
              <button
                /*               style={{
                background: "none",
                border: "none",
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
              }} */
                className={styles.langList}
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
            </li>
            <li>
              <button
                /*               style={{
                background: "none",
                border: "none",
                padding: "0.5rem 1rem",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
              }} */
                className={styles.langList}
                onClick={() => changeLanguage("es")}
              >
                Español
              </button>
            </li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
