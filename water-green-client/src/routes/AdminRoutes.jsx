import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminList from "../roles/admin/admin/components/AdminList";
import AdminCreate from "../roles/admin/admin/components/AdminCreate";
import AdminUpdate from "../roles/admin/admin/components/AdminUpdate";


const AdminRoutes = ()=>{
    return(
       <Routes>
            <Route exact path="/" element={<AdminList />}/>
            <Route path="/adminlist" element={<AdminList />} />
            <Route path="admincreate" element={<AdminCreate />} />
            <Route path="adminupdate/:id" element={<AdminUpdate />} />
       </Routes>
    );
};

export default AdminRoutes;