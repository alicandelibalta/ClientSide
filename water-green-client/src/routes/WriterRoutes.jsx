import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const WriterGetArticle = lazy(() => import("../roles/writer/components/WriterArticle"));

function WriterRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/writer-article" element={<WriterGetArticle/>} />
      </Routes>
    </Suspense>
  );
}

export default WriterRoutes;
