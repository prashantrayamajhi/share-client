import { useState } from "react";
import Link from "next/link";
import styles from "./../styles/navbar.module.scss";
import { logout, checkJwtToken } from "./../helper/jwt";
import { useRouter } from "next/router";
import BrandLogo from "./../components/Utils/Brand/Logo";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <nav className={styles.navbar}>
        <BrandLogo />
        <div className={classNames(styles.links, isOpen ? styles.open : "")}>
          <div
            className={classNames(
              styles.mobileHeader,
              isOpen ? styles.open : ""
            )}
          >
            <BrandLogo />
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTimes}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className={styles.link}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          <div className={styles.link}>
            <Link href="/feeds">
              <a>Feeds</a>
            </Link>
          </div>

          {checkJwtToken() ? (
            <>
              <div className={styles.link}>
                <Link href="/profile">
                  <a>Profile</a>
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
              <Link href="/auth/signup">
                <a>Sign up</a>
              </Link>
            </div>
          )}
        </div>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faBars}
          onClick={() => setIsOpen(true)}
        />
      </nav>
    </>
  );
};

export default Navbar;
