import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import summaryReducer from './summarySlice';
import experienceReducer from './experienceSlice'; // Import the experience slice

const store = configureStore({
    reducer: {
        user: userReducer,
        summary: summaryReducer, // Add the summary slice
        experience: experienceReducer, // Add the experience slice
    },
});

export default store;