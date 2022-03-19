import { useEffect, useState } from "react";
import Navbar from "./../../Navbar/Navbar";
import "./../../../css/Settings.scss";
import { useSelector, useDispatch } from "react-redux";
import MaleImage from "./../../../images/male.png";
import FemaleImage from "./../../../images/female.png";
import { getUser } from "./../../../actions/profile";

// components
import General from "./General";
import Profile from "./Profile";
import Account from "./Account";
import ProfilePicture from "./ProfilePicture";

const Settings = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const user = useSelector((state) => {
    if (
      state.profile.user &&
      state.profile.user._id === localStorage.getItem("id")
    ) {
      return state.profile.user;
    }
  });
  useEffect(() => {
    dispatch(getUser(localStorage.getItem("id")));
  }, [dispatch]);

  const displaySetting = () => {
    switch (page) {
      case 1:
        return <General user={user} />;
      case 2:
        return <Profile user={user} />;
      case 3:
        return <ProfilePicture user={user} />;
      case 4:
        return <Account user={user} />;
      default:
        return <General user={user} />;
    }
  };

  return (
    <div>
      <Navbar />
      {user && (
        <div className="settings">
          <div className="header">
            <img
              src={
                user.image
                  ? user.image
                  : user.gender === "male"
                  ? MaleImage
                  : FemaleImage
              }
              alt={user.name}
            />

            <p>{user.name}</p>
          </div>
          <div className="nav">
            <p
              className={`item ${page === 1 && "active"}`}
              onClick={() => setPage(1)}
            >
              General
            </p>
            <p
              className={`item ${page === 2 && "active"}`}
              onClick={() => setPage(2)}
            >
              Profile
            </p>
            <p
              className={`item ${page === 3 && "active"}`}
              onClick={() => setPage(3)}
            >
              Image
            </p>
            <p
              className={`item ${page === 4 && "active"}`}
              onClick={() => setPage(4)}
            >
              Account
            </p>
          </div>
          <div className="body">{displaySetting()}</div>
        </div>
      )}
    </div>
  );
};

export default Settings;
