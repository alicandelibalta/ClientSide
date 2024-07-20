import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage_404 from "../layouts/pages/ErrorPage_404";

const GetWriterArticle = lazy(() => import("../roles/writer/components/GetWriterArticle"));

function WriterRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/writer-article" element={<GetWriterArticle/>} />
        <Route path="*" element={<ErrorPage_404/>}/>
      </Routes>
    </Suspense>
  );
}

export default WriterRoutes;
