import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getAccessToken } from "../../../utils/Token.js";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
// action
import { searchChat } from "../../../action/chat.js";
// components
import ChatView from "../../../components/pages/chat/index.jsx";

function Chat() {
  // token
  const token = getAccessToken();
  // react router
  const history = useHistory();
  // context
  // const { user, setSelectedChat, chats, setChats } = ChatState();
  // useState
  const [messageApi, contextHolder] = message.useMessage();
  const [showProfile, setShowProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formGroup, setFormGroup] = useState(false);
  // function
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
  const onSearch = () => {
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
      const { data } = searchChat(search);
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
    history.push("/");
  };
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    // else {
    //   history.push("/chat");
    // }
  }, [history, token]);
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
    />
  );
}

export default Chat;
