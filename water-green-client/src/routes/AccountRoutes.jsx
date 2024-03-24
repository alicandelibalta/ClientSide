import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

// import Login from "../account/components/Login";
// import LoginWithEmail from "../account/components/LoginWithEmail";
// import Register from "../account/components/Register";

const Login = lazy(() => import("../account/components/Login"));
const LoginWithEmail = lazy(() =>
  import("../account/components/LoginWithEmail")
);
const Register = lazy(() => import("../account/components/Register"));

function AccountRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login-with-email" element={<LoginWithEmail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default AccountRoutes;
