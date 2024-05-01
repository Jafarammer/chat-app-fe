import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import { getAccessToken } from "../../../utils/Token.js";
// context
import { ChatState } from "../../../context/ChatProvider.js";
// action
import { login } from "../../../action/signin.js";
// components
import SigninView from "../../../components/pages/signin/index.jsx";

function Signin() {
  // token
  const token = getAccessToken();
  // react router dom
  const history = useHistory();
  // context
  const { setUser } = ChatState();
  // useState
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  // function
  const onLogin = (value) => {
    const data = {
      email: value.email,
      password: value.password,
    };
    setIsLoading(true);
    login(data).then((result) => {
      if (result == true) {
        setUser(localStorage.getItem("userInfo"));
        messageApi.open({
          type: "success",
          content: "Login success",
          duration: 2,
        });
        history.push("/chat");
        setIsLoading(false);
      } else {
        messageApi.open({
          type: "error",
          content: "Login failed",
          duration: 2,
        });
        setIsLoading(false);
      }
    });
  };
  // useEffect
  useEffect(() => {
    if (token) {
      history.push("/chat");
    }
  }, [history, token]);
  // send props to components
  const props = {
    isLoading,
    contextHolder,
  };
  return <SigninView {...props} onLogin={onLogin} />;
}

export default Signin;
