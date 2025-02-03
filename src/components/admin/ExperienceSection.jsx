import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TrashIcon } from "../../components/Icons.jsx"
import SaveButton from "./SaveButton.jsx";
import {
    setCompanies,
    addCompany,
    updateCompanyField,
    saveExperience,
} from "../../redux/experienceSlice";

function ExperienceSection() {
    const dispatch = useDispatch();

    // Grab Redux state for companies and status
    const { companies, status } = useSelector((state) => state.experience);
    const { profile } = useSelector((state) => state.user);

    // Local state for expanded card and "Add Company" mode
    const [expandedCompanyId, setExpandedCompanyId] = useState(null);
    const [addAccomplishment, setAddAccomplishment] = useState(null);
    const [accomplishment, setAccomplishment] = useState([]);
    const [editingAccomplishmentIndex, setEditingAccomplishmentIndex] = useState(null);
    const [isAddingCompany, setIsAddingCompany] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [newCompany, setNewCompany] = useState({
        companyName: "",
        title: "",
        startDate: "",
        endDate: "",
        logo: "",
    });

    // Load existing experiences into Redux
    useEffect(() => {
        if (profile?.experiences?.length) {
            dispatch(setCompanies(profile.experiences));
        }
    }, [profile, dispatch]);

    async function addAccomplishments () {
        // Display an input f
        setAddAccomplishment(true)
    }

    // Toggle which company card is expanded
    const handleToggleExpand = (companyId) => {
        setExpandedCompanyId((prev) => (prev === companyId ? null : companyId));
    };


    const handleFieldChange = (companyId, field, value, index = null) => {
        if (field === "accomplishments") {
            if (index !== null) {
                // Editing an existing accomplishment
                setAccomplishment((prevAccomplishments) => {
                    const updated = [...prevAccomplishments];
                    updated[index] = { desc: value };
                    return updated;
                });

                // Update Redux state immediately
                const updatedCompany = companies.find((c) => c.id === companyId);
                if (updatedCompany) {
                    const updatedAccomplishments = [...updatedCompany.accomplishments];
                    updatedAccomplishments[index] = { desc: value };

                    dispatch(updateCompanyField({
                        companyId,
                        field: "accomplishments",
                        value: updatedAccomplishments,
                    }));
                }
            } else {
                // New accomplishment being added
                setAddAccomplishment({ desc: value });
            }
        } else {
            // Regular field update
            dispatch(updateCompanyField({ companyId, field, value }));
        }
    };




    // Handle file upload for existing companies
    const handleFileChange = (companyId, file) => {
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(
                updateCompanyField({
                    companyId,
                    field: "logo",
                    value: reader.result,
                })
            );
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Handle file upload for new company
    const handleLogoUpload = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setNewCompany((prev) => ({ ...prev, logo: reader.result }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveAccomplishment = async (companyId, index) => {
        try {
            const updatedCompany = companies.find((c) => c.id === companyId);
            if (!updatedCompany) {
                console.error("Company not found.");
                return;
            }

            let updatedAccomplishments = [...updatedCompany.accomplishments];

            // Remove the selected accomplishment
            updatedAccomplishments.splice(index, 1);

            // Ensure Firestore receives a valid array
            updatedAccomplishments = updatedAccomplishments.flat();

            // Update Redux state immediately for UI sync
            dispatch(updateCompanyField({
                companyId,
                field: "accomplishments",
                value: updatedAccomplishments,
            }));

            // Prepare payload for backend
            const payload = {
                userId: profile.sub,
                experiences: [{
                    ...updatedCompany,
                    accomplishments: updatedAccomplishments,
                }],
            };

            // Save changes to backend
            const response = await fetch("/server/api/experience/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to save edited company.");
            }

            console.log("Accomplishment removed successfully.");
        } catch (error) {
            console.error("Error removing accomplishment:", error);
        }
    };

    const handleSaveEdits = async (companyId) => {
        try {
            setIsSaving(true);

            const updatedCompany = companies.find((c) => c.id === companyId);
            if (!updatedCompany) {
                console.error("Company not found.");
                return;
            }

            let updatedAccomplishments = Array.isArray(updatedCompany.accomplishments)
                ? [...updatedCompany.accomplishments]
                : [];

            if (editingAccomplishmentIndex !== null) {
                updatedAccomplishments[editingAccomplishmentIndex] = { desc: accomplishment };
                setEditingAccomplishmentIndex(null);
            } else if (addAccomplishment && addAccomplishment.desc.trim() !== "") {
                updatedAccomplishments.push({ desc: addAccomplishment.desc.trim() });
            }

            updatedAccomplishments = updatedAccomplishments.flat();

            setAddAccomplishment(null);
            setAccomplishment([]);

            const payload = {
                userId: profile.sub,
                experiences: [{
                    ...updatedCompany,
                    accomplishments: updatedAccomplishments,
                }],
            };

            const response = await fetch("/server/api/experience/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to save edited company.");
            }

            console.log("Company edits saved successfully.");

            const updatedResponse = await fetch(`/server/api/public/user?userId=${profile.sub}`);
            if (!updatedResponse.ok) {
                throw new Error("Failed to fetch updated experiences.");
            }
            const updatedData = await updatedResponse.json();

            dispatch(setCompanies(updatedData.user.experiences));

            setExpandedCompanyId(null);
        } catch (error) {
            console.error("Failed to save edits:", error);
        } finally {
            setIsSaving(false);
        }
    };

    // Delete a company from the backend & Redux
    const handleDeleteExperience = async (companyId) => {
        try {
            if (!profile?.sub) {
                console.error("No user ID found in profile.");
                return;
            }

            // Call backend to delete
            const response = await fetch("/server/api/experience/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: profile.sub,
                    experienceId: companyId,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete the experience.");
            }

            console.log("Experience deleted successfully!");

            // Update Redux to remove the deleted experience
            const updatedCompanies = companies.filter((c) => c.id !== companyId);
            dispatch(setCompanies(updatedCompanies));

        } catch (error) {
            console.error("Failed to delete experience:", error);
        }
    };

    // Save entire experiences array (if needed)
    const handleSave = async () => {
        try {
            if (!profile?.sub || companies.length === 0) {
                console.error("User ID or experiences are missing.");
                return;
            }

            const payload = {
                userId: profile.sub,
                // Exclude any non-serializable fields
                experiences: companies.map(({ logoFile, ...rest }) => rest),
            };

            const response = await fetch("/server/api/experience/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to save experiences.");
            }

            const data = await response.json();
            console.log("All experiences saved successfully:", data);
        } catch (error) {
            console.error("Failed to save experiences:", error);
        }
    };

    // Add a new empty company
    const handleAddCompanyClick = () => {
        setIsAddingCompany(true);
    };

    // Save new company to backend & Redux
    const handleSaveNewCompany = async () => {
        try {
            const newCompanyWithId = {
                ...newCompany,
                id: Date.now().toString(),
            };

            // Add to Redux
            dispatch(addCompany(newCompanyWithId));

            // Save only the new company to the backend
            const payload = {
                userId: profile.sub,
                experiences: [newCompanyWithId],
            };

            const response = await fetch("/server/api/experience/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to save the new company.");
            }

            console.log("New company saved successfully!");

            // Refetch the updated experiences from the backend
            const updatedResponse = await fetch(`/server/api/public/user?userId=${profile.sub}`);
            if (!updatedResponse.ok) {
                throw new Error("Failed to fetch updated experiences.");
            }
            const updatedData = await updatedResponse.json();

            // Update Redux with the latest experiences
            dispatch(setCompanies(updatedData.user.experiences));

            // Reset form and close "Add Company"
            setIsAddingCompany(false);
            setNewCompany({
                companyName: "",
                title: "",
                startDate: "",
                endDate: "",
                logo: "",
            });
        } catch (error) {
            console.error("Failed to save the new company:", error);
        }
    };

    // Cancel "Add Company"
    const handleCancelAddCompany = () => {
        setIsAddingCompany(false);
        setNewCompany({
            companyName: "",
            title: "",
            startDate: "",
            endDate: "",
            logo: "",
        });
    };
    console.log('250', companies)
    return (
        <div className="admin-section">
            <h2 className="admin-page-title">Professional Experience (Admin)</h2>

            {/* Display existing companies if not in "Add Company" mode */}
            {!isAddingCompany &&
                companies?.map((company) => (
                    <div key={company.id} className="position-item">
                        {/* Card Header */}
                        <div
                            className="card company-card"
                            onClick={() => handleToggleExpand(company.id)}
                        >
                            <div className="card-logo">
                                {company.logo ? (
                                    <img
                                        src={company.logo}
                                        alt={`${company.companyName} Logo`}
                                        className="logo-img"
                                    />
                                ) : (
                                    <div className="no-logo">No Logo</div>
                                )}
                            </div>
                            <div className="card-content">
                                <h2 className="company-header">{company.companyName}</h2>
                                <h3 className="company-title">{company.title}</h3>
                            </div>
                            {/* Delete Button */}
                            <button
                                className="danger-button"
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent toggling expand
                                    handleDeleteExperience(company.id);
                                }}
                            >
                                Delete
                            </button>
                        </div>

                        {/* Expandable Form */}
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
                                            handleFieldChange(
                                                company.id,
                                                "companyName",
                                                e.target.value
                                            )
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
                                    <label style={{display:'flex', alignItems: 'center'}}>
                                        <input
                                            style={{marginRight: '10px'}}
                                            type="checkbox"
                                            checked={company.present || false}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    company.id,
                                                    "present",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        Currently Working Here
                                    </label>
                                </div>
                                {company.accomplishments?.length > 0 ?
                                    company.accomplishments.map((accomplishment, index) => (
                                        <div key={index} className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="text"
                                                value={editingAccomplishmentIndex === index ? accomplishment.desc : company.accomplishments[index].desc}
                                                onChange={(e) => handleFieldChange(company.id, "accomplishments", e.target.value, index)}
                                                onFocus={() => setEditingAccomplishmentIndex(index)}
                                                style={{ flex: 1 }}
                                            />
                                            {/* Delete Accomplishment Button */}
                                            <button
                                                onClick={() => handleRemoveAccomplishment(company.id, index)}
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    marginLeft: "10px",
                                                    padding: "5px",
                                                }}
                                                title="Remove Accomplishment"
                                            >
                                                <TrashIcon size={20} color="#ff4d4f" />
                                            </button>
                                        </div>
                                    )) :
                                    addAccomplishment ? null : <p>Please add an accomplishment!</p>
                                }
                                {
                                    addAccomplishment ?
                                        <div className="form-group">
                                            <label>Accomplishment</label>
                                            <input
                                                type="text"
                                                onChange={(e) =>
                                                    handleFieldChange(
                                                        company.id,
                                                        "accomplishments",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        : null
                                }
                                <div className="form-group" style={{display:'flex', alignItems: 'center', marginTop:'24px'}}>
                                    <div className="form-actions">
                                        <SaveButton
                                            onClick={() => handleSaveEdits(company.id)}
                                            label="Save Edits"
                                            isLoading={isSaving}
                                        />
                                    </div>



                                    <div className="form-actions" style={{marginLeft:'12px',marginTop: '2rem'}}>
                                        <button
                                            className="add-button"
                                            onClick={() => addAccomplishments(company.id)}
                                        >
                                            Add Accomplishments
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                ))}

            {/* "Add Company" Button (only visible if no card is expanded) */}
            {!isAddingCompany && expandedCompanyId === null && (
                <button className="add-button" onClick={handleAddCompanyClick}>
                    Add Company
                </button>
            )}

            {/* "Add Company" Form */}
            {isAddingCompany && (
                <div className="add-company-form">
                    <h3>Add New Company</h3>

                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            value={newCompany.companyName}
                            onChange={(e) =>
                                setNewCompany({ ...newCompany, companyName: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            type="text"
                            value={newCompany.title}
                            onChange={(e) =>
                                setNewCompany({ ...newCompany, title: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Start Date</label>
                        <input
                            type="date"
                            value={newCompany.startDate}
                            onChange={(e) =>
                                setNewCompany({ ...newCompany, startDate: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>End Date</label>
                        <input
                            type="date"
                            value={newCompany.endDate}
                            onChange={(e) =>
                                setNewCompany({ ...newCompany, endDate: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-group logo-upload-section">
                        <label>Company Logo</label>
                        <input
                            id="new-company-logo-upload"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={(e) => handleLogoUpload(e.target.files[0])}
                        />
                        <label
                            htmlFor="new-company-logo-upload"
                            className="upload-button"
                        >
                            Upload Logo
                        </label>
                        {newCompany.logo && (
                            <div className="logo-preview">
                                <img
                                    src={newCompany.logo}
                                    alt="Preview"
                                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="form-actions">
                        <button className="add-button" onClick={handleSaveNewCompany}>
                            Save
                        </button>
                        <button className="danger-button" onClick={handleCancelAddCompany}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ExperienceSection;