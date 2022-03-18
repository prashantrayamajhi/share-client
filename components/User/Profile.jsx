import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./../../css/Profile.scss";
import Banner from "./Banner";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../actions/profile";

import Posts from "./Posts";
import About from "./About";
import { checkJwtToken } from "../../helpers/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const { id } = useParams();

  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    if (checkJwtToken()) {
      if (id === localStorage.getItem("id")) {
        setIsOwnProfile(true);
      }
    }
  }, [id]);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {user && (
        <>
          <Banner user={user} isOwnProfile={isOwnProfile} />
          <div className={styles.profileContainer}>
            <Posts user={user} id={id} />
            <About id={id} />
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
