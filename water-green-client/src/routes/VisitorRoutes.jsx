import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../layouts/pages/ErrorPage404";

const VisitorArticle = lazy(() => import("../roles/visitor/components/VisitorArticle"));


function VisitorRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/visitor-article" element={<VisitorArticle />} />
        <Route path="*" element={<ErrorPage404/>}/>
      </Routes>
    </Suspense>
  );
}

export default VisitorRoutes;
