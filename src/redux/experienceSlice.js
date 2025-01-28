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
        // NEW REDUCER: set (or replace) the companies array
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },

        // Add a new blank company
        addCompany: (state) => {
            state.companies.push({
                id: Date.now().toString(),
                title: "",
                companyName: "",
                tenure: "",
                accomplishments: [],
                isVisible: true,
                logo: null, // for storing an uploaded logo
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
                (c) => c.id === action.payload
            );
            if (company) {
                company.isVisible = !company.isVisible;
            }
        },
        // Update a specific field of a company
        updateCompanyField: (state, action) => {
            const { companyId, field, value } = action.payload;
            const company = state.companies.find((c) => c.id === companyId);
            if (company) {
                company[field] = value;
            }
        },
        // Add an empty accomplishment
        addAccomplishment: (state, action) => {
            const company = state.companies.find(
                (c) => c.id === action.payload
            );
            if (company) {
                company.accomplishments.push("");
            }
        },
        // Remove an accomplishment
        removeAccomplishment: (state, action) => {
            const { companyId, index } = action.payload;
            const company = state.companies.find(
                (c) => c.id === companyId
            );
            if (company) {
                company.accomplishments.splice(index, 1);
            }
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
                // If the API returns the updated list of experiences,
                // set them here:
                state.companies = action.payload;
            })
            .addCase(saveExperience.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// Export the reducer and actions
export const {
    setCompanies,         // Make sure to export this
    addCompany,
    removeCompany,
    toggleCompanyVisibility,
    updateCompanyField,
    addAccomplishment,
    removeAccomplishment,
} = experienceSlice.actions;

export default experienceSlice.reducer;