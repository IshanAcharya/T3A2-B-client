import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Define PrivateRoute component to protect routes that require authentication
const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to="/login-register" />;
};

export default PrivateRoute;
