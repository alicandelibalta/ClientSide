import React, { lazy }from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(()=> import ('../account/components/Login'))
const LoginWithEmail = lazy(()=> import ('../account/components/LoginWithEmail'))
const Register = lazy(()=> import ('../account/components/Register'))

function AccountRoutes () {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/loginwithemail" element={<LoginWithEmail />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
};

export default AccountRoutes;
