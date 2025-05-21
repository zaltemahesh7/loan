import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer
import agreementSlice from './user/userSlice'; // Import your agreement slice

// Example reducer (replace with your actual reducers)

const store = configureStore({
    reducer: {
        agreement: agreementSlice,
    },
});

export default store;