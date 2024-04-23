import React from "react";
import { Outlet } from "react-router-dom";

function VisitorLayout() {
  return (
    <>
      <div>
        <p>burası visitor layout</p>
        <Outlet/>
        <p>burası visitor layout</p>

      </div>
    </>
  );
}

export default VisitorLayout;
