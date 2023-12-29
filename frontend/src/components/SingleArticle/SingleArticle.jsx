import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./singleArticle.module.css";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const showArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/article/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error.message);
      }
    };

    showArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{article.title}</h1>
        <p>by {article.author}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={article.image} alt="" fill="true" className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{article.content}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
