import Layout from "./../../components/Layout";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import styles from "./../../styles/verify.module.scss";
import Image from "next/image";
import VerifyImg from "./../../images/verification.png";
import BrandLogo from "./../../components/Utils/Brand/Logo";

const Verify = () => {
  const [token, setToken] = useState("");
  const router = useRouter();
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  const handleSubmit = async () => {
    const data = { token };
    setLoading(true);
    try {
      const res = await Axios.post("/auth/verify", data);
      console.log(res);
      if (res.status === 200) {
        alert(res.data.msg);
        window.location.href = "/auth/login";
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
      setLoading(false);
    }
  };

  const resend = async () => {
    try {
      const res = await Axios.post("/auth/resend", {
        email: router.query.email,
      });
      if (res.status === 200) {
        toast.success("Resent verification token");
      }
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
    }
  };
  return (
    <Layout title={`Verify | ${router.query.email}`}>
      <ToastContainer />
      <div className={styles.verifyWrapper}>
        <div className={styles.support}>
          <BrandLogo fontSize="2rem" />
          <div className={styles.supportImg}>
            <Image src={VerifyImg} alt="Verify" />
          </div>
          <p>
            We have sent a message with verification code to your email address
          </p>
        </div>
        <div className={styles.formContainer}>
          <h2>Verify your account</h2>
          <p>
            Enter the code that we sent to <span>{router.query.email}</span>
          </p>
          <input
            type="text"
            value={token}
            placeholder="Verification code"
            onChange={(e) => setToken(e.target.value)}
          />
          <button type="button" onClick={handleSubmit} disabled={loading}>
            Verify
          </button>
          <div className={styles.footer}>
            <p>
              Didn't get a code ? <span onClick={resend}>Resend token</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
