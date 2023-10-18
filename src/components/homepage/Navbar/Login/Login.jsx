import { useState } from "react";
import "./Login.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {};
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="login-overlay">
        <div className="login-content">
          <div className="login-box-close">
            <CloseOutlinedIcon className="login-close-btn" onClick={onClose} />
            <p className="login-Head">
              <strong>Login </strong>
            </p>
            <div></div>
          </div>
          <hr />
          <div className="login-heading">
            <h4 className="login-heading-text">Welcome to Airbnb</h4>
          </div>
          <div className="login-box">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleLoginChange}
              id=""
              placeholder="Email"
              className="login-email login-tab"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleLoginChange}
              id=""
              placeholder="Password"
              className="login-email login-tab"
            />
            <input
              type="submit"
              value="Continue"
              onSubmit={login}
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
            value="Sign up"
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

export default Login;
