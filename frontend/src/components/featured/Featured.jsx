import styles from "./featured.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users/showFeaturedArticles")
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="justify-content-md-center mt-5">
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          {data.map((item) => (
            <a href={`/article/${item._id}`} className={styles.link}>
              <img src={item.image} alt="" className={styles.feature} />
              <h1 className={styles.text}> {item.title} </h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
