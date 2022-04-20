import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

import profileStyles from "./../../styles/profile/profile.module.scss";

import Banner from "./../../components/User/Banner";
import Posts from "./../../components/User/Posts";
import About from "./../../components/User/About";
import PitchInvestor from "../../components/PitchInvestor";

const User = () => {
  const router = useRouter();
  const formRef = useRef()
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false)
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
            <About formRef={formRef} setShowForm={setShowForm} user={user} id={user._id} />
          </div>
          {
            showForm &&
            (
              <div className={profileStyles.pitchFormContainer}>
                <h2 ref={formRef}>Please Fill The Form Below</h2>
                <div className={profileStyles.pitchFormWrapper}>
                  <PitchInvestor user={user} />
                </div>
              </div>
            )
          }
        </Layout>
      )}
    </>
  );
};

export default User;
