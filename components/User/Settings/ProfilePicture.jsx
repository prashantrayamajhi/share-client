import { useState } from "react";
import styles from "./../../../styles/profile/navbar.module.scss";

const Image = ({ user }) => {
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  const handleProfilePicture = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    setDisplayImage(null);
    setImage(null);
  };

  return (
    <>
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
