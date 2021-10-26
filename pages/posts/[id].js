import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await Axios.get("/posts/" + router.query.id);
        console.log(res.data.data);

        setPost(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (router.query.id) {
      fetchPost();
    }
  }, [router.query.id]);
  return (
    <>
      <Navbar />
      {post && (
        <Layout title={post.title}>
          <img style={{ width: "100%" }} src={post.img} alt={post.title} />
          <h1>{post.title}</h1>
        </Layout>
      )}
    </>
  );
};

export default Post;
