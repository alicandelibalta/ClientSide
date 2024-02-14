import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      //Buradan layout veya Route componentlarına gideceğiz. veya tek sayfalara. 

      <Routes>
        
        <Route path="/" element={<Account />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword/*" element={<ResetPassword />} />
        <Route path="/Register/*" element={<Register/>} />
        

        <Route path="/admin/*" element={<AdminLayout />}> // Burada cover layout'u cover yaptık
          <Route path="admin/*" element={<AdminRoutes />} />
          <Route path="article/*" element={<ArticleRoutes />} />
          <Route path="editor/*" element={<EditorRoutes />} />
          <Route path="podcast/*" element={<PodcastRoutes />} />
          <Route path="writer/*" element={<WriterRoutes />} />
        </Route>

        <Route path="/editor/*" element={<EditorLayout />}>
          <Route path="article/*" element={<ArticleRoutes />} />
          <Route path="editor/*" element={<EditorRoutes />} />
          <Route path="writer/*" element={<WriterRoutes />} />
        </Route>

        <Route path="/writer/*" element={<WriterLayout />}>
          <Route path="article/*" element={<ArticleRoutes />} />
          <Route path="editor/*" element={<EditorRoutes />} />
          <Route path="writer/*" element={<WriterRoutes />} />
        </Route>

        <Route path="/guest/*" element={<GuestLayout />}>
          <Route path="article/*" element={<ArticleRoutes />} />
        </Route>



      </Routes>
    </>
  );
}

export default App();
