import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Anime FunStore
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src="./hombre.png" alt="" className="avatar" />
          </li>
          <li className="listItem">Pablo</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
