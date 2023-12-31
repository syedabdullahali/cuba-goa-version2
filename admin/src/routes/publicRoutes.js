import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoute() {
  const token = localStorage.getItem("user");
  console.log(token?.authorization);
  if (!token?.authorization) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
export default PublicRoute;
