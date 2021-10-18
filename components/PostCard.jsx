import styles from "./../styles/card.module.scss";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + post._id}>
        <img src={post.img} alt={post.title} />
      </Link>
      <h2>{post.title}</h2>
    </div>
  );
};

export default PostCard;
