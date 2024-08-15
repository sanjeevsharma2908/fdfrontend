import React, { useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("sign-up");
  return (
    <div className="login-pop-up">
      <form action="" className="login-pop-up-container">
        <div className="login-pop-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-pop-up-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>
          {currentState === "sign-up" ? "Create-Account" : "Login"}
        </button>
        <div className="login-pop-up-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?    <span onClick = {()=>setCurrentState("Sign up")}> Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick = {()=>setCurrentState("Login")}> Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
