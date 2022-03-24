import { useEffect, useState } from "react";
import styles from "./../../styles/feeds.module.scss";
import Axios from "./../../api/server";
import Card from "./../MainCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get("/posts");
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.posts}>
        {posts.map((post) => {
          return <Card key={post._id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
