import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";

const Login = () => {
  return (
    <Layout title="Login">
      <h3>Login</h3>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <form>
            <div className={styles.input}>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className={styles.input}>
              <input type="email" placeholder="Enter your password" />
            </div>
            <div className={styles.btn}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className={styles.img}></div>
      </div>
    </Layout>
  );
};

export default Login;
