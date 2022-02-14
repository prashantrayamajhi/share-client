import Link from "next/link";
import styles from "./../styles/navbar.module.scss";
import { logout, checkJwtToken } from "./../helper/jwt";
import { useRouter } from "next/router";
import BrandLogo from "./../components/Utils/Brand/Logo";
import classNames from "classnames";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        <BrandLogo />
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>About us</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Services</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Blogs</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Contact us</a>
            </Link>
          </div>
          {checkJwtToken() ? (
            <>
              <div className={styles.link}>
                <Link href="/posts">
                  <a>Post</a>
                </Link>
              </div>

              <div className={styles.link}>
                <p
                  onClick={() => {
                    logout();
                    router.replace("/auth/login");
                  }}
                >
                  Logout
                </p>
              </div>
            </>
          ) : (
            <div className={classNames(styles.link, styles.signup)}>
              <Link href="/auth/login">
                <a>Sign up</a>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
