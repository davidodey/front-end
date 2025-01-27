import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to save summary to Firestore
export const saveSummary = createAsyncThunk(
    "summary/saveSummary",
    async ({ userId, summary }, { rejectWithValue }) => {
        try {
            const response = await fetch(`/server/api/summary/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, summary }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Failed to save summary");
            }

            const updatedSummary = await response.json();
            return updatedSummary; // Return the saved summary
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const summarySlice = createSlice({
    name: "summary",
    initialState: {
        summary: "",
        status: "idle", // idle | saving | failed
        error: null,
    },
    reducers: {
        // Update the summary text in the Redux store
        updateSummary: (state, action) => {
            state.summary = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveSummary.pending, (state) => {
                state.status = "saving";
                state.error = null;
            })
            .addCase(saveSummary.fulfilled, (state, action) => {
                state.status = "idle";
                state.summary = action.payload; // Update state with saved summary
            })
            .addCase(saveSummary.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { updateSummary } = summarySlice.actions;
export default summarySlice.reducer;