import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import Follow from "./Functionality/Follow";
import styles from "./../../styles/profile/banner.module.scss";

const Banner = ({ user, isOwnProfile }) => {
  return (
    user && (
      <div className={styles.banner}>
        <div className={styles.cover}>
          <img
            src="https://socialmediaappclient.vercel.app/static/media/cover.85b991b5.jpg"
            alt="cover"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.profile}>
            <img
              src="https://res.cloudinary.com/prashantrayamajhi/image/upload/v1631416201/pzhnincxyctp8ms6beao.jpg"
              alt={user.name}
            />
            <p className={styles.action}>{user.name}</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.list}>
              <Link href={`/profile/${user._id}`}>
                <a className={styles.item}>
                  <span>{user.posts.length}</span> Posts
                </a>
              </Link>
              <Link href={`/followers/${user._id}`}>
                {/* <span>{user.followers.length}</span> Followers */}
                <a className={styles.item}>
                  <span>10</span> Followers
                </a>
              </Link>
              <Link href={`/following/${user._id}`}>
                <a className={styles.item}>
                  <span>10</span> Followers
                </a>
              </Link>
            </div>
            <div className={styles.actions}>
              <Link href="/settings">
                <a className={styles.icon}>
                  <span>Edit Profile</span>
                  <FontAwesomeIcon icon={faCog} />
                </a>
              </Link>
              {/* {isOwnProfile ? (
                <Link href="/settings" className={styles.icon}>
                  <span>Edit Profile</span>
                  <FontAwesomeIcon icon={faCog} />
                </Link>
              ) : (
                <Follow user={user} />
              )} */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
