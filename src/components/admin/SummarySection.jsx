import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SaveButton from "./SaveButton.jsx";
import { updateSummary, saveSummary } from "../../redux/summarySlice"; // Import Redux actions

function SummarySection() {
    const dispatch = useDispatch();

    // Access summary data and user ID from Redux store
    const { summary, status } = useSelector((state) => state.summary);
    const { profile } = useSelector((state) => state.user);

    // Handle summary text changes
    const handleChange = (value) => {
        dispatch(updateSummary(value)); // Dispatch action to update the summary
    };

    // Handle save button click
    const handleSave = async () => {
        try {
            await dispatch(saveSummary({ userId: profile?.sub, summary })).unwrap(); // Save summary with user ID
            console.log("Summary saved successfully!");
        } catch (error) {
            console.error("Failed to save summary:", error);
        }
    };

    return (
        <div className="admin-section">
            <h2>Summary</h2>
            <div className="form-group">
                <label>Professional Summary</label>
                <textarea
                    rows={4}
                    defaultValue={profile?.summaries?.summary || ""}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>

            {/* SaveButton with loading spinner */}
            <SaveButton
                onClick={handleSave}
                label="Save Summary"
                isLoading={status === "saving"} // Show spinner while saving
            />
        </div>
    );
}

export default SummarySection;