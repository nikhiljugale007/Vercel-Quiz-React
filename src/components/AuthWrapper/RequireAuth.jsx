import React from "react";
import { Navigate } from "react-router";
// import { useAuthContext } from "../../context/AuthContext";

const RequireAuth = ({ children, from }) => {
  //   const { authState } = useAuthContext();
  return true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: from }} />
  );
};

export { RequireAuth };
