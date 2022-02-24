import styles from "./../../../styles/home/card.module.scss";
import Link from "next/link";

const Card = ({ img, title, description, btn, link }) => {
  return (
    <>
      <Link href={link}>
        <div className={styles.card}>
          <img src={img} alt={title} />
          <div className={styles.content}> 
            <h3>{title}</h3>
            <p>{description}</p>
            {btn && <button>{btn}</button>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
