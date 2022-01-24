import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Axios from "./../api/server";
import PostCard from "../components/PostCard";
import styles from "./../styles/posts.module.scss";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await Axios.get("/posts");

        setPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Layout title="Posts">
        <div className={styles.wrapper}>
          <h2>Feed</h2>
          <div className={styles.postsContainer}>
            {posts &&
              posts.map((post, index) => {
                return <PostCard post={post} key={index} />;
              })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Post;
