import React from "react";
import { Routes, Route} from "react-router-dom";

import "./assets/scss/app.scss";
import AdminLayout from "./layouts/admin-layout/AdminLayout";
import EditorLayout from "./layouts/editor-layout/EditorLayout";
import WriterLayout from "./layouts/writer-layout/WriterLayout";

import MainPage from "./layouts/pages/MainPage";
import ArticlePage from "./layouts/pages/ArticlePage";

import AdminRoutes from "./routes/AdminRoutes";
import EditorRoutes from "./routes/EditorRoutes";
import WriterRoutes from "./routes/WriterRoutes";
import AccountRoutes from "./routes/AccountRoutes";

import ErrorPage_404 from "./layouts/pages/ErrorPage_404";


function App() {
  return (
    <Routes>
      <Route path="/account*" element={<AccountRoutes />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/article" element={<ArticlePage />} />

      <Route path="/writer" element={<WriterLayout />}>
        <Route path="*" element={<WriterRoutes />} />
      </Route> 

      <Route path="/editor" element={<EditorLayout />}>
        <Route path="*" element={<EditorRoutes />} />
      </Route> 

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="*" element={<AdminRoutes />} />
      </Route> 

      <Route path="*" element={<ErrorPage_404/>}/>
   

    </Routes>
  );
}

export default App;

