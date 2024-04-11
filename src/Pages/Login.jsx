import React from "react";
import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="login-signup">
      <div className="login-container">
        <div className="left">
          <h4>Sign up</h4>
          <p>Create an account and order best quality products from demo</p>
        </div>
        <div className="right">
          <div className="signup-fields">
            <input type="text" placeholder="Mobile Number" name="" id="" />
            <input type="email" placeholder="Email Address" name="" id="" />
            <input type="password" placeholder="Password" name="" id="" />
            <input
              type="password"
              placeholder="Confirm Password"
              name=""
              id=""
            />
          </div>
          <button>Sign Up</button>
          <p className="login">
            Already have an account?
            <span>Login</span>
          </p>
          <div className="login-agree">
            <p>
              By continuing you agree to our <br /> <span>term and conditions</span> and
              <span>privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
