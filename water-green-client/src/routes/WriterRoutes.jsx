import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const WriterArticle = lazy(() => import("../roles/writer/components/WriterArticle"));

function WriterRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/writer-article" element={<WriterArticle/>} />
      </Routes>
    </Suspense>
  );
}

export default WriterRoutes;
