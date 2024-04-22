import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import message from "antd/lib/message";
// action
import { login } from "../../../action/signin.js";
// components
import SigninView from "../../../components/pages/signin/index.jsx";

function Signin({ setRender }) {
  // react router dom
  const history = useHistory();
  // useState
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  // function
  const onLogin = (value) => {
    const result = {
      email: value.email,
      password: value.password,
    };
    setIsLoading(true);
    login(result)
      .then((res) => {
        if (res.status == 200) {
          Cookies.set("chatToken", res.data.token);
          messageApi.open({
            type: "success",
            content: "Login successfully",
            duration: 3,
          });
          setRender(Date.now());
          history.push("/");
        }
      })
      .catch((err) => {
        if (err) {
          messageApi.open({
            type: "error",
            content: "Login failed",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // useEffect
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //   if (user) history.push("/");
  // }, [history]);
  // send props to components
  const props = {
    isLoading,
    contextHolder,
  };
  return <SigninView {...props} onLogin={onLogin} />;
}

export default Signin;
