import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";

const Login = () => {
  return (
    <Layout title="Login">
      <div className={styles.wrapper}>
        <form>
          <h3>Login</h3>
          <div className={styles.input}>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className={styles.input}>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className={styles.btn}>
            <button>Login</button>
          </div>
          <div className={styles.footer}>
            <p>
              Don't have an account ?{" "}
              <Link href="/auth/signup">
                <a>Signup</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
