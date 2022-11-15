import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function formLogin() {
  const navigate = useNavigate();
  const { user, setUser, loginIn } = useContext(LoginContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const dataUser = await loginIn({ username, password });
      setUser(dataUser.username);
      localStorage.setItem("username", dataUser.username);
      setUserName("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <form onSubmit={handleLogin} className="border p-3 rounded shadow">
        <div className="mb-2 border">
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Nombre de usuario"
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>
        <div className="mb-2 border">
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Contraseña"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className="btn btn-primary ">Login</button>
      </form>
    </div>
  );
}

export default formLogin;
