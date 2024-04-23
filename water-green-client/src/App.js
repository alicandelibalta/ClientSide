import React from "react";
import { Routes, Route} from "react-router-dom";

import "./assets/scss/app.scss";
// import AdminLayout from "./layouts/admin-layout/AdminLayout";
import EditorLayout from "./layouts/editor-layout/EditorLayout";
import WriterLayout from "./layouts/writer-layout/WriterLayout";
import VisitorLayout from "./layouts/visitor-layout/VisitorLayout";

import MainPage from "./layouts/pages/MainPage";

// import AdminRoutes from "./routes/AdminRoutes";
import EditorRoutes from "./routes/EditorRoutes";
import VisitorRoutes from "./routes/VisitorRoutes";
import WriterRoutes from "./routes/WriterRoutes";
import AccountRoutes from "./routes/AccountRoutes";

import ErrorPage_404 from "./layouts/pages/ErrorPage_404";


function App() {
  return (
    <Routes>
      <Route path="/account*" element={<AccountRoutes />} />
      <Route path="/" element={<MainPage />} />


      <Route path="/writer" element={<WriterLayout />}>
        <Route path="*" element={<WriterRoutes />} />
      </Route> 

      <Route path="/editor" element={<EditorLayout />}>
        <Route path="*" element={<EditorRoutes />} />
      </Route> 

      <Route path="/visitor" element={<VisitorLayout />}>
        <Route path="*" element={<VisitorRoutes />} />
      </Route> 

      {/* <Route path="*">
        <Route path="/404-Not-Found" element={<ErrorPage_404/>}/>
      </Route> */}

    </Routes>
  );
}

export default App;
