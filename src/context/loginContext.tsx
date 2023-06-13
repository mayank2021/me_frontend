import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

type contextProps = {
  children: React.ReactNode;
};

type loginContextType = {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => {};
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<loginContextType | null>(null);

export const LoginContextProvider = ({ children }: contextProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.login({ email, password }).then(
        () => {
          navigate("/home");
          window.location.reload();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert("Invalid Credentials");
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        handleLogin,
        email,
        setEmail,
        password,
        setPassword,
        loading,
        setLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
