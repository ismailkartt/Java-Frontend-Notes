import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        changeTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
