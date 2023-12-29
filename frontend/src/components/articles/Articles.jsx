import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./articles.module.css";

const Articles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/showAllArticles")
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.content}>
      {data.map((item) => (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
              <img src={item.image} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <div>
                  <a href={`/posts/`}>
                    <h3 className={styles.articleTitle}> {item.title} </h3>
                  </a>
                </div>
                <span className={styles.info}>
                  <span className={styles.author}>{item.author}</span> ·
                  <span className={styles.date}>
                    {" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </span>
              </div>
              <p className={styles.desc}>
                {item.content} <span>... </span>
                <a href={`/posts/`} className={styles.link}>
                  Read More
                </a>
              </p>
              <span className={styles.category}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
