import styles from "./../../../styles/home/service.module.scss";
import { useRouter } from "next/router";

const Card = ({ image, title, link }) => {
  const router = useRouter();
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (link) {
          router.push(link);
        }
      }}
    >
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
