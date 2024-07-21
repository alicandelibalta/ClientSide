import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage_404 from "../layouts/pages/ErrorPage_404";

const ListWriterArticle = lazy(() => import("../roles/writer/components/ListWriterArticle"));
const GetWriterInfo = lazy(() => import("../roles/writer/components/GetWriterInfo"));
const CreateArticle = lazy(() => import("../roles/writer/components/CreateArticle"));


function WriterRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/writer-article" element={<ListWriterArticle/>} />
        <Route path="/writer-info" element={<GetWriterInfo/>} />
        <Route path="/create-article" element={<CreateArticle/>} />

        <Route path="*" element={<ErrorPage_404/>}/>
      </Routes>
    </Suspense>
  );
}

export default WriterRoutes;
