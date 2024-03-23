import React, {lazy} from "react";
import { Routes, Route } from "react-router-dom";

const AdminList = lazy(()=> import ('../roles/admin/admin/components/AdminList'))
const AdminCreate = lazy(()=> import ('../roles/admin/admin/components/AdminCreate'))
const AdminUpdate = lazy(()=> import ('../roles/admin/admin/components/AdminUpdate'))

function AdminRoutes () {
    return(
       <Routes>
            <Route exact path="/" element={<AdminList />}/>
            <Route path="Adminlist" element={<AdminList />} />
            <Route path="Admincreate" element={<AdminCreate />} />
            <Route path="Adminupdate/:id" element={<AdminUpdate />} />
       </Routes>
    );
};

export default AdminRoutes;



