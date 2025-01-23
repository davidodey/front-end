import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isLoading, children, user }) => {
    if (isLoading) {
        return <div>Loading...</div>; // Show a loader while checking authentication
    }
    console.log('8', user)
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    } else if (user?.sub === "88urSkODGn") {
        return children;
    } else {
        // return <Navigate to="/" />;
    }


};

export default ProtectedRoute;