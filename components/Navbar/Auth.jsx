import Link from "next/link";
import styles from "./../../styles/navbar.module.scss";

const Navbar = ({ page }) => {
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
            <Link href={`/auth/${page === "login" ? "signup" : "login"}`}>
              <p>
                {page === "login" ? "Don't " : "Already "} have an account ?{" "}
                <a>{page === "login" ? "Signup" : "Login"}</a>
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
