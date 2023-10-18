import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Signup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSignup = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:4000/signup", user)
        .then((res) => console.log(res));
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <div className="login-overlay">
        <div className="signup-content">
          <div className="login-box-close">
            <CloseOutlinedIcon className="login-close-btn" onClick={onClose} />
            <p className="login-Head">
              <strong>Sign up</strong>
            </p>
            <div></div>
          </div>
          <hr />
          <div className="login-heading">
            <h4 className="login-heading-text">Welcome to Airbnb</h4>
          </div>
          <div className="login-box">
            <input
              type="name"
              name="name"
              value={user.name}
              onChange={handleSignupChange}
              placeholder="Full name"
              className="login-email login-tab"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleSignupChange}
              placeholder="Email"
              className="login-email login-tab"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleSignupChange}
              placeholder="Password"
              className="login-email login-tab"
            />
            <input
              type="password"
              name="reEnterPassword"
              value={user.reEnterPassword}
              onChange={handleSignupChange}
              placeholder="Re-Password"
              className="login-email login-tab"
            />

            <input
              type="submit"
              value="signup"
              onClick={handleSignup}
              className="login-box-submit login-tab"
            />
          </div>
          <div className="hr-line">
            <hr className="hr-width" />
            <p className="hr-or">or</p>
            <hr className="hr-width" />
          </div>
          <input
            type="submit"
            value="Log in"
            className=" login-box-submit login-tab login-signup"
          />
          <div className="login-fb hr-line login-email login-tab">
            <FacebookIcon className="login-way-heading-fb" />
            <h6 className="">Continue with Facebook</h6>
            <div className=""></div>
          </div>
          <div className="login-google hr-line login-email login-tab">
            <GoogleIcon className="login-way-heading-fb" />
            <h6 className="login-way-heading">Continue with Google</h6>
            <div className=""></div>
          </div>
          <div className="login-apple hr-line login-email login-tab">
            <AppleIcon className="login-way-heading-fb" />
            <h6 className="login-way-heading">Continue with Apple</h6>
            <div className=""></div>
          </div>
          <div className="login-mail hr-line login-email login-tab">
            <MailOutlinedIcon className="login-way-heading-fb" />
            <h6 className="login-way-heading">Continue with email</h6>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
