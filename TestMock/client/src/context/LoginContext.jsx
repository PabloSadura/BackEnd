import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");

  const URL = "http://localhost:8080/login/auth";
  const UrlLogin = `http://localhost:8080/login?username=${user}`;

  async function getLogin() {
    const { data } = await axios.get(UrlLogin);
    if (!data) {
      const userLocal = localStorage.getItem("username");
      if (userLocal) {
        setUser(userLocal);
        setLogin(true);
      }
    } else {
      setUser(data);
      setLogin(true);
    }
  }

  useEffect(() => {
    getLogin();
  }, [user]);

  const logout = () => {
    setLogin();
    localStorage.clear();
  };

  async function loginIn(obj) {
    const { data } = await axios.post(URL, obj);
    setUser(data.username);
    setLogin(true);
    return data;
  }

  return (
    <LoginContext.Provider
      value={{ login, setLogin, user, setUser, loginIn, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
};
