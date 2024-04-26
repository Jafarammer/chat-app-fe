import React, { useState } from "react";
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
    const data = {
      name: value.name,
      email: value.email,
      password: value.password,
      pic: images.name,
    };
    setIsLoading(true);
    register(data).then((result) => {
      if (result == true) {
        messageApi.open({
          type: "success",
          content: "Register success",
          duration: 2,
        });
        history.push("/");
        setIsLoading(false);
      } else {
        messageApi.open({
          type: "error",
          content: "Register failed",
          duration: 2,
        });
        setIsLoading(false);
      }
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
