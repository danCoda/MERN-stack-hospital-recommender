export default (state = [], action) => {
    if (action.type = "FETCH_ILLNESSES") {
        return action.payload;
    }
    return state;
}