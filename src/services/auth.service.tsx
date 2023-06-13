import axios from "axios";

type UserProps = {
  email: string;
  password: string;
};

const API_URL = "https://meserver.onrender.com/auth";

const login = ({ email, password }: UserProps) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response, "hellokitty");
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  let currentUser = user !== null ? JSON.parse(user) : {};
  return currentUser;
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
