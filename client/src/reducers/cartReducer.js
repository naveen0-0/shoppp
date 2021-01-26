export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case "UPDATECART":
            return action.payload
        default:
            return state
    }
}