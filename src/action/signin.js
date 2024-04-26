import axios from "axios";
import Cookies from "js-cookie";

export const login = async (result) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios
    .post("http://localhost:5000/user/login", result, config)
    .then((response) => {
      if (response.status == 200) {
        Cookies.set("chatToken", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return err;
    });
};
