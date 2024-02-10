import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}></Route>
        <Route path="/visitor/*" element={<VisitorLayout />}></Route>
      </Routes>
    </>
  );
}

export default App();
