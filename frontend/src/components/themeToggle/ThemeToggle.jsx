import { createContext } from "react";
import styles from "./themeToggle.module.css";

export const ThemeContext = createContext(null);

const ThemeToggle = () => {
  return <div className={styles.theme} id="light"></div>;
};

export default ThemeToggle;
