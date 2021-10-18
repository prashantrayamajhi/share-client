import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../../helper/jwt";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import PostCard from "../../components/PostCard";
import styles from "./../../styles/posts.module.scss";
import Link from "next/link";

const Post = () => {
  const [config, setConfig] = useState(null);
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!checkJwtToken()) {
      router.push("/auth/login");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      };
      setConfig(config);
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await Axios.get("/user/posts", config);
      setPosts(res.data.data);
    };
    if (config) {
      fetchPosts();
    }
  }, [config]);

  return (
    <>
      <Navbar />
      <Layout title="Posts">
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>My Posts</h2>
            <Link href="/posts/create">Create Post</Link>
          </div>
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
