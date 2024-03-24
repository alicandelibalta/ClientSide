import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const VisitorGetArticle = lazy(() => import("../roles/visitor/components/VisitorArticle"));
const VisitorMainPage = lazy(() => import("../roles/visitor/components/VisitorMainPage"));


function AccountRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/visitor-main-page" element={<VisitorMainPage />} />
        <Route path="/visitor-article" element={<VisitorGetArticle />} />
      </Routes>
    </Suspense>
  );
}

export default AccountRoutes;
