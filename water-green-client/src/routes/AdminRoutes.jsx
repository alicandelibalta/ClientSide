import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../layouts/pages/ErrorPage404";

const UpdateUserById = lazy(() =>
  import("../roles/admin/admin/components/UpdateUserById")
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
const GetUserById = lazy(() =>
  import("../roles/admin/admin/components/GetUserById")
);
const GetArticles = lazy(() =>
  import("../roles/admin/admin/components/GetArticles")
);

function AdminRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/UpdateUserById/:id" element={<UpdateUserById />} />
        <Route path="/CreateArticle" element={<CreateArticle />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/GetUsers" element={<GetUsers />} />
        <Route path="/GetArticles" element={<GetArticles />} />
        <Route path="/GetUserById/:id" element={<GetUserById />} />
        <Route path="*" element={<ErrorPage404/>}/>
      </Routes>
    </Suspense>
  );
}

export default AdminRoutes;
