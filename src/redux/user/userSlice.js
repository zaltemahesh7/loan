import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {
        date: new Date().toISOString().split("T")[0],
    }, // Initial state for user information
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload; // Set the entire user info object
        },
        updateUserField: (state, action) => {
            const { field, value } = action.payload;
            state.userInfo[field] = value; // Update a specific field in user info
        },
    },
});

export const { setUserInfo, updateUserField } = userSlice.actions;

export default userSlice.reducer;