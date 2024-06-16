// components/layouts/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import "./scss/adminLayout.scss";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSideBar />
      <div className="admin-main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
