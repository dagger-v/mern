import { useEffect, useState } from "react";
import styles from "./stories.module.css";
import axios from "axios";

const Stories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/showStoriesArticles")
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.feature}>
          <div className={styles.wrapper}>
            <a href={`/article/${item._id}`} className={styles.link}>
              <img src={item.image} alt="" className={styles.image} />
              <p className={styles.text}> {item.title} </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
