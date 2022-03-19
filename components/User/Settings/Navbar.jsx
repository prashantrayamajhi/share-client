import styles from "./../../../styles/profile/navbar.module.scss";
import Link from "next/link";

const Navbar = ({ user }) => {
  return (
    <>
      {/* <div className={styles.settings}> */}
      <div className={styles.header}>
        <img
          src={
            "https://res.cloudinary.com/prashantrayamajhi/image/upload/v1631416201/pzhnincxyctp8ms6beao.jpg"
          }
          alt={user.name}
        />

        <p>{user.name}</p>
      </div>
      <div className={styles.nav}>
        <Link href="/profile/settings/">
          <a className={styles.item}>General</a>
        </Link>
        <Link href="/profile/settings/profile">
          <a className={styles.item}>Profile</a>
        </Link>
        <Link href="/profile/settings/image">
          <a className={styles.item}>Image</a>
        </Link>
        <Link href="/profile/settings/account">
          <a className={styles.item}>Account</a>
        </Link>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
