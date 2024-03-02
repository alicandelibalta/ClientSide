import React from "react";
import { useNavigate } from 'react-router-dom';

// import { ForgotPassword } from "./ForgotPassword";
import "../scss/login.scss";
import LoginWithEmail from "./LoginWithEmail";

//Burada 2 sayfa döndürücez default olarak önce gmail veya email ile giriş yapmak isteyip istemediğini sorucaz
//Sonra hangisiyle giriş yapacaksa ona yönlendiricez.
//Google ile yaparsa pop up google açılacak
//E-Mail ile yaparsa e-mail passwprd istediğimiz bir sayfaya gidecek.

function Login() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventdefault();
    navigate("/LoginWithEmail")
  };

  return (
    <>
      <div className="container">
        <div className="frame">
          <div className="login-picture">
            <img //Buraya her zaman 800x500 fotoğraf atmalısın.
              src={require("../img/three-elephant-landscape-with-herd-elephants_1048-7804.avif")}
              alt=""
            />
          </div>

          <div className="login-form">
            <div className="context-area">
              <span className="register-now">
                Are you new to WG?<a href="Register">Register now!</a>
              </span>
              <div className="button-area">
                <button className="login-button" type="submit">
                  <img src={require("../img/google-icon-logo-register-login.png")} alt="" />
                  <span>Login with Google</span>
                </button>
                <button className="login-button" type="submit" onClick={handleClick}>
                  <img src={require("../img/gmail-icon-google-logo-email-register-login.png")} alt="" />
                  <span>Login with E-Mail</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
