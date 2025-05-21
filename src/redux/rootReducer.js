import { combineReducers } from 'redux';
// import userSlice from './user/userSlice';
import agreementSlice from './user/userSlice';

// Example reducers (replace with your actual reducers)

const rootReducer = combineReducers({
    // user: userSlice,
    agreement: agreementSlice,
});

export default rootReducer;