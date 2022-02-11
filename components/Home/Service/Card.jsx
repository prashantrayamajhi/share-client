import styles from "./../../../styles/home/service.module.scss";

const Card = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
