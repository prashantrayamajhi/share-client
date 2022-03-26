import { useState, useEffect } from "react";
import Axios from "../../api/server";
import { useRouter } from "next/router";
import { checkJwtToken } from "../../helper/jwt";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

import profileStyles from "./../../styles/profile/profile.module.scss";

import Banner from "./../../components/User/Banner";
import Posts from "./../../components/User/Posts";
import About from "./../../components/User/About";

const Profile = () => {
  const router = useRouter();
  const [config, setConfig] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!checkJwtToken()) {
      router.push("/auth/login");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      };
      setConfig(config);
    }
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await Axios.get(`/user/profile`, config);
        setProfile(res.data);
      } catch (err) {
        console.log(err);
        if (
          err &&
          (err.response.status === 401 || err.response.status === 404)
        ) {
          router.push("/auth/login");
        }
      }
    };
    if (config) {
      fetchProfile();
    }
  }, [config]);

  return (
    <>
      <Layout>
        <Navbar />
        {profile && (
          <>
            <Banner user={profile} />
            <div className={profileStyles.profileContainer}>
              <Posts user={profile} id={profile._id} />
              <About user={profile} id={profile._id} />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Profile;
