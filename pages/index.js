import Layout from "./../components/Layout";
import { useEffect } from "react";
import { checkJwtToken } from "./../helper/jwt";

export default function Home() {
  useEffect(() => {
    if (!checkJwtToken()) {
      window.location.href = "/auth/login";
    }
  }, []);
  return (
    <>
      <Layout>
        <h1>Logged in</h1>
      </Layout>
    </>
  );
}
