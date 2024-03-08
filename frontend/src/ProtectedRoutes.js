import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/authContext';
import { useContext } from 'react';
import Layout from './Layout/layout';
const ProtectedRoute = ({ element: Component, path, ...rest }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    )
  }
  return <Navigate to="/login" />
};

export default ProtectedRoute;