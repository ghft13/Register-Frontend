import React from "react";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Applayout;
