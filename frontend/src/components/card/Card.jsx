import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <a href={`/posts/`}>
              <h3> Mocha w/ Cream </h3>
            </a>
            <span className={styles.date}>Dagger · 12.02.23</span>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            eum nesciunt inventore ab in. Atque numquam ipsum nostrum neque,
            reiciendis sunt harum incidunt earum dolore voluptatem modi
            architecto commodi natus <span>... </span>
            <a href={`/posts/`} className={styles.link}>
              Read More
            </a>
          </p>
          <span className={styles.category}></span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <a href={`/posts/`}>
              <h3> Mocha w/ Cream </h3>
            </a>
            <span className={styles.date}>Dagger · 12.02.23</span>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            eum nesciunt inventore ab in. Atque numquam ipsum nostrum neque,
            reiciendis sunt harum incidunt earum dolore voluptatem modi
            architecto commodi natus <span>... </span>
            <a href={`/posts/`} className={styles.link}>
              Read More
            </a>
          </p>
          <span className={styles.category}></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
