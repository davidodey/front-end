import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './assets/styles.css';

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./protectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/admin-data', { credentials: 'include' });
                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                console.error("Error checking authentication:", err);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Admin />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;