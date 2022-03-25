import Card from "./../MainCard";
import { useEffect, useState } from "react";
import styles from "./../../styles/profile/profile.module.scss";
import Axios from "./../../api/server";

const Posts = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get("/posts/user/" + id);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, [id]);

  return (
    <div className={styles.left}>
      {posts.length > 0 ? (
        posts.map((post, index) => {
          return <Card key={index} post={post} />;
        })
      ) : (
        <div className={styles.noPosts}>
          <h3>No Posts Yet</h3>
        </div>
      )}
    </div>
  );
};

export default Posts;
