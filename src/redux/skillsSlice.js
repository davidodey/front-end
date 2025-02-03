import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
    name: "skills",
    initialState: { skills: [] },
    reducers: {
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        addSkill: (state, action) => {
            state.skills.push(action.payload);
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter((skill) => skill.id !== action.payload);
        },
    },
});

export const { setSkills, addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;