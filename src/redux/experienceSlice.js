import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to save experience data to the database
export const saveExperience = createAsyncThunk(
    "experience/saveExperience",
    async (experience, { rejectWithValue }) => {
        try {
            const response = await fetch(`/server/api/experience/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ experience }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to save experience");
            }

            const updatedExperience = await response.json();
            return updatedExperience; // Return the saved experience data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const experienceSlice = createSlice({
    name: "experience",
    initialState: {
        companies: [], // Array of company objects
        status: "idle", // idle | saving | failed
        error: null,
    },
    reducers: {
        // Add a new company
        addCompany: (state) => {
            state.companies.push({
                id: Date.now().toString(),
                title: "",
                companyName: "",
                tenure: "",
                accomplishments: [],
                isVisible: true,
                logo: null, // New field for storing the uploaded logo
            });
        },
        // Remove a company
        removeCompany: (state, action) => {
            state.companies = state.companies.filter(
                (company) => company.id !== action.payload
            );
        },
        // Toggle the visibility of a company
        toggleCompanyVisibility: (state, action) => {
            const company = state.companies.find(
                (company) => company.id === action.payload
            );
            if (company) company.isVisible = !company.isVisible;
        },
        // Update a specific field of a company
        updateCompanyField: (state, action) => {
            const { companyId, field, value } = action.payload;
            const company = state.companies.find((c) => c.id === companyId);
            if (company) company[field] = value;
        },
        // Add a new accomplishment to a company
        addAccomplishment: (state, action) => {
            const company = state.companies.find(
                (company) => company.id === action.payload
            );
            if (company) company.accomplishments.push("");
        },
        // Remove an accomplishment from a company
        removeAccomplishment: (state, action) => {
            const { companyId, index } = action.payload;
            const company = state.companies.find(
                (company) => company.id === companyId
            );
            if (company) company.accomplishments.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveExperience.pending, (state) => {
                state.status = "saving";
                state.error = null;
            })
            .addCase(saveExperience.fulfilled, (state, action) => {
                state.status = "idle";
                state.companies = action.payload; // Update state with saved data
            })
            .addCase(saveExperience.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const {
    addCompany,
    removeCompany,
    toggleCompanyVisibility,
    updateCompanyField,
    addAccomplishment,
    removeAccomplishment,
} = experienceSlice.actions;
export default experienceSlice.reducer;