import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SaveButton from "./SaveButton.jsx";
import { updateUser, saveUser } from "../../redux/userSlice";

function ContactSection() {
    const dispatch = useDispatch();

    // Access user data and status from Redux store
    const { profile, status } = useSelector((state) => state.user);

    // Handle input changes and dispatch updates to Redux
    const handleChange = (field, value) => {
        dispatch(updateUser({ [field]: value })); // Dispatch action to update the profile
    };

    // Handle save button click
    const handleSave = async () => {
        try {
            await dispatch(saveUser()).unwrap(); // Dispatch action to save the profile (e.g., API call)
            console.log("Profile saved successfully!");
        } catch (error) {
            console.error("Failed to save profile:", error);
        }
    };

    return (
        <div className="admin-section">
            <h2>Contact Info</h2>

            {/* Fields */}
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={profile?.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Job Title</label>
                <input
                    type="text"
                    value={profile?.jobTitle || ""}
                    onChange={(e) => handleChange("jobTitle", e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input
                    type="text"
                    value={profile?.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="text"
                    value={profile?.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>GitHub</label>
                <input
                    type="text"
                    value={profile?.github || ""}
                    onChange={(e) => handleChange("github", e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Location</label>
                <input
                    type="text"
                    value={profile?.location || ""}
                    onChange={(e) => handleChange("location", e.target.value)}
                />
            </div>

            {/* SaveButton with Loading Spinner */}
            <SaveButton
                onClick={handleSave}
                label="Save Contact Info"
                isLoading={status === "saving"} // Show spinner when saving
            />
        </div>
    );
}

export default ContactSection;