const userCheck = localStorage.getItem("user");
let user = userCheck !== null ? JSON.parse(userCheck) : {};

export default function authHeader() {
  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
}
