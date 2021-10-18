import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../../helper/jwt";
import { useRouter } from "next/router";
import Axios from "./../../api/server";

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
        <h2>Post List</h2>
      </Layout>
    </>
  );
};

export default Post;
