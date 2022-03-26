import Link from "next/link";
import styles from "./../../../styles/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.preFooter}>
          <div className={styles.main}>
            <h1>AVASAR</h1>
            <p>A digital platform where ideas meet investors</p>
            <div className={styles.social}>
              <Link href="/">
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
              </Link>
              <Link href="/">
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </Link>
              <Link href="/">
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <p>Australia</p>
            <p>USA</p>
            <p>Canada</p>
            <p>Russia</p>
            <p>UK</p>
          </div>

          <div className={styles.item}>
            <Link href="/">
              <a>Ideas</a>
            </Link>
            <Link href="/">
              <a>Investors</a>
            </Link>
            <Link href="/">
              <a>Innovation</a>
            </Link>
            <Link href="/">
              <a>Documentations</a>
            </Link>
            <Link href="/">
              <a>Sample Documents</a>
            </Link>
          </div>

          <div className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Services</a>
            </Link>
            <Link href="/">
              <a>Blogs</a>
            </Link>
          </div>

          <div className={styles.item}>
            <p>Contact</p>
            <p>+977-9876543211</p>
            <p>aavasar@gmail.com</p>
          </div>
        </div>
        <div className={styles.signature}>
          Copyright © {new Date().getFullYear()} AVASAR. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
