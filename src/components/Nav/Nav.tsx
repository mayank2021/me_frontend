import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import "./Nav.css";

const Nav = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <nav className="nav">
      <h2>ME</h2>
      <div className="link-main-container">
        {window.location.pathname === "/login" && currentUser ? (
          <div className="link-conatiner">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        ) : (
          <div className="link-conatiner">
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
