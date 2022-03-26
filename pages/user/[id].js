import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

import profileStyles from "./../../styles/profile/profile.module.scss";

import Banner from "./../../components/User/Banner";
import Posts from "./../../components/User/Posts";
import About from "./../../components/User/About";

const User = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await Axios.get("/users/" + router.query.id);
        setUser(res.data.data);
      } catch (err) {
        console.log(err);
        if (err && err.response && err.response.status === 404) {
          router.push("/404");
        }
      }
    };
    if (router.query.id) {
      fetchUser();
    }
  }, [router.query.id]);

  return (
    <>
      <Navbar />
      {user && (
        <Layout title={user.name}>
          <Banner user={user} />
          <div className={profileStyles.profileContainer}>
            <Posts user={user} id={user._id} />
            <About user={user} id={user._id} />
          </div>
        </Layout>
      )}
    </>
  );
};

export default User;
