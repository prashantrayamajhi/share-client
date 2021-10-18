import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../helper/jwt";
import { useRouter } from "next/router";
import Axios from "./../api/server";
import PostCard from "../components/PostCard";
import styles from "./../styles/posts.module.scss";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get("/posts");
      setPosts(res.data.data);
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
