import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children }) {
  const { user } = useAppContext();
  let location = useLocation();

  if (user) {
    return children;
  } else {
    toast.error("Please Login First");
    return (
      <Navigate
        to='/login'
        state={{ from: location }}
        replace
      />
    );
  }
}
