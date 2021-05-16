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

export const addUserData = newUser => async dispatch => {
    const response = await backendPlaceholder.post('/users', newUser);
    dispatch({
        type: 'NEW_USER_DATA',
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