import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutesLayout() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return <Navigate to={"/log-in"} replace />;

  return <Outlet />;
}

export default PrivateRoutesLayout;
