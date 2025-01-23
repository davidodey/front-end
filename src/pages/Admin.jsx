import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Admin = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false); // State to handle redirection

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/server/admin-data', { credentials: 'include' });
                if (!response.ok) {
                    throw new Error("Failed to fetch user profile.");
                }
                const data = await response.json();

                if (data?.user?.userInfo?.sub !== import.meta.env.VITE_LINKEDIN_ID) {
                    setRedirect(true); // Set redirect state to true
                }
                setUserProfile(data.user.userInfo);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchUserProfile();
    }, []);



    if (redirect) {
        return <Navigate to="/" replace />; // Redirect to the home page
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome, {userProfile.localizedFirstName} {userProfile.localizedLastName}!</p>
            <img src={userProfile.profilePicture} alt="Profile" style={{ borderRadius: '50%' }} />
            <p>Email: {userProfile.email}</p>
            <p>LinkedIn ID: {userProfile.id}</p>
        </div>
    );
};

export default Admin;