import React from "react";
import { Outlet } from "react-router-dom";

function VisitorLayout() {
  return (
    <>
      <div>
        <p>burası layout</p>
        <Outlet/>
        <p>burası layout</p>

      </div>
    </>
  );
}

export default VisitorLayout;
