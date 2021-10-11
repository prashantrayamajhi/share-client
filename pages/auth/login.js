import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";
import { useState } from "react";
import Axios from "./../../api/server";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      password,
    };
    try {
      const res = await Axios.post("/auth/login", data);
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (err.response.data.err === "Please verify your account through mail") {
        window.location.href = "/verify/" + email;
      } else {
        setErr(err.response.data.err);
        setErr(null);
      }
      setLoading(false);
    }
  };
  return (
    <Layout title="Login">
      <ToastContainer />
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit}>
          <h3>Login</h3>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.btn}>
            <button type="submit" disabled={loading}>
              Login
            </button>
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
