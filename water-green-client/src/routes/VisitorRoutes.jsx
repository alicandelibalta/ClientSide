import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const VisitorArticle = lazy(() => import("../roles/visitor/components/VisitorArticle"));


function VisitorRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/visitor-article" element={<VisitorArticle />} />
      </Routes>
    </Suspense>
  );
}

export default VisitorRoutes;
