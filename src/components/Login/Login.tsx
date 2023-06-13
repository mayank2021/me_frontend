import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import "./Login.css";

const Login = () => {
  const loginContext = useContext(LoginContext);
  return (
    <div className="login-main-container">
      <form onSubmit={loginContext?.handleLogin} className="form-container">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email"
          value={loginContext?.email}
          onChange={(e) => loginContext?.setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginContext?.password}
          onChange={(e) => loginContext?.setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
