import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../api/accountApi"; 

import "../scss/register.scss";

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-frame">
          <div className="register-picture">
            <img 
              src={require("../img/man-walking-top-dune-desert.png")}
              alt=""
            />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirm: "",
              firstName: "",
              lastName: ""
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
              firstName: Yup.string().required("Please enter your name"),
              lastName: Yup.string().required("Please enter your surname"),
              password: Yup.string().required("Please enter your password"),
              passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Please confirm your password')
            })}
            onSubmit={registerUser}  
          >
            <Form className="register-form">
              <div className="register-context-area">
                <div className="register-area">
                  <span className="register-errormessage">
                    <ErrorMessage name="firstName" />
                  </span>
                  <Field
                    name="firstName"
                    type="text"
                    className="login-input"
                    placeholder="name"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="lastName" />
                  </span>
                  <Field
                    name="lastName"
                    type="text"
                    className="login-input"
                    placeholder="surname"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="email" />
                  </span>
                  <Field
                    name="email"
                    type="email"
                    className="login-input"
                    placeholder="e-mail"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="password" />
                  </span>
                  <Field
                    name="password"
                    type="password"
                    className="login-input"
                    placeholder="password"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="passwordConfirm" />
                  </span>
                  <Field
                    name="passwordConfirm"
                    type="password"
                    className="login-input"
                    placeholder="confirm password"
                  />

                  <button className="register-button" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Register;
