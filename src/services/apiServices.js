import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
  //call apis
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const PutUpdateUser = (id, username, role, image) => {
  //call apis
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userid) => {
  return axios.delete("api/v1/participant", { data: { id: userid } });
};

const getUSerWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (useremail, userpassword) => {
  return axios.post(`/api/v1/login`, {
    email: useremail,
    password: userpassword,
  });
};

//Cung co the
// const postLogin1 = (email, password) => {
//   return axios.post(`/api/v1/login`, {
//     email,
//     password
//   });
// };

const postRegister = (email, password, username) => {
  return axios.post(`/api/v1/register`, {
    email,
    password,
    username,
  });
};

export {
  postCreateNewUser,
  getAllUsers,
  PutUpdateUser,
  deleteUser,
  getUSerWithPaginate,
  postLogin,
  postRegister,
};
