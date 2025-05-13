import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer

// Example reducer (replace with your actual reducers)

const store = configureStore({
    reducer: rootReducer,
});

export default store;