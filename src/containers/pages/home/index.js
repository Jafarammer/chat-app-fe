import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
// components
import HomeView from "../../../components/pages/home/index.jsx";

function Home({ setRender }) {
  // react router
  const history = useHistory();
  // useState
  const [showProfile, setShowProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  // function
  const openProfile = () => {
    setShowProfile(true);
  };
  const closeProfile = () => {
    setShowProfile(false);
  };
  const onConfirm = () => {
    setConfirmLogout(!confirmLogout);
  };
  const onLogout = () => {
    Cookies.remove("chatToken");
    setTimeout(() => {
      setRender(Date.now());
      history.push("/signin");
    }, 1000);
  };
  // send props to component
  const props = {
    showProfile,
    confirmLogout,
  };
  return (
    <HomeView
      {...props}
      openProfile={openProfile}
      closeProfile={closeProfile}
      onLogout={onLogout}
      onConfirm={onConfirm}
    />
  );
}

export default Home;
