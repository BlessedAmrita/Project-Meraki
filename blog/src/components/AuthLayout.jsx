import {Loader} from "./index"
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function AuthLayout({ children, authentication = true }) {
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  
  // Wait for loginStatus to be properly initialized
  if (loginStatus === undefined) {
    return <Loader />;  // You can create a Loader component to show while waiting
  }
  // If authentication is required but the user isn't logged in, redirect to /login
  if (authentication && !loginStatus) {
    return <Navigate to="/login" />;
  }

  // If authentication is not required but the user is logged in, redirect to home
  if (!authentication && loginStatus) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the children
  return <>{children}</>;
}
