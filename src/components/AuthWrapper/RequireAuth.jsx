import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const RequireAuth = ({ children, from }) => {
  const { isLoggedIn } = useSelector((store) => store.authSlice);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: from }} />
  );
};

export { RequireAuth };
