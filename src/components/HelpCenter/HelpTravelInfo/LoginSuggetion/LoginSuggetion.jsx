import React from "react";
import "./LoginSuggetion.css";
const LoginSuggetion = () => {
  return (
    <div>
      <div className="help-login-sug">
        <div className="help-login-sug-boxs">
          <div className="help-login-sug-div help-login-sug-box1">
            <h4 className="help-login-sug-heading">
              We’re here for youpWe’re here for you
            </h4>
            <p className="help-login-sug-para">
              Log in to get help with your reservations, account, and more.
            </p>
          </div>
          <div className="help-login-sug-div help-login-sug-box2">
            <button type="button" className="help-login-sug-btn">
              Log in or sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuggetion;
