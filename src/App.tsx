import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Loader from "./components/Loader/Loader";
import { LoginContext } from "./context/loginContext";

function App() {
  const loginContext = useContext(LoginContext);
  return (
    <div>
      <Nav />
      {loginContext?.loading ? <Loader /> : null}

      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
