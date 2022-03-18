import styles from "./../styles/card.module.scss";
import Link from "next/link";
import Axios from "./../api/server";
import { useState, useEffect } from "react";

const PostCard = ({ post, isAuth = false }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        // bearer token
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    setConfig(config);
  }, []);

  const deletePost = async (id) => {
    try {
      await Axios.delete(`/posts/${id}`, config);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Link href={"/posts/" + post._id}>
          <img src={post.images[0]} alt={post.title} />
        </Link>
      </div>
      <div className={styles.details}>
        <Link href={"/posts/" + post._id}>
          <>
            <h2>{post.title}</h2>
            {isAuth && (
              <p
                onClick={() => {
                  deletePost(post._id);
                }}
              >
                Delete
              </p>
            )}
          </>
        </Link>
        <div className={styles.meta}>
          <p className={styles.name}>Prashant Rayamajhi</p>
          <p className={styles.date}>1st September 2022</p>
        </div>
        <p className={styles.description}>{post.description}</p>
        <Link href={"/posts/" + post._id}>
          <a className={styles.btn}>View Details</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
