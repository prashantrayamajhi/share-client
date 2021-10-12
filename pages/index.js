import Layout from "./../components/Layout";
import { useEffect } from "react";
import { checkJwtToken } from "./../helper/jwt";

import Navbar from "./../components/Navbar";

export default function Home() {
  useEffect(() => {
    if (!checkJwtToken()) {
      window.location.href = "/auth/login";
    }
  }, []);
  return (
    <>
      <Layout>
        <Navbar />
        <h1>Home Page</h1>
      </Layout>
    </>
  );
}
