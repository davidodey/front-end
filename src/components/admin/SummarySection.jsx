import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SaveButton from "./SaveButton.jsx";
import { updateSummary, saveSummary } from "../../redux/summarySlice"; // Import Redux actions

function SummarySection() {
    const dispatch = useDispatch();

    // Access summary data and user ID from Redux store
    const { summary, status } = useSelector((state) => state.summary);
    const { profile } = useSelector((state) => state.user);

    // Optional: pre-fill the Redux summary if `profile.summaries.summary` exists
    useEffect(() => {
        if (profile?.summaries?.summary) {
            dispatch(updateSummary(profile.summaries.summary));
        }
        console.log(summary)
        // Only run this once on mount or whenever profile changes
    }, [profile, dispatch]);

    // Handle summary text changes
    const handleChange = (value) => {
        dispatch(updateSummary(value)); // Dispatch action to update the summary in Redux
    };

    // Handle save button click
    const handleSave = async () => {
        try {
            // We must have a user ID to save
            if (!profile?.sub) {
                console.error("No user ID found in profile.");
                return;
            }

            await dispatch(saveSummary({ userId: profile.sub, summary })).unwrap();
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
                {/* Use `value` to keep the textarea in sync with Redux state */}
                <textarea
                    rows={4}
                    defaultValue={summary}
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