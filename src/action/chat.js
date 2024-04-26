import { getAccessToken } from "../utils/Token";
import axios from "axios";

export const searchChat = async (search) => {
  const token = getAccessToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios.get(`http://localhost:5000/user?search=${search}`, config);
};
