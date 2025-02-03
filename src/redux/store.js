import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import summaryReducer from './summarySlice';
import experienceReducer from './experienceSlice';
import skillsReducer from './skillsSlice'; // ✅ Import the skills slice

const store = configureStore({
    reducer: {
        user: userReducer,
        summary: summaryReducer,
        experience: experienceReducer,
        skills: skillsReducer, // ✅ Add the skills slice
    },
});

export default store;