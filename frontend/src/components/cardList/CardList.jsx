import styles from "./cardList.module.css";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <Card />
      </div>
    </div>
  );
};

export default CardList;

// npx prisma studio
