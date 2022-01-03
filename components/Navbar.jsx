import Link from "next/link";
import styles from "./../styles/navbar.module.scss";
import { logout, checkJwtToken } from "./../helper/jwt";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <Link href="/">
            <h3 className={styles.logo}>
              AVA<span>SAR</span>
            </h3>
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">
              <a>Home</a>
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
            <div className={styles.link}>
              <Link href="/auth/login">
                <a>Login</a>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
