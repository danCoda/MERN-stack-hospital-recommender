export default (state = {}, action) => {
    if (action.type === "NEW_USER_DATA") {
        return action.payload;
    }
    return state;
}