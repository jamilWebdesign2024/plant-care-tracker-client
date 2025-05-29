import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
