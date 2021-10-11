import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout title="Signup">
      <div className={styles.wrapper}>
        <form>
          <h3>Signup</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className={styles.input}>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your address" />
          </div>
          <div className={styles.input}>
            <input type="password" placeholder="Create a password" />
          </div>
          <div className={styles.input}>
            <input type="password" placeholder="Confirm password" />
          </div>
          <div className={styles.btn}>
            <button>Signup</button>
          </div>
          <div className={styles.footer}>
            <p>
              Already have an account ?{" "}
              <Link href="/auth/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
