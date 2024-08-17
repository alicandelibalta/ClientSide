import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../layouts/pages/ErrorPage404";

const EditorGetArticle = lazy(() => import("../roles/editor/components/EditorArticle"));

function EditorRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/editor-article" element={<EditorGetArticle/>} />
        <Route path="*" element={<ErrorPage404/>}/>
      </Routes>
    </Suspense>
  );
}

export default EditorRoutes;
