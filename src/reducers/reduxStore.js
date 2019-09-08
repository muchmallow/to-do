import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
    tasksReducer
});

let store = createStore(reducers);

export default store;