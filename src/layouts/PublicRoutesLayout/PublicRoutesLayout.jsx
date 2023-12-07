import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutesLayout() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) return <Navigate to={"/"} replace />;

  return <Outlet />;
}

export default PublicRoutesLayout;
