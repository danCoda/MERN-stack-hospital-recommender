export default (state = null, action) => {
    if (action.type === "NEW_USER_NAME") {
        console.log("Neww kid");
        return action.payload;
    }
    console.log("Exiswting");
    return state;
}