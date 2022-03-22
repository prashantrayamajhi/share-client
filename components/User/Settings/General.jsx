import { useState } from "react";
import styles from "./../../../styles/profile/navbar.module.scss";
import Axios from "./../../../api/server";
import { toast, ToastContainer } from "react-toastify";

const General = ({ user, config }) => {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [map, setMap] = useState(user.map);
  const [err, setErr] = useState(null);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  const handleFormSubmit = async (e) => {
    // profile/general/:id
    e.preventDefault();
    const data = { name, address, map };
    try {
      const res = await Axios.patch("/user/profile/general", data, config);
      if (res.status === 200) {
        toast.success("Profile Updated Successfullt", {
          theme: "colored",
        });
      }
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="address">Map</label>
          <input
            type="text"
            id="address"
            placeholder="Embed google maps location"
            value={map}
            onChange={(e) => setMap(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default General;
