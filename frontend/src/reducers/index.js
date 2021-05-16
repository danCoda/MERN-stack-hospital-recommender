import { combineReducers } from 'redux';
import illnessReducer from './illnessReducer';

export default combineReducers({
    illnesses: illnessReducer
});