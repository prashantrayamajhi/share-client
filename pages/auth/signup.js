import Layout from "./../../components/Layout";
import styles from "./../../styles/auth.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { checkJwtToken } from "./../../helper/jwt";
import axios from "./../../api/server";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import Navbar from "./../../components/Navbar/Auth";

import { ToastContainer, toast } from "react-toastify";
import First from "../../components/Signup/First";
import Second from "../../components/Signup/Second";

const Signup = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      organizationName: "",
      website: "",
      companySector: "",
      panNumber: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [err, setErr] = useState(null);
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
      name: formik.values.name,
      email: formik.values.email,
      address: formik.values.address,
      password: formik.values.password,
      confirmPassword: formik.values.confirmPassword,
      organizationName: formik.values.organizationName,
      website: formik.values.website,
      companySector: formik.values.companySector,
      panNumber: formik.values.panNumber,
    };

    try {
      const res = await axios.post("/auth/signup", data);
      if (res.status === 201) {
        window.location.href = "/verify/" + res.data.data.email;
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
      setLoading(false);
    }
  };

  const displayStep = () => {
    if (step === 1) {
      return <First formik={formik} setStep={setStep} />;
    } else {
      return <Second formik={formik} setStep={setStep} loading={loading} />;
    }
  };
  return (
    <Layout title="Signup">
      <ToastContainer />
      <Navbar page="signup" />
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit}>
          <h2>Signup</h2>
          {displayStep()}
          <div className={styles.footer}>
            <Link href="/auth/login">
              <a className={styles.bottomTxt}>Back To Signin Page</a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
