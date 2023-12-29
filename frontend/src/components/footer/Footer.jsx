import { Navbar } from "react-bootstrap";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Navbar variant="dark" expand="lg" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>Verdant</h1>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            debitis perspiciatis mollitia deserunt odio animi vitae facilis
            eveniet, sunt eligendi hic cum culpa obcaecati recusandae ullam
            repellat placeat, tempora ipsa.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <a href="/">Homepage</a>
            <a href="/">Blog</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <a href="/">Style</a>
            <a href="/">Fashion</a>
            <a href="/">Coding</a>
            <a href="/">Travel</a>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">YouTube</a>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Footer;
