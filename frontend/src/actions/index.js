import backendPlaceholder from '../apis/backendPlaceholder';

export const fetchIllnesses = () => async (dispatch, getState) => {
    const response = await backendPlaceholder.get('/illnesses');

    dispatch({
        type: 'FETCH_ILLNESSES',
        payload: response.data
    });
};

export const addUserData = newUser => async dispatch => {
    const response = await backendPlaceholder.put(newUser);

    dispatch({
        type: 'NEW_USER_DATA',
        payload: response.data
    });
};

export const addUserName = name => {
    console.log("Trying to add new user: ", name);
    return ({
        type: 'NEW_USER_NAME',
        payload: name
    });
};