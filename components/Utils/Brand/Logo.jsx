import Link from "next/link";
import styles from "./../../../styles/logo.module.scss";

const Logo = () => {
  return (
    <>
      <div className={styles.brand}>
        <Link href="/">
          <h3 className={styles.logo}>
            AVA<span>SAR</span>
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Logo;
