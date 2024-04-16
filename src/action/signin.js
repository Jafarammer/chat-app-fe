import axios from "axios";

export const login = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return await axios.post("http://localhost:5000/user/login", data, config);
};
