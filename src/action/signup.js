import axios from "axios";

export const register = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return await axios.post("http://localhost:5000/user", data, config);
};
