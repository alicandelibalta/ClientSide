import React from "react";
import { useNavigate } from "react-router-dom";

import ForgotPassword from "./ForgotPassword";

// import { ForgotPassword } from "./ForgotPassword";
import "../scss/loginWithEmail.scss";

function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const directToForgotPassword = () => {
    const forgotPasswordURL = "../ForgotPassword";

    window.location.href = forgotPasswordURL;
    return (
      <>
        <ForgotPassword />
      </>
    );
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventdefault();
    navigate("/LoginWithEmail");
  };

  return (
    <>
      <div className="container">
        <div className="frame">
          <div className="login-picture">
            <img //Buraya her zaman 800x500 fotoğraf atmalısın.
              src={require("../img/black-elephant-selective-focus-shot-magnificent-elephant-captured-sunny-day-with-black-wall.png")}
              alt=""
            />
          </div>

          <div className="register-form">
            <div className="context-area">
              <span className="register-now">
                Are you new to WG?<a href="Register">Register now!</a>
              </span>

              <div className="login-area">
                <input type="text" />
                <input type="text" /> 
                <button className="login-button" > Login </button>
              </div>

              <span className="forgot-password">
                <a href="ForgotPassword">Forgot your Password?</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginWithEmail;
