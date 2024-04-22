import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import axios from "axios";
import { ChatState } from "../../../context/ChatProvider.js";
import { getAccessToken } from "../../../utils/Token.js";
// components
import HomeView from "../../../components/pages/home/index.jsx";

function Home({ setRender }) {
  // token
  const token = getAccessToken();
  // react router
  const history = useHistory();
  // useState
  const [messageApi, contextHolder] = message.useMessage();
  const [showProfile, setShowProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
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
  const onSearch = async () => {
    if (search == "") {
      messageApi.open({
        type: "error",
        content: "Please enter something in search!",
        duration: 2,
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/user?search=${search}`,
        config
      );
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Failed to load the search results!",
        duration: 2,
      });
    }
  };
  const onLogout = () => {
    Cookies.remove("chatToken");
    setRender(Date.now());
    history.push("/signin");
  };
  // send props to component
  const props = {
    showProfile,
    confirmLogout,
    contextHolder,
    search,
    setSearch,
    loading,
    searchResult,
  };
  return (
    <HomeView
      {...props}
      openProfile={openProfile}
      closeProfile={closeProfile}
      onLogout={onLogout}
      onConfirm={onConfirm}
      onSearch={onSearch}
    />
  );
}

export default Home;
