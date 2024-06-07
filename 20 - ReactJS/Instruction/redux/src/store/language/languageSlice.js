import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        value: "tr",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
