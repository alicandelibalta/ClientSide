import React from "react";

// import { ForgotPassword } from "./ForgotPassword";
import "../scss/login.scss";

//Burada 2 sayfa döndürücez default olarak önce gmail veya email ile giriş yapmak isteyip istemediğini sorucaz
//Sonra hangisiyle giriş yapacaksa ona yönlendiricez.
//Google ile yaparsa pop up google açılacak
//E-Mail ile yaparsa e-mail passwprd istediğimiz bir sayfaya gidecek.

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const directToForgotPassword = () => {
  //   const forgotPasswordURL = "../ForgotPassword";

  //   window.location.href = forgotPasswordURL;
  //   return (
  //     <>
  //       <ForgotPassword />
  //     </>
  //   );
  // };

  // const PasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <>
      <div className="container">
        <div className="frame">
          <div className="login-picture">
            <img
              src={require("../img/black-elephant-selective-focus-shot-magnificent-elephant-captured-sunny-day-with-black-wall.jpg")}
              alt=""
            />
          </div>

          <div className="login-form">
            <div>
            <button className="login-button" type="submit">

            </button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
