import Layout from "./../../components/Layout";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

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
  return (
    <Layout title={`Verify | ${router.query.email}`}>
      <ToastContainer />
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
      <div>
        <p>
          Didn't get a code ? <span>Resend token</span>
        </p>
      </div>
      <div>
        <p>
          <Link href="/auth/login">
            <a>Login</a>
          </Link>{" "}
          or{" "}
          <Link href="/auth/signup">
            <a>Signup</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Verify;
