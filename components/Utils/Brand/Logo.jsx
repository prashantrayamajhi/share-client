import Link from "next/link";
import styles from "./../../../styles/logo.module.scss";

const Logo = () => {
  return (
    <>
      <div className={styles.brand}>
        <Link href="/">
          <img src="/logo.png" alt="Avasar Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
