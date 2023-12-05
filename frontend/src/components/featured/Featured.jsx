import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className="justify-content-md-center mt-5">
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src="/games23.png" alt="" fill className={styles.first} />
          <img src="/manga23.png" alt="" fill className={styles.second} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
