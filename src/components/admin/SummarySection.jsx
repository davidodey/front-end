// File: SummarySection.jsx
import React from "react";
import SaveButton from "./SaveButton.jsx";

function SummarySection({ summary, setSummary, onSave }) {
    return (
        <div className="admin-section">
            <h2>Summary</h2>
            <div className="form-group">
                <label>Professional Summary</label>
                <textarea
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
            </div>

            <SaveButton onClick={onSave} label="Save Summary" />
        </div>
    );
}

export default SummarySection;