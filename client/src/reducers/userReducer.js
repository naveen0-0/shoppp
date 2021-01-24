export const userReducer = (state = {
    username: "",
    email: "",
    loggedIn: false
}, action) => {
    switch (action.type) {
        case "LOGGEDIN":
            return action.payload
        default:
            return state
    }
}