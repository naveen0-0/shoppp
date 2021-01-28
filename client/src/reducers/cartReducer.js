import { updatingASingleItem } from "../utils/utils";
import { REMOVEITEMFROMCART } from '../utils/utils';

export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case "UPDATECART":
            return action.payload

        case "UPDATEANSINGLEITEM":
            return updatingASingleItem(state, action.payload);

        case "REMOVEITEMFROMCART":
            return REMOVEITEMFROMCART(state, action.payload);


        default:
            return state
    }
}