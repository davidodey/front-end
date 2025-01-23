import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch user profile
export const fetchHomeProfile = createAsyncThunk(
    'user/fetchHomeProfile',
    async (userId) => {
        const response = await fetch(`/server/api/public/user?userId=${userId}`);
        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error || 'Failed to fetch user data');
        }
        return data.user;
    }
);

// Async thunk to save user profile (sync Redux and database)
// Async thunk to save user profile (sync Redux and database)
export const saveUser = createAsyncThunk(
    'user/saveUser',
    async (_, { getState, rejectWithValue }) => {
        const { profile } = getState().user; // Get the user profile from Redux state
        try {
            // Send the current profile to the server
            const response = await fetch(`/server/api/user/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to save user data');
            }

            // Get the updated profile from the server's response
            const updatedProfile = await response.json();
            return updatedProfile; // Return the updated profile to the Redux store
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: null, // Holds user data
        status: 'idle', // idle | loading | saving | error
        error: null, // Holds error messages
    },
    reducers: {
        // Update a specific field in the profile
        updateUser: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
        // Set user profile (used for manual overrides or initialization)
        setUser: (state, action) => {
            state.profile = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle saveUser async thunk
            .addCase(saveUser.pending, (state) => {
                state.status = 'saving';
                state.error = null;
            })
            .addCase(saveUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = action.payload; // Update Redux store with the latest profile
            })
            .addCase(saveUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload || 'Failed to save user data';
            });
    },
});


// Export actions
export const { updateUser, setUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;