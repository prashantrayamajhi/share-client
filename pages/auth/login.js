import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { checkJwtToken } from "./../../helper/jwt";
import Axios from "./../../api/server";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./../../components/Navbar/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (checkJwtToken()) {
      router.replace("/");
    }
  });

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
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("id", res.data.data.id);
      window.location.href = "/";
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
      <Navbar page="login" />
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit}>
          <h2>Sign in</h2>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.btn}>
              <button type="submit" disabled={loading}>
                Sign in to Avasar
              </button>
            </div>
          </div>

          <div className={styles.footer}>
            <Link href="/auth/signup">
              <a className={styles.centerTxt}>Forgot your password ?</a>
            </Link>

            {/* <Link href="/">
              <a className={styles.bottomTxt}>Back to Home Page</a>
            </Link> */}

            <div className={styles.bottomTxt}>
              <Link href="/">
                <a className={styles.link}>
                  <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
                  <span>Back To Home Page</span>
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
