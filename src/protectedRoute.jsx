import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isLoading, children }) => {
    if (isLoading) {
        return <div>Loading...</div>; // Show a loader while checking authentication
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;