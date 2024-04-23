import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const EditorGetArticle = lazy(() => import("../roles/editor/components/EditorArticle"));

function EditorRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/editor-article" element={<EditorGetArticle/>} />
      </Routes>
    </Suspense>
  );
}

export default EditorRoutes;
