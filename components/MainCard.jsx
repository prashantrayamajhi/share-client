import Link from "next/link";
import styles from "./../styles/feeds.module.scss";
import moment from "moment";

const MainCard = ({ post }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.profileTitle}>
          <div className={styles.name}>
            <Link href={`/ user/${post.user._id}`}>
              <img
                className={styles.profileImg}
                src={
                  post.user.image
                    ? post.user.image
                    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt={post.user.name}
              />
            </Link>
            <div className={styles.meta}>
              <p>{post.user.name}</p>
              <p className={styles.date}>{moment(post.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <Link href={"/posts/" + post._id}>
            <h2>{post.title}</h2>
          </Link>

          <Link href={"/posts/" + post._id}>
            <img src={post.images[0]} alt={post.title} />
          </Link>
          <p>{post.description}</p>
        </div>
      </div>
    </>
  );
};

export default MainCard;
