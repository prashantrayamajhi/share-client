import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../../helper/jwt";
import styles from "./../../styles/create.module.scss";
import classnames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "./../../api/server";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);

  if (error) {
    toast.error(error, {
      theme: "colored",
    });
  }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        content,
        img,
        isPrivate,
      };
      const res = await Axios.post("/user/posts", data, config);
      if (res.status === 201) {
        toast.success("Idea posted successfully", {
          theme: "colored",
        });
        setTitle("");
        setContent("");
        setImg("");
        setIsPrivate("");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.err);
      setError(null);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Layout title="Create Post">
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>Share an Idea</h3>
            <div className={styles.input}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter the title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                placeholder="Enter the content"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label htmlFor="img">Image</label>
              <input
                type="text"
                placeholder="Enter an image link"
                id="img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className={classnames(styles.input, styles.private)}>
              <label htmlFor="private">Private</label>
              <input
                type="checkbox"
                id="private"
                value={isPrivate}
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
            </div>
            <div className={styles.btn}>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Post;
