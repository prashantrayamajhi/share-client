import Link from "next/link";
import styles from "./../../../styles/logo.module.scss";

const Logo = ({ fontSize }) => {
  return (
    <>
      <div className={styles.brand}>
        <Link href="/">
          <h3
            className={styles.logo}
            style={{
              fontSize: fontSize ? fontSize : "",
            }}
          >
            AVA<span>SAR</span>
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Logo;
