import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/scss/app.scss";
// import AdminLayout from "./layouts/admin-layout/AdminLayout";
// import EditorLayout from "./layouts/editor-layout/EditorLAyout";
// import WriterLayout from "./layouts/writer-layout/WriterLayout";
import VisitorLayout from "./layouts/visitor-layout/VisitorLayout";

// import AdminRoutes from "./routes/AdminRoutes";
// import EditorRoutes from "./routes/EditorRoutes";
import VisitorRoutes from "./routes/VisitorRoutes";
// import WriterRoutes from "./routes/WriterRoutes";
import AccountRoutes from "./routes/AccountRoutes";

function App() {
  return (
    <Routes>
      <Route path="/account*" element={<AccountRoutes />} />

      <Route path="*" element={<VisitorLayout />}>
        <Route path="*" element={<VisitorRoutes />} />
      </Route> 
     

   

      {
        //  <AdminLayout>
        //   <Route exact path="/admin" element={<AdminRoutes />} />
        // </AdminLayout>
      }
    </Routes>
  );
}

export default App;
