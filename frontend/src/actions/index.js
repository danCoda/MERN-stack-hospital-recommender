import backendPlaceholder from '../apis/backendPlaceholder';

export const fetchIllnesses = () => async (dispatch, getState) => {
    const response = await backendPlaceholder.get('/illnesses');
    dispatch({
        type: 'FETCH_ILLNESSES',
        payload: response.data._embedded.illnesses
    });
};

export const fetchHospitals = () => async (dispatch, getState) => {
    const response = await backendPlaceholder.get('/hospitals');
    dispatch({
        type: 'FETCH_HOSPITALS',
        payload: response.data._embedded.hospitals
    });
};

export const fetchUsers = () => async (dispatch, getState) => {
    const response = await backendPlaceholder.get('/users');
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    });
};

export const addUserData = newUser => async dispatch => {
    const response = await backendPlaceholder.post('/users', newUser);
    dispatch({
        type: 'NEW_USER_DATA',
        payload: response.data
    });
};

export const setUserData = user => async dispatch => {
    dispatch({
        type: 'SET_USER_DATA',
        payload: user
    });
};

export const deleteUser = id => async dispatch => {
    const response = await backendPlaceholder.delete(`/users/${id}`);
    dispatch({
        type: 'DELETE_USER',
        payload: response.data
    });
};

export const saveUserName = name => {
    return ({
        type: 'NEW_USER_NAME',
        payload: name
    });
};

export const saveUserIllness = illnessData => {
    return ({
        type: 'USER_ILLNESS',
        payload: illnessData
    });
};

export const saveUserPainLevel = level => {
    return ({
        type: 'USER_PAIN_LEVEL',
        payload: level
    });
};