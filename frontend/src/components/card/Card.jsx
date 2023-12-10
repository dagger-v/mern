import styles from "./card.module.css";
import { useShowArticlesMutation } from "../../slices/usersApiSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [showArticles, { isLoading }] = useShowArticlesMutation();
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
    <>
      {data.map((item) => (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
              <img src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <a href={`/posts/`}>
                  <h3> {item.title} </h3>
                </a>
                <span className={styles.date}>
                  {item.author} · {item.createdAt}
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
    </>
  );
};

export default Card;
