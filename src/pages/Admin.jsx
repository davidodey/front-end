import React, { useEffect, useState } from "react";

const Admin = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/admin-data', { credentials: 'include' });
                if (!response.ok) {
                    throw new Error("Failed to fetch user profile.");
                }
                const data = await response.json();
                setUserProfile(data.user.userInfo);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserProfile();
    }, []);

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