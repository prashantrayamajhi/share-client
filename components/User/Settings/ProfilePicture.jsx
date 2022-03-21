import { useState, useEffect } from "react";
import styles from "./../../../styles/profile/navbar.module.scss";
import Axios from "./../../../api/server";
import { toast, ToastContainer } from "react-toastify";

const Image = ({ user, config }) => {
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [err, setErr] = useState(null);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  useEffect(() => {
    if (user && user.image) {
      setDisplayImage(user.image);
    }
  }, [user]);

  const handleProfilePicture = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await Axios.patch("/user/profile/image", formData, config);
      if (res.status === 200 && window) {
        window.alert("Profile Picture Updated Successfully");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
    }
    // setDisplayImage(null);
    // setImage(null);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleProfilePicture}>
        <input
          type="file"
          name="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setDisplayImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        {displayImage && (
          <img
            src={displayImage}
            alt=""
            className={styles.displayImage}
            onClick={() => {
              setImage(null);
              setDisplayImage(null);
            }}
          />
        )}
        <button type="submit" style={{ marginTop: "2rem" }}>
          Update
        </button>
      </form>
    </>
  );
};

export default Image;
