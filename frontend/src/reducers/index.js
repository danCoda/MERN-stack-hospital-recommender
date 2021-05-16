import { combineReducers } from 'redux';
import illnessReducer from './illnessReducer';
import userReducer from './userReducer';
import userNameReducer from './userNameReducer';

export default combineReducers({
    illnesses: illnessReducer,
    userData: userReducer,
    userName: userNameReducer
});