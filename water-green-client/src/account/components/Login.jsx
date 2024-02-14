import React from "react";
import { ForgotPassword } from "./ForgotPassword";
import "../scss/login.scss";



export const Login = () => {
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

  return (
    <>
      <div className="frame">
        <div className="picture">

        </div>
        <div className="login-form">
            <Form>
                    
            </Form>
        </div>
      </div>
    </>
  );
};
