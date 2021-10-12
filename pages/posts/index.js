import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { checkJwtToken } from "../../helper/jwt";

const Post = () => {
  useEffect(() => {
    if (!checkJwtToken()) {
      window.location.href = "/auth/login";
    }
  }, []);

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
