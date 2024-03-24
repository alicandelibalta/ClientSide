import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ForgotPassword from "./ForgotPassword";

// import { ForgotPassword } from "./ForgotPassword";
import "../scss/loginWithEmail.scss";
import { useState } from "react";

function LoginWithEmail() {

  return (
    <>
      <div className="login-with-email-container">
        <div className="login-with-email-frame">
          <div className="login-with-email-picture">
            <img //Buraya her zaman 800x500 fotoğraf atmalısın.
              src={require("../img/black-elephant-selective-focus-shot-magnificent-elephant-captured-sunny-day-with-black-wall.png")}
              alt=""
            />
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
              password: Yup.string()
                .min(8, "Must be 8 characters or more")
                .required("Please enter your password")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$_%^&\.*:;,/-])/,
                  "At Least One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="login-with-email-form">
              <div className="login-with-email-context-area">
                <span className="register-now">
                  Are you new to WG?<a href="/account/register">Register now!</a>
                </span>

                <div className="login-with-email-area">
                  <span className="login-with-email-errormessage">
                    <ErrorMessage name="email" />
                  </span>
                  <Field
                    name="email"
                    type="email"
                    className="login-input"
                    placeholder="e-mail"
                  />

                  <span className="login-with-email-errormessage">
                    <ErrorMessage name="password" />
                  </span>
                  <Field
                    name="password"
                    type="password"
                    className="login-input"
                    placeholder="password"
                  />
             

                  <button className="login-with-email-button"> Login </button>
                </div>

                <span className="forgot-password">
                  <a href="ForgotPassword">Forgot your Password?</a>
                </span>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginWithEmail;

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

// const navigate = useNavigate();

// const handleClick = () => {
//   // e.preventdefault();
//   navigate("/LoginWithEmail");
// };
