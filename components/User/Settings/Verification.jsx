import { useState } from "react";
import styles from "./../../../styles/profile/navbar.module.scss";
import Axios from "./../../../api/server";
import { toast, ToastContainer } from "react-toastify";

const Verification = ({ user, config }) => {
  const [organization, setOrganization] = useState(user.organizationName);
  const [pan, setPan] = useState(user.pan);
  const [err, setErr] = useState(null);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { organization, pan };
    try {
      const res = await Axios.patch("/user/profile/verification", data, config);
      if (res.status === 200) {
        toast.success("Verification Details Updated Successfully", {
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
          <label htmlFor="name">Organization Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter you organization's name"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="pan">Personal Address Number</label>
          <input
            type="text"
            id="pan"
            placeholder="Enter you organization's PAN number"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Verification;
