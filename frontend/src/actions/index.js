import backendPlaceholder from '../apis/backendPlaceholder';

export const fetchIllnesses = () => async (dispatch, getState) => {
    const response = await backendPlaceholder.get('/illnesses');

    dispatch({
        type: 'FETCH_ILLNESSES',
        payload: response.data
    });
};