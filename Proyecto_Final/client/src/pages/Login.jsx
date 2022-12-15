import React from "react";
import Google from "../img/google.png";
import Twitter from "../img/twitter.png";
import Github from "../img/github.png";
import Facebook from "../img/facebook.png";
const Login = () => {
  return (
    <>
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="login">
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google">
              <img src={Google} alt="" className="icon" />
            </div>
            <div className="loginButton twitter">
              <img src={Twitter} alt="" className="icon" />
            </div>
            <div className="loginButton github">
              <img src={Github} alt="" className="icon" />
            </div>
            <div className="loginButton facebook">
              <img src={Facebook} alt="" className="icon" />
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
