import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

// images
import Linkedin from "/images/linkedin.png";
import Link from "/images/link.png";
import Instagram from "/images/instagram.png";
import Facebook from "/images/facebook.png";
import Youtube from "/images/youtube.png";

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
            <a href={user.linkedin} target="_blank" rel="noreferrer">
              <p>PNG</p>
              <img src="/facebook.png" alt="linkedin" className={styles.icon} />
            </a>
            {user.linkedin && (
              <a href={user.linkedin} target="_blank" rel="noreferrer">
                <p>PNG</p>
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className={styles.icon}
                />
              </a>
            )}
            {user.website && (
              <a href={user.website} target="_blank" rel="noreferrer">
                <img src={Link} alt="" className={styles.icon} />
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
            {user.youtube && (
              <a href={user.youtube} target="_blank" rel="noreferrer">
                <img src={Youtube} alt="" className={styles.icon} />
              </a>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default About;
