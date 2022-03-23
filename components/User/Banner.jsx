import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import Follow from "./Functionality/Follow";
import styles from "./../../styles/profile/banner.module.scss";

const Banner = ({ user }) => {
  return (
    user && (
      <div className={styles.banner}>
        <div className={styles.cover}>
          <img
            src={
              "https://socialmediaappclient.vercel.app/static/media/cover.85b991b5.jpg"
            }
            alt="cover"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.profile}>
            <img
              src={
                user.image
                  ? user.image
                  : "https://res.cloudinary.com/prashantrayamajhi/image/upload/v1631416201/pzhnincxyctp8ms6beao.jpg"
              }
              alt={user.name}
            />
            <p className={styles.action}>{user.name}</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.list}>
              <p className={styles.item}>
                {user.userType === "investor" ? user.userType : "Business"}
              </p>
            </div>
            {window.localStorage.getItem("id") === user._id && (
              <div className={styles.actions}>
                <Link href="/profile/settings">
                  <div className={styles.icon}>
                    <span>Edit Profile</span>
                    {/* <FontAwesomeIcon icon={faCog} /> */}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
