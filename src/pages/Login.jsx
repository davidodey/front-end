import React from "react";

function Login() {

    const handleLinkedInLogin = () => {
        window.location.href = 'https://dolphin-app-ufusi.ondigitalocean.app/server/auth/linkedin';
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>
                <button
                    onClick={handleLinkedInLogin}
                    className="login-button"
                >
                    Login with LinkedIn
                </button>
            </div>
        </div>
    );
}

export default Login;