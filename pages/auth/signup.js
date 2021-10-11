import { useState } from "react";
import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";
import axios from "./../../api/server";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      address,
      password,
      confirmPassword,
    };

    try {
      const res = await axios.post("/auth/signup", data);
      console.log(res);
    } catch (err) {
      console.log(err.response.data.err);
      setErr(err.response.data.err);
      setErr(null);
    }
  };
  return (
    <Layout title="Signup">
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit}>
          <h3>Signup</h3>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.btn}>
            <button type="submit">Signup</button>
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
