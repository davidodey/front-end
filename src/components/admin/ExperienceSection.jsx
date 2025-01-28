import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SaveButton from "./SaveButton.jsx";
import {
    setCompanies,
    addCompany,
    updateCompanyField,
    saveExperience,
} from "../../redux/experienceSlice";

function ExperienceSection() {
    const dispatch = useDispatch();

    // Grab the Redux state for companies and status
    const { companies, status } = useSelector((state) => state.experience);
    // Grab the profile from user slice (which has existing experiences)
    const { profile } = useSelector((state) => state.user);

    // Local state to track which card is expanded
    const [expandedCompanyId, setExpandedCompanyId] = useState(null);

    // On mount (or when profile changes), set the Redux companies
    // to the existing experiences from the database
    useEffect(() => {
        if (profile?.experiences?.length) {
            dispatch(setCompanies(profile.experiences));
        }
    }, [profile, dispatch]);

    const handleToggleExpand = (companyId) => {
        setExpandedCompanyId((prev) => (prev === companyId ? null : companyId));
    };

    const handleAddCompany = () => {
        dispatch(addCompany());
    };

    const handleFieldChange = (companyId, field, value) => {
        dispatch(updateCompanyField({ companyId, field, value }));
    };

    const handleFileChange = (companyId, file) => {
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(
                updateCompanyField({
                    companyId,
                    field: "logo",
                    value: reader.result, // Base64 for preview
                })
            );
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            if (!profile?.sub || companies.length === 0) {
                console.error("User ID or experiences are missing.");
                return;
            }

            const payload = {
                userId: profile.sub,
                // remove any non-serializable fields like "logoFile"
                experiences: companies.map(({ logoFile, ...rest }) => rest),
            };

            const response = await fetch("/server/api/experience/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to save experience.");
            }

            const data = await response.json();
            console.log("Experience saved successfully:", data);
        } catch (error) {
            console.error("Failed to save experience:", error);
        }
    };

    return (
        <div className="admin-section">
            <h2 className="admin-page-title">Professional Experience (Admin)</h2>

            {/* If there are no companies in Redux, show "Add Company" */}
            {companies.length === 0 && (
                <button onClick={handleAddCompany} className="admin-save-button add-button">
                    Add Company
                </button>
            )}

            {companies.map((company) => (
                <div key={company.id} className="position-item">
                    <div className="card" onClick={() => handleToggleExpand(company.id)}>
                        <div className="logo">
                            {company.logo ? (
                                <img
                                    src={company.logo}
                                    alt={`${company.companyName} Logo`}
                                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                                />
                            ) : (
                                <div style={{ width: "100px", height: "100px", background: "#ccc" }}>
                                    No Logo
                                </div>
                            )}
                        </div>
                        <h2 className="company-header">{company.companyName}</h2>
                        <h3 className="company-header">{company.title}</h3>
                    </div>

                    {/* Expandable detail form */}
                    {expandedCompanyId === company.id && (
                        <div className="card card-detail">
                            <h3 className="company-header">Company Details</h3>
                            <div className="form-group">
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    value={company.title || ""}
                                    onChange={(e) =>
                                        handleFieldChange(company.id, "title", e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    value={company.companyName || ""}
                                    onChange={(e) =>
                                        handleFieldChange(company.id, "companyName", e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={company.startDate || ""}
                                    onChange={(e) =>
                                        handleFieldChange(company.id, "startDate", e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    value={company.present ? "" : company.endDate || ""}
                                    disabled={company.present}
                                    onChange={(e) =>
                                        handleFieldChange(company.id, "endDate", e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={company.present || false}
                                        onChange={(e) =>
                                            handleFieldChange(company.id, "present", e.target.checked)
                                        }
                                    />
                                    Currently Working Here
                                </label>
                            </div>
                            <div className="form-group logo-upload-section">
                                <label>Company Logo</label>
                                <input
                                    id={`logo-upload-${company.id}`}
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => handleFileChange(company.id, e.target.files[0])}
                                />
                                <label htmlFor={`logo-upload-${company.id}`} className="upload-button">
                                    Upload Logo
                                </label>
                            </div>
                            {company.logo && (
                                <div className="logo-preview">
                                    <img
                                        src={company.logo}
                                        alt={`${company.companyName} Logo Preview`}
                                        style={{ width: "100px", height: "100px", objectFit: "contain" }}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}

            {companies.length > 0 && (
                <SaveButton
                    onClick={handleSave}
                    label="Save Experience"
                    isLoading={status === "saving"}
                    className="admin-save-button"
                />
            )}
        </div>
    );
}

export default ExperienceSection;