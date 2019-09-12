import {CHANGE_FILTER} from "../constants";

const BASE_BTN = "all";

const filtersReducer = (state = BASE_BTN, action) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return action.currentFilter;
        }
        default:
            return state;
    }
}

export default filtersReducer;