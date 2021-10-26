import styles from "./../styles/card.module.scss";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Link href={"/posts/" + post._id}>
          <img src={post.img} alt={post.title} />
        </Link>
      </div>
      <div className={styles.details}>
        <Link href={"/posts/" + post._id}>
          <h2>{post.title}</h2>
        </Link>
        <p className={styles.date}>1st September 2022</p>
        <p className={styles.description}>{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
