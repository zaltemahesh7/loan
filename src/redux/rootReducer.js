import { combineReducers } from 'redux';
import userSlice from './user/userSlice';

// Example reducers (replace with your actual reducers)

const rootReducer = combineReducers({
    user: userSlice,
});

export default rootReducer;