import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./../../../styles/profile/navbar.module.scss";
import Axios from "./../../../api/server";

const Profile = ({ user, config }) => {
  const [facebook, setFacebook] = useState(user.facebook);
  const [instagram, setInstagram] = useState(user.instagram);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [website, setWebsite] = useState(user.website);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { facebook, instagram, linkedin, website };
    try {
      const res = await Axios.patch("/user/profile", config, data);
      if (res.status === 200) {
        toast.success("Profile Updated Successfullt", {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            placeholder="Facebook Link"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            placeholder="Instagram Link"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            id="linkedin"
            placeholder="Linkedin Link"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            placeholder="Website Link"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Profile;
