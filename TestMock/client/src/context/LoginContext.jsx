import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  const URL = "http://localhost:8080/login";

  async function loginIn(obj) {
    const userLogin = await axios.post(URL, obj);
    setUser(userLogin.name);
    setLogin(true);
    setUser(obj);
  }

  //  useEffect(() => {}, []);

  return (
    <LoginContext.Provider value={{ login, setLogin, loginIn, user }}>
      {children}
    </LoginContext.Provider>
  );
};
