import React, { useState, useEffect } from "react";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom";
// action
import { register } from "../../../action/signup.js";
// components
import SignUpView from "../../../components/pages/signup/index.jsx";

function SignUp() {
  // react router dom
  const history = useHistory();
  // useState
  const [messageApi, contextHolder] = message.useMessage();
  const [images, setImages] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // function
  const onRegistered = (value) => {
    const result = {
      name: value.name,
      email: value.email,
      password: value.password,
      pic: images.name,
    };
    setIsLoading(true);
    register(result)
      .then((res) => {
        if (res.status == 201) {
          messageApi.open({
            type: "success",
            content: "Register successfully",
            duration: 3,
          });
          setTimeout(() => {
            history.push("/");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err) {
          messageApi.open({
            type: "error",
            content: "Register failed",
            duration: 3,
          });
        }
      })
      .finally(() => {
        setImages("");
        setIsLoading(false);
      });
  };
  // send props to component
  const props = {
    contextHolder,
    setImages,
    isLoading,
  };
  return <SignUpView {...props} onRegistered={onRegistered} />;
}

export default SignUp;
