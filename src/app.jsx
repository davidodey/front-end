import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './assets/print.css';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice'; // Import the Redux action
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./protectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch(); // Correctly initialize the dispatch function in the component body

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/server/api/public/user?userId=88urSkODGn');
                if (response.ok) {
                    const data = await response.json(); // Parse the response JSON
                    setIsAuthenticated(true);
                    console.log('24', data)
                    // Dispatch the user profile to Redux
                    dispatch(setUser(data.user)); // Assume `data.user` contains the user profile
                } else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [dispatch]); // Include `dispatch` in the dependency array

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                        <Admin />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;