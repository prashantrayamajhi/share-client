import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../../helper/jwt";
import styles from "./../../styles/create.module.scss";
import classnames from "classnames";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    if (!checkJwtToken()) {
      window.location.href = "/auth/login";
    }
  }, []);

  return (
    <>
      <Navbar />
      <Layout title="Create Post">
        <div className={styles.wrapper}>
          <form className={styles.form}>
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
