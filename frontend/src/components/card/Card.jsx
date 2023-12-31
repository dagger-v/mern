import styles from "./card.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/showCardArticles")
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.content}>
      {data.map((item) => (
        <section className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
              <img src={item.image} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <a href={`/article/${item._id}`}>
                  <h3> {item.title} </h3>
                </a>
                <span className={styles.date}>
                  <span className={styles.author}>{item.author}</span> ·{" "}
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className={styles.desc}>
                {item.content.slice(0, 300)} <span>... </span>
                <a href={`/article/${item._id}`} className={styles.link}>
                  Read More
                </a>
              </p>
              <span className={styles.category}></span>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Card;
