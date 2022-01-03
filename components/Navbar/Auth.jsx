import Link from "next/link";
import styles from "./../../styles/navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = ({ page }) => {
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
            <p>{page === "login" ? "Don't " : "Already "} have an account ? </p>{" "}
            <Link href={`/auth/${page === "login" ? "signup" : "login"}`}>
              <a>{page === "login" ? "Signup" : "Login"}</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
