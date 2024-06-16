import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const AdminList = lazy(() =>
  import("../roles/admin/admin/components/AdminList")
);
const AdminCreate = lazy(() =>
  import("../roles/admin/admin/components/AdminCreate")
);
const AdminUpdate = lazy(() =>
  import("../roles/admin/admin/components/AdminUpdate")
);
const CreateArticle = lazy(() =>
  import("../roles/admin/admin/components/CreateArticle")
);
const CreateUser = lazy(() =>
  import("../roles/admin/admin/components/CreateUser")
);
const GetUsers = lazy(() =>
  import("../roles/admin/admin/components/GetUsers")
);

function AdminRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/Adminlist" element={<AdminList />} />
        <Route path="/Admincreate" element={<AdminCreate />} />
        <Route path="/Adminupdate/:id" element={<AdminUpdate />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/GetUsers" element={<GetUsers />} />
      </Routes>
    </Suspense>
  );
}

export default AdminRoutes;
