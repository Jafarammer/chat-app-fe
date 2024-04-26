import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { getAccessToken } from "../../../utils/Token.js";
import { ChatState } from "../../../context/ChatProvider.js";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
// action
// import { searchChat } from "../../../action/chat.js";
// components
import ChatView from "../../../components/pages/chat/index.jsx";

function Chat() {
  // token
  const token = getAccessToken();
  // react router
  const history = useHistory();
  // context
  const { user, setSelectedChat, selectedChat, chats, setChats } = ChatState();
  // useState
  const [messageApi, contextHolder] = message.useMessage();
  const [showProfile, setShowProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formGroup, setFormGroup] = useState(false);
  const [searchUser, setSearchUser] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  // function
  const openSearch = () => {
    setSearchUser(true);
  };
  const closeSearch = () => {
    setSearchUser(false);
  };
  const openGroup = () => {
    setFormGroup(true);
  };
  const closeGroup = () => {
    setFormGroup(false);
  };
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
    if (!search) {
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
  const onAccessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/chat",
        { userId },
        config
      );

      if (!chats.find((c) => c.id === data._id)) {
        setChats([data, ...chats]);
      }

      setSelectedChat(data);
      setLoadingChat(false);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Error to load chat!!!",
        duration: 2,
      });
    }
  };
  const fetchChat = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get("http://localhost:5000/chat", config);
      setChats(data);
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Load all chat error!!!",
        duration: 2,
      });
    }
  };
  const onLogout = () => {
    Cookies.remove("chatToken");
    history.push("/");
  };
  // useEffect
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [history, token]);
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChat();
  }, []);
  // send props to component
  const props = {
    showProfile,
    confirmLogout,
    contextHolder,
    search,
    setSearch,
    loading,
    searchResult,
    formGroup,
    searchUser,
    loadingChat,
    setSelectedChat,
    selectedChat,
    chats,
    loggedUser,
  };
  return (
    <ChatView
      {...props}
      openProfile={openProfile}
      closeProfile={closeProfile}
      onLogout={onLogout}
      onConfirm={onConfirm}
      onSearch={onSearch}
      openGroup={openGroup}
      closeGroup={closeGroup}
      openSearch={openSearch}
      closeSearch={closeSearch}
      onAccessChat={onAccessChat}
    />
  );
}

export default Chat;
