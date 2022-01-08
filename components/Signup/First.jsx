import styles from "./../../styles/auth.module.scss";

const First = ({ formik, setStep }) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Create a password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.btn}>
          <button
            onClick={() => {
              setStep(2);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default First;
