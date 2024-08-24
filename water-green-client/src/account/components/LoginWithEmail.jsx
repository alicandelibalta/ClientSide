import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/accountApi";
import "../scss/loginWithEmail.scss";

function LoginWithEmail() {
    const navigate = useNavigate();

    return (
        <div className="login-with-email-container">
            <div className="login-with-email-frame">
                <div className="login-with-email-picture">
                    <img
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
                        // password: Yup.string()
                        //     .min(2, "Must be 2 characters or more")
                        //     .required("Please enter your password")
                        //     .matches(
                        //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$_%^&\.*:;,/-])/,
                        //         "At least one uppercase letter, one lowercase letter, one number, and one special character"
                        //     ),
                    })}
                    onSubmit={async (values, { setSubmitting, setErrors }) => {
                        try {
                            const data = await loginUser(values.email, values.password);
                            localStorage.setItem('token', data.token);
                            navigate('/'); // sonradan profil sayfasına yönlendiricez.

                        } catch (error) {
                            setErrors({ general: 'Invalid email or password' }); 
                        } finally {
                            setSubmitting(false);
                        }
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

                                <span className="login-with-email-errormessage">
                                    <ErrorMessage name="general" />
                                </span>
                                <button
                                    type="submit"
                                    className="login-with-email-button"
                                >
                                    Login
                                </button>
                            </div>

                            <span className="forgot-password">
                                <a href="ForgotPassword">Forgot your Password?</a>
                            </span>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default LoginWithEmail;
