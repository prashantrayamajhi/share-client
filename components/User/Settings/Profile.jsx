import { useState } from "react";
import styles from "./../../../styles/profile/navbar.module.scss";

const Profile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);

  const handleFormSubmit = async (e) => {
    // profile/general/:id
    e.preventDefault();
    const data = { name, address, gender };
  };

  return (
    <>
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Profile;
