import Link from "next/link";
import styles from "./../../styles/navbar.module.scss";
import BrandLogo from "./../Utils/Brand/Logo";

const Navbar = ({ page }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <BrandLogo />
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
