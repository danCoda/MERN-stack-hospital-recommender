import { combineReducers } from 'redux';

const illnessReducer = (state = [], action) => {
    if (action.type === "FETCH_ILLNESSES") {
        return action.payload;
    }
    return state;
}

const hospitalsReducer = (state = [], action) => {
    if (action.type === "FETCH_HOSPITALS") {
        return action.payload;
    }
    return state;
}

const userIllnessReducer = (state = 0, action) => {
    if (action.type === "USER_ILLNESS") {
        return action.payload;
    }
    return state;
}

const userNameReducer = (state = null, action) => {
    if (action.type === "NEW_USER_NAME") {
        return action.payload;
    }
    return state;
}

const userPainLevelReducer = (state = null, action) => {
    if (action.type === "USER_PAIN_LEVEL") {
        return action.payload;
    }
    return state;
}

const newUserReducer = (state = null, action) => {
    if (action.type === "NEW_USER_DATA") {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    illnesses: illnessReducer,
    hospitals: hospitalsReducer,
    userName: userNameReducer,
    userIllness: userIllnessReducer,
    userPainLevel: userPainLevelReducer,
    userData: newUserReducer
});