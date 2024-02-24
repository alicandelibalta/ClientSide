import { Route, Routes } from "react-router-dom";
import Login from "../src/account/components/Login";
// import { lazy } from "react";

// Buradan layout veya Route componentlarına gideceğiz. veya tek sayfalara.
// const Admin = React.lazy(()=> import('./roles/admin'))

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element= {<Login/>} />
      </Routes>
    </>
    //     <>
    //       <Routes>

    //         {/* <Route path="/" element={<Account />} /> */}
    //         <Route path="/Login" element={<Login />} />
    //         {/* <Route path="/ForgotPassword" element={<ForgotPassword />} />
    //         <Route path="/ResetPassword/*" element={<ResetPassword />} />
    //         <Route path="/Register/*" element={<Register/>} /> */}

    // {/*
    //         <Route path="/admin/*" element={<AdminLayout />}>
    //           <Route path="admin/*" element={<AdminRoutes />} />
    //           <Route path="article/*" element={<ArticleRoutes />} />
    //           <Route path="editor/*" element={<EditorRoutes />} />
    //           <Route path="podcast/*" element={<PodcastRoutes />} />
    //           <Route path="writer/*" element={<WriterRoutes />} />
    //         </Route>

    //         <Route path="/editor/*" element={<EditorLayout />}>
    //           <Route path="article/*" element={<ArticleRoutes />} />
    //           <Route path="editor/*" element={<EditorRoutes />} />
    //           <Route path="writer/*" element={<WriterRoutes />} />
    //         </Route>
    //         <Route path="/writer/*" element={<WriterLayout />}>
    //           <Route path="article/*" element={<ArticleRoutes />} />
    //           <Route path="editor/*" element={<EditorRoutes />} />
    //           <Route path="writer/*" element={<WriterRoutes />} />
    //         </Route>
    //         <Route path="/guest/*" element={<GuestLayout />}>
    //           <Route path="article/*" element={<ArticleRoutes />} />
    //         </Route> */}

    //       </Routes>
    //     </>
  );
}

export default App;
