import axios from "axios";

// export const register = async (data) => {
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   return await axios.post("http://localhost:5000/user", data, config);
// };

export const register = async (result) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios
    .post("http://localhost:5000/user", result, config)
    .then((response) => {
      if (response.status == 201) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return err;
    });
};
