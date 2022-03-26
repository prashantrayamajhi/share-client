import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./../../styles/profile/profile.module.scss";

const About = ({ user }) => {
  return (
    user && (
      <>
        <div className={styles.about}>
          <h4>About Me</h4>
          <div className={styles.info}>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              {user.address}
            </p>
          </div>
          <div className={classNames(styles.info, styles.social)}>
            {user.linkedin && (
              <a href={user.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className={styles.icon}
                />
              </a>
            )}

            {user.instagram && (
              <a href={user.instagram} target="_blank" rel="noreferrer">
                <img src="/instagram.png" alt="" className={styles.icon} />
              </a>
            )}
            {user.facebook && (
              <a href={user.facebook} target="_blank" rel="noreferrer">
                <img src="/facebook.png" alt="" className={styles.icon} />
              </a>
            )}
            {user.website && (
              <a href={user.website} target="_blank" rel="noreferrer">
                <img src="/link.png" alt="" className={styles.icon} />
              </a>
            )}
          </div>
          {user.userType === "investor" && (
            <div className={styles.pitch}>
              <button
                onClick={() => {
                  window.location.href = `mailto:${user.email}`;
                }}
              >
                Pitch Investor
              </button>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default About;
