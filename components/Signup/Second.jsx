import styles from "./../../styles/auth.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Second = ({ formik, setStep, loading }) => {
  return (
    <>
      <div
        className={styles.inputWrapper}
        style={{ marginBottom: "-2.5rem", marginTop: "2rem", width: "90%" }}
      >
        <div className={styles.headingWrapper}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.icon}
            onClick={() => {
              setStep(1);
            }}
          />
          <p>
            You can skip these fields if you don't wish to verify your account,
            you can submit these details after signing up
          </p>
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Organization Name"
            name="organizationName"
            value={formik.values.organizationName}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Website Link"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Company Sector"
            name="companySector"
            value={formik.values.companySector}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="PAN/VAT number"
            name="panNumber"
            value={formik.values.panNumber}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.agreement}>
          <input type="checkbox" required />
          <p>
            I/We (The organization) have read and agree to terms and conditions
          </p>
        </div>
        <div className={styles.btn}>
          <button type="submit" disabled={loading}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Second;
