import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setSkills, addSkill, removeSkill } from "../../redux/skillsSlice";
import SaveButton from "../../components/admin/SaveButton";

function SkillsSection() {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.skills.skills);

    const [newSkill, setNewSkill] = useState({
        name: "",
        logo: "",
        description: "",
    });

    const [isAdding, setIsAdding] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // ✅ Fetch skills from backend
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch("/server/api/skills");
                if (!response.ok) throw new Error("Failed to fetch skills.");
                const data = await response.json();
                dispatch(setSkills(data.skills));
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };
        fetchSkills();
    }, [dispatch]);

    // ✅ Handle Input Change (for Name, SVG, and Description)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSkill((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ Handle Adding a New Skill
    const handleAddSkill = async () => {
        if (!newSkill.name.trim() || !newSkill.logo.trim() || !newSkill.description.trim()) {
            alert("All fields are required.");
            return;
        }

        setIsSaving(true);
        const skillWithId = { ...newSkill, id: uuidv4() };

        try {
            const response = await fetch("/server/api/skills/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(skillWithId),
            });

            if (!response.ok) throw new Error("Failed to add skill.");

            dispatch(addSkill(skillWithId));
            setNewSkill({ name: "", logo: "", description: "" });
            setIsAdding(false); // ✅ Close form after saving
        } catch (error) {
            console.error("Error adding skill:", error);
        } finally {
            setIsSaving(false);
        }
    };

    // ✅ Handle Removing a Skill
    const handleRemoveSkill = async (skillId) => {
        try {
            const response = await fetch(`/server/api/skills/delete/${skillId}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete skill.");

            dispatch(removeSkill(skillId));
        } catch (error) {
            console.error("Error deleting skill:", error);
        }
    };

    return (
        <div className="admin-section">
            <h2>Skills</h2>

            {/* Show "Add Skill" Button Initially */}
            {!isAdding && (
                <button className="add-button" onClick={() => setIsAdding(true)}>
                    Add Skill
                </button>
            )}

            {/* Add Skill Form (Only Shown When "Add Skill" is Clicked) */}
            {isAdding && (
                <div className="skill-card add-skill-card">
                    <input
                        type="text"
                        name="name"
                        placeholder="Skill Name"
                        value={newSkill.name}
                        onChange={handleInputChange}
                    />

                    {/* Paste SVG Code */}
                    <textarea
                        name="logo"
                        placeholder="Paste SVG Code Here"
                        value={newSkill.logo}
                        onChange={handleInputChange}
                        rows="4"
                    />

                    <textarea
                        name="description"
                        placeholder="Skill Description"
                        value={newSkill.description}
                        onChange={handleInputChange}
                    />

                    <div className="form-actions">
                        <SaveButton onClick={handleAddSkill} label="Save Skill" isLoading={isSaving} />
                        <button className="cancel-button" onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Display Skills */}
            <div className="skills-list">
                {skills.length === 0 ? (
                    <p>No skills found. Add some!</p>
                ) : (
                    skills.map((skill) => (
                        <div key={skill.id} className="skill-card">
                            <div
                                className="skill-icon"
                                dangerouslySetInnerHTML={{ __html: skill.logo }}
                            />
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>
                            <button onClick={() => handleRemoveSkill(skill.id)} className="skill-remove-button">
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SkillsSection;