import { useState, useEffect } from "react";
import Axios from "../../../api/server";
import { useRouter } from "next/router";
import { checkJwtToken } from "../../../helper/jwt";
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import styles from "./../../../styles/profile/navbar.module.scss";
import SettingsNav from "../../../components/User/Settings/Navbar";
import Verification from "../../../components/User/Settings/Verification";

const VerificationSettings = () => {
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
      {profile && (
        <Layout title={`${profile.name} Settings | Verification`}>
          <Navbar />
          {config && (
            <>
              <div className={styles.settings}>
                <SettingsNav user={profile} />
                <div className={styles.body}>
                  <Verification user={profile} config={config} />
                </div>
              </div>
            </>
          )}
        </Layout>
      )}
    </>
  );
};

export default VerificationSettings;
