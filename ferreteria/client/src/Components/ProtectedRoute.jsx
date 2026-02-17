import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, rol } = useSelector((state) => state.admin);

  if (!isLoggedIn || rol !== 'admin') {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
