import React, { ReactElement } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

interface PrivateRouteProps {
    element: ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps & RouteProps) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute;
