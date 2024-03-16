import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../scss/register.scss";

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-frame">
          <div className="register-picture">
            <img //Buraya her zaman 800x500 fotoğraf atmalısın.
              src={require("../img/man-walking-top-dune-desert.png")}
              alt=""
            />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              surname: "",
              country: "",
              city: "",
              birthday: "",
              gender: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
              name: Yup.string().required("Please enter your name"),
              surname: Yup.string().required("Please enter your surname"),
              country: Yup.string().required("Please enter your country"),
              city: Yup.string().required("Please enter your city"),
              birthday: Yup.date().required("Please enter your birthday"),
              gender: Yup.string().required("Please enter your gender"),

            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="register-form">
              <div className="register-context-area">
                <div className="register-area">
                  <span className="register-errormessage">
                    <ErrorMessage name="name" />
                  </span>
                  <Field
                    name="name"
                    type="name"
                    className="login-input"
                    placeholder="name"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="surname"/>
                  </span>
                  <Field
                    name="surname"
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
                    <ErrorMessage name="country" />
                  </span>
                  <Field
                    name="country"
                    type="text"
                    className="login-input"
                    placeholder="country"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="city" />
                  </span>
                  <Field
                    name="city"
                    type="text"
                    className="login-input"
                    placeholder="city"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="birthday" />
                  </span>
                  <Field
                    name="birthday"
                    type="date"
                    className="login-input"
                    placeholder="birthday"
                  />

                  <span className="register-errormessage">
                    <ErrorMessage name="gender" />
                  </span>
                  <Field
                    name="gender"
                 
                    as="select"
                    className="login-input"
                    placeholder="gender"
                  >
                    <option value=""></option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="none">who ask?</option>
                  </Field>

                  <button className="register-button"> Register </button>
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
