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
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";

const Post = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState([]);
  const [displayImg, setDisplayImg] = useState([]);
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

  const image = [];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((img) => {
      img = URL.createObjectURL(img);
      image.push(img);
    });
    setImg(files);
    setDisplayImg(image);
  };

  const handleRemoveImage = (newImg) => {
    setDisplayImg(displayImg.filter((image) => image !== newImg));
    newImg = [newImg];
    let updatedImg = newImg.filter(
      (image) => img.indexOf(image) !== displayImg.indexOf(img)
    );
    if (updatedImg || updatedImg.length <= 0) {
      updatedImg = [];
    }
    setImg(updatedImg);
  };

  const mappedDisplayImage = displayImg?.map((img, index) => {
    return (
      <img
        key={index}
        src={img}
        alt=""
        onClick={() => {
          handleRemoveImage(img);
        }}
      />
    );
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        content,
        description,
        img,
        isPrivate,
      };
      const res = await Axios.post("/posts", data, config);
      if (res.status === 201) {
        toast.success("Idea posted successfully", {
          theme: "colored",
        });
        setTitle("");
        setContent("");
        setDescription("");
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
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Enter a short description"
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label htmlFor="content">Content</label>
              <ReactQuill
                style={{
                  height: "20rem",
                  marginBottom: "3rem",
                }}
                theme="snow"
                value={content}
                onChange={(e) => setContent(e)}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="private">Private</label>
              <input
                type="file"
                name="img"
                multiple
                onChange={(e) => {
                  handleFileChange(e);
                }}
              />

              {displayImg.length > 0 && (
                <div className={styles.displayImg}>{mappedDisplayImage}</div>
              )}
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
