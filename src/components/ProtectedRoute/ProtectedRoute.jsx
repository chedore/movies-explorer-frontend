import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";


import { CurrentLoggedInContext } from "../../contexts/CurrentLoggedContext";


const ProtectedRoute = ({ element: Component, ...props  }) => {
  const loggedIn = useContext(CurrentLoggedInContext);
  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
)}

export default ProtectedRoute;