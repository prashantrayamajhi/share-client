import { useState, useEffect } from "react";
import Axios from "./../../../api/server";
import styles from "./../../../styles/modal.module.scss";

const Delete = ({ title, setIsDeleteOpen, route }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  }, []);

  const deleteItem = async () => {
    try {
      await Axios.delete(route, config);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <h2>{title}</h2>
          <div className={styles.btnWrapper}>
            <p
              className={styles.cancel}
              onClick={() => setIsDeleteOpen((prev) => !prev)}
            >
              Cancel
            </p>
            <p className={styles.delete} onClick={deleteItem}>
              Delete
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
