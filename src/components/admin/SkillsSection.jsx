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
        yearsOfExperience: 0,
        proficiencyLevel: "Beginner",
        lastUsed: new Date().getFullYear(),
        frequencyOfUse: "Occasionally",
        certifications: 0,
        projects: 0,
        industryImpact: "Low",
    });

    const [isAdding, setIsAdding] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSkill((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="admin-section">
            <h2>Skills</h2>

            {!isAdding && (
                <button className="add-button" onClick={() => setIsAdding(true)}>
                    Add Skill
                </button>
            )}

            {isAdding && (
                <div className="skill-card add-skill-card">
                    <div className="form-group">
                        <label htmlFor="name">Skill Name</label>
                        <input type="text" id="name" name="name" value={newSkill.name} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">Skill Logo (SVG)</label>
                        <textarea id="logo" name="logo" value={newSkill.logo} onChange={handleInputChange} rows="4" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" value={newSkill.description} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="yearsOfExperience">Years of Experience</label>
                        <input type="number" id="yearsOfExperience" name="yearsOfExperience" value={newSkill.yearsOfExperience} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="proficiencyLevel">Proficiency Level</label>
                        <select id="proficiencyLevel" name="proficiencyLevel" value={newSkill.proficiencyLevel} onChange={handleInputChange}>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastUsed">Last Used (Year)</label>
                        <input type="number" id="lastUsed" name="lastUsed" value={newSkill.lastUsed} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="frequencyOfUse">Frequency of Use</label>
                        <select id="frequencyOfUse" name="frequencyOfUse" value={newSkill.frequencyOfUse} onChange={handleInputChange}>
                            <option value="Occasionally">Occasionally</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Daily">Daily</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <SaveButton onClick={() => alert("Saving skill...")} label="Save Skill" isLoading={isSaving} />
                        <button className="cancel-button" onClick={() => setIsAdding(false)}>Cancel</button>
                    </div>
                </div>
            )}

            <div className="skills-list">
                {skills.length === 0 ? (
                    <p>No skills found. Add some!</p>
                ) : (
                    skills.map((skill) => (
                        <div key={skill.id} className="skill-card">
                            <div className="skill-icon" dangerouslySetInnerHTML={{ __html: skill.logo }} />
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>
                            <p className="skill-competency">Competency Score: {skill.competencyScore}</p>
                            <button onClick={() => alert("Removing skill...")} className="skill-remove-button">Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SkillsSection;